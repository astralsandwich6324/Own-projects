namespace itla_virtual.Models
{
    public class DataQuestion
    {
        

        public List<string> Preguntas { get; set; } = new List<string>();

        public List<string> CantidadPreguntas()
        {
            return Preguntas;
        }
    }
}
