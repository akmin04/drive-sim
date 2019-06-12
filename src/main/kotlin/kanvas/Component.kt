package kanvas

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
