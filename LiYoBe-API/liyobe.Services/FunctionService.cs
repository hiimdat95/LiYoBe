using AutoMapper;
using liyobe.ApplicationCore.Entities;
using liyobe.ApplicationCore.Interfaces.IRepository;
using liyobe.ApplicationCore.Interfaces.IServices;
using liyobe.ApplicationCore.Interfaces.IUnitOfWork;
using liyobe.ApplicationCore.ViewModels.System;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace liyobe.Services
{
    public class FunctionService : IFunctionService
    {
        //private readonly IAsyncRepository<Function> _functionRepository;
        private IAsyncRepository<Function, string> _functionRepository;

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public FunctionService(IMapper mapper,
            IAsyncRepository<Function, string> functionRepository,
            IUnitOfWork unitOfWork)
        {
            _functionRepository = functionRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        //public bool CheckExistedId(string id)
        //{
        //    return _functionRepository.FindById(id) != null;
        //}

        //public void Add(FunctionViewModel functionVm)
        //{
        //    var function = _mapper.Map<Function>(functionVm);
        //    _functionRepository.Add(function);
        //}

        //public void Delete(string id)
        //{
        //    _functionRepository.Remove(id);
        //}

        //public FunctionViewModel GetById(string id)
        //{
        //    var function = _functionRepository.FindSingle(x => x.Id == id);
        //    return Mapper.Map<Function, FunctionViewModel>(function);
        //}

        public async Task<List<FunctionViewModel>> GetAll(string functionId)
        {
            //Guard.Against.NullOrEmpty(userName, nameof(userName));
            //var basketSpec = new FunctionSpecification(functionId);
            var query = await _functionRepository.ListAllAsync();

            //var data = (await query).ToList();

                var result = _mapper.Map<List<Function>, List<FunctionViewModel>>(query);
                return result;
            

            //var result = query.AsQueryable().ProjectTo<FunctionViewModel>().ToList();
        }

        //public IEnumerable<FunctionViewModel> GetAllWithParentId(string parentId)
        //{
        //    return _functionRepository.FindAll(x => x.ParentId == parentId).ProjectTo<FunctionViewModel>();
        //}

        //public void Save()
        //{
        //    _unitOfWork.Commit();
        //}

        //public void Update(FunctionViewModel functionVm)
        //{
        //    var functionDb = _functionRepository.FindById(functionVm.Id);
        //    var function = _mapper.Map<Function>(functionVm);
        //}

        //public void ReOrder(string sourceId, string targetId)
        //{
        //    var source = _functionRepository.FindById(sourceId);
        //    var target = _functionRepository.FindById(targetId);
        //    int tempOrder = source.SortOrder;

        //    source.SortOrder = target.SortOrder;
        //    target.SortOrder = tempOrder;

        //    _functionRepository.Update(source);
        //    _functionRepository.Update(target);
        //}

        //public void UpdateParentId(string sourceId, string targetId, Dictionary<string, int> items)
        //{
        //    //Update parent id for source
        //    var category = _functionRepository.FindById(sourceId);
        //    category.ParentId = targetId;
        //    _functionRepository.Update(category);

        //    //Get all sibling
        //    var sibling = _functionRepository.FindAll(x => items.ContainsKey(x.Id));
        //    foreach (var child in sibling)
        //    {
        //        child.SortOrder = items[child.Id];
        //        _functionRepository.Update(child);
        //    }
        //}

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}