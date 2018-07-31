using liyobe.ApplicationCore.Interfaces.IServices;
using liyobe.Utilities.Constants;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace liyobe.WebApi.Controllers
{
    [Route(RoutesConstant.FunctionApi)]
    [ApiController]
    public class FunctionController : ControllerBase
    {
        private IFunctionService _functionService;

        public FunctionController(IFunctionService functionService)
        {
            _functionService = functionService;
        }

        // GET api/values
        [HttpGet]
        [Route(RoutesConstant.FunctionGetAll)]
        public async Task<IActionResult> GetAll()
        {
            var listFunction = await _functionService.GetAll();
            return Ok(listFunction);
        }
        [HttpGet]
        [Route(RoutesConstant.FunctionDetail)]
        public async Task<IActionResult> Detail(string functionId)
        {
            var function = await _functionService.GetById(functionId);
            return Ok(function);
        }
    }
}