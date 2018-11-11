namespace Payper.Api.Models.API
{
	public class ValidationData
	{
		public bool IsSubscribed { get; set; }
		public bool IsPaidFor { get; set; }
		public bool IsPromocodeValid { get; set; }
	}
}