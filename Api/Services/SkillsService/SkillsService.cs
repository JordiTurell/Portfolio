using AutoMapper;
using Config.Repository;
using DTO;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Services.SkillsService
{
  public class SkillsService : ISkillsService
  {
    private readonly IRepository<Skills> _skillsRepository;
    private readonly IMapper _mapper;

    public SkillsService(IRepository<Skills> skillsRepository, IMapper mapper)
    {
      _skillsRepository = skillsRepository;
      _mapper = mapper;
    }

    public IQueryable<SkillsDto> DataTable()
    {
      return (from d in _skillsRepository.GetDbSet() select new SkillsDto()
      {
        Id = d.Id,
        Name = d.Name,
        Logo = "",
        Percent = d.Percent,
      });
    }

    public async Task<SkillsDto> SetSkills(SkillsDto dto)
    {
      Skills skills = _mapper.Map<Skills>(dto);
      if(skills.Id == Guid.Empty)
      {
        await _skillsRepository.CreateAsync(skills);
      }
      else
      {
        await _skillsRepository.EditAsync(skills);
      }
      return dto;
    }

    public SkillsDto GetSkill(Guid Id)
    {
      return (from d in _skillsRepository.GetDbSet() where d.Id == Id select new SkillsDto()
      {
        Id = d.Id,
        Name = d.Name,
        Logo = "",
        Percent = d.Percent,
      }).First();
    }
  }
}
