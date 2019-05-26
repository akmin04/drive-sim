package util

import org.w3c.dom.CanvasRenderingContext2D

fun CanvasRenderingContext2D.strokePolygon(vararg points: Point) {
    if (points.size < 3) {
        println("Tried to draw polygon with less than 3 points")
        return
    }

    beginPath()
    moveTo(points[0].x, points[0].y)
    for (i in 1 until points.size) {
        lineTo(points[i].x, points[i].y)
    }
    closePath()
    stroke()
}

fun CanvasRenderingContext2D.strokeLine(from: Point, to: Point) {
    beginPath()
    moveTo(from.x, from.y)
    lineTo(to.x, to.y)
    closePath()
    stroke()
}

fun CanvasRenderingContext2D.clear() {
    save()
    setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
    clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    restore()
}