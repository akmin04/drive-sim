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
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var math = Kotlin.kotlin.math;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var br = $module$kotlinx_html_js.kotlinx.html.br_msntey$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_mm0abt$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var equals = Kotlin.equals;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  Body.prototype = Object.create(Tag.prototype);
  Body.prototype.constructor = Body;
  TankDriveRobot.prototype = Object.create(RobotBase.prototype);
  TankDriveRobot.prototype.constructor = TankDriveRobot;
  ButtonSetting.prototype = Object.create(Setting.prototype);
  ButtonSetting.prototype.constructor = ButtonSetting;
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
  function RobotBase(wheels) {
    this.wheels_mzrdcm$_0 = wheels;
    this.maxVelocity_9kbjtd$_0 = (new RangeSetting(600.0, 100.0, 1100.0)).provideDelegate_n5byny$(this, RobotBase$maxVelocity_metadata);
    this.robotWidth_wy3boa$_0 = (new RangeSetting(100.0, 50.0, 150.0)).provideDelegate_n5byny$(this, RobotBase$robotWidth_metadata);
    this.robotLength_mys6si$_0 = (new RangeSetting(100.0, 50.0, 150.0)).provideDelegate_n5byny$(this, RobotBase$robotLength_metadata);
    this.resetAll_ljac8g$_0 = (new ButtonSetting(RobotBase$resetAll$lambda(this))).provideDelegate_n5byny$(this, RobotBase$resetAll_metadata);
    this.numberOfWheels = this.wheels_mzrdcm$_0.length;
    this.pos = xy(0.0, 0.0);
    this.bearing = 0.0;
  }
  var RobotBase$maxVelocity_metadata = new PropertyMetadata('maxVelocity');
  Object.defineProperty(RobotBase.prototype, 'maxVelocity', {
    get: function () {
      return this.maxVelocity_9kbjtd$_0.getValue_lrcp0p$(this, RobotBase$maxVelocity_metadata);
    }
  });
  var RobotBase$robotWidth_metadata = new PropertyMetadata('robotWidth');
  Object.defineProperty(RobotBase.prototype, 'robotWidth', {
    get: function () {
      return this.robotWidth_wy3boa$_0.getValue_lrcp0p$(this, RobotBase$robotWidth_metadata);
    }
  });
  var RobotBase$robotLength_metadata = new PropertyMetadata('robotLength');
  Object.defineProperty(RobotBase.prototype, 'robotLength', {
    get: function () {
      return this.robotLength_mys6si$_0.getValue_lrcp0p$(this, RobotBase$robotLength_metadata);
    }
  });
  var RobotBase$resetAll_metadata = new PropertyMetadata('resetAll');
  Object.defineProperty(RobotBase.prototype, 'resetAll', {
    get: function () {
      return this.resetAll_ljac8g$_0.getValue_lrcp0p$(this, RobotBase$resetAll_metadata);
    }
  });
  Object.defineProperty(RobotBase.prototype, 'maxVelocityPerFrame', {
    get: function () {
      return this.maxVelocity * 16 / 1000;
    }
  });
  Object.defineProperty(RobotBase.prototype, 'halfWidth_5frg69$_0', {
    get: function () {
      return this.robotWidth / 2;
    }
  });
  Object.defineProperty(RobotBase.prototype, 'halfLength_ndnnm1$_0', {
    get: function () {
      return this.robotLength / 2;
    }
  });
  Object.defineProperty(RobotBase.prototype, 'corners_rb1qac$_0', {
    get: function () {
      return listOf([xy(this.halfWidth_5frg69$_0, this.halfLength_ndnnm1$_0), xy(this.halfWidth_5frg69$_0, -this.halfLength_ndnnm1$_0), xy(-this.halfWidth_5frg69$_0, -this.halfLength_ndnnm1$_0), xy(-this.halfWidth_5frg69$_0, this.halfLength_ndnnm1$_0)]);
    }
  });
  function RobotBase$get_RobotBase$body$lambda(this$RobotBase) {
    return function ($receiver) {
      for (var i = 0; i < 3; i++) {
        line($receiver, this$RobotBase.corners_rb1qac$_0.get_za3lpa$(i), this$RobotBase.corners_rb1qac$_0.get_za3lpa$(i + 1 | 0));
      }
      line($receiver, this$RobotBase.corners_rb1qac$_0.get_za3lpa$(0), this$RobotBase.corners_rb1qac$_0.get_za3lpa$(3), void 0, Color$Companion_getInstance().green);
      var $receiver_0 = this$RobotBase.wheels_mzrdcm$_0;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var this$RobotBase_0 = this$RobotBase;
        var rx = element.component1()
        , ry = element.component2()
        , vector = element.component3();
        var tmp$_0 = xy(this$RobotBase_0.robotWidth * rx, this$RobotBase_0.robotLength * ry);
        var $receiver_1 = vector.magnitude;
        arrow_0($receiver, tmp$_0, vec(100.0 * Math_0.sign($receiver_1), vector.bearing - this$RobotBase_0.bearing), 5.0, 25.0, 45.0 / 360.0 * math.PI, vector.magnitude > 0 ? Color$Companion_getInstance().blue : Color$Companion_getInstance().red);
      }
      return Unit;
    };
  }
  Object.defineProperty(RobotBase.prototype, 'body_72fakg$_0', {
    get: function () {
      return body(RobotBase$get_RobotBase$body$lambda(this));
    }
  });
  RobotBase.prototype.loop = function () {
    var tmp$;
    var vectors = this.update();
    if (vectors.length !== this.numberOfWheels) {
      println('Number of wheels error. Vector size: ' + vectors.length + '. Number of wheels: ' + this.numberOfWheels);
    }
     else {
      tmp$ = this.numberOfWheels;
      for (var i = 0; i < tmp$; i++) {
        this.wheels_mzrdcm$_0[i].vector = vectors[i];
      }
    }
    render(simulator, this.body_72fakg$_0, this.pos, this.bearing);
  };
  function RobotBase$resetAll$lambda(this$RobotBase) {
    return function () {
      this$RobotBase.pos = xy(0.0, 0.0);
      this$RobotBase.bearing = 0.0;
      RangeSetting$Companion_getInstance().reset_12czou$(getPropertyCallableRef('maxVelocity', 0, function ($receiver) {
        return $receiver.maxVelocity;
      }.bind(null, this$RobotBase)));
      RangeSetting$Companion_getInstance().reset_12czou$(getPropertyCallableRef('robotWidth', 0, function ($receiver) {
        return $receiver.robotWidth;
      }.bind(null, this$RobotBase)));
      RangeSetting$Companion_getInstance().reset_12czou$(getPropertyCallableRef('robotLength', 0, function ($receiver) {
        return $receiver.robotLength;
      }.bind(null, this$RobotBase)));
      return Unit;
    };
  }
  RobotBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RobotBase',
    interfaces: [Loopable]
  };
  function TankDriveRobot() {
    RobotBase.call(this, [new Wheel(-0.5, 0.0), new Wheel(0.5, 0.0)]);
  }
  TankDriveRobot.prototype.update = function () {
    var x = -controls.z;
    var y = controls.y;
    var v = (1 - Math_0.abs(x)) * y + y;
    var w = (1 - Math_0.abs(y)) * x + x;
    var l = (v - w) / 2 * this.maxVelocityPerFrame;
    var r = (v + w) / 2 * this.maxVelocityPerFrame;
    var s = (l + r) / 2;
    var theta = (l - r) / this.robotWidth;
    var tmp$ = this.pos;
    var tmp$_0 = this.pos.x;
    var x_0 = this.bearing;
    tmp$.x = tmp$_0 + s * Math_0.sin(x_0);
    var tmp$_1 = this.pos;
    var tmp$_2 = this.pos.y;
    var x_1 = this.bearing;
    tmp$_1.y = tmp$_2 + s * Math_0.cos(x_1);
    this.bearing = this.bearing + theta;
    return [vec(l, this.bearing), vec(r, this.bearing)];
  };
  TankDriveRobot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TankDriveRobot',
    interfaces: [RobotBase]
  };
  function ButtonSetting(onClick) {
    Setting.call(this);
    this.onClick = onClick;
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
  function ButtonSetting$provideDelegate$lambda$lambda(closure$camelCase) {
    return function ($receiver) {
      set_id($receiver, closure$camelCase + 'Button');
      return Unit;
    };
  }
  function ButtonSetting$provideDelegate$lambda(closure$camelCase) {
    return function ($receiver) {
      br($receiver);
      input($receiver, InputType.button, void 0, void 0, void 0, 'buttonInput', ButtonSetting$provideDelegate$lambda$lambda(closure$camelCase));
      return Unit;
    };
  }
  function ButtonSetting$provideDelegate$lambda$lambda_0(this$ButtonSetting) {
    return function (it) {
      this$ButtonSetting.onClick();
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
    append(ensureNotNull(ensureNotNull(ensureNotNull(document.body).getElementsByClassName('main')[0]).getElementsByClassName('settings')[0]), ButtonSetting$provideDelegate$lambda(camelCase));
    var buttonInput = Kotlin.isType(tmp$ = document.getElementById(camelCase + 'Button'), HTMLInputElement) ? tmp$ : throwCCE();
    buttonInput.value = titleCase;
    buttonInput.addEventListener('click', ButtonSetting$provideDelegate$lambda$lambda_0(this));
    return Setting.prototype.provideDelegate_n5byny$.call(this, thisRef, property);
  };
  ButtonSetting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonSetting',
    interfaces: [Setting]
  };
  function RangeSetting(initialValue, min, max) {
    RangeSetting$Companion_getInstance();
    Setting.call(this);
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
  function RangeSetting$provideDelegate$lambda$lambda(closure$titleCase) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$titleCase);
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_0(closure$camelCase) {
    return function ($receiver) {
      set_id($receiver, closure$camelCase + 'Range');
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_1(closure$camelCase) {
    return function ($receiver) {
      set_id($receiver, closure$camelCase + 'Text');
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_2(closure$camelCase) {
    return function ($receiver) {
      set_id($receiver, closure$camelCase + 'Button');
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda(closure$titleCase, closure$camelCase) {
    return function ($receiver) {
      div($receiver, void 0, RangeSetting$provideDelegate$lambda$lambda(closure$titleCase));
      input($receiver, InputType.range, void 0, void 0, void 0, 'rangeInput', RangeSetting$provideDelegate$lambda$lambda_0(closure$camelCase));
      input($receiver, void 0, void 0, void 0, void 0, 'textInput', RangeSetting$provideDelegate$lambda$lambda_1(closure$camelCase));
      input($receiver, InputType.button, void 0, void 0, void 0, 'buttonInput', RangeSetting$provideDelegate$lambda$lambda_2(closure$camelCase));
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_3(this$, closure$textInput, this$RangeSetting) {
    return function (it) {
      closure$textInput.value = this$.value;
      this$RangeSetting.value = toDouble(this$.value);
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_4(this$, closure$rangeInput, this$RangeSetting) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (equals((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).key, 'Enter')) {
        tmp$_1 = this$RangeSetting;
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
  function RangeSetting$provideDelegate$lambda$lambda_5(this$RangeSetting, closure$rangeInput, closure$textInput) {
    return function (it) {
      this$RangeSetting.value = this$RangeSetting.initialValue;
      closure$rangeInput.value = this$RangeSetting.initialValue.toString();
      closure$textInput.value = this$RangeSetting.initialValue.toString();
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
    append(ensureNotNull(ensureNotNull(ensureNotNull(document.body).getElementsByClassName('main')[0]).getElementsByClassName('settings')[0]), RangeSetting$provideDelegate$lambda(titleCase, camelCase));
    var rangeInput = Kotlin.isType(tmp$ = document.getElementById(camelCase + 'Range'), HTMLInputElement) ? tmp$ : throwCCE();
    var textInput = Kotlin.isType(tmp$_0 = document.getElementById(camelCase + 'Text'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var buttonInput = Kotlin.isType(tmp$_1 = document.getElementById(camelCase + 'Button'), HTMLInputElement) ? tmp$_1 : throwCCE();
    rangeInput.min = this.min.toString();
    rangeInput.max = this.max.toString();
    rangeInput.value = this.initialValue.toString();
    rangeInput.value;
    rangeInput.addEventListener('input', RangeSetting$provideDelegate$lambda$lambda_3(rangeInput, textInput, this));
    textInput.value = this.initialValue.toString();
    textInput.addEventListener('keydown', RangeSetting$provideDelegate$lambda$lambda_4(textInput, rangeInput, this));
    buttonInput.value = 'Reset';
    buttonInput.addEventListener('click', RangeSetting$provideDelegate$lambda$lambda_5(this, rangeInput, textInput));
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
  RangeSetting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeSetting',
    interfaces: [Setting]
  };
  function Setting() {
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
  }
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
  var package$robots = _.robots || (_.robots = {});
  package$robots.RobotBase = RobotBase;
  package$robots.TankDriveRobot = TankDriveRobot;
  var package$settings = _.settings || (_.settings = {});
  package$settings.ButtonSetting = ButtonSetting;
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
  package$util.xy_38ydlf$ = xy;
  package$util.Point = Point;
  package$util.vec_38ydlf$ = vec;
  package$util.Vector = Vector;
  package$util.Wheel = Wheel;
  period = 16;
  robot = new TankDriveRobot();
  controls = new KeyboardControl();
  var tmp$, tmp$_0;
  var $receiver = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = document.getElementById('simulatorCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE()).getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
  cartesian($receiver);
  simulator = $receiver;
  main();
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin, this['kotlinx-html-js']);
