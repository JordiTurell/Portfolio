using System.ComponentModel.DataAnnotations;

namespace Entities
{
  public class Skills
  {
    [Key]
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public int Percent { get; set; }
    public byte[]? Logo { get; set; }
    public bool ghost { get; set; }
  }
}
