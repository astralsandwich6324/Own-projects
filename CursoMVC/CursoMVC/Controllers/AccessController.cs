using Microsoft.AspNetCore.Mvc;

namespace CursoMVC.Controllers
{
    public class AccessController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Enter(string user, string password)
        {
            try
            {
                return
            }catch (Exception ex)
            {
                return Content("ocurrio un error :(" + ex.Message);
            }
        }
    }
}
