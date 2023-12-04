using Config.Config;
using Microsoft.AspNetCore.Identity;

namespace Services.LoginService
{
  public class LoginService : ILoginService
  {
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly UserManager<ApplicationUser> _userManager;
    
    public LoginService(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager) {
      _signInManager = signInManager;
      _userManager = userManager;
    }

    public async Task<ApplicationUser?> LoginAsync(string username, string password)
    {
      var result = await _signInManager.PasswordSignInAsync(username, password, false, false);
      if (result.Succeeded)
      {
        ApplicationUser? usuario = await _userManager.FindByNameAsync(username);
        if (usuario != null)
        {
          string? role = await GetRole(usuario);
          if (!string.IsNullOrEmpty(role))
          {
            return usuario;
          }
        }
      }
      return null;
    }

    public async Task<string?> GetRole(ApplicationUser user)
    {
      IList<string> role = await _userManager.GetRolesAsync(user);
      if (role.FirstOrDefault() == "Admin")
      {
        return role.FirstOrDefault();
      }
      return "";
    }
  }
}
