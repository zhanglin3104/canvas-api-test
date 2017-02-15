

window.onload = () => {

    var c=document.getElementById("myCanvas") as HTMLCanvasElement;
    var cxt=c.getContext("2d");
    cxt.fillText("ice", 50, 50);
    var image = new Image();
    image.src = "ice.png";
    image.onload = () => {
        cxt.clearRect(0,0,c.width,c.height);
        cxt.drawImage(image, 0, 0);
    } 
    

    var stage: DisplayObjectContainer = new DisplayObjectContainer();
    setInterval(() => {
        cxt.clearRect(0, 0, c.width, c.height);
        stage.draw(cxt);
    }, 30);

    var imageBitmap: Bitmap = new Bitmap();
    imageBitmap.name = "flower.png"
    imageBitmap.x = 50;
    imageBitmap.y = 50;
    

    var textField: TextField = new TextField();
    textField.text = "flower";
    textField.x = 50;
    textField.y = 50;
    textField.textColor = "#0000FF"
   
  
    stage.addChild(imageBitmap);
    stage.addChild(textField);
};

interface Drawable {
    draw(context2D: CanvasRenderingContext2D);
}


class DisplayObjectContainer implements Drawable {
    childs: Drawable[] = [];
    draw(context2D: CanvasRenderingContext2D) {
        for (let drawable of this.childs) {
            drawable.draw(context2D);
        }
    }
    addChild(child: Drawable) {
        this.childs.push(child);
    }

}



class Bitmap implements Drawable {
    x: number = 0;
    y: number = 0;
    width: number = -1;
    height: number = -1;
    name: string = "";
    draw(context2D: CanvasRenderingContext2D) {
        var image = document.createElement("img");
        image.src = this.name;
        context2D.drawImage(image, this.x, this.y);
        image.onload = () => {context2D.drawImage(image, this.x, this.y);} 
        }
    }



class TextField implements Drawable {
    x: number = 0;
    y: number = 0;
    text: string = "";
    textColor: string = "#000000"
   draw(context2D: CanvasRenderingContext2D) {
        this.toggleCase();
        context2D.fillStyle = this.textColor;
        context2D.fillText(this.text, this.x, this.y, 100);
    }

    private toggleCase() {
        this.textColor.toLocaleUpperCase();
    }
}
