function(tributary){
	console.log("LOG:","tributary",tributary);
	function Grid(w, h, rangeNr, strokeCol, background){
		svg.append('rect')
		.attr('width', w)
		.attr('height', h)
		.style('fill',background)

		var xscale = d3.scale.linear().domain([0, rangeNr]).range([0, w]);
		var yscale = d3.scale.linear().domain([0, rangeNr]).range([0, h]);


		var lineAttr = {
			stroke: strokeCol,
			"stroke-width": 1.1,
			fill: "none",
			x1: 0,
			x2: 0,
			y1: 0,
			y2: 0,
			'class':'grid-line'
		};

		var range = d3.range(rangeNr);

		var t = svg.selectAll('line')
		.data(range)
		.enter()

		t.append('line')
		.attr(lineAttr)
		.attr({
		x1: function(d,i){ return xscale(i);},
		x2: function(d,i){ return xscale(i);},
		y2: h
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w/2,
		x2: w/2,
		y2: h
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y1: h/2,
		y2: h/2
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y2: h
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w,
		y2: h
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w,
		y2: h/2
		});


		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y2: h/2
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w,
		y1: h/2,
		y2: h
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y1: h/2,
		y2: h
		});


		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y1: h/3,
		y2: h/3
		});

		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y1: h/1.5,
		y2: h/1.5
		});


		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w/2,
		x2: w,
		y2: h/2
		});


		svg.append('line')
		.attr(lineAttr)
		.attr({
		x2: w/2,
		y1: h/2,
		y2: h
		});


		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w,
		x2: w/2,
		y1: h/2,
		y2: h
		});


		svg.append('line')
		.attr(lineAttr)
		.attr({
		x1: w/2,
		y2: h/2
		});

		t.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y1: function(d,i){ return yscale(i);},
		y2: function(d,i){ return yscale(i);},
		});

}
var tributary = tributary || {};
tributary.helpers = tributary.helpers || {};
console.log("helpers",tributary.helpers);

tributary.helpers.grid = Grid;
console.log("grid",tributary.helpers.grid);

}(tributary);