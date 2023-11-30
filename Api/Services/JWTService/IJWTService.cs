using Config.Config;
using System.Security.Claims;

namespace Services.JWTService
{
  public interface IJWTService
  {
    Task<ApplicationUser> ConvertTokenToUser(ClaimsIdentity claims);
    Task<ApplicationUser> ConvertTokenToUser(string username);
  }
}
