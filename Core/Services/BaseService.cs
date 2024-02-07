using Core.Entities;
using Core.Interfaces;
using Core.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using static Utility.Enums;

namespace Core.Services
{
    public class BaseService<T> : IBaseService<T> where T : BaseEntity
    {
        public readonly IBaseRepository<T> _repository;

        public BaseService(IBaseRepository<T> repository)
        {
            _repository = repository;
        }
        
        public async Task<T> AddAsync(T entity)
        {
            return await _repository.AddAsync(entity);
        }
        public T Delete(T entity, DeleteType? deleteType)
        {
            return _repository.Delete(entity, deleteType);
        }
        public async Task<T> DeleteAsync(T entity, DeleteType? deleteType)
        {
            return await _repository.DeleteAsync(entity, deleteType);
        }
        public T GetByExpression(Expression<Func<T, bool>> expression)
        {
            return _repository.GetByExpression(expression);
        }
        public async Task<T> GetByExpressionAsync(Expression<Func<T, bool>> expression)
        {
            return await _repository.GetByExpressionAsync(expression);
        }
        public T GetById(int id, params Expression<Func<T, object>>[] includes)
        {
            return _repository.GetById(id, includes);
        }
        public async Task<T> GetByIdAsync(int id, params Expression<Func<T, object>>[] includes)
        {
            return await _repository.GetByIdAsync(id, includes);
        }
        public async Task<List<T>> ListByExpressionAsync(Expression<Func<T, bool>> expression, params Expression<Func<T, object>>[] includes)
        {
            return await _repository.ListByExpressionAsync(expression, includes);
        }
        public async Task<T> UpdateAsync(T entity)
        {
            return await _repository.UpdateAsync(entity);
        }
    }
}
