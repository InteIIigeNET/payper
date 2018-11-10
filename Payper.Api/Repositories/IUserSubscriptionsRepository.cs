using System;
using System.Threading.Tasks;
using Payper.Api.Models.Subscriptions;

namespace Payper.Api.Repositories
{
	public interface IUserSubscriptionsRepository
	{
		Task AddAsync(UserSubscription sub);
	}
}