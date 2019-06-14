package robots

import controls
import util.*
import kotlin.math.*

class SwerveRobot(
    pos: Point = 0.0 xy 0.0,
    bearing: Double = 0.0
) : RobotBase(
    pos, bearing,
    arrayOf(Wheel(-0.5, 0.5), Wheel(0.5, 0.5), Wheel(0.5, -0.5), Wheel(-0.5, -0.5))
) {

    private infix fun Double.avg(that: Double) = (this + that) / 2

    override fun update(): Array<Vector> {
        // key to each wheel's output
        val wheelsVectors = Array(numberOfWheels) { 0.0 vec 0.0 }

        // strafe
        val strafeMagnitude = abs(controls.x) + abs(controls.y)
        val strafeBearing = atan2(controls.x, controls.y) - bearing
        val strafeVectors = Array(numberOfWheels) { strafeMagnitude vec strafeBearing }

        // rotation
        val rotationVectors = arrayOf(
            controls.z vec atan2(-halfWidth, halfLength) + PI / 2,
            controls.z vec atan2(halfWidth, halfLength) + PI / 2,
            controls.z vec atan2(halfWidth, -halfLength) + PI / 2,
            controls.z vec atan2(-halfWidth, -halfLength) + PI / 2
        )

        // add strafe and rotation
        for (i in 0 until numberOfWheels) {
            wheelsVectors[i] = strafeVectors[i] + rotationVectors[i]
        }

        // cap magnitude if over 1.0
        val max = wheelsVectors.maxBy { it.magnitude }!!.magnitude
        for (i in 0 until numberOfWheels) {
            wheelsVectors[i].magnitude *= maxVelocityPerFrame
            if (max > 1.0) wheelsVectors[i].magnitude /= max
        }

        // wheel outputs to position
        val xyComponents = wheelsVectors.map {
            sin(it.bearing) * it.magnitude to cos(it.bearing) * it.magnitude
        }

        val top = xyComponents[0].first avg xyComponents[1].first
        val bottom = xyComponents[3].first avg xyComponents[2].first
        val left = xyComponents[0].second avg xyComponents[3].second
        val right = xyComponents[1].second avg xyComponents[2].second

        val omega1 = (top - bottom) / robotLength
        val omega2 = (left - right) / robotWidth
        val omega = (omega1 + omega2) / 2

        val upDown = left + right vec bearing
        val leftRight = top + bottom vec bearing + PI / 2

        pos.x += (upDown.x + leftRight.x) / 2
        pos.y += (upDown.y + leftRight.y) / 2
        bearing += omega

        return wheelsVectors
    }
}