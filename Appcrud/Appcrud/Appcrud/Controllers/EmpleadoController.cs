using Microsoft.AspNetCore.Mvc;
using Appcrud.Data;
using Appcrud.Models;
using Microsoft.EntityFrameworkCore;

namespace Appcrud.Controllers
{
    public class EmpleadoController : Controller
    {
        private readonly AppDBContext _appDBContext;

        public EmpleadoController(AppDBContext appDBContext)
        {
            _appDBContext = appDBContext;
        }

        [HttpGet]
        public async Task<IActionResult> Lista()
        {
            List<Empleado> list = await _appDBContext.Empleados.ToListAsync();
            return View(list);
        }

        [HttpGet]
        public IActionResult Nuevo()
        {
           
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Nuevo(Empleado empleado)
        {
            await _appDBContext.Empleados.AddAsync(empleado);
            await _appDBContext.SaveChangesAsync();
            return RedirectToAction(nameof(Lista));
        }
    }
}
