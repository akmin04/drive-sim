package kanvas

import util.*
import kotlin.math.cos
import kotlin.math.sin

@Suppress("UNUSED_PARAMETER")
open class Group(name: String) : Tag() {
    fun line(
        start: Point,
        end: Point,
        width: Double = 5.0,
        color: Color = Color.black
    ) = initTag(Line(start, end, width, color))

    fun line(
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

    fun group(name: String = "group", init: Group.() -> Unit): Group = initTag(Group(name), init)
}