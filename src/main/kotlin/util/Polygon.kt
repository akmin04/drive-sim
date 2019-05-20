package util

import Point
import ctx
import org.w3c.dom.CanvasRenderingContext2D

/**
 * Fill polygon with points
 *
 * @param points to draw polygon in
 */
fun CanvasRenderingContext2D.fillPolygon(vararg points: Point) {
    if (points.size < 3) {
        println("Tried to draw polygon with less than 3 points")
        return
    }

    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    for (i in 1 until points.size) {
        ctx.lineTo(points[i].x, points[i].y)
    }
    ctx.closePath()
    ctx.fill()
}