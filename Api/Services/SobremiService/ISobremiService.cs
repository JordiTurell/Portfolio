using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.SobremiService
{
  public interface ISobremiService
  {
    SobremiDTO GetSobremi();
    Task<SobremiDTO> SetSobremi(SobremiDTO dto);
  }
}
