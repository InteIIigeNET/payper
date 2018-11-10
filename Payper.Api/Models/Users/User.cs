using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Payper.Api.Models.Subscriptions;

namespace Payper.Api.Models.Users
{
	public class User
	{
		[DatabaseGenerated(DatabaseGeneratedOption.None)]
		public long Id { get; set; }
		public ICollection<UserSubscription> UserSubscriptions { get; set; }

		public User()
		{
			UserSubscriptions = new List<UserSubscription>();
		}
	}
}