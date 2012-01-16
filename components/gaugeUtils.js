define(["dojo/_base/declare", "dojo/_base/lang", "dojo/on"], function(declare, lang, on){
	var _gaugeUtils = declare("dojox.dgauges.components.gaugeUtils", null, {});
	lang.mixin(_gaugeUtils, {
		brightness: function(col, b){
			//	summary:
			//		Adjusts the brightness of a color.
			//	col: Number
			//		The base color
			//	b: Number
			//		A positive or negative value to adjust the brightness
			//	returns: Number
			//		The modified color			
			var res = lang.mixin(null, col);
			res.r = Math.max(Math.min(res.r + b, 255), 0);
			res.g = Math.max(Math.min(res.g + b, 255), 0);
			res.b = Math.max(Math.min(res.b + b, 255), 0);
			return res;
		},
		
		createGradient: function(entries){
			//	summary:
			//		Creates a gradient object
			//	entries: Array
			//		An array of numbers representing colors
			//	returns: Number
			//		The modified color			
			var res = {
				colors: []
			};
			var obj;
			for(var i = 0; i < entries.length; i++){
				if(i % 2 == 0){
					obj = {
						offset: entries[i]
					};
				} else {
					obj.color = entries[i];
					res.colors.push(obj);
				}
			}
			return res;
		},
		
		_setter: function(obj, attributes, values){
			for(var i = 0; i < attributes.length; i++){
				obj[attributes[i]] = values[i];
			}
		},
		
		genericCircularGauge: function(scale, indicator, originX, originY, radius, startAngle, endAngle, orientation, font, labelPosition, tickShapeFunc){
			//	summary:
			//		A helper method for configuring a circular gauge.
			//	scale: CircularScale
			//		A circular scale
			//	indicator: IndicatorBase
			//		A circular indicator
			//	originX: Number
			//		The x-coordinate of the center of the scale (in pixels) 
			//	originY: Number
			//		The y-coordinate of the center of the scale (in pixels)
			//	radius: Number
			//		The radius of the scale (in pixels)
			//	startAngle: Number
			//		The start angle of the scale (in degrees)
			//	endAngle: Number
			//		The end angle of the scale (in degrees)
			//	orientation: String
			//		The orientation of the scale, can be "clockwise" or "cclockwise"
			//	font: Object
			//		The font used for the gauge
			//	labelPosition: String
			//		The position of the labels regarding   
			//	tickShapeFunc: Object
			//		A drawing function for the ticks
			//	returns: Number
			//		The modified color	
			var attributes = ["originX", "originY", "radius", "startAngle", "endAngle", "orientation", "font", "labelPosition", "tickShapeFunc"];
			if(!orientation){
				orientation = "clockwise";
			}
			if(!font){
				font = {
					family: "Helvetica",
					style: "normal",
					size: "10pt",
					color: "#555555"
				};
			}
			if(!labelPosition){
				labelPosition = "inside";
			}
			if(!tickShapeFunc){
				tickShapeFunc = function(group, scale, tick){
					return group.createLine({
						x1: tick.isMinor ? 2 : 0,
						y1: 0,
						x2: tick.isMinor ? 8 : 10,
						y2: 0
					}).setStroke({
						color: tick.isMinor ? "black" : "#333333",
						width: tick.isMinor ? 0.25 : 0.45
					});
				};
			}
			
			this._setter(scale, attributes, [originX, originY, radius, startAngle, endAngle, orientation, font, labelPosition, tickShapeFunc]);
			
			indicator.set("interactionArea", "gauge");
			// Needle shape
			indicator.set("indicatorShapeFunc", function(group, indicator){
				return group.createPolyline([0, -5, indicator.scale.radius - 6, 0, 0, 5, 0, -5]).setStroke({
					color: "#333333",
					width: 0.25
				}).setFill(scale._gauge.indicatorColor);
			});
		}
	});
	return _gaugeUtils;
});
