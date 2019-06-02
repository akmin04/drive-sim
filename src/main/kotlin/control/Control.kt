package control

import util.Loopable

abstract class Control : Loopable {
    /**
     *  Left-Right value (A, D) from -1.0 to 1.0
     */
    var x = 0.0

    /**
     * Down-Up value (S, W) from -1.0 to 1.0
     */
    var y = 0.0

    /**
     * Rotate Left-Right value (LEFT, RIGHT) from -1.0 to 1.0
     */
    var z = 0.0

    override fun toString(): String = "X: $x | Y: $y | Z: $z"
}