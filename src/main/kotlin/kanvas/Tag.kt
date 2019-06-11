package kanvas

abstract class Tag : Element {
    private val children = arrayListOf<Element>()

    protected fun <T : Element> initTag(tag: T, setup: T.() -> Unit = { }): T {
        tag.setup()
        children.add(tag)
        return tag
    }

    override val render = fun Context.() {
        for (c in children) {
            c.render(this)
        }
    }
}
