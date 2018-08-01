using AutoMapper;
using liyobe.ApplicationCore.ViewModels.System;
using liyobe.Models.Entities;

namespace liyobe.ApplicationCore.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Function, FunctionViewModel>();
            CreateMap<AppUser, AppUserViewModel>().ForMember(x => x.Password, o => o.MapFrom(y => y.PasswordHash));
            CreateMap<AppRole, AppRoleViewModel>();
        }
    }
}