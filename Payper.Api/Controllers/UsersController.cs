using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Payper.Api.Models.Subscriptions;
using Payper.Api.Models.Users;
using Payper.Api.Repositories;

namespace Payper.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
	    private readonly IUsersRepository _usersRepository;

	    public UsersController(IUsersRepository usersRepository)
	    {
		    _usersRepository = usersRepository;
	    }

	    [HttpPost("add")]
	    public async Task Add(long id)
	    {
		    await _usersRepository.Add(
				new User{Id = id});
	    }

	    [HttpGet("{id}")]
	    public User Get(long id)
	    {
		    return _usersRepository.Get(id);
	    }
	}
}