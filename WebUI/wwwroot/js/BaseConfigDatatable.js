$(document).ready(function () {
	var currentRoute = window.location.pathname,
		urlEdit = $(".basic_datatable").data("url-edit"),
		urlDelete = $(".basic_datatable").data("url-delete") ? $(".basic_datatable").data("url-delete") : currentRoute;
	$.extend(true, $.fn.dataTable.ext.classes, {
		sProcessing: "dataTables_processing",
	});

	$.extend(true, $.fn.dataTable.defaults, {
		"language": {
			"processing": "Traitement en cours...",
			"search": "",
			"searchPlaceholder": 'Rechercher',
			"lengthMenu": "Afficher _MENU_",
			"info": "Affichage de _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
			"infoEmpty": "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
			"infoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
			"infoPostFix": "",
			"loadingRecords": "Chargement en cours...",
			"zeroRecords": "Aucun &eacute;l&eacute;ment &agrave; afficher",
			"emptyTable": "Aucune donn&eacute;e disponible dans le tableau",
		}
	});
	var table = $(".basic_datatable").DataTable({
		responsive: true,

		// DOM Layout settings
		//dom: `<'row'<'col-sm-12'tr>>
		//	<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

		lengthMenu: [5, 10, 25, 50],

		pageLength: 10,

		language: {
			'lengthMenu': 'Display _MENU_',
		},

		// Order settings
		order: [[1, 'desc']],

		columnDefs: [
			{
				targets: 0,
				width: '30px',
				className: 'dt-left',
				orderable: false,
			},
			{
				targets: -1,
				orderable: false,
				width: '125px'
			},
		],

	},

	);
	table.on('change', '.group-checkable', function () {
		var set = $(this).closest('table').find('td:first-child .checkable');
		var checked = $(this).is(':checked');

		$(set).each(function () {
			if (checked) {
				$(this).prop('checked', true);
				$(this).closest('tr').addClass('active');
			}
			else {
				$(this).prop('checked', false);
				$(this).closest('tr').removeClass('active');
			}
		});
	});

	table.on('change', 'tbody tr .checkbox', function () {
		$(this).parents('tr').toggleClass('active');
	});
	$('#search_datatable').on('keyup', function () {
		table.search(this.value).draw();
	});
});
