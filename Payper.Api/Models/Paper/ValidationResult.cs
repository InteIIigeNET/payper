namespace Payper.Api.Models.Paper
{
	public class ValidationResult
	{
		public bool Success { get; set; }
		public string Message { get; set; }
		public ValidationData Data { get; set; }
	}
}
