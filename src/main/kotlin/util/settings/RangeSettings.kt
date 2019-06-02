package util.settings

import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.KeyboardEvent
import kotlin.math.max
import kotlin.math.min

class RangeSettings(
    rangeInput: HTMLInputElement,
    textInput: HTMLInputElement,
    initialValue: Double,
    min: Double,
    max: Double
) {

    var value = initialValue

    operator fun invoke() = value

    init {
        with(rangeInput) {
            this.min = min.toString()
            this.max = max.toString()
            value = initialValue.toString()
            value
            addEventListener("input",
                {
                    textInput.value = this.value
                    this@RangeSettings.value = this.value.toDouble()
                })
        }
        with(textInput) {
            value = initialValue.toString()
            addEventListener("keydown",
                {
                    if ((it as KeyboardEvent).key == "Enter") {
                        this@RangeSettings.value = try {
                            max(
                                min(
                                    value.toDouble(),
                                    rangeInput.max.toDouble()
                                ),
                                rangeInput.min.toDouble()
                            )
                        } catch (e: NumberFormatException) {
                            rangeInput.value.toDouble()
                        }.also { newValue ->
                            rangeInput.value = newValue.toString()
                            value = newValue.toString()
                        }
                        blur()
                    }
                })
        }
    }

}