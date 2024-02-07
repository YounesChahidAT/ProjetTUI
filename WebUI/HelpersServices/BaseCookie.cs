using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.HelpersServices
{
    public static class BaseCookie
    {
        private static IHttpContextAccessor _contextAccessor;

        public static void SetHttpContext(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public static string GetCookie(string key)
        {
            return _contextAccessor.HttpContext.Request.Cookies[key];
        }
        public static void SetCookie(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();
            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddDays(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddDays(1);

            option.IsEssential = true;
            _contextAccessor.HttpContext.Response.Cookies.Append(key, value, option);
        }
        public static void RemoveCookie(string key)
        {
            _contextAccessor.HttpContext.Response.Cookies.Delete(key);
        }
        public static Guid GetCurrentProjectId()
        {
            var cookie = GetCookie("ProjectDetails");
            Guid projectId = Guid.Empty;

            if (!string.IsNullOrEmpty(cookie))
            {
                projectId = Guid.Parse(cookie.Split("_")[0]);
            }

            return projectId;
        }
        public static string GetCurrentProjectCode()
        {
            var cookie = GetCookie("ProjectDetails");
            string projectId = string.Empty;

            if (!string.IsNullOrEmpty(cookie))
            {
                projectId = cookie.Split("_")[1];
            }

            return projectId;
        }
    }
}
