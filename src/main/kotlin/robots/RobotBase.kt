package robots

import Point

/**
 * Base robot which contains common information
 *
 * @param width of the robot (px)
 * @param height of the robot (px)
 * @param maxVelocity of the robot (px) every 1000/60 seconds
 * @param pos point of center of the robot
 * @param angle of the robot in degrees (clockwise from North)
 */
abstract class RobotBase(
    val width: Double,
    val height: Double,
    val maxVelocity: Double,
    val pos: Point,
    var angle: Double
) {

    /**
     * Points of the corners of the robot
     */
    val topLeft get() = Point(pos.x - width / 2, pos.y + height / 2).rotate(angle, pos)
    val topRight get() = Point(pos.x + width / 2, pos.y + height / 2).rotate(angle, pos)
    val bottomLeft get() = Point(pos.x - width / 2, pos.y - height / 2).rotate(angle, pos)
    val bottomRight get() = Point(pos.x + width / 2, pos.y - height / 2).rotate(angle, pos)
}