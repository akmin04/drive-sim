package kanvas

import util.Color
import util.Point

open class Group(name: String) : Tag() {
    fun line(
        start: Point,
        end: Point,
        width: Double = 5.0,
        color: Color = Color.black
    ) = initTag(Line(start, end, width, color))

    fun group(name: String = "group", init: Group.() -> Unit): Group = initTag(Group(name), init)
}