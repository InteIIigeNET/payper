using System;
using System.Threading.Tasks;
using Payper.Api.Models.Subscriptions;
using AppContext = Payper.Api.Models.AppContext;

namespace Payper.Api.Repositories
{
	public class UserSubscriptionsRepository : IUserSubscriptionsRepository
	{
		private readonly AppContext _context;

		public UserSubscriptionsRepository(AppContext context)
		{
			_context = context;
		}
		public async Task AddAsync(UserSubscription sub)
		{
			await _context.UserSubscriptions.AddAsync(sub);
			await _context.SaveChangesAsync();
		}
	}
}
