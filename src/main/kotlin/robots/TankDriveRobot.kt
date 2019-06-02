package robots

import control.KeyboardControl
import org.w3c.dom.CanvasRenderingContext2D
import settings.Settings
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.sin

class TankDriveRobot(
    context: CanvasRenderingContext2D,
    private val controls: KeyboardControl,
    private val settings: Settings
) : Robot(
    context,
    settings
) {

    override fun update() {
        // Key to left/right output
        val x = -controls.z
        val y = controls.y

        val v = (1 - abs(x)) * y + y
        val w = (1 - abs(y)) * x + x

        val l = (v - w) / 2 * maxVelocityPerFrame
        val r = (v + w) / 2 * maxVelocityPerFrame

        // left/right output to position
        val s = (l + r) / 2
        val theta = (l - r) / settings.robotWidth

        pos.x += s * sin(bearing)
        pos.y += s * cos(bearing)
        bearing += theta
    }

}