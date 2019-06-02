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
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Math_0 = Math;
  var throwUPAE = Kotlin.throwUPAE;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_mm0abt$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var equals = Kotlin.equals;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  KeyboardControl.prototype = Object.create(Control.prototype);
  KeyboardControl.prototype.constructor = KeyboardControl;
  TankDriveRobot.prototype = Object.create(Robot.prototype);
  TankDriveRobot.prototype.constructor = TankDriveRobot;
  RangeSetting.prototype = Object.create(Setting.prototype);
  RangeSetting.prototype.constructor = RangeSetting;
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
  function Control() {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
  }
  Control.prototype.toString = function () {
    return 'X: ' + this.x + ' | Y: ' + this.y + ' | Z: ' + this.z;
  };
  Control.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Control',
    interfaces: [Loopable]
  };
  function KeyboardControl() {
    KeyboardControl$Companion_getInstance();
    Control.call(this);
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
      this.x = this.x - 1.0;
    if (this.isPressed_0(68))
      this.x = this.x + 1.0;
    if (this.isPressed_0(83))
      this.y = this.y - 1.0;
    if (this.isPressed_0(87))
      this.y = this.y + 1.0;
    if (this.isPressed_0(37))
      this.z = this.z - 1.0;
    if (this.isPressed_0(39))
      this.z = this.z + 1.0;
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
    interfaces: [Control]
  };
  function Robot(context, settings) {
    this.context_z3vui4$_0 = context;
    this.settings_91ra5q$_0 = settings;
    this.pos = xy(0.0, 0.0);
    this.bearing = 0.0;
    this.draw_sy5tpp$_0 = Robot$draw$lambda(this);
  }
  Object.defineProperty(Robot.prototype, 'maxVelocityPerFrame', {
    get: function () {
      return this.settings_91ra5q$_0.maxVelocity * 16 / 1000;
    }
  });
  Object.defineProperty(Robot.prototype, 'draw', {
    get: function () {
      return this.draw_sy5tpp$_0;
    }
  });
  Robot.prototype.loop = function () {
    this.update();
    drawComponent(this.context_z3vui4$_0, this.draw, this.pos, this.bearing);
  };
  function Robot$draw$lambda(this$Robot) {
    return function ($receiver) {
      var halfWidth = this$Robot.settings_91ra5q$_0.robotWidth / 2;
      var halfLength = this$Robot.settings_91ra5q$_0.robotLength / 2;
      var corners = [xy(halfWidth, halfLength), xy(halfWidth, -halfLength), xy(-halfWidth, -halfLength), xy(-halfWidth, halfLength)];
      $receiver.lineWidth = 5.0;
      $receiver.strokeStyle = '#000000';
      strokeConnectedLines($receiver, corners.slice());
      $receiver.strokeStyle = '#0000ff';
      strokeLines($receiver, [to(corners[0], corners[3])]);
    };
  }
  Robot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Robot',
    interfaces: [Component]
  };
  function TankDriveRobot(context, controls, settings) {
    Robot.call(this, context, settings);
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
    var theta = (l - r) / this.settings_0.robotWidth;
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
    interfaces: [Robot]
  };
  function RangeSetting(initialValue, min, max) {
    Setting.call(this);
    this.initialValue = initialValue;
    this.min = min;
    this.max = max;
    this.name_cxpugv$_0 = this.name_cxpugv$_0;
    this.camelCase_lsst4s$_0 = this.camelCase_lsst4s$_0;
    this.value_ld2e87$_0 = this.initialValue;
  }
  Object.defineProperty(RangeSetting.prototype, 'name_0', {
    get: function () {
      if (this.name_cxpugv$_0 == null)
        return throwUPAE('name');
      return this.name_cxpugv$_0;
    },
    set: function (name) {
      this.name_cxpugv$_0 = name;
    }
  });
  Object.defineProperty(RangeSetting.prototype, 'camelCase_0', {
    get: function () {
      if (this.camelCase_lsst4s$_0 == null)
        return throwUPAE('camelCase');
      return this.camelCase_lsst4s$_0;
    },
    set: function (camelCase) {
      this.camelCase_lsst4s$_0 = camelCase;
    }
  });
  Object.defineProperty(RangeSetting.prototype, 'value', {
    get: function () {
      return this.value_ld2e87$_0;
    },
    set: function (value) {
      this.value_ld2e87$_0 = value;
    }
  });
  function RangeSetting$provideDelegate$lambda$lambda(this$RangeSetting) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$RangeSetting.name_0);
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_0(this$RangeSetting) {
    return function ($receiver) {
      set_id($receiver, this$RangeSetting.camelCase_0 + 'Range');
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_1(this$RangeSetting) {
    return function ($receiver) {
      set_id($receiver, this$RangeSetting.camelCase_0 + 'Text');
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda$lambda_2(this$RangeSetting) {
    return function ($receiver) {
      set_id($receiver, this$RangeSetting.camelCase_0 + 'Button');
      return Unit;
    };
  }
  function RangeSetting$provideDelegate$lambda(this$RangeSetting) {
    return function ($receiver) {
      div($receiver, void 0, RangeSetting$provideDelegate$lambda$lambda(this$RangeSetting));
      input($receiver, InputType.range, void 0, void 0, void 0, 'rangeInput', RangeSetting$provideDelegate$lambda$lambda_0(this$RangeSetting));
      input($receiver, void 0, void 0, void 0, void 0, 'textInput', RangeSetting$provideDelegate$lambda$lambda_1(this$RangeSetting));
      input($receiver, InputType.button, void 0, void 0, void 0, 'buttonInput', RangeSetting$provideDelegate$lambda$lambda_2(this$RangeSetting));
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
    this.camelCase_0 = property.callableName;
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
    this.name_0 = replace_20wsma$result;
    append(ensureNotNull(ensureNotNull(ensureNotNull(document.body).getElementsByClassName('main')[0]).getElementsByClassName('settings')[0]), RangeSetting$provideDelegate$lambda(this));
    var rangeInput = Kotlin.isType(tmp$ = document.getElementById(this.camelCase_0 + 'Range'), HTMLInputElement) ? tmp$ : throwCCE();
    var textInput = Kotlin.isType(tmp$_0 = document.getElementById(this.camelCase_0 + 'Text'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var buttonInput = Kotlin.isType(tmp$_1 = document.getElementById(this.camelCase_0 + 'Button'), HTMLInputElement) ? tmp$_1 : throwCCE();
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
  function Settings() {
    this.maxVelocity_uz92yh$_0 = (new RangeSetting(500.0, 0.0, 1000.0)).provideDelegate_n5byny$(this, Settings$maxVelocity_metadata);
    this.robotWidth_tlxszi$_0 = (new RangeSetting(50.0, 10.0, 200.0)).provideDelegate_n5byny$(this, Settings$robotWidth_metadata);
    this.robotLength_qnec1i$_0 = (new RangeSetting(50.0, 10.0, 200.0)).provideDelegate_n5byny$(this, Settings$robotLength_metadata);
  }
  var Settings$maxVelocity_metadata = new PropertyMetadata('maxVelocity');
  Object.defineProperty(Settings.prototype, 'maxVelocity', {
    get: function () {
      return this.maxVelocity_uz92yh$_0.getValue_lrcp0p$(this, Settings$maxVelocity_metadata);
    }
  });
  var Settings$robotWidth_metadata = new PropertyMetadata('robotWidth');
  Object.defineProperty(Settings.prototype, 'robotWidth', {
    get: function () {
      return this.robotWidth_tlxszi$_0.getValue_lrcp0p$(this, Settings$robotWidth_metadata);
    }
  });
  var Settings$robotLength_metadata = new PropertyMetadata('robotLength');
  Object.defineProperty(Settings.prototype, 'robotLength', {
    get: function () {
      return this.robotLength_qnec1i$_0.getValue_lrcp0p$(this, Settings$robotLength_metadata);
    }
  });
  Settings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Settings',
    interfaces: []
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
  var package$control = _.control || (_.control = {});
  package$control.Control = Control;
  Object.defineProperty(KeyboardControl, 'Companion', {
    get: KeyboardControl$Companion_getInstance
  });
  package$control.KeyboardControl = KeyboardControl;
  var package$robots = _.robots || (_.robots = {});
  package$robots.Robot = Robot;
  package$robots.TankDriveRobot = TankDriveRobot;
  var package$settings = _.settings || (_.settings = {});
  package$settings.RangeSetting = RangeSetting;
  package$settings.Setting = Setting;
  package$settings.Settings = Settings;
  var package$util = _.util || (_.util = {});
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
  period = 16;
  var tmp$;
  simulatorCanvas = Kotlin.isType(tmp$ = document.getElementById('simulatorCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
  main();
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin, this['kotlinx-html-js']);
