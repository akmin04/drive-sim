import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import robots.TankDriveRobot
import util.KeyboardControl
import util.cartesian
import util.clear
import kotlin.browser.document
import kotlin.browser.window

const val period = 1000 / 60

val robot = TankDriveRobot()
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