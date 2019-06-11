package util.canvas

import org.w3c.dom.CanvasRenderingContext2D
import util.Point

/**
 * Draw a line between connected points
 *
 * @param points to draw lines between
 */
fun CanvasRenderingContext2D.strokeConnectedLines(vararg points: Point) {
    beginPath()
    moveTo(points[0].x, points[0].y)
    for (i in 1 until points.size) {
        lineTo(points[i].x, points[i].y)
    }
    closePath()
    stroke()
}

/**
 * Draw a line between each pair of points
 *
 * @param points pairs of points to draw lines between
 */
fun CanvasRenderingContext2D.strokeLines(vararg points: Pair<Point, Point>) {
    points.forEach {
        beginPath()
        moveTo(it.first.x, it.first.y)
        lineTo(it.second.x, it.second.y)
        closePath()
        stroke()
    }
}

/**
 * Draw a component at a location
 *
 * @param component to draw
 * @param pos point to draw at
 * @param bearing angle to draw at
 */
fun CanvasRenderingContext2D.drawComponent(
    component: CanvasRenderingContext2D.() -> Unit,
    pos: Point,
    bearing: Double = 0.0
) {
    save()
    translate(pos.x, pos.y)
    rotate(-bearing)
    component()
    restore()
}

fun CanvasRenderingContext2D.clear() {
    save()
    setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
    clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    restore()
}

/**
 * Translate and scale context such that the coordinate system is cartesian
 * (0,0) becomes origin
 * Top right is positive x and y
 */
fun CanvasRenderingContext2D.cartesian() {
    translate(this.canvas.width / 2.0, this.canvas.height / 2.0)
    scale(1.0, -1.0)
}