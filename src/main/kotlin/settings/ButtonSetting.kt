package settings

import kotlinx.html.*
import kotlinx.html.dom.append
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * Simple button "setting" that has no value (Unit)
 * Using `ButtonSetting` delegate automatically adds all HTML to the page
 *
 * @param onClick action when button is clicked
 */
class ButtonSetting(
    val onClick: () -> Unit
) : Setting<Unit>() {
    override var value = Unit

    override fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, Unit> {

        val camelCase = property.name
        val titleCase = property.name.capitalize().replace("[A-Z]".toRegex()) { " ${it.value}" }

        document.body!!
            .getElementsByClassName("main")[0]!!
            .getElementsByClassName("settings")[0]!!
            .append {
                br()
                input(type = InputType.button, classes = "buttonInput") { id = "${camelCase}Button" }
            }

        val buttonInput = document.getElementById("${camelCase}Button") as HTMLInputElement

        with(buttonInput) {
            value = titleCase
            addEventListener("click", {
                onClick()
            })
        }

        return super.provideDelegate(thisRef, property)
    }
}