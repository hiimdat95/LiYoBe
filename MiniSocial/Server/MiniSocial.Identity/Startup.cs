﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.AspNetIdentity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MiniSocial.Identity.Configuration;
using MiniSocial.Identity.Data;
using MiniSocial.Identity.Models;

namespace MiniSocial.Identity
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
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<MiniSocialDbContext>(option => option.UseSqlServer(connectionString));
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<MiniSocialDbContext>()
                .AddDefaultTokenProviders();
            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequiredLength = 6;
                options.Password.RequireDigit = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                //options.Password.RequiredUniqueChars = false;
            });
            services.AddMvc().AddJsonOptions(options => {
                options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
                options.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
            });
            services.AddIdentityServer()
                .AddDeveloperSigningCredential()
                //.AddInMemoryPersistedGrants()
                .AddInMemoryIdentityResources(Config.GetIdentityResources())
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients())
                .AddAspNetIdentity<User>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseRequestLocalization(new RequestLocalizationOptions()
            {
                DefaultRequestCulture = new RequestCulture("en"),
                SupportedCultures = new[] {new CultureInfo("en"), new CultureInfo("vi")},
                SupportedUICultures =new[] { new CultureInfo("en"), new CultureInfo("vi") },
                RequestCultureProviders = new IRequestCultureProvider[]
                {
                    new QueryStringRequestCultureProvider(),
                    new AcceptLanguageHeaderRequestCultureProvider()
                },
            });
            app.UseIdentityServer();
            //app.UseAuthentication();
            //app.UseMvc();

            app.UseMvcWithDefaultRoute();
        }
    }
}
