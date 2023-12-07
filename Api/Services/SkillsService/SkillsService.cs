using AutoMapper;
using Config.Config;
using Config.Repository;
using DTO;
using Entities;
using Microsoft.Extensions.Configuration;
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
    private readonly IConfiguration _config;
    public SkillsService(IRepository<Skills> skillsRepository, IMapper mapper, IConfiguration config)
    {
      _skillsRepository = skillsRepository;
      _mapper = mapper;
      _config = config;
    }

    public IQueryable<SkillsDto> DataTable()
    {
      return (from d in _skillsRepository.GetDbSet() where d.ghost == false select new SkillsDto()
      {
        id = d.Id,
        name = d.Name,
        logo = string.Format("{0}{1}", _config["SkillLogo"], d.Id),
        percent = d.Percent,
      });
    }

    public async Task<SkillsDto> SetImage(SkillsDto dto)
    {
      Skills skills = (from d in _skillsRepository.GetDbSet()
                        where d.Id == dto.id
                        select d).First();
      if (dto.imagen != null)
      {
        skills.Logo = dto.imagen;
      }
      await _skillsRepository.EditAsync(skills);
      return dto;
    }

    public SkillsDto GetSkill(Guid Id)
    {
      return (from d in _skillsRepository.GetDbSet() where d.Id == Id select new SkillsDto()
      {
        id = d.Id,
        name = d.Name,
        logo = string.Format("{0}{1}", _config["SkillLogo"], d.Id),
        percent = d.Percent,
      }).First();
    }

    public SkillsDto GhostSkill()
    {
      Skills? skill = (from d in _skillsRepository.GetDbSet() where d.ghost == true select d).FirstOrDefault();
      if (skill == null)
      {
        skill = new Skills()
        {
          Id = Guid.NewGuid(),
          ghost = true
        };
        _skillsRepository.CreateAsync(skill);
      }
      SkillsDto dto = _mapper.Map<SkillsDto>(skill);
      return dto;
    }

    public async Task SetSkills(SkillsDto dto)
    {
      Skills skills = (from d in _skillsRepository.GetDbSet()
                       where d.Id == dto.id
                       select d).First();
      skills.Name = dto.name;
      skills.Percent = dto.percent;
      skills.ghost= dto.ghost;

      await _skillsRepository.EditAsync(skills);
    }

    public byte[] GetImage(Guid id)
    {
      return (from d in _skillsRepository.GetDbSet() where d.Id == id select d.Logo).First();
    }
  }
}
