using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Payper.Api.Models.Subscriptions;

namespace Payper.Api.Models.Publishers
{
	public class Publisher
	{
		[DatabaseGenerated(DatabaseGeneratedOption.None)]
		public long Id { get; set; }
		public string Title { get; set; }
		public long VkId { get; set; }
		public string Description { get; set; }
		public string ImgUrl { get; set; }
	}
}
