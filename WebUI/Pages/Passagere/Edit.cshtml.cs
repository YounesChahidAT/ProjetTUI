using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using WebUI.ViewModels;
using static Utility.Enums;

namespace WebUI.Pages.Passagere
{
    public class EditModel : BasePageModel
    {
        private readonly IUnitOfWork _unitOfWork;

        [BindProperty]
        public PassagereViewModel passagereVM { get; set; }

        [BindProperty]
        public int countFamilleA { get; set; }
        [BindProperty]
        public int countFamilleE { get; set; }

        public EditModel(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<IActionResult> OnGetAsync(int id, int volId, int? passagereId = null, string? familleId = "")
        {
            var obj = await _unitOfWork._passagereService.GetByIdAsync(id);

            var _FamilleId = familleId != "" ? familleId : "-";

            if (passagereId != null && (familleId == "-"))
            {
                var objPassagereId = await _unitOfWork._passagereService.GetByIdAsync(passagereId ?? 0);

                var max = (await _unitOfWork._passagereService.ListByExpressionAsync(x => !x.Deleted && x.FamilleId != "-")).Count() > 0 ? (await _unitOfWork._passagereService.ListByExpressionAsync(x => !x.Deleted && x.FamilleId != "-")).MaxBy(x => int.Parse(x.FamilleId)).FamilleId : "0";
                _FamilleId = (familleId == "-") ? max : familleId.ToString();
                _FamilleId = (int.Parse(_FamilleId) + 1).ToString();

                objPassagereId.FamilleId = _FamilleId;
                await _unitOfWork._passagereService.UpdateAsync(objPassagereId);
            }

            if (obj == null)
            {
                passagereVM = new PassagereViewModel();
                passagereVM.VolId = volId;
                passagereVM.FamilleId = _FamilleId;

            }
            else
            {
                passagereVM = mapper.Map<PassagereViewModel>(obj);
            }
            if (passagereVM.FamilleId != "-")
            {
                var famille = await _unitOfWork._passagereService.ListByExpressionAsync(x => !x.Deleted && x.FamilleId == passagereVM.FamilleId);
                countFamilleA = famille.Where(x => x.Age > 12).Count();
                countFamilleE = famille.Where(x => x.Age <= 12).Count();

            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            passagereVM.Type = passagereVM.Age <= 12 ? TypePassagere.Enfant : TypePassagere.Adulte;
            ModelState.Remove("Passagere.Type");
            ModelState.Remove("Passagere.FamilleId");
            if (passagereVM.FamilleId != "-")
            {
                if ((passagereVM.Age > 12 && countFamilleA >= 2))
                {
                    Warning("Attention", "Vous avez déjà atteint le nombre maximum d'adultes.");
                    return Page();
                }

                if ((passagereVM.Age < 12 && countFamilleE >= 3))
                {
                    Warning("Attention", "Vous avez déjà atteint le nombre maximum d'enfants.");
                    return Page();
                }
            }


            if (!ModelState.IsValid)
            {
                return Page();
            }

            var obj = mapper.Map<PassagereEntity>(passagereVM);

            if (obj.Id != 0)
            {
                var rsl = await _unitOfWork._passagereService.UpdateAsync(obj);
            }
            else
            {
                await _unitOfWork._passagereService.AddAsync(obj);
            }
            return RedirectToPage("Index", new { id = passagereVM.VolId });
        }

    }
}

