import connect from '@vkontakte/vkui-connect'
import * as Crypto from "crypto"

enum VKRequest {
    INIT         = 'VKWebAppInit',
    GET_EMAIL    = 'VKWebAppGetEmail',
    PAY_TO_GROUP = 'VKWebAppOpenPayForm'
}

enum VKRequestAnswers {
    GET_EMAIL_SUCCESS    = 'VKWebAppGetEmailResult',
    GET_EMAIL_FAIL       = 'VKWebAppGetEmailFailed',
    PAY_TO_GROUP_SUCCESS = 'VKWebAppOpenPayFormResult',
    PAY_TO_GROUP_FAIL    = 'VKWebAppOpenPayFormFailed',
    FAIL                 = 'EventNameFailed'
}

export default class VKConnection {
    private static _appSecureKey : string  = '708CwWqxf6MzsUHuWyLe';
    private static _appServiceKey : string = '4fc061164fc061164fc06116b44fa6956444fc04fc06116142668b3bedafc451b287db4';
    private static _test_app_id : number   = 6747250;
    private static _test_group_id : number = 173750664;

    // @ts-ignore
    private static _SendErrorMsg(errorJSON, funcFAIL : (error : string) => void) {
        switch (errorJSON.error_type) {
            case "client_error":
            case "auth_error":
                funcFAIL(errorJSON.error_data.error_reason);
                break;
            case "api_error":
                funcFAIL(errorJSON.error_data.error_msg);
                break;
        }
    }

    static Init(funcFAIL : (error : string) => void) {
        connect.send(VKRequest.INIT);

        // @ts-ignore
        connect.subscribe((e) => {
            let result = JSON.parse(e.detail.data);
            switch (e.detail.type) {
                case VKRequestAnswers.FAIL:
                    this._SendErrorMsg(result, funcFAIL);
                    break;

                default:
                    break;
            }
        });
    }

    static GetEmail(funcOK : (email : string) => void, funcFAIL : (error : string) => void) {
        // @ts-ignore
        connect.subscribe((e) => {
            let result = JSON.parse(e.detail.data);

            if (e.detail.type == VKRequestAnswers.GET_EMAIL_SUCCESS) {
                let sign : string = result.sign;
                let email : string = result.email;

                // check to correct sign
                let hash = Crypto.createHash("sha256");
                let trueSign = (this._test_app_id + this._appSecureKey + "email" + email);
                hash.update(trueSign);
                trueSign = new Buffer(trueSign, 'base64').toString();

                if (sign == trueSign) {
                    // email correct, go function takes it.
                    funcOK(email);
                }
            }

            if (e.detail.type == VKRequestAnswers.GET_EMAIL_FAIL) {
                this._SendErrorMsg(result, funcFAIL);
            }
        });

        connect.send(VKRequest.GET_EMAIL);
    }

    static PayToTestGroup(price : number, funcOK : () => void, funcFAIL : (error : string) => void, msgIfFail : string) {
        // @ts-ignore
        connect.subscribe((e) => {
            let result = JSON.parse(e.detail.data);

            if (e.detail.type == VKRequestAnswers.PAY_TO_GROUP_SUCCESS) {
                if (result.status == true) {
                    funcOK();
                }
                else {
                    funcFAIL(msgIfFail);
                }
            }

            if (e.detail.type == VKRequestAnswers.PAY_TO_GROUP_FAIL) {
                this._SendErrorMsg(result, funcFAIL);
            }
        });

        let params = {
            amount: price,
            description: "",
            action: "pay-to-group",
            group_id: this._test_group_id
        };

        let sendHandle = {
            app_id: this._test_app_id,
            action: "pay-to-group",
            params: params
        };

        let JSONSendHandle = JSON.stringify(sendHandle);
        connect.send(VKRequest.PAY_TO_GROUP, JSONSendHandle);
    }
}
