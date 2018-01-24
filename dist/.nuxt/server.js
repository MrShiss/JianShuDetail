'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

var _querystring = require('querystring');

var _lodash = require('lodash');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _index = require('./index');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var debug = require('debug')('nuxt:render');
debug.color = 4; // force blue color

var isDev = true;

var noopApp = function noopApp() {
  return new _vue2.default({ render: function render(h) {
      return h('div');
    } });
};

var createNext = function createNext(ssrContext) {
  return function (opts) {
    ssrContext.redirected = opts;
    // If nuxt generate
    if (!ssrContext.res) {
      ssrContext.nuxt.serverRendered = false;
      return;
    }
    opts.query = (0, _querystring.stringify)(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    if (opts.path.indexOf('http') !== 0 && '/' !== '/' && opts.path.indexOf('/') !== 0) {
      opts.path = (0, _utils.urlJoin)('/', opts.path);
    }
    // Avoid loop redirect
    if (opts.path === ssrContext.url) {
      ssrContext.redirected = false;
      return;
    }
    ssrContext.res.writeHead(opts.status, {
      'Location': opts.path
    });
    ssrContext.res.end();
  };
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ssrContext) {
    var _ref2, app, router, _app, beforeRender, renderErrorPage, render404Page, s, Components, midd, layout, isValid, asyncDatas;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
            ssrContext.redirected = false;
            ssrContext.next = createNext(ssrContext);
            // Used for beforeNuxtRender({ Components, nuxtState })
            ssrContext.beforeRenderFns = [];

            // Create the app definition and the instance (created for each request)
            _context3.next = 5;
            return (0, _index.createApp)(ssrContext);

          case 5:
            _ref2 = _context3.sent;
            app = _ref2.app;
            router = _ref2.router;
            _app = new _vue2.default(app);

            // Nuxt object (window.__NUXT__)

            ssrContext.nuxt = { layout: 'default', data: [], error: null, serverRendered: true
              // Add meta infos (used in renderer.js)
            };ssrContext.meta = _app.$meta();
            // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
            ssrContext.asyncData = {};

            beforeRender = function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return Promise.all(ssrContext.beforeRenderFns.map(function (fn) {
                          return (0, _utils.promisify)(fn, { Components: Components, nuxtState: ssrContext.nuxt });
                        }));

                      case 2:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function beforeRender() {
                return _ref3.apply(this, arguments);
              };
            }();

            renderErrorPage = function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var errLayout;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        // Load layout for error page
                        errLayout = typeof _index.NuxtError.layout === 'function' ? _index.NuxtError.layout(app.context) : _index.NuxtError.layout;

                        ssrContext.nuxt.layout = errLayout || 'default';
                        _context2.next = 4;
                        return _app.loadLayout(errLayout);

                      case 4:
                        _app.setLayout(errLayout);
                        _context2.next = 7;
                        return beforeRender();

                      case 7:
                        return _context2.abrupt('return', _app);

                      case 8:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              }));

              return function renderErrorPage() {
                return _ref4.apply(this, arguments);
              };
            }();

            render404Page = function render404Page() {
              app.context.error({ statusCode: 404, message: 'This page could not be found' });
              return renderErrorPage();
            };

            s = isDev && Date.now();

            // Components are already resolved by setContext -> getRouteData (app/utils.js)

            Components = (0, _utils.getMatchedComponents)(router.match(ssrContext.url));

            /*
            ** Call global middleware (nuxt.config.js)
            */

            midd = [];

            midd = midd.map(function (name) {
              if (typeof name === 'function') return name;
              if (typeof _middleware2.default[name] !== 'function') {
                ssrContext.error({ statusCode: 500, message: 'Unknown middleware ' + name });
              }
              return _middleware2.default[name];
            });
            _context3.next = 21;
            return (0, _utils.middlewareSeries)(midd, app.context);

          case 21:
            if (!ssrContext.redirected) {
              _context3.next = 23;
              break;
            }

            return _context3.abrupt('return', noopApp());

          case 23:
            if (!ssrContext.nuxt.error) {
              _context3.next = 25;
              break;
            }

            return _context3.abrupt('return', renderErrorPage());

          case 25:

            /*
            ** Set layout
            */
            layout = Components.length ? Components[0].options.layout : _index.NuxtError.layout;

            if (typeof layout === 'function') layout = layout(app.context);
            _context3.next = 29;
            return _app.loadLayout(layout);

          case 29:
            layout = _app.setLayout(layout);
            // ...Set layout to __NUXT__
            ssrContext.nuxt.layout = _app.layoutName;

            /*
            ** Call middleware (layout + pages)
            */
            midd = [];
            if (layout.middleware) midd = midd.concat(layout.middleware);
            Components.forEach(function (Component) {
              if (Component.options.middleware) {
                midd = midd.concat(Component.options.middleware);
              }
            });
            midd = midd.map(function (name) {
              if (typeof name === 'function') return name;
              if (typeof _middleware2.default[name] !== 'function') {
                app.context.error({ statusCode: 500, message: 'Unknown middleware ' + name });
              }
              return _middleware2.default[name];
            });
            _context3.next = 37;
            return (0, _utils.middlewareSeries)(midd, app.context);

          case 37:
            if (!ssrContext.redirected) {
              _context3.next = 39;
              break;
            }

            return _context3.abrupt('return', noopApp());

          case 39:
            if (!ssrContext.nuxt.error) {
              _context3.next = 41;
              break;
            }

            return _context3.abrupt('return', renderErrorPage());

          case 41:

            /*
            ** Call .validate()
            */
            isValid = true;

            Components.forEach(function (Component) {
              if (!isValid) return;
              if (typeof Component.options.validate !== 'function') return;
              isValid = Component.options.validate({
                params: app.context.route.params || {},
                query: app.context.route.query || {}

              });
            });
            // ...If .validate() returned false

            if (isValid) {
              _context3.next = 46;
              break;
            }

            // Don't server-render the page in generate mode
            if (ssrContext._generate) ssrContext.nuxt.serverRendered = false;
            // Render a 404 error page
            return _context3.abrupt('return', render404Page());

          case 46:
            if (Components.length) {
              _context3.next = 48;
              break;
            }

            return _context3.abrupt('return', render404Page());

          case 48:
            _context3.next = 50;
            return Promise.all(Components.map(function (Component) {
              var promises = [];

              // Call asyncData(context)
              if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
                var promise = (0, _utils.promisify)(Component.options.asyncData, app.context);
                promise.then(function (asyncDataResult) {
                  ssrContext.asyncData[Component.cid] = asyncDataResult;
                  (0, _utils.applyAsyncData)(Component);
                  return asyncDataResult;
                });
                promises.push(promise);
              } else {
                promises.push(null);
              }

              // Call fetch(context)
              if (Component.options.fetch) {
                promises.push(Component.options.fetch(app.context));
              } else {
                promises.push(null);
              }

              return Promise.all(promises);
            }));

          case 50:
            asyncDatas = _context3.sent;


            if (asyncDatas.length) debug('Data fetching ' + ssrContext.url + ': ' + (Date.now() - s) + 'ms');

            // datas are the first row of each
            ssrContext.nuxt.data = asyncDatas.map(function (r) {
              return r[0] || {};
            });

            // ...If there is a redirect or an error, stop the process

            if (!ssrContext.redirected) {
              _context3.next = 55;
              break;
            }

            return _context3.abrupt('return', noopApp());

          case 55:
            if (!ssrContext.nuxt.error) {
              _context3.next = 57;
              break;
            }

            return _context3.abrupt('return', renderErrorPage());

          case 57:
            _context3.next = 59;
            return beforeRender();

          case 59:
            return _context3.abrupt('return', _app);

          case 60:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=server.js.map