if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Math_0 = Math;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var equals = Kotlin.equals;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  TankDriveRobot.prototype = Object.create(RobotBase.prototype);
  TankDriveRobot.prototype.constructor = TankDriveRobot;
  var period;
  var simulatorCanvas;
  function main$lambda(closure$simulatorCanvasContext, closure$robot, closure$controls) {
    return function () {
      clear(closure$simulatorCanvasContext);
      closure$robot.loop();
      closure$controls.loop();
      return Unit;
    };
  }
  function main() {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = simulatorCanvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    cartesian($receiver);
    var simulatorCanvasContext = $receiver;
    var settings = new Settings();
    var controls = new KeyboardControl();
    var robot = new TankDriveRobot(simulatorCanvasContext, controls, settings);
    window.setInterval(main$lambda(simulatorCanvasContext, robot, controls), 16);
  }
  function RobotBase(context, settings) {
    this.context_pi64qr$_0 = context;
    this.settings_tskujl$_0 = settings;
    this.pos = xy(0.0, 0.0);
    this.bearing = 0.0;
    this.draw_719uoy$_0 = RobotBase$draw$lambda(this);
  }
  Object.defineProperty(RobotBase.prototype, 'maxVelocityPerFrame', {
    get: function () {
      return this.settings_tskujl$_0.maxVelocity.invoke() * 16 / 1000;
    }
  });
  Object.defineProperty(RobotBase.prototype, 'draw', {
    get: function () {
      return this.draw_719uoy$_0;
    }
  });
  RobotBase.prototype.loop = function () {
    this.update();
    drawComponent(this.context_pi64qr$_0, this.draw, this.pos, this.bearing);
  };
  function RobotBase$draw$lambda(this$RobotBase) {
    return function ($receiver) {
      var halfWidth = this$RobotBase.settings_tskujl$_0.robotWidth.invoke() / 2;
      var halfLength = this$RobotBase.settings_tskujl$_0.robotLength.invoke() / 2;
      var corners = [xy(halfWidth, halfLength), xy(halfWidth, -halfLength), xy(-halfWidth, -halfLength), xy(-halfWidth, halfLength)];
      $receiver.lineWidth = 5.0;
      $receiver.strokeStyle = '#000000';
      strokeConnectedLines($receiver, corners.slice());
      $receiver.strokeStyle = '#0000ff';
      strokeLines($receiver, [to(corners[0], corners[3])]);
    };
  }
  RobotBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotBase',
    interfaces: [Component]
  };
  function TankDriveRobot(context, controls, settings) {
    RobotBase.call(this, context, settings);
    this.controls_0 = controls;
    this.settings_0 = settings;
  }
  TankDriveRobot.prototype.update = function () {
    var x = -this.controls_0.z;
    var y = this.controls_0.y;
    var v = (1 - Math_0.abs(x)) * y + y;
    var w = (1 - Math_0.abs(y)) * x + x;
    var l = (v - w) / 2 * this.maxVelocityPerFrame;
    var r = (v + w) / 2 * this.maxVelocityPerFrame;
    var s = (l + r) / 2;
    var theta = (l - r) / this.settings_0.robotWidth.invoke();
    var tmp$ = this.pos;
    var tmp$_0 = this.pos.x;
    var x_0 = this.bearing;
    tmp$.x = tmp$_0 + s * Math_0.sin(x_0);
    var tmp$_1 = this.pos;
    var tmp$_2 = this.pos.y;
    var x_1 = this.bearing;
    tmp$_1.y = tmp$_2 + s * Math_0.cos(x_1);
    this.bearing = this.bearing + theta;
  };
  TankDriveRobot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TankDriveRobot',
    interfaces: [RobotBase]
  };
  function KeyboardControl() {
    KeyboardControl$Companion_getInstance();
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.keys_0 = HashMap_init();
    document.addEventListener('keydown', KeyboardControl_init$lambda(this));
    document.addEventListener('keyup', KeyboardControl_init$lambda_0(this));
  }
  function KeyboardControl$Companion() {
    KeyboardControl$Companion_instance = this;
    this.A_0 = 65;
    this.D_0 = 68;
    this.S_0 = 83;
    this.W_0 = 87;
    this.LEFT_0 = 37;
    this.RIGHT_0 = 39;
  }
  KeyboardControl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KeyboardControl$Companion_instance = null;
  function KeyboardControl$Companion_getInstance() {
    if (KeyboardControl$Companion_instance === null) {
      new KeyboardControl$Companion();
    }
    return KeyboardControl$Companion_instance;
  }
  KeyboardControl.prototype.isPressed_0 = function ($receiver) {
    var tmp$;
    return (tmp$ = this.keys_0.get_11rb$($receiver)) != null ? tmp$ : false;
  };
  KeyboardControl.prototype.loop = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    if (this.isPressed_0(65))
      this.x -= 1.0;
    if (this.isPressed_0(68))
      this.x += 1.0;
    if (this.isPressed_0(83))
      this.y -= 1.0;
    if (this.isPressed_0(87))
      this.y += 1.0;
    if (this.isPressed_0(37))
      this.z -= 1.0;
    if (this.isPressed_0(39))
      this.z += 1.0;
  };
  KeyboardControl.prototype.toString = function () {
    return 'X: ' + this.x + ' | Y: ' + this.y + ' | Z: ' + this.z;
  };
  function KeyboardControl_init$lambda(this$KeyboardControl) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = this$KeyboardControl.keys_0;
      var key = (Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode;
      tmp$_0.put_xwzc9p$(key, true);
      return Unit;
    };
  }
  function KeyboardControl_init$lambda_0(this$KeyboardControl) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = this$KeyboardControl.keys_0;
      var key = (Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode;
      tmp$_0.put_xwzc9p$(key, false);
      return Unit;
    };
  }
  KeyboardControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyboardControl',
    interfaces: [Loopable]
  };
  function Loopable() {
  }
  Loopable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Loopable',
    interfaces: []
  };
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_lu1900$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function xy($receiver, that) {
    return new Point($receiver, that);
  }
  function strokeConnectedLines($receiver, points) {
    $receiver.beginPath();
    $receiver.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
      $receiver.lineTo(points[i].x, points[i].y);
    }
    $receiver.closePath();
    $receiver.stroke();
  }
  function strokeLines($receiver, points) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== points.length; ++tmp$) {
      var element = points[tmp$];
      $receiver.beginPath();
      $receiver.moveTo(element.first.x, element.first.y);
      $receiver.lineTo(element.second.x, element.second.y);
      $receiver.closePath();
      $receiver.stroke();
    }
  }
  function drawComponent($receiver, component, pos, bearing) {
    if (bearing === void 0)
      bearing = 0.0;
    $receiver.save();
    $receiver.translate(pos.x, pos.y);
    $receiver.rotate(-bearing);
    component($receiver);
    $receiver.restore();
  }
  function clear($receiver) {
    $receiver.save();
    $receiver.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
    $receiver.clearRect(0.0, 0.0, $receiver.canvas.width, $receiver.canvas.height);
    $receiver.restore();
  }
  function cartesian($receiver) {
    $receiver.translate($receiver.canvas.width / 2.0, $receiver.canvas.height / 2.0);
    $receiver.scale(1.0, -1.0);
  }
  function Component() {
  }
  Component.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Component',
    interfaces: [Loopable]
  };
  function RangeSettings(rangeInput, textInput, initialValue, min, max) {
    this.value = initialValue;
    rangeInput.min = min.toString();
    rangeInput.max = max.toString();
    rangeInput.value = initialValue.toString();
    rangeInput.value;
    rangeInput.addEventListener('input', RangeSettings_init$lambda$lambda(rangeInput, textInput, this));
    textInput.value = initialValue.toString();
    textInput.addEventListener('keydown', RangeSettings_init$lambda$lambda_0(textInput, rangeInput, this));
  }
  RangeSettings.prototype.invoke = function () {
    return this.value;
  };
  function RangeSettings_init$lambda$lambda(this$, closure$textInput, this$RangeSettings) {
    return function (it) {
      closure$textInput.value = this$.value;
      this$RangeSettings.value = toDouble(this$.value);
      return Unit;
    };
  }
  function RangeSettings_init$lambda$lambda_0(this$, closure$rangeInput, this$RangeSettings) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (equals((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).key, 'Enter')) {
        tmp$_1 = this$RangeSettings;
        try {
          var a = toDouble(this$.value);
          var b = toDouble(closure$rangeInput.max);
          var a_0 = Math_0.min(a, b);
          var b_0 = toDouble(closure$rangeInput.min);
          tmp$_0 = Math_0.max(a_0, b_0);
        }
         catch (e) {
          if (Kotlin.isType(e, NumberFormatException)) {
            tmp$_0 = toDouble(closure$rangeInput.value);
          }
           else
            throw e;
        }
        var $receiver = tmp$_0;
        var closure$rangeInput_0 = closure$rangeInput;
        var this$_0 = this$;
        closure$rangeInput_0.value = $receiver.toString();
        this$_0.value = $receiver.toString();
        tmp$_1.value = $receiver;
        this$.blur();
      }
      return Unit;
    };
  }
  RangeSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeSettings',
    interfaces: []
  };
  var maxVelocityRangeInput;
  var maxVelocityTextInput;
  var robotWidthRangeInput;
  var robotWidthTextInput;
  var robotLengthRangeInput;
  var robotLengthTextInput;
  function Settings() {
    this.maxVelocity = new RangeSettings(maxVelocityRangeInput, maxVelocityTextInput, 500.0, 0.0, 1000.0);
    this.robotWidth = new RangeSettings(robotWidthRangeInput, robotWidthTextInput, 50.0, 10.0, 200.0);
    this.robotLength = new RangeSettings(robotLengthRangeInput, robotLengthTextInput, 50.0, 10.0, 200.0);
  }
  Settings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Settings',
    interfaces: []
  };
  Object.defineProperty(_, 'period', {
    get: function () {
      return period;
    }
  });
  Object.defineProperty(_, 'simulatorCanvas', {
    get: function () {
      return simulatorCanvas;
    }
  });
  _.main = main;
  var package$robots = _.robots || (_.robots = {});
  package$robots.RobotBase = RobotBase;
  package$robots.TankDriveRobot = TankDriveRobot;
  Object.defineProperty(KeyboardControl, 'Companion', {
    get: KeyboardControl$Companion_getInstance
  });
  var package$util = _.util || (_.util = {});
  package$util.KeyboardControl = KeyboardControl;
  package$util.Loopable = Loopable;
  package$util.Point = Point;
  package$util.xy_38ydlf$ = xy;
  var package$canvas = package$util.canvas || (package$util.canvas = {});
  package$canvas.strokeConnectedLines_ef5b96$ = strokeConnectedLines;
  package$canvas.strokeLines_8nyhx9$ = strokeLines;
  package$canvas.drawComponent_nt76e$ = drawComponent;
  package$canvas.clear_qtrdl1$ = clear;
  package$canvas.cartesian_qtrdl1$ = cartesian;
  package$canvas.Component = Component;
  var package$settings = package$util.settings || (package$util.settings = {});
  package$settings.RangeSettings = RangeSettings;
  Object.defineProperty(package$settings, 'maxVelocityRangeInput', {
    get: function () {
      return maxVelocityRangeInput;
    }
  });
  Object.defineProperty(package$settings, 'maxVelocityTextInput', {
    get: function () {
      return maxVelocityTextInput;
    }
  });
  Object.defineProperty(package$settings, 'robotWidthRangeInput', {
    get: function () {
      return robotWidthRangeInput;
    }
  });
  Object.defineProperty(package$settings, 'robotWidthTextInput', {
    get: function () {
      return robotWidthTextInput;
    }
  });
  Object.defineProperty(package$settings, 'robotLengthRangeInput', {
    get: function () {
      return robotLengthRangeInput;
    }
  });
  Object.defineProperty(package$settings, 'robotLengthTextInput', {
    get: function () {
      return robotLengthTextInput;
    }
  });
  package$settings.Settings = Settings;
  period = 16;
  var tmp$;
  simulatorCanvas = Kotlin.isType(tmp$ = document.getElementById('simulatorCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
  var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
  maxVelocityRangeInput = Kotlin.isType(tmp$_0 = document.getElementById('maxVelocityRangeInput'), HTMLInputElement) ? tmp$_0 : throwCCE();
  maxVelocityTextInput = Kotlin.isType(tmp$_1 = document.getElementById('maxVelocityTextInput'), HTMLInputElement) ? tmp$_1 : throwCCE();
  robotWidthRangeInput = Kotlin.isType(tmp$_2 = document.getElementById('robotWidthRangeInput'), HTMLInputElement) ? tmp$_2 : throwCCE();
  robotWidthTextInput = Kotlin.isType(tmp$_3 = document.getElementById('robotWidthTextInput'), HTMLInputElement) ? tmp$_3 : throwCCE();
  robotLengthRangeInput = Kotlin.isType(tmp$_4 = document.getElementById('robotLengthRangeInput'), HTMLInputElement) ? tmp$_4 : throwCCE();
  robotLengthTextInput = Kotlin.isType(tmp$_5 = document.getElementById('robotLengthTextInput'), HTMLInputElement) ? tmp$_5 : throwCCE();
  main();
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);
