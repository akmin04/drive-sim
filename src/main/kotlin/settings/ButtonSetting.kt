package settings

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * Simple button setting that has no value (Unit).
 * Using `ButtonSetting` delegate automatically adds all HTML to the page.
 */
class ButtonSetting(
        onUpdate: (Unit) -> Unit
) : Setting<Unit>(onUpdate) {
    override var value = Unit

    override fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, Unit> {

        val camelCase = property.name
        val titleCase = property.name.capitalize().replace("[A-Z]".toRegex()) { " ${it.value}" }

        // Add elements to HTML
        settingsDiv.append {
            form {
                name = camelCase
                br()
                input {
                    type = InputType.button
                    classes += "buttonInput"
                    id = "${camelCase}Button"
                    value = titleCase
                }
            }
        }

        val buttonInput = document.getElementById("${camelCase}Button") as HTMLInputElement

        with(buttonInput) {
            addEventListener("click", {
                onUpdate(Unit)
            })
        }

        return super.provideDelegate(thisRef, property)
    }
}