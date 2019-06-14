package canvas.elements

import canvas.Context

interface Element {
    val render: Context.() -> Unit
}