package canvas

data class Color(
        val r: Int,
        val g: Int,
        val b: Int
) {

    private fun base16(num: Int, digits: Int): String {
        var a = num.toString(16)
        while (a.length < digits) a = "0$a"
        return a
    }

    override fun toString(): String = "#${base16(r, 2)}${base16(g, 2)}${base16(b, 2)}"

    @Suppress("unused")
    companion object {
        val black = Color(0, 0, 0)
        val white = Color(255, 255, 255)
        val red = Color(255, 0, 0)
        val green = Color(0, 255, 0)
        val blue = Color(0, 0, 255)
    }
}