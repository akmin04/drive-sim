import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import robots.TankDriveRobot
import util.Keys
import util.clear
import kotlin.browser.document
import kotlin.browser.window

val canvas = document.getElementById("simulator") as HTMLCanvasElement
val simulator = canvas.getContext("2d") as CanvasRenderingContext2D

const val period = 1000 / 60

val canvasMaxX = canvas.width.toDouble() / 2
val canvasMaxY = canvas.height.toDouble() / 2

fun main() {
    simulator.translate(canvasMaxX, canvasMaxY)
    simulator.scale(1.0, -1.0)

    window.setInterval({
        simulator.clear()
        TankDriveRobot.loop()
        Keys.loop()
    }, period)
}