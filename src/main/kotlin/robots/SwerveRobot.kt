package robots

import util.*

class SwerveRobot(
    pos: Point = 0.0 xy 0.0,
    bearing: Double = 0.0
) : RobotBase(
    pos, bearing,
    arrayOf(Wheel(-0.5, 0.5), Wheel(0.5, 0.5), Wheel(0.5, -0.5), Wheel(-0.5, -0.5))
) {
    override fun update(): Array<Vector> = Array(4) { Vector(1.0, 0.0) }
}