using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using static Utility.Enums;

namespace Core.Entities
{
	[Table("Users")]
	public class ApplicationUser : IdentityUser<Guid> 
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		
	
		public DateTime LastLogin { get; set; }
		public bool FirstLogin { get; set; }
		


	}
}
