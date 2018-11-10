using Payper.Api.Models.Users;

namespace Payper.Api.Models.Subscriptions
{
	public class UserSubscription
	{
		public long Id { get; set; }
		public string Email { get; set; }
		public User User { get; set; }
		public long UserId { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public int Price { get; set; }
		public string Code { get; set; }
		public string ImgUrl { get; set; }
	}
}
