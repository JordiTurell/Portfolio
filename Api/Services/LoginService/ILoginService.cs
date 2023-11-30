using Config.Config;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.LoginService
{
  public interface ILoginService
  {
    Task<ApplicationUser> LoginAsync(string username, string password);
    Task<string?> GetRole(ApplicationUser user);
  }
}
