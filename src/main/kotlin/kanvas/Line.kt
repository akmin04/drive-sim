package kanvas

import util.Color
import util.Point

class Line(
    private val start: Point,
    private val end: Point,
    private val width: Double,
    private val color: Color
) : Element {

    override var render = fun Context.() {
        lineWidth = width
        strokeStyle = color.toString()
        beginPath()
        moveTo(start.x, start.y)
        lineTo(end.x, end.y)
        stroke()
    }

    override fun toString() = "Line from $start to $end. Width: $width. Color: $color"

}