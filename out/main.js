window.onload = function () {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.fillText("ice", 50, 50);
    var image = new Image();
    image.src = "ice.png";
    image.onload = function () {
        cxt.clearRect(0, 0, c.width, c.height);
        cxt.drawImage(image, 0, 0);
    };
    var stage = new DisplayObjectContainer();
    setInterval(function () {
        cxt.clearRect(0, 0, c.width, c.height);
        stage.draw(cxt);
    }, 30);
    var imageBitmap = new Bitmap();
    imageBitmap.name = "flower.png";
    imageBitmap.x = 50;
    imageBitmap.y = 50;
    var textField = new TextField();
    textField.text = "flower";
    textField.x = 50;
    textField.y = 50;
    textField.textColor = "#0000FF";
    stage.addChild(imageBitmap);
    stage.addChild(textField);
};
var DisplayObjectContainer = (function () {
    function DisplayObjectContainer() {
        this.childs = [];
    }
    DisplayObjectContainer.prototype.draw = function (context2D) {
        for (var _i = 0, _a = this.childs; _i < _a.length; _i++) {
            var drawable = _a[_i];
            drawable.draw(context2D);
        }
    };
    DisplayObjectContainer.prototype.addChild = function (child) {
        this.childs.push(child);
    };
    return DisplayObjectContainer;
}());
var Bitmap = (function () {
    function Bitmap() {
        this.x = 0;
        this.y = 0;
        this.width = -1;
        this.height = -1;
        this.name = "";
    }
    Bitmap.prototype.draw = function (context2D) {
        var _this = this;
        var image = document.createElement("img");
        image.src = this.name;
        context2D.drawImage(image, this.x, this.y);
        image.onload = function () { context2D.drawImage(image, _this.x, _this.y); };
    };
    return Bitmap;
}());
var TextField = (function () {
    function TextField() {
        this.x = 0;
        this.y = 0;
        this.text = "";
        this.textColor = "#000000";
    }
    TextField.prototype.draw = function (context2D) {
        this.toggleCase();
        context2D.fillStyle = this.textColor;
        context2D.fillText(this.text, this.x, this.y, 100);
    };
    TextField.prototype.toggleCase = function () {
        this.textColor.toLocaleUpperCase();
    };
    return TextField;
}());
//# sourceMappingURL=main.js.map