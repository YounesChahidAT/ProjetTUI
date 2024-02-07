using System;
using System.Threading.Tasks;
using static Utility.Enums;

namespace Core.Interfaces
{
	public interface IUserService
    {
        Task<Tuple<ResultLogin, string>> SignInAsync(string username, string password);
    }
}
