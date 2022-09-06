using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebAPIOrderTracking.Models;


namespace WebAPIOrderTracking.Controllers
{
  [Route("api/auth")]
      [ApiController]
      public class AuthController : ControllerBase
      {
            [HttpPost("login")]
            public IActionResult Login([FromBody] LoginModel user)
            {
                  if (user is null)
                  {
                        return BadRequest("Invalid client request");
                  }
                  if (user.UserName == "johndoe" && user.Password == "def@123")
                  {
                        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                        var tokeOptions = new JwtSecurityToken(
                        issuer: "https://localhost:44364",
                        audience: "https://localhost:44364",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(5),
                        signingCredentials: signinCredentials
                        );
                        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                        return Ok(new AuthenticatedResponse { Token = tokenString });
                  }
            return Unauthorized();
            }
      }
}