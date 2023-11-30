namespace Models
{
  public class ResponseItem<T>
  {
    public T? item { get; set; }
    public bool status { get; set; } = false;
    public string msg { get; set; }
  }
}
