﻿using AutoMapper;
using liyobe.ApplicationCore.AutoMapper;
using liyobe.ApplicationCore.Interfaces.IServices;
using liyobe.Data;
using liyobe.Infrastructure.Interfaces.IRepository;
using liyobe.Infrastructure.Interfaces.IUnitOfWork;
using liyobe.Models.Entities;
using liyobe.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace liyobe.WebApi
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
            services.AddDbContext<AppDbContext>(options =>
                   options.UseSqlServer(Configuration.GetConnectionString("AppDbConnection"),
                       b => b.MigrationsAssembly("liyobe.Data")));
            services.AddIdentity<AppUser, AppRole>()
                .AddEntityFrameworkStores<AppDbContext>()
                .AddDefaultTokenProviders();
            // Configure Identity
            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 6;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 10;

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            services.AddAutoMapper(typeof(Startup).Assembly);

            // Add application services.
            services.AddScoped<UserManager<AppUser>, UserManager<AppUser>>();
            services.AddScoped<RoleManager<AppRole>, RoleManager<AppRole>>();

            //CreateMapper(services, Configuration);
            //services.AddSingleton(new AutoMapperConfig());
             //services.AddSingleton(Mapper.Configuration);
            AutoMapperConfig.RegisterMappings();
            services.AddScoped<IMapper>(sp => new Mapper(sp.GetRequiredService<AutoMapper.IConfigurationProvider>(), sp.GetService));
            services.AddTransient(typeof(IUnitOfWork), typeof(EFUnitOfWork));
            services.AddTransient(typeof(IAsyncRepository<,>), typeof(EFRepository<,>));
            services.AddTransient<IFunctionService, FunctionService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<DbInitializer>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
        public static void CreateMapper(IServiceCollection services, IConfiguration configuration)
        {
            Mapper.Initialize(x =>
            {
                x.AddProfile(new DomainToViewModelMappingProfile());
                x.AddProfile(new ViewModelToDomainMappingProfile());
            });
            //Mapper.Configuration.AssertConfigurationIsValid();
            //services.AddSingleton(x.CreateMapper());
        }
    }
}