package util

infix fun Double.vec(that: Double) = Vector(this, that)

data class Vector(
    var magnitude: Double,
    var bearing: Double
)