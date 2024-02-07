using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace Utility.Extensions
{
    public static class ClaimsPrincipalExtension
    {
        public static Guid GetUserId(this ClaimsPrincipal principal)
        {
            var claim = principal.FindFirst(x => x.Type == "UserId")?.Value;
            return Guid.TryParse(claim, out Guid userId) ? userId : Guid.Empty;
        }
        
    }
}
