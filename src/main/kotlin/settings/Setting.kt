package settings

import org.w3c.dom.get
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * A setting that holds a value and is displayed in the settings div of the page.
 *
 * @param T the type of the value the setting holds.
 * @property onUpdate function to be called when the value is updated.
 */
abstract class Setting<T>(
        val onUpdate: (T) -> Unit
) {

    /**
     * The current value of the setting. Should be set with initial value.
     */
    abstract var value: T

    /**
     * The div on the page's HTML where settings should append their elements.
     */
    protected val settingsDiv = document.body!!
            .getElementsByClassName("main")[0]!!
            .getElementsByClassName("settings")[0]!!

    open operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, T> {
        return object : ReadOnlyProperty<Any?, T> {
            override fun getValue(thisRef: Any?, property: KProperty<*>) = value
        }
    }
}