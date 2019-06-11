package kanvas

interface Element {
    val render: Context.() -> Unit
}