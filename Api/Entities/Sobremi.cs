using System.ComponentModel.DataAnnotations;

namespace Entities
{
  public class Sobremi
  {
    [Key]
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
  }
}
