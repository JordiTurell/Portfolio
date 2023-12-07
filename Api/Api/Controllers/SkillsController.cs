using AutoMapper;
using DTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services.SkillsService;
using ViewModel;

namespace Api.Controllers
{
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class SkillsController: ControllerBase
  {
    private readonly ISkillsService _skillsService;
    private readonly IMapper _mapper;

    public SkillsController(ISkillsService skillsService, IMapper mapper) {
      _skillsService = skillsService;
      _mapper = mapper;
    }

    [HttpGet]
    [Route("/[controller]/DataTable")]
    public IActionResult DataTable()
    {
      IQueryable<SkillsDto> dto = _skillsService.DataTable();
      IQueryable<SkillsVM> vm = _mapper.ProjectTo<SkillsVM>(dto);

      return Ok(vm);
    }

    [HttpGet]
    [Route("/[controller]/GetSkill/{id}")]
    public IActionResult GetSkill(Guid id)
    {
      SkillsDto dto = _skillsService.GetSkill(id);
      SkillsVM vm = _mapper.Map<SkillsVM>(dto);

      return Ok(vm);
    }

    [HttpGet]
    [Route("/[controller]/GhostSkill")]
    public IActionResult GhostSkill()
    {
      SkillsDto dto = _skillsService.GhostSkill();
      SkillsVM vm = _mapper.Map<SkillsVM>(dto);

      return Ok(vm);
    }

    [HttpPost]
    [Route("/[controller]/SetSkills")]
    public async Task<IActionResult> SetSkills([FromBody] SkillsVM vm)
    {
      SkillsDto dto = _mapper.Map<SkillsDto>(vm);
      await _skillsService.SetSkills(dto);
      return Ok(vm);
    }

    [HttpPost]
    [Route("/[controller]/UploadFile/{id}")]
    public async Task<IActionResult> UploadFile([FromForm] IFormFile file, Guid id)
    {
      if (file == null || file.Length == 0)
      {
        return BadRequest("File is null or empty");
      }

      var filePath = Path.Combine("uploads", file.FileName);

      using (var stream = new FileStream(filePath, FileMode.Create))
      {
        await file.CopyToAsync(stream);
      }

      byte[] f = System.IO.File.ReadAllBytes(filePath);
      SkillsDto dto = _skillsService.GetSkill(id);
      dto.imagen = f;
      await _skillsService.SetImage(dto);

      System.IO.File.Delete(filePath);

      return Ok("File uploaded successfully");
    }
  }
}
