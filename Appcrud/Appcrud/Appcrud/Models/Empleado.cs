namespace Appcrud.Models
{
    public class Empleado
    {
        public int IdEmpleado { get; set; }

        public string NombreCompleto { get; set; }

        public string Correo { get; set; }

        public DateOnly FecheContrato { get; set; }

        public bool Activo { get; set; }
    }
}
