using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.Infrastructure.SharedKernel
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
    public class IgnoreMemberAttribute : Attribute
    {
    }
}
