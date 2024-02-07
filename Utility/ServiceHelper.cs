using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Configuration;
using System.ComponentModel;
using System.Reflection;
using System.Globalization;

namespace Utility
{
    public static class ServiceHelper
    {
        private static IHttpContextAccessor _contextAccessor;

        public static void SetHttpContext(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }
        public static async Task SignInAsync(IConfiguration _config,Tuple<string,string,string,string,bool> claimsTuple)
        {
            var claims = new List<Claim>()
                    {
                        new Claim("UserId", claimsTuple.Item1),
                        new Claim(ClaimTypes.Role, "Admin"),
                        new Claim("FirstName", claimsTuple.Item2),
                        new Claim("LastName", claimsTuple.Item3),
                        new Claim("UserName", claimsTuple.Item4)
                    };

            var claimIdentity = new ClaimsIdentity(claims, _config["AuthScheme"]);
            var claimPrincipal = new ClaimsPrincipal(claimIdentity);
            var props = new AuthenticationProperties { IsPersistent = claimsTuple.Item5 };

            await _contextAccessor.HttpContext.SignInAsync(_config["AuthScheme"], claimPrincipal, props);

        }        
    }
}
