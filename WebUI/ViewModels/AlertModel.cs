namespace WebUI.ViewModels
{
    public class AlertModel
    {
        public string? Title { get; set; }
        public string? Message { get; set; }
        public string? Type { get; set; }

    }
    public class AlertType
    {
        public const string Success = "success";
        public const string Warning = "warning";
        public const string Info = "info";
        public const string Error = "error";
    }
}
