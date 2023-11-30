using Config.Config;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Models;
using Services.JWTService;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Api.JwtFeatures
{
  public class JwtHandler
  {
    private readonly IConfiguration _configuration;
    private readonly IConfigurationSection _jwtSettings;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IJWTService _jwt;

    public JwtHandler(IConfiguration configuration, IJWTService jwt, UserManager<ApplicationUser> userManager)
    {
      _jwt = jwt;
      _configuration = configuration;
      _userManager = userManager;
      _jwtSettings = _configuration.GetSection("JwtSettings");
    }

    public SigningCredentials GetSigningCredentials()
    {
      var key = Encoding.UTF8.GetBytes(_jwtSettings.GetSection("securityKey").Value);
      var secret = new SymmetricSecurityKey(key);
      return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
    }

    public List<Claim> GetClaims(IdentityUser user, string rol)
    {
      var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, rol)
            };
      return claims;
    }

    public JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
    {
      var tokenOptions = new JwtSecurityToken(
          issuer: _jwtSettings["validIssuer"],
          audience: _jwtSettings["validAudience"],
          claims: claims,
          expires: DateTime.Now.AddMinutes(Convert.ToDouble(_jwtSettings.GetSection("expiryInMinutes").Value)),
          signingCredentials: signingCredentials);
      return tokenOptions;
    }

    public async Task<ResponseItem<string>> ValidatedTokenRequest(string token)
    {
      ResponseItem<string> response = new ResponseItem<string>();
      JwtSecurityToken t = new JwtSecurityTokenHandler().ReadJwtToken(token);
      ApplicationUser user = await _userManager.FindByNameAsync(t.Claims.FirstOrDefault().Value);

      t.Payload.TryGetValue("exp", out var exp);
      if (exp != null)
      {
        long unixtimestamp = Convert.ToInt64(exp);
        DateTimeOffset expirationTime = DateTimeOffset.FromUnixTimeSeconds(unixtimestamp);
        if (expirationTime.Date >= DateTime.Now)
        {

          if (user != null)
          {
            IList<string> role = await _userManager.GetRolesAsync(user);

            var signingCredentials = GetSigningCredentials();
            var claims = GetClaims(user, role.FirstOrDefault());
            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
            var generatetoken = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            response.item = generatetoken;
            response.status = true;
            return response;
          }
        }
      }
      response.item = string.Empty;
      response.status = false;

      return response;
    }
  }
}
