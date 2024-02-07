using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage ="Le nom d'utilisateur est obligatoire")]
        public string? UserName { get; set; }
        [Required(ErrorMessage = "Le mot de passe est obligatoire")]
        public string? Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
