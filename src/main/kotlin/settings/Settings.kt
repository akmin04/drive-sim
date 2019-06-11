package settings

class Settings {

    val maxVelocity by RangeSetting(
        initialValue = 500.0,
        min = 0.0,
        max = 1000.0
    )

    val robotWidth by RangeSetting(
        initialValue = 50.0,
        min = 10.0,
        max = 200.0
    )

    val robotLength by RangeSetting(
        initialValue = 50.0,
        min = 10.0,
        max = 200.0
    )

}