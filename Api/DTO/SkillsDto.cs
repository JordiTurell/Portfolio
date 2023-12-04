using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class SkillsDto
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int Percent { get; set; }
    public string Logo { get; set; }
  }
}
