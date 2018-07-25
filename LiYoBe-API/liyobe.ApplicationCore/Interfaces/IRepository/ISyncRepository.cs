using liyobe.ApplicationCore.Interfaces.ISpecification;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace liyobe.ApplicationCore.Interfaces.IRepository
{
    public interface ISyncRepository<T, K> where T : class
    {
        Task<T> GetById(int id);
        Task<T> GetSingleBySpec(ISpecification<T> spec);
        Task<IEnumerable<T>> ListAll();
        Task<IEnumerable<T>> List(ISpecification<T> spec);
        Task<T> Add(T entity);
        Task<int> Update(T entity);
        Task<int> Delete(T entity);
    }
}
