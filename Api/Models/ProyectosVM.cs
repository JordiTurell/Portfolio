using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
  public class ProyectosVM
  {
    public Guid id { get; set; }
    public string? title { get; set; }
    public string? description { get; set; }
    public bool gohst { get; set; }
    public List<Guid>? idskills { get; set; } 
    public List<string>? imagenes { get; set; }
  }
}
