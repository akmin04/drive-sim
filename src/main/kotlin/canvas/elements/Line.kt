@file:Suppress("unused")

package canvas.elements

import canvas.Body
import canvas.Color
import canvas.Context
import util.Point
import util.Vector
import util.xy
import kotlin.math.cos
import kotlin.math.sin


fun Body.line(
        start: Point,
        end: Point,
        width: Double = 5.0,
        color: Color = Color.black
) = initTag(Line(start, end, width, color))

fun Body.line(
        start: Point,
        vector: Vector,
        width: Double = 5.0,
        color: Color = Color.black
) = initTag(
        Line(
                start,
                start.x + vector.magnitude * sin(vector.bearing) xy
                        start.y + vector.magnitude * cos(vector.bearing),
                width, color
        )
)

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
}