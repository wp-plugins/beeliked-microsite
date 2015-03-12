(function() {
	tinymce.create('tinymce.plugins.beelikedmicrosite', {
		init : function(ed, url) {
			ed.addButton('beelikedmicrosite', {
				title : 'Embed Beeliked Microsite',
				image : url+'/beeliked.png',
				onclick : function() {
					var micrositeUrl = prompt("Enter the URL for your microsite", "");
					if (micrositeUrl)
						ed.execCommand('mceInsertContent', false, '[BEELIKED_MICROSITE url="'+micrositeUrl+'" width="100%" height="1400px" autosize="1"]');
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : "Beeliked Shortcode",
				author : 'Beeliked',
				authorurl : 'http://beeliked.com/',
				infourl : 'http://beeliked.com/',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('beelikedmicrosite', tinymce.plugins.beelikedmicrosite);
})();