using System.ComponentModel.DataAnnotations;
using static Utility.Enums;

namespace WebUI.ViewModels
{
    public class PassagereViewModel : BaseViewModel
    {
        [Display(Name = "Nom")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public string? Nom { get; set; }

        [Display(Name = "Type Passagere")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public TypePassagere Type { get; set; }

        [Display(Name = "Age")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public int Age { get; set; }

        [Display(Name = "Double Places")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public bool DoublePlaces { get; set; }


        [Display(Name = "Famille")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public string FamilleId { get; set; }

        [Display(Name = "Famille")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public int VolId { get; set; }




    }
}
