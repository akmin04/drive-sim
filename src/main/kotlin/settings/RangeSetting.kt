package settings

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.math.max
import kotlin.math.min
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * Any setting that is a `Double` that requires a slider, text input, and reset button
 * Using `RangeSetting` delegate automatically adds all HTML to the page
 *
 * @param initialValue of the setting. Also the value set when reset.
 * @param min value
 * @param max value
 * @param onUpdate function to be called when the value is updated
 */
class RangeSetting(
    val initialValue: Double,
    val min: Double,
    val max: Double,
    onUpdate: () -> Unit = {}
) : Setting<Double>(onUpdate) {

    override var value = initialValue

    override operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, Double> {

        val camelCase = property.name
        val titleCase = property.name.capitalize().replace("[A-Z]".toRegex()) { " ${it.value}" }

        // Add elements to HTML
        document.body!!
            .getElementsByClassName("main")[0]!!
            .getElementsByClassName("settings")[0]!!
            .append {
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
            onUpdate()
            textInput.value = rangeInput.value
            this@RangeSetting.value = rangeInput.value.toDouble()
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
                    onUpdate()
                    rangeInput.value = newValue.toString()
                    textInput.value = newValue.toString()
                }
                // Get rid of focus
                textInput.blur()
            }
        })

        buttonInput.addEventListener("click", {
            // Reset all values
            onUpdate()
            this@RangeSetting.value = initialValue
            rangeInput.value = initialValue.toString()
            textInput.value = initialValue.toString()
        })
        return super.provideDelegate(thisRef, property)
    }

    companion object {
        fun reset(property: KProperty<*>) {
            val camelCase = property.name
            val buttonInput = document.getElementById("${camelCase}Button") as HTMLInputElement
            buttonInput.click()
        }
    }
}