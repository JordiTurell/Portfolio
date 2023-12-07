using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public class ProyectosImagenes
  {
    [Key]
    public Guid id { get; set; }
    public Guid idproyecto { get; set; }
    public byte[] imagen { get; set; }
  }
}
