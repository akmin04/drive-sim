package util

data class Vector(
    var magnitude: Double,
    var bearing: Double
) {
    override fun toString() = "($magnitude, $bearing)"
}

infix fun Double.vec(that: Double) = Vector(this, that)