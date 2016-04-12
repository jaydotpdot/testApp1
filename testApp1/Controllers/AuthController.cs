using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using testApp1.ViewModels;

namespace testApp1.Controllers
{
    public class AuthController : Controller
    {
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToRoute("home");
        }

        public ActionResult Login()
        {
            return View(new AuthLogin
            {
                //Test = "This is my test value set in my controller!"
            });
        }

        [HttpPost]
        public ActionResult Login(AuthLogin form, string returnUrl)
        {
            if (!ModelState.IsValid)
                return View(form);

            /*if (form.Username != "Jay")
            {
                ModelState.AddModelError("Username", "Username or password isn't correct.");
                return View(form);
            }*/

            FormsAuthentication.SetAuthCookie(form.Username, true);

            if (!string.IsNullOrWhiteSpace(returnUrl))
                return Redirect(returnUrl);

            return RedirectToRoute("home");

            //form.Test = "This is a value set in my POST action";

            //return View(form);
        }
    }
}