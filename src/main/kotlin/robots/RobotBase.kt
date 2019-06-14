package robots

import canvas.Color
import canvas.elements.arrow
import canvas.elements.line
import canvas.render
import period
import robot
import settings.*
import simulator
import util.*
import kotlin.math.*

@Suppress("MemberVisibilityCanBePrivate")
abstract class RobotBase(
    var pos: Point = 0.0 xy 0.0,
    var bearing: Double = 0.0,
    private val wheels: Array<Wheel>
) : Loopable {

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

    companion object {
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
        val drivetrainType by RadioSetting(
            arrayOf("Tank", "Swerve")
        ) {
            when (it) {
                "Tank" -> {
                    robot = TankRobot(robot.pos, robot.bearing)
                }
                "Swerve" -> {
                    robot = SwerveRobot(robot.pos, robot.bearing)
                }
                else -> {
                }
            }
        }

        @Suppress("unused")
        val resetAll by ButtonSetting {
            robot.pos = 0.0 xy 0.0
            robot.bearing = 0.0
            RangeSetting.reset(::maxVelocity)
            RangeSetting.reset(::robotWidth)
            RangeSetting.reset(::robotLength)
        }

        val maxVelocityPerFrame get() = maxVelocity * period / 1000
        val numberOfWheels get() = robot.wheels.size
        val halfWidth get() = robotWidth / 2
        val halfLength get() = robotLength / 2

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

                robot.wheels.forEach { (rx, ry, vector) ->
                    val magnitude = vector.magnitude / maxVelocityPerFrame
                    arrow(
                        start = robotWidth * rx xy robotLength * ry,
                        vector = 60.0 * magnitude vec vector.bearing,
                        width = 5.0,
                        arrowLength = 20.0 * abs(magnitude),
                        arrowAngle = 45.0 / 360.0 * PI,
                        color = if (vector.magnitude > 0) Color.blue else Color.red
                    )
                }
            }
    }

}