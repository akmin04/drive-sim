package util

import org.w3c.dom.CanvasRenderingContext2D

fun CanvasRenderingContext2D.clear() {
    save()
    setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
    clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    restore()
}

fun CanvasRenderingContext2D.cartesian() {
    translate(this.canvas.width / 2.0, this.canvas.height / 2.0)
    scale(1.0, -1.0)
}