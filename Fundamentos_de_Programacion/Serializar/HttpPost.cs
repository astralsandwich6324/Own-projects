using Fundamentos_de_programcion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Fundamentos_de_programcion
{
    internal class HttpPost
    {
        //static async Task Main(string[] args)
        //{
        //    string url = "https://jsonplaceholder.typicode.com/posts";

        //    HttpClient client = new HttpClient();

        //    Post post = new Post()
        //    {

        //        userId = 50,
        //        body = "hola como estan?",
        //        title = "titulo de saludo"

        //    };

        //    var data = JsonSerializer.Serialize<Post>(post);

        //    HttpContent content = 
        //        new StringContent(data,
        //        System.Text.Encoding.UTF8, "application/json");

        //    var httpResponse = await client.PostAsync(url, content);

        //    if (httpResponse.IsSuccessStatusCode)
        //    {
        //        var result = await httpResponse.Content.ReadAsStringAsync();

        //        var PostResult = JsonSerializer.Deserialize<Post>(result);
        //    }
        //}
    }
}
