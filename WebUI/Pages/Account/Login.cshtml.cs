using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Core.Entities;
using Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Utility;
using WebUI.ViewModels;
using BC = BCrypt.Net.BCrypt;

namespace WebUI.Pages.Account
{
    public class LoginModel : BasePageModel
    {
        private readonly AppDbContext dbContext;
        private readonly IConfiguration _config;

        [BindProperty]
        public LoginViewModel LoginViewModel { get; set; }
        public LoginModel(AppDbContext dbContext, IConfiguration configuration)
        {
            this.dbContext = dbContext;
            this._config = configuration;
        }
        public async Task<IActionResult> OnGetAsync()
        {
            await HttpContext.SignOutAsync(_config["AuthScheme"]);
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = "")
        {
            var user = await dbContext.Set<ApplicationUser>().FirstOrDefaultAsync(x => x.UserName == LoginViewModel.UserName);
            if (user != null)
            {
                bool isPasswordValid = BC.Verify(LoginViewModel.Password, user.PasswordHash);
                if (isPasswordValid)
                {
                    var claimsTuple = new Tuple<string, string, string, string,bool>(user.Id.ToString(), user.FirstName, user.LastName, user.UserName ??"",LoginViewModel.RememberMe);

                    await ServiceHelper.SignInAsync(_config, claimsTuple);

                    if (string.IsNullOrEmpty(returnUrl))
                    {
                        returnUrl = "/vols";
                    }
                    user.LastLogin = DateTime.Now;
                    dbContext.Update(user);
                    dbContext.SaveChanges();
                    return LocalRedirect(returnUrl);
                }
            }
            ModelState.AddModelError("LoginFail", "Nom d'utilisateur et/ou mot de passe incorrect");
            return Page();
        }

    }
}
