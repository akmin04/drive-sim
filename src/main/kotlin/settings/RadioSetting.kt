package settings

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * Any setting that requires radio buttons (Multiple options; only one chosen at a time).
 * Using `RadioSetting` delegate automatically adds all HTML to the page.
 *
 * @property options a list of options that the user can select.
 */
class RadioSetting(
        private val options: Array<String>,
        onUpdate: (String) -> Unit = {}
) : Setting<String>(onUpdate) {

    override var value = options[0]

    override operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, String> {

        val camelCase = property.name
        val titleCase = property.name.capitalize().replace("[A-Z]".toRegex()) { " ${it.value}" }

        // Add elements to HTML
        settingsDiv.append {
            form {
                name = camelCase
                div { +titleCase }
                options.forEachIndexed { i, option ->
                    div {
                        input {
                            type = InputType.radio
                            classes += "radioInput"
                            id = "$camelCase${i}Radio"
                            name = camelCase
                            value = option
                        }
                        +option
                    }
                }
            }
        }

        val radioInputs = document.forms[camelCase] as HTMLFormElement
        (radioInputs[0] as HTMLInputElement).checked = true
        for (i in 0 until radioInputs.length) {
            val radio = radioInputs[i] as HTMLInputElement
            radio.addEventListener("click", {
                value = radio.value
                onUpdate(value)
            })
        }

        return super.provideDelegate(thisRef, property)
    }
}