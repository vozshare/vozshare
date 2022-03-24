function sentencecase(a) {
	a = a.toLowerCase();
	var b = true;
	var c = "";
	for (var d = 0; d < a.length; d++) {
		var e = a.charAt(d);
		if (/\.|\!|\?|\n|\r/.test(e)) {
			b = true;
		} else if ($.trim(e) != "" && b == true) {
			e = e.toUpperCase();
			b = false;
		}
		c += e;
	}
	return c;
}
function alternatingcase(a) {
	a = a.toLowerCase();
	var b = "";
	for (var c = 0; c < a.length; c++) {
		var d = a.charAt(c);
		if (c % 2) {
			b += d.toUpperCase();
		} else {
			b += d;
		}
	}
	return b;
}
function ucfirst(a) {
	var b = a.charAt(0).toUpperCase();
	return b + a.substr(1);
}
function ucwords(a) {
	return (a + "").replace(/^(\S)|\s+(\S)/g, function(a) {
		return a.toUpperCase();
	});
}
$(document).ready(
	function() {
		var a = "None";
		$("#upper").click(function() {
			$("#content").val($("#content").val().toUpperCase());
			return false
		});
		$("#lower").click(function() {
			$("#content").val($("#content").val().toLowerCase());
			return false
		});
		$("#capitalized").click(function() {
			$("#content").val(ucwords($("#content").val().toLowerCase()));
			return false
		});
		$("#sentence").click(function() {
			$("#content").val(sentencecase($("#content").val()));
			return false
		});
		$("#alternating").click(function() {
			$("#content").val(alternatingcase($("#content").val()));
			return false
		});

		$('#change').click(function(){
			text = $('#content').val();
			text= text.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,"a");
			text= text.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g,"e");
			text= text.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g,"i");
			text= text.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g,"o");
			text= text.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g,"u");
			text= text.replace(/á»³|Ă½|á»µ|á»·|á»¹/g,"y");
			text= text.replace(/Ä‘/g,"d");
			$('#content').val(text);
		})

		function calc_counts() {
			$('.char_count').text($('#content').val().length);
			$('.word_count').text(
					$.trim($('#content').val()).replace(/\s+/gi, ' ')
							.split(' ').length);
		}


		function getFlashVersion() {
			try {
				try {
					var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
					try {
						axo.AllowScriptAccess = 'always';
					} catch (e) {
						return '6,0,0';
					}
				} catch (e) {
				}
				return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable(
						'$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
			} catch (e) {
				try {
					if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
						return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
								.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
					}
				} catch (e) {
				}
			}
			return '0,0,0';
		}
		var flashVersion = getFlashVersion().split(',').shift();
		if (flashVersion >= 10) {
			$("#copy").show();
			$("#copy").zclip({
				path : 'js/ZeroClipboard.swf',
				copy : function() {
					return $('#content').val();
				},
				beforeCopy : function() {
					this.copy = $('#content').val();
				},
				afterCopy : function() {
					alert('Copy thĂ nh cĂ´ng');
				}
			});
		} else if (window.clipboardData && clipboardData.setData) {
			$("#copy").show();
			$("#copy").click(function() {
				clipboardData.setData('text', $('#content').val());
				return false;
			});
		}
		// $("#content").focus(function() {
		// if ($(this).val().toLowerCase() == b.toLowerCase()) {
		// $(this).val("")
		// }
		// calc_counts();
		// });

		var b = $("#content").attr('data-placeholder');
		function calc_counts() {
			$('#character').text($('#content').val().length);
			$('#word').text(
					$.trim($('#content').val()).replace(/\s+/gi, ' ')
							.split(' ').length);
		}

		$("#content").focus(function() {
			calc_counts();
		});
		$("#content").blur(function() {
			if ($(this).val() == "") {
				$(this).val(b)
			}
			calc_counts();
		});
		$("#content").keyup(function() {
			calc_counts();
		});
		calc_counts();
	}
);
