using AutoMapper;
using DTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services.ProyectoService;
using ViewModel;

namespace Api.Controllers
{
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ProyectosController : ControllerBase
  {
    private readonly IProyectoService _proyectoService;
    private readonly IMapper _mapper;

    public ProyectosController(IProyectoService proyectoService, IMapper mapper) {
      _proyectoService= proyectoService;
      _mapper=mapper;
    }

    [HttpGet]
    [Route("/[controller]/DataTable")]
    public IActionResult DataTable()
    {
      IQueryable<ProyectoDTO> dto = _proyectoService.DataTable();
      IQueryable<ProyectosVM> vm = _mapper.ProjectTo<ProyectosVM>(dto);

      return Ok(vm);
    }

    [HttpGet]
    [Route("/[controller]/GetProject/{id}")]
    public IActionResult GetProject(Guid id)
    {
      ProyectoDTO dto = _proyectoService.GetProject(id);
      ProyectosVM vm = _mapper.Map<ProyectosVM>(dto);

      return Ok(vm);
    }

    [HttpGet]
    [Route("/[controller]/GhostProject")]
    public async Task<IActionResult> GhostProject()
    {
      ProyectoDTO dto = _proyectoService.GhostProject();
      await _proyectoService.DeleteImages(dto.id);
      ProyectosVM vm = _mapper.Map<ProyectosVM>(dto);

      return Ok(vm);
    }

    [HttpPost]
    [Route("/[controller]/SetProject")]
    public async Task<IActionResult> SetProject([FromBody] ProyectosVM vm)
    {
      ProyectoDTO dto = _mapper.Map<ProyectoDTO>(vm);
      await _proyectoService.SetProject(dto);
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
      ProyectoDTO dto = _proyectoService.GetProject(id);
      
      await _proyectoService.SetImage(f, id);

      System.IO.File.Delete(filePath);

      return Ok("File uploaded successfully");
    }
  }
}
