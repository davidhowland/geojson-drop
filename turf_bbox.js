(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.turf = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var each=require("turf-meta").coordEach;module.exports=function(r){var e=[1/0,1/0,-(1/0),-(1/0)];return each(r,function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])}),e};
},{"turf-meta":2}],2:[function(require,module,exports){
function coordEach(e,o,t){var r,n,c,u,l,p,a,i,f,h,d=0,s="FeatureCollection"===e.type,y="Feature"===e.type,g=s?e.features.length:1;for(r=0;r<g;r++)for(f=s?e.features[r].geometry:y?e.geometry:e,h="GeometryCollection"===f.type,a=h?f.geometries.length:1,u=0;u<a;u++)if(p=h?f.geometries[u]:f,i=p.coordinates,d=!t||"Polygon"!==p.type&&"MultiPolygon"!==p.type?0:1,"Point"===p.type)o(i);else if("LineString"===p.type||"MultiPoint"===p.type)for(n=0;n<i.length;n++)o(i[n]);else if("Polygon"===p.type||"MultiLineString"===p.type)for(n=0;n<i.length;n++)for(c=0;c<i[n].length-d;c++)o(i[n][c]);else{if("MultiPolygon"!==p.type)throw new Error("Unknown Geometry Type");for(n=0;n<i.length;n++)for(c=0;c<i[n].length;c++)for(l=0;l<i[n][c].length-d;l++)o(i[n][c][l])}}function coordReduce(e,o,t,r){return coordEach(e,function(e){t=o(t,e)},r),t}function propEach(e,o){var t;switch(e.type){case"FeatureCollection":for(t=0;t<e.features.length;t++)o(e.features[t].properties);break;case"Feature":o(e.properties)}}function propReduce(e,o,t){return propEach(e,function(e){t=o(t,e)}),t}function featureEach(e,o){if("Feature"===e.type)return o(e);if("FeatureCollection"===e.type)for(var t=0;t<e.features.length;t++)o(e.features[t])}function coordAll(e){var o=[];return coordEach(e,function(e){o.push(e)}),o}module.exports.coordEach=coordEach,module.exports.coordReduce=coordReduce,module.exports.propEach=propEach,module.exports.propReduce=propReduce,module.exports.featureEach=featureEach,module.exports.coordAll=coordAll;
},{}],3:[function(require,module,exports){
module.exports={bbox:require("turf-bbox")};
},{"turf-bbox":1}]},{},[3])(3)
});
