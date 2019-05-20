import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document

object KeyManager {
    private val keys = hashMapOf<Int, Boolean>()

    /**
     * Shortcut to check if a key in KeyMap is pressed
     *
     * @param key the key to check
     * @return if the key is pressed
     */
    operator fun get(key: KeyMap) = keys[key.raw] ?: false

    init {
        document.addEventListener("keydown", {
            keys[(it as KeyboardEvent).keyCode] = true
        })

        document.addEventListener("keyup", {
            keys[(it as KeyboardEvent).keyCode] = false
        })
    }

}

enum class KeyMap(val raw: Int) {
    W(87), A(83), S(65), D(68),
    UP(38), DOWN(40), LEFT(37), RIGHT(39)
}