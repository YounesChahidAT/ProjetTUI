using Core.Entities;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using static Utility.Enums;
using BC = BCrypt.Net.BCrypt;

namespace Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _dbContext;

        public UserRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Tuple<ResultLogin,string>> SignInAsync(string username, string password)
        {
            string errorMsg = string.Empty;

            var user = await _dbContext.Set<ApplicationUser>().FirstOrDefaultAsync(x => x.UserName == username);
            if (user != null)
            {
                bool isPasswordValid = BC.Verify(password, user.PasswordHash);
                if (isPasswordValid)
                {
                    return new Tuple<ResultLogin,string>(ResultLogin.Success,null);
                }
                else
                {
                    errorMsg = "Le login et/ou le mot de passe est incorrect";
                }
            }
            else
            {
                errorMsg = "Le login et/ou le mot de passe est incorrect";
            }
            
            return new Tuple<ResultLogin, string>(ResultLogin.Fail, errorMsg);
        }
    }
}
