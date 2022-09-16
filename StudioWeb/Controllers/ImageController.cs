using Microsoft.AspNetCore.Mvc;

namespace StudioWeb.Controllers
{
    public class ImageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
