using itla_virtual.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using static System.Net.Mime.MediaTypeNames;

namespace itla_virtual.Controllers
{
    public class FormController : Controller
    {

        FileHandler oPost = new FileHandler();
       
        public IActionResult Adddata()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> NewData(DataQuestion oDataQuestion)
        {
           if(oDataQuestion == null)
            {
                return BadRequest("Es objeto recibido es nulo");
            }


           await FileHandler.SaveJsonToFileAsync(oDataQuestion);

            return Ok(new { message = "objetos guardados correctamente" });

        } 
    }
}
