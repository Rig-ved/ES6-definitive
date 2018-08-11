import Ford from './app1.js'

var xSeries = new Ford();
xSeries.newBrand();
console.log(xSeries.brand);


var Polygon=class {
constructor(height,width){
    this.height=height;
    this.width=width;  
    }
}
console.log(Polygon.name)//Polygon

var Polygon2 = class PolygonNamed{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
var nameInstance= new Polygon2();
console.log(nameInstance);
console.log(Polygon2.name)