package util

data class Point(
    var x: Double,
    var y: Double
) {

    fun rotate(about: Point, sin: Double, cos: Double): Point {
        val newX = x - about.x
        val newY = y - about.y

        return Point(
            newX * cos + newY * sin + about.x,
            -newX * sin + newY * cos + about.y
        )
    }
}