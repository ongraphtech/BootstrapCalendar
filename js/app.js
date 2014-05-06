(function($) {

	"use strict";

	var options = {
		events_source: 'events.json',
		view: 'month',
		tmpl_path: 'tmpls/',
		tmpl_cache: false,
		onAfterEventsLoad: function(events) {

		},
		onAfterViewLoad: function(view) {
			$('.page-header h3').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
			if (this.isToday()) {
				$('button[data-calendar-nav="today"]').addClass('active');
			};
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var calendar = $('#calendar').calendar(options);

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});
}(jQuery));