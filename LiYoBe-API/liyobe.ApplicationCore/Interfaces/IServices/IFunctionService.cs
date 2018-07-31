using liyobe.ApplicationCore.ViewModels.System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace liyobe.ApplicationCore.Interfaces.IServices
{
    public interface IFunctionService
    {
        Task<List<FunctionViewModel>> GetAll();

        Task<FunctionViewModel> GetById(string functionId);
    }
}