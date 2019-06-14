package settings

import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

abstract class Setting<T>(
    val onUpdate: (T) -> Unit
) {
    abstract var value: T

    open operator fun provideDelegate(thisRef: Any?, property: KProperty<*>): ReadOnlyProperty<Any?, T> {
        return object : ReadOnlyProperty<Any?, T> {
            override fun getValue(thisRef: Any?, property: KProperty<*>) = value
        }
    }
}