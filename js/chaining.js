$(document).ready(function() {

	$(".chaining_btn").click(function() {
		$(this).parent().parent().animate({ width: "100%" }).animate({ marginBottom: "30" }).animate({ marginTop: "30" });
	});


	$.globalQueue = {
		queue: function(anim) {
			$('body')
				.queue(function(dequeue) {
					anim()
						.queue(function(innerDequeue) {
							dequeue();
							innerDequeue();
						});
				});

			return this;
		}
	};

	$(".queue_btn").click(function() {
		$.globalQueue
			.queue(function() {
				return $(".img_holder").animate({ top: "-50" }, "slow");
			}).queue(function() {
				return $(".img_holder").animate({ height: "hide" }, "slow");
			}).queue(function() {
				return $(".box").animate({ borderWidth: 2 }, "slow");
			}).queue(function() {
				return $(".text").animate({ height: "show", top: "110", left: "0" }, "slow");
			});
	});

});