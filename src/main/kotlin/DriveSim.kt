import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import robots.TankDriveRobot
import util.settings.Settings
import util.KeyboardControl
import util.canvas.cartesian
import util.canvas.clear
import kotlin.browser.document
import kotlin.browser.window

const val period = 1000 / 60

val simulatorCanvas = document.getElementById("simulatorCanvas") as HTMLCanvasElement

fun main() {
    val simulatorCanvasContext = (simulatorCanvas.getContext("2d") as CanvasRenderingContext2D).apply {
        cartesian()
    }

    val settings = Settings()
    val controls = KeyboardControl()
    val robot = TankDriveRobot(simulatorCanvasContext, controls, settings)

    window.setInterval({
        simulatorCanvasContext.clear()
        robot.loop()
        controls.loop()
    }, period)
}