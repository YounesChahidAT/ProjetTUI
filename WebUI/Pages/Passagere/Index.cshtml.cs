using AutoMapper;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using WebUI.HelpersServices;
using WebUI.ViewModels;
using static Utility.Enums;


namespace WebUI.Pages.Passagere
{
	public class IndexModel : BasePageModel
	{
		private readonly IUnitOfWork _unitOfWork;
        public HelperService helperService;

		[BindProperty]
		public List<PassagereViewModel> PassagereVM { get; set; }
		[BindProperty]
		public int VolId { get; set; }
        [BindProperty]
        public int NombrePassageres { get; set; }


        public IndexModel(IUnitOfWork unitOfWork, IMapper mapper, HelperService helperService)
        {
			this.mapper = mapper;
			this._unitOfWork = unitOfWork;
            this.helperService = helperService;
        }
		public async Task<IActionResult> OnGetAsync(int id)
		{
			VolId = id;
			var obj = await _unitOfWork._passagereService.ListByExpressionAsync(x => x.VolId == id && !x.Deleted);


            var Passageres = await _unitOfWork._passagereService.ListByExpressionAsync(x =>  x.VolId == VolId && !x.Deleted);
            NombrePassageres = obj.Count();

            if (obj != null)
			{
				PassagereVM = mapper.Map<List<PassagereViewModel>>(obj);
			}
			return Page();
		}

		public async Task<IActionResult> OnPostDeleteAsync(int Id)
		{
			var obj = await _unitOfWork._passagereService.GetByIdAsync(Id);
			await _unitOfWork._passagereService.DeleteAsync(obj, DeleteType.logique);
			return RedirectToPage();
		}
	}
}
