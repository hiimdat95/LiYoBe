using liyobe.Models.Entities;

namespace liyobe.ApplicationCore.Specifications
{
    public class FunctionSpecification : BaseSpecification<Function>
    {
        public FunctionSpecification(string functionId)
            : base(b => b.Id == functionId)
        {
            //AddInclude(b => b.);
        }
    }
}