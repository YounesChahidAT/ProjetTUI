using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text;

namespace TagHelpers
{
	/// <summary>
	/// The modal-edit portion of Bootstrap modal dialog
	/// </summary>
	[HtmlTargetElement("listaction")]
	public class ListActionTagHelper : TagHelper
	{
		public string Nameliste { get; set; }
		public bool New { get; set; }
		public string UrlNew { get; set; }
		public bool Deleteall { get; set; }
		public string Export { get; set; }
		public bool NameModal { get; set; }

		public override void Process(TagHelperContext context, TagHelperOutput output)
		{

			output.TagName = "div";
			var html = new StringBuilder();

			html.Append(@"<div class='card-title'> ");
			html.Append($@"	<h3 class='card-label'>{Nameliste}");
			html.Append(@"	<span class='d-block text-muted pt-2 font-size-sm'></span></h3>");
			html.Append(@"</div>");
			html.Append(@"<div class='card-toolbar'>");


			html.Append(@"	<!--begin::Dropdown-->");
			html.Append(@"	<div class='dropdown dropdown-inline mr-2'>");

			html.Append(@"		<!--begin::Dropdown Menu-->");
			html.Append(@"		<div class='dropdown-menu dropdown-menu-sm dropdown-menu-right'>");
			html.Append(@"			<!--begin::Navigation-->");
			html.Append(@"			<ul class='navi flex-column navi-hover py-2'>");
			html.Append(@"				<li class='navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2'>Choose an option:</li>");

			html.Append(@"</ul>");
			html.Append(@" <!--end::Navigation-- > ");

			html.Append(@"		</div>");
			html.Append(@"		<!--end::Dropdown Menu-->");
			html.Append(@"	</div>");
			html.Append(@"	<!--end::Dropdown-->");


			if (New)
			{
				html.Append(@"	<!--begin::Button-->");
				html.Append($@"	<a href='{UrlNew}' {(NameModal ? "data-bs-toggle='modal' data-bs-target='#modal-edit' " : "")} class='btn btn-success btn-md btn-clean btn-icon mr-2 {(NameModal ? "editModal" : "")} ' title='Edit details'>");

				html.Append(@"<span class='svg-icon svg-icon-white svg-icon-2x'><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Navigation/Plus.svg--><svg xmlns = 'http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>");
				html.Append(@"    <g stroke = 'none' stroke-width='1' fill='none' fill-rule='evenodd'>");
				html.Append(@"        <rect fill = '#000000' x='4' y='11' width='16' height='2' rx='1'></rect>");
				html.Append(@"        <rect fill = '#000000' opacity='0.3' transform='translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ' x='4' y='11' width='16' height='2' rx='1'></rect>");
				html.Append(@"    </g>");
				html.Append(@"</svg><!--end::Svg Icon--></span>");


				html.Append(@"<!--end::Svg Icon--></span>");
				html.Append(@"</a><!--end::Button--></div>");
			}
			html.Append("</div>");
			output.Attributes.Add("class", "card-header flex-wrap border-0 pt-6 pb-0");

			output.Content.SetHtmlContent(html.ToString());
		}
	}
}