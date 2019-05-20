import robots.RobotBase
import util.fillPolygon
import kotlin.math.max
import kotlin.math.min

/**
 * Move/rotate in any direction (like swerve)
 * No restriction on moving and turning at the same time
 * No acceleration
 *
 * @see RobotBase
 */
class SimpleRobot(
    width: Double = 50.0,
    height: Double = 60.0,
    maxVelocity: Double = 10.0,
    pos: Point = Point(0.0, 0.0),
    angle: Double = 0.0
) : RobotBase(width, height, maxVelocity, pos, angle) {

    /**
     * Max angular velocity based on maxVelocity
     */
    private val maxAngularVelocity = (2 * maxVelocity) / width

    fun update() {
        // Check keys
        if (KeyManager[KeyMap.W]) { // UP
            pos.y += maxVelocity
        }
        if (KeyManager[KeyMap.A]) { // DOWN
            pos.y -= maxVelocity
        }
        if (KeyManager[KeyMap.S]) { // LEFT
            pos.x -= maxVelocity
        }
        if (KeyManager[KeyMap.D]) { // RIGHT
            pos.x += maxVelocity
        }
        if (KeyManager[KeyMap.LEFT]) { // ROTATE LEFT
            angle -= maxAngularVelocity
        }
        if (KeyManager[KeyMap.RIGHT]) { // ROTATE LEFT
            angle += maxAngularVelocity
        }

        // Check Bounds
        pos.x = max((-canvasWidth + width) / 2, pos.x)
        pos.x = min((canvasWidth - width) / 2, pos.x)
        pos.y = max((-canvasHeight + height) / 2, pos.y)
        pos.y = min((canvasHeight - height) / 2, pos.y)

        // Draw robot with (x, y) as CENTER
        ctx.fillPolygon(
            topLeft,
            topRight,
            bottomRight,
            bottomLeft
        )
    }
}