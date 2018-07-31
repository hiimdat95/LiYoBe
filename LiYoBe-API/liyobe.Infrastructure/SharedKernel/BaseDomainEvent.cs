using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.Infrastructure.SharedKernel
{
    public abstract class BaseDomainEvent
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
