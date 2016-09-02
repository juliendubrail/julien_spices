function Rectangle(width,height){
    this.width=width;
    this.height=height;
    this.getArea = function(){
        return this.width * this.height;
    };
}

var rect = new Rectangle(4,5);
console.log(rect.getArea());

function Square(side){
    this.side=side;
    this.width=side;
    this.height=side;
    var rect = new Rectangle;
    this.getArea = function(){
        return rect.getArea.call(this);
    };
}

var square = new Square(4);
console.log(square.getArea());
