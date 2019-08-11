package util

/**
 * Represents a wheel on a robot.
 *
 * @property relativeX the relative x-position of the wheel on the robot. (-1.0 = left, 1.0 = right).
 * @property relativeY the relative y-position of the wheel on the robot. (-1.0 = bottom, 1.0 = top).
 * @property vector the current vector of the wheel.
 */
data class Wheel(
    val relativeX: Double,
    val relativeY: Double,
    var vector: Vector = Vector(0.0, 0.0)
)