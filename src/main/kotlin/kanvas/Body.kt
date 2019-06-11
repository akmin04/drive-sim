package kanvas

fun body(setup: Body.() -> Unit): Body = Body().apply(setup)

class Body : Group("body")