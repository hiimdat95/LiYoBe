﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MiniSocial.Server.Shared.Strings {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class ErrorResources {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ErrorResources() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("MiniSocial.Server.Shared.Strings.ErrorResources", typeof(ErrorResources).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Your username is in used.
        /// </summary>
        public static string REGISTER_DUPLICATE_USER_NAME {
            get {
                return ResourceManager.GetString("REGISTER_DUPLICATE_USER_NAME", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to You must enter valid email address to register.
        /// </summary>
        public static string REGISTER_REQUIRED_EMAIL {
            get {
                return ResourceManager.GetString("REGISTER_REQUIRED_EMAIL", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to You must enter your firstname.
        /// </summary>
        public static string REGISTER_REQUIRED_FIRST_NAME {
            get {
                return ResourceManager.GetString("REGISTER_REQUIRED_FIRST_NAME", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to You must enter your lastname.
        /// </summary>
        public static string REGISTER_REQUIRED_LAST_NAME {
            get {
                return ResourceManager.GetString("REGISTER_REQUIRED_LAST_NAME", resourceCulture);
            }
        }
    }
}