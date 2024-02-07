using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Utility;
using static Utility.Enums;

namespace Infrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        private readonly AppDbContext _dbContext;
        private readonly Guid userId;

        public BaseRepository(AppDbContext dbContext, UserHelperService userHelperService)
        {
            _dbContext = dbContext;
            userId = userHelperService.GetUserId();
        }
       
        public async Task<T> AddAsync(T entity)
        {
            entity.CreatedBy ??= userId;
            entity.CreationDate = entity.CreationDate.HasValue ? entity.CreationDate : DateTime.Now;
            await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }
        public T Delete(T entity, Enums.DeleteType? deleteType)
        {
            if (deleteType == DeleteType.logique)
            {
                entity.Deleted = true;
                entity.DeletedBy = userId;
                _dbContext.Entry(entity).State = EntityState.Modified;
            }
            else
            {
                _dbContext.Set<T>().Remove(entity);
            }
            _dbContext.SaveChanges();
            return entity;
        }

        public async Task<T> DeleteAsync(T entity, Enums.DeleteType? deleteType)
        {
            if (deleteType == DeleteType.logique)
            {
                entity.Deleted = true;
                entity.DeletedBy = userId;
                _dbContext.Entry(entity).State = EntityState.Modified;
            }
            else
            {
                _dbContext.Set<T>().Remove(entity);
            }
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public T GetByExpression(Expression<Func<T, bool>> expression)
        {
            return _dbContext.Set<T>().FirstOrDefault(expression);
        }

        public async Task<T> GetByExpressionAsync(Expression<Func<T, bool>> expression)
        {
            return await _dbContext.Set<T>().FirstOrDefaultAsync(expression);
        }

        public T GetById(int id, params Expression<Func<T, object>>[] includes)
        {
            var query = _dbContext.Set<T>().AsQueryable();
            if (includes.Length > 0)
            {
                query = includes.Aggregate(query, (current, includeProperty) => current.Include(includeProperty));
            }
            return query.FirstOrDefault(x => x.Id == id);
        }

        public async Task<T> GetByIdAsync(int id, params Expression<Func<T, object>>[] includes)
        {
            var query = _dbContext.Set<T>().AsQueryable();
            if (includes.Length > 0)
            {
                query = includes.Aggregate(query, (current, includeProperty) => current.Include(includeProperty));
            }
            return await query.FirstOrDefaultAsync(x => x.Id == id);
        }        

        public async Task<List<T>> ListAllAsync()
        {
            return await _dbContext.Set<T>().AsNoTracking().ToListAsync();
        }       

        public async Task<List<T>> ListByExpressionAsync(Expression<Func<T, bool>> expression, params Expression<Func<T, object>>[] includes)
        {
            var query = _dbContext.Set<T>().Where(expression);
            if (includes != null)
            {
                query = includes.Aggregate(query, (current, includeProperty) => current.Include(includeProperty));
            }
            return await query.ToListAsync();
        }              

        public async Task<T> UpdateAsync(T entity)
        {
            entity.UpdateDate = entity.UpdateDate.HasValue ? entity.UpdateDate : DateTime.Now; ;
            entity.UpdatedBy = userId;
            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.Entry(entity).Property(x => x.CreationDate).IsModified = false;
            _dbContext.Entry(entity).Property(x => x.CreatedBy).IsModified = false;

            await _dbContext.SaveChangesAsync();

            return entity;
        }

    }
}
