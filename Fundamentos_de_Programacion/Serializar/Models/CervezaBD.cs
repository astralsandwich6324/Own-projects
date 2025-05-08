using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundamentos_de_programcion.Models
{
    internal class CervezaBD
    {
        private string connectionString
            = "Data Source=ANSTRALSANDWICH\\SQLEXPRESS;Initial Catalog=Bebidas;" +
            "Integrated Security=True;Trusted_Connection=True;TrustServerCertificate=True;";


        public List<Cerveza> Get()
        {
            List<Cerveza> cervezas = new List<Cerveza>();

            string query = "select nombre, marca, alcohol, cantidad" +
                " from Cervezas";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);

                connection.Open();

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    Cerveza cerveza = new Cerveza();

                    cerveza.Alcohol = reader.GetInt32(2);
                    cerveza.Nombre = reader.GetString(0);
                    cerveza.Marca = reader.GetString(1);
                    cerveza.Cantidad = reader.GetInt32(3);

                    cervezas.Add(cerveza);
                }

                reader.Close();


                connection.Close();
            }

                return cervezas;
        }

        public void Add(Cerveza cerveza)
        {
            string query
                = "insert into Cervezas(nombre, marca, alcohol, cantidad) " +
                "values(@nombre, @marca, @alcohol, @cantidad)";

            using (var connection = new SqlConnection(connectionString))
            {
                var command = new SqlCommand(query, connection);

                command.Parameters.AddWithValue("@nombre", cerveza.Nombre);
                command.Parameters.AddWithValue("@marca", cerveza.Marca);
                command.Parameters.AddWithValue("@alcohol", cerveza.Alcohol);
                command.Parameters.AddWithValue("@cantidad", cerveza.Cantidad);

                connection.Open();

                command.ExecuteNonQuery();



                connection.Close();
            }
        }

        public void Edit(Cerveza cerveza, int Id)
        {
            string query
                = "update Cervezas set nombre=@nombre, marca=@marca, " +
                "alcohol=@alcohol, cantidad=@cantidad " + 
                "where id=@id";

            using (var connection = new SqlConnection(connectionString))
            {
                var command = new SqlCommand(query, connection);

                command.Parameters.AddWithValue("@nombre", cerveza.Nombre);
                command.Parameters.AddWithValue("@marca", cerveza.Marca);
                command.Parameters.AddWithValue("@alcohol", cerveza.Alcohol);
                command.Parameters.AddWithValue("@cantidad", cerveza.Cantidad);
                command.Parameters.AddWithValue("@id", Id);

                connection.Open();

                command.ExecuteNonQuery();



                connection.Close();
            }
        }

        public void Delete(int Id)
        {
            string query
                = "delete from Cervezas " +
                "where id=@id";

            using (var connection = new SqlConnection(connectionString))
            {
                var command = new SqlCommand(query, connection);

                
                command.Parameters.AddWithValue("@id", Id);

                connection.Open();

                command.ExecuteNonQuery();



                connection.Close();
            }
        }
    }
}
