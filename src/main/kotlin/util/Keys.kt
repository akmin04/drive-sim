package util

import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document

/**
 * Receive keyboard events and translate to x, y, and z axes.
 */
object Keys : Loopable {
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


    /**
     * Key-codes
     */
    private const val A = 65
    private const val D = 68
    private const val S = 83
    private const val W = 87
    private const val LEFT = 37
    private const val RIGHT = 39

    private val keys = hashMapOf<Int, Boolean>()

    private fun Int.isPressed(): Boolean = keys[this] ?: false

    init {
        document.addEventListener("keydown", {
            keys[(it as KeyboardEvent).keyCode] = true
        })

        document.addEventListener("keyup", {
            keys[(it as KeyboardEvent).keyCode] = false
        })
    }

    override fun loop() {
        x = 0.0
        y = 0.0
        z = 0.0

        if (A.isPressed()) x -= 1.0
        if (D.isPressed()) x += 1.0
        if (S.isPressed()) y -= 1.0
        if (W.isPressed()) y += 1.0
        if (LEFT.isPressed()) z -= 1.0
        if (RIGHT.isPressed()) z += 1.0
    }

    override fun toString(): String = "X: $x | Y: $y | Z: $z"
}