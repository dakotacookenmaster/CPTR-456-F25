export class Blob {
    constructor(private ctx: CanvasRenderingContext2D, private x: number, private y: number, private radius: number) {}

    draw(): void {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fillStyle = "purple"
        this.ctx.fill()
        this.ctx.closePath()
    }

    moveDown() {
        this.x += 1
        this.y += 1
        this.draw()
    }
}