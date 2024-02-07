using Core.Entities;
using Core.Interfaces;
using Core.Interfaces.Repositories;
using Core.Services;

namespace Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        public IBaseRepository<PassagereEntity> _passagereService { get; private set; }
        public IBaseRepository<VolEntity> _volService { get; private set; }

        public UnitOfWork(AppDbContext context, UserHelperService userHelperService)
        {
            _passagereService = new BaseRepository<PassagereEntity>(context,userHelperService);
            _volService = new BaseRepository<VolEntity>(context, userHelperService);

        }
    }
}
