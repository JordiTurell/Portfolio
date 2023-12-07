using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public class Proyecto
  {
    [Key]
    public Guid id { get; set; }
    public string? title { get; set; }
    public string? description { get; set; }
    public bool gohst { get; set; }
  }
}
