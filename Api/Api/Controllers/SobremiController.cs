using AutoMapper;
using DTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services.SobremiService;
using ViewModel;

namespace Api.Controllers
{
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class SobremiController:ControllerBase
  {
    private readonly ISobremiService _service;
    private readonly IMapper _mapper;

    public SobremiController(ISobremiService service, IMapper mapper) {
      _service = service;
      _mapper = mapper;
    }

    [HttpGet]
    [Route("/[controller]/Get")]
    public IActionResult Get()
    {
      SobremiDTO dto = _service.GetSobremi();
      SobremiVM vm = _mapper.Map<SobremiVM>(dto);
      return Ok(vm);
    }

    [HttpPost]
    [Route("/[controller]/Set")]
    public async Task<IActionResult> Set(SobremiVM vm)
    {
      SobremiDTO dto = _mapper.Map<SobremiDTO>(vm);
      await _service.SetSobremi(dto);
      return Ok(vm);
    }
  }
}
