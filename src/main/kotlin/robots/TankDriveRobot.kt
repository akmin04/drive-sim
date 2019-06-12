package robots

import controls
import util.*
import kotlin.math.*

class TankDriveRobot : RobotBase(
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
            l vec bearing,
            r vec bearing
        )
    }

}