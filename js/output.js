if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'output'.");
}
var output = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Math_0 = Math;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var math = Kotlin.kotlin.math;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var ensureNotNull = Kotlin.ensureNotNull;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Array_0 = Array;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var br = $module$kotlinx_html_js.kotlinx.html.br_5bz84p$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3ereno$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var equals = Kotlin.equals;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  Body.prototype = Object.create(Tag.prototype);
  Body.prototype.constructor = Body;
  SwerveRobot.prototype = Object.create(RobotBase.prototype);
  SwerveRobot.prototype.constructor = SwerveRobot;
  TankRobot.prototype = Object.create(RobotBase.prototype);
  TankRobot.prototype.constructor = TankRobot;
  ButtonSetting.prototype = Object.create(Setting.prototype);
  ButtonSetting.prototype.constructor = ButtonSetting;
  RadioSetting.prototype = Object.create(Setting.prototype);
  RadioSetting.prototype.constructor = RadioSetting;
  RangeSetting.prototype = Object.create(Setting.prototype);
  RangeSetting.prototype.constructor = RangeSetting;
  var period;
  var robot;
  var controls;
  var simulator;
  function main$lambda() {
    clear(simulator);
    robot.loop();
    controls.loop();
    return Unit;
  }
  function main() {
    window.setInterval(main$lambda, 16);
  }
  function body(setup) {
    var $receiver = new Body();
    setup($receiver);
    return $receiver;
  }
  function Body() {
    Tag.call(this);
  }
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: [Tag]
  };
  function Color(r, g, b) {
    Color$Companion_getInstance();
    this.r = r;
    this.g = g;
    this.b = b;
  }
  Color.prototype.base16_0 = function (num, digits) {
    var a = toString(num, 16);
    while (a.length < digits)
      a = '0' + a;
    return a;
  };
  Color.prototype.toString = function () {
    return '#' + this.base16_0(this.r, 2) + this.base16_0(this.g, 2) + this.base16_0(this.b, 2);
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.black = new Color(0, 0, 0);
    this.white = new Color(255, 255, 255);
    this.red = new Color(255, 0, 0);
    this.green = new Color(0, 255, 0);
    this.blue = new Color(0, 0, 255);
  }
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  Color.prototype.component1 = function () {
    return this.r;
  };
  Color.prototype.component2 = function () {
    return this.g;
  };
  Color.prototype.component3 = function () {
    return this.b;
  };
  Color.prototype.copy_qt1dr2$ = function (r, g, b) {
    return new Color(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b);
  };
  Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    return result;
  };
  Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b)))));
  };
  function render($receiver, body, pos, bearing) {
    if (bearing === void 0)
      bearing = 0.0;
    $receiver.save();
    $receiver.translate(pos.x, pos.y);
    $receiver.rotate(-bearing);
    body.render($receiver);
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
  function Tag() {
    this.children_xniz5b$_0 = ArrayList_init();
    this.render_1rsr4q$_0 = Tag$render$lambda(this);
  }
  function Tag$initTag$lambda($receiver) {
    return Unit;
  }
  Tag.prototype.initTag_5atchw$ = function (tag, setup) {
    if (setup === void 0)
      setup = Tag$initTag$lambda;
    setup(tag);
    this.children_xniz5b$_0.add_11rb$(tag);
    return tag;
  };
  Object.defineProperty(Tag.prototype, 'render', {
    get: function () {
      return this.render_1rsr4q$_0;
    }
  });
  function Tag$render$lambda(this$Tag) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$Tag.children_xniz5b$_0.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        c.render($receiver);
      }
    };
  }
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: [Element]
  };
  function arrow($receiver, start, end, width, arrowLength, arrowAngle, color) {
    if (width === void 0)
      width = 5.0;
    if (color === void 0)
      color = Color$Companion_getInstance().black;
    return $receiver.initTag_5atchw$(new Arrow(start, end, width, arrowLength, arrowAngle, color));
  }
  function arrow_0($receiver, start, vector, width, arrowLength, arrowAngle, color) {
    if (width === void 0)
      width = 5.0;
    if (color === void 0)
      color = Color$Companion_getInstance().black;
    var tmp$ = start.x;
    var tmp$_0 = vector.magnitude;
    var x = vector.bearing;
    var tmp$_1 = tmp$ + tmp$_0 * Math_0.sin(x);
    var tmp$_2 = start.y;
    var tmp$_3 = vector.magnitude;
    var x_0 = vector.bearing;
    return $receiver.initTag_5atchw$(new Arrow(start, xy(tmp$_1, tmp$_2 + tmp$_3 * Math_0.cos(x_0)), width, arrowLength, arrowAngle, color));
  }
  function Arrow(start, end, width, arrowLength, arrowAngle, color) {
    this.start_0 = start;
    this.end_0 = end;
    this.width_0 = width;
    this.arrowLength_0 = arrowLength;
    this.arrowAngle_0 = arrowAngle;
    this.color_0 = color;
    this.render_6zt5oe$_0 = Arrow$render$lambda(this);
  }
  Object.defineProperty(Arrow.prototype, 'render', {
    get: function () {
      return this.render_6zt5oe$_0;
    },
    set: function (render) {
      this.render_6zt5oe$_0 = render;
    }
  });
  function Arrow$render$lambda(this$Arrow) {
    return function ($receiver) {
      $receiver.lineWidth = this$Arrow.width_0;
      $receiver.strokeStyle = this$Arrow.color_0.toString();
      $receiver.fillStyle = this$Arrow.color_0.toString();
      $receiver.beginPath();
      $receiver.moveTo(this$Arrow.start_0.x, this$Arrow.start_0.y);
      $receiver.lineTo(this$Arrow.end_0.x, this$Arrow.end_0.y);
      $receiver.stroke();
      var tmp$ = this$Arrow.arrowLength_0;
      var $receiver_0 = this$Arrow.end_0.x - this$Arrow.start_0.x;
      var tmp$_0 = Math_0.pow($receiver_0, 2);
      var $receiver_1 = this$Arrow.end_0.y - this$Arrow.start_0.y;
      var x = tmp$_0 + Math_0.pow($receiver_1, 2);
      var lengthRatio = tmp$ / Math_0.sqrt(x);
      var x_0 = this$Arrow.arrowAngle_0;
      var cos = Math_0.cos(x_0);
      var x_1 = this$Arrow.arrowAngle_0;
      var sin = Math_0.sin(x_1);
      $receiver.moveTo(this$Arrow.end_0.x, this$Arrow.end_0.y);
      $receiver.lineTo(this$Arrow.end_0.x + lengthRatio * ((this$Arrow.start_0.x - this$Arrow.end_0.x) * cos + (this$Arrow.start_0.y - this$Arrow.end_0.y) * sin), this$Arrow.end_0.y + lengthRatio * ((this$Arrow.start_0.y - this$Arrow.end_0.y) * cos - (this$Arrow.start_0.x - this$Arrow.end_0.x) * sin));
      $receiver.lineTo(this$Arrow.end_0.x + lengthRatio * ((this$Arrow.start_0.x - this$Arrow.end_0.x) * cos - (this$Arrow.start_0.y - this$Arrow.end_0.y) * sin), this$Arrow.end_0.y + lengthRatio * ((this$Arrow.start_0.y - this$Arrow.end_0.y) * cos + (this$Arrow.start_0.x - this$Arrow.end_0.x) * sin));
      $receiver.lineTo(this$Arrow.end_0.x, this$Arrow.end_0.y);
      $receiver.fill();
    };
  }
  Arrow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Arrow',
    interfaces: [Element]
  };
  function Element() {
  }
  Element.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Element',
    interfaces: []
  };
  function line($receiver, start, end, width, color) {
    if (width === void 0)
      width = 5.0;
    if (color === void 0)
      color = Color$Companion_getInstance().black;
    return $receiver.initTag_5atchw$(new Line(start, end, width, color));
  }
  function line_0($receiver, start, vector, width, color) {
    if (width === void 0)
      width = 5.0;
    if (color === void 0)
      color = Color$Companion_getInstance().black;
    var tmp$ = start.x;
    var tmp$_0 = vector.magnitude;
    var x = vector.bearing;
    var tmp$_1 = tmp$ + tmp$_0 * Math_0.sin(x);
    var tmp$_2 = start.y;
    var tmp$_3 = vector.magnitude;
    var x_0 = vector.bearing;
    return $receiver.initTag_5atchw$(new Line(start, xy(tmp$_1, tmp$_2 + tmp$_3 * Math_0.cos(x_0)), width, color));
  }
  function Line(start, end, width, color) {
    this.start_0 = start;
    this.end_0 = end;
    this.width_0 = width;
    this.color_0 = color;
    this.render_rqot11$_0 = Line$render$lambda(this);
  }
  Object.defineProperty(Line.prototype, 'render', {
    get: function () {
      return this.render_rqot11$_0;
    },
    set: function (render) {
      this.render_rqot11$_0 = render;
    }
  });
  function Line$render$lambda(this$Line) {
    return function ($receiver) {
      $receiver.lineWidth = this$Line.width_0;
      $receiver.strokeStyle = this$Line.color_0.toString();
      $receiver.beginPath();
      $receiver.moveTo(this$Line.start_0.x, this$Line.start_0.y);
      $receiver.lineTo(this$Line.end_0.x, this$Line.end_0.y);
      $receiver.stroke();
    };
  }
  Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Element]
  };
  function RobotBase(pos, bearing, wheels) {
    RobotBase$Companion_getInstance();
    if (pos === void 0)
      pos = xy(0.0, 0.0);
    if (bearing === void 0)
      bearing = 0.0;
    this.pos = pos;
    this.bearing = bearing;
    this.wheels_mzrdcm$_0 = wheels;
  }
  RobotBase.prototype.loop = function () {
    var tmp$;
    var vectors = this.update();
    if (vectors.length !== RobotBase$Companion_getInstance().numberOfWheels) {
      println('Number of wheels error. Vector size: ' + vectors.length + '. Number of wheels: ' + RobotBase$Companion_getInstance().numberOfWheels);
    }
     else {
      tmp$ = RobotBase$Companion_getInstance().numberOfWheels;
      for (var i = 0; i < tmp$; i++) {
        this.wheels_mzrdcm$_0[i].vector = vectors[i];
      }
    }
    render(simulator, RobotBase$Companion_getInstance().body_0, this.pos, this.bearing);
  };
  function RobotBase$Companion() {
    RobotBase$Companion_instance = this;
    this.maxVelocity_fiv7e5$_0 = (new RangeSetting(600.0, 100.0, 1100.0)).provideDelegate_n5byny$(this, RobotBase$Companion$maxVelocity_metadata);
    this.robotWidth_7hjpr8$_0 = (new RangeSetting(100.0, 50.0, 150.0)).provideDelegate_n5byny$(this, RobotBase$Companion$robotWidth_metadata);
    this.robotLength_24ekf0$_0 = (new RangeSetting(100.0, 50.0, 150.0)).provideDelegate_n5byny$(this, RobotBase$Companion$robotLength_metadata);
    this.drivetrainType_shbw94$_0 = (new RadioSetting(['Tank', 'Swerve'], RobotBase$Companion$drivetrainType$lambda)).provideDelegate_n5byny$(this, RobotBase$Companion$drivetrainType_metadata);
    this.resetAll_pms5pu$_0 = (new ButtonSetting(RobotBase$Companion$resetAll$lambda(this))).provideDelegate_n5byny$(this, RobotBase$Companion$resetAll_metadata);
  }
  var RobotBase$Companion$maxVelocity_metadata = new PropertyMetadata('maxVelocity');
  Object.defineProperty(RobotBase$Companion.prototype, 'maxVelocity', {
    get: function () {
      return this.maxVelocity_fiv7e5$_0.getValue_lrcp0p$(this, RobotBase$Companion$maxVelocity_metadata);
    }
  });
  var RobotBase$Companion$robotWidth_metadata = new PropertyMetadata('robotWidth');
  Object.defineProperty(RobotBase$Companion.prototype, 'robotWidth', {
    get: function () {
      return this.robotWidth_7hjpr8$_0.getValue_lrcp0p$(this, RobotBase$Companion$robotWidth_metadata);
    }
  });
  var RobotBase$Companion$robotLength_metadata = new PropertyMetadata('robotLength');
  Object.defineProperty(RobotBase$Companion.prototype, 'robotLength', {
    get: function () {
      return this.robotLength_24ekf0$_0.getValue_lrcp0p$(this, RobotBase$Companion$robotLength_metadata);
    }
  });
  var RobotBase$Companion$drivetrainType_metadata = new PropertyMetadata('drivetrainType');
  Object.defineProperty(RobotBase$Companion.prototype, 'drivetrainType', {
    get: function () {
      return this.drivetrainType_shbw94$_0.getValue_lrcp0p$(this, RobotBase$Companion$drivetrainType_metadata);
    }
  });
  var RobotBase$Companion$resetAll_metadata = new PropertyMetadata('resetAll');
  Object.defineProperty(RobotBase$Companion.prototype, 'resetAll', {
    get: function () {
      return this.resetAll_pms5pu$_0.getValue_lrcp0p$(this, RobotBase$Companion$resetAll_metadata);
    }
  });
  Object.defineProperty(RobotBase$Companion.prototype, 'maxVelocityPerFrame', {
    get: function () {
      return this.maxVelocity * 16 / 1000;
    }
  });
  Object.defineProperty(RobotBase$Companion.prototype, 'numberOfWheels', {
    get: function () {
      return robot.wheels_mzrdcm$_0.length;
    }
  });
  Object.defineProperty(RobotBase$Companion.prototype, 'halfWidth', {
    get: function () {
      return this.robotWidth / 2;
    }
  });
  Object.defineProperty(RobotBase$Companion.prototype, 'halfLength', {
    get: function () {
      return this.robotLength / 2;
    }
  });
  Object.defineProperty(RobotBase$Companion.prototype, 'corners_0', {
    get: function () {
      return listOf([xy(this.halfWidth, this.halfLength), xy(this.halfWidth, -this.halfLength), xy(-this.halfWidth, -this.halfLength), xy(-this.halfWidth, this.halfLength)]);
    }
  });
  function RobotBase$Companion$get_RobotBase$Companion$body$lambda(this$RobotBase$) {
    return function ($receiver) {
      for (var i = 0; i < 3; i++) {
        line($receiver, this$RobotBase$.corners_0.get_za3lpa$(i), this$RobotBase$.corners_0.get_za3lpa$(i + 1 | 0));
      }
      line($receiver, this$RobotBase$.corners_0.get_za3lpa$(0), this$RobotBase$.corners_0.get_za3lpa$(3), void 0, Color$Companion_getInstance().green);
      var $receiver_0 = robot.wheels_mzrdcm$_0;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var this$RobotBase$_0 = this$RobotBase$;
        var rx = element.component1()
        , ry = element.component2()
        , vector = element.component3();
        var magnitude = vector.magnitude / this$RobotBase$_0.maxVelocityPerFrame;
        arrow_0($receiver, xy(this$RobotBase$_0.robotWidth * rx, this$RobotBase$_0.robotLength * ry), vec(60.0 * magnitude, vector.bearing), 5.0, 20.0 * Math_0.abs(magnitude), 45.0 / 360.0 * math.PI, vector.magnitude > 0 ? Color$Companion_getInstance().blue : Color$Companion_getInstance().red);
      }
      return Unit;
    };
  }
  Object.defineProperty(RobotBase$Companion.prototype, 'body_0', {
    get: function () {
      return body(RobotBase$Companion$get_RobotBase$Companion$body$lambda(this));
    }
  });
  function RobotBase$Companion$drivetrainType$lambda(it) {
    switch (it) {
      case 'Tank':
        robot = new TankRobot(robot.pos, robot.bearing);
        break;
      case 'Swerve':
        robot = new SwerveRobot(robot.pos, robot.bearing);
        break;
      default:break;
    }
    return Unit;
  }
  function RobotBase$Companion$resetAll$lambda(this$RobotBase$) {
    return function (it) {
      robot.pos = xy(0.0, 0.0);
      robot.bearing = 0.0;
      RangeSetting$Companion_getInstance().reset_12czou$(getPropertyCallableRef('maxVelocity', 0, function ($receiver) {
        return $receiver.maxVelocity;
      }.bind(null, this$RobotBase$)));
      RangeSetting$Companion_getInstance().reset_12czou$(getPropertyCallableRef('robotWidth', 0, function ($receiver) {
        return $receiver.robotWidth;
      }.bind(null, this$RobotBase$)));
      RangeSetting$Companion_getInstance().reset_12czou$(getPropertyCallableRef('robotLength', 0, function ($receiver) {
        return $receiver.robotLength;
      }.bind(null, this$RobotBase$)));
      return Unit;
    };
  }
  RobotBase$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RobotBase$Companion_instance = null;
  function RobotBase$Companion_getInstance() {
    if (RobotBase$Companion_instance === null) {
      new RobotBase$Companion();
    }
    return RobotBase$Companion_instance;
  }
  RobotBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotBase',
    interfaces: [Loopable]
  };
  function SwerveRobot(pos, bearing) {
    if (pos === void 0)
      pos = xy(0.0, 0.0);
    if (bearing === void 0)
      bearing = 0.0;
    RobotBase.call(this, pos, bearing, [new Wheel(-0.5, 0.5), new Wheel(0.5, 0.5), new Wheel(0.5, -0.5), new Wheel(-0.5, -0.5)]);
  }
  SwerveRobot.prototype.avg_0 = function ($receiver, that) {
    return ($receiver + that) / 2;
  };
  SwerveRobot.prototype.update = function () {
    var tmp$, tmp$_0;
    var array = Array_0(RobotBase$Companion_getInstance().numberOfWheels);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = vec(0.0, 0.0);
    }
    var wheelsVectors = array;
    var x = controls.x;
    var tmp$_2 = Math_0.abs(x);
    var x_0 = controls.y;
    var strafeMagnitude = tmp$_2 + Math_0.abs(x_0);
    var y = controls.x;
    var x_1 = controls.y;
    var strafeBearing = Math_0.atan2(y, x_1) - this.bearing;
    var array_0 = Array_0(RobotBase$Companion_getInstance().numberOfWheels);
    var tmp$_3;
    tmp$_3 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
      array_0[i_0] = vec(strafeMagnitude, strafeBearing);
    }
    var strafeVectors = array_0;
    var tmp$_4 = controls.z;
    var y_0 = -RobotBase$Companion_getInstance().halfWidth;
    var x_2 = RobotBase$Companion_getInstance().halfLength;
    var tmp$_5 = vec(tmp$_4, Math_0.atan2(y_0, x_2) + math.PI / 2);
    var tmp$_6 = controls.z;
    var y_1 = RobotBase$Companion_getInstance().halfWidth;
    var x_3 = RobotBase$Companion_getInstance().halfLength;
    var tmp$_7 = vec(tmp$_6, Math_0.atan2(y_1, x_3) + math.PI / 2);
    var tmp$_8 = controls.z;
    var y_2 = RobotBase$Companion_getInstance().halfWidth;
    var x_4 = -RobotBase$Companion_getInstance().halfLength;
    var tmp$_9 = vec(tmp$_8, Math_0.atan2(y_2, x_4) + math.PI / 2);
    var tmp$_10 = controls.z;
    var y_3 = -RobotBase$Companion_getInstance().halfWidth;
    var x_5 = -RobotBase$Companion_getInstance().halfLength;
    var rotationVectors = [tmp$_5, tmp$_7, tmp$_9, vec(tmp$_10, Math_0.atan2(y_3, x_5) + math.PI / 2)];
    tmp$ = RobotBase$Companion_getInstance().numberOfWheels;
    for (var i_1 = 0; i_1 < tmp$; i_1++) {
      wheelsVectors[i_1] = strafeVectors[i_1].plus_y1wxxr$(rotationVectors[i_1]);
    }
    var maxBy$result;
    maxBy$break: do {
      var tmp$_11;
      if (wheelsVectors.length === 0) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = wheelsVectors[0];
      var maxValue = maxElem.magnitude;
      tmp$_11 = get_lastIndex(wheelsVectors);
      for (var i_2 = 1; i_2 <= tmp$_11; i_2++) {
        var e = wheelsVectors[i_2];
        var v = e.magnitude;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    var max = ensureNotNull(maxBy$result).magnitude;
    tmp$_0 = RobotBase$Companion_getInstance().numberOfWheels;
    for (var i_3 = 0; i_3 < tmp$_0; i_3++) {
      wheelsVectors[i_3].magnitude = wheelsVectors[i_3].magnitude * RobotBase$Companion_getInstance().maxVelocityPerFrame;
      if (max > 1.0)
        wheelsVectors[i_3].magnitude = wheelsVectors[i_3].magnitude / max;
    }
    var destination = ArrayList_init_0(wheelsVectors.length);
    var tmp$_12;
    for (tmp$_12 = 0; tmp$_12 !== wheelsVectors.length; ++tmp$_12) {
      var item = wheelsVectors[tmp$_12];
      var tmp$_13 = destination.add_11rb$;
      var x_6 = item.bearing;
      var tmp$_14 = Math_0.sin(x_6) * item.magnitude;
      var x_7 = item.bearing;
      tmp$_13.call(destination, to(tmp$_14, Math_0.cos(x_7) * item.magnitude));
    }
    var xyComponents = destination;
    var top = this.avg_0(xyComponents.get_za3lpa$(0).first, xyComponents.get_za3lpa$(1).first);
    var bottom = this.avg_0(xyComponents.get_za3lpa$(3).first, xyComponents.get_za3lpa$(2).first);
    var left = this.avg_0(xyComponents.get_za3lpa$(0).second, xyComponents.get_za3lpa$(3).second);
    var right = this.avg_0(xyComponents.get_za3lpa$(1).second, xyComponents.get_za3lpa$(2).second);
    var omega1 = (top - bottom) / RobotBase$Companion_getInstance().robotLength;
    var omega2 = (left - right) / RobotBase$Companion_getInstance().robotWidth;
    var omega = omega1 + omega2;
    var upDown = vec(left + right, this.bearing);
    var leftRight = vec(top + bottom, this.bearing + math.PI / 2);
    this.pos.x = this.pos.x + (upDown.x + leftRight.x);
    this.pos.y = this.pos.y + (upDown.y + leftRight.y);
    this.bearing = this.bearing + omega;
    return wheelsVectors;
  };
  SwerveRobot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwerveRobot',
    interfaces: [RobotBase]
  };
  function TankRobot(pos, bearing) {
    if (pos === void 0)
      pos = xy(0.0, 0.0);
    if (bearing === void 0)
      bearing = 0.0;
    RobotBase.call(this, pos, bearing, [new Wheel(-0.5, 0.0), new Wheel(0.5, 0.0)]);
  }
  TankRobot.prototype.update = function () {
    var x = -controls.z;
    var y = controls.y;
    var v = (1 - Math_0.abs(x)) * y + y;
    var w = (1 - Math_0.abs(y)) * x + x;
    var l = (v - w) / 2 * RobotBase$Companion_getInstance().maxVelocityPerFrame;
    var r = (v + w) / 2 * RobotBase$Companion_getInstance().maxVelocityPerFrame;
    var s = (l + r) / 2;
    var theta = (l - r) / RobotBase$Companion_getInstance().robotWidth;
    var tmp$ = this.pos;
    var tmp$_0 = this.pos.x;
    var x_0 = this.bearing;
    tmp$.x = tmp$_0 + s * Math_0.sin(x_0);
    var tmp$_1 = this.pos;
    var tmp$_2 = this.pos.y;
    var x_1 = this.bearing;
    tmp$_1.y = tmp$_2 + s * Math_0.cos(x_1);
    this.bearing = this.bearing + theta;
    return [vec(l, 0.0), vec(r, 0.0)];
  };
  TankRobot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TankRobot',
    interfaces: [RobotBase]
  };
  function ButtonSetting(onUpdate) {
    Setting.call(this, onUpdate);
    this.value_xjd99g$_0 = Unit;
  }
  Object.defineProperty(ButtonSetting.prototype, 'value', {
    get: function () {
      return this.value_xjd99g$_0;
    },
    set: function (value) {
      this.value_xjd99g$_0 = value;
    }
  });
  function ButtonSetting$provideDelegate$lambda$lambda$lambda(closure$camelCase, closure$titleCase) {
    return function ($receiver) {
      $receiver.type = InputType.button;
      set_classes($receiver, plus(get_classes($receiver), 'buttonInput'));
      set_id($receiver, closure$camelCase + 'Button');
      $receiver.value = closure$titleCase;
      return Unit;
    };
  }
  function ButtonSetting$provideDelegate$lambda$lambda(closure$camelCase, closure$titleCase) {
    return function ($receiver) {
      $receiver.name = closure$camelCase;
      br($receiver);
      input($receiver, void 0, void 0, void 0, void 0, void 0, ButtonSetting$provideDelegate$lambda$lambda$lambda(closure$camelCase, closure$titleCase));
      return Unit;
    };
  }
  function ButtonSetting$provideDelegate$lambda(closure$camelCase, closure$titleCase) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, void 0, ButtonSetting$provideDelegate$lambda$lambda(closure$camelCase, closure$titleCase));
      return Unit;
    };
  }
  function ButtonSetting$provideDelegate$lambda$lambda_0(this$ButtonSetting) {
    return function (it) {
      this$ButtonSetting.onUpdate(Unit);
      return Unit;
    };
  }
  ButtonSetting.prototype.provideDelegate_n5byny$ = function (thisRef, property) {
    var tmp$;
    var camelCase = property.callableName;
    var tmp$_0 = capitalize(property.callableName);
    var regex = Regex_init('[A-Z]');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$(tmp$_0);
      if (match == null) {
        replace_20wsma$result = tmp$_0.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = tmp$_0.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(tmp$_0, lastStart, foundMatch.range.start);
        sb.append_gw00v9$(' ' + foundMatch.value);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(tmp$_0, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var titleCase = replace_20wsma$result;
    append(ensureNotNull(ensureNotNull(ensureNotNull(document.body).getElementsByClassName('main')[0]).getElementsByClassName('settings')[0]), ButtonSetting$provideDelegate$lambda(camelCase, titleCase));
    var buttonInput = Kotlin.isType(tmp$ = document.getElementById(camelCase + 'Button'), HTMLInputElement) ? tmp$ : throwCCE();
    buttonInput.addEventListener('click', ButtonSetting$provideDelegate$lambda$lambda_0(this));
    return Setting.prototype.provideDelegate_n5byny$.call(this, thisRef, property);
  };
  ButtonSetting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonSetting',
    interfaces: [Setting]
  };
  function RadioSetting(options, onUpdate) {
    if (onUpdate === void 0)
      onUpdate = RadioSetting_init$lambda;
    Setting.call(this, onUpdate);
    this.options_0 = options;
    this.value_cqnzux$_0 = this.options_0[0];
  }
  Object.defineProperty(RadioSetting.prototype, 'value', {
    get: function () {
      return this.value_cqnzux$_0;
    },
    set: function (value) {
      this.value_cqnzux$_0 = value;
    }
  });
  function RadioSetting$provideDelegate$lambda$lambda$lambda(closure$titleCase) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$titleCase);
      return Unit;
    };
  }
  function RadioSetting$provideDelegate$lambda$lambda$lambda$lambda$lambda(closure$camelCase, closure$i, closure$option) {
    return function ($receiver) {
      $receiver.type = InputType.radio;
      set_classes($receiver, plus(get_classes($receiver), 'radioInput'));
      set_id($receiver, closure$camelCase + closure$i + 'Radio');
      $receiver.name = closure$camelCase;
      $receiver.value = closure$option;
      return Unit;
    };
  }
  function RadioSetting$provideDelegate$lambda$lambda$lambda$lambda(closure$camelCase, closure$i, closure$option) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, RadioSetting$provideDelegate$lambda$lambda$lambda$lambda$lambda(closure$camelCase, closure$i, closure$option));
      $receiver.unaryPlus_pdl1vz$(closure$option);
      return Unit;
    };
  }
  function RadioSetting$provideDelegate$lambda$lambda(closure$camelCase, closure$titleCase, this$RadioSetting) {
    return function ($receiver) {
      $receiver.name = closure$camelCase;
      div($receiver, void 0, RadioSetting$provideDelegate$lambda$lambda$lambda(closure$titleCase));
      var $receiver_0 = this$RadioSetting.options_0;
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        div($receiver, void 0, RadioSetting$provideDelegate$lambda$lambda$lambda$lambda(closure$camelCase, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
      }
      return Unit;
    };
  }
  function RadioSetting$provideDelegate$lambda(closure$camelCase, closure$titleCase, this$RadioSetting) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, void 0, RadioSetting$provideDelegate$lambda$lambda(closure$camelCase, closure$titleCase, this$RadioSetting));
      return Unit;
    };
  }
  function RadioSetting$provideDelegate$lambda_0(closure$radio, this$RadioSetting) {
    return function (it) {
      this$RadioSetting.value = closure$radio.value;
      this$RadioSetting.onUpdate(this$RadioSetting.value);
      return Unit;
    };
  }
  RadioSetting.prototype.provideDelegate_n5byny$ = function (thisRef, property) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var camelCase = property.callableName;
    var tmp$_3 = capitalize(property.callableName);
    var regex = Regex_init('[A-Z]');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$(tmp$_3);
      if (match == null) {
        replace_20wsma$result = tmp$_3.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = tmp$_3.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(tmp$_3, lastStart, foundMatch.range.start);
        sb.append_gw00v9$(' ' + foundMatch.value);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(tmp$_3, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var titleCase = replace_20wsma$result;
    append(ensureNotNull(ensureNotNull(ensureNotNull(document.body).getElementsByClassName('main')[0]).getElementsByClassName('settings')[0]), RadioSetting$provideDelegate$lambda(camelCase, titleCase, this));
    var radioInputs = Kotlin.isType(tmp$ = document.forms[camelCase], HTMLFormElement) ? tmp$ : throwCCE();
    (Kotlin.isType(tmp$_0 = radioInputs[0], HTMLInputElement) ? tmp$_0 : throwCCE()).checked = true;
    tmp$_1 = radioInputs.length;
    for (var i = 0; i < tmp$_1; i++) {
      var radio = Kotlin.isType(tmp$_2 = radioInputs[i], HTMLInputElement) ? tmp$_2 : throwCCE();
      radio.addEventListener('click', RadioSetting$provideDelegate$lambda_0(radio, this));
    }
    return Setting.prototype.provideDelegate_n5byny$.call(this, thisRef, property);
  };
  function RadioSetting_init$lambda(it) {
    return Unit;
  }
  RadioSetting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadioSetting',
    interfaces: [Setting]
  };
  function RangeSetting(initialValue, min, max, onUpdate) {
    RangeSetting$Companion_getInstance();
    if (onUpdate === void 0)
      onUpdate = RangeSetting_init$lambda;
    Setting.call(this, onUpdate);
    this.initialValue = initialValue;
    this.min = min;
    this.max = max;
    this.value_ld2e87$_0 = this.initialValue;
  }
  Object.defineProperty(RangeSetting.prototype, 'value', {
    get: function () {
      return this.value_ld2e87$_0;
    },
    set: function (value) {
      this.value_ld2e87$_0 = value;
    }
  });
  function RangeSetting$provideDelegate$lambda$lambda$lambda(closure$titleCase) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$titleCase);
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda$lambda_0(closure$camelCase, this$RangeSetting) {
    return function ($receiver) {
      $receiver.type = InputType.range;
      set_classes($receiver, plus(get_classes($receiver), 'rangeInput'));
      set_id($receiver, closure$camelCase + 'Range');
      $receiver.min = this$RangeSetting.min.toString();
      $receiver.max = this$RangeSetting.max.toString();
      $receiver.value = this$RangeSetting.initialValue.toString();
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda$lambda_1(closure$camelCase, this$RangeSetting) {
    return function ($receiver) {
      set_classes($receiver, plus(get_classes($receiver), 'textInput'));
      set_id($receiver, closure$camelCase + 'Text');
      $receiver.value = this$RangeSetting.initialValue.toString();
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda$lambda_2(closure$camelCase) {
    return function ($receiver) {
      $receiver.type = InputType.button;
      set_classes($receiver, plus(get_classes($receiver), 'buttonInput'));
      set_id($receiver, closure$camelCase + 'Button');
      $receiver.value = 'Reset';
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda(closure$camelCase, closure$titleCase, this$RangeSetting) {
    return function ($receiver) {
      $receiver.name = closure$camelCase;
      div($receiver, void 0, RangeSetting$provideDelegate$lambda$lambda$lambda(closure$titleCase));
      input($receiver, void 0, void 0, void 0, void 0, void 0, RangeSetting$provideDelegate$lambda$lambda$lambda_0(closure$camelCase, this$RangeSetting));
      input($receiver, void 0, void 0, void 0, void 0, void 0, RangeSetting$provideDelegate$lambda$lambda$lambda_1(closure$camelCase, this$RangeSetting));
      input($receiver, void 0, void 0, void 0, void 0, void 0, RangeSetting$provideDelegate$lambda$lambda$lambda_2(closure$camelCase));
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda(closure$camelCase, closure$titleCase, this$RangeSetting) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, void 0, RangeSetting$provideDelegate$lambda$lambda(closure$camelCase, closure$titleCase, this$RangeSetting));
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda_0(closure$rangeInput, closure$textInput, this$RangeSetting) {
    return function (it) {
      closure$textInput.value = closure$rangeInput.value;
      this$RangeSetting.value = toDouble(closure$rangeInput.value);
      this$RangeSetting.onUpdate(this$RangeSetting.value);
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda_1(closure$textInput, closure$rangeInput, this$RangeSetting) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (equals((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).key, 'Enter')) {
        tmp$_1 = this$RangeSetting;
        try {
          var a = toDouble(closure$textInput.value);
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
        var closure$textInput_0 = closure$textInput;
        var this$RangeSetting_0 = this$RangeSetting;
        closure$rangeInput_0.value = $receiver.toString();
        closure$textInput_0.value = $receiver.toString();
        this$RangeSetting_0.onUpdate(this$RangeSetting_0.value);
        tmp$_1.value = $receiver;
        closure$textInput.blur();
      }
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda_2(this$RangeSetting, closure$rangeInput, closure$textInput) {
    return function (it) {
      this$RangeSetting.value = this$RangeSetting.initialValue;
      closure$rangeInput.value = this$RangeSetting.initialValue.toString();
      closure$textInput.value = this$RangeSetting.initialValue.toString();
      this$RangeSetting.onUpdate(this$RangeSetting.value);
      return Unit;
    };
  }
  RangeSetting.prototype.provideDelegate_n5byny$ = function (thisRef, property) {
    var tmp$, tmp$_0, tmp$_1;
    var camelCase = property.callableName;
    var tmp$_2 = capitalize(property.callableName);
    var regex = Regex_init('[A-Z]');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$(tmp$_2);
      if (match == null) {
        replace_20wsma$result = tmp$_2.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = tmp$_2.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(tmp$_2, lastStart, foundMatch.range.start);
        sb.append_gw00v9$(' ' + foundMatch.value);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(tmp$_2, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var titleCase = replace_20wsma$result;
    append(ensureNotNull(ensureNotNull(ensureNotNull(document.body).getElementsByClassName('main')[0]).getElementsByClassName('settings')[0]), RangeSetting$provideDelegate$lambda(camelCase, titleCase, this));
    var rangeInput = Kotlin.isType(tmp$ = document.getElementById(camelCase + 'Range'), HTMLInputElement) ? tmp$ : throwCCE();
    var textInput = Kotlin.isType(tmp$_0 = document.getElementById(camelCase + 'Text'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var buttonInput = Kotlin.isType(tmp$_1 = document.getElementById(camelCase + 'Button'), HTMLInputElement) ? tmp$_1 : throwCCE();
    rangeInput.addEventListener('input', RangeSetting$provideDelegate$lambda_0(rangeInput, textInput, this));
    textInput.addEventListener('keydown', RangeSetting$provideDelegate$lambda_1(textInput, rangeInput, this));
    buttonInput.addEventListener('click', RangeSetting$provideDelegate$lambda_2(this, rangeInput, textInput));
    return Setting.prototype.provideDelegate_n5byny$.call(this, thisRef, property);
  };
  function RangeSetting$Companion() {
    RangeSetting$Companion_instance = this;
  }
  RangeSetting$Companion.prototype.reset_12czou$ = function (property) {
    var tmp$;
    var camelCase = property.callableName;
    var buttonInput = Kotlin.isType(tmp$ = document.getElementById(camelCase + 'Button'), HTMLInputElement) ? tmp$ : throwCCE();
    buttonInput.click();
  };
  RangeSetting$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RangeSetting$Companion_instance = null;
  function RangeSetting$Companion_getInstance() {
    if (RangeSetting$Companion_instance === null) {
      new RangeSetting$Companion();
    }
    return RangeSetting$Companion_instance;
  }
  function RangeSetting_init$lambda(it) {
    return Unit;
  }
  RangeSetting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeSetting',
    interfaces: [Setting]
  };
  function Setting(onUpdate) {
    this.onUpdate = onUpdate;
  }
  function Setting$provideDelegate$ObjectLiteral(this$Setting) {
    this.this$Setting = this$Setting;
  }
  Setting$provideDelegate$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.this$Setting.value;
  };
  Setting$provideDelegate$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  Setting.prototype.provideDelegate_n5byny$ = function (thisRef, property) {
    return new Setting$provideDelegate$ObjectLiteral(this);
  };
  Setting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Setting',
    interfaces: []
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
  function degreesToRadians($receiver) {
    return $receiver / 180 * math.PI;
  }
  function xy($receiver, that) {
    return new Point($receiver, that);
  }
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
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
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function vec($receiver, that) {
    return new Vector($receiver, that);
  }
  function Vector(magnitude, bearing) {
    this.magnitude = magnitude;
    this.bearing = bearing;
    var x = this.bearing;
    this.x = Math_0.sin(x) * this.magnitude;
    var x_0 = this.bearing;
    this.y = Math_0.cos(x_0) * this.magnitude;
  }
  Vector.prototype.plus_y1wxxr$ = function (that) {
    var xComp = this.x + that.x;
    var yComp = this.y + that.y;
    var x = Math_0.pow(xComp, 2) + Math_0.pow(yComp, 2);
    return vec(Math_0.sqrt(x), Math_0.atan2(xComp, yComp));
  };
  Vector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector',
    interfaces: []
  };
  Vector.prototype.component1 = function () {
    return this.magnitude;
  };
  Vector.prototype.component2 = function () {
    return this.bearing;
  };
  Vector.prototype.copy_lu1900$ = function (magnitude, bearing) {
    return new Vector(magnitude === void 0 ? this.magnitude : magnitude, bearing === void 0 ? this.bearing : bearing);
  };
  Vector.prototype.toString = function () {
    return 'Vector(magnitude=' + Kotlin.toString(this.magnitude) + (', bearing=' + Kotlin.toString(this.bearing)) + ')';
  };
  Vector.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.magnitude) | 0;
    result = result * 31 + Kotlin.hashCode(this.bearing) | 0;
    return result;
  };
  Vector.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.magnitude, other.magnitude) && Kotlin.equals(this.bearing, other.bearing)))));
  };
  function Wheel(relativeX, relativeY, vector) {
    if (vector === void 0)
      vector = new Vector(0.0, 0.0);
    this.relativeX = relativeX;
    this.relativeY = relativeY;
    this.vector = vector;
  }
  Wheel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wheel',
    interfaces: []
  };
  Wheel.prototype.component1 = function () {
    return this.relativeX;
  };
  Wheel.prototype.component2 = function () {
    return this.relativeY;
  };
  Wheel.prototype.component3 = function () {
    return this.vector;
  };
  Wheel.prototype.copy_y20ykt$ = function (relativeX, relativeY, vector) {
    return new Wheel(relativeX === void 0 ? this.relativeX : relativeX, relativeY === void 0 ? this.relativeY : relativeY, vector === void 0 ? this.vector : vector);
  };
  Wheel.prototype.toString = function () {
    return 'Wheel(relativeX=' + Kotlin.toString(this.relativeX) + (', relativeY=' + Kotlin.toString(this.relativeY)) + (', vector=' + Kotlin.toString(this.vector)) + ')';
  };
  Wheel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.relativeX) | 0;
    result = result * 31 + Kotlin.hashCode(this.relativeY) | 0;
    result = result * 31 + Kotlin.hashCode(this.vector) | 0;
    return result;
  };
  Wheel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.relativeX, other.relativeX) && Kotlin.equals(this.relativeY, other.relativeY) && Kotlin.equals(this.vector, other.vector)))));
  };
  Object.defineProperty(_, 'period', {
    get: function () {
      return period;
    }
  });
  Object.defineProperty(_, 'robot', {
    get: function () {
      return robot;
    },
    set: function (value) {
      robot = value;
    }
  });
  Object.defineProperty(_, 'controls', {
    get: function () {
      return controls;
    }
  });
  Object.defineProperty(_, 'simulator', {
    get: function () {
      return simulator;
    }
  });
  _.main = main;
  var package$canvas = _.canvas || (_.canvas = {});
  package$canvas.body_jjspwn$ = body;
  package$canvas.Body = Body;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  package$canvas.Color = Color;
  package$canvas.render_kb7f2p$ = render;
  package$canvas.clear_qtrdl1$ = clear;
  package$canvas.cartesian_qtrdl1$ = cartesian;
  package$canvas.Tag = Tag;
  var package$elements = package$canvas.elements || (package$canvas.elements = {});
  package$elements.arrow_hhsopa$ = arrow;
  package$elements.arrow_u02d97$ = arrow_0;
  package$elements.Arrow = Arrow;
  package$elements.Element = Element;
  package$elements.line_lnb366$ = line;
  package$elements.line_hh96uv$ = line_0;
  package$elements.Line = Line;
  Object.defineProperty(RobotBase, 'Companion', {
    get: RobotBase$Companion_getInstance
  });
  var package$robots = _.robots || (_.robots = {});
  package$robots.RobotBase = RobotBase;
  package$robots.SwerveRobot = SwerveRobot;
  package$robots.TankRobot = TankRobot;
  var package$settings = _.settings || (_.settings = {});
  package$settings.ButtonSetting = ButtonSetting;
  package$settings.RadioSetting = RadioSetting;
  Object.defineProperty(RangeSetting, 'Companion', {
    get: RangeSetting$Companion_getInstance
  });
  package$settings.RangeSetting = RangeSetting;
  package$settings.Setting = Setting;
  Object.defineProperty(KeyboardControl, 'Companion', {
    get: KeyboardControl$Companion_getInstance
  });
  var package$util = _.util || (_.util = {});
  package$util.KeyboardControl = KeyboardControl;
  package$util.Loopable = Loopable;
  package$util.degreesToRadians_yrwdxr$ = degreesToRadians;
  package$util.xy_38ydlf$ = xy;
  package$util.Point = Point;
  package$util.vec_38ydlf$ = vec;
  package$util.Vector = Vector;
  package$util.Wheel = Wheel;
  period = 16;
  robot = new TankRobot();
  controls = new KeyboardControl();
  var tmp$, tmp$_0;
  var $receiver = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = document.getElementById('simulatorCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE()).getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
  cartesian($receiver);
  simulator = $receiver;
  main();
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin, this['kotlinx-html-js']);
