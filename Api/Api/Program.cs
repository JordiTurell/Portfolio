using Api;
using Config.Config;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Serilog;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((context, configuration) =>
configuration.ReadFrom.Configuration(context.Configuration));

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

string SpecificOrigins = "Policy";
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: SpecificOrigins,
      policy =>
      {
        policy.WithOrigins(builder.Configuration["AngularUrl"]).AllowAnyHeader()
                                                .AllowAnyMethod();
      });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
  option.SwaggerDoc("v1", new OpenApiInfo
  {
    Title = "Portfolio Api",
    Version = "V1"
  });

  option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
  {
    Scheme = "Bearer",
    BearerFormat = "JWT",
    In = ParameterLocation.Header,
    Name = "Authorization",
    Description = "Bearer Authorization with JWT Token",
    Type = SecuritySchemeType.Http
  });

  option.AddSecurityRequirement(new OpenApiSecurityRequirement {
        {
            new OpenApiSecurityScheme {
                Reference = new OpenApiReference {
                    Id = "Bearer",
                    Type = ReferenceType.SecurityScheme
                }
            },
            new List<string>()
        }
    });
});

var jwtSettings = builder.Configuration.GetSection("JwtSettings");

builder.Services.AddAuthentication(opt =>
{
  opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
  opt.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
  options.SaveToken = true;
  options.RequireHttpsMetadata = false;
  options.TokenValidationParameters = new TokenValidationParameters
  {
    ValidateIssuer = true,
    ValidateAudience = true,
    ValidIssuer = jwtSettings["validIssuer"],
    ValidAudience = jwtSettings["validAudience"],
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["securityKey"]))
  };

  options.Events = new JwtBearerEvents()
  {
    OnAuthenticationFailed = c =>
    {
      c.NoResult();
      c.Response.StatusCode = 500;
      c.Response.ContentType = "text/plain";
      return c.Response.WriteAsync(c.Exception.ToString());
    },

    OnChallenge = context =>
    {
      context.HandleResponse();
      context.Response.StatusCode = 404;
      context.Response.ContentType = "application/json";
      var result = JsonConvert.SerializeObject("Usted no esta autorizado");
      return context.Response.WriteAsync(result.ToString());
    },

    OnForbidden = context =>
    {
      context.Response.StatusCode = 400;
      context.Response.ContentType = "application/json";
      var result = JsonConvert.SerializeObject("Usted no tiene permisos sobre este recurso");
      return context.Response.WriteAsync(result.ToString());
    }
  };
});

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
  options.SignIn.RequireConfirmedAccount = true;
  options.Password.RequireDigit = true;
  options.Password.RequiredLength = 5;
  options.Password.RequireLowercase = true;
  options.Password.RequireNonAlphanumeric = false;
  options.Password.RequireUppercase = true;

  options.Lockout.AllowedForNewUsers = true;

}).AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();
builder.Services.RegisterReposApi();
builder.Services.AddControllersWithViews();

// Add services to the container.
builder.Services.AddControllers();

var app = builder.Build();
app.UseCors(SpecificOrigins);
// Configure the HTTP request pipeline.
if (!(!app.Environment.IsDevelopment()) || bool.Parse(app.Configuration["EnableSwagger"]))
{
  app.UseSwagger();
  app.UseSwaggerUI(c =>
  {
    //    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Aporta Api V1");
  });
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseSerilogRequestLogging();

app.MapControllers();

app.Run();
