package settings

import kotlinx.html.InputType
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.input
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
 *
 * @param initialValue of the setting. Also the value set when reset.
 * @param min value
 * @param max value
 */
class RangeSetting(
    val initialValue: Double,
    val min: Double,
    val max: Double
) : Setting<Double>() {

    // Title case
    private lateinit var name: String
    private lateinit var camelCase: String

    override var value = initialValue

    override operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, Double> {

        camelCase = property.name
        name = property.name.capitalize().replace("[A-Z]".toRegex()) { " ${it.value}" }

        // Add elements to HTML
        document.body!!
            .getElementsByClassName("main")[0]!!
            .getElementsByClassName("settings")[0]!!
            .append {
                div { +name }
                input(type = InputType.range, classes = "rangeInput") { id = "${camelCase}Range" }
                input(classes = "textInput") { id = "${camelCase}Text" }
                input(type = InputType.button, classes = "buttonInput") { id = "${camelCase}Button" }
            }

        val rangeInput = document.getElementById("${camelCase}Range") as HTMLInputElement
        val textInput = document.getElementById("${camelCase}Text") as HTMLInputElement
        val buttonInput = document.getElementById("${camelCase}Button") as HTMLInputElement

        with(rangeInput) {
            // Initialize range slider
            this.min = this@RangeSetting.min.toString()
            this.max = this@RangeSetting.max.toString()
            value = initialValue.toString()
            // Call random variable to update min/max values
            value

            // When value is changed, update setting value and value of textInput
            addEventListener("input", {
                textInput.value = this.value
                this@RangeSetting.value = this.value.toDouble()
            })
        }

        with(textInput) {
            value = initialValue.toString()
            addEventListener("keydown", {
                // Update value only when enter is pressed
                if ((it as KeyboardEvent).key == "Enter") {
                    // Cap value in range of min..max
                    this@RangeSetting.value = try {
                        max(
                            min(
                                value.toDouble(),
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
                        value = newValue.toString()
                    }
                    // Get rid of focus
                    blur()
                }
            })
        }

        with(buttonInput) {
            value = "Reset"
            addEventListener("click", {
                // Reset all avlues
                this@RangeSetting.value = initialValue
                rangeInput.value = initialValue.toString()
                textInput.value = initialValue.toString()
            })
        }
        return super.provideDelegate(thisRef, property)
    }
}