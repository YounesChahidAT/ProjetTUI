using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebUI.ViewModels;

namespace WebUI.Pages.Vol
{
	public class EditModel : BasePageModel
	{
		private readonly IUnitOfWork _unitOfWork;

		[BindProperty]
		public VolViewModel volVM { get; set; }

		public EditModel(IUnitOfWork unitOfWork, IMapper mapper)
		{
			this.mapper = mapper;
			_unitOfWork = unitOfWork;
		}
		public async Task<IActionResult> OnGetAsync(int id)
		{
			var obj = await _unitOfWork._volService.GetByIdAsync(id);

			if (obj == null)			
			{

				volVM = new VolViewModel();
			}
			else
			{
				volVM = mapper.Map<VolViewModel>(obj);
			}		

			return Page();
		}

		public async Task<IActionResult> OnPostAsync()
		{
			if (!ModelState.IsValid)
			{
				return Page();
			}
			var obj = mapper.Map<VolEntity>(volVM);

			if (obj.Id != 0)
			{
				await _unitOfWork._volService.UpdateAsync(obj);
			}
			else
			{
				await _unitOfWork._volService.AddAsync(obj);
			}
			return RedirectToPage("Index");
		}
		
	}
}

