package robots

import util.Keys
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.sin

object TankDriveRobot : RobotBase(
    size = 50.0,
    maxVelocity = 500.0
) {

    override fun update() {
        // Key to left/right output
        val x = -Keys.z
        val y = Keys.y

        val v = (1 - abs(x)) * y + y
        val w = (1 - abs(y)) * x + x

        val l = (v - w) / 2 * maxVelocity
        val r = (v + w) / 2 * maxVelocity

        // left/right output to position
        val s = (l + r) / 2
        val theta = (l - r) / size

        pos.x += s * sin(bearing)
        pos.y += s * cos(bearing)
        bearing += theta
    }


}