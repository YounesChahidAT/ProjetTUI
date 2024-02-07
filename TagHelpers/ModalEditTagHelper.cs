using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text;

namespace TagHelpers
{
    /// <summary>
    /// The modal-edit portion of Bootstrap modal dialog
    /// </summary>
    [HtmlTargetElement("modal-edit")]
    public class ModalEditTagHelper : TagHelper
    {
        public string Class { get; set; } = "modal-lg";
        public string Id { get; set; } = "modal-edit";

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var html = new StringBuilder();
            output.TagName = "div";

            //< !--Modal-- >
            html.Append(@"<div class='modal-dialog ##size##' role='document'>");
            html.Append(@"    <div class='modal-content'>");
            html.Append(@"        <div class='modal-header'>");
            html.Append(@"            <h5 class='modal-title' id='exampleModalLabel'>Veuillez patienter</h5>");
            html.Append(@"            <div class='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>");
            html.Append(@"                <span class='svg-icon svg-icon-1'>");
            html.Append(@"                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>");
            html.Append(@"				      	<rect opacity='0.5' x='6' y='17.3137' width='16' height='2' rx='1' transform='rotate(-45 6 17.3137)' fill='black'></rect>");
            html.Append(@"				      	<rect x='7.41422' y='6' width='16' height='2' rx='1' transform='rotate(45 7.41422 6)' fill='black'></rect>");
            html.Append(@"				      </svg>");
            html.Append(@"                </span>");
            html.Append(@"            </div>");
            html.Append(@"        </div>");
            html.Append(@"    </div>");
            html.Append(@"</div>");
           
            html.Replace("##id##", Id);
            html.Replace("##size##", Class);

            output.Attributes.Add("class", "modal fade");
            output.Attributes.Add("id", Id);
            output.Attributes.Add("tabindex", "-1");
            output.Attributes.Add("aria-hidden", "true");

            output.Content.SetHtmlContent(html.ToString());
        }
    }
}