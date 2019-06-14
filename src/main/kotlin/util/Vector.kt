package util

import kotlin.math.*

infix fun Double.vec(that: Double) = Vector(this, that)

data class Vector(
    var magnitude: Double,
    var bearing: Double
) {
    val x = sin(this.bearing) * this.magnitude
    val y = cos(this.bearing) * this.magnitude

    operator fun plus(that: Vector): Vector {
        val xComp = this.x + that.x
        val yComp = this.y + that.y
        return sqrt(xComp.pow(2) + yComp.pow(2)) vec atan2(xComp, yComp)
    }

    operator fun div(that: Double): Vector = Vector(this.magnitude / that, this.bearing)
}