using Api.JwtFeatures;
using Config.Config;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services.LoginService;
using System.IdentityModel.Tokens.Jwt;

namespace Api.Controllers
{
  [ApiController]
  [Route("/[controller]")]
  public class Acceso : ControllerBase
  {
    private readonly ILoginService _loginService;
    private readonly JwtHandler _jwtHandler;

    public Acceso(ILoginService loginService, JwtHandler jwtHandler) {
      _jwtHandler = jwtHandler;
      _loginService = loginService;
    }

    [HttpPost]
    [Route("Login")]
    public async Task<IActionResult> Login([FromBody] Login model)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      
      ApplicationUser user = await _loginService.LoginAsync(model.user, model.password);
      if(user != null) { 
        var signingCredentials = _jwtHandler.GetSigningCredentials();
        string? role = await _loginService.GetRole(user);
        if (!string.IsNullOrEmpty(role))
        {
          var claims = _jwtHandler.GetClaims(user, role);
          var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
          var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

          Token t = new Token()
          {
            token = token,
            expire = tokenOptions.ValidTo
          };

          return Ok(t);
        }
      }
      return Unauthorized();
    }
  }
}
