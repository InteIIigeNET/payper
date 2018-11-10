using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;
using Payper.Api.Models.Paper;
using Payper.Api.Models.Subscriptions;
using Payper.Api.Models.Users;
using Payper.Api.Repositories;
using Payper.Api.Services;

namespace Payper.Api.Controllers.Paper
{
	[Route("api/[controller]")]
	public class SubscriptionsController : Controller
	{
		private readonly IUserSubscriptionsRepository _userSubscriptionsRepository;
		private readonly IPublishersRepository _publishersRepository;
		private readonly IUsersRepository _usersRepository;
		private readonly PaperService _service = new PaperService();

		public SubscriptionsController(IUserSubscriptionsRepository userSubscriptionsRepository,
			IPublishersRepository publishersRepository,
			IUsersRepository usersRepository)
		{
			_userSubscriptionsRepository = userSubscriptionsRepository;
			_publishersRepository = publishersRepository;
			_usersRepository = usersRepository;
		}

		[HttpGet("all")]
		public async Task<Subscription[]> GetAll()
		{
			var publisher = _publishersRepository.Get(1);
			return (await _service.GetSubscriptionsAsync()).Data
				.Select(t => new Subscription
				{
					Code = t.Code,
					Description = t.DisplayName,
					Price = t.Price,
					Publisher = publisher
				}).ToArray();
		}

		[HttpGet("{userId}")]
		public UserSubscription[] GetUserSubscriptions(long userId)
		{
			return _usersRepository.Get(userId)?.UserSubscriptions?.ToArray() ?? new UserSubscription[0];
		}

		[HttpPost("{userId}/add")]
		public async Task<int> AddExistSubscription(long userId, long publisherId, string email)
		{
			var user = _usersRepository.Get(userId);
			var userSubs = user.UserSubscriptions?.Select(t => t.Code).ToHashSet()
			               ?? new HashSet<string>();

			var counter = 0;
			var subs = await GetAll();
			foreach (var subscription in subs.Where(t => t.Publisher.Id == publisherId))
			{
				if (!userSubs.Contains(subscription.Code) &&
				    (await _service.ValidateSubscribeAsync(email, subscription.Code)).Data.IsSubscribed)
				{
					var sub = subs.FirstOrDefault(t => t.Code == subscription.Code);
					var userSub = From(sub, email, user);
					await _usersRepository.AddSubscription(userId, userSub);
					++counter;
				}
			}
			return counter;
		}

		[HttpGet("check_promo")]
		public async Task<ValidationResult> ValidateCode(string email, long publisherId, string code, string promo)
		{
			return await _service.SubscribeAsync(email, code, promo);
		}

		[HttpPost("{userId}/subscribe")]
		public async Task Subscribe(long userId, long publisherId, string email, string code)
		{
			var user = _usersRepository.Get(userId);
			var subscription = (await GetAll()).FirstOrDefault(t => t.Code == code);
			await _usersRepository.AddSubscription(userId, From(subscription, email, user));
		}

		[HttpPost("{userId}/unsubscribe")]
		public async Task Unsubscribe(long userId, long publisherId, string email, string code)
		{
			var user = _usersRepository.Get(userId);
			var subscription = (await GetAll()).FirstOrDefault(t => t.Code == code);
			await _usersRepository.RemoveSubscription(userId, From(subscription, email, user));
		}

		private UserSubscription From(Subscription sub, string email, User user)
		{
			return new UserSubscription
			{
				Code = sub.Code,
				Description = sub.Description,
				Email = email,
				ImgUrl = sub.ImgUrl,
				Price = sub.Price,
				Title = sub.Title,
				User = user,
				UserId = user.Id
			};
		}
	}
}
