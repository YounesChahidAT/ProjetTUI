using System;
using System.Threading.Tasks;
using static Utility.Enums;

namespace Core.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task<Tuple<ResultLogin, string>> SignInAsync(string username, string password);
    }
}
