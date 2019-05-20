import kotlin.math.cos
import kotlin.math.sin

/**
 * Holds a x and y coordinate
 *
 * @param x coordinate
 * @param y coordinate
 */
data class Point(
    var x: Double,
    var y: Double
) {

    /**
     * New coordinate of a point after rotation
     *
     * @param theta angle to rotate
     * @param about rotate `this` against `about`
     * @return the new Point
     */
    fun rotate(theta: Double, about: Point): Point {
        // Calculate sin and cos ahead of time
        val cos = cos(theta)
        val sin = sin(theta)

        // Calculate new x and y after translation so that the `about` is (0, 0)
        val newX = x - about.x
        val newY = y - about.y

        // Clockwise matrix rotation
        return Point(
            newX * cos + newY * sin + about.x,
            -newX * sin + newY * cos + about.y
        )
    }
}