using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace liyobe.ApplicationCore.SharedKernel
{
    public abstract class BaseEntity<T>
    {
        [StringLength(128)]
        public T Id { get; set; }

        public List<BaseDomainEvent> Events = new List<BaseDomainEvent>();
    }
}
