﻿using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Payper.Api.Repositories;
using Payper.Api.Services;
using AppContext = Payper.Api.Models.AppContext;

namespace Payper.Api
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			var connection = Configuration.GetConnectionString("DefaultConnection");
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
			services.AddDbContext<AppContext>(options => options.UseSqlServer(connection));
			services.AddScoped<IUsersRepository, UsersRepository>();
			services.AddScoped<IUserSubscriptionsRepository, UserSubscriptionsRepository>();
			services.AddScoped<IPaperService, PaperService>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseMvc();
		}
	}
}
