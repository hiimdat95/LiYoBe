using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.Infrastructure.Interfaces.IUnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        /// <summary>
        /// Call save change from db context
        /// </summary>
        void Commit();
    }
}