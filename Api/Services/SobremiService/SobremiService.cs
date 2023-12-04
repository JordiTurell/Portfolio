using AutoMapper;
using Config.Repository;
using DTO;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.SobremiService
{
  public class SobremiService : ISobremiService
  {
    private readonly IRepository<Sobremi> _sobremiRepo;
    private readonly IMapper _mapper;

    public SobremiService(IRepository<Sobremi> sobremiRepo, IMapper mapper)
    {
      _sobremiRepo = sobremiRepo;
      _mapper = mapper;
    }

    public SobremiDTO GetSobremi()
    {
      try
      {
        Sobremi sobremi = (from d in _sobremiRepo.GetDbSet() select d).First();
        SobremiDTO dto = _mapper.Map<SobremiDTO>(sobremi);
        return dto;
      }catch(Exception ex)
      {
        return new SobremiDTO()
        {
          Title = string.Empty,
          Description = string.Empty,
          Id = Guid.Empty
        };
      }
    }

    public async Task<SobremiDTO> SetSobremi(SobremiDTO dto)
    {
      Sobremi sobremi = _mapper.Map<Sobremi>(dto);
      if (sobremi.Id == Guid.Empty)
      {
        await _sobremiRepo.CreateAsync(sobremi);
      }
      else
      {
        await _sobremiRepo.EditAsync(sobremi);
      }
      return dto;
    }
  }
}
