using Core.Entities;
using Core.Interfaces.Repositories;

namespace Core.Interfaces
{
    public interface IUnitOfWork
	{

        IBaseRepository<PassagereEntity> _passagereService { get; }
        IBaseRepository<VolEntity> _volService { get; }



    }
}
