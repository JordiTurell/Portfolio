using Api.JwtFeatures;
using Services.JWTService;

namespace Api
{
  public static class Dependencias
  {
    public static void Repository(IServiceCollection collection)
    {

    }

    public static void Interface(IServiceCollection collection)
    {
      collection.AddScoped<JwtHandler>();
      collection.AddScoped<IJWTService, JWTService>();
    }

    public static void RegisterReposApi(this IServiceCollection collection)
    {
      Repository(collection);
      Interface(collection);
    }
  }
}
