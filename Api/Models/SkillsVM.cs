using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
  public class SkillsVM
  {
    public Guid id { get; set; }
    public string name { get; set; }
    public int percent { get; set; }
    public string logo { get; set; }
    public bool ghost { get; set; }
  }
}
