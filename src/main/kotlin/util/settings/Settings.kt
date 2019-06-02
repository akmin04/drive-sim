package util.settings

import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

val maxVelocityRangeInput = document.getElementById("maxVelocityRangeInput") as HTMLInputElement
val maxVelocityTextInput = document.getElementById("maxVelocityTextInput") as HTMLInputElement
val robotWidthRangeInput = document.getElementById("robotWidthRangeInput") as HTMLInputElement
val robotWidthTextInput = document.getElementById("robotWidthTextInput") as HTMLInputElement
val robotLengthRangeInput = document.getElementById("robotLengthRangeInput") as HTMLInputElement
val robotLengthTextInput = document.getElementById("robotLengthTextInput") as HTMLInputElement

class Settings {

    val maxVelocity = RangeSettings(
        maxVelocityRangeInput,
        maxVelocityTextInput,
        initialValue = 500.0,
        min = 0.0,
        max = 1000.0
    )

    val robotWidth = RangeSettings(
        robotWidthRangeInput,
        robotWidthTextInput,
        initialValue = 50.0,
        min = 10.0,
        max = 200.0
    )

    val robotLength = RangeSettings(
        robotLengthRangeInput,
        robotLengthTextInput,
        initialValue = 50.0,
        min = 10.0,
        max = 200.0
    )

}