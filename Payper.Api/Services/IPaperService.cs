using System.Threading.Tasks;
using Payper.Api.Models.API;

namespace Payper.Api.Services
{
	public interface IPaperService
	{
		Task<ValidationResult> ValidatePromocodeAsync(string email, string code, string promocode);
		Task<ValidationResult> ValidateSubscribeAsync(string email, string code);
		Task<SubscriptionsResult> GetSubscriptionsAsync();
	}
}