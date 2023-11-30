using Config.Config;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Reflection;
using System.Security.Claims;

namespace Config.Repository
{
  public class EfRepository<TEntity> : IRepository<TEntity> where TEntity : class
  {
    private readonly ApplicationDbContext _context;

    public EfRepository(ApplicationDbContext context)
    {
      _context = context;
    }

    public DbSet<TEntity> GetDbSet()
    {
      return _context.Set<TEntity>();
    }

    public async Task CreateAsync(TEntity entity)
    {
      _context.Add(entity);
      await _context.SaveChangesAsync();
    }

    public async Task CreateRangeAsync(List<TEntity> entity)
    {
      _context.AddRange(entity);
      await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(TEntity entity)
    {
      _context.Remove(entity);
      await _context.SaveChangesAsync();
    }

    public async Task DeleteRangeAsync(List<TEntity> entity)
    {
      _context.RemoveRange(entity);
      await _context.SaveChangesAsync();
    }

    public async Task<TEntity> EditAsync(TEntity entity)
    {
      
      _context.Update(entity);
      await _context.SaveChangesAsync();
      return entity;
    }

    public List<TEntity> EditRange(List<TEntity> entity)
    {
      _context.UpdateRange(entity);
      _context.SaveChanges();
      return entity;
    }

    public Task<TEntity> GetByIdAsync(Expression<Func<TEntity, bool>> predicate)
    {
      return _context.Set<TEntity>().FirstOrDefaultAsync(predicate);
    }

    public Task<List<TEntity>> GetListAsync()
    {
      return _context.Set<TEntity>().ToListAsync();
    }
  }
}
