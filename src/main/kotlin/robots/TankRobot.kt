package robots

import controls
import util.*
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.sin

/**
 * A robot with a simple tank drivetrain.
 *
 * The left and right side of the robot has wheels.
 * The robot can translate(vertically) and rotate, but not at the same time.
 */
class TankRobot(
        pos: Point = 0.0 xy 0.0,
        bearing: Double = 0.0
) : RobotBase(
        pos, bearing,
        arrayOf(Wheel(-0.5, 0.0), Wheel(0.5, 0.0))
) {
    override fun update(): Array<Vector> {
        // Key to left/right output
        val x = -controls.z
        val y = controls.y

        val v = (1 - abs(x)) * y + y
        val w = (1 - abs(y)) * x + x

        val l = (v - w) / 2 * maxVelocityPerFrame
        val r = (v + w) / 2 * maxVelocityPerFrame

        // left/right output to position
        val s = (l + r) / 2
        val theta = (l - r) / robotWidth

        pos.x += s * sin(bearing)
        pos.y += s * cos(bearing)
        bearing += theta

        return arrayOf(
                l vec 0.0,
                r vec 0.0
        )
    }

}