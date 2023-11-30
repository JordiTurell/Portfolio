using Config.Config;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Services.JWTService
{
  public class JWTService : IJWTService
  {
    private readonly UserManager<ApplicationUser> _userManager;
    public JWTService(UserManager<ApplicationUser> userManager)
    {
      _userManager = userManager;
    }

    public async Task<ApplicationUser> ConvertTokenToUser(ClaimsIdentity claims)
    {
      var user = await _userManager.FindByNameAsync(claims.Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault().Value);
      if (user != null)
      {
        return user;
      }
      return null;
    }

    public async Task<ApplicationUser> ConvertTokenToUser(string username)
    {
      var user = await _userManager.FindByNameAsync(username);
      if (user != null)
      {
        return user;      
      }
      return null;
    }
  }
}
