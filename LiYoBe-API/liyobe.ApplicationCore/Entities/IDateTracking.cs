using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.ApplicationCore.Entities
{
    public interface IDateTracking
    {
        DateTime DateCreated { set; get; }

        DateTime DateModified { set; get; }
    }
}
