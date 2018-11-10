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

		public User Get(string email)
		{
			return _context.Users.FirstOrDefault(u => u.Email == email);
		}
	}
}
