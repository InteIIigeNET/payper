using System.Threading.Tasks;
using Payper.Api.Models.Subscriptions;

namespace Payper.Api.Repositories
{
	public interface IUserSubscriptionsRepository
	{
		Task AddAsync(UserSubscription sub);
		Task RemoveAsync(string email, string code);
		bool Contains(string email, string code);
	}
}