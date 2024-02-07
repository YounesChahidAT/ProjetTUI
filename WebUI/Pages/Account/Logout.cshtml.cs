using System;
using System.Threading.Tasks;
using Core.Entities;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebUI.ViewModels;

namespace WebUI.Pages.Account
{
	public class LogoutModel : BasePageModel
	{
		private readonly AppDbContext dbContext;
		private readonly IConfiguration _config;
		[BindProperty]
		public LoginViewModel LoginViewModel { get; set; }
		public LogoutModel(AppDbContext dbContext, IConfiguration configuration)
		{
			this.dbContext = dbContext;
			this._config = configuration;
		}
		public async Task<IActionResult> OnGetAsync()
		{

			var Userid = HttpContext.User.FindFirst(x => x.Type == "UserId")?.Value;
			var user = await dbContext.Set<ApplicationUser>().FirstOrDefaultAsync(x => x.Id == Guid.Parse(Userid));
            var iSsuccess = dbContext.Update(user);
			dbContext.SaveChanges();
			await HttpContext.SignOutAsync(_config["AuthScheme"]);
			return LocalRedirect("/Account/Login");
		}

	}
}
