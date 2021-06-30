!(function () {
  "use strict"
  var t,
    a = window.location,
    r = window.document,
    o = r.currentScript,
    s = o.getAttribute("data-api") || new URL(o.src).origin + "/api/event",
    l = window.localStorage.plausible_ignore
  function p(t) {
    console.warn("Ignoring Event: " + t)
  }
  function e(t, e) {
    if (
      /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(
        a.hostname
      ) ||
      "file:" === a.protocol
    )
      return p("localhost")
    if (
      !(
        window.phantom ||
        window._phantom ||
        window.__nightmare ||
        window.navigator.webdriver ||
        window.Cypress
      )
    ) {
      if ("true" == l) return p("localStorage flag")
      var i = {}
      ;(i.n = t),
        (i.u = a.href),
        (i.d = o.getAttribute("data-domain")),
        (i.r = r.referrer || null),
        (i.w = window.innerWidth),
        e && e.meta && (i.m = JSON.stringify(e.meta)),
        e && e.props && (i.p = JSON.stringify(e.props))
      var n = new XMLHttpRequest()
      n.open("POST", s, !0),
        n.setRequestHeader("Content-Type", "text/plain"),
        n.send(JSON.stringify(i)),
        (n.onreadystatechange = function () {
          4 == n.readyState && e && e.callback && e.callback()
        })
    }
  }
  function i() {
    t !== a.pathname && ((t = a.pathname), e("pageview"))
  }
  function n(t) {
    for (
      var e = t.target,
        i = "auxclick" == t.type && 2 == t.which,
        n = "click" == t.type;
      e && (void 0 === e.tagName || "a" != e.tagName.toLowerCase() || !e.href);

    )
      e = e.parentNode
    e &&
      e.href &&
      e.host &&
      e.host !== a.host &&
      ((i || n) &&
        plausible("Outbound Link: Click", { props: { url: e.href } }),
      (e.target && !e.target.match(/^_(self|parent|top)$/i)) ||
        t.ctrlKey ||
        t.metaKey ||
        t.shiftKey ||
        !n ||
        (setTimeout(function () {
          a.href = e.href
        }, 150),
        t.preventDefault()))
  }
  var c,
    d = window.history
  d.pushState &&
    ((c = d.pushState),
    (d.pushState = function () {
      c.apply(this, arguments), i()
    }),
    window.addEventListener("popstate", i)),
    r.addEventListener("click", n),
    r.addEventListener("auxclick", n)
  var u = (window.plausible && window.plausible.q) || []
  window.plausible = e
  for (var w = 0; w < u.length; w++) e.apply(this, u[w])
  "prerender" === r.visibilityState
    ? r.addEventListener("visibilitychange", function () {
        t || "visible" !== r.visibilityState || i()
      })
    : i()
})()
