using System.ComponentModel.DataAnnotations;

namespace testApp1.ViewModels
{
    public class AuthLogin
    {
        //public string Test { get; set; }

        // data annotations
        [Required]
        public string Username { get; set; }

        // data annotations
        [Required, DataType(DataType.Password)]
        public string Password { get; set; }
    }
}