package robots

import period
import simulator
import util.Loopable
import util.Point
import util.strokeLine
import util.strokePolygon
import kotlin.math.cos
import kotlin.math.sin

/**
 * Base class for all robots
 *
 * @param size width/hieght of the robot (in pixels)
 * @param maxVelocity of the robot (in pixels per second)
 *
 * @see Loopable
 */
abstract class RobotBase(
    val size: Double,
    maxVelocity: Double
) : Loopable {

    /**
     * Calculate maxVelocity per frame
     */
    val maxVelocity = maxVelocity * period / 1000

    /**
     * Current position and bearing of the robot
     */
    var pos = Point(0.0, 0.0)
    var bearing = 0.0

    /**
     * Abstract function to be called by the robot before `loop`
     */
    abstract fun update()

    override fun loop() {
        update()

        val sin = sin(bearing)
        val cos = cos(bearing)

        val corners = arrayOf(
            Point(pos.x + size / 2, pos.y + size / 2).rotate(pos, sin, cos), // top right
            Point(pos.x + size / 2, pos.y - size / 2).rotate(pos, sin, cos), // bottom right
            Point(pos.x - size / 2, pos.y - size / 2).rotate(pos, sin, cos), // bottom left
            Point(pos.x - size / 2, pos.y + size / 2).rotate(pos, sin, cos) // top left
        )

        simulator.lineWidth = 5.0
        simulator.strokeStyle = "#000000"
        simulator.strokePolygon(*corners)
        simulator.strokeStyle = "#0000ff"
        simulator.strokeLine(
            corners[0],
            corners[3]
        )
    }

}