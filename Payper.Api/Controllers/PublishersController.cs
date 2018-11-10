using Microsoft.AspNetCore.Mvc;
using Payper.Api.Models.Publishers;
using Payper.Api.Repositories;

namespace Payper.Api.Controllers
{
	[Route("api/[controller]")]
	public class PublishersController : Controller
	{
		private readonly IPublishersRepository _publishersRepository;

		public PublishersController(IPublishersRepository publishersRepository)
		{
			_publishersRepository = publishersRepository;
		}

		[HttpGet("all")]
		public Publisher[] GetAll()
		{
			return _publishersRepository.GetAll();
		}
	}
}
