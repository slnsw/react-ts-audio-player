(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var checkPropTypes = require_checkPropTypes();
          var ReactVersion = "16.14.0";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            current: null
          };
          var ReactCurrentBatchConfig = {
            suspense: null
          };
          var ReactCurrentOwner = {
            current: null
          };
          var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
          function describeComponentFrame(name, source, ownerName) {
            var sourceInfo = "";
            if (source) {
              var path = source.fileName;
              var fileName = path.replace(BEFORE_SLASH_RE, "");
              {
                if (/^index\./.test(fileName)) {
                  var match = path.match(BEFORE_SLASH_RE);
                  if (match) {
                    var pathBeforeSlash = match[1];
                    if (pathBeforeSlash) {
                      var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                      fileName = folderName + "/" + fileName;
                    }
                  }
                }
              }
              sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
            } else if (ownerName) {
              sourceInfo = " (created by " + ownerName + ")";
            }
            return "\n    in " + (name || "Unknown") + sourceInfo;
          }
          var Resolved = 1;
          function refineResolvedLazyComponent(lazyComponent) {
            return lazyComponent._status === Resolved ? lazyComponent._result : null;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  return "Context.Consumer";
                case REACT_PROVIDER_TYPE:
                  return "Context.Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type.render);
                case REACT_LAZY_TYPE: {
                  var thenable = type;
                  var resolvedThenable = refineResolvedLazyComponent(thenable);
                  if (resolvedThenable) {
                    return getComponentName(resolvedThenable);
                  }
                  break;
                }
              }
            }
            return null;
          }
          var ReactDebugCurrentFrame = {};
          var currentlyValidatingElement = null;
          function setCurrentlyValidatingElement(element) {
            {
              currentlyValidatingElement = element;
            }
          }
          {
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentlyValidatingElement) {
                var name = getComponentName(currentlyValidatingElement.type);
                var owner = currentlyValidatingElement._owner;
                stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            assign: _assign
          };
          {
            _assign(ReactSharedInternals, {
              ReactDebugCurrentFrame,
              ReactComponentTreeHook: {}
            });
          }
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
              if (!hasExistingStack) {
                var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame2.getStackAddendum();
                if (stack !== "") {
                  format += "%s";
                  args = args.concat([stack]);
                }
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
              try {
                var argIndex = 0;
                var message = "Warning: " + format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
                throw new Error(message);
              } catch (x) {
              }
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
              return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = ("" + key).replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
          }
          var POOL_SIZE = 10;
          var traverseContextPool = [];
          function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
            if (traverseContextPool.length) {
              var traverseContext = traverseContextPool.pop();
              traverseContext.result = mapResult;
              traverseContext.keyPrefix = keyPrefix;
              traverseContext.func = mapFunction;
              traverseContext.context = mapContext;
              traverseContext.count = 0;
              return traverseContext;
            } else {
              return {
                result: mapResult,
                keyPrefix,
                func: mapFunction,
                context: mapContext,
                count: 0
              };
            }
          }
          function releaseTraverseContext(traverseContext) {
            traverseContext.result = null;
            traverseContext.keyPrefix = null;
            traverseContext.func = null;
            traverseContext.context = null;
            traverseContext.count = 0;
            if (traverseContextPool.length < POOL_SIZE) {
              traverseContextPool.push(traverseContext);
            }
          }
          function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              callback(traverseContext, children, nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getComponentKey(child, i);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                {
                  if (iteratorFn === children.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(children);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getComponentKey(child, ii++);
                  subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                }
              } else if (type === "object") {
                var addendum = "";
                {
                  addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
                }
                var childrenString = "" + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                  }
                }
              }
            }
            return subtreeCount;
          }
          function traverseAllChildren(children, callback, traverseContext) {
            if (children == null) {
              return 0;
            }
            return traverseAllChildrenImpl(children, "", callback, traverseContext);
          }
          function getComponentKey(component, index) {
            if (typeof component === "object" && component !== null && component.key != null) {
              return escape(component.key);
            }
            return index.toString(36);
          }
          function forEachSingleChild(bookKeeping, child, name) {
            var func = bookKeeping.func, context = bookKeeping.context;
            func.call(context, child, bookKeeping.count++);
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            if (children == null) {
              return children;
            }
            var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
            traverseAllChildren(children, forEachSingleChild, traverseContext);
            releaseTraverseContext(traverseContext);
          }
          function mapSingleChildIntoContext(bookKeeping, child, childKey) {
            var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
            var mappedChild = func.call(context, child, bookKeeping.count++);
            if (Array.isArray(mappedChild)) {
              mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey);
              }
              result.push(mappedChild);
            }
          }
          function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
            var escapedPrefix = "";
            if (prefix != null) {
              escapedPrefix = escapeUserProvidedKey(prefix) + "/";
            }
            var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
            traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
            releaseTraverseContext(traverseContext);
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            mapIntoWithKeyPrefixInternal(children, result, null, func, context);
            return result;
          }
          function countChildren(children) {
            return traverseAllChildren(children, function() {
              return null;
            }, null);
          }
          function toArray(children) {
            var result = [];
            mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
              return child;
            });
            return result;
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children;
          }
          function createContext(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          function lazy(ctor) {
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _ctor: ctor,
              _status: -1,
              _result: null
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            return {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
          }
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            return {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement(element);
            {
              error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
            }
            setCurrentlyValidatingElement(null);
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var name = getComponentName(type);
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                setCurrentlyValidatingElement(element);
                checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
                setCurrentlyValidatingElement(null);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              setCurrentlyValidatingElement(fragment);
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  break;
                }
              }
              if (fragment.ref !== null) {
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
              }
              setCurrentlyValidatingElement(null);
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
              var testSet = /* @__PURE__ */ new Set([frozenObject]);
              testMap.set(0, 0);
              testSet.add(0);
            } catch (e) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/debounce/index.js
  var require_debounce = __commonJS({
    "node_modules/debounce/index.js"(exports, module) {
      function debounce2(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        if (wait == null)
          wait = 100;
        function later() {
          var last = Date.now() - timestamp;
          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
              context = args = null;
            }
          }
        }
        ;
        var debounced = function() {
          context = this;
          args = arguments;
          timestamp = Date.now();
          var callNow = immediate && !timeout;
          if (!timeout)
            timeout = setTimeout(later, wait);
          if (callNow) {
            result = func.apply(context, args);
            context = args = null;
          }
          return result;
        };
        debounced.clear = function() {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
        };
        debounced.flush = function() {
          if (timeout) {
            result = func.apply(context, args);
            context = args = null;
            clearTimeout(timeout);
            timeout = null;
          }
        };
        return debounced;
      }
      debounce2.debounce = debounce2;
      module.exports = debounce2;
    }
  });

  // src/AudioPlayer.tsx
  var import_react10 = __toESM(require_react());

  // src/ActionButton.tsx
  var import_react2 = __toESM(require_react());

  // src/SrOnly.tsx
  var import_react = __toESM(require_react());

  // src/Util/CollapseArrayProperty.ts
  var collapseArrayProperty = (prop = [], delimiter = " ") => {
    if (!Array.isArray(prop)) {
      prop = [prop];
    }
    return prop.join(delimiter);
  };
  var CollapseArrayProperty_default = collapseArrayProperty;

  // src/SrOnly.tsx
  var SrOnly = ({ config = {}, children }) => {
    const classNames = [].concat(CollapseArrayProperty_default(config?.classNames?.["sr-only"]));
    return /* @__PURE__ */ import_react.default.createElement("span", {
      className: classNames.join(" ")
    }, children);
  };
  var SrOnly_default = SrOnly;

  // src/Util/CssClasses.ts
  var CssClasses = (defaultClassName, optionalClassName = "", suffix = "", states = []) => {
    const classes = [].concat(defaultClassName.split(/\s+/)).concat(optionalClassName.split(/\s+/)).filter((c) => c && c.length).map((c) => suffix.length ? `${c}__${suffix}` : c);
    return classes.reduce((agg, className) => agg.concat([""].concat(states.filter((s) => s && s.length)).map((state) => `${className}${state.length ? `--${state}` : ""}`)), []).join(" ");
  };
  var CssClasses_default = CssClasses;

  // src/ActionButton.tsx
  var ActionButton = ({
    enabled = true,
    hidden = false,
    btnType,
    onClick,
    children,
    className,
    config = {}
  }) => {
    const defaultClassName = CollapseArrayProperty_default(config?.classNames?.[btnType]);
    const iconClassNames = CollapseArrayProperty_default(config?.icons?.[btnType]);
    const iconElem = config?.iconElements?.[btnType] || null;
    return /* @__PURE__ */ import_react2.default.createElement("button", {
      className: CssClasses_default(defaultClassName, className || ""),
      disabled: !enabled,
      hidden,
      onClick
    }, /* @__PURE__ */ import_react2.default.createElement(SrOnly_default, {
      config
    }, children), !iconElem && /* @__PURE__ */ import_react2.default.createElement("span", {
      className: CssClasses_default(iconClassNames, "")
    }), iconElem);
  };
  var ActionButton_default = ActionButton;

  // src/ScrubBar.tsx
  var import_react3 = __toESM(require_react());
  var import_debounce = __toESM(require_debounce());

  // src/Util/Numbers.ts
  var clampNumber = (num, min, max) => Math.max(min, Math.min(max, num));

  // src/ScrubBar.tsx
  var getOffsetXNative = (e, container) => {
    let offsetX = 0;
    const rect = container.getBoundingClientRect();
    if (e.type === "mousemove") {
      offsetX = e.pageX - rect.left;
    }
    if (e.type === "touchmove") {
      offsetX = e.targetTouches[0].pageX - rect.left;
    }
    return offsetX;
  };
  var getOffsetX = (e) => {
    if (typeof e.nativeEvent.offsetX === "number") {
      return e.nativeEvent.offsetX;
    }
    if (typeof e.targetTouches === "object") {
      const touchE = e;
      const rect = touchE.target.getBoundingClientRect();
      return touchE.targetTouches[0].pageX - rect.left;
    }
    return 0;
  };
  var ON_CLICK_DEBOUNCE = 250;
  var ScrubBarTooltip = ({
    title,
    className,
    style = {}
  }) => {
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      style,
      className: className || ""
    }, title);
  };
  var ScrubBarTooltipOuter = ({
    wrapperClassName,
    tooltipClassName,
    valueToTooltipString = () => "",
    defaultValue = 0,
    show = false
  }) => {
    const outer = import_react3.default.useRef(null);
    const [value, setValue] = import_react3.default.useState(defaultValue);
    const outerWidth = outer.current ? outer.current.clientWidth : 0;
    const content = valueToTooltipString(value) || "";
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      ref: outer,
      onMouseMove: (e) => {
        setValue(getOffsetX(e) / outerWidth);
      },
      className: wrapperClassName
    }, show && content.length > 0 && /* @__PURE__ */ import_react3.default.createElement(ScrubBarTooltip, {
      title: valueToTooltipString(value),
      className: tooltipClassName,
      style: {
        left: `${outerWidth * value}px`
      }
    }));
  };
  var ScrubBar = ({
    defaultValue = 0,
    useTooltip = false,
    useRange = false,
    useProgress = false,
    valueToTooltipString = () => "",
    id,
    className,
    label,
    onClick
  }) => {
    const outer = import_react3.default.useRef(null);
    const scrubbing = import_react3.default.useRef(false);
    const [hover, setHover] = import_react3.default.useState(false);
    const [value, setValue] = import_react3.default.useState(clampNumber(defaultValue, 0, 1));
    const [offsetX, setOffsetX] = import_react3.default.useState(0);
    const [lastUpdate, setLastUpdate] = import_react3.default.useState(0);
    const derivedId = id || "scrub-bar";
    const debouncedOnClick = typeof onClick === "function" ? (0, import_debounce.default)(onClick, ON_CLICK_DEBOUNCE) : () => {
    };
    const onDown = (e) => {
      scrubbing.current = true;
      setOffsetX(getOffsetX(e));
    };
    const onUp = () => {
      if (scrubbing.current) {
        scrubbing.current = false;
        setLastUpdate(new Date().getTime());
      }
    };
    const onMouseMove = (e) => {
      if (scrubbing.current) {
        setOffsetX(getOffsetXNative(e, outer.current));
      }
    };
    const onTouchMove = (e) => {
      if (scrubbing.current) {
        setOffsetX(getOffsetXNative(e, outer.current));
      }
    };
    import_react3.default.useEffect(() => {
      document.addEventListener("mousemove", onMouseMove, false);
      document.addEventListener("touchmove", onTouchMove, false);
      document.addEventListener("mouseup", onUp, false);
      document.addEventListener("touchend", onUp, false);
      return () => {
        document.removeEventListener("mousemove", onMouseMove, false);
        document.removeEventListener("touchmove", onTouchMove, false);
        document.removeEventListener("mouseup", onUp, false);
        document.removeEventListener("touchend", onUp, false);
      };
    }, []);
    import_react3.default.useEffect(() => {
      setValue(clampNumber(defaultValue, 0, 100));
    }, [defaultValue]);
    import_react3.default.useEffect(() => {
      if (scrubbing.current) {
        const pos = clampNumber(offsetX / outer.current.clientWidth, 0, 1);
        setValue(pos * 100);
        debouncedOnClick(pos);
      }
    }, [lastUpdate, offsetX]);
    return /* @__PURE__ */ import_react3.default.createElement("div", {
      className: CssClasses_default(className || "", "", "", [
        scrubbing.current ? "scrubbing" : ""
      ]),
      onMouseOver: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onMouseDown: useRange ? () => {
      } : onDown,
      onTouchStart: useRange ? () => {
      } : onDown,
      ref: outer
    }, useTooltip && /* @__PURE__ */ import_react3.default.createElement(ScrubBarTooltipOuter, {
      wrapperClassName: `${className}__wraptooltip`,
      tooltipClassName: `${className}__tooltip`,
      show: hover || scrubbing.current,
      valueToTooltipString,
      defaultValue: value
    }), (useProgress || useRange) && /* @__PURE__ */ import_react3.default.createElement("label", {
      htmlFor: useRange ? `${derivedId}__scrubrange` : `${derivedId}__progress`
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "sr-only"
    }, label || "", `${value} percent`), useProgress && /* @__PURE__ */ import_react3.default.createElement("progress", {
      max: "100",
      value,
      className: `${className}__progress`,
      id: `${derivedId}__progress`
    }), useRange && /* @__PURE__ */ import_react3.default.createElement("input", {
      className: `${className}__scrubrange`,
      id: `${derivedId}__scrubrange`,
      type: "range",
      min: "0",
      max: "100",
      value,
      onMouseDown: onDown,
      onTouchStart: onDown,
      onChange: (e) => {
        setOffsetX(parseFloat(e.currentTarget.value) / 100 * outer.current.clientWidth);
      }
    })), !useRange && /* @__PURE__ */ import_react3.default.createElement("div", {
      className: [`${className}__fill`].join(" "),
      style: { width: `${value}%` }
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "sr-only"
    }, label || "", `${value} percent`)));
  };
  var ScrubBar_default = ScrubBar;

  // src/SubtitleContainer.tsx
  var import_react4 = __toESM(require_react());
  var memoiseTrack = (track) => {
    if (!track) {
      return "";
    }
    const { kind, mode, language, cues } = track;
    return [kind, mode, language, cues.length].join(",");
  };
  var SubtitleContainer = ({
    visible = true,
    lang,
    tracks = [],
    id,
    className
  }) => {
    const [text, setText] = import_react4.default.useState("");
    const [currentTrack, setCurrentTrack] = import_react4.default.useState(null);
    const cueChange = (e) => {
      const { activeCues } = e.target;
      let newText = "";
      let cue;
      let i;
      for (i = 0; i < activeCues.length; i += 1) {
        cue = activeCues[i];
        const cueAny = cue;
        if (typeof cueAny.text !== "undefined") {
          newText += cueAny.text;
        }
      }
      setText(newText);
    };
    import_react4.default.useEffect(() => {
      if (currentTrack) {
        currentTrack.addEventListener("cuechange", cueChange, false);
      }
      return () => {
        if (currentTrack) {
          currentTrack.removeEventListener("cuechange", cueChange, false);
        }
      };
    }, [memoiseTrack(currentTrack)]);
    import_react4.default.useEffect(() => {
      if (lang && lang.length && tracks && tracks.length) {
        let track = null;
        let i;
        for (i = 0; i < tracks.length; i += 1) {
          if (tracks[i].language === lang) {
            track = tracks[i];
            break;
          }
        }
        setCurrentTrack(track);
      }
    }, [lang, tracks]);
    return /* @__PURE__ */ import_react4.default.createElement("div", {
      className: [className || "", "video-wrapper__subtitle-container"].join(" "),
      hidden: !visible,
      "aria-hidden": !visible,
      lang,
      id,
      "aria-atomic": "true",
      "aria-live": "polite",
      "aria-relevant": "additions text"
    }, visible ? text : " ");
  };
  var SubtitleContainer_default = SubtitleContainer;

  // src/SubtitleMenu.tsx
  var import_react7 = __toESM(require_react());

  // src/Menu.tsx
  var import_react5 = __toESM(require_react());
  var Menu = ({
    id,
    visible = false,
    className,
    children
  }) => {
    return /* @__PURE__ */ import_react5.default.createElement("ol", {
      className: ["video-wrapper__popup-menu", className || ""].join(" "),
      id,
      hidden: !visible,
      "aria-expanded": visible
    }, children);
  };
  var Menu_default = Menu;

  // src/MenuItem.tsx
  var import_react6 = __toESM(require_react());
  var MenuItem = ({
    label,
    value,
    selected = false,
    onSelect
  }) => {
    return /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement("button", {
      "data-value": value,
      "data-state": selected ? "active" : "inactive",
      onClick: onSelect,
      onKeyUp: (e) => {
        if (e.key === "Enter") {
          onSelect(e);
        }
      }
    }, label));
  };
  var MenuItem_default = MenuItem;

  // src/SubtitleMenu.tsx
  var SubtitleMenu = ({
    visible = false,
    id,
    tracks,
    selected,
    onSelect,
    className
  }) => {
    const onSelectLang = (e) => {
      const itemElem = e.target;
      const selectedLang = itemElem.getAttribute("data-value") || null;
      if (typeof onSelect === "function") {
        onSelect(selectedLang);
      }
    };
    const languageOptions = [
      /* @__PURE__ */ import_react7.default.createElement(MenuItem_default, {
        key: "_none_",
        label: "Off",
        value: null,
        selected: !selected,
        onSelect: onSelectLang
      })
    ];
    let track;
    let i;
    if (tracks && tracks.length) {
      for (i = 0; i < tracks.length; i += 1) {
        track = tracks[i];
        languageOptions.push(/* @__PURE__ */ import_react7.default.createElement(MenuItem_default, {
          key: `${track.language}-${i}`,
          label: track.label,
          value: track.language,
          selected: selected && track.language === selected,
          onSelect: onSelectLang
        }));
      }
    }
    return /* @__PURE__ */ import_react7.default.createElement(Menu_default, {
      className: [className || "", "subtitles-menu"].join(" "),
      id,
      visible
    }, languageOptions);
  };
  var SubtitleMenu_default = SubtitleMenu;

  // src/ToggleButton.tsx
  var import_react8 = __toESM(require_react());
  var ToggleButton = ({
    enabled = true,
    hidden = false,
    btnType,
    toggleState = false,
    children,
    onClick,
    className,
    config = {}
  }) => {
    const defaultClassName = CollapseArrayProperty_default(config?.classNames?.[btnType]);
    const iconClassNamesFalse = CollapseArrayProperty_default(config?.icons?.[`${btnType}__false`]);
    const iconClassNamesTrue = CollapseArrayProperty_default(config?.icons?.[`${btnType}__true`]);
    const iconElemFalse = config?.iconElements?.[`${btnType}__false`] || null;
    const iconElemTrue = config?.iconElements?.[`${btnType}__true`] || null;
    return /* @__PURE__ */ import_react8.default.createElement("button", {
      className: CssClasses_default(defaultClassName, className || ""),
      disabled: !enabled,
      hidden,
      onClick
    }, /* @__PURE__ */ import_react8.default.createElement(SrOnly_default, {
      config
    }, children), !toggleState && !iconElemFalse && /* @__PURE__ */ import_react8.default.createElement("span", {
      className: CssClasses_default(iconClassNamesFalse)
    }), !toggleState && iconElemFalse, toggleState && !iconElemTrue && /* @__PURE__ */ import_react8.default.createElement("span", {
      className: CssClasses_default(iconClassNamesTrue)
    }), toggleState && iconElemTrue);
  };
  var ToggleButton_default = ToggleButton;

  // src/TracklistMenu.tsx
  var import_react9 = __toESM(require_react());
  var TracklistMenu = ({
    tracklist = [],
    selected = 0,
    visible = false,
    onSelect,
    id,
    className
  }) => {
    const onSelectTrack = (e) => {
      const itemElem = e.target;
      const indexAttr = itemElem.getAttribute("data-value") || null;
      if (indexAttr === null) {
        return;
      }
      const index = parseInt(indexAttr, 10);
      if (typeof onSelect === "function") {
        onSelect(index);
      }
    };
    const trackOptions = tracklist.map((track, index) => {
      return /* @__PURE__ */ import_react9.default.createElement(MenuItem_default, {
        key: index,
        label: track.label,
        value: index,
        selected: index === selected,
        onSelect: onSelectTrack
      });
    });
    return /* @__PURE__ */ import_react9.default.createElement(Menu_default, {
      className: [className || "", "track-menu"].join(" "),
      id,
      visible
    }, trackOptions);
  };
  var TracklistMenu_default = TracklistMenu;

  // src/Configs/FontAwesome5.ts
  var FontAwesome5_default = {
    classNames: {
      "sr-only": ["sr-only"],
      tracklist: ["btn", "btn-tracklist"],
      "previous-audio": ["btn", "btn-previous-audio"],
      backward: ["btn", "btn-backward"],
      play: ["btn", "btn-play"],
      reset: ["btn", "btn-reset"],
      forward: ["btn", "btn-forward"],
      "next-audio": ["btn", "btn-next-audio"],
      "closed-captioning": ["btn", "btn-closed-captioning"],
      mute: ["btn", "btn-mute"]
    },
    icons: {
      tracklist__false: ["fa", "fa-list-ol"],
      tracklist__true: ["fa", "fa-window-close"],
      "previous-audio": ["fa", "fa-step-backward"],
      backward: ["fa", "fa-backward"],
      play__false: ["fa", "fa-play"],
      play__true: ["fa", "fa-pause"],
      reset: ["fa", "fa-undo"],
      forward: ["fa", "fa-forward"],
      "next-audio": ["fa", "fa-step-forward"],
      "closed-captioning__false": ["fa", "fa-closed-captioning"],
      "closed-captioning__true": ["fa", "fa-window-close"],
      mute__false: ["fa", "fa-volume-up"],
      mute__true: ["fa", "fa-volume-off"]
    },
    iconElements: {
      tracklist__false: null,
      tracklist__true: null,
      "previous-audio": null,
      backward: null,
      play__false: null,
      play__true: null,
      reset: null,
      forward: null,
      "next-audio": null,
      "closed-captioning__false": null,
      "closed-captioning__true": null,
      mute__false: null,
      mute__true: null
    },
    useHoursInTimestamps: true,
    features: {
      showTracklist: true,
      showTrackNav: true,
      volumeControl: "mute",
      showFastForward: true,
      showRewind: true,
      showClosedCaptioning: true
    }
  };

  // src/Configs/Plain.ts
  var Plain_default = {
    classNames: {},
    icons: {},
    iconElements: {},
    fastForwardTime: 5,
    rewindTime: 5,
    useHoursInTimestamps: true,
    useTooltip: false,
    useRangeForScrubBar: false,
    useProgressForScrubBar: false,
    features: {
      showTracklist: false,
      showTrackNav: false,
      volumeControl: "hide",
      showFastForward: false,
      showRewind: false,
      showClosedCaptioning: false
    }
  };

  // src/TimeUtils.ts
  var strPadLeft = (n) => {
    if (n < 10) {
      return `0${n}`;
    }
    return n.toString();
  };
  var toHHMMSS = (str) => {
    const secNum = parseInt(str, 10);
    if (isNaN(secNum)) {
      return "";
    }
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - hours * 3600) / 60);
    const seconds = secNum - hours * 3600 - minutes * 60;
    return `${strPadLeft(hours)}:${strPadLeft(minutes)}:${strPadLeft(seconds)}`;
  };
  var toMMSS = (str) => {
    const secNum = parseInt(str, 10);
    if (isNaN(secNum)) {
      return "";
    }
    const minutes = Math.floor(secNum / 60);
    const seconds = secNum - minutes * 60;
    return `${strPadLeft(minutes)}:${strPadLeft(seconds)}`;
  };

  // src/AudioPlayer.tsx
  var AudioPlayer = ({
    playlist = [],
    id = "audio-player",
    className,
    eventRouter,
    crossOrigin,
    onEndNextFile = false,
    config = {},
    singleTrack = false,
    useRangeOnScrubBar = false,
    useProgressOnScrubBar = false,
    onLoad,
    onPlay,
    onPause,
    onEnd,
    onTimeUpdate
  }) => {
    const audioElem = import_react10.default.useRef(null);
    const timeElapsedElem = import_react10.default.useRef(null);
    const durationElem = import_react10.default.useRef(null);
    const [activeConfig, setActiveConfig] = import_react10.default.useState({});
    const [duration, setDuration] = import_react10.default.useState(0);
    const [timestamp, setTimestamp] = import_react10.default.useState(0);
    const [fileData, setFileData] = import_react10.default.useState([]);
    const [selectedFile, setSelectedFile] = import_react10.default.useState(0);
    const [progress, setProgress] = import_react10.default.useState(0);
    const [playing, setPlaying] = import_react10.default.useState(false);
    const [ended, setEnded] = import_react10.default.useState(false);
    const [muted, setMuted] = import_react10.default.useState(false);
    const [selectedLanguage, setSelectedLanguage] = import_react10.default.useState(null);
    const [showTrackListMenu, setShowTrackListMenu] = import_react10.default.useState(false);
    const [showSubtitleMenu, setShowSubtitleMenu] = import_react10.default.useState(false);
    const [videoMetadataLoaded, setVideoMetadataLoaded] = import_react10.default.useState(false);
    const captionsContainerId = `${id}__captions`;
    const timeIndicatorId = `${id}__time-indicator`;
    const durationIndicatorId = `${id}__duration-indicator`;
    const tracklistId = `${id}__track-list`;
    const subtitleMenuId = `${id}__subtitle-menu`;
    const { features = {} } = activeConfig;
    const getTimestampString = (seconds = 0, isDuration = false) => {
      if (typeof seconds !== "number") {
        return "";
      }
      if (activeConfig.useHoursInTimestamps && (isDuration && seconds >= 3600 || duration >= 3600)) {
        return toHHMMSS(seconds.toString());
      }
      return toMMSS(seconds.toString());
    };
    import_react10.default.useEffect(() => {
      audioElem.current.setAttribute("playsinline", "playsinline");
    }, []);
    import_react10.default.useEffect(() => {
      const newFeatures = {
        showTracklist: config.features.showTracklist || Plain_default.features.showTracklist,
        showTrackNav: config.features.showTrackNav || Plain_default.features.showTrackNav,
        volumeControl: config.features.volumeControl || Plain_default.features.volumeControl,
        showFastForward: config.features.showFastForward || Plain_default.features.showFastForward,
        showRewind: config.features.showRewind || Plain_default.features.showRewind,
        showClosedCaptioning: config.features.showClosedCaptioning || Plain_default.features.showClosedCaptioning
      };
      const newConfig = { ...Plain_default, ...config, features: newFeatures };
      setActiveConfig(newConfig);
    }, [config]);
    import_react10.default.useEffect(() => {
      setFileData(playlist);
      setSelectedFile(0);
    }, [playlist]);
    const canPlayPrev = selectedFile > 0;
    const canPlayNext = selectedFile < fileData.length - 1;
    import_react10.default.useEffect(() => {
      audioElem.current.load();
      audioElem.current.currentTime = 0;
      setProgress(0);
    }, [selectedFile]);
    const selectTrack = (trackNumber) => {
      setPlaying(false);
      setEnded(false);
      setVideoMetadataLoaded(false);
      setSelectedFile(trackNumber);
      if (typeof onLoad === "function") {
        onLoad({ fileData, selectedFile: trackNumber, duration });
      }
    };
    const hasVtt = (file) => {
      return file.transcriptUrl && file.transcriptUrl.length > 0;
    };
    const subtitleTracks = () => {
      if (!videoMetadataLoaded) {
        return [];
      }
      return audioElem.current.textTracks;
    };
    const playable = fileData && fileData.length && videoMetadataLoaded;
    const selectSubtitleLanguage = (lang) => {
      setShowSubtitleMenu(false);
      setSelectedLanguage(lang && lang.length ? lang : null);
    };
    const onLoadedMetadata = () => {
      setVideoMetadataLoaded(true);
      selectSubtitleLanguage(selectedLanguage);
      setDuration(audioElem.current.duration);
    };
    const internalOnTimeUpdate = () => {
      const currentTime = audioElem.current.currentTime;
      if (duration > 0) {
        const value = 100 / duration * currentTime;
        setProgress(value);
        setTimestamp(currentTime);
      }
      if (typeof onTimeUpdate === "function") {
        onTimeUpdate({ fileData, selectedFile, currentTime, duration });
      }
    };
    const playPauseAction = () => {
      if (!playable) {
        return;
      }
      let newPlaying = false;
      if (audioElem.current.paused) {
        audioElem.current.play();
        newPlaying = true;
      } else {
        audioElem.current.pause();
      }
      const currentTime = audioElem.current.currentTime;
      setPlaying(newPlaying);
      setTimestamp(currentTime);
      if (eventRouter) {
        eventRouter.emit("state.playing", newPlaying);
      }
      if (newPlaying) {
        if (typeof onPlay === "function") {
          onPlay({ fileData, selectedFile, currentTime, duration });
        }
      } else {
        if (typeof onPause === "function") {
          onPause({ fileData, selectedFile, currentTime, duration });
        }
      }
    };
    const nextTrackAction = () => {
      if (canPlayNext) {
        selectTrack(selectedFile + 1);
      }
    };
    const nextTrackAndPlayAction = () => {
      if (canPlayNext) {
        nextTrackAction();
        setTimeout(() => playPauseAction(), 500);
      }
    };
    const onEnded = () => {
      if (onEndNextFile) {
        nextTrackAndPlayAction();
        return;
      }
      setEnded(true);
      const currentTime = audioElem.current.currentTime;
      setTimestamp(currentTime);
      if (eventRouter) {
        eventRouter.emit("state.playing", false);
        eventRouter.emit("state.ended", true);
      }
      if (typeof onEnd === "function") {
        onEnd({ fileData, selectedFile, currentTime, duration });
      }
    };
    const moveBackwardAction = () => {
      if (!playable) {
        return;
      }
      audioElem.current.currentTime -= activeConfig.rewindTime || 5;
    };
    const moveForwardAction = () => {
      if (!playable) {
        return;
      }
      audioElem.current.currentTime += activeConfig.fastForwardTime || 5;
    };
    const rewindAction = () => {
      audioElem.current.currentTime = 0;
      setEnded(false);
      setTimestamp(audioElem.current.currentTime);
      setProgress(0);
      if (eventRouter) {
        eventRouter.emit("state.ended", false);
      }
    };
    import_react10.default.useEffect(() => {
      let i;
      for (i = 0; i < audioElem.current.textTracks.length; i += 1) {
        audioElem.current.textTracks[i].mode = audioElem.current.textTracks[i].language === selectedLanguage ? "showing" : "hidden";
      }
    }, [selectedLanguage]);
    const toggleMuteAction = () => {
      const newMute = !audioElem.current.muted;
      audioElem.current.muted = newMute;
      setMuted(newMute);
    };
    const handleRemoteAction = (action) => {
      if (action === "backward") {
        moveBackwardAction();
      } else if (action === "play_pause") {
        playPauseAction();
      } else if (action === "reset") {
        rewindAction();
      } else if (action === "forward") {
        moveForwardAction();
      }
    };
    import_react10.default.useEffect(() => {
      if (eventRouter) {
        eventRouter.on("remote.action", handleRemoteAction);
      }
      return () => {
        if (eventRouter) {
          eventRouter.off("remote.action", handleRemoteAction);
        }
      };
    }, []);
    const currentFile = fileData[selectedFile] || null;
    return /* @__PURE__ */ import_react10.default.createElement("div", {
      className: CssClasses_default("video-wrapper", className)
    }, /* @__PURE__ */ import_react10.default.createElement("audio", {
      className: CssClasses_default("video-element", className),
      "data-oh-audio-player": "1",
      crossOrigin,
      preload: "metadata",
      ref: audioElem,
      onLoadedMetadata,
      onEnded,
      onTimeUpdate: internalOnTimeUpdate,
      "aria-describedby": captionsContainerId
    }, currentFile && /* @__PURE__ */ import_react10.default.createElement("source", {
      src: currentFile.audioUrl,
      type: "audio/mpeg"
    }), currentFile && hasVtt(currentFile) && /* @__PURE__ */ import_react10.default.createElement("track", {
      src: currentFile.transcriptUrl,
      kind: "captions",
      label: "English",
      srcLang: "en"
    })), /* @__PURE__ */ import_react10.default.createElement("div", {
      className: CssClasses_default("video-controls", className)
    }, /* @__PURE__ */ import_react10.default.createElement(ScrubBar_default, {
      defaultValue: progress,
      className: CssClasses_default("video-controls", className, "progress-bar"),
      onClick: (pos) => {
        audioElem.current.currentTime = pos * duration;
        setTimestamp(pos * duration);
      },
      useTooltip: activeConfig.useTooltip || false,
      useRange: useRangeOnScrubBar,
      useProgress: useProgressOnScrubBar,
      valueToTooltipString: (pos) => getTimestampString(audioElem.current ? pos * audioElem.current.duration : 0)
    }), /* @__PURE__ */ import_react10.default.createElement("label", {
      className: "sr-only",
      htmlFor: timeIndicatorId
    }, "Time elapsed"), /* @__PURE__ */ import_react10.default.createElement("input", {
      className: CssClasses_default("video-controls", className, "time-elapsed"),
      id: timeIndicatorId,
      readOnly: true,
      ref: timeElapsedElem,
      value: getTimestampString(timestamp)
    }), activeConfig.showDuration && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("label", {
      className: "sr-only",
      htmlFor: durationIndicatorId
    }, "Duration"), /* @__PURE__ */ import_react10.default.createElement("input", {
      className: CssClasses_default("video-controls", className, "duration"),
      id: durationIndicatorId,
      readOnly: true,
      ref: durationElem,
      value: getTimestampString(duration, true)
    })), /* @__PURE__ */ import_react10.default.createElement("div", {
      className: "w-100"
    }), /* @__PURE__ */ import_react10.default.createElement("div", {
      className: CssClasses_default("video-controls", className, "button-wrapper")
    }, (features.showTracklist || false) && /* @__PURE__ */ import_react10.default.createElement(ToggleButton_default, {
      btnType: "tracklist",
      "aria-controls": tracklistId,
      enabled: fileData.length > 0 && !singleTrack,
      onClick: () => {
        setShowSubtitleMenu(false);
        setShowTrackListMenu(!showTrackListMenu);
      },
      toggleState: showTrackListMenu,
      config: activeConfig
    }, "Tracklist"), /* @__PURE__ */ import_react10.default.createElement("div", {
      className: CssClasses_default("video-controls", className, "button-wrapper__space")
    }), /* @__PURE__ */ import_react10.default.createElement(ActionButton_default, {
      btnType: "previous-audio",
      enabled: fileData.length > 1 && canPlayPrev,
      onClick: () => {
        if (canPlayPrev) {
          selectTrack(selectedFile - 1);
        }
      },
      config: activeConfig
    }, "Previous track"), /* @__PURE__ */ import_react10.default.createElement(ActionButton_default, {
      btnType: "backward",
      onClick: moveBackwardAction,
      config: activeConfig
    }, "Rewind"), /* @__PURE__ */ import_react10.default.createElement(ToggleButton_default, {
      btnType: "play",
      hidden: ended,
      onClick: playPauseAction,
      toggleState: playing,
      config: activeConfig
    }, playing ? "Pause" : "Play"), /* @__PURE__ */ import_react10.default.createElement(ActionButton_default, {
      btnType: "reset",
      enabled: ended,
      hidden: !ended,
      onClick: rewindAction,
      config: activeConfig
    }, "Restart"), /* @__PURE__ */ import_react10.default.createElement(ActionButton_default, {
      btnType: "forward",
      onClick: moveForwardAction,
      config: activeConfig
    }, "Fast forward"), /* @__PURE__ */ import_react10.default.createElement(ActionButton_default, {
      btnType: "next-audio",
      enabled: fileData.length > 1 && canPlayNext,
      onClick: nextTrackAction,
      config: activeConfig
    }, "Next track"), (features.showClosedCaptioning || false) && /* @__PURE__ */ import_react10.default.createElement(ToggleButton_default, {
      btnType: "closed-captioning",
      "aria-controls": subtitleMenuId,
      enabled: videoMetadataLoaded && hasVtt(currentFile),
      onClick: () => {
        setShowTrackListMenu(false);
        setShowSubtitleMenu(!showSubtitleMenu);
      },
      toggleState: showSubtitleMenu,
      config: activeConfig
    }, "Closed captioning"), /* @__PURE__ */ import_react10.default.createElement("div", {
      className: CssClasses_default("video-controls", className, "button-wrapper__space")
    }), /* @__PURE__ */ import_react10.default.createElement(ToggleButton_default, {
      btnType: "mute",
      onClick: toggleMuteAction,
      toggleState: muted,
      config: activeConfig
    }, "Mute"))), (features.showClosedCaptioning || false) && /* @__PURE__ */ import_react10.default.createElement(SubtitleMenu_default, {
      visible: showSubtitleMenu,
      id: subtitleMenuId,
      tracks: subtitleTracks(),
      selected: selectedLanguage,
      onSelect: selectSubtitleLanguage
    }), (features.showTracklist || false) && /* @__PURE__ */ import_react10.default.createElement(TracklistMenu_default, {
      visible: !singleTrack && showTrackListMenu,
      id: tracklistId,
      tracklist: fileData,
      selected: selectedFile,
      onSelect: (trackNumber) => {
        setShowTrackListMenu(false);
        selectTrack(trackNumber);
      }
    }), (features.showClosedCaptioning || false) && /* @__PURE__ */ import_react10.default.createElement(SubtitleContainer_default, {
      visible: selectedLanguage !== null,
      lang: selectedLanguage,
      tracks: subtitleTracks(),
      id: captionsContainerId
    }));
  };
  var AudioPlayer_default = AudioPlayer;
  var defaultConfigs = {
    FontAwesome5: FontAwesome5_default,
    Plain: Plain_default
  };

  // src/browser.ts
  if (typeof window !== "undefined") {
    window.AudioPlayer = AudioPlayer_default;
    window.AudioPlayer.defaultConfigs = defaultConfigs;
  }
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
