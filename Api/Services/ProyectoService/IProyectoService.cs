using DTO;

namespace Services.ProyectoService
{
  public interface IProyectoService
  {
    IQueryable<ProyectoDTO> DataTable();
    Task DeleteImages(Guid id);
    ProyectoDTO GetProject(Guid id);
    ProyectoDTO GhostProject();
    Task SetImage(byte[] f, Guid id);
    Task SetProject(ProyectoDTO dto);
  }
}
