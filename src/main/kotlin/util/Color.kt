package util

data class Color(
    val r: Int,
    val g: Int,
    val b: Int
) {
    override fun toString(): String = "#${r.toString(16)}${g.toString(16)}${b.toString(16)}"

    companion object {
        val black = Color(0, 0, 0)
        val white = Color(255, 255, 255)
        val red = Color(255, 0, 0)
        val green = Color(0, 255, 0)
        val blue = Color(0, 0, 255)
    }
}