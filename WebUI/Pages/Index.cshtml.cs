using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.Pages
{

    public class IndexModel : PageModel
    {

        public IndexModel()
        {
        }
        public  IActionResult OnGet(Guid id)
        {

            return RedirectToPage("Vols/Index");
        }
    }
}
