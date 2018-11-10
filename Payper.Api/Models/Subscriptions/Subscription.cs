﻿namespace Payper.Api.Models.Subscriptions
{
	public class Subscription
	{
		public bool IsPayed { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public int Price { get; set; }
		public string Code { get; set; }
		public string ImgUrl { get; set; }
	}
}
