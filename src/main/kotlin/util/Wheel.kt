package util

data class Wheel(
    val relativeX: Double,
    val relativeY: Double,
    var vector: Vector = Vector(0.0, 0.0)
) {
    override fun toString() = "Wheel@($relativeX, $relativeY) : $vector"
}