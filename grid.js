var thelp =  thelp || {};
(function(tributary){  
	tributary.helpers = tributary.helpers || {};
	function Grid(svg , w, h, rangeX, rangeY, strokeCol, background){
		
		svg.append('rect')
		.attr('width', w)
		.attr('height', h)
		.style('fill',background);	

		var xscale = d3.scale.linear().domain([0, rangeX]).range([0, w]);
		var yscale = d3.scale.linear().domain([0, rangeY]).range([h, 0]);


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

		var rangeX = d3.range(rangeX);
		var rangeY = d3.range(rangeY);

		var t = svg.selectAll('.line1')
		.data(rangeX)
		.enter()

		t.append('line')
		.attr(lineAttr)
		.attr({
		x1: function(d,i){ return xscale(i);},
		x2: function(d,i){ return xscale(i);},
		y2: h
		});


		var t2 = svg.selectAll('.line2')
		.data(rangeY)
		.enter();

		t2.append('line')
		.attr(lineAttr)
		.attr({
		x2: w,
		y1: function(d, i){ return yscale(i);},
		y2: function(d, i){ return yscale(i);}
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



	}
	
	tributary.helpers.grid = Grid;


})(thelp);