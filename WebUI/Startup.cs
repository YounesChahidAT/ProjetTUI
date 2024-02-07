using Core.Entities;
using Core.Interfaces;
using Core.Services;
using Infrastructure.Repositories;
using Utility;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using Microsoft.AspNetCore.Http;
using WebUI.HelpersServices;
using Core.Interfaces.Repositories;

namespace WebUI
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

            services.AddDbContext<AppDbContext>(option => option.UseSqlServer(Configuration.GetConnectionString("LocalDB")));
            services.AddIdentity<ApplicationUser, ApplicationRole>().AddEntityFrameworkStores<AppDbContext>();

            //------Configure Authentication-----------
            string authScheme = Configuration["AuthScheme"];

            services.AddAuthentication(option =>
            {
                option.DefaultScheme = authScheme;
                option.DefaultAuthenticateScheme = authScheme;
                option.DefaultChallengeScheme = authScheme;
            })
             .AddCookie(authScheme);
            //------End-----------

            services.AddRazorPages(options =>
            {
                options.Conventions.AllowAnonymousToPage("/Account/Login");
                options.Conventions.AuthorizeFolder("/");
            }).SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddControllers();

            //----AutoMapper
            services.AddAutoMapper(typeof(Startup));
            //-----------Set Accessor For ServiceHelper
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            var serviceProvider = GetServiceProvider(services);
            var accessorContext = serviceProvider.GetService<IHttpContextAccessor>();
            ServiceHelper.SetHttpContext(accessorContext);
            BaseCookie.SetHttpContext(accessorContext);
            //------Dependency Injection-------------------
            InjectService(services);
        }

        public IServiceProvider GetServiceProvider(IServiceCollection services)
        {
            return services.BuildServiceProvider();
        }

        public void InjectService(IServiceCollection services)
        {
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddTransient<UserHelperService>();
            services.AddScoped<HelperService>();
            services.AddSession();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseSession();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
            });
        }
    }
}
