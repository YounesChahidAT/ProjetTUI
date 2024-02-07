using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using WebUI.HelpersServices;
using WebUI.ViewModels;

namespace WebUI.Pages
{

    public class BasePageModel : PageModel
    {
        public IMapper mapper;
        public readonly Guid _projectId;
        public readonly string _code;
        public BasePageModel()
        {
            
        }

        public void Success(string title, string message)
        {
            AddAlert(AlertType.Success, title, message);
        }

        public void Warning(string title, string message)
        {
            AddAlert(AlertType.Warning, title, message);
        }

        public void Error(string title, string message)
        {
            AddAlert(AlertType.Error, title, message);
        }
        public void Info(string title, string message)
        {
            AddAlert(AlertType.Info, title, message);
        }

        public void AddAlert(string type, string title, string message)
        {
            var Alerts = TempData.ContainsKey("TempAlertData") ?
                JsonConvert.DeserializeObject<List<AlertModel>>(TempData["TempAlertData"].ToString()) : new List<AlertModel>();

            Alerts.Add(new AlertModel { Title = title, Message = message, Type = type });

            TempData["TempAlertData"] = JsonConvert.SerializeObject(Alerts);
        }
    }
}
