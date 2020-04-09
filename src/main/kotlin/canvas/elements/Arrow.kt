@file:Suppress("unused")

package canvas.elements

import canvas.Body
import canvas.Color
import canvas.Context
import util.Point
import util.Vector
import util.xy
import kotlin.math.cos
import kotlin.math.pow
import kotlin.math.sin
import kotlin.math.sqrt

fun Body.arrow(
        start: Point,
        end: Point,
        width: Double = 5.0,
        arrowLength: Double,
        arrowAngle: Double,
        color: Color = Color.black
) = initTag(Arrow(start, end, width, arrowLength, arrowAngle, color))

fun Body.arrow(
        start: Point,
        vector: Vector,
        width: Double = 5.0,
        arrowLength: Double,
        arrowAngle: Double,
        color: Color = Color.black
) = initTag(
        Arrow(
                start,
                start.x + vector.magnitude * sin(vector.bearing)
                        xy start.y + vector.magnitude * cos(vector.bearing),
                width, arrowLength, arrowAngle, color
        )
)

class Arrow(
        private val start: Point,
        private val end: Point,
        private val width: Double,
        private val arrowLength: Double,
        private val arrowAngle: Double,
        private val color: Color
) : Element {

    override var render = fun Context.() {
        lineWidth = width
        strokeStyle = color.toString()
        fillStyle = color.toString()

        // line
        beginPath()
        moveTo(start.x, start.y)
        lineTo(end.x, end.y)
        stroke()

        //tip
        val lengthRatio = arrowLength / sqrt((end.x - start.x).pow(2) + (end.y - start.y).pow(2))
        val cos = cos(arrowAngle)
        val sin = sin(arrowAngle)

        moveTo(end.x, end.y)
        lineTo(
                end.x + lengthRatio * ((start.x - end.x) * cos + (start.y - end.y) * sin),
                end.y + lengthRatio * ((start.y - end.y) * cos - (start.x - end.x) * sin)
        )
        lineTo(
                end.x + lengthRatio * ((start.x - end.x) * cos - (start.y - end.y) * sin),
                end.y + lengthRatio * ((start.y - end.y) * cos + (start.x - end.x) * sin)
        )
        lineTo(end.x, end.y)
        fill()
    }
}