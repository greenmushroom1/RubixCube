# RubixCube
2d rubix cube representation made in javascript with p5 library, and a related solving algorithm.

The cube and it's API's are outlined in sketch, cube, side, and square.

---API's---
Spin rotates the entire cube in the direction specified
spinRight()
spinLeft()
spinUp()
spinDown()

Face name rotates the specified face clockwise
front()
back()
left()
right()
up()
down()

Face name inverted rotates the specified face in a counter clockwise direction
frontInverted()
backInverted()
leftInverted()
rightInverted()
upInverted()
downInverted()

Automated solving process is found in the solve file. It utlizes these API's, and algorithms built from
these API's in the algorithms file
