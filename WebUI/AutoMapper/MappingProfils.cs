using AutoMapper;
using Core.Entities;
using WebUI.ViewModels;
namespace WebUI.AutoMapper
{
	public class EntiyToViewModel : Profile
	{
		public EntiyToViewModel()
		{
			CreateMap<VolEntity, VolViewModel>();
			CreateMap<PassagereEntity, PassagereViewModel>();



		}
	}
	public class ViewModelToEntity : Profile
	{
		public ViewModelToEntity()
		{
			CreateMap<VolViewModel, VolEntity>();
			CreateMap<PassagereViewModel, PassagereEntity>();

		}
	}
}
