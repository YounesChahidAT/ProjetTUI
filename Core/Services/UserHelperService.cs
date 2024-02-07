using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Utility.Extensions;

namespace Core.Services
{
    public class UserHelperService
    {
        private readonly IHttpContextAccessor _httpContext;

        public UserHelperService(IHttpContextAccessor httpContext)
        {
            _httpContext = httpContext;
        }

        public Guid GetUserId()
        {
            try
            {
                Guid userId = _httpContext.HttpContext.User.GetUserId();
                return userId;

            }
            catch (Exception)
            {

                return Guid.NewGuid();

            }

        }        
    }
}
