package robots

import org.w3c.dom.CanvasRenderingContext2D
import period
import util.settings.Settings
import util.canvas.Component
import util.canvas.drawComponent
import util.canvas.strokeConnectedLines
import util.canvas.strokeLines
import util.xy

abstract class RobotBase(
    private val context: CanvasRenderingContext2D,
    private val settings: Settings
) : Component {

    val maxVelocityPerFrame get() = settings.maxVelocity() * period / 1000

    var pos = 0.0 xy 0.0
    var bearing = 0.0

    override val draw = fun CanvasRenderingContext2D.() {

        val halfWidth = settings.robotWidth() / 2
        val halfLength = settings.robotLength() / 2

        val corners = arrayOf(
            halfWidth xy halfLength, // top right
            halfWidth xy -halfLength, // bottom right
            -halfWidth xy -halfLength, // bottom left
            -halfWidth xy halfLength // top left
        )

        lineWidth = 5.0
        strokeStyle = "#000000"
        strokeConnectedLines(*corners)
        strokeStyle = "#0000ff"
        strokeLines(corners[0] to corners[3])
    }

    abstract fun update()

    override fun loop() {
        update()
        context.drawComponent(draw, pos, bearing)
    }

}