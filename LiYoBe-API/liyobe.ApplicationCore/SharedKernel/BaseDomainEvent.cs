using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.ApplicationCore.SharedKernel
{
    public abstract class BaseDomainEvent
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
