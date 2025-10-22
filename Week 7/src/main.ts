import './style.css'
import { Blob } from './blob.class'


const canvas = document.getElementById("canvas")! as HTMLCanvasElement
const ctx = canvas.getContext("2d")

function animate(ctx: CanvasRenderingContext2D, blobs: Array<Blob>) {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 500, 500)

    for(const b of blobs) {
      b.moveDown()
    }

    requestAnimationFrame(() => animate(ctx, blobs))
}


if(ctx) {
  const blob = new Blob(ctx, 5, 10, 30)
  const blob2 = new Blob(ctx, 50, 50, 15);
  const blob3 = new Blob(ctx, 100, 100, 45);

  const blobs = [blob, blob2, blob3];

  animate(ctx, blobs)

} else {
  alert("Context has not been acquired.")
}