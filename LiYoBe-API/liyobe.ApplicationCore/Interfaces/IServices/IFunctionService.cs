using liyobe.ApplicationCore.ViewModels.System;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace liyobe.ApplicationCore.Interfaces.IServices
{
    public interface IFunctionService
    {
        Task<List<FunctionViewModel>> GetAll(string functionId);
    }
}
