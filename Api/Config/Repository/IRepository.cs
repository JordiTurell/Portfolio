using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Config.Repository
{
    public interface IRepository<TEntity> where TEntity: class
    {
    DbSet<TEntity> GetDbSet();

    Task<List<TEntity>> GetListAsync();

    Task<TEntity> GetByIdAsync(Expression<Func<TEntity, bool>> predicate);

    Task CreateAsync(TEntity entity);

    Task CreateRangeAsync(List<TEntity> entity);

    Task<TEntity> EditAsync(TEntity entity);

    List<TEntity> EditRange(List<TEntity> entity);

    Task DeleteAsync(TEntity entity);

    Task DeleteRangeAsync(List<TEntity> entity);
  }
}
