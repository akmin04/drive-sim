package robots

import canvas.Color
import canvas.elements.arrow
import canvas.elements.line
import canvas.render
import period
import settings.ButtonSetting
import settings.RangeSetting
import simulator
import util.*
import kotlin.math.PI
import kotlin.math.sign

@Suppress("MemberVisibilityCanBePrivate")
abstract class RobotBase(
    private val wheels: Array<Wheel>
) : Loopable {

    val maxVelocity by RangeSetting(
        initialValue = 600.0,
        min = 100.0,
        max = 1100.0
    )

    val robotWidth by RangeSetting(
        initialValue = 100.0,
        min = 50.0,
        max = 150.0
    )

    val robotLength by RangeSetting(
        initialValue = 100.0,
        min = 50.0,
        max = 150.0
    )

    @Suppress("unused")
    val resetAll by ButtonSetting {
        pos = 0.0 xy 0.0
        bearing = 0.0
        RangeSetting.reset(::maxVelocity)
        RangeSetting.reset(::robotWidth)
        RangeSetting.reset(::robotLength)
    }

    val maxVelocityPerFrame get() = maxVelocity * period / 1000
    val numberOfWheels = wheels.size

    var pos = 0.0 xy 0.0
    var bearing = 0.0

    private val halfWidth get() = robotWidth / 2
    private val halfLength get() = robotLength / 2
    private val corners
        get() = listOf(
            halfWidth xy halfLength, // top right
            halfWidth xy -halfLength, // bottom right
            -halfWidth xy -halfLength, // bottom left
            -halfWidth xy halfLength // top left
        )

    private val body
        get() = canvas.body {
            for (i in 0 until 3) {
                line(start = corners[i], end = corners[i + 1])
            }
            line(start = corners[0], end = corners[3], color = Color.green)

            wheels.forEach { (rx, ry, vector) ->
                arrow(
                    start = robotWidth * rx xy robotLength * ry,
                    vector = 100.0 * vector.magnitude.sign vec vector.bearing - bearing,
                    width = 5.0,
                    arrowLength = 25.0,
                    arrowAngle = 45.0 / 360.0 * PI,
                    color = if (vector.magnitude > 0) Color.blue else Color.red
                )
            }
        }

    abstract fun update(): Array<Vector>

    override fun loop() {
        val vectors = update()
        if (vectors.size != numberOfWheels) {
            println("Number of wheels error. Vector size: ${vectors.size}. Number of wheels: $numberOfWheels")
        } else {
            for (i in 0 until numberOfWheels) {
                wheels[i].vector = vectors[i]
            }
        }

        simulator.render(body, pos, bearing)
    }

}