if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Math_0 = Math;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  KeyMap.prototype = Object.create(Enum.prototype);
  KeyMap.prototype.constructor = KeyMap;
  SimpleRobot.prototype = Object.create(RobotBase.prototype);
  SimpleRobot.prototype.constructor = SimpleRobot;
  var canvas;
  var ctx;
  var canvasWidth;
  var canvasHeight;
  function main$lambda(closure$robot) {
    return function () {
      ctx.save();
      ctx.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
      ctx.clearRect(0.0, 0.0, canvasWidth, canvasHeight);
      ctx.restore();
      closure$robot.update();
      return Unit;
    };
  }
  function main() {
    var robot = new SimpleRobot(void 0, void 0, 5.0);
    ctx.translate(canvasWidth / 2.0, canvasHeight / 2.0);
    ctx.scale(1.0, -1.0);
    window.setInterval(main$lambda(robot), 16);
  }
  function KeyManager() {
    KeyManager_instance = this;
    this.keys_0 = HashMap_init();
    document.addEventListener('keydown', KeyManager_init$lambda(this));
    document.addEventListener('keyup', KeyManager_init$lambda_0(this));
  }
  KeyManager.prototype.get_xx09k3$ = function (key) {
    var tmp$;
    return (tmp$ = this.keys_0.get_11rb$(key.raw)) != null ? tmp$ : false;
  };
  function KeyManager_init$lambda(this$KeyManager) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = this$KeyManager.keys_0;
      var key = (Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode;
      tmp$_0.put_xwzc9p$(key, true);
      return Unit;
    };
  }
  function KeyManager_init$lambda_0(this$KeyManager) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = this$KeyManager.keys_0;
      var key = (Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode;
      tmp$_0.put_xwzc9p$(key, false);
      return Unit;
    };
  }
  KeyManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KeyManager',
    interfaces: []
  };
  var KeyManager_instance = null;
  function KeyManager_getInstance() {
    if (KeyManager_instance === null) {
      new KeyManager();
    }
    return KeyManager_instance;
  }
  function KeyMap(name, ordinal, raw) {
    Enum.call(this);
    this.raw = raw;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyMap_initFields() {
    KeyMap_initFields = function () {
    };
    KeyMap$W_instance = new KeyMap('W', 0, 87);
    KeyMap$A_instance = new KeyMap('A', 1, 83);
    KeyMap$S_instance = new KeyMap('S', 2, 65);
    KeyMap$D_instance = new KeyMap('D', 3, 68);
    KeyMap$UP_instance = new KeyMap('UP', 4, 38);
    KeyMap$DOWN_instance = new KeyMap('DOWN', 5, 40);
    KeyMap$LEFT_instance = new KeyMap('LEFT', 6, 37);
    KeyMap$RIGHT_instance = new KeyMap('RIGHT', 7, 39);
  }
  var KeyMap$W_instance;
  function KeyMap$W_getInstance() {
    KeyMap_initFields();
    return KeyMap$W_instance;
  }
  var KeyMap$A_instance;
  function KeyMap$A_getInstance() {
    KeyMap_initFields();
    return KeyMap$A_instance;
  }
  var KeyMap$S_instance;
  function KeyMap$S_getInstance() {
    KeyMap_initFields();
    return KeyMap$S_instance;
  }
  var KeyMap$D_instance;
  function KeyMap$D_getInstance() {
    KeyMap_initFields();
    return KeyMap$D_instance;
  }
  var KeyMap$UP_instance;
  function KeyMap$UP_getInstance() {
    KeyMap_initFields();
    return KeyMap$UP_instance;
  }
  var KeyMap$DOWN_instance;
  function KeyMap$DOWN_getInstance() {
    KeyMap_initFields();
    return KeyMap$DOWN_instance;
  }
  var KeyMap$LEFT_instance;
  function KeyMap$LEFT_getInstance() {
    KeyMap_initFields();
    return KeyMap$LEFT_instance;
  }
  var KeyMap$RIGHT_instance;
  function KeyMap$RIGHT_getInstance() {
    KeyMap_initFields();
    return KeyMap$RIGHT_instance;
  }
  KeyMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyMap',
    interfaces: [Enum]
  };
  function KeyMap$values() {
    return [KeyMap$W_getInstance(), KeyMap$A_getInstance(), KeyMap$S_getInstance(), KeyMap$D_getInstance(), KeyMap$UP_getInstance(), KeyMap$DOWN_getInstance(), KeyMap$LEFT_getInstance(), KeyMap$RIGHT_getInstance()];
  }
  KeyMap.values = KeyMap$values;
  function KeyMap$valueOf(name) {
    switch (name) {
      case 'W':
        return KeyMap$W_getInstance();
      case 'A':
        return KeyMap$A_getInstance();
      case 'S':
        return KeyMap$S_getInstance();
      case 'D':
        return KeyMap$D_getInstance();
      case 'UP':
        return KeyMap$UP_getInstance();
      case 'DOWN':
        return KeyMap$DOWN_getInstance();
      case 'LEFT':
        return KeyMap$LEFT_getInstance();
      case 'RIGHT':
        return KeyMap$RIGHT_getInstance();
      default:throwISE('No enum constant KeyMap.' + name);
    }
  }
  KeyMap.valueOf_61zpoe$ = KeyMap$valueOf;
  function RobotBase(width, height, maxVelocity, pos, angle) {
    this.width = width;
    this.height = height;
    this.maxVelocity = maxVelocity;
    this.pos = pos;
    this.angle = angle;
  }
  Object.defineProperty(RobotBase.prototype, 'topLeft', {
    get: function () {
      return (new Point(this.pos.x - this.width / 2, this.pos.y + this.height / 2)).rotate_mcmwxq$(this.angle, this.pos);
    }
  });
  Object.defineProperty(RobotBase.prototype, 'topRight', {
    get: function () {
      return (new Point(this.pos.x + this.width / 2, this.pos.y + this.height / 2)).rotate_mcmwxq$(this.angle, this.pos);
    }
  });
  Object.defineProperty(RobotBase.prototype, 'bottomLeft', {
    get: function () {
      return (new Point(this.pos.x - this.width / 2, this.pos.y - this.height / 2)).rotate_mcmwxq$(this.angle, this.pos);
    }
  });
  Object.defineProperty(RobotBase.prototype, 'bottomRight', {
    get: function () {
      return (new Point(this.pos.x + this.width / 2, this.pos.y - this.height / 2)).rotate_mcmwxq$(this.angle, this.pos);
    }
  });
  RobotBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotBase',
    interfaces: []
  };
  function SimpleRobot(width, height, maxVelocity, pos, angle) {
    if (width === void 0)
      width = 50.0;
    if (height === void 0)
      height = 60.0;
    if (maxVelocity === void 0)
      maxVelocity = 10.0;
    if (pos === void 0)
      pos = new Point(0.0, 0.0);
    if (angle === void 0)
      angle = 0.0;
    RobotBase.call(this, width, height, maxVelocity, pos, angle);
    this.maxAngularVelocity_0 = 2 * maxVelocity / width;
  }
  SimpleRobot.prototype.update = function () {
    if (KeyManager_getInstance().get_xx09k3$(KeyMap$W_getInstance())) {
      this.pos.y = this.pos.y + this.maxVelocity;
    }
    if (KeyManager_getInstance().get_xx09k3$(KeyMap$A_getInstance())) {
      this.pos.y = this.pos.y - this.maxVelocity;
    }
    if (KeyManager_getInstance().get_xx09k3$(KeyMap$S_getInstance())) {
      this.pos.x = this.pos.x - this.maxVelocity;
    }
    if (KeyManager_getInstance().get_xx09k3$(KeyMap$D_getInstance())) {
      this.pos.x = this.pos.x + this.maxVelocity;
    }
    if (KeyManager_getInstance().get_xx09k3$(KeyMap$LEFT_getInstance())) {
      this.angle = this.angle - this.maxAngularVelocity_0;
    }
    if (KeyManager_getInstance().get_xx09k3$(KeyMap$RIGHT_getInstance())) {
      this.angle = this.angle + this.maxAngularVelocity_0;
    }
    var tmp$ = this.pos;
    var a = (-canvasWidth + this.width) / 2;
    var b = this.pos.x;
    tmp$.x = Math_0.max(a, b);
    var tmp$_0 = this.pos;
    var a_0 = (canvasWidth - this.width) / 2;
    var b_0 = this.pos.x;
    tmp$_0.x = Math_0.min(a_0, b_0);
    var tmp$_1 = this.pos;
    var a_1 = (-canvasHeight + this.height) / 2;
    var b_1 = this.pos.y;
    tmp$_1.y = Math_0.max(a_1, b_1);
    var tmp$_2 = this.pos;
    var a_2 = (canvasHeight - this.height) / 2;
    var b_2 = this.pos.y;
    tmp$_2.y = Math_0.min(a_2, b_2);
    fillPolygon(ctx, [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft]);
  };
  SimpleRobot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleRobot',
    interfaces: [RobotBase]
  };
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.rotate_mcmwxq$ = function (theta, about) {
    var cos = Math_0.cos(theta);
    var sin = Math_0.sin(theta);
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
  function fillPolygon($receiver, points) {
    if (points.length < 3) {
      println('Tried to draw polygon with less than 3 points');
      return;
    }
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.fill();
  }
  Object.defineProperty(_, 'canvas', {
    get: function () {
      return canvas;
    }
  });
  Object.defineProperty(_, 'ctx', {
    get: function () {
      return ctx;
    }
  });
  Object.defineProperty(_, 'canvasWidth', {
    get: function () {
      return canvasWidth;
    }
  });
  Object.defineProperty(_, 'canvasHeight', {
    get: function () {
      return canvasHeight;
    }
  });
  _.main = main;
  Object.defineProperty(_, 'KeyManager', {
    get: KeyManager_getInstance
  });
  Object.defineProperty(KeyMap, 'W', {
    get: KeyMap$W_getInstance
  });
  Object.defineProperty(KeyMap, 'A', {
    get: KeyMap$A_getInstance
  });
  Object.defineProperty(KeyMap, 'S', {
    get: KeyMap$S_getInstance
  });
  Object.defineProperty(KeyMap, 'D', {
    get: KeyMap$D_getInstance
  });
  Object.defineProperty(KeyMap, 'UP', {
    get: KeyMap$UP_getInstance
  });
  Object.defineProperty(KeyMap, 'DOWN', {
    get: KeyMap$DOWN_getInstance
  });
  Object.defineProperty(KeyMap, 'LEFT', {
    get: KeyMap$LEFT_getInstance
  });
  Object.defineProperty(KeyMap, 'RIGHT', {
    get: KeyMap$RIGHT_getInstance
  });
  _.KeyMap = KeyMap;
  var package$robots = _.robots || (_.robots = {});
  package$robots.RobotBase = RobotBase;
  _.SimpleRobot = SimpleRobot;
  _.Point = Point;
  var package$util = _.util || (_.util = {});
  package$util.fillPolygon_8zks36$ = fillPolygon;
  var tmp$, tmp$_0;
  canvas = Kotlin.isType(tmp$ = document.getElementById('simulator'), HTMLCanvasElement) ? tmp$ : throwCCE();
  ctx = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  main();
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);
