using Api.JwtFeatures;
using Config.Repository;
using Entities;
using Services.JWTService;
using Services.LoginService;
using Services.SkillsService;
using Services.SobremiService;

namespace Api
{
  public static class Dependencias
  {
    public static void Repository(IServiceCollection collection)
    {
      collection.AddScoped<IRepository<Sobremi>, EfRepository<Sobremi>>();
      collection.AddScoped<IRepository<Skills>, EfRepository<Skills>>();
    }

    public static void Interface(IServiceCollection collection)
    {
      collection.AddScoped<JwtHandler>();
      collection.AddScoped<IJWTService, JWTService>();
      collection.AddScoped<ILoginService, LoginService>();
      collection.AddScoped<ISobremiService, SobremiService>();
      collection.AddScoped<ISkillsService, SkillsService>();
    }

    public static void RegisterReposApi(this IServiceCollection collection)
    {
      Repository(collection);
      Interface(collection);
    }
  }
}
