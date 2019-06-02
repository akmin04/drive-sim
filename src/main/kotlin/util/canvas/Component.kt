package util.canvas

import org.w3c.dom.CanvasRenderingContext2D
import util.Loopable

interface Component : Loopable {
    /**
     * Instructions on how to draw component on the canvas
     */
    val draw: CanvasRenderingContext2D.() -> Unit
}