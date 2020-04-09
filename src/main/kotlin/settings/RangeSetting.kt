package settings

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.math.max
import kotlin.math.min
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * Any setting that is a `Double` that requires a slider, text input, and reset button.
 * Using `RangeSetting` delegate automatically adds all HTML to the page.
 *
 * @property initialValue of the setting. Also the value set when reset.
 * @property min value of the setting.
 * @property max value of the setting.
 */
class RangeSetting(
        val initialValue: Double,
        val min: Double,
        val max: Double,
        onUpdate: (Double) -> Unit = {}
) : Setting<Double>(onUpdate) {

    override var value = initialValue

    override operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, Double> {

        val camelCase = property.name
        val titleCase = property.name.capitalize().replace("[A-Z]".toRegex()) { " ${it.value}" }

        // Add elements to HTML
        settingsDiv.append {
            form {
                name = camelCase
                div { +titleCase }
                input {
                    type = InputType.range
                    classes += "rangeInput"
                    id = "${camelCase}Range"
                    min = this@RangeSetting.min.toString()
                    max = this@RangeSetting.max.toString()
                    value = initialValue.toString()
                }
                input {
                    classes += "textInput"
                    id = "${camelCase}Text"
                    value = initialValue.toString()
                }
                input {
                    type = InputType.button
                    classes += "buttonInput"
                    id = "${camelCase}Button"
                    value = "Reset"
                }
            }
        }

        val rangeInput = document.getElementById("${camelCase}Range") as HTMLInputElement
        val textInput = document.getElementById("${camelCase}Text") as HTMLInputElement
        val buttonInput = document.getElementById("${camelCase}Button") as HTMLInputElement

        rangeInput.addEventListener("input", {
            textInput.value = rangeInput.value
            this@RangeSetting.value = rangeInput.value.toDouble()
            onUpdate(value)
        })

        textInput.addEventListener("keydown", {
            // Update value only when enter is pressed
            if ((it as KeyboardEvent).key == "Enter") {
                // Cap value in range of min..max
                this@RangeSetting.value = try {
                    max(
                            min(
                                    textInput.value.toDouble(),
                                    rangeInput.max.toDouble()
                            ),
                            rangeInput.min.toDouble()
                    )
                }
                // Don't update value if new value contains non-numbers
                catch (e: NumberFormatException) {
                    rangeInput.value.toDouble()
                }.also { newValue ->
                    // Update range input value and setting value
                    rangeInput.value = newValue.toString()
                    textInput.value = newValue.toString()
                    onUpdate(value)
                }
                // Get rid of focus
                textInput.blur()
            }
        })

        buttonInput.addEventListener("click", {
            // Reset all values
            this@RangeSetting.value = initialValue
            rangeInput.value = initialValue.toString()
            textInput.value = initialValue.toString()
            onUpdate(value)
        })
        return super.provideDelegate(thisRef, property)
    }

    companion object {

        /**
         * Reset the value of a range setting
         *
         * @param property reference to a range setting
         */
        fun reset(property: KProperty<*>) {
            val camelCase = property.name
            val buttonInput = document.getElementById("${camelCase}Button") as HTMLInputElement
            buttonInput.click()
        }
    }
}