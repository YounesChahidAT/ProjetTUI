using AutoMapper;
using Core.Domains;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using WebUI.HelpersServices;
using WebUI.ViewModels;
using static Utility.Enums;


namespace WebUI.Pages.Famille
{
	public class IndexModel : BasePageModel
	{
		private readonly IUnitOfWork _unitOfWork;
        public HelperService helperService;

        

        [BindProperty]
		public List<PassagereViewModel> passagereVM { get; set; }

        [BindProperty]
        public FamilleDomain familleDm { get; set; }
        [BindProperty]

		public string _familleId { get; set; }
		[BindProperty]
		public int _volId { get; set; }
		[BindProperty]
		public int passagereId { get; set; }
		[BindProperty]

		public int nombreFamille { get; set; }

		public IndexModel(IUnitOfWork unitOfWork, IMapper mapper, HelperService helperService)
		{
			this.mapper = mapper;
			this._unitOfWork = unitOfWork;
            this.helperService = helperService;


        }
		public async Task<IActionResult> OnGetAsync(int id, int volId, string familleId)
		{
			_familleId = familleId;
			_volId = volId;
			passagereId = id;


			var obj = await _unitOfWork._passagereService.ListByExpressionAsync(x => x.FamilleId != "-" && x.FamilleId == this._familleId && x.VolId == _volId && !x.Deleted);
			nombreFamille = obj.Count();
			if (obj != null)
			{
				passagereVM = mapper.Map<List<PassagereViewModel>>(obj);
                familleDm = new(); 

                familleDm.Members = obj;
                familleDm = helperService.CalculateTotalPrice(familleDm);
            }
			return Page();
		}


	}
}
