$(".required").blur(function(){var t=0;$(".required").each(function(){$.trim($(this).val())||empty_flds++}),t?($(".button1").fadeOut(0),$(".button2").fadeIn(0)):($(".button1").fadeIn(0),$(".button2").fadeOut(0))});