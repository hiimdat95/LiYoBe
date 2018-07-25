using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.ApplicationCore.Entities
{
    public interface ISwitchable
    {
        bool Status { set; get; }
    }
}
