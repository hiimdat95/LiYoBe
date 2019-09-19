﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MiniSocial.Identity.Models;
using MiniSocial.Identity.ViewModels;
using MiniSocial.Server.Shared;
using MiniSocial.Server.Shared.Strings;

namespace MiniSocial.Identity.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        UserManager<User> UserManager { get; }
        public AccountController(UserManager<User> userManager)
        {
            UserManager = userManager;
        }
        

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            if (string.IsNullOrEmpty(model.Email))
                return this.ErrorResult(ErrorCode.REGISTER_REQUIRED_EMAIL);
            var user = new User() { Email = model.Email, UserName = model.Email };
            user.Claims.Add(new IdentityUserClaim<string>()
            {
                ClaimType = JwtClaimTypes.GivenName,
                ClaimValue = model.Firstname

            });
            user.Claims.Add(new IdentityUserClaim<string>()
            {
                ClaimType = JwtClaimTypes.FamilyName,
                ClaimValue = model.Lastname

            });
            user.Claims.Add(new IdentityUserClaim<string>()
            {
                ClaimType = JwtClaimTypes.Gender,
                ClaimValue = model.Gender.ToString()

            });
            user.Claims.Add(new IdentityUserClaim<string>()
            {
                ClaimType = JwtClaimTypes.BirthDate,
                ClaimValue = model.BirthDate.ToString("yyyy-MM-dd")

            });
            var result = await UserManager.CreateAsync(user,model.Password);
            if (result.Succeeded)
            {
                return this.OkResult();
            }
            else
            {
                if(result.Errors.Any(x=>x.Code == "DuplicateUserName"))
                {
                    return this.ErrorResult((int)ErrorCode.REGISTER_DUPLICATE_USER_NAME, ErrorResources.ResourceManager.GetString("REGISTER_DUPLICATE_USER_NAME"));
                }
                return this.ErrorResult(ErrorCode.BAD_REQUEST);
            }
        }
    }
}
