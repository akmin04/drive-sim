import canvas.cartesian
import canvas.clear
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import robots.TankRobot
import util.KeyboardControl
import kotlin.browser.document
import kotlin.browser.window

const val period = 1000 / 60

val robot = TankRobot()
val controls = KeyboardControl()
val simulator = ((document.getElementById("simulatorCanvas") as HTMLCanvasElement)
    .getContext("2d") as CanvasRenderingContext2D)
    .apply { cartesian() }


fun main() {
    window.setInterval({
        simulator.clear()
        robot.loop()
        controls.loop()
    }, period)
}