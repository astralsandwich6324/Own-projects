using Fundamentos_de_programcion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundamentos_de_programcion
{
    internal class SqlServer
    {
        static void Main(string[] args)
        {
            CervezaBD cervezaBD = new CervezaBD();

            //insertamos nuevas cervezas
            //{
            //    var cerveza = new Cerveza();

            //    cerveza.Cantidad = 10;
            //    cerveza.Marca = "Pale ale";
            //    cerveza.Alcohol = 5;
            //    cerveza.Nombre = "Minerva";
            //    cervezaBD.Add(cerveza);


            //}
            ////Editar
            //{
            //    var cerveza = new Cerveza();

            //    cerveza.Cantidad = 10;
            //    cerveza.Marca = "Presidente";
            //    cerveza.Alcohol = 6;
            //    cerveza.Nombre = "Minervas";
            //    cervezaBD.Edit(cerveza, 4);
            //}

            //Delete
            {
                cervezaBD.Delete(4);
            }

            //obtener todas las cervezas
            var cervezas = cervezaBD.Get();

            foreach (var cerveza in cervezas)
            {
                Console.WriteLine(cerveza.Nombre);
            }
        }
    }
}
