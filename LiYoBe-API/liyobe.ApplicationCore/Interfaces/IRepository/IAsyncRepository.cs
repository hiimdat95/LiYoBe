﻿using liyobe.ApplicationCore.Interfaces.ISpecification;
using liyobe.ApplicationCore.SharedKernel;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace liyobe.ApplicationCore.Interfaces.IRepository
{
    public interface IAsyncRepository<T> where T : BaseEntity<T>
    {
        Task<T> GetByIdAsync(int id);
        Task<List<T>> ListAllAsync();
        Task<List<T>> ListAsync(ISpecification<T> spec);
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
    }
}