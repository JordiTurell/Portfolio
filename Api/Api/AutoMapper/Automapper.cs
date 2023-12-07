using AutoMapper;
using DTO;
using Entities;
using ViewModel;

namespace Api.AutoMapper
{
  public class Automapper : Profile
  {
    public Automapper()
    {
      CreateMap<SobremiDTO, SobremiVM>().ReverseMap();
      CreateMap<Sobremi, SobremiDTO>().ReverseMap();

      CreateMap<SkillsDto, SkillsVM>().ReverseMap();
      CreateMap<Skills, SkillsDto>().ReverseMap();
      CreateMap<ProyectoDTO, ProyectosVM>().ReverseMap();
      CreateMap<Proyecto, ProyectoDTO>().ReverseMap();
    }
  }
}
