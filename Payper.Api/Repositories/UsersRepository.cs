using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Payper.Api.Models;
using Payper.Api.Models.Subscriptions;
using Payper.Api.Models.Users;

namespace Payper.Api.Repositories
{
	public class UsersRepository : IUsersRepository
	{
		private readonly AppContext _context;

		public UsersRepository(AppContext context)
		{
			_context = context;
		}

		public async Task Add(User user)
		{
			await _context.Users.AddAsync(user);
			await _context.SaveChangesAsync();
		}

		public User Get(long userId)
		{
			return _context.Users.Include(t => t.UserSubscriptions)
				.FirstOrDefault(u => u.Id == userId);
		}

		public async Task AddSubscription(long userId, UserSubscription sub)
		{
			var user = Get(userId);
			if (user == null) return;

			_context.UserSubscriptions.Add(sub);
			await _context.SaveChangesAsync();

			user.UserSubscriptions.Add(sub);
			await _context.SaveChangesAsync();
		}

		public async Task RemoveSubscription(long userId, UserSubscription sub)
		{
			var user = Get(userId);
			var subscription = 
				_context.UserSubscriptions.FirstOrDefault(t => t.Code == sub.Code && t.UserId == sub.UserId);
			if (user == null || subscription == null) return;

			user.UserSubscriptions.Remove(subscription);
			_context.UserSubscriptions.Remove(subscription);
			await _context.SaveChangesAsync();
		}
	}
}
