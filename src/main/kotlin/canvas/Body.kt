package canvas

fun body(setup: Body.() -> Unit): Body = Body().apply(setup)

class Body : Tag()