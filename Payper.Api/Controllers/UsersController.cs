using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
	    public async Task Add(long id, string email)
	    {
		    await _usersRepository.Add(new User{VkId = id, Email = email});
	    }

	    [HttpGet("")]
	    public User Get(string email)
	    {
		    return _usersRepository.Get(email);
	    }
	}
}