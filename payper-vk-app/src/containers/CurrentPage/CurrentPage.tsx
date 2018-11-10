import * as React from 'react';
import StartPage from '../StartPage/StartPage';
import EditionComponent from '../Edition/EditionComponent';



enum Pages {
    Start = 'start',
    Edition = 'edition'
}

interface IStates {
    page: Pages
}   

export default class CurrentPage extends React.Component<{}, IStates> {

    public constructor(props: {}) {
        super(props);
        this.state = { page: Pages.Start }
    }

    public render() {
        switch (this.state.page) {
            case Pages.Start:
                return (<StartPage/>);
            case Pages.Edition:
                return (<EditionComponent/>)
        }
    }
}