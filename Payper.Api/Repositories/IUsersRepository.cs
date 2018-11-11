using System.Threading.Tasks;
using Payper.Api.Models.Users;

namespace Payper.Api.Repositories
{
	public interface IUsersRepository
	{
		Task Add(User user);
		User Get(string email);
	}
}