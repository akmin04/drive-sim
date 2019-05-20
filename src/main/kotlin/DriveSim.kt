import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window

val canvas = document.getElementById("simulator") as HTMLCanvasElement
val ctx = canvas.getContext("2d") as CanvasRenderingContext2D

val canvasWidth = canvas.width.toDouble()
val canvasHeight = canvas.height.toDouble()

fun main() {
    val robot = SimpleRobot(
       maxVelocity = 5.0
    )

    // Translate canvas so that (0.0, 0.0) is the center
    ctx.translate(canvasWidth / 2.0, canvasHeight / 2.0)
    // Reflect across x-axis
    ctx.scale(1.0, -1.0)

    window.setInterval({
        // Clear canvas
        ctx.save()
        ctx.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
        ctx.clearRect(0.0, 0.0, canvasWidth, canvasHeight)
        ctx.restore()

        robot.update()
    }, 1000 / 60)
}