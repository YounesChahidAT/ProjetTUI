using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using static Utility.Enums;

namespace Core.Interfaces.Repositories
{
    public interface IBaseRepository<T>
    {
        Task<T> GetByIdAsync(int id, params Expression<Func<T, object>>[] includes);
        T GetById(int id, params Expression<Func<T, object>>[] includes);
        Task<T> GetByExpressionAsync(Expression<Func<T, bool>> expression);
        T GetByExpression(Expression<Func<T, bool>> expression);
        Task<T> AddAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task<T> DeleteAsync(T entity, DeleteType? deleteType);
        T Delete(T entity, DeleteType? deleteType);
        Task<List<T>> ListAllAsync();
        Task<List<T>> ListByExpressionAsync(Expression<Func<T, bool>> expression, params Expression<Func<T, object>>[] includes);

    }
}
