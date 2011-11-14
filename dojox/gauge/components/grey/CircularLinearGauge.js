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
		"../../CircularRangeIndicator",
		"../DefaultPropertiesMixin"
	], 
	function(lang, declare, on, Color, GaugeUtils, CircularGauge, LinearScaler, CircularScale, CircularValueIndicator, CircularRangeIndicator, DefaultPropertiesMixin){

	/*=====
	var CircularGauge = dojox.gauge.CircularGauge;
	=====*/

		return declare("dojox.gauge.components.grey.CircularLinearGauge", [CircularGauge, DefaultPropertiesMixin], {

			constructor: function(args, node){
				var scaler = new LinearScaler();
				this.addElement("background", lang.hitch(this, this.drawBackground));
				var scale = new CircularScale();
				scale.set("scaler", scaler);
				scale.set("originX", 74.41032);
				scale.set("originY", 74.92824);
				scale.set("radius", 61.44239);
				scale.set("startAngle", 130);
				scale.set("endAngle", 50.47663);
				scale.set("orientation", "clockwise");
				scale.set("labelGap", 2);
				scale.set("font", {
					family: "Helvetica",
					weight: 'bold',
					size: "6pt",
					color: "black"
				});
				this.addElement("scale", scale);
				var indicator = new CircularValueIndicator();
				indicator.set("interactionArea", "gauge");
				indicator.set("value", scaler.minimum);
				indicator.set("indicatorShapeFunc", function(group){
			
					var g1 = group.createGroup().setTransform({
						xx: 1,
						xy: 0,
						yx: 0,
						yy: 1,
						dx: -109.60522,
						dy: -72.31704
					});
					g1.createPath({
						path: "M170.979 73.0018 L109.6755 72.1955 L109.6886 65.3559 L170.979 73.0018 Z"
					}).setTransform({
						xx: 0.99995,
						xy: 0.01047,
						yx: -0.01047,
						yy: 0.99995,
						dx: -0.74866,
						dy: 1.1522
					}).setFill([63,63,63,1]);
					g1.createPath({
						path: "M170.9792 72.8872 L109.6758 72.0809 L109.6627 78.9205 L170.9792 72.8872 Z"
					}).setTransform({
						xx: 0.99995,
						xy: 0.01047,
						yx: -0.01047,
						yy: 0.99995,
						dx: -0.74866,
						dy: 1.1522
					}).setFill([148,148,148,1]);
					return group;
					
				});
				scale.addIndicator("indicator", indicator);
				this.addElement("foreground", lang.hitch(this, this.drawForeground));
			},

			drawBackground: function(g){
				g.setTransform({
					dx: -35.1949,
					dy: 2.6112
				});
				g.createPath({
					path: "M215.4039 -84.9392 C215.4039 -65.9156 169.1389 -50.494 112.0682 -50.494 C54.9975 -50.494 8.7326 -65.9156 8.7326 -84.9392 C8.7326 -103.9628 54.9975 -119.3844 112.0682 -119.3844 C169.1389 -119.3844 215.4039 -103.9628 215.4039 -84.9392 Z"
				}).setTransform({
					xx: 0.71184,
					xy: 0,
					yx: 0,
					yy: 2.15424,
					dx: 29.73224,
					dy: 255.3393
				}).setFill({
					type: "linear",
					x1: 8.7326,
					y1: -119.3844,
					x2: 8.7326,
					y2: -16.0488,
					colors: [
						{offset: 0, color: [148,152,161,0.98824]},
						{offset: 1, color: [255,255,255,0.98824]}
					]
				});
				g.createPath({
					path: "M120.1134 151.9665 C156.4973 151.5612 186.0623 122.0299 186.3502 85.487 C186.3532 85.1267 186.3615 84.7655 186.3582 84.4064 C165.36 94.2972 139.7166 102.3542 114.4131 102.1548 C91.161 101.9716 70.7306 94.2514 52.4614 81.5641 C52.4131 82.522 52.3633 83.463 52.3557 84.4312 C52.0643 121.4074 81.8488 151.665 118.825 151.9564 C119.2584 151.9594 119.682 151.9714 120.1134 151.9666 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -9.91521,
					dy: -7.79461
				}).setFill({
					type: "radial",
					cx: 119.35627,
					cy: 151.96772,
					r: 51.10225,
					colors: [
						{offset: 0, color: [255,255,255,0.78431]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g.createPath({
					path: "M120.5 72 C120.5 78.0751 115.5752 83 109.5001 83 C103.4249 83 98.5 78.0751 98.5 72 C98.5 65.9249 103.4249 61 109.5001 61 C115.5752 61 120.5 65.9249 120.5 72 Z"
				}).setFill({
					type: "radial",
					cx: 109.50001,
					cy: 72,
					r: 11,
					colors: [
						{offset: 0, color: [27,27,27,0]},
						{offset: 0.65, color: [27,27,27,0]},
						{offset: 0.79396, color: [27,27,27,0.52941]},
						{offset: 1, color: [27,27,27,0]}
					]
				});
			},

			drawForeground: function(g){
				g.setTransform({
					dx: -35.1949,
					dy: 2.6112
				});
				g.createPath({
					path: "M154.0331 -104.8439 C154.0331 -99.7938 149.9391 -95.6998 144.889 -95.6998 C139.8388 -95.6998 135.7449 -99.7938 135.7449 -104.8439 C135.7449 -109.8941 139.8388 -113.9881 144.889 -113.9881 C149.9391 -113.9881 154.0331 -109.8941 154.0331 -104.8439 Z"
				}).setTransform({
					xx: 1.02059,
					xy: 0,
					yx: 0,
					yy: 1.02059,
					dx: -38.20475,
					dy: 179.20141
				}).setFill({
					type: "radial",
					cx: 144.889,
					cy: -109.41602,
					r: 18.28825,
					colors: [
						{offset: 0, color: [149,149,149,1]},
						{offset: 0.5, color: [0,0,0,1]},
						{offset: 1, color: [0,0,0,1]}
					]
				});
				g.createPath({
					path: "M154.0331 -104.8439 C154.0331 -99.7938 149.9391 -95.6998 144.889 -95.6998 C139.8388 -95.6998 135.7449 -99.7938 135.7449 -104.8439 C135.7449 -109.8941 139.8388 -113.9881 144.889 -113.9881 C149.9391 -113.9881 154.0331 -109.8941 154.0331 -104.8439 Z"
				}).setTransform({
					xx: 0.75981,
					xy: 0,
					yx: 0,
					yy: 0.77223,
					dx: -0.42089,
					dy: 153.16236
				}).setFill([105,105,105,0.27451]);
				g.createPath({
					path: "M154.0331 -104.8439 C154.0331 -99.7938 149.9391 -95.6998 144.889 -95.6998 C139.8388 -95.6998 135.7449 -99.7938 135.7449 -104.8439 C135.7449 -109.8941 139.8388 -113.9881 144.889 -113.9881 C149.9391 -113.9881 154.0331 -109.8941 154.0331 -104.8439 Z"
				}).setTransform({
					xx: 0.71014,
					xy: 0,
					yx: 0,
					yy: 0.68531,
					dx: 6.77605,
					dy: 144.04869
				}).setFill([105,105,105,0.1451]);
				var g1 = g.createGroup();
				g1.createPath({
					path: "M159.0844 18.2245 C150.5446 10.2027 140.1505 4.5796 127.9316 1.355 C88.5851 -9.028 47.9631 14.5821 37.2359 54.0209 C36.7429 56.0042 40.1338 57.2627 41.0794 54.3934 C52.0111 18.8509 91.9601 -1.9539 128.0153 7.5608 C145.6412 12.2121 159.1741 22.1948 168.6021 37.5085 C170.3912 40.8455 174.3171 39.0906 172.6329 35.5937 C168.7989 28.9194 164.2942 23.1185 159.0844 18.2246 Z"
				}).setFill({
					type: "linear",
					x1: 109.1045,
					y1: -31.80173,
					x2: 29.72714,
					y2: 47.57563,
					colors: [
						{offset: 0, color: [255,255,255,0.16863]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g1.createPath({
					path: "M159.0844 18.2245 C150.5446 10.2027 140.1505 4.5796 127.9316 1.355 C88.5851 -9.028 47.9631 14.5821 37.2359 54.0209 C36.7429 56.0042 39.286 56.8994 40.2315 54.0301 C51.1632 18.4876 91.5968 -3.044 127.652 6.4707 C145.2778 11.1219 160.0221 22.0737 169.45 37.3874 C171.239 40.7244 174.3171 39.0906 172.6329 35.5937 C168.799 28.9195 164.2942 23.1185 159.0844 18.2245 Z"
				}).setFill({
					type: "linear",
					x1: 109.10456,
					y1: -31.80179,
					x2: 29.67151,
					y2: 47.63127,
					colors: [
						{offset: 0, color: [255,255,255,0.16863]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g1.createPath({
					path: "M159.0844 18.2245 C150.5446 10.2027 140.1505 4.5796 127.9316 1.355 C88.5851 -9.028 47.9631 14.5821 37.2359 54.0209 C36.7429 56.0042 38.4381 56.2938 39.3837 53.4245 C50.3153 17.8819 91.8389 -4.2552 127.8942 5.2593 C145.52 9.9107 160.5066 21.5891 169.9344 36.903 C171.7236 40.2399 174.3171 39.0906 172.6329 35.5937 C168.7989 28.9194 164.2942 23.1185 159.0844 18.2245 Z"
				}).setFill({
					type: "linear",
					x1: 109.10456,
					y1: -31.80179,
					x2: 29.64014,
					y2: 47.66264,
					colors: [
						{offset: 0, color: [255,255,255,0.16863]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				g1.createPath({
					path: "M159.0844 18.2245 C150.5446 10.2027 140.1505 4.5796 127.9316 1.355 C88.5851 -9.028 47.9631 14.5821 37.2359 54.0209 C36.7429 56.0042 38.0747 55.2037 39.0204 52.3344 C49.952 16.7918 91.3545 -5.7087 127.4097 3.806 C145.0356 8.4572 160.6276 20.499 170.0556 35.8128 C171.8447 39.1497 174.3171 39.0906 172.6329 35.5937 C168.7989 28.9194 164.2942 23.1185 159.0844 18.2245 Z"
				}).setFill({
					type: "linear",
					x1: 109.10456,
					y1: -31.80179,
					x2: 29.72714,
					y2: 47.57563,
					colors: [
						{offset: 0, color: [255,255,255,0.16863]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				var g2 = g.createGroup();
				g2.createPath({
					path: "M59.119 126.5165 C67.6588 134.5384 78.0529 140.1615 90.2718 143.386 C129.6183 153.7691 170.2403 130.1589 180.9675 90.7201 C181.4605 88.7369 178.0696 87.4783 177.124 90.3476 C166.1923 125.8902 126.2433 146.6949 90.1881 137.1803 C72.5622 132.529 59.0293 122.5463 49.6013 107.2325 C47.8122 103.8956 43.8863 105.6505 45.5705 109.1473 C49.4045 115.8217 53.9092 121.6225 59.1191 126.5164 Z"
				}).setFill({
					type: "linear",
					x1: 585.36305,
					y1: -299.72138,
					x2: 109.0989,
					y2: 176.54277,
					colors: [
						{offset: 0, color: [0,0,81,0.16863]},
						{offset: 1, color: [0,0,81,0]}
					]
				});
				g2.createPath({
					path: "M59.119 126.5165 C67.6588 134.5384 78.0529 140.1615 90.2718 143.386 C129.6183 153.7691 170.2403 130.1589 180.9675 90.7201 C181.4605 88.7369 178.9174 87.8416 177.9719 90.711 C167.0402 126.2535 126.6066 147.785 90.5514 138.2704 C72.9256 133.6191 58.1813 122.6674 48.7534 107.3537 C46.9644 104.0166 43.8863 105.6505 45.5705 109.1473 C49.4044 115.8216 53.9092 121.6225 59.119 126.5165 Z"
				}).setFill({
					type: "linear",
					x1: 585.69717,
					y1: -300.0555,
					x2: 109.09884,
					y2: 176.54283,
					colors: [
						{offset: 0, color: [0,0,81,0.16863]},
						{offset: 1, color: [0,0,81,0]}
					]
				});
				g2.createPath({
					path: "M59.119 126.5165 C67.6588 134.5384 78.0529 140.1615 90.2718 143.386 C129.6183 153.7691 170.2403 130.1589 180.9675 90.7201 C181.4605 88.7369 179.7654 88.4473 178.8197 91.3166 C167.8881 126.8591 126.3645 148.9962 90.3092 139.4817 C72.6834 134.8304 57.6968 123.1519 48.269 107.8381 C46.4798 104.5012 43.8863 105.6505 45.5705 109.1473 C49.4045 115.8217 53.9092 121.6225 59.119 126.5165 Z"
				}).setFill({
					type: "linear",
					x1: 585.88539,
					y1: -300.24371,
					x2: 109.09884,
					y2: 176.54283,
					colors: [
						{offset: 0, color: [0,0,81,0.16863]},
						{offset: 1, color: [0,0,81,0]}
					]
				});
				g2.createPath({
					path: "M59.119 126.5165 C67.6588 134.5384 78.0529 140.1615 90.2718 143.386 C129.6183 153.7691 170.2403 130.1589 180.9675 90.7201 C181.4605 88.7369 180.1286 89.5374 179.183 92.4066 C168.2514 127.9492 126.8489 150.4497 90.7937 140.9351 C73.1679 136.2839 57.5758 124.242 48.1478 108.9283 C46.3587 105.5913 43.8863 105.6505 45.5705 109.1473 C49.4045 115.8217 53.9092 121.6225 59.119 126.5165 Z"
				}).setFill({
					type: "linear",
					x1: 585.36337,
					y1: -299.7217,
					x2: 109.09884,
					y2: 176.54283,
					colors: [
						{offset: 0, color: [0,0,81,0.16863]},
						{offset: 1, color: [0,0,81,0]}
					]
				});
				g.createPath({
					path: "M109.5066 -2.6112 C68.4617 -2.6112 35.1949 30.97 35.1949 72.3749 C35.1949 113.7798 68.4617 147.3304 109.5066 147.3304 C150.5514 147.3304 183.8182 113.7798 183.8182 72.3749 C183.8182 30.97 150.5514 -2.6112 109.5066 -2.6112 ZM109.5066 0.0253 C149.1186 0.0253 181.2124 32.4154 181.2124 72.3749 C181.2124 112.3344 149.1186 144.7245 109.5066 144.7245 C69.8945 144.7245 37.7701 112.3344 37.7701 72.3749 C37.7701 32.4154 69.8945 0.0253 109.5066 0.0253 Z"
				}).setFill({
					type: "linear",
					x1: 183.81821,
					y1: 147.3304,
					x2: -39.11675,
					y2: -77.582,
					colors: [
						{offset: 0, color: [148,152,161,1]},
						{offset: 1, color: [255,255,255,1]}
					]
				});
				g.createPath({
					path: "M118.8822 7.1445 C82.5026 7.8365 53.1713 37.5998 53.1713 74.1439 C53.1713 74.5043 53.1656 74.8654 53.1713 75.2245 C73.613 83.0057 97.3601 87.444 122.6644 87.444 C145.9172 87.444 167.8226 83.6597 187.0868 77.0117 C187.1275 76.0535 187.1699 75.1121 187.1699 74.1439 C187.1699 37.1665 157.1479 7.1445 120.1706 7.1445 C119.7373 7.1445 119.3135 7.1363 118.8821 7.1445 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -9.91521,
					dy: -7.79461
				}).setFill({
					type: "linear",
					x1: 53.16877,
					y1: 7.14086,
					x2: 53.16877,
					y2: 87.444,
					colors: [
						{offset: 0, color: [255,255,255,1]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
			}
		});
	}
);

