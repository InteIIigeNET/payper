using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Payper.Api.Models.API;

namespace Payper.Api.Services
{
	public class PaperService : IPaperService
	{
		private static readonly HttpClient Client = new HttpClient();
		public async Task<ValidationResult> ValidateSubscribeAsync(string email, string code)
		{
			var result = await (await Client.GetAsync($"https://paperpaper.ru/api/pre_subscribe?code={code}&email={email}"))
				.Content.ReadAsStringAsync();
			return JsonConvert.DeserializeObject<ValidationResult>(result);
		}

		public async Task<ValidationResult> ValidatePromocodeAsync(string email, string code, string promocode)
		{
			var result = await (await Client.GetAsync($"https://paperpaper.ru/api/pre_subscribe?code={code}&email={email}&promocode={promocode}"))
				.Content.ReadAsStringAsync();
			return JsonConvert.DeserializeObject<ValidationResult>(result);
		}

		public async Task<SubscriptionsResult> GetSubscriptionsAsync()
		{
			var result = await (await Client.GetAsync($"https://paperpaper.ru/api/get_billable_newsletters"))
				.Content.ReadAsStringAsync();
			return JsonConvert.DeserializeObject<SubscriptionsResult>(result);
		}
	}
}
