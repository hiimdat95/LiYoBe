using liyobe.ApplicationCore.Interfaces.ISpecification;
using liyobe.ApplicationCore.SharedKernel;
using System;
using System.Collections.Generic;
using System.Text;

namespace liyobe.ApplicationCore.Interfaces.IRepository
{
    public interface IRepository<T,K> where T : class
    {

        T GetById(int id);
        T GetSingleBySpec(ISpecification<T> spec);
        IEnumerable<T> ListAll();
        IEnumerable<T> List(ISpecification<T> spec);
        T Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
