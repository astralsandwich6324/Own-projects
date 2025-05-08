using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundamentos_de_programcion.Models
{
    internal class Cerveza
    {
        public int Id { get; set; }              
        public string Nombre { get; set; }       
        public string Marca { get; set; }        
        public int Alcohol { get; set; }         
        public int Cantidad { get; set; }        

        public override string ToString()
        {
            return $"{Id}: {Nombre} ({Marca}) - {Alcohol}% - Cantidad: {Cantidad}";
        }
    }

}
