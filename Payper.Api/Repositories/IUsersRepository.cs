using System.Threading.Tasks;
using Payper.Api.Models.Subscriptions;
using Payper.Api.Models.Users;

namespace Payper.Api.Repositories
{
	public interface IUsersRepository
	{
		Task Add(User user);
		User Get(long userId);
		Task AddSubscription(long userId, UserSubscription sub);
		Task RemoveSubscription(long userId, UserSubscription sub);
	}
}