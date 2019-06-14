package canvas

import org.w3c.dom.CanvasRenderingContext2D
import util.Point

typealias Context = CanvasRenderingContext2D

fun Context.render(body: Body, pos: Point, bearing: Double = 0.0) {
    save()
    translate(pos.x, pos.y)
    rotate(-bearing)
    body.render(this)
    restore()
}

fun Context.clear() {
    save()
    setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
    clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    restore()
}

fun Context.cartesian() {
    translate(this.canvas.width / 2.0, this.canvas.height / 2.0)
    scale(1.0, -1.0)
}