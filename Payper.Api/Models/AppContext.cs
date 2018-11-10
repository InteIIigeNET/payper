using Microsoft.EntityFrameworkCore;
using Payper.Api.Models.Subscriptions;
using Payper.Api.Models.Users;

namespace Payper.Api.Models
{
	public sealed class AppContext : DbContext
	{
		public AppContext(DbContextOptions options)
			: base(options)
		{
			Database.EnsureCreated();
		}

		public DbSet<User> Users { get; set; }
		public DbSet<UserSubscription> UserSubscriptions { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<User>()
				.HasKey(t => t.Email);

			modelBuilder.Entity<UserSubscription>()
				.HasKey(t => new {t.Email, t.Code});
		}
	}
}