using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Payper.Api.Models.API;
using Payper.Api.Models.Subscriptions;
using Payper.Api.Models.Users;
using Payper.Api.Repositories;
using Payper.Api.Services;

namespace Payper.Api.Controllers
{
	[Route("api/[controller]")]
	public class SubscriptionsController : Controller
	{
		private readonly IUserSubscriptionsRepository _userSubscriptionsRepository;
		private readonly IPaperService _paperService;

		public SubscriptionsController(
			IUserSubscriptionsRepository userSubscriptionsRepository,
			IPaperService paperService)
		{
			_userSubscriptionsRepository = userSubscriptionsRepository;
			_paperService = paperService;
		}

		[HttpGet("all")]
		public async Task<Subscription[]> GetAll(string email)
		{
			var subscriptionsResult = await _paperService.GetSubscriptionsAsync();

			return ConvertFrom(subscriptionsResult.Data,
				code => _userSubscriptionsRepository.Contains(email, code)).ToArray();
		}

		[HttpPost("subscribe")]
		public async Task Subscribe(string email, string code)
		{
			await _userSubscriptionsRepository.AddAsync(new UserSubscription {Code = code, Email = email});
		}

		[HttpPost("unsubscribe")]
		public async Task Unsubscribe(string email, string code)
		{
			await _userSubscriptionsRepository.RemoveAsync(email, code);
		}

		[HttpGet("list")]
		public async Task<Subscription[]> GetSubscriptions(string email, string code)
		{
			var subscriptionsResult = await _paperService.GetSubscriptionsAsync();

			var data = subscriptionsResult.Data.Where(subscriptionData =>
				_userSubscriptionsRepository.Contains(email, subscriptionData.Code));

			return ConvertFrom(data, s => true).ToArray();
		}

		[HttpPost("add")]
		public async Task AddExistSubscriptions(string email)
		{
			var subscriptionsResult = await _paperService.GetSubscriptionsAsync();

			var subsToAdd = subscriptionsResult.Data.Where(subscriptionData =>
				_paperService.ValidateSubscribeAsync(email, subscriptionData.Code).Result?.Data?.IsPaidFor ?? false);

			if(!subsToAdd.Any()) return;
			foreach (var subscriptionData in subsToAdd)
			{
				await _userSubscriptionsRepository.AddAsync(new UserSubscription { Email = email, Code = subscriptionData.Code});
			}
		}

		[HttpGet("check_promo")]
		public async Task<ValidationResult> ValidateCode(string email, string code, string promocode)
		{
			return await _paperService.ValidatePromocodeAsync(email, code, promocode);
		}

		private static IEnumerable<Subscription> ConvertFrom(IEnumerable<SubscriptionData> data, Func<string, bool> validator)
		{
			return data.Select(subscriptionData =>
				new Subscription
				{
					Code = subscriptionData.Code,
					Title = subscriptionData.DisplayName,
					Price = subscriptionData.Price,
					IsPayed = validator(subscriptionData.Code)
				});
		}
	}
}
