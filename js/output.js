if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Math_0 = Math;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  TankDriveRobot.prototype = Object.create(RobotBase.prototype);
  TankDriveRobot.prototype.constructor = TankDriveRobot;
  var canvas;
  var simulator;
  var period;
  var canvasMaxX;
  var canvasMaxY;
  function main$lambda() {
    clear(simulator);
    TankDriveRobot_getInstance().loop();
    Keys_getInstance().loop();
    return Unit;
  }
  function main() {
    simulator.translate(canvasMaxX, canvasMaxY);
    simulator.scale(1.0, -1.0);
    window.setInterval(main$lambda, 16);
  }
  function RobotBase(size, maxVelocity) {
    this.size = size;
    this.maxVelocity = maxVelocity * 16 / 1000;
    this.pos = new Point(0.0, 0.0);
    this.bearing = 0.0;
  }
  RobotBase.prototype.loop = function () {
    this.update();
    var x = this.bearing;
    var sin = Math_0.sin(x);
    var x_0 = this.bearing;
    var cos = Math_0.cos(x_0);
    var corners = [(new Point(this.pos.x + this.size / 2, this.pos.y + this.size / 2)).rotate_6utxgo$(this.pos, sin, cos), (new Point(this.pos.x + this.size / 2, this.pos.y - this.size / 2)).rotate_6utxgo$(this.pos, sin, cos), (new Point(this.pos.x - this.size / 2, this.pos.y - this.size / 2)).rotate_6utxgo$(this.pos, sin, cos), (new Point(this.pos.x - this.size / 2, this.pos.y + this.size / 2)).rotate_6utxgo$(this.pos, sin, cos)];
    simulator.lineWidth = 5.0;
    simulator.strokeStyle = '#000000';
    strokePolygon(simulator, corners.slice());
    simulator.strokeStyle = '#0000ff';
    strokeLine(simulator, corners[0], corners[3]);
  };
  RobotBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotBase',
    interfaces: [Loopable]
  };
  function TankDriveRobot() {
    TankDriveRobot_instance = this;
    RobotBase.call(this, 50.0, 500.0);
  }
  TankDriveRobot.prototype.update = function () {
    var x = -Keys_getInstance().z;
    var y = Keys_getInstance().y;
    var v = (1 - Math_0.abs(x)) * y + y;
    var w = (1 - Math_0.abs(y)) * x + x;
    var l = (v - w) / 2 * this.maxVelocity;
    var r = (v + w) / 2 * this.maxVelocity;
    var s = (l + r) / 2;
    var theta = (l - r) / this.size;
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
    kind: Kind_OBJECT,
    simpleName: 'TankDriveRobot',
    interfaces: [RobotBase]
  };
  var TankDriveRobot_instance = null;
  function TankDriveRobot_getInstance() {
    if (TankDriveRobot_instance === null) {
      new TankDriveRobot();
    }
    return TankDriveRobot_instance;
  }
  function strokePolygon($receiver, points) {
    if (points.length < 3) {
      println('Tried to draw polygon with less than 3 points');
      return;
    }
    $receiver.beginPath();
    $receiver.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
      $receiver.lineTo(points[i].x, points[i].y);
    }
    $receiver.closePath();
    $receiver.stroke();
  }
  function strokeLine($receiver, from, to) {
    $receiver.beginPath();
    $receiver.moveTo(from.x, from.y);
    $receiver.lineTo(to.x, to.y);
    $receiver.closePath();
    $receiver.stroke();
  }
  function clear($receiver) {
    $receiver.save();
    $receiver.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
    $receiver.clearRect(0.0, 0.0, $receiver.canvas.width, $receiver.canvas.height);
    $receiver.restore();
  }
  function Keys() {
    Keys_instance = this;
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.A_0 = 65;
    this.D_0 = 68;
    this.S_0 = 83;
    this.W_0 = 87;
    this.LEFT_0 = 37;
    this.RIGHT_0 = 39;
    this.keys_0 = HashMap_init();
    document.addEventListener('keydown', Keys_init$lambda(this));
    document.addEventListener('keyup', Keys_init$lambda_0(this));
  }
  Keys.prototype.isPressed_0 = function ($receiver) {
    var tmp$;
    return (tmp$ = this.keys_0.get_11rb$($receiver)) != null ? tmp$ : false;
  };
  Keys.prototype.loop = function () {
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
  Keys.prototype.toString = function () {
    return 'X: ' + this.x + ' | Y: ' + this.y + ' | Z: ' + this.z;
  };
  function Keys_init$lambda(this$Keys) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = this$Keys.keys_0;
      var key = (Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode;
      tmp$_0.put_xwzc9p$(key, true);
      return Unit;
    };
  }
  function Keys_init$lambda_0(this$Keys) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = this$Keys.keys_0;
      var key = (Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode;
      tmp$_0.put_xwzc9p$(key, false);
      return Unit;
    };
  }
  Keys.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Keys',
    interfaces: [Loopable]
  };
  var Keys_instance = null;
  function Keys_getInstance() {
    if (Keys_instance === null) {
      new Keys();
    }
    return Keys_instance;
  }
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
  Point.prototype.rotate_6utxgo$ = function (about, sin, cos) {
    var newX = this.x - about.x;
    var newY = this.y - about.y;
    return new Point(newX * cos + newY * sin + about.x, -newX * sin + newY * cos + about.y);
  };
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
  Object.defineProperty(_, 'canvas', {
    get: function () {
      return canvas;
    }
  });
  Object.defineProperty(_, 'simulator', {
    get: function () {
      return simulator;
    }
  });
  Object.defineProperty(_, 'period', {
    get: function () {
      return period;
    }
  });
  Object.defineProperty(_, 'canvasMaxX', {
    get: function () {
      return canvasMaxX;
    }
  });
  Object.defineProperty(_, 'canvasMaxY', {
    get: function () {
      return canvasMaxY;
    }
  });
  _.main = main;
  var package$robots = _.robots || (_.robots = {});
  package$robots.RobotBase = RobotBase;
  Object.defineProperty(package$robots, 'TankDriveRobot', {
    get: TankDriveRobot_getInstance
  });
  var package$util = _.util || (_.util = {});
  package$util.strokePolygon_ef5b96$ = strokePolygon;
  package$util.strokeLine_z11l89$ = strokeLine;
  package$util.clear_qtrdl1$ = clear;
  Object.defineProperty(package$util, 'Keys', {
    get: Keys_getInstance
  });
  package$util.Loopable = Loopable;
  package$util.Point = Point;
  var tmp$, tmp$_0;
  canvas = Kotlin.isType(tmp$ = document.getElementById('simulator'), HTMLCanvasElement) ? tmp$ : throwCCE();
  simulator = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
  period = 16;
  canvasMaxX = canvas.width / 2;
  canvasMaxY = canvas.height / 2;
  main();
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);
