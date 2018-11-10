using Microsoft.EntityFrameworkCore;
using Payper.Api.Models.Publishers;
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
		public DbSet<Publisher> Publishers { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{

			modelBuilder.Entity<User>()
				.HasKey(t => t.Id);

			modelBuilder.Entity<UserSubscription>()
				.HasKey(t => t.Id);

			modelBuilder.Entity<Publisher>()
				.HasKey(t => t.Id);

			modelBuilder.Entity<User>()
				.HasMany(u => u.UserSubscriptions).WithOne(t => t.User)
				.HasForeignKey(t => t.UserId);

			modelBuilder.Entity<UserSubscription>()
				.HasOne(t => t.User)
				.WithMany(t => t.UserSubscriptions)
				.HasForeignKey(t => t.UserId);
		}
	}
}