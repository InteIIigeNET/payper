using System;
using System.Linq;
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

		public async Task RemoveAsync(string email, string code)
		{
			var subscription = _context.UserSubscriptions
									   .FirstOrDefault(s => s.Email == email && code == s.Code);
			if (subscription == null) return;
			_context.UserSubscriptions.Remove(subscription);
			await _context.SaveChangesAsync();
		}

		public bool Contains(string email, string code)
		{
			return _context.UserSubscriptions
				.FirstOrDefault(s => s.Email == email && code == s.Code) != null;
		}
	}
}
