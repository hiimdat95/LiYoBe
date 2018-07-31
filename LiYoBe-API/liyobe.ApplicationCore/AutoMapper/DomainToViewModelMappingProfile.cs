using AutoMapper;
using liyobe.ApplicationCore.ViewModels.System;
using liyobe.Models.Entities;

namespace liyobe.ApplicationCore.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            //CreateMap<Function, FunctionViewModel>();
            CreateMap<Function, FunctionViewModel>();
        }
    }
}