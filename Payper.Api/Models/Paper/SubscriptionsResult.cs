namespace Payper.Api.Models.Paper
{
	public class SubscriptionsResult
	{
		public bool Success { get; set; }
		public string Message { get; set; }
		public SubscriptionData[] Data { get; set; }
	}
}
