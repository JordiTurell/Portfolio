using AutoMapper;
using DTO;
using Microsoft.AspNetCore.Mvc;
using Services.SkillsService;
using Services.SobremiService;
using ViewModel;

namespace Api.Controllers
{
  [ApiController]
  public class FrontController : ControllerBase
  {
    private readonly ISkillsService _skillsService;
    private readonly ISobremiService _sobremiService;
    private readonly IMapper _mapper;

    public FrontController(ISkillsService skillsService, ISobremiService sobremiService, IMapper mapper)
    {
      _skillsService = skillsService;
      _sobremiService = sobremiService;
      _mapper = mapper;
    }

    [HttpGet]
    [Route("/[controller]/Getsobremi")]
    public IActionResult Get()
    {
      SobremiDTO dto = _sobremiService.GetSobremi();
      SobremiVM vm = _mapper.Map<SobremiVM>(dto);
      return Ok(vm);
    }

    [HttpGet]
    [Route("/[controller]/Skills")]
    public IActionResult DataTable()
    {
      IQueryable<SkillsDto> dto = _skillsService.DataTable();
      IQueryable<SkillsVM> vm = _mapper.ProjectTo<SkillsVM>(dto);

      return Ok(vm);
    }

    [HttpGet]
    [Route("/[controller]/SkillLogo/{id}")]
    public IActionResult DataTable(Guid id)
    {
      byte[] bites = _skillsService.GetImage(id);
      if (bites.Length > 0)
      {
        var tipocontenido = "image/png";
        return File(bites, tipocontenido);
      }
      return null;
    }
  }
}
