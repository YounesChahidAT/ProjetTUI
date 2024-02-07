using AutoMapper;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using WebUI.ViewModels;
using static Utility.Enums;


namespace WebUI.Pages.Vol
{
    public class IndexModel : BasePageModel
    {
        private readonly IUnitOfWork _unitOfWork;

        public List<VolViewModel> volVM { get; set; }
        public IndexModel(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<IActionResult> OnGetAsync()
        {
            var obj = await _unitOfWork._volService.ListAllAsync();
            if (obj != null)
            {
                volVM = mapper.Map<List<VolViewModel>>(obj.Where(x => !x.Deleted));

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
