class Star {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
    }

    drawElement(ox, oy, s = 10, n = 5, r = 0.25, fill = 'magenta'){

        for(let i=0;i<n*2;i++){
            let rotation = Math.PI*2*r;
            let angle = (i/(n*2))*Math.PI*2+rotation;
            let dist = s*(i%2)+s;
            let x = ox+Math.cos(angle)*dist;
            let y = oy+Math.sin(angle)*dist;
            if(i === 0) {
                this.canvasElement.moveTo(x, y);
                continue; //skip
            }
            this.canvasElement.lineTo(x, y);
        }
        this.canvasElement.closePath()
        this.canvasElement.fillStyle = fill;
        this.canvasElement.fill();
    }
}

export default Star;