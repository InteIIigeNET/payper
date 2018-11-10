using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Payper.Api.Models.Paper;

namespace Payper.Api.Services
{
	public class PaperService
	{
		private static readonly HttpClient Client = new HttpClient();
		public async Task<ValidationResult> ValidateSubscribeAsync(string email, string code)
		{
			var result = await (await Client.GetAsync($"https://paperpaper.ru/api/pre_subscribe?code={code}&email={email}"))
				.Content.ReadAsStringAsync();
			return JsonConvert.DeserializeObject<ValidationResult>(result);
		}

		public async Task<ValidationResult> SubscribeAsync(string email, string code, string promo = null)
		{
			var url = string.IsNullOrEmpty(promo)
				? $"https://paperpaper.ru/api/pre_subscribe?code={code}&email={email}"
				: $"https://paperpaper.ru/api/pre_subscribe?code={code}&email={email}&promocode={promo}";
			var result = await (await Client.GetAsync(url)).Content.ReadAsStringAsync();
			return JsonConvert.DeserializeObject<ValidationResult>(result);
		}

		public async Task<SubscriptionsResult> GetSubscriptionsAsync()
		{
			var result = await
				(await Client.GetAsync($"https://paperpaper.ru/api/get_billable_newsletters")).Content.ReadAsStringAsync();
			return JsonConvert.DeserializeObject<SubscriptionsResult>(result);
		}
	}
}
