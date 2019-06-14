package settings

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * Any setting that requires radio buttons (Multiple options; only one chosen at a time)
 * Using `RadioSetting` delegate automatically adds all HTML to the page
 *
 * @param onUpdate function to be called when the value is updated
 */
class RadioSetting(
    val options: Array<String>,
    onUpdate: () -> Unit = {}
) : Setting<String>(onUpdate) {
    override var value = options[0]

    override operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, String> {

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
                onUpdate()
                value = radio.value
                println(value)
            })
        }

        return super.provideDelegate(thisRef, property)
    }
}