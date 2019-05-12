!(function (e) {
  var n = {}
  function t (r) {
    if (n[r]) return n[r].exports
    var o = (n[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
  }
  ;(t.m = e),
  (t.c = n),
  (t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r })
  }),
  (t.r = function (e) {
    typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 })
  }),
  (t.t = function (e, n) {
    if ((1 & n && (e = t(e)), 8 & n)) return e
    if (4 & n && typeof e === 'object' && e && e.__esModule) return e
    var r = Object.create(null)
    if (
      (t.r(r),
      Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
      2 & n && typeof e !== 'string')
    ) {
      for (var o in e) {
        t.d(
          r,
          o,
          function (n) {
            return e[n]
          }.bind(null, o)
        )
      }
    }
    return r
  }),
  (t.n = function (e) {
    var n =
        e && e.__esModule
          ? function () {
            return e.default
          }
          : function () {
            return e
          }
    return t.d(n, 'a', n), n
  }),
  (t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }),
  (t.p = '/'),
  t((t.s = 5))
})([
  function (e, n) {
    e.exports = require('express')
  },
  function (e, n) {
    e.exports = require('compression')
  },
  function (e, n) {
    e.exports = require('cors')
  },
  function (e, n) {
    e.exports = require('http')
  },
  function (e, n) {
    e.exports = require('process')
  },
  function (e, n, t) {
    'use strict'
    t.r(n)
    var r = t(0)
    var o = t.n(r)
    var u = t(1)
    var i = t.n(u)
    var l = t(2)
    var c = t.n(l)
    var s = o()()
    s.use(i()()),
    s.use(c()()),
    s.get('/', function (e, n) {
      n.send('hello world')
    })
    var f = t(3)
    var a = t.n(f)
    var p = t(4)
    var d = p.env.PORT || 3e3
    var b = a.a.createServer(s)
    function x (e) {
      e.exit && p.exit()
    }
    b.listen(d),
    b.on('listening', function () {
      console.log('server started at http://localhost:'.concat(d))
    }),
    p.stdin.resume(),
    b.on('error', function (e) {
      p.on('exit', x.bind(null)),
      p.on('SIGINT', x.bind(null)),
      p.on('SIGUSR1', x.bind(null)),
      p.on('SIGUSR2', x.bind(null)),
      p.on('uncaughtException', x.bind(null))
    })
  }
])
// # sourceMappingURL=server.prod.js.map
