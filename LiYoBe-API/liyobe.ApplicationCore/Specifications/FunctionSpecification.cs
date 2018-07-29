using DA.ApplicationCore.Specifications;
using liyobe.ApplicationCore.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.ApplicationCore.Specifications
{
    public class FunctionSpecification : BaseSpecification<Function>
    {
        public FunctionSpecification(string functionId)
            :base(b => b.Id == functionId)
        {
            //AddInclude(b => b.);
        }
    }
}
