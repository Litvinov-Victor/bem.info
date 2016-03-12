block('legos')(
	content()(function() {
		var blocks = [];

		for (var i = 0; i < 28; i++) {
			var w = Math.floor(Math.random() * 3) + 1;
			var h = Math.floor(Math.random() * 5) + 1;

			blocks.push(
				{
					elem: 'lego',
					elemMods: { width: w > 1 ? w : undefined, height: h > 1 ? h : undefined }
				}
			);
		}

		return blocks;
	})
);
