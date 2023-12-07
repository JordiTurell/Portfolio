using AutoMapper;
using Config.Repository;
using DTO;
using Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.ProyectoService
{
  public class ProyectoService : IProyectoService
  {
    private readonly IRepository<Proyecto> _proyectosRepository;
    private readonly IRepository<ProyectosImagenes> _imagenesRepo;
    private readonly IRepository<ProyectoSkills> _skillsproyectoRepository;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public ProyectoService(IRepository<Proyecto> proyectosRepository, IRepository<ProyectosImagenes> imagenesRepo, IRepository<ProyectoSkills> skillsproyectoRepository, IMapper mapper, IConfiguration config) {
      _proyectosRepository = proyectosRepository;
      _imagenesRepo = imagenesRepo;
      _skillsproyectoRepository = skillsproyectoRepository;
      _mapper = mapper;
      _config = config;
    }

    public IQueryable<ProyectoDTO> DataTable()
    {
      return (from d in _proyectosRepository.GetDbSet()
              where d.gohst == false
              select new ProyectoDTO()
              {
                id = d.id,
                title = d.title,
                idskills = (from s in _skillsproyectoRepository.GetDbSet() where s.idproyecto == d.id select s.id).ToList(),
                imagenes = (from i in _imagenesRepo.GetDbSet() where i.idproyecto == d.id select string.Format("{0}{1}", _config["ImangeProyecto"], i.id)).ToList(),
              });
    }

    public async Task DeleteImages(Guid id)
    {
      List<ProyectosImagenes> imagenes = (from d in _imagenesRepo.GetDbSet() where d.idproyecto == id select d).ToList();
      await _imagenesRepo.DeleteRangeAsync(imagenes);
    }

    public ProyectoDTO GetProject(Guid id)
    {
      return (from d in _proyectosRepository.GetDbSet()
              where d.id == id
              select new ProyectoDTO()
              {
                id = d.id,
                title = d.title,
                description = d.description,
              }).First();
    }

    public ProyectoDTO GhostProject()
    {
      Proyecto? proyecto = (from d in _proyectosRepository.GetDbSet() where d.gohst == true select d).FirstOrDefault();
      if (proyecto == null)
      {
        proyecto = new Proyecto()
        {
          id = Guid.NewGuid(),
          gohst = true
        };
        _proyectosRepository.CreateAsync(proyecto);
      }
      ProyectoDTO dto = _mapper.Map<ProyectoDTO>(proyecto);
      return dto;
    }

    public async Task SetImage(byte[] f, Guid id)
    {
      ProyectosImagenes pi = new ProyectosImagenes()
      {
        id = Guid.NewGuid(),
        idproyecto = id,
        imagen = f
      };
      await _imagenesRepo.CreateAsync(pi);
    }

    public async Task SetProject(ProyectoDTO dto)
    {
      Proyecto p = (from d in _proyectosRepository.GetDbSet() where d.id == dto.id select d).First();
      p.title = dto.title;
      p.description = dto.description;

      if(dto.idskills.Count > 0)
      {
        foreach(Guid id in  dto.idskills)
        {
          ProyectoSkills skills = new ProyectoSkills()
          {
            id = Guid.NewGuid(),
            idproyecto = dto.id,
            idskill = id
          };
          await _skillsproyectoRepository.CreateAsync(skills);
        }
      }

      p.gohst = false;
      await _proyectosRepository.EditAsync(p);
    }
  }
}
