using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.SkillsService
{
  public interface ISkillsService
  {
    SkillsDto GetSkill(Guid Id);
    Task<SkillsDto> SetImage(SkillsDto dto);
    IQueryable<SkillsDto> DataTable();
    SkillsDto GhostSkill();
    Task SetSkills(SkillsDto dto);
    byte[] GetImage(Guid id);
  }
}
