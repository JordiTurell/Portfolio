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
    public Guid id { get; set; }
    public string name { get; set; }
    public int percent { get; set; }
    public string logo { get; set; }
    public byte[] imagen { get; set; }
    public bool ghost { get; set; }
  }
}
