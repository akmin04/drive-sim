package util

data class Point(
    var x: Double,
    var y: Double
) {
    override fun toString() = "($x, $y)"
}

infix fun Double.xy(that: Double) = Point(this, that)