using Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Config.Config
{
  public class ApplicationUser : IdentityUser
  {

  }
  public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){
    }

    public DbSet<Sobremi> Sobremi { get; set; }
    public DbSet<Skills> Skills { get; set; }
    public DbSet<Proyecto> Proyecto { get; set; }
    public DbSet<ProyectosImagenes> ProyectosImagenes { get; set; }
    public DbSet<ProyectoSkills> ProyectoSkills { get; set; }
  }  
}
