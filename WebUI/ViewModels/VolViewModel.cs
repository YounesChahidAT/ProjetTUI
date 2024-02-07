using System.ComponentModel.DataAnnotations;

namespace WebUI.ViewModels
{
	public class VolViewModel : BaseViewModel
	{
		[Display (Name = "Description")]
		[Required(ErrorMessage = "Ce champ est requis")]
		public string? Description { get; set; }

        [Display(Name = "Pilote")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public string? Pilote { get; set; }

        [Display(Name = "NumAvion")]
        [Required(ErrorMessage = "Ce champ est requis")]
        public string? NumAvion { get; set; }




    }
}
