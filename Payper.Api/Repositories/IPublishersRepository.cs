using Payper.Api.Models.Publishers;

namespace Payper.Api.Repositories
{
	public interface IPublishersRepository
	{
		Publisher[] GetAll();
		Publisher Get(long id);
	}
}