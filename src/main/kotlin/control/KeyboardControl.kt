package control

import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document

class KeyboardControl : Control() {

    companion object {
        private const val A = 65
        private const val D = 68
        private const val S = 83
        private const val W = 87
        private const val LEFT = 37
        private const val RIGHT = 39
    }


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

}