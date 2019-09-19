using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MiniSocial.Server.Shared;

namespace MiniSocial.Identity.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return this.OkResult("Hello World");
        }
    }
}