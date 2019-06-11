package util

data class Point(
    var x: Double,
    var y: Double
)

infix fun Double.xy(that: Double) = Point(this, that)