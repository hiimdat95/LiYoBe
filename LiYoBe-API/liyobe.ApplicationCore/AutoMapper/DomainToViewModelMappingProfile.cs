using AutoMapper;
using liyobe.ApplicationCore.Entities;
using liyobe.ApplicationCore.ViewModels.System;

namespace liyobe.ApplicationCore.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Function, FunctionViewModel>();
        }
    }
}