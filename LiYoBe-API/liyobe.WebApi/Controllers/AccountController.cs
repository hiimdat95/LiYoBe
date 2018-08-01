using liyobe.ApplicationCore.Interfaces.IServices;
using liyobe.Utilities.Constants;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace liyobe.WebApi.Controllers
{
    [Route(RoutesConstant.AccountApi)]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IUserService _userService;

        public AccountController(IUserService userService)
        {
            this._userService = userService;
        }
        [HttpGet]
        [Route(RoutesConstant.AccountGetAll)]
        public async Task<IActionResult> GetAll()
        {
            var resut = await _userService.GetAllAsync();
            return Ok(resut);
        }
        [HttpGet]
        [Route(RoutesConstant.AccountDetail)]
        public async Task<IActionResult> Detail(string userId)
        {
            var user = await _userService.GetById(userId);
            return Ok(user);
        }
    }
}