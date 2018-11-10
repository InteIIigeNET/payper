using System.Linq;
using Payper.Api.Models;
using Payper.Api.Models.Publishers;
using Payper.Api.Models.Users;

namespace Payper.Api.Repositories
{
	public class PublishersRepository : IPublishersRepository
	{
		private readonly AppContext _context;

		public PublishersRepository(AppContext context)
		{
			_context = context;
			if (!context.Publishers.Any())
			{
				context.Publishers.Add(new Publisher
				{
					Id = 1,
					VkId = 173750664,
					Title = "Бумага",
					Description =
						"Когда-то мы придумали еженедельное письмо для читателей, в котором редакторы по-дружески рассказывают о самых интересных делах, которыми можно заняться в Петербурге на выходных."
				});
				context.SaveChanges();
			}
		}

		public Publisher[] GetAll()
		{
			return _context.Publishers.ToArray();
		}

		public Publisher Get(long id)
		{
			return _context.Publishers.FirstOrDefault(p => p.Id == id);
		}
	}
}
