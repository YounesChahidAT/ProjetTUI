using AutoMapper;
using Core.Domains;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using WebUI.HelpersServices;
using WebUI.ViewModels;

namespace WebUI.Pages.Avion
{
	public class IndexModel : BasePageModel
	{
		private readonly IUnitOfWork _unitOfWork;
        private readonly HelperService helperService;        

        [BindProperty]
		public List<PassagereViewModel> passagereVM { get; set; }

		[BindProperty]
		public int volId { get; set; }
        [BindProperty]
        public int[,] avion { get; set; }

        [BindProperty]
        public AvionDomain avionDm { get; set; }
        [BindProperty]
        public double price { get; set; }


        public IndexModel(IUnitOfWork unitOfWork, IMapper mapper, HelperService helperService)
		{
			this.mapper = mapper;
			_unitOfWork = unitOfWork;
            this.helperService = helperService;
        }
		public async Task<IActionResult> OnGetAsync(int volId)
		{
            this.volId = volId;


			var obj = await _unitOfWork._passagereService.ListByExpressionAsync(x => x.VolId == this.volId && !x.Deleted);
			if (obj != null)
			{
				passagereVM = mapper.Map<List<PassagereViewModel>>(obj);
                avionDm = new();

                avionDm.Members = obj;
                avion = helperService.AttributionSieges(passagereVM);
                avionDm = helperService.CalculateTotalPriceAvion(avionDm);

				price = avionDm.Montant;
            }
			return Page();
		}


	}
}
