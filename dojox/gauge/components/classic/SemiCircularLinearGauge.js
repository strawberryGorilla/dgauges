define([
		"dojo/_base/lang", 
		"dojo/_base/declare", 
		"dojo/on", 
		"dojo/_base/Color", 
		"../GaugeUtils", 
		"../../CircularGauge", 
		"../../LinearScaler", 
		"../../CircularScale", 
		"../../CircularValueIndicator", 
		"../../CircularRangeIndicator"
	], 
	function(lang, declare, on, Color, GaugeUtils, CircularGauge, LinearScaler, CircularScale, CircularValueIndicator, CircularRangeIndicator){

	/*=====
     var CircularGauge = dojox.gauge.CircularGauge;
     =====*/
     
		return declare("dojox.gauge.components.classic.SemiCircularLinearGauge", CircularGauge, {

			constructor: function(args, node){
				var scaler = new LinearScaler();
				this.addElement("background", lang.hitch(this, this.drawBackground));
				var scale = new CircularScale();
				scale.set("scaler", scaler);
				scale.set("originX", 85.5782);
				scale.set("originY", 84);
				scale.set("radius", 68.21817);
				scale.set("startAngle", -179.92072);
				scale.set("endAngle", -0.10114);
				scale.set("orientation", "clockwise");
				scale.set("labelGap", 2);
				scale.set("font", {
					family: "Helvetica",
					weight: 'bold',
					size: "6pt"
				});
				this.addElement("scale", scale);
				var indicator = new CircularValueIndicator();
				indicator.set("interactionArea", "gauge");
				indicator.set("value", scaler.minimum);
				indicator.set("indicatorShapeFunction", function(indicator, group, scale) {
			
					var g1 = group.createGroup().setTransform({
						xx: 1,
						xy: 0,
						yx: 0,
						yy: 1,
						dx: -110.8,
						dy: -58.1713
					});
					g1.createPath({
						path: "M23.1298 46.3054 C31.4767 53.9068 41.1442 61.0159 51.9245 67.2399 C62.7106 73.4673 73.7132 78.2949 84.4751 81.7231 C76.1241 74.1156 66.4451 67.0036 55.657 60.7751 C44.8748 54.55 33.888 49.7334 23.1298 46.3054 Z"
					}).setTransform({
						xx: -0.86716,
						xy: -0.49803,
						yx: 0.49803,
						yy: -0.86716,
						dx: 221.54537,
						dy: 86.8568
					}).setFill({
						type: "radial",
						cx: 84.4751,
						cy: 81.7231,
						r: 24.19075,
						colors: [
							{offset: 0, color: [208,208,208,1]},
							{offset: 1, color: [255,255,255,1]}
						]
					});
					g1.createPath({
						path: "M22.615 46.0143 C31.1008 53.7435 40.9364 60.9668 51.8962 67.2955 C62.8619 73.6276 74.0489 78.5283 84.99 82.0143 C76.4999 74.2787 66.6764 67.0663 55.7087 60.733 C44.747 54.4032 33.5523 49.5 22.615 46.0143 ZM25.9275 47.9205 C35.7107 51.0379 45.6849 55.4158 55.49 61.0768 C65.3004 66.7408 74.1145 73.1899 81.7087 80.108 C71.9221 76.9904 61.9235 72.6148 52.115 66.9518 C42.3116 61.2918 33.5179 54.833 25.9275 47.9205 Z"
					}).setTransform({
						xx: -0.86716,
						xy: -0.49803,
						yx: 0.49803,
						yy: -0.86716,
						dx: 221.54537,
						dy: 86.8568
					}).setFill({
						type: "linear",
						x1: 22.615,
						y1: 46.0143,
						x2: 84.99,
						y2: 82.0143,
						colors: [
							{offset: 0, color: [208,208,208,1]},
							{offset: 1, color: [233,233,233,1]}
						]
					});
					return group;
					
				});
				scale.addIndicator("indicator", indicator);
				this.addElement("foreground", lang.hitch(this, this.drawForeground));
			},

			drawBackground: function(g){
				g.setTransform({
					dx: -10.2218,
					dy: -9.1713
				});
				g.createPath({
					path: "M95.6593 12.6713 C50.4838 12.6713 13.7218 49.4332 13.7218 94.6088 C13.7218 100.1875 14.3088 105.6236 15.3781 110.89 C15.5337 111.5166 16.1011 112.14 16.7296 112.14 L174.6281 112.14 C175.266 112.14 175.785 111.5166 175.9406 110.89 C177.0059 105.6236 177.5656 100.1875 177.5656 94.6088 C177.5656 49.4332 140.8349 12.6713 95.6593 12.6713 ZM95.6593 20.9525 C136.3576 20.9525 169.3156 53.9105 169.3156 94.6088 C169.3156 98.2123 169.041 101.741 168.5343 105.2025 L22.7843 105.2025 C22.2777 101.7415 22.0031 98.2134 22.0031 94.6088 C22.0031 53.9105 54.9611 20.9525 95.6593 20.9525 Z"
				}).setStroke({
					color: [0,0,0,0.07451],
					width: 7,
					style: "Solid",
					cap: "round",
					join: "round"
				});
				g.createPath({
					path: "M95.6593 12.6713 C50.4838 12.6713 13.7218 49.4332 13.7218 94.6088 C13.7218 100.1875 14.3088 105.6236 15.3781 110.89 C15.5337 111.5166 16.1011 112.14 16.7296 112.14 L174.6281 112.14 C175.266 112.14 175.785 111.5166 175.9406 110.89 C177.0059 105.6236 177.5656 100.1875 177.5656 94.6088 C177.5656 49.4332 140.8349 12.6713 95.6593 12.6713 ZM95.6593 20.9525 C136.3576 20.9525 169.3156 53.9105 169.3156 94.6088 C169.3156 98.2123 169.041 101.741 168.5343 105.2025 L22.7843 105.2025 C22.2777 101.7415 22.0031 98.2134 22.0031 94.6088 C22.0031 53.9105 54.9611 20.9525 95.6593 20.9525 Z"
				}).setStroke({
					color: [0,0,0,0.07451],
					width: 5,
					style: "Solid",
					cap: "round",
					join: "round"
				});
				g.createPath({
					path: "M95.6593 12.4713 C50.4838 12.4713 13.7218 49.2332 13.7218 94.4088 C13.7218 99.9875 14.3088 105.4237 15.3781 110.69 C15.5337 111.3167 16.1011 111.94 16.7296 111.94 L174.6281 111.94 C175.266 111.94 175.785 111.3166 175.9406 110.69 C177.0059 105.4237 177.5656 99.9875 177.5656 94.4088 C177.5656 49.2332 140.8349 12.4713 95.6593 12.4713 ZM95.6593 20.7525 C136.3576 20.7525 169.3156 53.7105 169.3156 94.4088 C169.3156 98.0123 169.041 101.541 168.5343 105.0025 L22.7843 105.0025 C22.2777 101.5415 22.0031 98.0134 22.0031 94.4088 C22.0031 53.7105 54.9611 20.7525 95.6593 20.7525 Z"
				}).setStroke({
					color: [0,0,0,0.12157],
					width: 3,
					style: "Solid",
					cap: "round",
					join: "round"
				});
				g.createPath({
					path: "M95.6593 11.9713 C50.4838 11.9713 13.7218 48.7332 13.7218 93.9088 C13.7218 99.4875 14.3088 104.9237 15.3781 110.19 C15.5337 110.8167 16.1011 111.44 16.7296 111.44 L174.6281 111.44 C175.266 111.44 175.785 110.8166 175.9406 110.19 C177.0059 104.9237 177.5656 99.4875 177.5656 93.9088 C177.5656 48.7332 140.8349 11.9713 95.6593 11.9713 ZM95.6593 20.2525 C136.3576 20.2525 169.3156 53.2105 169.3156 93.9088 C169.3156 97.5123 169.041 101.041 168.5343 104.5025 L22.7843 104.5025 C22.2777 101.0415 22.0031 97.5134 22.0031 93.9088 C22.0031 53.2105 54.9611 20.2525 95.6593 20.2525 Z"
				}).setStroke({
					color: [0,0,0,0.29804],
					width: 2,
					style: "Solid",
					cap: "round",
					join: "round"
				});
				g.createPath({
					path: "M95.6593 11.6713 C50.4838 11.6713 13.7218 48.4332 13.7218 93.6088 C13.7218 99.1875 14.3088 104.6236 15.3781 109.89 C15.5337 110.5166 16.1011 111.14 16.7296 111.14 L174.6281 111.14 C175.266 111.14 175.785 110.5166 175.9406 109.89 C177.0059 104.6236 177.5656 99.1875 177.5656 93.6088 C177.5656 48.4332 140.8349 11.6713 95.6593 11.6713 ZM95.6593 19.9525 C136.3576 19.9525 169.3156 52.9105 169.3156 93.6088 C169.3156 97.2123 169.041 100.741 168.5343 104.2025 L22.7843 104.2025 C22.2777 100.7415 22.0031 97.2134 22.0031 93.6088 C22.0031 52.9105 54.9611 19.9525 95.6593 19.9525 Z"
				}).setStroke({
					color: [0,0,0,0.29804],
					width: 1,
					style: "Solid",
					cap: "round",
					join: "round"
				});
				g.createPath({
					path: "M95.6593 11.2713 C50.4838 11.2713 13.7218 48.0332 13.7218 93.2088 C13.7218 98.7875 14.3088 104.2236 15.3781 109.49 C15.5337 110.1167 16.1011 110.74 16.7296 110.74 L174.6281 110.74 C175.266 110.74 175.785 110.1166 175.9406 109.49 C177.0059 104.2236 177.5656 98.7875 177.5656 93.2088 C177.5656 48.0332 140.8349 11.2713 95.6593 11.2713 ZM95.6593 19.5525 C136.3576 19.5525 169.3156 52.5105 169.3156 93.2088 C169.3156 96.8123 169.041 100.341 168.5343 103.8025 L22.7843 103.8025 C22.2777 100.3415 22.0031 96.8134 22.0031 93.2088 C22.0031 52.5105 54.9611 19.5525 95.6593 19.5525 Z"
				}).setFill([121,126,134,1]);
				g.createPath({
					path: "M50.3208 27.3038 C9.7167 27.3038 -23.2417 60.531 -23.2417 101.4913 C-23.2417 105.0732 -22.9788 108.607 -22.4917 112.0538 L123.1333 112.0538 C123.6204 108.607 123.8833 105.0732 123.8833 101.4913 C123.8833 60.531 90.9249 27.3038 50.3208 27.3038 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: 45.32293,
					dy: -6.85064
				}).setFill({
					type: "linear",
					x1: -23.2417,
					y1: 27.3038,
					x2: -23.2417,
					y2: 196.8038,
					colors: [
						{offset: 0, color: [148,152,161,0.98824]},
						{offset: 1, color: [255,255,255,0.98824]}
					]
				});
				g.createPath({
					path: "M95.6437 20.0009 C54.4437 20.0009 21.0053 53.664 21.0053 95.142 C21.0053 98.7692 21.2581 102.3373 21.7523 105.8277 L169.535 105.8277 C170.0293 102.3373 170.282 98.7692 170.282 95.142 C170.282 53.664 136.8436 20.0009 95.6437 20.0009 ZM95.6437 20.8086 C136.0857 20.8086 168.9125 53.8368 168.9125 94.5518 C168.9125 98.1123 168.6507 101.6249 168.1655 105.0511 L23.1219 105.0511 C22.6367 101.6249 22.3748 98.1123 22.3748 94.5518 C22.3748 53.8368 55.2017 20.8086 95.6437 20.8086 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -0.0053,
					dy: -0.3286
				}).setFill({
					type: "linear",
					x1: 21.0053,
					y1: 20.0009,
					x2: 21.0053,
					y2: 105.8277,
					colors: [
						{offset: 0, color: [255,255,255,0.98824]},
						{offset: 1, color: [148,152,161,0.98824]}
					]
				});
				g.createPath({
					path: "M95.5625 20 C54.9584 20 22 53.2272 22 94.1875 C22 97.7694 22.2629 101.3032 22.75 104.75 L168.375 104.75 C168.8621 101.3032 169.125 97.7694 169.125 94.1875 C169.125 53.2272 136.1666 20 95.5625 20 Z"
				}).setFill({
					type: "radial",
					cx: 95.5625,
					cy: 121.7,
					r: 57.96875,
					colors: [
						{offset: 0, color: [255,255,255,0.98824]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g.createPath({
					path: "M107.2348 92.7791 C107.237 99.2678 101.9775 104.5291 95.4888 104.5291 C89.0001 104.5291 83.7406 99.2678 83.7428 92.7791 C83.7406 86.2904 89.0001 81.0291 95.4888 81.0291 C101.9775 81.0291 107.237 86.2904 107.2348 92.7791 L107.2348 92.7791 Z"
				}).setFill({
					type: "radial",
					cx: 95.4888,
					cy: 92.7791,
					r: 11.748,
					colors: [
						{offset: 0, color: [0,0,0,1]},
						{offset: 1, color: [0,0,0,0]}
					]
				});
			},


			drawForeground: function(g){
				g.setTransform({
					dx: -10.2218,
					dy: -9.1713
				});
				var g1 = g.createGroup().setTransform({
					xx: 1.47881,
					xy: 0,
					yx: 0,
					yy: 1.47881,
					dx: -117.9792,
					dy: 237.29384
				});
				g1.createPath({
					path: "M154.0331 -104.8439 C154.0331 -99.7938 149.9391 -95.6998 144.889 -95.6998 C139.8388 -95.6998 135.7449 -99.7938 135.7449 -104.8439 C135.7449 -109.8941 139.8388 -113.9881 144.889 -113.9881 C149.9391 -113.9881 154.0331 -109.8941 154.0331 -104.8439 Z"
				}).setTransform({
					xx: 0.69014,
					xy: 0,
					yx: 0,
					yy: 0.69014,
					dx: 44.57903,
					dy: -25.19578
				}).setFill({
					type: "radial",
					cx: 144.889,
					cy: -108.50161,
					r: 18.28825,
					colors: [
						{offset: 0, color: [149,149,149,1]},
						{offset: 0.5, color: [0,0,0,1]},
						{offset: 1, color: [0,0,0,1]}
					]
				});
				g1.createPath({
					path: "M154.0331 -104.8439 C154.0331 -99.7938 149.9391 -95.6998 144.889 -95.6998 C139.8388 -95.6998 135.7449 -99.7938 135.7449 -104.8439 C135.7449 -109.8941 139.8388 -113.9881 144.889 -113.9881 C149.9391 -113.9881 154.0331 -109.8941 154.0331 -104.8439 Z"
				}).setTransform({
					xx: 0.5138,
					xy: 0,
					yx: 0,
					yy: 0.5222,
					dx: 70.12913,
					dy: -42.80383
				}).setFill([105,105,105,0.27451]);
				g1.createPath({
					path: "M154.0331 -104.8439 C154.0331 -99.7938 149.9391 -95.6998 144.889 -95.6998 C139.8388 -95.6998 135.7449 -99.7938 135.7449 -104.8439 C135.7449 -109.8941 139.8388 -113.9881 144.889 -113.9881 C149.9391 -113.9881 154.0331 -109.8941 154.0331 -104.8439 Z"
				}).setTransform({
					xx: 0.48021,
					xy: 0,
					yx: 0,
					yy: 0.46341,
					dx: 74.99582,
					dy: -48.96665
				}).setFill([105,105,105,0.1451]);
				var g2 = g.createGroup().setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -383.70151,
					dy: -87.61936
				});
				g2.createPath({
					path: "M529.1356 116.3568 C520.5958 109.3338 510.2018 104.4109 497.9828 101.588 C458.6363 92.4978 418.0144 113.168 407.2871 147.6954 C406.7941 149.4317 410.185 150.5336 411.1306 148.0216 C422.0623 116.9051 462.0113 98.691 498.0665 107.0208 C515.6924 111.0929 529.2255 119.8325 538.6533 133.2393 C540.4424 136.1607 544.3683 134.6243 542.6841 131.563 C538.8502 125.7198 534.3455 120.6412 529.1356 116.3568 Z"
				}).setFill({
					type: "linear",
					x1: 407.23841,
					y1: 99.44514,
					x2: 407.23841,
					y2: 124.47007,
					colors: [
						{offset: 0, color: [255,255,255,0.43529]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g2.createPath({
					path: "M529.1356 116.3568 C520.5958 109.3338 510.2018 104.4109 497.9828 101.588 C458.6363 92.4978 418.0144 113.168 407.2871 147.6954 C406.7941 149.4317 409.3372 150.2154 410.2827 147.7035 C421.2144 116.587 461.6479 97.7367 497.7032 106.0665 C515.329 110.1386 530.0733 119.7265 539.5011 133.1333 C541.2902 136.0547 544.3683 134.6243 542.6841 131.563 C538.8502 125.7198 534.3455 120.6412 529.1356 116.3568 Z"
				}).setFill({
					type: "linear",
					x1: 407.22432,
					y1: 99.44514,
					x2: 407.22432,
					y2: 124.37564,
					colors: [
						{offset: 0, color: [255,255,255,0.43529]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g2.createPath({
					path: "M529.1356 116.3568 C520.5958 109.3338 510.2018 104.4109 497.9828 101.588 C458.6363 92.4978 418.0144 113.168 407.2871 147.6954 C406.7941 149.4317 408.4893 149.6853 409.4349 147.1733 C420.3665 116.0568 461.8902 96.6763 497.9454 105.0061 C515.5713 109.0782 530.5577 119.3024 539.9857 132.7091 C541.7747 135.6305 544.3683 134.6243 542.6841 131.563 C538.8502 125.7198 534.3455 120.6412 529.1356 116.3568 Z"
				}).setFill({
					type: "linear",
					x1: 407.19904,
					y1: 99.44514,
					x2: 407.19904,
					y2: 124.2371,
					colors: [
						{offset: 0, color: [255,255,255,0.43529]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g2.createPath({
					path: "M529.1356 116.3568 C520.5958 109.3338 510.2018 104.4109 497.9828 101.588 C458.6363 92.4978 418.0144 113.168 407.2871 147.6954 C406.7941 149.4317 408.1259 148.7309 409.0715 146.2189 C420.0032 115.1024 461.4057 95.4038 497.4609 103.7336 C515.0867 107.8057 530.6789 118.348 540.1068 131.7547 C541.8959 134.6762 544.3683 134.6243 542.6841 131.563 C538.8502 125.7198 534.3455 120.6412 529.1356 116.3568 Z"
				}).setFill({
					type: "linear",
					x1: 407.18096,
					y1: 99.44514,
					x2: 407.18096,
					y2: 124.04937,
					colors: [
						{offset: 0, color: [255,255,255,0.43529]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
			}

		});
	}
);

