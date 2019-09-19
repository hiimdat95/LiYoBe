using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MiniSocial.Resoures.Data;
using MiniSocial.Resoures.Models;
using MiniSocial.Server.Shared;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MiniSocial.Resoures.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private DataContext _dataContext;
        public PostsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
       public IActionResult Create([FromBody]Post post)
        {
            _dataContext.Posts.InsertOne(post);
            return this.OkResult();
        }
    }
}
