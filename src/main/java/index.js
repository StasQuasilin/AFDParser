(function ()
{
    var e = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        (function (e, t)
        {
            var n, i, r = e.document,
                s = e.location,
                a = e.navigator,
                o = e.jQuery,
                l = e.$,
                u = Array.prototype.push,
                c = Array.prototype.slice,
                f = Array.prototype.indexOf,
                h = Object.prototype.toString,
                p = Object.prototype.hasOwnProperty,
                d = String.prototype.trim,
                g = function (e, t)
                {
                    return new g.fn.init(e, t, n)
                },
                m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
                v = /\S/,
                y = /\s+/,
                x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                b = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                w = /^[\],:{}\s]*$/,
                T = /(?:^|:|,)(?:\s*\[)+/g,
                E = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                k = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
                S = /^-ms-/,
                N = /-([\da-z])/gi,
                C = function (e, t)
                {
                    return (t + "").toUpperCase()
                },
                A = function ()
                {
                    if (r.addEventListener)
                    {
                        r.removeEventListener("DOMContentLoaded", A, false);
                        g.ready()
                    }
                    else if (r.readyState === "complete")
                    {
                        r.detachEvent("onreadystatechange", A);
                        g.ready()
                    }
                },
                P = {};
            g.fn = g.prototype = {
                constructor: g,
                init: function (e, n, i)
                {
                    var s, a, o, l;
                    if (!e)
                    {
                        return this
                    }
                    if (e.nodeType)
                    {
                        this.context = this[0] = e;
                        this.length = 1;
                        return this
                    }
                    if (typeof e === "string")
                    {
                        if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3)
                        {
                            s = [null, e, null]
                        }
                        else
                        {
                            s = b.exec(e)
                        }
                        if (s && (s[1] || !n))
                        {
                            if (s[1])
                            {
                                n = n instanceof g ? n[0] : n;
                                l = n && n.nodeType ? n.ownerDocument || n : r;
                                e = g.parseHTML(s[1], l, true);
                                if (_.test(s[1]) && g.isPlainObject(n))
                                {
                                    this.attr.call(e, n, true)
                                }
                                return g.merge(this, e)
                            }
                            else
                            {
                                a = r.getElementById(s[2]);
                                if (a && a.parentNode)
                                {
                                    if (a.id !== s[2])
                                    {
                                        return i.find(e)
                                    }
                                    this.length = 1;
                                    this[0] = a
                                }
                                this.context = r;
                                this.selector = e;
                                return this
                            }
                        }
                        else if (!n || n.jquery)
                        {
                            return (n || i).find(e)
                        }
                        else
                        {
                            return this.constructor(n).find(e)
                        }
                    }
                    else if (g.isFunction(e))
                    {
                        return i.ready(e)
                    }
                    if (e.selector !== t)
                    {
                        this.selector = e.selector;
                        this.context = e.context
                    }
                    return g.makeArray(e, this)
                },
                selector: "",
                jquery: "1.8.3",
                length: 0,
                size: function ()
                {
                    return this.length
                },
                toArray: function ()
                {
                    return c.call(this)
                },
                get: function (e)
                {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, n)
                {
                    var i = g.merge(this.constructor(), e);
                    i.prevObject = this;
                    i.context = this.context;
                    if (t === "find")
                    {
                        i.selector = this.selector + (this.selector ? " " : "") + n
                    }
                    else if (t)
                    {
                        i.selector = this.selector + "." + t + "(" + n + ")"
                    }
                    return i
                },
                each: function (e, t)
                {
                    return g.each(this, e, t)
                },
                ready: function (e)
                {
                    g.ready.promise().done(e);
                    return this
                },
                eq: function (e)
                {
                    e = +e;
                    return e === -1 ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function ()
                {
                    return this.eq(0)
                },
                last: function ()
                {
                    return this.eq(-1)
                },
                slice: function ()
                {
                    return this.pushStack(c.apply(this, arguments), "slice", c.call(arguments).join(","))
                },
                map: function (e)
                {
                    return this.pushStack(g.map(this, function (t, n)
                    {
                        return e.call(t, n, t)
                    }))
                },
                end: function ()
                {
                    return this.prevObject || this.constructor(null)
                },
                push: u,
                sort: [].sort,
                splice: [].splice
            };
            g.fn.init.prototype = g.fn;
            g.extend = g.fn.extend = function ()
            {
                var e, n, i, r, s, a, o = arguments[0] ||
                    {},
                    l = 1,
                    u = arguments.length,
                    c = false;
                if (typeof o === "boolean")
                {
                    c = o;
                    o = arguments[1] ||
                        {};
                    l = 2
                }
                if (typeof o !== "object" && !g.isFunction(o))
                {
                    o = {}
                }
                if (u === l)
                {
                    o = this;
                    --l
                }
                for (; l < u; l++)
                {
                    if ((e = arguments[l]) != null)
                    {
                        for (n in e)
                        {
                            i = o[n];
                            r = e[n];
                            if (o === r)
                            {
                                continue
                            }
                            if (c && r && (g.isPlainObject(r) || (s = g.isArray(r))))
                            {
                                if (s)
                                {
                                    s = false;
                                    a = i && g.isArray(i) ? i : []
                                }
                                else
                                {
                                    a = i && g.isPlainObject(i) ? i :
                                        {}
                                }
                                o[n] = g.extend(c, a, r)
                            }
                            else if (r !== t)
                            {
                                o[n] = r
                            }
                        }
                    }
                }
                return o
            };
            g.extend(
                {
                    noConflict: function (t)
                    {
                        if (e.$ === g)
                        {
                            e.$ = l
                        }
                        if (t && e.jQuery === g)
                        {
                            e.jQuery = o
                        }
                        return g
                    },
                    isReady: false,
                    readyWait: 1,
                    holdReady: function (e)
                    {
                        if (e)
                        {
                            g.readyWait++
                        }
                        else
                        {
                            g.ready(true)
                        }
                    },
                    ready: function (e)
                    {
                        if (e === true ? --g.readyWait : g.isReady)
                        {
                            return
                        }
                        if (!r.body)
                        {
                            return setTimeout(g.ready, 1)
                        }
                        g.isReady = true;
                        if (e !== true && --g.readyWait > 0)
                        {
                            return
                        }
                        i.resolveWith(r, [g]);
                        if (g.fn.trigger)
                        {
                            g(r).trigger("ready").off("ready")
                        }
                    },
                    isFunction: function (e)
                    {
                        return g.type(e) === "function"
                    },
                    isArray: Array.isArray || function (e)
                    {
                        return g.type(e) === "array"
                    },
                    isWindow: function (e)
                    {
                        return e != null && e == e.window
                    },
                    isNumeric: function (e)
                    {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    type: function (e)
                    {
                        return e == null ? String(e) : P[h.call(e)] || "object"
                    },
                    isPlainObject: function (e)
                    {
                        if (!e || g.type(e) !== "object" || e.nodeType || g.isWindow(e))
                        {
                            return false
                        }
                        try
                        {
                            if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))
                            {
                                return false
                            }
                        }
                        catch (n)
                        {
                            return false
                        }
                        var i;
                        for (i in e)
                        {}
                        return i === t || p.call(e, i)
                    },
                    isEmptyObject: function (e)
                    {
                        var t;
                        for (t in e)
                        {
                            return false
                        }
                        return true
                    },
                    error: function (e)
                    {
                        throw new Error(e)
                    },
                    parseHTML: function (e, t, n)
                    {
                        var i;
                        if (!e || typeof e !== "string")
                        {
                            return null
                        }
                        if (typeof t === "boolean")
                        {
                            n = t;
                            t = 0
                        }
                        t = t || r;
                        if (i = _.exec(e))
                        {
                            return [t.createElement(i[1])]
                        }
                        i = g.buildFragment([e], t, n ? null : []);
                        return g.merge([], (i.cacheable ? g.clone(i.fragment) : i.fragment).childNodes)
                    },
                    parseJSON: function (t)
                    {
                        if (!t || typeof t !== "string")
                        {
                            return null
                        }
                        t = g.trim(t);
                        if (e.JSON && e.JSON.parse)
                        {
                            return e.JSON.parse(t)
                        }
                        if (w.test(t.replace(E, "@").replace(k, "]").replace(T, "")))
                        {
                            return new Function("return " + t)()
                        }
                        g.error("Invalid JSON: " + t)
                    },
                    parseXML: function (n)
                    {
                        var i, r;
                        if (!n || typeof n !== "string")
                        {
                            return null
                        }
                        try
                        {
                            if (e.DOMParser)
                            {
                                r = new DOMParser;
                                i = r.parseFromString(n, "text/xml")
                            }
                            else
                            {
                                i = new ActiveXObject("Microsoft.XMLDOM");
                                i.async = "false";
                                i.loadXML(n)
                            }
                        }
                        catch (s)
                        {
                            i = t
                        }
                        if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length)
                        {
                            g.error("Invalid XML: " + n)
                        }
                        return i
                    },
                    noop: function () {},
                    globalEval: function (t)
                    {
                        if (t && v.test(t))
                        {
                            (e.execScript || function (t)
                            {
                                e["eval"].call(e, t)
                            })(t)
                        }
                    },
                    camelCase: function (e)
                    {
                        return e.replace(S, "ms-").replace(N, C)
                    },
                    nodeName: function (e, t)
                    {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function (e, n, i)
                    {
                        var r, s = 0,
                            a = e.length,
                            o = a === t || g.isFunction(e);
                        if (i)
                        {
                            if (o)
                            {
                                for (r in e)
                                {
                                    if (n.apply(e[r], i) === false)
                                    {
                                        break
                                    }
                                }
                            }
                            else
                            {
                                for (; s < a;)
                                {
                                    if (n.apply(e[s++], i) === false)
                                    {
                                        break
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (o)
                            {
                                for (r in e)
                                {
                                    if (n.call(e[r], r, e[r]) === false)
                                    {
                                        break
                                    }
                                }
                            }
                            else
                            {
                                for (; s < a;)
                                {
                                    if (n.call(e[s], s, e[s++]) === false)
                                    {
                                        break
                                    }
                                }
                            }
                        }
                        return e
                    },
                    trim: d && !d.call("﻿ ") ? function (e)
                    {
                        return e == null ? "" : d.call(e)
                    } : function (e)
                    {
                        return e == null ? "" : (e + "").replace(x, "")
                    },
                    makeArray: function (e, t)
                    {
                        var n, i = t || [];
                        if (e != null)
                        {
                            n = g.type(e);
                            if (e.length == null || n === "string" || n === "function" || n === "regexp" || g.isWindow(e))
                            {
                                u.call(i, e)
                            }
                            else
                            {
                                g.merge(i, e)
                            }
                        }
                        return i
                    },
                    inArray: function (e, t, n)
                    {
                        var i;
                        if (t)
                        {
                            if (f)
                            {
                                return f.call(t, e, n)
                            }
                            i = t.length;
                            n = n ? n < 0 ? Math.max(0, i + n) : n : 0;
                            for (; n < i; n++)
                            {
                                if (n in t && t[n] === e)
                                {
                                    return n
                                }
                            }
                        }
                        return -1
                    },
                    merge: function (e, n)
                    {
                        var i = n.length,
                            r = e.length,
                            s = 0;
                        if (typeof i === "number")
                        {
                            for (; s < i; s++)
                            {
                                e[r++] = n[s]
                            }
                        }
                        else
                        {
                            while (n[s] !== t)
                            {
                                e[r++] = n[s++]
                            }
                        }
                        e.length = r;
                        return e
                    },
                    grep: function (e, t, n)
                    {
                        var i, r = [],
                            s = 0,
                            a = e.length;
                        n = !!n;
                        for (; s < a; s++)
                        {
                            i = !!t(e[s], s);
                            if (n !== i)
                            {
                                r.push(e[s])
                            }
                        }
                        return r
                    },
                    map: function (e, n, i)
                    {
                        var r, s, a = [],
                            o = 0,
                            l = e.length,
                            u = e instanceof g || l !== t && typeof l === "number" && (l > 0 && e[0] && e[l - 1] || l === 0 || g.isArray(e));
                        if (u)
                        {
                            for (; o < l; o++)
                            {
                                r = n(e[o], o, i);
                                if (r != null)
                                {
                                    a[a.length] = r
                                }
                            }
                        }
                        else
                        {
                            for (s in e)
                            {
                                r = n(e[s], s, i);
                                if (r != null)
                                {
                                    a[a.length] = r
                                }
                            }
                        }
                        return a.concat.apply([], a)
                    },
                    guid: 1,
                    proxy: function (e, n)
                    {
                        var i, r, s;
                        if (typeof n === "string")
                        {
                            i = e[n];
                            n = e;
                            e = i
                        }
                        if (!g.isFunction(e))
                        {
                            return t
                        }
                        r = c.call(arguments, 2);
                        s = function ()
                        {
                            return e.apply(n, r.concat(c.call(arguments)))
                        };
                        s.guid = e.guid = e.guid || g.guid++;
                        return s
                    },
                    access: function (e, n, i, r, s, a, o)
                    {
                        var l, u = i == null,
                            c = 0,
                            f = e.length;
                        if (i && typeof i === "object")
                        {
                            for (c in i)
                            {
                                g.access(e, n, c, i[c], 1, a, r)
                            }
                            s = 1
                        }
                        else if (r !== t)
                        {
                            l = o === t && g.isFunction(r);
                            if (u)
                            {
                                if (l)
                                {
                                    l = n;
                                    n = function (e, t, n)
                                    {
                                        return l.call(g(e), n)
                                    }
                                }
                                else
                                {
                                    n.call(e, r);
                                    n = null
                                }
                            }
                            if (n)
                            {
                                for (; c < f; c++)
                                {
                                    n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, o)
                                }
                            }
                            s = 1
                        }
                        return s ? e : u ? n.call(e) : f ? n(e[0], i) : a
                    },
                    now: function ()
                    {
                        return (new Date).getTime()
                    }
                });
            g.ready.promise = function (t)
            {
                if (!i)
                {
                    i = g.Deferred();
                    if (r.readyState === "complete")
                    {
                        setTimeout(g.ready, 1)
                    }
                    else if (r.addEventListener)
                    {
                        r.addEventListener("DOMContentLoaded", A, false);
                        e.addEventListener("load", g.ready, false)
                    }
                    else
                    {
                        r.attachEvent("onreadystatechange", A);
                        e.attachEvent("onload", g.ready);
                        var n = false;
                        try
                        {
                            n = e.frameElement == null && r.documentElement
                        }
                        catch (s)
                        {}
                        if (n && n.doScroll)
                        {
                            (function a()
                            {
                                if (!g.isReady)
                                {
                                    try
                                    {
                                        n.doScroll("left")
                                    }
                                    catch (e)
                                    {
                                        return setTimeout(a, 50)
                                    }
                                    g.ready()
                                }
                            })()
                        }
                    }
                }
                return i.promise(t)
            };
            g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t)
            {
                P["[object " + t + "]"] = t.toLowerCase()
            });
            n = g(r);
            var O = {};

            function D(e)
            {
                var t = O[e] = {};
                g.each(e.split(y), function (e, n)
                {
                    t[n] = true
                });
                return t
            }
            g.Callbacks = function (e)
            {
                e = typeof e === "string" ? O[e] || D(e) : g.extend(
                    {}, e);
                var n, i, r, s, a, o, l = [],
                    u = !e.once && [],
                    c = function (t)
                    {
                        n = e.memory && t;
                        i = true;
                        o = s || 0;
                        s = 0;
                        a = l.length;
                        r = true;
                        for (; l && o < a; o++)
                        {
                            if (l[o].apply(t[0], t[1]) === false && e.stopOnFalse)
                            {
                                n = false;
                                break
                            }
                        }
                        r = false;
                        if (l)
                        {
                            if (u)
                            {
                                if (u.length)
                                {
                                    c(u.shift())
                                }
                            }
                            else if (n)
                            {
                                l = []
                            }
                            else
                            {
                                f.disable()
                            }
                        }
                    },
                    f = {
                        add: function ()
                        {
                            if (l)
                            {
                                var t = l.length;
                                (function i(t)
                                {
                                    g.each(t, function (t, n)
                                    {
                                        var r = g.type(n);
                                        if (r === "function")
                                        {
                                            if (!e.unique || !f.has(n))
                                            {
                                                l.push(n)
                                            }
                                        }
                                        else if (n && n.length && r !== "string")
                                        {
                                            i(n)
                                        }
                                    })
                                })(arguments);
                                if (r)
                                {
                                    a = l.length
                                }
                                else if (n)
                                {
                                    s = t;
                                    c(n)
                                }
                            }
                            return this
                        },
                        remove: function ()
                        {
                            if (l)
                            {
                                g.each(arguments, function (e, t)
                                {
                                    var n;
                                    while ((n = g.inArray(t, l, n)) > -1)
                                    {
                                        l.splice(n, 1);
                                        if (r)
                                        {
                                            if (n <= a)
                                            {
                                                a--
                                            }
                                            if (n <= o)
                                            {
                                                o--
                                            }
                                        }
                                    }
                                })
                            }
                            return this
                        },
                        has: function (e)
                        {
                            return g.inArray(e, l) > -1
                        },
                        empty: function ()
                        {
                            l = [];
                            return this
                        },
                        disable: function ()
                        {
                            l = u = n = t;
                            return this
                        },
                        disabled: function ()
                        {
                            return !l
                        },
                        lock: function ()
                        {
                            u = t;
                            if (!n)
                            {
                                f.disable()
                            }
                            return this
                        },
                        locked: function ()
                        {
                            return !u
                        },
                        fireWith: function (e, t)
                        {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            if (l && (!i || u))
                            {
                                if (r)
                                {
                                    u.push(t)
                                }
                                else
                                {
                                    c(t)
                                }
                            }
                            return this
                        },
                        fire: function ()
                        {
                            f.fireWith(this, arguments);
                            return this
                        },
                        fired: function ()
                        {
                            return !!i
                        }
                    };
                return f
            };
            g.extend(
                {
                    Deferred: function (e)
                    {
                        var t = [
                                ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", g.Callbacks("memory")]
                            ],
                            n = "pending",
                            i = {
                                state: function ()
                                {
                                    return n
                                },
                                always: function ()
                                {
                                    r.done(arguments).fail(arguments);
                                    return this
                                },
                                then: function ()
                                {
                                    var e = arguments;
                                    return g.Deferred(function (n)
                                    {
                                        g.each(t, function (t, i)
                                        {
                                            var s = i[0],
                                                a = e[t];
                                            r[i[1]](g.isFunction(a) ? function ()
                                            {
                                                var e = a.apply(this, arguments);
                                                if (e && g.isFunction(e.promise))
                                                {
                                                    e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                                                }
                                                else
                                                {
                                                    n[s + "With"](this === r ? n : this, [e])
                                                }
                                            } : n[s])
                                        });
                                        e = null
                                    }).promise()
                                },
                                promise: function (e)
                                {
                                    return e != null ? g.extend(e, i) : i
                                }
                            },
                            r = {};
                        i.pipe = i.then;
                        g.each(t, function (e, s)
                        {
                            var a = s[2],
                                o = s[3];
                            i[s[1]] = a.add;
                            if (o)
                            {
                                a.add(function ()
                                {
                                    n = o
                                }, t[e ^ 1][2].disable, t[2][2].lock)
                            }
                            r[s[0]] = a.fire;
                            r[s[0] + "With"] = a.fireWith
                        });
                        i.promise(r);
                        if (e)
                        {
                            e.call(r, r)
                        }
                        return r
                    },
                    when: function (e)
                    {
                        var t = 0,
                            n = c.call(arguments),
                            i = n.length,
                            r = i !== 1 || e && g.isFunction(e.promise) ? i : 0,
                            s = r === 1 ? e : g.Deferred(),
                            a = function (e, t, n)
                            {
                                return function (i)
                                {
                                    t[e] = this;
                                    n[e] = arguments.length > 1 ? c.call(arguments) : i;
                                    if (n === o)
                                    {
                                        s.notifyWith(t, n)
                                    }
                                    else if (!--r)
                                    {
                                        s.resolveWith(t, n)
                                    }
                                }
                            },
                            o, l, u;
                        if (i > 1)
                        {
                            o = new Array(i);
                            l = new Array(i);
                            u = new Array(i);
                            for (; t < i; t++)
                            {
                                if (n[t] && g.isFunction(n[t].promise))
                                {
                                    n[t].promise().done(a(t, u, n)).fail(s.reject).progress(a(t, l, o))
                                }
                                else
                                {
                                    --r
                                }
                            }
                        }
                        if (!r)
                        {
                            s.resolveWith(u, n)
                        }
                        return s.promise()
                    }
                });
            g.support = function ()
            {
                var t, n, i, s, a, o, l, u, c, f, h, p = r.createElement("div");
                p.setAttribute("className", "t");
                p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                n = p.getElementsByTagName("*");
                i = p.getElementsByTagName("a")[0];
                if (!n || !i || !n.length)
                {
                    return {}
                }
                s = r.createElement("select");
                a = s.appendChild(r.createElement("option"));
                o = p.getElementsByTagName("input")[0];
                i.style.cssText = "top:1px;float:left;opacity:.5";
                t = {
                    leadingWhitespace: p.firstChild.nodeType === 3,
                    tbody: !p.getElementsByTagName("tbody").length,
                    htmlSerialize: !!p.getElementsByTagName("link").length,
                    style: /top/.test(i.getAttribute("style")),
                    hrefNormalized: i.getAttribute("href") === "/a",
                    opacity: /^0.5/.test(i.style.opacity),
                    cssFloat: !!i.style.cssFloat,
                    checkOn: o.value === "on",
                    optSelected: a.selected,
                    getSetAttribute: p.className !== "t",
                    enctype: !!r.createElement("form").enctype,
                    html5Clone: r.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
                    boxModel: r.compatMode === "CSS1Compat",
                    submitBubbles: true,
                    changeBubbles: true,
                    focusinBubbles: false,
                    deleteExpando: true,
                    noCloneEvent: true,
                    inlineBlockNeedsLayout: false,
                    shrinkWrapBlocks: false,
                    reliableMarginRight: true,
                    boxSizingReliable: true,
                    pixelPosition: false
                };
                o.checked = true;
                t.noCloneChecked = o.cloneNode(true).checked;
                s.disabled = true;
                t.optDisabled = !a.disabled;
                try
                {
                    delete p.test
                }
                catch (d)
                {
                    t.deleteExpando = false
                }
                if (!p.addEventListener && p.attachEvent && p.fireEvent)
                {
                    p.attachEvent("onclick", h = function ()
                    {
                        t.noCloneEvent = false
                    });
                    p.cloneNode(true).fireEvent("onclick");
                    p.detachEvent("onclick", h)
                }
                o = r.createElement("input");
                o.value = "t";
                o.setAttribute("type", "radio");
                t.radioValue = o.value === "t";
                o.setAttribute("checked", "checked");
                o.setAttribute("name", "t");
                p.appendChild(o);
                l = r.createDocumentFragment();
                l.appendChild(p.lastChild);
                t.checkClone = l.cloneNode(true).cloneNode(true).lastChild.checked;
                t.appendChecked = o.checked;
                l.removeChild(o);
                l.appendChild(p);
                if (p.attachEvent)
                {
                    for (c in
                        {
                            submit: true,
                            change: true,
                            focusin: true
                        })
                    {
                        u = "on" + c;
                        f = u in p;
                        if (!f)
                        {
                            p.setAttribute(u, "return;");
                            f = typeof p[u] === "function"
                        }
                        t[c + "Bubbles"] = f
                    }
                }
                g(function ()
                {
                    var n, i, s, a, o = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                        l = r.getElementsByTagName("body")[0];
                    if (!l)
                    {
                        return
                    }
                    n = r.createElement("div");
                    n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
                    l.insertBefore(n, l.firstChild);
                    i = r.createElement("div");
                    n.appendChild(i);
                    i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                    s = i.getElementsByTagName("td");
                    s[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                    f = s[0].offsetHeight === 0;
                    s[0].style.display = "";
                    s[1].style.display = "none";
                    t.reliableHiddenOffsets = f && s[0].offsetHeight === 0;
                    i.innerHTML = "";
                    i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                    t.boxSizing = i.offsetWidth === 4;
                    t.doesNotIncludeMarginInBodyOffset = l.offsetTop !== 1;
                    if (e.getComputedStyle)
                    {
                        t.pixelPosition = (e.getComputedStyle(i, null) ||
                            {}).top !== "1%";
                        t.boxSizingReliable = (e.getComputedStyle(i, null) ||
                            {
                                width: "4px"
                            }).width === "4px";
                        a = r.createElement("div");
                        a.style.cssText = i.style.cssText = o;
                        a.style.marginRight = a.style.width = "0";
                        i.style.width = "1px";
                        i.appendChild(a);
                        t.reliableMarginRight = !parseFloat((e.getComputedStyle(a, null) ||
                            {}).marginRight)
                    }
                    if (typeof i.style.zoom !== "undefined")
                    {
                        i.innerHTML = "";
                        i.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1";
                        t.inlineBlockNeedsLayout = i.offsetWidth === 3;
                        i.style.display = "block";
                        i.style.overflow = "visible";
                        i.innerHTML = "<div></div>";
                        i.firstChild.style.width = "5px";
                        t.shrinkWrapBlocks = i.offsetWidth !== 3;
                        n.style.zoom = 1
                    }
                    l.removeChild(n);
                    n = i = s = a = null
                });
                l.removeChild(p);
                n = i = s = a = o = l = p = null;
                return t
            }();
            var I = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                L = /([A-Z])/g;
            g.extend(
                {
                    cache:
                        {},
                    deletedIds: [],
                    uuid: 0,
                    expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
                    noData:
                        {
                            embed: true,
                            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                            applet: true
                        },
                    hasData: function (e)
                    {
                        e = e.nodeType ? g.cache[e[g.expando]] : e[g.expando];
                        return !!e && !j(e)
                    },
                    data: function (e, n, i, r)
                    {
                        if (!g.acceptData(e))
                        {
                            return
                        }
                        var s, a, o = g.expando,
                            l = typeof n === "string",
                            u = e.nodeType,
                            c = u ? g.cache : e,
                            f = u ? e[o] : e[o] && o;
                        if ((!f || !c[f] || !r && !c[f].data) && l && i === t)
                        {
                            return
                        }
                        if (!f)
                        {
                            if (u)
                            {
                                e[o] = f = g.deletedIds.pop() || g.guid++
                            }
                            else
                            {
                                f = o
                            }
                        }
                        if (!c[f])
                        {
                            c[f] = {};
                            if (!u)
                            {
                                c[f].toJSON = g.noop
                            }
                        }
                        if (typeof n === "object" || typeof n === "function")
                        {
                            if (r)
                            {
                                c[f] = g.extend(c[f], n)
                            }
                            else
                            {
                                c[f].data = g.extend(c[f].data, n)
                            }
                        }
                        s = c[f];
                        if (!r)
                        {
                            if (!s.data)
                            {
                                s.data = {}
                            }
                            s = s.data
                        }
                        if (i !== t)
                        {
                            s[g.camelCase(n)] = i
                        }
                        if (l)
                        {
                            a = s[n];
                            if (a == null)
                            {
                                a = s[g.camelCase(n)]
                            }
                        }
                        else
                        {
                            a = s
                        }
                        return a
                    },
                    removeData: function (e, t, n)
                    {
                        if (!g.acceptData(e))
                        {
                            return
                        }
                        var i, r, s, a = e.nodeType,
                            o = a ? g.cache : e,
                            l = a ? e[g.expando] : g.expando;
                        if (!o[l])
                        {
                            return
                        }
                        if (t)
                        {
                            i = n ? o[l] : o[l].data;
                            if (i)
                            {
                                if (!g.isArray(t))
                                {
                                    if (t in i)
                                    {
                                        t = [t]
                                    }
                                    else
                                    {
                                        t = g.camelCase(t);
                                        if (t in i)
                                        {
                                            t = [t]
                                        }
                                        else
                                        {
                                            t = t.split(" ")
                                        }
                                    }
                                }
                                for (r = 0, s = t.length; r < s; r++)
                                {
                                    delete i[t[r]]
                                }
                                if (!(n ? j : g.isEmptyObject)(i))
                                {
                                    return
                                }
                            }
                        }
                        if (!n)
                        {
                            delete o[l].data;
                            if (!j(o[l]))
                            {
                                return
                            }
                        }
                        if (a)
                        {
                            g.cleanData([e], true)
                        }
                        else if (g.support.deleteExpando || o != o.window)
                        {
                            delete o[l]
                        }
                        else
                        {
                            o[l] = null
                        }
                    },
                    _data: function (e, t, n)
                    {
                        return g.data(e, t, n, true)
                    },
                    acceptData: function (e)
                    {
                        var t = e.nodeName && g.noData[e.nodeName.toLowerCase()];
                        return !t || t !== true && e.getAttribute("classid") === t
                    }
                });
            g.fn.extend(
                {
                    data: function (e, n)
                    {
                        var i, r, s, a, o, l = this[0],
                            u = 0,
                            c = null;
                        if (e === t)
                        {
                            if (this.length)
                            {
                                c = g.data(l);
                                if (l.nodeType === 1 && !g._data(l, "parsedAttrs"))
                                {
                                    s = l.attributes;
                                    for (o = s.length; u < o; u++)
                                    {
                                        a = s[u].name;
                                        if (!a.indexOf("data-"))
                                        {
                                            a = g.camelCase(a.substring(5));
                                            M(l, a, c[a])
                                        }
                                    }
                                    g._data(l, "parsedAttrs", true)
                                }
                            }
                            return c
                        }
                        if (typeof e === "object")
                        {
                            return this.each(function ()
                            {
                                g.data(this, e)
                            })
                        }
                        i = e.split(".", 2);
                        i[1] = i[1] ? "." + i[1] : "";
                        r = i[1] + "!";
                        return g.access(this, function (n)
                        {
                            if (n === t)
                            {
                                c = this.triggerHandler("getData" + r, [i[0]]);
                                if (c === t && l)
                                {
                                    c = g.data(l, e);
                                    c = M(l, e, c)
                                }
                                return c === t && i[1] ? this.data(i[0]) : c
                            }
                            i[1] = n;
                            this.each(function ()
                            {
                                var t = g(this);
                                t.triggerHandler("setData" + r, i);
                                g.data(this, e, n);
                                t.triggerHandler("changeData" + r, i)
                            })
                        }, null, n, arguments.length > 1, null, false)
                    },
                    removeData: function (e)
                    {
                        return this.each(function ()
                        {
                            g.removeData(this, e)
                        })
                    }
                });

            function M(e, n, i)
            {
                if (i === t && e.nodeType === 1)
                {
                    var r = "data-" + n.replace(L, "-$1").toLowerCase();
                    i = e.getAttribute(r);
                    if (typeof i === "string")
                    {
                        try
                        {
                            i = i === "true" ? true : i === "false" ? false : i === "null" ? null : +i + "" === i ? +i : I.test(i) ? g.parseJSON(i) : i
                        }
                        catch (s)
                        {}
                        g.data(e, n, i)
                    }
                    else
                    {
                        i = t
                    }
                }
                return i
            }

            function j(e)
            {
                var t;
                for (t in e)
                {
                    if (t === "data" && g.isEmptyObject(e[t]))
                    {
                        continue
                    }
                    if (t !== "toJSON")
                    {
                        return false
                    }
                }
                return true
            }
            g.extend(
                {
                    queue: function (e, t, n)
                    {
                        var i;
                        if (e)
                        {
                            t = (t || "fx") + "queue";
                            i = g._data(e, t);
                            if (n)
                            {
                                if (!i || g.isArray(n))
                                {
                                    i = g._data(e, t, g.makeArray(n))
                                }
                                else
                                {
                                    i.push(n)
                                }
                            }
                            return i || []
                        }
                    },
                    dequeue: function (e, t)
                    {
                        t = t || "fx";
                        var n = g.queue(e, t),
                            i = n.length,
                            r = n.shift(),
                            s = g._queueHooks(e, t),
                            a = function ()
                            {
                                g.dequeue(e, t)
                            };
                        if (r === "inprogress")
                        {
                            r = n.shift();
                            i--
                        }
                        if (r)
                        {
                            if (t === "fx")
                            {
                                n.unshift("inprogress")
                            }
                            delete s.stop;
                            r.call(e, a, s)
                        }
                        if (!i && s)
                        {
                            s.empty.fire()
                        }
                    },
                    _queueHooks: function (e, t)
                    {
                        var n = t + "queueHooks";
                        return g._data(e, n) || g._data(e, n,
                            {
                                empty: g.Callbacks("once memory").add(function ()
                                {
                                    g.removeData(e, t + "queue", true);
                                    g.removeData(e, n, true)
                                })
                            })
                    }
                });
            g.fn.extend(
                {
                    queue: function (e, n)
                    {
                        var i = 2;
                        if (typeof e !== "string")
                        {
                            n = e;
                            e = "fx";
                            i--
                        }
                        if (arguments.length < i)
                        {
                            return g.queue(this[0], e)
                        }
                        return n === t ? this : this.each(function ()
                        {
                            var t = g.queue(this, e, n);
                            g._queueHooks(this, e);
                            if (e === "fx" && t[0] !== "inprogress")
                            {
                                g.dequeue(this, e)
                            }
                        })
                    },
                    dequeue: function (e)
                    {
                        return this.each(function ()
                        {
                            g.dequeue(this, e)
                        })
                    },
                    delay: function (e, t)
                    {
                        e = g.fx ? g.fx.speeds[e] || e : e;
                        t = t || "fx";
                        return this.queue(t, function (t, n)
                        {
                            var i = setTimeout(t, e);
                            n.stop = function ()
                            {
                                clearTimeout(i)
                            }
                        })
                    },
                    clearQueue: function (e)
                    {
                        return this.queue(e || "fx", [])
                    },
                    promise: function (e, n)
                    {
                        var i, r = 1,
                            s = g.Deferred(),
                            a = this,
                            o = this.length,
                            l = function ()
                            {
                                if (!--r)
                                {
                                    s.resolveWith(a, [a])
                                }
                            };
                        if (typeof e !== "string")
                        {
                            n = e;
                            e = t
                        }
                        e = e || "fx";
                        while (o--)
                        {
                            i = g._data(a[o], e + "queueHooks");
                            if (i && i.empty)
                            {
                                r++;
                                i.empty.add(l)
                            }
                        }
                        l();
                        return s.promise(n)
                    }
                });
            var R, H, F, $ = /[\t\r\n]/g,
                B = /\r/g,
                V = /^(?:button|input)$/i,
                q = /^(?:button|input|object|select|textarea)$/i,
                W = /^a(?:rea|)$/i,
                z = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                U = g.support.getSetAttribute;
            g.fn.extend(
                {
                    attr: function (e, t)
                    {
                        return g.access(this, g.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function (e)
                    {
                        return this.each(function ()
                        {
                            g.removeAttr(this, e)
                        })
                    },
                    prop: function (e, t)
                    {
                        return g.access(this, g.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function (e)
                    {
                        e = g.propFix[e] || e;
                        return this.each(function ()
                        {
                            try
                            {
                                this[e] = t;
                                delete this[e]
                            }
                            catch (n)
                            {}
                        })
                    },
                    addClass: function (e)
                    {
                        var t, n, i, r, s, a, o;
                        if (g.isFunction(e))
                        {
                            return this.each(function (t)
                            {
                                g(this).addClass(e.call(this, t, this.className))
                            })
                        }
                        if (e && typeof e === "string")
                        {
                            t = e.split(y);
                            for (n = 0, i = this.length; n < i; n++)
                            {
                                r = this[n];
                                if (r.nodeType === 1)
                                {
                                    if (!r.className && t.length === 1)
                                    {
                                        r.className = e
                                    }
                                    else
                                    {
                                        s = " " + r.className + " ";
                                        for (a = 0, o = t.length; a < o; a++)
                                        {
                                            if (s.indexOf(" " + t[a] + " ") < 0)
                                            {
                                                s += t[a] + " "
                                            }
                                        }
                                        r.className = g.trim(s)
                                    }
                                }
                            }
                        }
                        return this
                    },
                    removeClass: function (e)
                    {
                        var n, i, r, s, a, o, l;
                        if (g.isFunction(e))
                        {
                            return this.each(function (t)
                            {
                                g(this).removeClass(e.call(this, t, this.className))
                            })
                        }
                        if (e && typeof e === "string" || e === t)
                        {
                            n = (e || "").split(y);
                            for (o = 0, l = this.length; o < l; o++)
                            {
                                r = this[o];
                                if (r.nodeType === 1 && r.className)
                                {
                                    i = (" " + r.className + " ").replace($, " ");
                                    for (s = 0, a = n.length; s < a; s++)
                                    {
                                        while (i.indexOf(" " + n[s] + " ") >= 0)
                                        {
                                            i = i.replace(" " + n[s] + " ", " ")
                                        }
                                    }
                                    r.className = e ? g.trim(i) : ""
                                }
                            }
                        }
                        return this
                    },
                    toggleClass: function (e, t)
                    {
                        var n = typeof e,
                            i = typeof t === "boolean";
                        if (g.isFunction(e))
                        {
                            return this.each(function (n)
                            {
                                g(this).toggleClass(e.call(this, n, this.className, t), t)
                            })
                        }
                        return this.each(function ()
                        {
                            if (n === "string")
                            {
                                var r, s = 0,
                                    a = g(this),
                                    o = t,
                                    l = e.split(y);
                                while (r = l[s++])
                                {
                                    o = i ? o : !a.hasClass(r);
                                    a[o ? "addClass" : "removeClass"](r)
                                }
                            }
                            else if (n === "undefined" || n === "boolean")
                            {
                                if (this.className)
                                {
                                    g._data(this, "__className__", this.className)
                                }
                                this.className = this.className || e === false ? "" : g._data(this, "__className__") || ""
                            }
                        })
                    },
                    hasClass: function (e)
                    {
                        var t = " " + e + " ",
                            n = 0,
                            i = this.length;
                        for (; n < i; n++)
                        {
                            if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace($, " ").indexOf(t) >= 0)
                            {
                                return true
                            }
                        }
                        return false
                    },
                    val: function (e)
                    {
                        var n, i, r, s = this[0];
                        if (!arguments.length)
                        {
                            if (s)
                            {
                                n = g.valHooks[s.type] || g.valHooks[s.nodeName.toLowerCase()];
                                if (n && "get" in n && (i = n.get(s, "value")) !== t)
                                {
                                    return i
                                }
                                i = s.value;
                                return typeof i === "string" ? i.replace(B, "") : i == null ? "" : i
                            }
                            return
                        }
                        r = g.isFunction(e);
                        return this.each(function (i)
                        {
                            var s, a = g(this);
                            if (this.nodeType !== 1)
                            {
                                return
                            }
                            if (r)
                            {
                                s = e.call(this, i, a.val())
                            }
                            else
                            {
                                s = e
                            }
                            if (s == null)
                            {
                                s = ""
                            }
                            else if (typeof s === "number")
                            {
                                s += ""
                            }
                            else if (g.isArray(s))
                            {
                                s = g.map(s, function (e)
                                {
                                    return e == null ? "" : e + ""
                                })
                            }
                            n = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()];
                            if (!n || !("set" in n) || n.set(this, s, "value") === t)
                            {
                                this.value = s
                            }
                        })
                    }
                });
            g.extend(
                {
                    valHooks:
                        {
                            option:
                                {
                                    get: function (e)
                                    {
                                        var t = e.attributes.value;
                                        return !t || t.specified ? e.value : e.text
                                    }
                                },
                            select:
                                {
                                    get: function (e)
                                    {
                                        var t, n, i = e.options,
                                            r = e.selectedIndex,
                                            s = e.type === "select-one" || r < 0,
                                            a = s ? null : [],
                                            o = s ? r + 1 : i.length,
                                            l = r < 0 ? o : s ? r : 0;
                                        for (; l < o; l++)
                                        {
                                            n = i[l];
                                            if ((n.selected || l === r) && (g.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup")))
                                            {
                                                t = g(n).val();
                                                if (s)
                                                {
                                                    return t
                                                }
                                                a.push(t)
                                            }
                                        }
                                        return a
                                    },
                                    set: function (e, t)
                                    {
                                        var n = g.makeArray(t);
                                        g(e).find("option").each(function ()
                                        {
                                            this.selected = g.inArray(g(this).val(), n) >= 0
                                        });
                                        if (!n.length)
                                        {
                                            e.selectedIndex = -1
                                        }
                                        return n
                                    }
                                }
                        },
                    attrFn:
                        {},
                    attr: function (e, n, i, r)
                    {
                        var s, a, o, l = e.nodeType;
                        if (!e || l === 3 || l === 8 || l === 2)
                        {
                            return
                        }
                        if (r && g.isFunction(g.fn[n]))
                        {
                            return g(e)[n](i)
                        }
                        if (typeof e.getAttribute === "undefined")
                        {
                            return g.prop(e, n, i)
                        }
                        o = l !== 1 || !g.isXMLDoc(e);
                        if (o)
                        {
                            n = n.toLowerCase();
                            a = g.attrHooks[n] || (z.test(n) ? H : R)
                        }
                        if (i !== t)
                        {
                            if (i === null)
                            {
                                g.removeAttr(e, n);
                                return
                            }
                            else if (a && "set" in a && o && (s = a.set(e, i, n)) !== t)
                            {
                                return s
                            }
                            else
                            {
                                e.setAttribute(n, i + "");
                                return i
                            }
                        }
                        else if (a && "get" in a && o && (s = a.get(e, n)) !== null)
                        {
                            return s
                        }
                        else
                        {
                            s = e.getAttribute(n);
                            return s === null ? t : s
                        }
                    },
                    removeAttr: function (e, t)
                    {
                        var n, i, r, s, a = 0;
                        if (t && e.nodeType === 1)
                        {
                            i = t.split(y);
                            for (; a < i.length; a++)
                            {
                                r = i[a];
                                if (r)
                                {
                                    n = g.propFix[r] || r;
                                    s = z.test(r);
                                    if (!s)
                                    {
                                        g.attr(e, r, "")
                                    }
                                    e.removeAttribute(U ? r : n);
                                    if (s && n in e)
                                    {
                                        e[n] = false
                                    }
                                }
                            }
                        }
                    },
                    attrHooks:
                        {
                            type:
                                {
                                    set: function (e, t)
                                    {
                                        if (V.test(e.nodeName) && e.parentNode)
                                        {
                                            g.error("type property can't be changed")
                                        }
                                        else if (!g.support.radioValue && t === "radio" && g.nodeName(e, "input"))
                                        {
                                            var n = e.value;
                                            e.setAttribute("type", t);
                                            if (n)
                                            {
                                                e.value = n
                                            }
                                            return t
                                        }
                                    }
                                },
                            value:
                                {
                                    get: function (e, t)
                                    {
                                        if (R && g.nodeName(e, "button"))
                                        {
                                            return R.get(e, t)
                                        }
                                        return t in e ? e.value : null
                                    },
                                    set: function (e, t, n)
                                    {
                                        if (R && g.nodeName(e, "button"))
                                        {
                                            return R.set(e, t, n)
                                        }
                                        e.value = t
                                    }
                                }
                        },
                    propFix:
                        {
                            tabindex: "tabIndex",
                            readonly: "readOnly",
                            "for": "htmlFor",
                            "class": "className",
                            maxlength: "maxLength",
                            cellspacing: "cellSpacing",
                            cellpadding: "cellPadding",
                            rowspan: "rowSpan",
                            colspan: "colSpan",
                            usemap: "useMap",
                            frameborder: "frameBorder",
                            contenteditable: "contentEditable"
                        },
                    prop: function (e, n, i)
                    {
                        var r, s, a, o = e.nodeType;
                        if (!e || o === 3 || o === 8 || o === 2)
                        {
                            return
                        }
                        a = o !== 1 || !g.isXMLDoc(e);
                        if (a)
                        {
                            n = g.propFix[n] || n;
                            s = g.propHooks[n]
                        }
                        if (i !== t)
                        {
                            if (s && "set" in s && (r = s.set(e, i, n)) !== t)
                            {
                                return r
                            }
                            else
                            {
                                return e[n] = i
                            }
                        }
                        else
                        {
                            if (s && "get" in s && (r = s.get(e, n)) !== null)
                            {
                                return r
                            }
                            else
                            {
                                return e[n]
                            }
                        }
                    },
                    propHooks:
                        {
                            tabIndex:
                                {
                                    get: function (e)
                                    {
                                        var n = e.getAttributeNode("tabindex");
                                        return n && n.specified ? parseInt(n.value, 10) : q.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                                    }
                                }
                        }
                });
            H = {
                get: function (e, n)
                {
                    var i, r = g.prop(e, n);
                    return r === true || typeof r !== "boolean" && (i = e.getAttributeNode(n)) && i.nodeValue !== false ? n.toLowerCase() : t
                },
                set: function (e, t, n)
                {
                    var i;
                    if (t === false)
                    {
                        g.removeAttr(e, n)
                    }
                    else
                    {
                        i = g.propFix[n] || n;
                        if (i in e)
                        {
                            e[i] = true
                        }
                        e.setAttribute(n, n.toLowerCase())
                    }
                    return n
                }
            };
            if (!U)
            {
                F = {
                    name: true,
                    id: true,
                    coords: true
                };
                R = g.valHooks.button = {
                    get: function (e, n)
                    {
                        var i;
                        i = e.getAttributeNode(n);
                        return i && (F[n] ? i.value !== "" : i.specified) ? i.value : t
                    },
                    set: function (e, t, n)
                    {
                        var i = e.getAttributeNode(n);
                        if (!i)
                        {
                            i = r.createAttribute(n);
                            e.setAttributeNode(i)
                        }
                        return i.value = t + ""
                    }
                };
                g.each(["width", "height"], function (e, t)
                {
                    g.attrHooks[t] = g.extend(g.attrHooks[t],
                        {
                            set: function (e, n)
                            {
                                if (n === "")
                                {
                                    e.setAttribute(t, "auto");
                                    return n
                                }
                            }
                        })
                });
                g.attrHooks.contenteditable = {
                    get: R.get,
                    set: function (e, t, n)
                    {
                        if (t === "")
                        {
                            t = "false"
                        }
                        R.set(e, t, n)
                    }
                }
            }
            if (!g.support.hrefNormalized)
            {
                g.each(["href", "src", "width", "height"], function (e, n)
                {
                    g.attrHooks[n] = g.extend(g.attrHooks[n],
                        {
                            get: function (e)
                            {
                                var i = e.getAttribute(n, 2);
                                return i === null ? t : i
                            }
                        })
                })
            }
            if (!g.support.style)
            {
                g.attrHooks.style = {
                    get: function (e)
                    {
                        return e.style.cssText.toLowerCase() || t
                    },
                    set: function (e, t)
                    {
                        return e.style.cssText = t + ""
                    }
                }
            }
            if (!g.support.optSelected)
            {
                g.propHooks.selected = g.extend(g.propHooks.selected,
                    {
                        get: function (e)
                        {
                            var t = e.parentNode;
                            if (t)
                            {
                                t.selectedIndex;
                                if (t.parentNode)
                                {
                                    t.parentNode.selectedIndex
                                }
                            }
                            return null
                        }
                    })
            }
            if (!g.support.enctype)
            {
                g.propFix.enctype = "encoding"
            }
            if (!g.support.checkOn)
            {
                g.each(["radio", "checkbox"], function ()
                {
                    g.valHooks[this] = {
                        get: function (e)
                        {
                            return e.getAttribute("value") === null ? "on" : e.value
                        }
                    }
                })
            }
            g.each(["radio", "checkbox"], function ()
            {
                g.valHooks[this] = g.extend(g.valHooks[this],
                    {
                        set: function (e, t)
                        {
                            if (g.isArray(t))
                            {
                                return e.checked = g.inArray(g(e).val(), t) >= 0
                            }
                        }
                    })
            });
            var X = /^(?:textarea|input|select)$/i,
                Y = /^([^\.]*|)(?:\.(.+)|)$/,
                G = /(?:^|\s)hover(\.\S+|)\b/,
                K = /^key/,
                J = /^(?:mouse|contextmenu)|click/,
                Z = /^(?:focusinfocus|focusoutblur)$/,
                Q = function (e)
                {
                    return g.event.special.hover ? e : e.replace(G, "mouseenter$1 mouseleave$1")
                };
            g.event = {
                add: function (e, n, i, r, s)
                {
                    var a, o, l, u, c, f, h, p, d, m, v;
                    if (e.nodeType === 3 || e.nodeType === 8 || !n || !i || !(a = g._data(e)))
                    {
                        return
                    }
                    if (i.handler)
                    {
                        d = i;
                        i = d.handler;
                        s = d.selector
                    }
                    if (!i.guid)
                    {
                        i.guid = g.guid++
                    }
                    l = a.events;
                    if (!l)
                    {
                        a.events = l = {}
                    }
                    o = a.handle;
                    if (!o)
                    {
                        a.handle = o = function (e)
                        {
                            return typeof g !== "undefined" && (!e || g.event.triggered !== e.type) ? g.event.dispatch.apply(o.elem, arguments) : t
                        };
                        o.elem = e
                    }
                    n = g.trim(Q(n)).split(" ");
                    for (u = 0; u < n.length; u++)
                    {
                        c = Y.exec(n[u]) || [];
                        f = c[1];
                        h = (c[2] || "").split(".").sort();
                        v = g.event.special[f] ||
                            {};
                        f = (s ? v.delegateType : v.bindType) || f;
                        v = g.event.special[f] ||
                            {};
                        p = g.extend(
                            {
                                type: f,
                                origType: c[1],
                                data: r,
                                handler: i,
                                guid: i.guid,
                                selector: s,
                                needsContext: s && g.expr.match.needsContext.test(s),
                                namespace: h.join(".")
                            }, d);
                        m = l[f];
                        if (!m)
                        {
                            m = l[f] = [];
                            m.delegateCount = 0;
                            if (!v.setup || v.setup.call(e, r, h, o) === false)
                            {
                                if (e.addEventListener)
                                {
                                    e.addEventListener(f, o, false)
                                }
                                else if (e.attachEvent)
                                {
                                    e.attachEvent("on" + f, o)
                                }
                            }
                        }
                        if (v.add)
                        {
                            v.add.call(e, p);
                            if (!p.handler.guid)
                            {
                                p.handler.guid = i.guid
                            }
                        }
                        if (s)
                        {
                            m.splice(m.delegateCount++, 0, p)
                        }
                        else
                        {
                            m.push(p)
                        }
                        g.event.global[f] = true
                    }
                    e = null
                },
                global:
                    {},
                remove: function (e, t, n, i, r)
                {
                    var s, a, o, l, u, c, f, h, p, d, m, v = g.hasData(e) && g._data(e);
                    if (!v || !(h = v.events))
                    {
                        return
                    }
                    t = g.trim(Q(t || "")).split(" ");
                    for (s = 0; s < t.length; s++)
                    {
                        a = Y.exec(t[s]) || [];
                        o = l = a[1];
                        u = a[2];
                        if (!o)
                        {
                            for (o in h)
                            {
                                g.event.remove(e, o + t[s], n, i, true)
                            }
                            continue
                        }
                        p = g.event.special[o] ||
                            {};
                        o = (i ? p.delegateType : p.bindType) || o;
                        d = h[o] || [];
                        c = d.length;
                        u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (f = 0; f < d.length; f++)
                        {
                            m = d[f];
                            if ((r || l === m.origType) && (!n || n.guid === m.guid) && (!u || u.test(m.namespace)) && (!i || i === m.selector || i === "**" && m.selector))
                            {
                                d.splice(f--, 1);
                                if (m.selector)
                                {
                                    d.delegateCount--
                                }
                                if (p.remove)
                                {
                                    p.remove.call(e, m)
                                }
                            }
                        }
                        if (d.length === 0 && c !== d.length)
                        {
                            if (!p.teardown || p.teardown.call(e, u, v.handle) === false)
                            {
                                g.removeEvent(e, o, v.handle)
                            }
                            delete h[o]
                        }
                    }
                    if (g.isEmptyObject(h))
                    {
                        delete v.handle;
                        g.removeData(e, "events", true)
                    }
                },
                customEvent:
                    {
                        getData: true,
                        setData: true,
                        changeData: true
                    },
                trigger: function (n, i, s, a)
                {
                    if (s && (s.nodeType === 3 || s.nodeType === 8))
                    {
                        return
                    }
                    var o, l, u, c, f, h, p, d, m, v, y = n.type || n,
                        x = [];
                    if (Z.test(y + g.event.triggered))
                    {
                        return
                    }
                    if (y.indexOf("!") >= 0)
                    {
                        y = y.slice(0, -1);
                        l = true
                    }
                    if (y.indexOf(".") >= 0)
                    {
                        x = y.split(".");
                        y = x.shift();
                        x.sort()
                    }
                    if ((!s || g.event.customEvent[y]) && !g.event.global[y])
                    {
                        return
                    }
                    n = typeof n === "object" ? n[g.expando] ? n : new g.Event(y, n) : new g.Event(y);
                    n.type = y;
                    n.isTrigger = true;
                    n.exclusive = l;
                    n.namespace = x.join(".");
                    n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    h = y.indexOf(":") < 0 ? "on" + y : "";
                    if (!s)
                    {
                        o = g.cache;
                        for (u in o)
                        {
                            if (o[u].events && o[u].events[y])
                            {
                                g.event.trigger(n, i, o[u].handle.elem, true)
                            }
                        }
                        return
                    }
                    n.result = t;
                    if (!n.target)
                    {
                        n.target = s
                    }
                    i = i != null ? g.makeArray(i) : [];
                    i.unshift(n);
                    p = g.event.special[y] ||
                        {};
                    if (p.trigger && p.trigger.apply(s, i) === false)
                    {
                        return
                    }
                    m = [
                        [s, p.bindType || y]
                    ];
                    if (!a && !p.noBubble && !g.isWindow(s))
                    {
                        v = p.delegateType || y;
                        c = Z.test(v + y) ? s : s.parentNode;
                        for (f = s; c; c = c.parentNode)
                        {
                            m.push([c, v]);
                            f = c
                        }
                        if (f === (s.ownerDocument || r))
                        {
                            m.push([f.defaultView || f.parentWindow || e, v])
                        }
                    }
                    for (u = 0; u < m.length && !n.isPropagationStopped(); u++)
                    {
                        c = m[u][0];
                        n.type = m[u][1];
                        d = (g._data(c, "events") ||
                            {})[n.type] && g._data(c, "handle");
                        if (d)
                        {
                            d.apply(c, i)
                        }
                        d = h && c[h];
                        if (d && g.acceptData(c) && d.apply && d.apply(c, i) === false)
                        {
                            n.preventDefault()
                        }
                    }
                    n.type = y;
                    if (!a && !n.isDefaultPrevented())
                    {
                        if ((!p._default || p._default.apply(s.ownerDocument, i) === false) && !(y === "click" && g.nodeName(s, "a")) && g.acceptData(s))
                        {
                            if (h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !g.isWindow(s))
                            {
                                f = s[h];
                                if (f)
                                {
                                    s[h] = null
                                }
                                g.event.triggered = y;
                                s[y]();
                                g.event.triggered = t;
                                if (f)
                                {
                                    s[h] = f
                                }
                            }
                        }
                    }
                    return n.result
                },
                dispatch: function (n)
                {
                    n = g.event.fix(n || e.event);
                    var i, r, s, a, o, l, u, f, h, p, d = (g._data(this, "events") ||
                        {})[n.type] || [],
                        m = d.delegateCount,
                        v = c.call(arguments),
                        y = !n.exclusive && !n.namespace,
                        x = g.event.special[n.type] ||
                            {},
                        b = [];
                    v[0] = n;
                    n.delegateTarget = this;
                    if (x.preDispatch && x.preDispatch.call(this, n) === false)
                    {
                        return
                    }
                    if (m && !(n.button && n.type === "click"))
                    {
                        for (s = n.target; s != this; s = s.parentNode || this)
                        {
                            if (s.disabled !== true || n.type !== "click")
                            {
                                o = {};
                                u = [];
                                for (i = 0; i < m; i++)
                                {
                                    f = d[i];
                                    h = f.selector;
                                    if (o[h] === t)
                                    {
                                        o[h] = f.needsContext ? g(h, this).index(s) >= 0 : g.find(h, this, null, [s]).length
                                    }
                                    if (o[h])
                                    {
                                        u.push(f)
                                    }
                                }
                                if (u.length)
                                {
                                    b.push(
                                        {
                                            elem: s,
                                            matches: u
                                        })
                                }
                            }
                        }
                    }
                    if (d.length > m)
                    {
                        b.push(
                            {
                                elem: this,
                                matches: d.slice(m)
                            })
                    }
                    for (i = 0; i < b.length && !n.isPropagationStopped(); i++)
                    {
                        l = b[i];
                        n.currentTarget = l.elem;
                        for (r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++)
                        {
                            f = l.matches[r];
                            if (y || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace))
                            {
                                n.data = f.data;
                                n.handleObj = f;
                                a = ((g.event.special[f.origType] ||
                                    {}).handle || f.handler).apply(l.elem, v);
                                if (a !== t)
                                {
                                    n.result = a;
                                    if (a === false)
                                    {
                                        n.preventDefault();
                                        n.stopPropagation()
                                    }
                                }
                            }
                        }
                    }
                    if (x.postDispatch)
                    {
                        x.postDispatch.call(this, n)
                    }
                    return n.result
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks:
                    {},
                keyHooks:
                    {
                        props: "char charCode key keyCode".split(" "),
                        filter: function (e, t)
                        {
                            if (e.which == null)
                            {
                                e.which = t.charCode != null ? t.charCode : t.keyCode
                            }
                            return e
                        }
                    },
                mouseHooks:
                    {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function (e, n)
                        {
                            var i, s, a, o = n.button,
                                l = n.fromElement;
                            if (e.pageX == null && n.clientX != null)
                            {
                                i = e.target.ownerDocument || r;
                                s = i.documentElement;
                                a = i.body;
                                e.pageX = n.clientX + (s && s.scrollLeft || a && a.scrollLeft || 0) - (s && s.clientLeft || a && a.clientLeft || 0);
                                e.pageY = n.clientY + (s && s.scrollTop || a && a.scrollTop || 0) - (s && s.clientTop || a && a.clientTop || 0)
                            }
                            if (!e.relatedTarget && l)
                            {
                                e.relatedTarget = l === e.target ? n.toElement : l
                            }
                            if (!e.which && o !== t)
                            {
                                e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0
                            }
                            return e
                        }
                    },
                fix: function (e)
                {
                    if (e[g.expando])
                    {
                        return e
                    }
                    var t, n, i = e,
                        s = g.event.fixHooks[e.type] ||
                            {},
                        a = s.props ? this.props.concat(s.props) : this.props;
                    e = g.Event(i);
                    for (t = a.length; t;)
                    {
                        n = a[--t];
                        e[n] = i[n]
                    }
                    if (!e.target)
                    {
                        e.target = i.srcElement || r
                    }
                    if (e.target.nodeType === 3)
                    {
                        e.target = e.target.parentNode
                    }
                    e.metaKey = !!e.metaKey;
                    return s.filter ? s.filter(e, i) : e
                },
                special:
                    {
                        load:
                            {
                                noBubble: true
                            },
                        focus:
                            {
                                delegateType: "focusin"
                            },
                        blur:
                            {
                                delegateType: "focusout"
                            },
                        beforeunload:
                            {
                                setup: function (e, t, n)
                                {
                                    if (g.isWindow(this))
                                    {
                                        this.onbeforeunload = n
                                    }
                                },
                                teardown: function (e, t)
                                {
                                    if (this.onbeforeunload === t)
                                    {
                                        this.onbeforeunload = null
                                    }
                                }
                            }
                    },
                simulate: function (e, t, n, i)
                {
                    var r = g.extend(new g.Event, n,
                        {
                            type: e,
                            isSimulated: true,
                            originalEvent:
                                {}
                        });
                    if (i)
                    {
                        g.event.trigger(r, null, t)
                    }
                    else
                    {
                        g.event.dispatch.call(t, r)
                    }
                    if (r.isDefaultPrevented())
                    {
                        n.preventDefault()
                    }
                }
            };
            g.event.handle = g.event.dispatch;
            g.removeEvent = r.removeEventListener ? function (e, t, n)
            {
                if (e.removeEventListener)
                {
                    e.removeEventListener(t, n, false)
                }
            } : function (e, t, n)
            {
                var i = "on" + t;
                if (e.detachEvent)
                {
                    if (typeof e[i] === "undefined")
                    {
                        e[i] = null
                    }
                    e.detachEvent(i, n)
                }
            };
            g.Event = function (e, t)
            {
                if (!(this instanceof g.Event))
                {
                    return new g.Event(e, t)
                }
                if (e && e.type)
                {
                    this.originalEvent = e;
                    this.type = e.type;
                    this.isDefaultPrevented = e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault() ? te : ee
                }
                else
                {
                    this.type = e
                }
                if (t)
                {
                    g.extend(this, t)
                }
                this.timeStamp = e && e.timeStamp || g.now();
                this[g.expando] = true
            };

            function ee()
            {
                return false
            }

            function te()
            {
                return true
            }
            g.Event.prototype = {
                preventDefault: function ()
                {
                    this.isDefaultPrevented = te;
                    var e = this.originalEvent;
                    if (!e)
                    {
                        return
                    }
                    if (e.preventDefault)
                    {
                        e.preventDefault()
                    }
                    else
                    {
                        e.returnValue = false
                    }
                },
                stopPropagation: function ()
                {
                    this.isPropagationStopped = te;
                    var e = this.originalEvent;
                    if (!e)
                    {
                        return
                    }
                    if (e.stopPropagation)
                    {
                        e.stopPropagation()
                    }
                    e.cancelBubble = true
                },
                stopImmediatePropagation: function ()
                {
                    this.isImmediatePropagationStopped = te;
                    this.stopPropagation()
                },
                isDefaultPrevented: ee,
                isPropagationStopped: ee,
                isImmediatePropagationStopped: ee
            };
            g.each(
                {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                }, function (e, t)
                {
                    g.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e)
                        {
                            var n, i = this,
                                r = e.relatedTarget,
                                s = e.handleObj,
                                a = s.selector;
                            if (!r || r !== i && !g.contains(i, r))
                            {
                                e.type = s.origType;
                                n = s.handler.apply(this, arguments);
                                e.type = t
                            }
                            return n
                        }
                    }
                });
            if (!g.support.submitBubbles)
            {
                g.event.special.submit = {
                    setup: function ()
                    {
                        if (g.nodeName(this, "form"))
                        {
                            return false
                        }
                        g.event.add(this, "click._submit keypress._submit", function (e)
                        {
                            var n = e.target,
                                i = g.nodeName(n, "input") || g.nodeName(n, "button") ? n.form : t;
                            if (i && !g._data(i, "_submit_attached"))
                            {
                                g.event.add(i, "submit._submit", function (e)
                                {
                                    e._submit_bubble = true
                                });
                                g._data(i, "_submit_attached", true)
                            }
                        })
                    },
                    postDispatch: function (e)
                    {
                        if (e._submit_bubble)
                        {
                            delete e._submit_bubble;
                            if (this.parentNode && !e.isTrigger)
                            {
                                g.event.simulate("submit", this.parentNode, e, true)
                            }
                        }
                    },
                    teardown: function ()
                    {
                        if (g.nodeName(this, "form"))
                        {
                            return false
                        }
                        g.event.remove(this, "._submit")
                    }
                }
            }
            if (!g.support.changeBubbles)
            {
                g.event.special.change = {
                    setup: function ()
                    {
                        if (X.test(this.nodeName))
                        {
                            if (this.type === "checkbox" || this.type === "radio")
                            {
                                g.event.add(this, "propertychange._change", function (e)
                                {
                                    if (e.originalEvent.propertyName === "checked")
                                    {
                                        this._just_changed = true
                                    }
                                });
                                g.event.add(this, "click._change", function (e)
                                {
                                    if (this._just_changed && !e.isTrigger)
                                    {
                                        this._just_changed = false
                                    }
                                    g.event.simulate("change", this, e, true)
                                })
                            }
                            return false
                        }
                        g.event.add(this, "beforeactivate._change", function (e)
                        {
                            var t = e.target;
                            if (X.test(t.nodeName) && !g._data(t, "_change_attached"))
                            {
                                g.event.add(t, "change._change", function (e)
                                {
                                    if (this.parentNode && !e.isSimulated && !e.isTrigger)
                                    {
                                        g.event.simulate("change", this.parentNode, e, true)
                                    }
                                });
                                g._data(t, "_change_attached", true)
                            }
                        })
                    },
                    handle: function (e)
                    {
                        var t = e.target;
                        if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                        {
                            return e.handleObj.handler.apply(this, arguments)
                        }
                    },
                    teardown: function ()
                    {
                        g.event.remove(this, "._change");
                        return !X.test(this.nodeName)
                    }
                }
            }
            if (!g.support.focusinBubbles)
            {
                g.each(
                    {
                        focus: "focusin",
                        blur: "focusout"
                    }, function (e, t)
                    {
                        var n = 0,
                            i = function (e)
                            {
                                g.event.simulate(t, e.target, g.event.fix(e), true)
                            };
                        g.event.special[t] = {
                            setup: function ()
                            {
                                if (n++ === 0)
                                {
                                    r.addEventListener(e, i, true)
                                }
                            },
                            teardown: function ()
                            {
                                if (--n === 0)
                                {
                                    r.removeEventListener(e, i, true)
                                }
                            }
                        }
                    })
            }
            g.fn.extend(
                {
                    on: function (e, n, i, r, s)
                    {
                        var a, o;
                        if (typeof e === "object")
                        {
                            if (typeof n !== "string")
                            {
                                i = i || n;
                                n = t
                            }
                            for (o in e)
                            {
                                this.on(o, n, i, e[o], s)
                            }
                            return this
                        }
                        if (i == null && r == null)
                        {
                            r = n;
                            i = n = t
                        }
                        else if (r == null)
                        {
                            if (typeof n === "string")
                            {
                                r = i;
                                i = t
                            }
                            else
                            {
                                r = i;
                                i = n;
                                n = t
                            }
                        }
                        if (r === false)
                        {
                            r = ee
                        }
                        else if (!r)
                        {
                            return this
                        }
                        if (s === 1)
                        {
                            a = r;
                            r = function (e)
                            {
                                g().off(e);
                                return a.apply(this, arguments)
                            };
                            r.guid = a.guid || (a.guid = g.guid++)
                        }
                        return this.each(function ()
                        {
                            g.event.add(this, e, r, i, n)
                        })
                    },
                    one: function (e, t, n, i)
                    {
                        return this.on(e, t, n, i, 1)
                    },
                    off: function (e, n, i)
                    {
                        var r, s;
                        if (e && e.preventDefault && e.handleObj)
                        {
                            r = e.handleObj;
                            g(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                            return this
                        }
                        if (typeof e === "object")
                        {
                            for (s in e)
                            {
                                this.off(s, n, e[s])
                            }
                            return this
                        }
                        if (n === false || typeof n === "function")
                        {
                            i = n;
                            n = t
                        }
                        if (i === false)
                        {
                            i = ee
                        }
                        return this.each(function ()
                        {
                            g.event.remove(this, e, i, n)
                        })
                    },
                    bind: function (e, t, n)
                    {
                        return this.on(e, null, t, n)
                    },
                    unbind: function (e, t)
                    {
                        return this.off(e, null, t)
                    },
                    live: function (e, t, n)
                    {
                        g(this.context).on(e, this.selector, t, n);
                        return this
                    },
                    die: function (e, t)
                    {
                        g(this.context).off(e, this.selector || "**", t);
                        return this
                    },
                    delegate: function (e, t, n, i)
                    {
                        return this.on(t, e, n, i)
                    },
                    undelegate: function (e, t, n)
                    {
                        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    trigger: function (e, t)
                    {
                        return this.each(function ()
                        {
                            g.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function (e, t)
                    {
                        if (this[0])
                        {
                            return g.event.trigger(e, t, this[0], true)
                        }
                    },
                    toggle: function (e)
                    {
                        var t = arguments,
                            n = e.guid || g.guid++,
                            i = 0,
                            r = function (n)
                            {
                                var r = (g._data(this, "lastToggle" + e.guid) || 0) % i;
                                g._data(this, "lastToggle" + e.guid, r + 1);
                                n.preventDefault();
                                return t[r].apply(this, arguments) || false
                            };
                        r.guid = n;
                        while (i < t.length)
                        {
                            t[i++].guid = n
                        }
                        return this.click(r)
                    },
                    hover: function (e, t)
                    {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                });
            g.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (e, t)
            {
                g.fn[t] = function (e, n)
                {
                    if (n == null)
                    {
                        n = e;
                        e = null
                    }
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                };
                if (K.test(t))
                {
                    g.event.fixHooks[t] = g.event.keyHooks
                }
                if (J.test(t))
                {
                    g.event.fixHooks[t] = g.event.mouseHooks
                }
            });
            (function (e, t)
            {
                var n, i, r, s, a, o, l, u, c, f, h = true,
                    p = "undefined",
                    d = ("sizcache" + Math.random()).replace(".", ""),
                    m = String,
                    v = e.document,
                    y = v.documentElement,
                    x = 0,
                    b = 0,
                    _ = [].pop,
                    w = [].push,
                    T = [].slice,
                    E = [].indexOf || function (e)
                    {
                        var t = 0,
                            n = this.length;
                        for (; t < n; t++)
                        {
                            if (this[t] === e)
                            {
                                return t
                            }
                        }
                        return -1
                    },
                    k = function (e, t)
                    {
                        e[d] = t == null || t;
                        return e
                    },
                    S = function ()
                    {
                        var e = {},
                            t = [];
                        return k(function (n, i)
                        {
                            if (t.push(n) > r.cacheLength)
                            {
                                delete e[t.shift()]
                            }
                            return e[n + " "] = i
                        }, e)
                    },
                    N = S(),
                    C = S(),
                    A = S(),
                    P = "[\\x20\\t\\r\\n\\f]",
                    O = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    D = O.replace("w", "w#"),
                    I = "([*^$|!~]?=)",
                    L = "\\[" + P + "*(" + O + ")" + P + "*(?:" + I + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + D + ")|)|)" + P + "*\\]",
                    M = ":(" + O + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + L + ")|[^:]|\\\\.)*|.*))\\)|)",
                    j = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)",
                    R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                    H = new RegExp("^" + P + "*," + P + "*"),
                    F = new RegExp("^" + P + "*([\\x20\\t\\r\\n\\f>+~])" + P + "*"),
                    $ = new RegExp(M),
                    B = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    V = /^:not/,
                    q = /[\x20\t\r\n\f]*[+~]/,
                    W = /:not\($/,
                    z = /h\d/i,
                    U = /input|select|textarea|button/i,
                    X = /\\(?!\\)/g,
                    Y = {
                        ID: new RegExp("^#(" + O + ")"),
                        CLASS: new RegExp("^\\.(" + O + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + O + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + L),
                        PSEUDO: new RegExp("^" + M),
                        POS: new RegExp(j, "i"),
                        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + P + "*[>+~]|" + j, "i")
                    },
                    G = function (e)
                    {
                        var t = v.createElement("div");
                        try
                        {
                            return e(t)
                        }
                        catch (n)
                        {
                            return false
                        }
                        finally
                        {
                            t = null
                        }
                    },
                    K = G(function (e)
                    {
                        e.appendChild(v.createComment(""));
                        return !e.getElementsByTagName("*").length
                    }),
                    J = G(function (e)
                    {
                        e.innerHTML = "<a href='#'></a>";
                        return e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                    }),
                    Z = G(function (e)
                    {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return t !== "boolean" && t !== "string"
                    }),
                    Q = G(function (e)
                    {
                        e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                        if (!e.getElementsByClassName || !e.getElementsByClassName("e").length)
                        {
                            return false
                        }
                        e.lastChild.className = "e";
                        return e.getElementsByClassName("e").length === 2
                    }),
                    ee = G(function (e)
                    {
                        e.id = d + 0;
                        e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>";
                        y.insertBefore(e, y.firstChild);
                        var t = v.getElementsByName && v.getElementsByName(d).length === 2 + v.getElementsByName(d + 0).length;
                        i = !v.getElementById(d);
                        y.removeChild(e);
                        return t
                    });
                try
                {
                    T.call(y.childNodes, 0)[0].nodeType
                }
                catch (te)
                {
                    T = function (e)
                    {
                        var t, n = [];
                        for (; t = this[e]; e++)
                        {
                            n.push(t)
                        }
                        return n
                    }
                }

                function ne(e, t, n, i)
                {
                    n = n || [];
                    t = t || v;
                    var r, s, l, u, c = t.nodeType;
                    if (!e || typeof e !== "string")
                    {
                        return n
                    }
                    if (c !== 1 && c !== 9)
                    {
                        return []
                    }
                    l = a(t);
                    if (!l && !i)
                    {
                        if (r = B.exec(e))
                        {
                            if (u = r[1])
                            {
                                if (c === 9)
                                {
                                    s = t.getElementById(u);
                                    if (s && s.parentNode)
                                    {
                                        if (s.id === u)
                                        {
                                            n.push(s);
                                            return n
                                        }
                                    }
                                    else
                                    {
                                        return n
                                    }
                                }
                                else
                                {
                                    if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && o(t, s) && s.id === u)
                                    {
                                        n.push(s);
                                        return n
                                    }
                                }
                            }
                            else if (r[2])
                            {
                                w.apply(n, T.call(t.getElementsByTagName(e), 0));
                                return n
                            }
                            else if ((u = r[3]) && Q && t.getElementsByClassName)
                            {
                                w.apply(n, T.call(t.getElementsByClassName(u), 0));
                                return n
                            }
                        }
                    }
                    return ge(e.replace(R, "$1"), t, n, i, l)
                }
                ne.matches = function (e, t)
                {
                    return ne(e, null, null, t)
                };
                ne.matchesSelector = function (e, t)
                {
                    return ne(t, null, null, [e]).length > 0
                };

                function ie(e)
                {
                    return function (t)
                    {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e
                    }
                }

                function re(e)
                {
                    return function (t)
                    {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e
                    }
                }

                function se(e)
                {
                    return k(function (t)
                    {
                        t = +t;
                        return k(function (n, i)
                        {
                            var r, s = e([], n.length, t),
                                a = s.length;
                            while (a--)
                            {
                                if (n[r = s[a]])
                                {
                                    n[r] = !(i[r] = n[r])
                                }
                            }
                        })
                    })
                }
                s = ne.getText = function (e)
                {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r)
                    {
                        if (r === 1 || r === 9 || r === 11)
                        {
                            if (typeof e.textContent === "string")
                            {
                                return e.textContent
                            }
                            else
                            {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                {
                                    n += s(e)
                                }
                            }
                        }
                        else if (r === 3 || r === 4)
                        {
                            return e.nodeValue
                        }
                    }
                    else
                    {
                        for (; t = e[i]; i++)
                        {
                            n += s(t)
                        }
                    }
                    return n
                };
                a = ne.isXML = function (e)
                {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : false
                };
                o = ne.contains = y.contains ? function (e, t)
                {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !!(i && i.nodeType === 1 && n.contains && n.contains(i))
                } : y.compareDocumentPosition ? function (e, t)
                {
                    return t && !!(e.compareDocumentPosition(t) & 16)
                } : function (e, t)
                {
                    while (t = t.parentNode)
                    {
                        if (t === e)
                        {
                            return true
                        }
                    }
                    return false
                };
                ne.attr = function (e, t)
                {
                    var n, i = a(e);
                    if (!i)
                    {
                        t = t.toLowerCase()
                    }
                    if (n = r.attrHandle[t])
                    {
                        return n(e)
                    }
                    if (i || Z)
                    {
                        return e.getAttribute(t)
                    }
                    n = e.getAttributeNode(t);
                    return n ? typeof e[t] === "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null
                };
                r = ne.selectors = {
                    cacheLength: 50,
                    createPseudo: k,
                    match: Y,
                    attrHandle: J ?
                        {} :
                        {
                            href: function (e)
                            {
                                return e.getAttribute("href", 2)
                            },
                            type: function (e)
                            {
                                return e.getAttribute("type")
                            }
                        },
                    find:
                        {
                            ID: i ? function (e, t, n)
                            {
                                if (typeof t.getElementById !== p && !n)
                                {
                                    var i = t.getElementById(e);
                                    return i && i.parentNode ? [i] : []
                                }
                            } : function (e, n, i)
                            {
                                if (typeof n.getElementById !== p && !i)
                                {
                                    var r = n.getElementById(e);
                                    return r ? r.id === e || typeof r.getAttributeNode !== p && r.getAttributeNode("id").value === e ? [r] : t : []
                                }
                            },
                            TAG: K ? function (e, t)
                            {
                                if (typeof t.getElementsByTagName !== p)
                                {
                                    return t.getElementsByTagName(e)
                                }
                            } : function (e, t)
                            {
                                var n = t.getElementsByTagName(e);
                                if (e === "*")
                                {
                                    var i, r = [],
                                        s = 0;
                                    for (; i = n[s]; s++)
                                    {
                                        if (i.nodeType === 1)
                                        {
                                            r.push(i)
                                        }
                                    }
                                    return r
                                }
                                return n
                            },
                            NAME: ee && function (e, t)
                            {
                                if (typeof t.getElementsByName !== p)
                                {
                                    return t.getElementsByName(name)
                                }
                            },
                            CLASS: Q && function (e, t, n)
                            {
                                if (typeof t.getElementsByClassName !== p && !n)
                                {
                                    return t.getElementsByClassName(e)
                                }
                            }
                        },
                    relative:
                        {
                            ">":
                                {
                                    dir: "parentNode",
                                    first: true
                                },
                            " ":
                                {
                                    dir: "parentNode"
                                },
                            "+":
                                {
                                    dir: "previousSibling",
                                    first: true
                                },
                            "~":
                                {
                                    dir: "previousSibling"
                                }
                        },
                    preFilter:
                        {
                            ATTR: function (e)
                            {
                                e[1] = e[1].replace(X, "");
                                e[3] = (e[4] || e[5] || "").replace(X, "");
                                if (e[2] === "~=")
                                {
                                    e[3] = " " + e[3] + " "
                                }
                                return e.slice(0, 4)
                            },
                            CHILD: function (e)
                            {
                                e[1] = e[1].toLowerCase();
                                if (e[1] === "nth")
                                {
                                    if (!e[2])
                                    {
                                        ne.error(e[0])
                                    }
                                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd"));
                                    e[4] = +(e[6] + e[7] || e[2] === "odd")
                                }
                                else if (e[2])
                                {
                                    ne.error(e[0])
                                }
                                return e
                            },
                            PSEUDO: function (e)
                            {
                                var t, n;
                                if (Y["CHILD"].test(e[0]))
                                {
                                    return null
                                }
                                if (e[3])
                                {
                                    e[2] = e[3]
                                }
                                else if (t = e[4])
                                {
                                    if ($.test(t) && (n = oe(t, true)) && (n = t.indexOf(")", t.length - n) - t.length))
                                    {
                                        t = t.slice(0, n);
                                        e[0] = e[0].slice(0, n)
                                    }
                                    e[2] = t
                                }
                                return e.slice(0, 3)
                            }
                        },
                    filter:
                        {
                            ID: i ? function (e)
                            {
                                e = e.replace(X, "");
                                return function (t)
                                {
                                    return t.getAttribute("id") === e
                                }
                            } : function (e)
                            {
                                e = e.replace(X, "");
                                return function (t)
                                {
                                    var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                            },
                            TAG: function (e)
                            {
                                if (e === "*")
                                {
                                    return function ()
                                    {
                                        return true
                                    }
                                }
                                e = e.replace(X, "").toLowerCase();
                                return function (t)
                                {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function (e)
                            {
                                var t = N[d][e + " "];
                                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e)
                                {
                                    return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, t, n)
                            {
                                return function (i, r)
                                {
                                    var s = ne.attr(i, e);
                                    if (s == null)
                                    {
                                        return t === "!="
                                    }
                                    if (!t)
                                    {
                                        return true
                                    }
                                    s += "";
                                    return t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : false
                                }
                            },
                            CHILD: function (e, t, n, i)
                            {
                                if (e === "nth")
                                {
                                    return function (e)
                                    {
                                        var t, r, s = e.parentNode;
                                        if (n === 1 && i === 0)
                                        {
                                            return true
                                        }
                                        if (s)
                                        {
                                            r = 0;
                                            for (t = s.firstChild; t; t = t.nextSibling)
                                            {
                                                if (t.nodeType === 1)
                                                {
                                                    r++;
                                                    if (e === t)
                                                    {
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                        r -= i;
                                        return r === n || r % n === 0 && r / n >= 0
                                    }
                                }
                                return function (t)
                                {
                                    var n = t;
                                    switch (e)
                                    {
                                        case "only":
                                        case "first":
                                            while (n = n.previousSibling)
                                            {
                                                if (n.nodeType === 1)
                                                {
                                                    return false
                                                }
                                            }
                                            if (e === "first")
                                            {
                                                return true
                                            }
                                            n = t;
                                        case "last":
                                            while (n = n.nextSibling)
                                            {
                                                if (n.nodeType === 1)
                                                {
                                                    return false
                                                }
                                            }
                                            return true
                                    }
                                }
                            },
                            PSEUDO: function (e, t)
                            {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ne.error("unsupported pseudo: " + e);
                                if (i[d])
                                {
                                    return i(t)
                                }
                                if (i.length > 1)
                                {
                                    n = [e, e, "", t];
                                    return r.setFilters.hasOwnProperty(e.toLowerCase()) ? k(function (e, n)
                                    {
                                        var r, s = i(e, t),
                                            a = s.length;
                                        while (a--)
                                        {
                                            r = E.call(e, s[a]);
                                            e[r] = !(n[r] = s[a])
                                        }
                                    }) : function (e)
                                    {
                                        return i(e, 0, n)
                                    }
                                }
                                return i
                            }
                        },
                    pseudos:
                        {
                            not: k(function (e)
                            {
                                var t = [],
                                    n = [],
                                    i = l(e.replace(R, "$1"));
                                return i[d] ? k(function (e, t, n, r)
                                {
                                    var s, a = i(e, null, r, []),
                                        o = e.length;
                                    while (o--)
                                    {
                                        if (s = a[o])
                                        {
                                            e[o] = !(t[o] = s)
                                        }
                                    }
                                }) : function (e, r, s)
                                {
                                    t[0] = e;
                                    i(t, null, s, n);
                                    return !n.pop()
                                }
                            }),
                            has: k(function (e)
                            {
                                return function (t)
                                {
                                    return ne(e, t).length > 0
                                }
                            }),
                            contains: k(function (e)
                            {
                                return function (t)
                                {
                                    return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                                }
                            }),
                            enabled: function (e)
                            {
                                return e.disabled === false
                            },
                            disabled: function (e)
                            {
                                return e.disabled === true
                            },
                            checked: function (e)
                            {
                                var t = e.nodeName.toLowerCase();
                                return t === "input" && !!e.checked || t === "option" && !!e.selected
                            },
                            selected: function (e)
                            {
                                if (e.parentNode)
                                {
                                    e.parentNode.selectedIndex
                                }
                                return e.selected === true
                            },
                            parent: function (e)
                            {
                                return !r.pseudos["empty"](e)
                            },
                            empty: function (e)
                            {
                                var t;
                                e = e.firstChild;
                                while (e)
                                {
                                    if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)
                                    {
                                        return false
                                    }
                                    e = e.nextSibling
                                }
                                return true
                            },
                            header: function (e)
                            {
                                return z.test(e.nodeName)
                            },
                            text: function (e)
                            {
                                var t, n;
                                return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                            },
                            radio: ie("radio"),
                            checkbox: ie("checkbox"),
                            file: ie("file"),
                            password: ie("password"),
                            image: ie("image"),
                            submit: re("submit"),
                            reset: re("reset"),
                            button: function (e)
                            {
                                var t = e.nodeName.toLowerCase();
                                return t === "input" && e.type === "button" || t === "button"
                            },
                            input: function (e)
                            {
                                return U.test(e.nodeName)
                            },
                            focus: function (e)
                            {
                                var t = e.ownerDocument;
                                return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            active: function (e)
                            {
                                return e === e.ownerDocument.activeElement
                            },
                            first: se(function ()
                            {
                                return [0]
                            }),
                            last: se(function (e, t)
                            {
                                return [t - 1]
                            }),
                            eq: se(function (e, t, n)
                            {
                                return [n < 0 ? n + t : n]
                            }),
                            even: se(function (e, t)
                            {
                                for (var n = 0; n < t; n += 2)
                                {
                                    e.push(n)
                                }
                                return e
                            }),
                            odd: se(function (e, t)
                            {
                                for (var n = 1; n < t; n += 2)
                                {
                                    e.push(n)
                                }
                                return e
                            }),
                            lt: se(function (e, t, n)
                            {
                                for (var i = n < 0 ? n + t : n; --i >= 0;)
                                {
                                    e.push(i)
                                }
                                return e
                            }),
                            gt: se(function (e, t, n)
                            {
                                for (var i = n < 0 ? n + t : n; ++i < t;)
                                {
                                    e.push(i)
                                }
                                return e
                            })
                        }
                };

                function ae(e, t, n)
                {
                    if (e === t)
                    {
                        return n
                    }
                    var i = e.nextSibling;
                    while (i)
                    {
                        if (i === t)
                        {
                            return -1
                        }
                        i = i.nextSibling
                    }
                    return 1
                }
                u = y.compareDocumentPosition ? function (e, t)
                {
                    if (e === t)
                    {
                        c = true;
                        return 0
                    }
                    return (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
                } : function (e, t)
                {
                    if (e === t)
                    {
                        c = true;
                        return 0
                    }
                    else if (e.sourceIndex && t.sourceIndex)
                    {
                        return e.sourceIndex - t.sourceIndex
                    }
                    var n, i, r = [],
                        s = [],
                        a = e.parentNode,
                        o = t.parentNode,
                        l = a;
                    if (a === o)
                    {
                        return ae(e, t)
                    }
                    else if (!a)
                    {
                        return -1
                    }
                    else if (!o)
                    {
                        return 1
                    }
                    while (l)
                    {
                        r.unshift(l);
                        l = l.parentNode
                    }
                    l = o;
                    while (l)
                    {
                        s.unshift(l);
                        l = l.parentNode
                    }
                    n = r.length;
                    i = s.length;
                    for (var u = 0; u < n && u < i; u++)
                    {
                        if (r[u] !== s[u])
                        {
                            return ae(r[u], s[u])
                        }
                    }
                    return u === n ? ae(e, s[u], -1) : ae(r[u], t, 1)
                };
                [0, 0].sort(u);
                h = !c;
                ne.uniqueSort = function (e)
                {
                    var t, n = [],
                        i = 1,
                        r = 0;
                    c = h;
                    e.sort(u);
                    if (c)
                    {
                        for (; t = e[i]; i++)
                        {
                            if (t === e[i - 1])
                            {
                                r = n.push(i)
                            }
                        }
                        while (r--)
                        {
                            e.splice(n[r], 1)
                        }
                    }
                    return e
                };
                ne.error = function (e)
                {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                };

                function oe(e, t)
                {
                    var n, i, s, a, o, l, u, c = C[d][e + " "];
                    if (c)
                    {
                        return t ? 0 : c.slice(0)
                    }
                    o = e;
                    l = [];
                    u = r.preFilter;
                    while (o)
                    {
                        if (!n || (i = H.exec(o)))
                        {
                            if (i)
                            {
                                o = o.slice(i[0].length) || o
                            }
                            l.push(s = [])
                        }
                        n = false;
                        if (i = F.exec(o))
                        {
                            s.push(n = new m(i.shift()));
                            o = o.slice(n.length);
                            n.type = i[0].replace(R, " ")
                        }
                        for (a in r.filter)
                        {
                            if ((i = Y[a].exec(o)) && (!u[a] || (i = u[a](i))))
                            {
                                s.push(n = new m(i.shift()));
                                o = o.slice(n.length);
                                n.type = a;
                                n.matches = i
                            }
                        }
                        if (!n)
                        {
                            break
                        }
                    }
                    return t ? o.length : o ? ne.error(e) : C(e, l).slice(0)
                }

                function le(e, t, i)
                {
                    var r = t.dir,
                        s = i && t.dir === "parentNode",
                        a = b++;
                    return t.first ? function (t, n, i)
                    {
                        while (t = t[r])
                        {
                            if (s || t.nodeType === 1)
                            {
                                return e(t, n, i)
                            }
                        }
                    } : function (t, i, o)
                    {
                        if (!o)
                        {
                            var l, u = x + " " + a + " ",
                                c = u + n;
                            while (t = t[r])
                            {
                                if (s || t.nodeType === 1)
                                {
                                    if ((l = t[d]) === c)
                                    {
                                        return t.sizset
                                    }
                                    else if (typeof l === "string" && l.indexOf(u) === 0)
                                    {
                                        if (t.sizset)
                                        {
                                            return t
                                        }
                                    }
                                    else
                                    {
                                        t[d] = c;
                                        if (e(t, i, o))
                                        {
                                            t.sizset = true;
                                            return t
                                        }
                                        t.sizset = false
                                    }
                                }
                            }
                        }
                        else
                        {
                            while (t = t[r])
                            {
                                if (s || t.nodeType === 1)
                                {
                                    if (e(t, i, o))
                                    {
                                        return t
                                    }
                                }
                            }
                        }
                    }
                }

                function ue(e)
                {
                    return e.length > 1 ? function (t, n, i)
                    {
                        var r = e.length;
                        while (r--)
                        {
                            if (!e[r](t, n, i))
                            {
                                return false
                            }
                        }
                        return true
                    } : e[0]
                }

                function ce(e, t, n, i, r)
                {
                    var s, a = [],
                        o = 0,
                        l = e.length,
                        u = t != null;
                    for (; o < l; o++)
                    {
                        if (s = e[o])
                        {
                            if (!n || n(s, i, r))
                            {
                                a.push(s);
                                if (u)
                                {
                                    t.push(o)
                                }
                            }
                        }
                    }
                    return a
                }

                function fe(e, t, n, i, r, s)
                {
                    if (i && !i[d])
                    {
                        i = fe(i)
                    }
                    if (r && !r[d])
                    {
                        r = fe(r, s)
                    }
                    return k(function (s, a, o, l)
                    {
                        var u, c, f, h = [],
                            p = [],
                            d = a.length,
                            g = s || de(t || "*", o.nodeType ? [o] : o, []),
                            m = e && (s || !t) ? ce(g, h, e, o, l) : g,
                            v = n ? r || (s ? e : d || i) ? [] : a : m;
                        if (n)
                        {
                            n(m, v, o, l)
                        }
                        if (i)
                        {
                            u = ce(v, p);
                            i(u, [], o, l);
                            c = u.length;
                            while (c--)
                            {
                                if (f = u[c])
                                {
                                    v[p[c]] = !(m[p[c]] = f)
                                }
                            }
                        }
                        if (s)
                        {
                            if (r || e)
                            {
                                if (r)
                                {
                                    u = [];
                                    c = v.length;
                                    while (c--)
                                    {
                                        if (f = v[c])
                                        {
                                            u.push(m[c] = f)
                                        }
                                    }
                                    r(null, v = [], u, l)
                                }
                                c = v.length;
                                while (c--)
                                {
                                    if ((f = v[c]) && (u = r ? E.call(s, f) : h[c]) > -1)
                                    {
                                        s[u] = !(a[u] = f)
                                    }
                                }
                            }
                        }
                        else
                        {
                            v = ce(v === a ? v.splice(d, v.length) : v);
                            if (r)
                            {
                                r(null, a, v, l)
                            }
                            else
                            {
                                w.apply(a, v)
                            }
                        }
                    })
                }

                function he(e)
                {
                    var t, n, i, s = e.length,
                        a = r.relative[e[0].type],
                        o = a || r.relative[" "],
                        l = a ? 1 : 0,
                        u = le(function (e)
                        {
                            return e === t
                        }, o, true),
                        c = le(function (e)
                        {
                            return E.call(t, e) > -1
                        }, o, true),
                        h = [function (e, n, i)
                        {
                            return !a && (i || n !== f) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i))
                        }];
                    for (; l < s; l++)
                    {
                        if (n = r.relative[e[l].type])
                        {
                            h = [le(ue(h), n)]
                        }
                        else
                        {
                            n = r.filter[e[l].type].apply(null, e[l].matches);
                            if (n[d])
                            {
                                i = ++l;
                                for (; i < s; i++)
                                {
                                    if (r.relative[e[i].type])
                                    {
                                        break
                                    }
                                }
                                return fe(l > 1 && ue(h), l > 1 && e.slice(0, l - 1).join("").replace(R, "$1"), n, l < i && he(e.slice(l, i)), i < s && he(e = e.slice(i)), i < s && e.join(""))
                            }
                            h.push(n)
                        }
                    }
                    return ue(h)
                }

                function pe(e, t)
                {
                    var i = t.length > 0,
                        s = e.length > 0,
                        a = function (o, l, u, c, h)
                        {
                            var p, d, g, m = [],
                                y = 0,
                                b = "0",
                                T = o && [],
                                E = h != null,
                                k = f,
                                S = o || s && r.find["TAG"]("*", h && l.parentNode || l),
                                N = x += k == null ? 1 : Math.E;
                            if (E)
                            {
                                f = l !== v && l;
                                n = a.el
                            }
                            for (;
                                (p = S[b]) != null; b++)
                            {
                                if (s && p)
                                {
                                    for (d = 0; g = e[d]; d++)
                                    {
                                        if (g(p, l, u))
                                        {
                                            c.push(p);
                                            break
                                        }
                                    }
                                    if (E)
                                    {
                                        x = N;
                                        n = ++a.el
                                    }
                                }
                                if (i)
                                {
                                    if (p = !g && p)
                                    {
                                        y--
                                    }
                                    if (o)
                                    {
                                        T.push(p)
                                    }
                                }
                            }
                            y += b;
                            if (i && b !== y)
                            {
                                for (d = 0; g = t[d]; d++)
                                {
                                    g(T, m, l, u)
                                }
                                if (o)
                                {
                                    if (y > 0)
                                    {
                                        while (b--)
                                        {
                                            if (!(T[b] || m[b]))
                                            {
                                                m[b] = _.call(c)
                                            }
                                        }
                                    }
                                    m = ce(m)
                                }
                                w.apply(c, m);
                                if (E && !o && m.length > 0 && y + t.length > 1)
                                {
                                    ne.uniqueSort(c)
                                }
                            }
                            if (E)
                            {
                                x = N;
                                f = k
                            }
                            return T
                        };
                    a.el = 0;
                    return i ? k(a) : a
                }
                l = ne.compile = function (e, t)
                {
                    var n, i = [],
                        r = [],
                        s = A[d][e + " "];
                    if (!s)
                    {
                        if (!t)
                        {
                            t = oe(e)
                        }
                        n = t.length;
                        while (n--)
                        {
                            s = he(t[n]);
                            if (s[d])
                            {
                                i.push(s)
                            }
                            else
                            {
                                r.push(s)
                            }
                        }
                        s = A(e, pe(r, i))
                    }
                    return s
                };

                function de(e, t, n)
                {
                    var i = 0,
                        r = t.length;
                    for (; i < r; i++)
                    {
                        ne(e, t[i], n)
                    }
                    return n
                }

                function ge(e, t, n, i, s)
                {
                    var a, o, u, c, f, h = oe(e),
                        p = h.length;
                    if (!i)
                    {
                        if (h.length === 1)
                        {
                            o = h[0] = h[0].slice(0);
                            if (o.length > 2 && (u = o[0]).type === "ID" && t.nodeType === 9 && !s && r.relative[o[1].type])
                            {
                                t = r.find["ID"](u.matches[0].replace(X, ""), t, s)[0];
                                if (!t)
                                {
                                    return n
                                }
                                e = e.slice(o.shift().length)
                            }
                            for (a = Y["POS"].test(e) ? -1 : o.length - 1; a >= 0; a--)
                            {
                                u = o[a];
                                if (r.relative[c = u.type])
                                {
                                    break
                                }
                                if (f = r.find[c])
                                {
                                    if (i = f(u.matches[0].replace(X, ""), q.test(o[0].type) && t.parentNode || t, s))
                                    {
                                        o.splice(a, 1);
                                        e = i.length && o.join("");
                                        if (!e)
                                        {
                                            w.apply(n, T.call(i, 0));
                                            return n
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }
                    l(e, h)(i, t, s, n, q.test(e));
                    return n
                }
                if (v.querySelectorAll)
                {
                    (function ()
                    {
                        var e, t = ge,
                            n = /'|\\/g,
                            i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                            r = [":focus"],
                            s = [":active"],
                            o = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                        G(function (e)
                        {
                            e.innerHTML = "<select><option selected=''></option></select>";
                            if (!e.querySelectorAll("[selected]").length)
                            {
                                r.push("\\[" + P + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                            }
                            if (!e.querySelectorAll(":checked").length)
                            {
                                r.push(":checked")
                            }
                        });
                        G(function (e)
                        {
                            e.innerHTML = "<p test=''></p>";
                            if (e.querySelectorAll("[test^='']").length)
                            {
                                r.push("[*^$]=" + P + "*(?:\"\"|'')")
                            }
                            e.innerHTML = "<input type='hidden'/>";
                            if (!e.querySelectorAll(":enabled").length)
                            {
                                r.push(":enabled", ":disabled")
                            }
                        });
                        r = new RegExp(r.join("|"));
                        ge = function (e, i, s, a, o)
                        {
                            if (!a && !o && !r.test(e))
                            {
                                var l, u, c = true,
                                    f = d,
                                    h = i,
                                    p = i.nodeType === 9 && e;
                                if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object")
                                {
                                    l = oe(e);
                                    if (c = i.getAttribute("id"))
                                    {
                                        f = c.replace(n, "\\$&")
                                    }
                                    else
                                    {
                                        i.setAttribute("id", f)
                                    }
                                    f = "[id='" + f + "'] ";
                                    u = l.length;
                                    while (u--)
                                    {
                                        l[u] = f + l[u].join("")
                                    }
                                    h = q.test(e) && i.parentNode || i;
                                    p = l.join(",")
                                }
                                if (p)
                                {
                                    try
                                    {
                                        w.apply(s, T.call(h.querySelectorAll(p), 0));
                                        return s
                                    }
                                    catch (g)
                                    {}
                                    finally
                                    {
                                        if (!c)
                                        {
                                            i.removeAttribute("id")
                                        }
                                    }
                                }
                            }
                            return t(e, i, s, a, o)
                        };
                        if (o)
                        {
                            G(function (t)
                            {
                                e = o.call(t, "div");
                                try
                                {
                                    o.call(t, "[test!='']:sizzle");
                                    s.push("!=", M)
                                }
                                catch (n)
                                {}
                            });
                            s = new RegExp(s.join("|"));
                            ne.matchesSelector = function (t, n)
                            {
                                n = n.replace(i, "='$1']");
                                if (!a(t) && !s.test(n) && !r.test(n))
                                {
                                    try
                                    {
                                        var l = o.call(t, n);
                                        if (l || e || t.document && t.document.nodeType !== 11)
                                        {
                                            return l
                                        }
                                    }
                                    catch (u)
                                    {}
                                }
                                return ne(n, null, null, [t]).length > 0
                            }
                        }
                    })()
                }
                r.pseudos["nth"] = r.pseudos["eq"];

                function me()
                {}
                r.filters = me.prototype = r.pseudos;
                r.setFilters = new me;
                ne.attr = g.attr;
                g.find = ne;
                g.expr = ne.selectors;
                g.expr[":"] = g.expr.pseudos;
                g.unique = ne.uniqueSort;
                g.text = ne.getText;
                g.isXMLDoc = ne.isXML;
                g.contains = ne.contains
            })(e);
            var ne = /Until$/,
                ie = /^(?:parents|prev(?:Until|All))/,
                re = /^.[^:#\[\.,]*$/,
                se = g.expr.match.needsContext,
                ae = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
            g.fn.extend(
                {
                    find: function (e)
                    {
                        var t, n, i, r, s, a, o = this;
                        if (typeof e !== "string")
                        {
                            return g(e).filter(function ()
                            {
                                for (t = 0, n = o.length; t < n; t++)
                                {
                                    if (g.contains(o[t], this))
                                    {
                                        return true
                                    }
                                }
                            })
                        }
                        a = this.pushStack("", "find", e);
                        for (t = 0, n = this.length; t < n; t++)
                        {
                            i = a.length;
                            g.find(e, this[t], a);
                            if (t > 0)
                            {
                                for (r = i; r < a.length; r++)
                                {
                                    for (s = 0; s < i; s++)
                                    {
                                        if (a[s] === a[r])
                                        {
                                            a.splice(r--, 1);
                                            break
                                        }
                                    }
                                }
                            }
                        }
                        return a
                    },
                    has: function (e)
                    {
                        var t, n = g(e, this),
                            i = n.length;
                        return this.filter(function ()
                        {
                            for (t = 0; t < i; t++)
                            {
                                if (g.contains(this, n[t]))
                                {
                                    return true
                                }
                            }
                        })
                    },
                    not: function (e)
                    {
                        return this.pushStack(ue(this, e, false), "not", e)
                    },
                    filter: function (e)
                    {
                        return this.pushStack(ue(this, e, true), "filter", e)
                    },
                    is: function (e)
                    {
                        return !!e && (typeof e === "string" ? se.test(e) ? g(e, this.context).index(this[0]) >= 0 : g.filter(e, this).length > 0 : this.filter(e).length > 0)
                    },
                    closest: function (e, t)
                    {
                        var n, i = 0,
                            r = this.length,
                            s = [],
                            a = se.test(e) || typeof e !== "string" ? g(e, t || this.context) : 0;
                        for (; i < r; i++)
                        {
                            n = this[i];
                            while (n && n.ownerDocument && n !== t && n.nodeType !== 11)
                            {
                                if (a ? a.index(n) > -1 : g.find.matchesSelector(n, e))
                                {
                                    s.push(n);
                                    break
                                }
                                n = n.parentNode
                            }
                        }
                        s = s.length > 1 ? g.unique(s) : s;
                        return this.pushStack(s, "closest", e)
                    },
                    index: function (e)
                    {
                        if (!e)
                        {
                            return this[0] && this[0].parentNode ? this.prevAll().length : -1
                        }
                        if (typeof e === "string")
                        {
                            return g.inArray(this[0], g(e))
                        }
                        return g.inArray(e.jquery ? e[0] : e, this)
                    },
                    add: function (e, t)
                    {
                        var n = typeof e === "string" ? g(e, t) : g.makeArray(e && e.nodeType ? [e] : e),
                            i = g.merge(this.get(), n);
                        return this.pushStack(oe(n[0]) || oe(i[0]) ? i : g.unique(i))
                    },
                    addBack: function (e)
                    {
                        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                    }
                });
            g.fn.andSelf = g.fn.addBack;

            function oe(e)
            {
                return !e || !e.parentNode || e.parentNode.nodeType === 11
            }

            function le(e, t)
            {
                do {
                    e = e[t]
                } while (e && e.nodeType !== 1);
                return e
            }
            g.each(
                {
                    parent: function (e)
                    {
                        var t = e.parentNode;
                        return t && t.nodeType !== 11 ? t : null
                    },
                    parents: function (e)
                    {
                        return g.dir(e, "parentNode")
                    },
                    parentsUntil: function (e, t, n)
                    {
                        return g.dir(e, "parentNode", n)
                    },
                    next: function (e)
                    {
                        return le(e, "nextSibling")
                    },
                    prev: function (e)
                    {
                        return le(e, "previousSibling")
                    },
                    nextAll: function (e)
                    {
                        return g.dir(e, "nextSibling")
                    },
                    prevAll: function (e)
                    {
                        return g.dir(e, "previousSibling")
                    },
                    nextUntil: function (e, t, n)
                    {
                        return g.dir(e, "nextSibling", n)
                    },
                    prevUntil: function (e, t, n)
                    {
                        return g.dir(e, "previousSibling", n)
                    },
                    siblings: function (e)
                    {
                        return g.sibling((e.parentNode ||
                            {}).firstChild, e)
                    },
                    children: function (e)
                    {
                        return g.sibling(e.firstChild)
                    },
                    contents: function (e)
                    {
                        return g.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : g.merge([], e.childNodes)
                    }
                }, function (e, t)
                {
                    g.fn[e] = function (n, i)
                    {
                        var r = g.map(this, t, n);
                        if (!ne.test(e))
                        {
                            i = n
                        }
                        if (i && typeof i === "string")
                        {
                            r = g.filter(i, r)
                        }
                        r = this.length > 1 && !ae[e] ? g.unique(r) : r;
                        if (this.length > 1 && ie.test(e))
                        {
                            r = r.reverse()
                        }
                        return this.pushStack(r, e, c.call(arguments).join(","))
                    }
                });
            g.extend(
                {
                    filter: function (e, t, n)
                    {
                        if (n)
                        {
                            e = ":not(" + e + ")"
                        }
                        return t.length === 1 ? g.find.matchesSelector(t[0], e) ? [t[0]] : [] : g.find.matches(e, t)
                    },
                    dir: function (e, n, i)
                    {
                        var r = [],
                            s = e[n];
                        while (s && s.nodeType !== 9 && (i === t || s.nodeType !== 1 || !g(s).is(i)))
                        {
                            if (s.nodeType === 1)
                            {
                                r.push(s)
                            }
                            s = s[n]
                        }
                        return r
                    },
                    sibling: function (e, t)
                    {
                        var n = [];
                        for (; e; e = e.nextSibling)
                        {
                            if (e.nodeType === 1 && e !== t)
                            {
                                n.push(e)
                            }
                        }
                        return n
                    }
                });

            function ue(e, t, n)
            {
                t = t || 0;
                if (g.isFunction(t))
                {
                    return g.grep(e, function (e, i)
                    {
                        var r = !!t.call(e, i, e);
                        return r === n
                    })
                }
                else if (t.nodeType)
                {
                    return g.grep(e, function (e, i)
                    {
                        return e === t === n
                    })
                }
                else if (typeof t === "string")
                {
                    var i = g.grep(e, function (e)
                    {
                        return e.nodeType === 1
                    });
                    if (re.test(t))
                    {
                        return g.filter(t, i, !n)
                    }
                    else
                    {
                        t = g.filter(t, i)
                    }
                }
                return g.grep(e, function (e, i)
                {
                    return g.inArray(e, t) >= 0 === n
                })
            }

            function ce(e)
            {
                var t = fe.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                {
                    while (t.length)
                    {
                        n.createElement(t.pop())
                    }
                }
                return n
            }
            var fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                he = / jQuery\d+="(?:null|\d+)"/g,
                pe = /^\s+/,
                de = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                ge = /<([\w:]+)/,
                me = /<tbody/i,
                ve = /<|&#?\w+;/,
                ye = /<(?:script|style|link)/i,
                xe = /<(?:script|object|embed|option|style)/i,
                be = new RegExp("<(?:" + fe + ")[\\s/>]", "i"),
                _e = /^(?:checkbox|radio)$/,
                we = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Te = /\/(java|ecma)script/i,
                Ee = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
                ke = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    area: [1, "<map>", "</map>"],
                    _default: [0, "", ""]
                },
                Se = ce(r),
                Ne = Se.appendChild(r.createElement("div"));
            ke.optgroup = ke.option;
            ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead;
            ke.th = ke.td;
            if (!g.support.htmlSerialize)
            {
                ke._default = [1, "X<div>", "</div>"]
            }
            g.fn.extend(
                {
                    text: function (e)
                    {
                        return g.access(this, function (e)
                        {
                            return e === t ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e))
                        }, null, e, arguments.length)
                    },
                    wrapAll: function (e)
                    {
                        if (g.isFunction(e))
                        {
                            return this.each(function (t)
                            {
                                g(this).wrapAll(e.call(this, t))
                            })
                        }
                        if (this[0])
                        {
                            var t = g(e, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode)
                            {
                                t.insertBefore(this[0])
                            }
                            t.map(function ()
                            {
                                var e = this;
                                while (e.firstChild && e.firstChild.nodeType === 1)
                                {
                                    e = e.firstChild
                                }
                                return e
                            }).append(this)
                        }
                        return this
                    },
                    wrapInner: function (e)
                    {
                        if (g.isFunction(e))
                        {
                            return this.each(function (t)
                            {
                                g(this).wrapInner(e.call(this, t))
                            })
                        }
                        return this.each(function ()
                        {
                            var t = g(this),
                                n = t.contents();
                            if (n.length)
                            {
                                n.wrapAll(e)
                            }
                            else
                            {
                                t.append(e)
                            }
                        })
                    },
                    wrap: function (e)
                    {
                        var t = g.isFunction(e);
                        return this.each(function (n)
                        {
                            g(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function ()
                    {
                        return this.parent().each(function ()
                        {
                            if (!g.nodeName(this, "body"))
                            {
                                g(this).replaceWith(this.childNodes)
                            }
                        }).end()
                    },
                    append: function ()
                    {
                        return this.domManip(arguments, true, function (e)
                        {
                            if (this.nodeType === 1 || this.nodeType === 11)
                            {
                                this.appendChild(e)
                            }
                        })
                    },
                    prepend: function ()
                    {
                        return this.domManip(arguments, true, function (e)
                        {
                            if (this.nodeType === 1 || this.nodeType === 11)
                            {
                                this.insertBefore(e, this.firstChild)
                            }
                        })
                    },
                    before: function ()
                    {
                        if (!oe(this[0]))
                        {
                            return this.domManip(arguments, false, function (e)
                            {
                                this.parentNode.insertBefore(e, this)
                            })
                        }
                        if (arguments.length)
                        {
                            var e = g.clean(arguments);
                            return this.pushStack(g.merge(e, this), "before", this.selector)
                        }
                    },
                    after: function ()
                    {
                        if (!oe(this[0]))
                        {
                            return this.domManip(arguments, false, function (e)
                            {
                                this.parentNode.insertBefore(e, this.nextSibling)
                            })
                        }
                        if (arguments.length)
                        {
                            var e = g.clean(arguments);
                            return this.pushStack(g.merge(this, e), "after", this.selector)
                        }
                    },
                    remove: function (e, t)
                    {
                        var n, i = 0;
                        for (;
                            (n = this[i]) != null; i++)
                        {
                            if (!e || g.filter(e, [n]).length)
                            {
                                if (!t && n.nodeType === 1)
                                {
                                    g.cleanData(n.getElementsByTagName("*"));
                                    g.cleanData([n])
                                }
                                if (n.parentNode)
                                {
                                    n.parentNode.removeChild(n)
                                }
                            }
                        }
                        return this
                    },
                    empty: function ()
                    {
                        var e, t = 0;
                        for (;
                            (e = this[t]) != null; t++)
                        {
                            if (e.nodeType === 1)
                            {
                                g.cleanData(e.getElementsByTagName("*"))
                            }
                            while (e.firstChild)
                            {
                                e.removeChild(e.firstChild)
                            }
                        }
                        return this
                    },
                    clone: function (e, t)
                    {
                        e = e == null ? false : e;
                        t = t == null ? e : t;
                        return this.map(function ()
                        {
                            return g.clone(this, e, t)
                        })
                    },
                    html: function (e)
                    {
                        return g.access(this, function (e)
                        {
                            var n = this[0] ||
                                {},
                                i = 0,
                                r = this.length;
                            if (e === t)
                            {
                                return n.nodeType === 1 ? n.innerHTML.replace(he, "") : t
                            }
                            if (typeof e === "string" && !ye.test(e) && (g.support.htmlSerialize || !be.test(e)) && (g.support.leadingWhitespace || !pe.test(e)) && !ke[(ge.exec(e) || ["", ""])[1].toLowerCase()])
                            {
                                e = e.replace(de, "<$1></$2>");
                                try
                                {
                                    for (; i < r; i++)
                                    {
                                        n = this[i] ||
                                            {};
                                        if (n.nodeType === 1)
                                        {
                                            g.cleanData(n.getElementsByTagName("*"));
                                            n.innerHTML = e
                                        }
                                    }
                                    n = 0
                                }
                                catch (s)
                                {}
                            }
                            if (n)
                            {
                                this.empty().append(e)
                            }
                        }, null, e, arguments.length)
                    },
                    replaceWith: function (e)
                    {
                        if (!oe(this[0]))
                        {
                            if (g.isFunction(e))
                            {
                                return this.each(function (t)
                                {
                                    var n = g(this),
                                        i = n.html();
                                    n.replaceWith(e.call(this, t, i))
                                })
                            }
                            if (typeof e !== "string")
                            {
                                e = g(e).detach()
                            }
                            return this.each(function ()
                            {
                                var t = this.nextSibling,
                                    n = this.parentNode;
                                g(this).remove();
                                if (t)
                                {
                                    g(t).before(e)
                                }
                                else
                                {
                                    g(n).append(e)
                                }
                            })
                        }
                        return this.length ? this.pushStack(g(g.isFunction(e) ? e() : e), "replaceWith", e) : this
                    },
                    detach: function (e)
                    {
                        return this.remove(e, true)
                    },
                    domManip: function (e, n, i)
                    {
                        e = [].concat.apply([], e);
                        var r, s, a, o, l = 0,
                            u = e[0],
                            c = [],
                            f = this.length;
                        if (!g.support.checkClone && f > 1 && typeof u === "string" && we.test(u))
                        {
                            return this.each(function ()
                            {
                                g(this).domManip(e, n, i)
                            })
                        }
                        if (g.isFunction(u))
                        {
                            return this.each(function (r)
                            {
                                var s = g(this);
                                e[0] = u.call(this, r, n ? s.html() : t);
                                s.domManip(e, n, i)
                            })
                        }
                        if (this[0])
                        {
                            r = g.buildFragment(e, this, c);
                            a = r.fragment;
                            s = a.firstChild;
                            if (a.childNodes.length === 1)
                            {
                                a = s
                            }
                            if (s)
                            {
                                n = n && g.nodeName(s, "tr");
                                for (o = r.cacheable || f - 1; l < f; l++)
                                {
                                    i.call(n && g.nodeName(this[l], "table") ? Ce(this[l], "tbody") : this[l], l === o ? a : g.clone(a, true, true))
                                }
                            }
                            a = s = null;
                            if (c.length)
                            {
                                g.each(c, function (e, t)
                                {
                                    if (t.src)
                                    {
                                        if (g.ajax)
                                        {
                                            g.ajax(
                                                {
                                                    url: t.src,
                                                    type: "GET",
                                                    dataType: "script",
                                                    async: false,
                                                    global: false,
                                                    "throws": true
                                                })
                                        }
                                        else
                                        {
                                            g.error("no ajax")
                                        }
                                    }
                                    else
                                    {
                                        g.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ee, ""))
                                    }
                                    if (t.parentNode)
                                    {
                                        t.parentNode.removeChild(t)
                                    }
                                })
                            }
                        }
                        return this
                    }
                });

            function Ce(e, t)
            {
                return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
            }

            function Ae(e, t)
            {
                if (t.nodeType !== 1 || !g.hasData(e))
                {
                    return
                }
                var n, i, r, s = g._data(e),
                    a = g._data(t, s),
                    o = s.events;
                if (o)
                {
                    delete a.handle;
                    a.events = {};
                    for (n in o)
                    {
                        for (i = 0, r = o[n].length; i < r; i++)
                        {
                            g.event.add(t, n, o[n][i])
                        }
                    }
                }
                if (a.data)
                {
                    a.data = g.extend(
                        {}, a.data)
                }
            }

            function Pe(e, t)
            {
                var n;
                if (t.nodeType !== 1)
                {
                    return
                }
                if (t.clearAttributes)
                {
                    t.clearAttributes()
                }
                if (t.mergeAttributes)
                {
                    t.mergeAttributes(e)
                }
                n = t.nodeName.toLowerCase();
                if (n === "object")
                {
                    if (t.parentNode)
                    {
                        t.outerHTML = e.outerHTML
                    }
                    if (g.support.html5Clone && (e.innerHTML && !g.trim(t.innerHTML)))
                    {
                        t.innerHTML = e.innerHTML
                    }
                }
                else if (n === "input" && _e.test(e.type))
                {
                    t.defaultChecked = t.checked = e.checked;
                    if (t.value !== e.value)
                    {
                        t.value = e.value
                    }
                }
                else if (n === "option")
                {
                    t.selected = e.defaultSelected
                }
                else if (n === "input" || n === "textarea")
                {
                    t.defaultValue = e.defaultValue
                }
                else if (n === "script" && t.text !== e.text)
                {
                    t.text = e.text
                }
                t.removeAttribute(g.expando)
            }
            g.buildFragment = function (e, n, i)
            {
                var s, a, o, l = e[0];
                n = n || r;
                n = !n.nodeType && n[0] || n;
                n = n.ownerDocument || n;
                if (e.length === 1 && typeof l === "string" && l.length < 512 && n === r && l.charAt(0) === "<" && !xe.test(l) && (g.support.checkClone || !we.test(l)) && (g.support.html5Clone || !be.test(l)))
                {
                    a = true;
                    s = g.fragments[l];
                    o = s !== t
                }
                if (!s)
                {
                    s = n.createDocumentFragment();
                    g.clean(e, n, s, i);
                    if (a)
                    {
                        g.fragments[l] = o && s
                    }
                }
                return {
                    fragment: s,
                    cacheable: a
                }
            };
            g.fragments = {};
            g.each(
                {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (e, t)
                {
                    g.fn[e] = function (n)
                    {
                        var i, r = 0,
                            s = [],
                            a = g(n),
                            o = a.length,
                            l = this.length === 1 && this[0].parentNode;
                        if ((l == null || l && l.nodeType === 11 && l.childNodes.length === 1) && o === 1)
                        {
                            a[t](this[0]);
                            return this
                        }
                        else
                        {
                            for (; r < o; r++)
                            {
                                i = (r > 0 ? this.clone(true) : this).get();
                                g(a[r])[t](i);
                                s = s.concat(i)
                            }
                            return this.pushStack(s, e, a.selector)
                        }
                    }
                });

            function Oe(e)
            {
                if (typeof e.getElementsByTagName !== "undefined")
                {
                    return e.getElementsByTagName("*")
                }
                else if (typeof e.querySelectorAll !== "undefined")
                {
                    return e.querySelectorAll("*")
                }
                else
                {
                    return []
                }
            }

            function De(e)
            {
                if (_e.test(e.type))
                {
                    e.defaultChecked = e.checked
                }
            }
            g.extend(
                {
                    clone: function (e, t, n)
                    {
                        var i, r, s, a;
                        if (g.support.html5Clone || g.isXMLDoc(e) || !be.test("<" + e.nodeName + ">"))
                        {
                            a = e.cloneNode(true)
                        }
                        else
                        {
                            Ne.innerHTML = e.outerHTML;
                            Ne.removeChild(a = Ne.firstChild)
                        }
                        if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !g.isXMLDoc(e))
                        {
                            Pe(e, a);
                            i = Oe(e);
                            r = Oe(a);
                            for (s = 0; i[s]; ++s)
                            {
                                if (r[s])
                                {
                                    Pe(i[s], r[s])
                                }
                            }
                        }
                        if (t)
                        {
                            Ae(e, a);
                            if (n)
                            {
                                i = Oe(e);
                                r = Oe(a);
                                for (s = 0; i[s]; ++s)
                                {
                                    Ae(i[s], r[s])
                                }
                            }
                        }
                        i = r = null;
                        return a
                    },
                    clean: function (e, t, n, i)
                    {
                        var s, a, o, l, u, c, f, h, p, d, m, v, y = t === r && Se,
                            x = [];
                        if (!t || typeof t.createDocumentFragment === "undefined")
                        {
                            t = r
                        }
                        for (s = 0;
                             (o = e[s]) != null; s++)
                        {
                            if (typeof o === "number")
                            {
                                o += ""
                            }
                            if (!o)
                            {
                                continue
                            }
                            if (typeof o === "string")
                            {
                                if (!ve.test(o))
                                {
                                    o = t.createTextNode(o)
                                }
                                else
                                {
                                    y = y || ce(t);
                                    f = t.createElement("div");
                                    y.appendChild(f);
                                    o = o.replace(de, "<$1></$2>");
                                    l = (ge.exec(o) || ["", ""])[1].toLowerCase();
                                    u = ke[l] || ke._default;
                                    c = u[0];
                                    f.innerHTML = u[1] + o + u[2];
                                    while (c--)
                                    {
                                        f = f.lastChild
                                    }
                                    if (!g.support.tbody)
                                    {
                                        h = me.test(o);
                                        p = l === "table" && !h ? f.firstChild && f.firstChild.childNodes : u[1] === "<table>" && !h ? f.childNodes : [];
                                        for (a = p.length - 1; a >= 0; --a)
                                        {
                                            if (g.nodeName(p[a], "tbody") && !p[a].childNodes.length)
                                            {
                                                p[a].parentNode.removeChild(p[a])
                                            }
                                        }
                                    }
                                    if (!g.support.leadingWhitespace && pe.test(o))
                                    {
                                        f.insertBefore(t.createTextNode(pe.exec(o)[0]), f.firstChild)
                                    }
                                    o = f.childNodes;
                                    f.parentNode.removeChild(f)
                                }
                            }
                            if (o.nodeType)
                            {
                                x.push(o)
                            }
                            else
                            {
                                g.merge(x, o)
                            }
                        }
                        if (f)
                        {
                            o = f = y = null
                        }
                        if (!g.support.appendChecked)
                        {
                            for (s = 0;
                                 (o = x[s]) != null; s++)
                            {
                                if (g.nodeName(o, "input"))
                                {
                                    De(o)
                                }
                                else if (typeof o.getElementsByTagName !== "undefined")
                                {
                                    g.grep(o.getElementsByTagName("input"), De)
                                }
                            }
                        }
                        if (n)
                        {
                            m = function (e)
                            {
                                if (!e.type || Te.test(e.type))
                                {
                                    return i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                                }
                            };
                            for (s = 0;
                                 (o = x[s]) != null; s++)
                            {
                                if (!(g.nodeName(o, "script") && m(o)))
                                {
                                    n.appendChild(o);
                                    if (typeof o.getElementsByTagName !== "undefined")
                                    {
                                        v = g.grep(g.merge([], o.getElementsByTagName("script")), m);
                                        x.splice.apply(x, [s + 1, 0].concat(v));
                                        s += v.length
                                    }
                                }
                            }
                        }
                        return x
                    },
                    cleanData: function (e, t)
                    {
                        var n, i, r, s, a = 0,
                            o = g.expando,
                            l = g.cache,
                            u = g.support.deleteExpando,
                            c = g.event.special;
                        for (;
                            (r = e[a]) != null; a++)
                        {
                            if (t || g.acceptData(r))
                            {
                                i = r[o];
                                n = i && l[i];
                                if (n)
                                {
                                    if (n.events)
                                    {
                                        for (s in n.events)
                                        {
                                            if (c[s])
                                            {
                                                g.event.remove(r, s)
                                            }
                                            else
                                            {
                                                g.removeEvent(r, s, n.handle)
                                            }
                                        }
                                    }
                                    if (l[i])
                                    {
                                        delete l[i];
                                        if (u)
                                        {
                                            delete r[o]
                                        }
                                        else if (r.removeAttribute)
                                        {
                                            r.removeAttribute(o)
                                        }
                                        else
                                        {
                                            r[o] = null
                                        }
                                        g.deletedIds.push(i)
                                    }
                                }
                            }
                        }
                    }
                });
            (function ()
            {
                var e, t;
                g.uaMatch = function (e)
                {
                    e = e.toLowerCase();
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                };
                e = g.uaMatch(a.userAgent);
                t = {};
                if (e.browser)
                {
                    t[e.browser] = true;
                    t.version = e.version
                }
                if (t.chrome)
                {
                    t.webkit = true
                }
                else if (t.webkit)
                {
                    t.safari = true
                }
                g.browser = t;
                g.sub = function ()
                {
                    function e(t, n)
                    {
                        return new e.fn.init(t, n)
                    }
                    g.extend(true, e, this);
                    e.superclass = this;
                    e.fn = e.prototype = this();
                    e.fn.constructor = e;
                    e.sub = this.sub;
                    e.fn.init = function n(i, r)
                    {
                        if (r && r instanceof g && !(r instanceof e))
                        {
                            r = e(r)
                        }
                        return g.fn.init.call(this, i, r, t)
                    };
                    e.fn.init.prototype = e.fn;
                    var t = e(r);
                    return e
                }
            })();
            var Ie, Le, Me, je = /alpha\([^)]*\)/i,
                Re = /opacity=([^)]*)/,
                He = /^(top|right|bottom|left)$/,
                Fe = /^(none|table(?!-c[ea]).+)/,
                $e = /^margin/,
                Be = new RegExp("^(" + m + ")(.*)$", "i"),
                Ve = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
                qe = new RegExp("^([-+])=(" + m + ")", "i"),
                We = {
                    BODY: "block"
                },
                ze = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ue = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                Xe = ["Top", "Right", "Bottom", "Left"],
                Ye = ["Webkit", "O", "Moz", "ms"],
                Ge = g.fn.toggle;

            function Ke(e, t)
            {
                if (t in e)
                {
                    return t
                }
                var n = t.charAt(0).toUpperCase() + t.slice(1),
                    i = t,
                    r = Ye.length;
                while (r--)
                {
                    t = Ye[r] + n;
                    if (t in e)
                    {
                        return t
                    }
                }
                return i
            }

            function Je(e, t)
            {
                e = t || e;
                return g.css(e, "display") === "none" || !g.contains(e.ownerDocument, e)
            }

            function Ze(e, t)
            {
                var n, i, r = [],
                    s = 0,
                    a = e.length;
                for (; s < a; s++)
                {
                    n = e[s];
                    if (!n.style)
                    {
                        continue
                    }
                    r[s] = g._data(n, "olddisplay");
                    if (t)
                    {
                        if (!r[s] && n.style.display === "none")
                        {
                            n.style.display = ""
                        }
                        if (n.style.display === "" && Je(n))
                        {
                            r[s] = g._data(n, "olddisplay", nt(n.nodeName))
                        }
                    }
                    else
                    {
                        i = Ie(n, "display");
                        if (!r[s] && i !== "none")
                        {
                            g._data(n, "olddisplay", i)
                        }
                    }
                }
                for (s = 0; s < a; s++)
                {
                    n = e[s];
                    if (!n.style)
                    {
                        continue
                    }
                    if (!t || n.style.display === "none" || n.style.display === "")
                    {
                        n.style.display = t ? r[s] || "" : "none"
                    }
                }
                return e
            }
            g.fn.extend(
                {
                    css: function (e, n)
                    {
                        return g.access(this, function (e, n, i)
                        {
                            return i !== t ? g.style(e, n, i) : g.css(e, n)
                        }, e, n, arguments.length > 1)
                    },
                    show: function ()
                    {
                        return Ze(this, true)
                    },
                    hide: function ()
                    {
                        return Ze(this)
                    },
                    toggle: function (e, t)
                    {
                        var n = typeof e === "boolean";
                        if (g.isFunction(e) && g.isFunction(t))
                        {
                            return Ge.apply(this, arguments)
                        }
                        return this.each(function ()
                        {
                            if (n ? e : Je(this))
                            {
                                g(this).show()
                            }
                            else
                            {
                                g(this).hide()
                            }
                        })
                    }
                });
            g.extend(
                {
                    cssHooks:
                        {
                            opacity:
                                {
                                    get: function (e, t)
                                    {
                                        if (t)
                                        {
                                            var n = Ie(e, "opacity");
                                            return n === "" ? "1" : n
                                        }
                                    }
                                }
                        },
                    cssNumber:
                        {
                            fillOpacity: true,
                            fontWeight: true,
                            lineHeight: true,
                            opacity: true,
                            orphans: true,
                            widows: true,
                            zIndex: true,
                            zoom: true
                        },
                    cssProps:
                        {
                            "float": g.support.cssFloat ? "cssFloat" : "styleFloat"
                        },
                    style: function (e, n, i, r)
                    {
                        if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                        {
                            return
                        }
                        var s, a, o, l = g.camelCase(n),
                            u = e.style;
                        n = g.cssProps[l] || (g.cssProps[l] = Ke(u, l));
                        o = g.cssHooks[n] || g.cssHooks[l];
                        if (i !== t)
                        {
                            a = typeof i;
                            if (a === "string" && (s = qe.exec(i)))
                            {
                                i = (s[1] + 1) * s[2] + parseFloat(g.css(e, n));
                                a = "number"
                            }
                            if (i == null || a === "number" && isNaN(i))
                            {
                                return
                            }
                            if (a === "number" && !g.cssNumber[l])
                            {
                                i += "px"
                            }
                            if (!o || !("set" in o) || (i = o.set(e, i, r)) !== t)
                            {
                                try
                                {
                                    u[n] = i
                                }
                                catch (c)
                                {}
                            }
                        }
                        else
                        {
                            if (o && "get" in o && (s = o.get(e, false, r)) !== t)
                            {
                                return s
                            }
                            return u[n]
                        }
                    },
                    css: function (e, n, i, r)
                    {
                        var s, a, o, l = g.camelCase(n);
                        n = g.cssProps[l] || (g.cssProps[l] = Ke(e.style, l));
                        o = g.cssHooks[n] || g.cssHooks[l];
                        if (o && "get" in o)
                        {
                            s = o.get(e, true, r)
                        }
                        if (s === t)
                        {
                            s = Ie(e, n)
                        }
                        if (s === "normal" && n in Ue)
                        {
                            s = Ue[n]
                        }
                        if (i || r !== t)
                        {
                            a = parseFloat(s);
                            return i || g.isNumeric(a) ? a || 0 : s
                        }
                        return s
                    },
                    swap: function (e, t, n)
                    {
                        var i, r, s = {};
                        for (r in t)
                        {
                            s[r] = e.style[r];
                            e.style[r] = t[r]
                        }
                        i = n.call(e);
                        for (r in t)
                        {
                            e.style[r] = s[r]
                        }
                        return i
                    }
                });
            if (e.getComputedStyle)
            {
                Ie = function (t, n)
                {
                    var i, r, s, a, o = e.getComputedStyle(t, null),
                        l = t.style;
                    if (o)
                    {
                        i = o.getPropertyValue(n) || o[n];
                        if (i === "" && !g.contains(t.ownerDocument, t))
                        {
                            i = g.style(t, n)
                        }
                        if (Ve.test(i) && $e.test(n))
                        {
                            r = l.width;
                            s = l.minWidth;
                            a = l.maxWidth;
                            l.minWidth = l.maxWidth = l.width = i;
                            i = o.width;
                            l.width = r;
                            l.minWidth = s;
                            l.maxWidth = a
                        }
                    }
                    return i
                }
            }
            else if (r.documentElement.currentStyle)
            {
                Ie = function (e, t)
                {
                    var n, i, r = e.currentStyle && e.currentStyle[t],
                        s = e.style;
                    if (r == null && s && s[t])
                    {
                        r = s[t]
                    }
                    if (Ve.test(r) && !He.test(t))
                    {
                        n = s.left;
                        i = e.runtimeStyle && e.runtimeStyle.left;
                        if (i)
                        {
                            e.runtimeStyle.left = e.currentStyle.left
                        }
                        s.left = t === "fontSize" ? "1em" : r;
                        r = s.pixelLeft + "px";
                        s.left = n;
                        if (i)
                        {
                            e.runtimeStyle.left = i
                        }
                    }
                    return r === "" ? "auto" : r
                }
            }

            function Qe(e, t, n)
            {
                var i = Be.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }

            function et(e, t, n, i)
            {
                var r = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                    s = 0;
                for (; r < 4; r += 2)
                {
                    if (n === "margin")
                    {
                        s += g.css(e, n + Xe[r], true)
                    }
                    if (i)
                    {
                        if (n === "content")
                        {
                            s -= parseFloat(Ie(e, "padding" + Xe[r])) || 0
                        }
                        if (n !== "margin")
                        {
                            s -= parseFloat(Ie(e, "border" + Xe[r] + "Width")) || 0
                        }
                    }
                    else
                    {
                        s += parseFloat(Ie(e, "padding" + Xe[r])) || 0;
                        if (n !== "padding")
                        {
                            s += parseFloat(Ie(e, "border" + Xe[r] + "Width")) || 0
                        }
                    }
                }
                return s
            }

            function tt(e, t, n)
            {
                var i = t === "width" ? e.offsetWidth : e.offsetHeight,
                    r = true,
                    s = g.support.boxSizing && g.css(e, "boxSizing") === "border-box";
                if (i <= 0 || i == null)
                {
                    i = Ie(e, t);
                    if (i < 0 || i == null)
                    {
                        i = e.style[t]
                    }
                    if (Ve.test(i))
                    {
                        return i
                    }
                    r = s && (g.support.boxSizingReliable || i === e.style[t]);
                    i = parseFloat(i) || 0
                }
                return i + et(e, t, n || (s ? "border" : "content"), r) + "px"
            }

            function nt(e)
            {
                if (We[e])
                {
                    return We[e]
                }
                var t = g("<" + e + ">").appendTo(r.body),
                    n = t.css("display");
                t.remove();
                if (n === "none" || n === "")
                {
                    Le = r.body.appendChild(Le || g.extend(r.createElement("iframe"),
                        {
                            frameBorder: 0,
                            width: 0,
                            height: 0
                        }));
                    if (!Me || !Le.createElement)
                    {
                        Me = (Le.contentWindow || Le.contentDocument).document;
                        Me.write("<!doctype html><html><body>");
                        Me.close()
                    }
                    t = Me.body.appendChild(Me.createElement(e));
                    n = Ie(t, "display");
                    r.body.removeChild(Le)
                }
                We[e] = n;
                return n
            }
            g.each(["height", "width"], function (e, t)
            {
                g.cssHooks[t] = {
                    get: function (e, n, i)
                    {
                        if (n)
                        {
                            if (e.offsetWidth === 0 && Fe.test(Ie(e, "display")))
                            {
                                return g.swap(e, ze, function ()
                                {
                                    return tt(e, t, i)
                                })
                            }
                            else
                            {
                                return tt(e, t, i)
                            }
                        }
                    },
                    set: function (e, n, i)
                    {
                        return Qe(e, n, i ? et(e, t, i, g.support.boxSizing && g.css(e, "boxSizing") === "border-box") : 0)
                    }
                }
            });
            if (!g.support.opacity)
            {
                g.cssHooks.opacity = {
                    get: function (e, t)
                    {
                        return Re.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                    },
                    set: function (e, t)
                    {
                        var n = e.style,
                            i = e.currentStyle,
                            r = g.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                            s = i && i.filter || n.filter || "";
                        n.zoom = 1;
                        if (t >= 1 && g.trim(s.replace(je, "")) === "" && n.removeAttribute)
                        {
                            n.removeAttribute("filter");
                            if (i && !i.filter)
                            {
                                return
                            }
                        }
                        n.filter = je.test(s) ? s.replace(je, r) : s + " " + r
                    }
                }
            }
            g(function ()
            {
                if (!g.support.reliableMarginRight)
                {
                    g.cssHooks.marginRight = {
                        get: function (e, t)
                        {
                            return g.swap(e,
                                {
                                    display: "inline-block"
                                }, function ()
                                {
                                    if (t)
                                    {
                                        return Ie(e, "marginRight")
                                    }
                                })
                        }
                    }
                }
                if (!g.support.pixelPosition && g.fn.position)
                {
                    g.each(["top", "left"], function (e, t)
                    {
                        g.cssHooks[t] = {
                            get: function (e, n)
                            {
                                if (n)
                                {
                                    var i = Ie(e, t);
                                    return Ve.test(i) ? g(e).position()[t] + "px" : i
                                }
                            }
                        }
                    })
                }
            });
            if (g.expr && g.expr.filters)
            {
                g.expr.filters.hidden = function (e)
                {
                    return e.offsetWidth === 0 && e.offsetHeight === 0 || !g.support.reliableHiddenOffsets && (e.style && e.style.display || Ie(e, "display")) === "none"
                };
                g.expr.filters.visible = function (e)
                {
                    return !g.expr.filters.hidden(e)
                }
            }
            g.each(
                {
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (e, t)
                {
                    g.cssHooks[e + t] = {
                        expand: function (n)
                        {
                            var i, r = typeof n === "string" ? n.split(" ") : [n],
                                s = {};
                            for (i = 0; i < 4; i++)
                            {
                                s[e + Xe[i] + t] = r[i] || r[i - 2] || r[0]
                            }
                            return s
                        }
                    };
                    if (!$e.test(e))
                    {
                        g.cssHooks[e + t].set = Qe
                    }
                });
            var it = /%20/g,
                rt = /\[\]$/,
                st = /\r?\n/g,
                at = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                ot = /^(?:select|textarea)/i;
            g.fn.extend(
                {
                    serialize: function ()
                    {
                        return g.param(this.serializeArray())
                    },
                    serializeArray: function ()
                    {
                        return this.map(function ()
                        {
                            return this.elements ? g.makeArray(this.elements) : this
                        }).filter(function ()
                        {
                            return this.name && !this.disabled && (this.checked || ot.test(this.nodeName) || at.test(this.type))
                        }).map(function (e, t)
                        {
                            var n = g(this).val();
                            return n == null ? null : g.isArray(n) ? g.map(n, function (e, n)
                                {
                                    return {
                                        name: t.name,
                                        value: e.replace(st, "\r\n")
                                    }
                                }) :
                                {
                                    name: t.name,
                                    value: n.replace(st, "\r\n")
                                }
                        }).get()
                    }
                });
            g.param = function (e, n)
            {
                var i, r = [],
                    s = function (e, t)
                    {
                        t = g.isFunction(t) ? t() : t == null ? "" : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (n === t)
                {
                    n = g.ajaxSettings && g.ajaxSettings.traditional
                }
                if (g.isArray(e) || e.jquery && !g.isPlainObject(e))
                {
                    g.each(e, function ()
                    {
                        s(this.name, this.value)
                    })
                }
                else
                {
                    for (i in e)
                    {
                        lt(i, e[i], n, s)
                    }
                }
                return r.join("&").replace(it, "+")
            };

            function lt(e, t, n, i)
            {
                var r;
                if (g.isArray(t))
                {
                    g.each(t, function (t, r)
                    {
                        if (n || rt.test(e))
                        {
                            i(e, r)
                        }
                        else
                        {
                            lt(e + "[" + (typeof r === "object" ? t : "") + "]", r, n, i)
                        }
                    })
                }
                else if (!n && g.type(t) === "object")
                {
                    for (r in t)
                    {
                        lt(e + "[" + r + "]", t[r], n, i)
                    }
                }
                else
                {
                    i(e, t)
                }
            }
            var ut, ct, ft = /#.*$/,
                ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                pt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
                dt = /^(?:GET|HEAD)$/,
                gt = /^\/\//,
                mt = /\?/,
                vt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                yt = /([?&])_=[^&]*/,
                xt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                bt = g.fn.load,
                _t = {},
                wt = {},
                Tt = ["*/"] + ["*"];
            try
            {
                ct = s.href
            }
            catch (Et)
            {
                ct = r.createElement("a");
                ct.href = "";
                ct = ct.href
            }
            ut = xt.exec(ct.toLowerCase()) || [];

            function kt(e)
            {
                return function (t, n)
                {
                    if (typeof t !== "string")
                    {
                        n = t;
                        t = "*"
                    }
                    var i, r, s, a = t.toLowerCase().split(y),
                        o = 0,
                        l = a.length;
                    if (g.isFunction(n))
                    {
                        for (; o < l; o++)
                        {
                            i = a[o];
                            s = /^\+/.test(i);
                            if (s)
                            {
                                i = i.substr(1) || "*"
                            }
                            r = e[i] = e[i] || [];
                            r[s ? "unshift" : "push"](n)
                        }
                    }
                }
            }

            function St(e, n, i, r, s, a)
            {
                s = s || n.dataTypes[0];
                a = a ||
                    {};
                a[s] = true;
                var o, l = e[s],
                    u = 0,
                    c = l ? l.length : 0,
                    f = e === _t;
                for (; u < c && (f || !o); u++)
                {
                    o = l[u](n, i, r);
                    if (typeof o === "string")
                    {
                        if (!f || a[o])
                        {
                            o = t
                        }
                        else
                        {
                            n.dataTypes.unshift(o);
                            o = St(e, n, i, r, o, a)
                        }
                    }
                }
                if ((f || !o) && !a["*"])
                {
                    o = St(e, n, i, r, "*", a)
                }
                return o
            }

            function Nt(e, n)
            {
                var i, r, s = g.ajaxSettings.flatOptions ||
                    {};
                for (i in n)
                {
                    if (n[i] !== t)
                    {
                        (s[i] ? e : r || (r = {}))[i] = n[i]
                    }
                }
                if (r)
                {
                    g.extend(true, e, r)
                }
            }
            g.fn.load = function (e, n, i)
            {
                if (typeof e !== "string" && bt)
                {
                    return bt.apply(this, arguments)
                }
                if (!this.length)
                {
                    return this
                }
                var r, s, a, o = this,
                    l = e.indexOf(" ");
                if (l >= 0)
                {
                    r = e.slice(l, e.length);
                    e = e.slice(0, l)
                }
                if (g.isFunction(n))
                {
                    i = n;
                    n = t
                }
                else if (n && typeof n === "object")
                {
                    s = "POST"
                }
                g.ajax(
                    {
                        url: e,
                        type: s,
                        dataType: "html",
                        data: n,
                        complete: function (e, t)
                        {
                            if (i)
                            {
                                o.each(i, a || [e.responseText, t, e])
                            }
                        }
                    }).done(function (e)
                {
                    a = arguments;
                    o.html(r ? g("<div>").append(e.replace(vt, "")).find(r) : e)
                });
                return this
            };
            g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t)
            {
                g.fn[t] = function (e)
                {
                    return this.on(t, e)
                }
            });
            g.each(["get", "post"], function (e, n)
            {
                g[n] = function (e, i, r, s)
                {
                    if (g.isFunction(i))
                    {
                        s = s || r;
                        r = i;
                        i = t
                    }
                    return g.ajax(
                        {
                            type: n,
                            url: e,
                            data: i,
                            success: r,
                            dataType: s
                        })
                }
            });
            g.extend(
                {
                    getScript: function (e, n)
                    {
                        return g.get(e, t, n, "script")
                    },
                    getJSON: function (e, t, n)
                    {
                        return g.get(e, t, n, "json")
                    },
                    ajaxSetup: function (e, t)
                    {
                        if (t)
                        {
                            Nt(e, g.ajaxSettings)
                        }
                        else
                        {
                            t = e;
                            e = g.ajaxSettings
                        }
                        Nt(e, t);
                        return e
                    },
                    ajaxSettings:
                        {
                            url: ct,
                            isLocal: pt.test(ut[1]),
                            global: true,
                            type: "GET",
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            processData: true,
                            async: true,
                            accepts:
                                {
                                    xml: "application/xml, text/xml",
                                    html: "text/html",
                                    text: "text/plain",
                                    json: "application/json, text/javascript",
                                    "*": Tt
                                },
                            contents:
                                {
                                    xml: /xml/,
                                    html: /html/,
                                    json: /json/
                                },
                            responseFields:
                                {
                                    xml: "responseXML",
                                    text: "responseText"
                                },
                            converters:
                                {
                                    "* text": e.String,
                                    "text html": true,
                                    "text json": g.parseJSON,
                                    "text xml": g.parseXML
                                },
                            flatOptions:
                                {
                                    context: true,
                                    url: true
                                }
                        },
                    ajaxPrefilter: kt(_t),
                    ajaxTransport: kt(wt),
                    ajax: function (e, n)
                    {
                        if (typeof e === "object")
                        {
                            n = e;
                            e = t
                        }
                        n = n ||
                            {};
                        var i, r, s, a, o, l, u, c, f = g.ajaxSetup(
                            {}, n),
                            h = f.context || f,
                            p = h !== f && (h.nodeType || h instanceof g) ? g(h) : g.event,
                            d = g.Deferred(),
                            m = g.Callbacks("once memory"),
                            v = f.statusCode ||
                                {},
                            x = {},
                            b = {},
                            _ = 0,
                            w = "canceled",
                            T = {
                                readyState: 0,
                                setRequestHeader: function (e, t)
                                {
                                    if (!_)
                                    {
                                        var n = e.toLowerCase();
                                        e = b[n] = b[n] || e;
                                        x[e] = t
                                    }
                                    return this
                                },
                                getAllResponseHeaders: function ()
                                {
                                    return _ === 2 ? r : null
                                },
                                getResponseHeader: function (e)
                                {
                                    var n;
                                    if (_ === 2)
                                    {
                                        if (!s)
                                        {
                                            s = {};
                                            while (n = ht.exec(r))
                                            {
                                                s[n[1].toLowerCase()] = n[2]
                                            }
                                        }
                                        n = s[e.toLowerCase()]
                                    }
                                    return n === t ? null : n
                                },
                                overrideMimeType: function (e)
                                {
                                    if (!_)
                                    {
                                        f.mimeType = e
                                    }
                                    return this
                                },
                                abort: function (e)
                                {
                                    e = e || w;
                                    if (a)
                                    {
                                        a.abort(e)
                                    }
                                    E(0, e);
                                    return this
                                }
                            };

                        function E(e, n, s, l)
                        {
                            var c, y, x, b, w, E = n;
                            if (_ === 2)
                            {
                                return
                            }
                            _ = 2;
                            if (o)
                            {
                                clearTimeout(o)
                            }
                            a = t;
                            r = l || "";
                            T.readyState = e > 0 ? 4 : 0;
                            if (s)
                            {
                                b = Ct(f, T, s)
                            }
                            if (e >= 200 && e < 300 || e === 304)
                            {
                                if (f.ifModified)
                                {
                                    w = T.getResponseHeader("Last-Modified");
                                    if (w)
                                    {
                                        g.lastModified[i] = w
                                    }
                                    w = T.getResponseHeader("Etag");
                                    if (w)
                                    {
                                        g.etag[i] = w
                                    }
                                }
                                if (e === 304)
                                {
                                    E = "notmodified";
                                    c = true
                                }
                                else
                                {
                                    c = At(f, b);
                                    E = c.state;
                                    y = c.data;
                                    x = c.error;
                                    c = !x
                                }
                            }
                            else
                            {
                                x = E;
                                if (!E || e)
                                {
                                    E = "error";
                                    if (e < 0)
                                    {
                                        e = 0
                                    }
                                }
                            }
                            T.status = e;
                            T.statusText = (n || E) + "";
                            if (c)
                            {
                                d.resolveWith(h, [y, E, T])
                            }
                            else
                            {
                                d.rejectWith(h, [T, E, x])
                            }
                            T.statusCode(v);
                            v = t;
                            if (u)
                            {
                                p.trigger("ajax" + (c ? "Success" : "Error"), [T, f, c ? y : x])
                            }
                            m.fireWith(h, [T, E]);
                            if (u)
                            {
                                p.trigger("ajaxComplete", [T, f]);
                                if (!--g.active)
                                {
                                    g.event.trigger("ajaxStop")
                                }
                            }
                        }
                        d.promise(T);
                        T.success = T.done;
                        T.error = T.fail;
                        T.complete = m.add;
                        T.statusCode = function (e)
                        {
                            if (e)
                            {
                                var t;
                                if (_ < 2)
                                {
                                    for (t in e)
                                    {
                                        v[t] = [v[t], e[t]]
                                    }
                                }
                                else
                                {
                                    t = e[T.status];
                                    T.always(t)
                                }
                            }
                            return this
                        };
                        f.url = ((e || f.url) + "").replace(ft, "").replace(gt, ut[1] + "//");
                        f.dataTypes = g.trim(f.dataType || "*").toLowerCase().split(y);
                        if (f.crossDomain == null)
                        {
                            l = xt.exec(f.url.toLowerCase());
                            f.crossDomain = !!(l && (l[1] !== ut[1] || l[2] !== ut[2] || (l[3] || (l[1] === "http:" ? 80 : 443)) != (ut[3] || (ut[1] === "http:" ? 80 : 443))))
                        }
                        if (f.data && f.processData && typeof f.data !== "string")
                        {
                            f.data = g.param(f.data, f.traditional)
                        }
                        St(_t, f, n, T);
                        if (_ === 2)
                        {
                            return T
                        }
                        u = f.global;
                        f.type = f.type.toUpperCase();
                        f.hasContent = !dt.test(f.type);
                        if (u && g.active++ === 0)
                        {
                            g.event.trigger("ajaxStart")
                        }
                        if (!f.hasContent)
                        {
                            if (f.data)
                            {
                                f.url += (mt.test(f.url) ? "&" : "?") + f.data;
                                delete f.data
                            }
                            i = f.url;
                            if (f.cache === false)
                            {
                                var k = g.now(),
                                    S = f.url.replace(yt, "$1_=" + k);
                                f.url = S + (S === f.url ? (mt.test(f.url) ? "&" : "?") + "_=" + k : "")
                            }
                        }
                        if (f.data && f.hasContent && f.contentType !== false || n.contentType)
                        {
                            T.setRequestHeader("Content-Type", f.contentType)
                        }
                        if (f.ifModified)
                        {
                            i = i || f.url;
                            if (g.lastModified[i])
                            {
                                T.setRequestHeader("If-Modified-Since", g.lastModified[i])
                            }
                            if (g.etag[i])
                            {
                                T.setRequestHeader("If-None-Match", g.etag[i])
                            }
                        }
                        T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
                        for (c in f.headers)
                        {
                            T.setRequestHeader(c, f.headers[c])
                        }
                        if (f.beforeSend && (f.beforeSend.call(h, T, f) === false || _ === 2))
                        {
                            return T.abort()
                        }
                        w = "abort";
                        for (c in
                            {
                                success: 1,
                                error: 1,
                                complete: 1
                            })
                        {
                            T[c](f[c])
                        }
                        a = St(wt, f, n, T);
                        if (!a)
                        {
                            E(-1, "No Transport")
                        }
                        else
                        {
                            T.readyState = 1;
                            if (u)
                            {
                                p.trigger("ajaxSend", [T, f])
                            }
                            if (f.async && f.timeout > 0)
                            {
                                o = setTimeout(function ()
                                {
                                    T.abort("timeout")
                                }, f.timeout)
                            }
                            try
                            {
                                _ = 1;
                                a.send(x, E)
                            }
                            catch (N)
                            {
                                if (_ < 2)
                                {
                                    E(-1, N)
                                }
                                else
                                {
                                    throw N
                                }
                            }
                        }
                        return T
                    },
                    active: 0,
                    lastModified:
                        {},
                    etag:
                        {}
                });

            function Ct(e, n, i)
            {
                var r, s, a, o, l = e.contents,
                    u = e.dataTypes,
                    c = e.responseFields;
                for (s in c)
                {
                    if (s in i)
                    {
                        n[c[s]] = i[s]
                    }
                }
                while (u[0] === "*")
                {
                    u.shift();
                    if (r === t)
                    {
                        r = e.mimeType || n.getResponseHeader("content-type")
                    }
                }
                if (r)
                {
                    for (s in l)
                    {
                        if (l[s] && l[s].test(r))
                        {
                            u.unshift(s);
                            break
                        }
                    }
                }
                if (u[0] in i)
                {
                    a = u[0]
                }
                else
                {
                    for (s in i)
                    {
                        if (!u[0] || e.converters[s + " " + u[0]])
                        {
                            a = s;
                            break
                        }
                        if (!o)
                        {
                            o = s
                        }
                    }
                    a = a || o
                }
                if (a)
                {
                    if (a !== u[0])
                    {
                        u.unshift(a)
                    }
                    return i[a]
                }
            }

            function At(e, t)
            {
                var n, i, r, s, a = e.dataTypes.slice(),
                    o = a[0],
                    l = {},
                    u = 0;
                if (e.dataFilter)
                {
                    t = e.dataFilter(t, e.dataType)
                }
                if (a[1])
                {
                    for (n in e.converters)
                    {
                        l[n.toLowerCase()] = e.converters[n]
                    }
                }
                for (; r = a[++u];)
                {
                    if (r !== "*")
                    {
                        if (o !== "*" && o !== r)
                        {
                            n = l[o + " " + r] || l["* " + r];
                            if (!n)
                            {
                                for (i in l)
                                {
                                    s = i.split(" ");
                                    if (s[1] === r)
                                    {
                                        n = l[o + " " + s[0]] || l["* " + s[0]];
                                        if (n)
                                        {
                                            if (n === true)
                                            {
                                                n = l[i]
                                            }
                                            else if (l[i] !== true)
                                            {
                                                r = s[0];
                                                a.splice(u--, 0, r)
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            if (n !== true)
                            {
                                if (n && e["throws"])
                                {
                                    t = n(t)
                                }
                                else
                                {
                                    try
                                    {
                                        t = n(t)
                                    }
                                    catch (c)
                                    {
                                        return {
                                            state: "parsererror",
                                            error: n ? c : "No conversion from " + o + " to " + r
                                        }
                                    }
                                }
                            }
                        }
                        o = r
                    }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            var Pt = [],
                Ot = /\?/,
                Dt = /(=)\?(?=&|$)|\?\?/,
                It = g.now();
            g.ajaxSetup(
                {
                    jsonp: "callback",
                    jsonpCallback: function ()
                    {
                        var e = Pt.pop() || g.expando + "_" + It++;
                        this[e] = true;
                        return e
                    }
                });
            g.ajaxPrefilter("json jsonp", function (n, i, r)
            {
                var s, a, o, l = n.data,
                    u = n.url,
                    c = n.jsonp !== false,
                    f = c && Dt.test(u),
                    h = c && !f && typeof l === "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(l);
                if (n.dataTypes[0] === "jsonp" || f || h)
                {
                    s = n.jsonpCallback = g.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback;
                    a = e[s];
                    if (f)
                    {
                        n.url = u.replace(Dt, "$1" + s)
                    }
                    else if (h)
                    {
                        n.data = l.replace(Dt, "$1" + s)
                    }
                    else if (c)
                    {
                        n.url += (Ot.test(u) ? "&" : "?") + n.jsonp + "=" + s
                    }
                    n.converters["script json"] = function ()
                    {
                        if (!o)
                        {
                            g.error(s + " was not called")
                        }
                        return o[0]
                    };
                    n.dataTypes[0] = "json";
                    e[s] = function ()
                    {
                        o = arguments
                    };
                    r.always(function ()
                    {
                        e[s] = a;
                        if (n[s])
                        {
                            n.jsonpCallback = i.jsonpCallback;
                            Pt.push(s)
                        }
                        if (o && g.isFunction(a))
                        {
                            a(o[0])
                        }
                        o = a = t
                    });
                    return "script"
                }
            });
            g.ajaxSetup(
                {
                    accepts:
                        {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                    contents:
                        {
                            script: /javascript|ecmascript/
                        },
                    converters:
                        {
                            "text script": function (e)
                            {
                                g.globalEval(e);
                                return e
                            }
                        }
                });
            g.ajaxPrefilter("script", function (e)
            {
                if (e.cache === t)
                {
                    e.cache = false
                }
                if (e.crossDomain)
                {
                    e.type = "GET";
                    e.global = false
                }
            });
            g.ajaxTransport("script", function (e)
            {
                if (e.crossDomain)
                {
                    var n, i = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
                    return {
                        send: function (s, a)
                        {
                            n = r.createElement("script");
                            n.async = "async";
                            if (e.scriptCharset)
                            {
                                n.charset = e.scriptCharset
                            }
                            n.src = e.url;
                            n.onload = n.onreadystatechange = function (e, r)
                            {
                                if (r || !n.readyState || /loaded|complete/.test(n.readyState))
                                {
                                    n.onload = n.onreadystatechange = null;
                                    if (i && n.parentNode)
                                    {
                                        i.removeChild(n)
                                    }
                                    n = t;
                                    if (!r)
                                    {
                                        a(200, "success")
                                    }
                                }
                            };
                            i.insertBefore(n, i.firstChild)
                        },
                        abort: function ()
                        {
                            if (n)
                            {
                                n.onload(0, 1)
                            }
                        }
                    }
                }
            });
            var Lt, Mt = e.ActiveXObject ? function ()
                {
                    for (var e in Lt)
                    {
                        Lt[e](0, 1)
                    }
                } : false,
                jt = 0;

            function Rt()
            {
                try
                {
                    return new e.XMLHttpRequest
                }
                catch (t)
                {}
            }

            function Ht()
            {
                try
                {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                }
                catch (t)
                {}
            }
            g.ajaxSettings.xhr = e.ActiveXObject ? function ()
            {
                return !this.isLocal && Rt() || Ht()
            } : Rt;
            (function (e)
            {
                g.extend(g.support,
                    {
                        ajax: !!e,
                        cors: !!e && "withCredentials" in e
                    })
            })(g.ajaxSettings.xhr());
            if (g.support.ajax)
            {
                g.ajaxTransport(function (n)
                {
                    if (!n.crossDomain || g.support.cors)
                    {
                        var i;
                        return {
                            send: function (r, s)
                            {
                                var a, o, l = n.xhr();
                                if (n.username)
                                {
                                    l.open(n.type, n.url, n.async, n.username, n.password)
                                }
                                else
                                {
                                    l.open(n.type, n.url, n.async)
                                }
                                if (n.xhrFields)
                                {
                                    for (o in n.xhrFields)
                                    {
                                        l[o] = n.xhrFields[o]
                                    }
                                }
                                if (n.mimeType && l.overrideMimeType)
                                {
                                    l.overrideMimeType(n.mimeType)
                                }
                                if (!n.crossDomain && !r["X-Requested-With"])
                                {
                                    r["X-Requested-With"] = "XMLHttpRequest"
                                }
                                try
                                {
                                    for (o in r)
                                    {
                                        l.setRequestHeader(o, r[o])
                                    }
                                }
                                catch (u)
                                {}
                                l.send(n.hasContent && n.data || null);
                                i = function (e, r)
                                {
                                    var o, u, c, f, h;
                                    try
                                    {
                                        if (i && (r || l.readyState === 4))
                                        {
                                            i = t;
                                            if (a)
                                            {
                                                l.onreadystatechange = g.noop;
                                                if (Mt)
                                                {
                                                    delete Lt[a]
                                                }
                                            }
                                            if (r)
                                            {
                                                if (l.readyState !== 4)
                                                {
                                                    l.abort()
                                                }
                                            }
                                            else
                                            {
                                                o = l.status;
                                                c = l.getAllResponseHeaders();
                                                f = {};
                                                h = l.responseXML;
                                                if (h && h.documentElement)
                                                {
                                                    f.xml = h
                                                }
                                                try
                                                {
                                                    f.text = l.responseText
                                                }
                                                catch (p)
                                                {}
                                                try
                                                {
                                                    u = l.statusText
                                                }
                                                catch (p)
                                                {
                                                    u = ""
                                                }
                                                if (!o && n.isLocal && !n.crossDomain)
                                                {
                                                    o = f.text ? 200 : 404
                                                }
                                                else if (o === 1223)
                                                {
                                                    o = 204
                                                }
                                            }
                                        }
                                    }
                                    catch (d)
                                    {
                                        if (!r)
                                        {
                                            s(-1, d)
                                        }
                                    }
                                    if (f)
                                    {
                                        s(o, u, f, c)
                                    }
                                };
                                if (!n.async)
                                {
                                    i()
                                }
                                else if (l.readyState === 4)
                                {
                                    setTimeout(i, 0)
                                }
                                else
                                {
                                    a = ++jt;
                                    if (Mt)
                                    {
                                        if (!Lt)
                                        {
                                            Lt = {};
                                            g(e).unload(Mt)
                                        }
                                        Lt[a] = i
                                    }
                                    l.onreadystatechange = i
                                }
                            },
                            abort: function ()
                            {
                                if (i)
                                {
                                    i(0, 1)
                                }
                            }
                        }
                    }
                })
            }
            var Ft, $t, Bt = /^(?:toggle|show|hide)$/,
                Vt = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
                qt = /queueHooks$/,
                Wt = [Kt],
                zt = {
                    "*": [function (e, t)
                    {
                        var n, i, r = this.createTween(e, t),
                            s = Vt.exec(t),
                            a = r.cur(),
                            o = +a || 0,
                            l = 1,
                            u = 20;
                        if (s)
                        {
                            n = +s[2];
                            i = s[3] || (g.cssNumber[e] ? "" : "px");
                            if (i !== "px" && o)
                            {
                                o = g.css(r.elem, e, true) || n || 1;
                                do {
                                    l = l || ".5";
                                    o = o / l;
                                    g.style(r.elem, e, o + i)
                                } while (l !== (l = r.cur() / a) && l !== 1 && --u)
                            }
                            r.unit = i;
                            r.start = o;
                            r.end = s[1] ? o + (s[1] + 1) * n : n
                        }
                        return r
                    }]
                };

            function Ut()
            {
                setTimeout(function ()
                {
                    Ft = t
                }, 0);
                return Ft = g.now()
            }

            function Xt(e, t)
            {
                g.each(t, function (t, n)
                {
                    var i = (zt[t] || []).concat(zt["*"]),
                        r = 0,
                        s = i.length;
                    for (; r < s; r++)
                    {
                        if (i[r].call(e, t, n))
                        {
                            return
                        }
                    }
                })
            }

            function Yt(e, t, n)
            {
                var i, r = 0,
                    s = 0,
                    a = Wt.length,
                    o = g.Deferred().always(function ()
                    {
                        delete l.elem
                    }),
                    l = function ()
                    {
                        var t = Ft || Ut(),
                            n = Math.max(0, u.startTime + u.duration - t),
                            i = n / u.duration || 0,
                            r = 1 - i,
                            s = 0,
                            a = u.tweens.length;
                        for (; s < a; s++)
                        {
                            u.tweens[s].run(r)
                        }
                        o.notifyWith(e, [u, r, n]);
                        if (r < 1 && a)
                        {
                            return n
                        }
                        else
                        {
                            o.resolveWith(e, [u]);
                            return false
                        }
                    },
                    u = o.promise(
                        {
                            elem: e,
                            props: g.extend(
                                {}, t),
                            opts: g.extend(true,
                                {
                                    specialEasing:
                                        {}
                                }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: Ft || Ut(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function (t, n, i)
                            {
                                var r = g.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                u.tweens.push(r);
                                return r
                            },
                            stop: function (t)
                            {
                                var n = 0,
                                    i = t ? u.tweens.length : 0;
                                for (; n < i; n++)
                                {
                                    u.tweens[n].run(1)
                                }
                                if (t)
                                {
                                    o.resolveWith(e, [u, t])
                                }
                                else
                                {
                                    o.rejectWith(e, [u, t])
                                }
                                return this
                            }
                        }),
                    c = u.props;
                Gt(c, u.opts.specialEasing);
                for (; r < a; r++)
                {
                    i = Wt[r].call(u, e, c, u.opts);
                    if (i)
                    {
                        return i
                    }
                }
                Xt(u, c);
                if (g.isFunction(u.opts.start))
                {
                    u.opts.start.call(e, u)
                }
                g.fx.timer(g.extend(l,
                    {
                        anim: u,
                        queue: u.opts.queue,
                        elem: e
                    }));
                return u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function Gt(e, t)
            {
                var n, i, r, s, a;
                for (n in e)
                {
                    i = g.camelCase(n);
                    r = t[i];
                    s = e[n];
                    if (g.isArray(s))
                    {
                        r = s[1];
                        s = e[n] = s[0]
                    }
                    if (n !== i)
                    {
                        e[i] = s;
                        delete e[n]
                    }
                    a = g.cssHooks[i];
                    if (a && "expand" in a)
                    {
                        s = a.expand(s);
                        delete e[i];
                        for (n in s)
                        {
                            if (!(n in e))
                            {
                                e[n] = s[n];
                                t[n] = r
                            }
                        }
                    }
                    else
                    {
                        t[i] = r
                    }
                }
            }
            g.Animation = g.extend(Yt,
                {
                    tweener: function (e, t)
                    {
                        if (g.isFunction(e))
                        {
                            t = e;
                            e = ["*"]
                        }
                        else
                        {
                            e = e.split(" ")
                        }
                        var n, i = 0,
                            r = e.length;
                        for (; i < r; i++)
                        {
                            n = e[i];
                            zt[n] = zt[n] || [];
                            zt[n].unshift(t)
                        }
                    },
                    prefilter: function (e, t)
                    {
                        if (t)
                        {
                            Wt.unshift(e)
                        }
                        else
                        {
                            Wt.push(e)
                        }
                    }
                });

            function Kt(e, t, n)
            {
                var i, r, s, a, o, l, u, c, f, h = this,
                    p = e.style,
                    d = {},
                    m = [],
                    v = e.nodeType && Je(e);
                if (!n.queue)
                {
                    c = g._queueHooks(e, "fx");
                    if (c.unqueued == null)
                    {
                        c.unqueued = 0;
                        f = c.empty.fire;
                        c.empty.fire = function ()
                        {
                            if (!c.unqueued)
                            {
                                f()
                            }
                        }
                    }
                    c.unqueued++;
                    h.always(function ()
                    {
                        h.always(function ()
                        {
                            c.unqueued--;
                            if (!g.queue(e, "fx").length)
                            {
                                c.empty.fire()
                            }
                        })
                    })
                }
                if (e.nodeType === 1 && ("height" in t || "width" in t))
                {
                    n.overflow = [p.overflow, p.overflowX, p.overflowY];
                    if (g.css(e, "display") === "inline" && g.css(e, "float") === "none")
                    {
                        if (!g.support.inlineBlockNeedsLayout || nt(e.nodeName) === "inline")
                        {
                            p.display = "inline-block"
                        }
                        else
                        {
                            p.zoom = 1
                        }
                    }
                }
                if (n.overflow)
                {
                    p.overflow = "hidden";
                    if (!g.support.shrinkWrapBlocks)
                    {
                        h.done(function ()
                        {
                            p.overflow = n.overflow[0];
                            p.overflowX = n.overflow[1];
                            p.overflowY = n.overflow[2]
                        })
                    }
                }
                for (i in t)
                {
                    s = t[i];
                    if (Bt.exec(s))
                    {
                        delete t[i];
                        l = l || s === "toggle";
                        if (s === (v ? "hide" : "show"))
                        {
                            continue
                        }
                        m.push(i)
                    }
                }
                a = m.length;
                if (a)
                {
                    o = g._data(e, "fxshow") || g._data(e, "fxshow",
                        {});
                    if ("hidden" in o)
                    {
                        v = o.hidden
                    }
                    if (l)
                    {
                        o.hidden = !v
                    }
                    if (v)
                    {
                        g(e).show()
                    }
                    else
                    {
                        h.done(function ()
                        {
                            g(e).hide()
                        })
                    }
                    h.done(function ()
                    {
                        var t;
                        g.removeData(e, "fxshow", true);
                        for (t in d)
                        {
                            g.style(e, t, d[t])
                        }
                    });
                    for (i = 0; i < a; i++)
                    {
                        r = m[i];
                        u = h.createTween(r, v ? o[r] : 0);
                        d[r] = o[r] || g.style(e, r);
                        if (!(r in o))
                        {
                            o[r] = u.start;
                            if (v)
                            {
                                u.end = u.start;
                                u.start = r === "width" || r === "height" ? 1 : 0
                            }
                        }
                    }
                }
            }

            function Jt(e, t, n, i, r)
            {
                return new Jt.prototype.init(e, t, n, i, r)
            }
            g.Tween = Jt;
            Jt.prototype = {
                constructor: Jt,
                init: function (e, t, n, i, r, s)
                {
                    this.elem = e;
                    this.prop = n;
                    this.easing = r || "swing";
                    this.options = t;
                    this.start = this.now = this.cur();
                    this.end = i;
                    this.unit = s || (g.cssNumber[n] ? "" : "px")
                },
                cur: function ()
                {
                    var e = Jt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Jt.propHooks._default.get(this)
                },
                run: function (e)
                {
                    var t, n = Jt.propHooks[this.prop];
                    if (this.options.duration)
                    {
                        this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                    }
                    else
                    {
                        this.pos = t = e
                    }
                    this.now = (this.end - this.start) * t + this.start;
                    if (this.options.step)
                    {
                        this.options.step.call(this.elem, this.now, this)
                    }
                    if (n && n.set)
                    {
                        n.set(this)
                    }
                    else
                    {
                        Jt.propHooks._default.set(this)
                    }
                    return this
                }
            };
            Jt.prototype.init.prototype = Jt.prototype;
            Jt.propHooks = {
                _default:
                    {
                        get: function (e)
                        {
                            var t;
                            if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null))
                            {
                                return e.elem[e.prop]
                            }
                            t = g.css(e.elem, e.prop, false, "");
                            return !t || t === "auto" ? 0 : t
                        },
                        set: function (e)
                        {
                            if (g.fx.step[e.prop])
                            {
                                g.fx.step[e.prop](e)
                            }
                            else if (e.elem.style && (e.elem.style[g.cssProps[e.prop]] != null || g.cssHooks[e.prop]))
                            {
                                g.style(e.elem, e.prop, e.now + e.unit)
                            }
                            else
                            {
                                e.elem[e.prop] = e.now
                            }
                        }
                    }
            };
            Jt.propHooks.scrollTop = Jt.propHooks.scrollLeft = {
                set: function (e)
                {
                    if (e.elem.nodeType && e.elem.parentNode)
                    {
                        e.elem[e.prop] = e.now
                    }
                }
            };
            g.each(["toggle", "show", "hide"], function (e, t)
            {
                var n = g.fn[t];
                g.fn[t] = function (i, r, s)
                {
                    return i == null || typeof i === "boolean" || !e && g.isFunction(i) && g.isFunction(r) ? n.apply(this, arguments) : this.animate(Zt(t, true), i, r, s)
                }
            });
            g.fn.extend(
                {
                    fadeTo: function (e, t, n, i)
                    {
                        return this.filter(Je).css("opacity", 0).show().end().animate(
                            {
                                opacity: t
                            }, e, n, i)
                    },
                    animate: function (e, t, n, i)
                    {
                        var r = g.isEmptyObject(e),
                            s = g.speed(t, n, i),
                            a = function ()
                            {
                                var t = Yt(this, g.extend(
                                    {}, e), s);
                                if (r)
                                {
                                    t.stop(true)
                                }
                            };
                        return r || s.queue === false ? this.each(a) : this.queue(s.queue, a)
                    },
                    stop: function (e, n, i)
                    {
                        var r = function (e)
                        {
                            var t = e.stop;
                            delete e.stop;
                            t(i)
                        };
                        if (typeof e !== "string")
                        {
                            i = n;
                            n = e;
                            e = t
                        }
                        if (n && e !== false)
                        {
                            this.queue(e || "fx", [])
                        }
                        return this.each(function ()
                        {
                            var t = true,
                                n = e != null && e + "queueHooks",
                                s = g.timers,
                                a = g._data(this);
                            if (n)
                            {
                                if (a[n] && a[n].stop)
                                {
                                    r(a[n])
                                }
                            }
                            else
                            {
                                for (n in a)
                                {
                                    if (a[n] && a[n].stop && qt.test(n))
                                    {
                                        r(a[n])
                                    }
                                }
                            }
                            for (n = s.length; n--;)
                            {
                                if (s[n].elem === this && (e == null || s[n].queue === e))
                                {
                                    s[n].anim.stop(i);
                                    t = false;
                                    s.splice(n, 1)
                                }
                            }
                            if (t || !i)
                            {
                                g.dequeue(this, e)
                            }
                        })
                    }
                });

            function Zt(e, t)
            {
                var n, i = {
                        height: e
                    },
                    r = 0;
                t = t ? 1 : 0;
                for (; r < 4; r += 2 - t)
                {
                    n = Xe[r];
                    i["margin" + n] = i["padding" + n] = e
                }
                if (t)
                {
                    i.opacity = i.width = e
                }
                return i
            }
            g.each(
                {
                    slideDown: Zt("show"),
                    slideUp: Zt("hide"),
                    slideToggle: Zt("toggle"),
                    fadeIn:
                        {
                            opacity: "show"
                        },
                    fadeOut:
                        {
                            opacity: "hide"
                        },
                    fadeToggle:
                        {
                            opacity: "toggle"
                        }
                }, function (e, t)
                {
                    g.fn[e] = function (e, n, i)
                    {
                        return this.animate(t, e, n, i)
                    }
                });
            g.speed = function (e, t, n)
            {
                var i = e && typeof e === "object" ? g.extend(
                    {}, e) :
                    {
                        complete: n || !n && t || g.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !g.isFunction(t) && t
                    };
                i.duration = g.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in g.fx.speeds ? g.fx.speeds[i.duration] : g.fx.speeds._default;
                if (i.queue == null || i.queue === true)
                {
                    i.queue = "fx"
                }
                i.old = i.complete;
                i.complete = function ()
                {
                    if (g.isFunction(i.old))
                    {
                        i.old.call(this)
                    }
                    if (i.queue)
                    {
                        g.dequeue(this, i.queue)
                    }
                };
                return i
            };
            g.easing = {
                linear: function (e)
                {
                    return e
                },
                swing: function (e)
                {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            };
            g.timers = [];
            g.fx = Jt.prototype.init;
            g.fx.tick = function ()
            {
                var e, n = g.timers,
                    i = 0;
                Ft = g.now();
                for (; i < n.length; i++)
                {
                    e = n[i];
                    if (!e() && n[i] === e)
                    {
                        n.splice(i--, 1)
                    }
                }
                if (!n.length)
                {
                    g.fx.stop()
                }
                Ft = t
            };
            g.fx.timer = function (e)
            {
                if (e() && g.timers.push(e) && !$t)
                {
                    $t = setInterval(g.fx.tick, g.fx.interval)
                }
            };
            g.fx.interval = 13;
            g.fx.stop = function ()
            {
                clearInterval($t);
                $t = null
            };
            g.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            g.fx.step = {};
            if (g.expr && g.expr.filters)
            {
                g.expr.filters.animated = function (e)
                {
                    return g.grep(g.timers, function (t)
                    {
                        return e === t.elem
                    }).length
                }
            }
            var Qt = /^(?:body|html)$/i;
            g.fn.offset = function (e)
            {
                if (arguments.length)
                {
                    return e === t ? this : this.each(function (t)
                    {
                        g.offset.setOffset(this, e, t)
                    })
                }
                var n, i, r, s, a, o, l, u = {
                        top: 0,
                        left: 0
                    },
                    c = this[0],
                    f = c && c.ownerDocument;
                if (!f)
                {
                    return
                }
                if ((i = f.body) === c)
                {
                    return g.offset.bodyOffset(c)
                }
                n = f.documentElement;
                if (!g.contains(n, c))
                {
                    return u
                }
                if (typeof c.getBoundingClientRect !== "undefined")
                {
                    u = c.getBoundingClientRect()
                }
                r = en(f);
                s = n.clientTop || i.clientTop || 0;
                a = n.clientLeft || i.clientLeft || 0;
                o = r.pageYOffset || n.scrollTop;
                l = r.pageXOffset || n.scrollLeft;
                return {
                    top: u.top + o - s,
                    left: u.left + l - a
                }
            };
            g.offset = {
                bodyOffset: function (e)
                {
                    var t = e.offsetTop,
                        n = e.offsetLeft;
                    if (g.support.doesNotIncludeMarginInBodyOffset)
                    {
                        t += parseFloat(g.css(e, "marginTop")) || 0;
                        n += parseFloat(g.css(e, "marginLeft")) || 0
                    }
                    return {
                        top: t,
                        left: n
                    }
                },
                setOffset: function (e, t, n)
                {
                    var i = g.css(e, "position");
                    if (i === "static")
                    {
                        e.style.position = "relative"
                    }
                    var r = g(e),
                        s = r.offset(),
                        a = g.css(e, "top"),
                        o = g.css(e, "left"),
                        l = (i === "absolute" || i === "fixed") && g.inArray("auto", [a, o]) > -1,
                        u = {},
                        c = {},
                        f, h;
                    if (l)
                    {
                        c = r.position();
                        f = c.top;
                        h = c.left
                    }
                    else
                    {
                        f = parseFloat(a) || 0;
                        h = parseFloat(o) || 0
                    }
                    if (g.isFunction(t))
                    {
                        t = t.call(e, n, s)
                    }
                    if (t.top != null)
                    {
                        u.top = t.top - s.top + f
                    }
                    if (t.left != null)
                    {
                        u.left = t.left - s.left + h
                    }
                    if ("using" in t)
                    {
                        t.using.call(e, u)
                    }
                    else
                    {
                        r.css(u)
                    }
                }
            };
            g.fn.extend(
                {
                    position: function ()
                    {
                        if (!this[0])
                        {
                            return
                        }
                        var e = this[0],
                            t = this.offsetParent(),
                            n = this.offset(),
                            i = Qt.test(t[0].nodeName) ?
                                {
                                    top: 0,
                                    left: 0
                                } : t.offset();
                        n.top -= parseFloat(g.css(e, "marginTop")) || 0;
                        n.left -= parseFloat(g.css(e, "marginLeft")) || 0;
                        i.top += parseFloat(g.css(t[0], "borderTopWidth")) || 0;
                        i.left += parseFloat(g.css(t[0], "borderLeftWidth")) || 0;
                        return {
                            top: n.top - i.top,
                            left: n.left - i.left
                        }
                    },
                    offsetParent: function ()
                    {
                        return this.map(function ()
                        {
                            var e = this.offsetParent || r.body;
                            while (e && (!Qt.test(e.nodeName) && g.css(e, "position") === "static"))
                            {
                                e = e.offsetParent
                            }
                            return e || r.body
                        })
                    }
                });
            g.each(
                {
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function (e, n)
                {
                    var i = /Y/.test(n);
                    g.fn[e] = function (r)
                    {
                        return g.access(this, function (e, r, s)
                        {
                            var a = en(e);
                            if (s === t)
                            {
                                return a ? n in a ? a[n] : a.document.documentElement[r] : e[r];
                            }
                            if (a)
                            {
                                a.scrollTo(!i ? s : g(a).scrollLeft(), i ? s : g(a).scrollTop())
                            }
                            else
                            {
                                e[r] = s
                            }
                        }, e, r, arguments.length, null)
                    }
                });

            function en(e)
            {
                return g.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
            }
            g.each(
                {
                    Height: "height",
                    Width: "width"
                }, function (e, n)
                {
                    g.each(
                        {
                            padding: "inner" + e,
                            content: n,
                            "": "outer" + e
                        }, function (i, r)
                        {
                            g.fn[r] = function (r, s)
                            {
                                var a = arguments.length && (i || typeof r !== "boolean"),
                                    o = i || (r === true || s === true ? "margin" : "border");
                                return g.access(this, function (n, i, r)
                                {
                                    var s;
                                    if (g.isWindow(n))
                                    {
                                        return n.document.documentElement["client" + e]
                                    }
                                    if (n.nodeType === 9)
                                    {
                                        s = n.documentElement;
                                        return Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])
                                    }
                                    return r === t ? g.css(n, i, r, o) : g.style(n, i, r, o)
                                }, n, a ? r : t, a, null)
                            }
                        })
                });
            e.jQuery = e.$ = g;
            if (typeof define === "function" && define.amd && define.amd.jQuery)
            {
                define("jquery", [], function ()
                {
                    return g
                })
            }
        })(window);
        t.exports = $.noConflict(true);
        return t.exports
    }();
    var t = function ()
    {
        var e = {},
            t = {
                exports: e
            };

        function n(e)
        {
            if (!(this instanceof n) && c(e))
            {
                return r(e)
            }
        }
        t.exports = n;
        n.create = function (e, t)
        {
            if (!c(e))
            {
                t = e;
                e = null
            }
            t || (t = {});
            e || (e = t.Extends || n);
            t.Extends = e;

            function s()
            {
                e.apply(this, arguments);
                if (this.constructor === s && this.initialize)
                {
                    this.initialize.apply(this, arguments)
                }
            }
            if (e !== n)
            {
                o(s, e, e.StaticsWhiteList)
            }
            i.call(s, t);
            return r(s)
        };

        function i(e)
        {
            var t, i;
            for (t in e)
            {
                i = e[t];
                if (n.Mutators.hasOwnProperty(t))
                {
                    n.Mutators[t].call(this, i)
                }
                else
                {
                    this.prototype[t] = i
                }
            }
        }
        n.extend = function (e)
        {
            e || (e = {});
            e.Extends = this;
            return n.create(e)
        };

        function r(e)
        {
            e.extend = n.extend;
            e.implement = i;
            return e
        }
        n.Mutators = {
            Extends: function (e)
            {
                var t = this.prototype;
                var n = a(e.prototype);
                o(n, t);
                n.constructor = this;
                this.prototype = n;
                this.superclass = e.prototype
            },
            Implements: function (e)
            {
                u(e) || (e = [e]);
                var t = this.prototype,
                    n;
                while (n = e.shift())
                {
                    o(t, n.prototype || n)
                }
            },
            Statics: function (e)
            {
                o(this, e)
            }
        };

        function s()
        {}
        var a = Object.__proto__ ? function (e)
        {
            return {
                __proto__: e
            }
        } : function (e)
        {
            s.prototype = e;
            return new s
        };

        function o(e, t, n)
        {
            for (var i in t)
            {
                if (t.hasOwnProperty(i))
                {
                    if (n && f(n, i) === -1) continue;
                    if (i !== "prototype")
                    {
                        e[i] = t[i]
                    }
                }
            }
        }
        var l = Object.prototype.toString;
        var u = Array.isArray || function (e)
        {
            return l.call(e) === "[object Array]"
        };
        var c = function (e)
        {
            return l.call(e) === "[object Function]"
        };
        var f = Array.prototype.indexOf ? function (e, t)
        {
            return e.indexOf(t)
        } : function (e, t)
        {
            for (var n = 0, i = e.length; n < i; n++)
            {
                if (e[n] === t)
                {
                    return n
                }
            }
            return -1
        };
        return t.exports
    }();
    var n = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        var n = /\s+/;

        function i()
        {}
        i.prototype.on = function (e, t, i)
        {
            var r, s, a;
            if (!t) return this;
            r = this.__events || (this.__events = {});
            e = e.split(n);
            while (s = e.shift())
            {
                a = r[s] || (r[s] = []);
                a.push(t, i)
            }
            return this
        };
        i.prototype.once = function (e, t, n)
        {
            var i = this;
            var r = function ()
            {
                i.off(e, r);
                t.apply(this, arguments)
            };
            this.on(e, r, n)
        };
        i.prototype.off = function (e, t, i)
        {
            var s, a, o, l;
            if (!(s = this.__events)) return this;
            if (!(e || t || i))
            {
                delete this.__events;
                return this
            }
            e = e ? e.split(n) : r(s);
            while (a = e.shift())
            {
                o = s[a];
                if (!o) continue;
                if (!(t || i))
                {
                    delete s[a];
                    continue
                }
                for (l = o.length - 2; l >= 0; l -= 2)
                {
                    if (!(t && o[l] !== t || i && o[l + 1] !== i))
                    {
                        o.splice(l, 2)
                    }
                }
            }
            return this
        };
        i.prototype.trigger = function (e)
        {
            var t, i, r, a, o, l, u = [],
                c, f = true;
            if (!(t = this.__events)) return this;
            e = e.split(n);
            for (o = 1, l = arguments.length; o < l; o++)
            {
                u[o - 1] = arguments[o]
            }
            while (i = e.shift())
            {
                if (r = t.all) r = r.slice();
                if (a = t[i]) a = a.slice();
                f = s(a, u, this) && f;
                f = s(r, [i].concat(u), this) && f
            }
            return f
        };
        i.prototype.emit = i.prototype.trigger;
        i.mixTo = function (e)
        {
            e = a(e) ? e.prototype : e;
            var t = i.prototype;
            for (var n in t)
            {
                if (t.hasOwnProperty(n))
                {
                    e[n] = t[n]
                }
            }
        };
        var r = Object.keys;
        if (!r)
        {
            r = function (e)
            {
                var t = [];
                for (var n in e)
                {
                    if (e.hasOwnProperty(n))
                    {
                        t.push(n)
                    }
                }
                return t
            }
        }

        function s(e, t, n)
        {
            var i = true;
            if (e)
            {
                var r = 0,
                    s = e.length,
                    a = t[0],
                    o = t[1],
                    l = t[2];
                switch (t.length)
                {
                    case 0:
                        for (; r < s; r += 2)
                        {
                            i = e[r].call(e[r + 1] || n) !== false && i
                        }
                        break;
                    case 1:
                        for (; r < s; r += 2)
                        {
                            i = e[r].call(e[r + 1] || n, a) !== false && i
                        }
                        break;
                    case 2:
                        for (; r < s; r += 2)
                        {
                            i = e[r].call(e[r + 1] || n, a, o) !== false && i
                        }
                        break;
                    case 3:
                        for (; r < s; r += 2)
                        {
                            i = e[r].call(e[r + 1] || n, a, o, l) !== false && i
                        }
                        break;
                    default:
                        for (; r < s; r += 2)
                        {
                            i = e[r].apply(e[r + 1] || n, t) !== false && i
                        }
                        break
                }
            }
            return i
        }

        function a(e)
        {
            return Object.prototype.toString.call(e) === "[object Function]"
        }
        return i;
        return t.exports
    }();
    var i = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        e.before = function (e, t, n)
        {
            return i.call(this, "before", e, t, n)
        };
        e.after = function (e, t, n)
        {
            return i.call(this, "after", e, t, n)
        };
        var n = /\s+/;

        function i(e, t, i, a)
        {
            var o = t.split(n);
            var l, u;
            while (l = o.shift())
            {
                u = r(this, l);
                if (!u.__isAspected)
                {
                    s.call(this, l)
                }
                this.on(e + ":" + l, i, a)
            }
            return this
        }

        function r(e, t)
        {
            var n = e[t];
            if (!n)
            {
                throw new Error("Invalid method name: " + t)
            }
            return n
        }

        function s(e)
        {
            var t = this[e];
            this[e] = function ()
            {
                var n = Array.prototype.slice.call(arguments);
                var i = ["before:" + e].concat(n);
                if (this.trigger.apply(this, i) === false) return;
                var r = t.apply(this, arguments);
                var s = ["after:" + e, r].concat(n);
                this.trigger.apply(this, s);
                return r
            };
            this[e].__isAspected = true
        }
        return t.exports
    }();
    var r = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        e.initAttrs = function (e)
        {
            var t = this.attrs = {};
            var n = this.propsInAttrs || [];
            g(t, this, n);
            if (e)
            {
                m(t, e)
            }
            w(this, t, e);
            b(this, t);
            v(n, this, t, true)
        };
        e.get = function (e)
        {
            var t = this.attrs[e] ||
                {};
            var n = t.value;
            return t.getter ? t.getter.call(this, n, e) : n
        };
        e.set = function (e, t, n)
        {
            var i = {};
            if (a(e))
            {
                i[e] = t
            }
            else
            {
                i = e;
                n = t
            }
            n || (n = {});
            var r = n.silent;
            var s = n.override;
            var o = this.attrs;
            var l = this.__changedAttrs || (this.__changedAttrs = {});
            for (e in i)
            {
                if (!i.hasOwnProperty(e)) continue;
                var u = o[e] || (o[e] = {});
                t = i[e];
                if (u.readOnly)
                {
                    throw new Error("This attribute is readOnly: " + e)
                }
                if (u.setter)
                {
                    t = u.setter.call(this, t, e)
                }
                var f = this.get(e);
                if (!s && c(f) && c(t))
                {
                    t = h(h(
                        {}, f), t)
                }
                o[e].value = t;
                if (!this.__initializingAttrs && !A(f, t))
                {
                    if (r)
                    {
                        l[e] = [t, f]
                    }
                    else
                    {
                        this.trigger("change:" + e, t, f, e)
                    }
                }
            }
            return this
        };
        e.change = function ()
        {
            var e = this.__changedAttrs;
            if (e)
            {
                for (var t in e)
                {
                    if (e.hasOwnProperty(t))
                    {
                        var n = e[t];
                        this.trigger("change:" + t, n[0], n[1], t)
                    }
                }
                delete this.__changedAttrs
            }
            return this
        };
        e._isPlainObject = c;
        var n = Object.prototype.toString;
        var i = Object.prototype.hasOwnProperty;
        var r;
        (function ()
        {
            var e = [];

            function t()
            {
                this.x = 1
            }
            t.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var n in new t)
            {
                e.push(n)
            }
            r = e[0] !== "x"
        })();
        var s = Array.isArray || function (e)
        {
            return n.call(e) === "[object Array]"
        };

        function a(e)
        {
            return n.call(e) === "[object String]"
        }

        function o(e)
        {
            return n.call(e) === "[object Function]"
        }

        function l(e)
        {
            return e != null && e == e.window
        }
        var u = function ()
        {
            if (Object.getPrototypeOf)
            {
                return function (e)
                {
                    return Object.getPrototypeOf(e)
                }
            }
            if (typeof "test".__proto__ == "object")
            {
                return function (e)
                {
                    return e.__proto__
                }
            }
            return function (e)
            {
                return false
            }
        }();

        function c(e)
        {
            if (!e || n.call(e) !== "[object Object]" || e.nodeType || l(e))
            {
                return false
            }
            var t = u(e),
                s = Function.prototype.toString,
                a = s.call(Object),
                o;
            if (t === null)
            {
                return true
            }
            if (t === false)
            {
                var c;
                if (r)
                {
                    for (c in e)
                    {
                        return i.call(e, c)
                    }
                }
                for (c in e)
                {}
                return c === undefined || i.call(e, c)
            }
            var f = i.call(t, "constructor") && t.constructor;
            return typeof f == "function" && f instanceof f && s.call(f) == a
        }

        function f(e)
        {
            if (!e || n.call(e) !== "[object Object]" || e.nodeType || l(e) || !e.hasOwnProperty)
            {
                return false
            }
            for (var t in e)
            {
                if (e.hasOwnProperty(t)) return false
            }
            return true
        }

        function h(e, t)
        {
            var n, i;
            for (n in t)
            {
                if (t.hasOwnProperty(n))
                {
                    e[n] = p(t[n], e[n])
                }
            }
            return e
        }

        function p(e, t)
        {
            if (s(e))
            {
                e = e.slice()
            }
            else if (c(e))
            {
                c(t) || (t = {});
                e = h(t, e)
            }
            return e
        }
        var d = Object.keys;
        if (!d)
        {
            d = function (e)
            {
                var t = [];
                for (var n in e)
                {
                    if (e.hasOwnProperty(n))
                    {
                        t.push(n)
                    }
                }
                return t
            }
        }

        function g(e, t, n)
        {
            var i = [];
            var r = t.constructor.prototype;
            while (r)
            {
                if (!r.hasOwnProperty("attrs"))
                {
                    r.attrs = {}
                }
                v(n, r.attrs, r);
                if (!f(r.attrs))
                {
                    i.unshift(r.attrs)
                }
                r = r.constructor.superclass
            }
            for (var s = 0, a = i.length; s < a; s++)
            {
                S(e, E(i[s]))
            }
        }

        function m(e, t)
        {
            S(e, E(t, true), true)
        }

        function v(e, t, n, i)
        {
            for (var r = 0, s = e.length; r < s; r++)
            {
                var a = e[r];
                if (n.hasOwnProperty(a))
                {
                    t[a] = i ? t.get(a) : n[a]
                }
            }
        }
        var y = /^(on|before|after)([A-Z].*)$/;
        var x = /^(Change)?([A-Z])(.*)/;

        function b(e, t)
        {
            for (var n in t)
            {
                if (t.hasOwnProperty(n))
                {
                    var i = t[n].value,
                        r;
                    if (o(i) && (r = n.match(y)))
                    {
                        e[r[1]](_(r[2]), i);
                        delete t[n]
                    }
                }
            }
        }

        function _(e)
        {
            var t = e.match(x);
            var n = t[1] ? "change:" : "";
            n += t[2].toLowerCase() + t[3];
            return n
        }

        function w(e, t, n)
        {
            var i = {
                silent: true
            };
            e.__initializingAttrs = true;
            for (var r in n)
            {
                if (n.hasOwnProperty(r))
                {
                    if (t[r].setter)
                    {
                        e.set(r, n[r], i)
                    }
                }
            }
            delete e.__initializingAttrs
        }
        var T = ["value", "getter", "setter", "readOnly"];

        function E(e, t)
        {
            var n = {};
            for (var i in e)
            {
                var r = e[i];
                if (!t && c(r) && N(r, T))
                {
                    n[i] = r;
                    continue
                }
                n[i] = {
                    value: r
                }
            }
            return n
        }
        var k = ["setter", "getter", "readOnly"];

        function S(e, t, n)
        {
            var i, r;
            var s;
            for (i in t)
            {
                if (t.hasOwnProperty(i))
                {
                    r = t[i];
                    s = e[i];
                    if (!s)
                    {
                        s = e[i] = {}
                    }
                    r["value"] !== undefined && (s["value"] = p(r["value"], s["value"]));
                    if (n) continue;
                    for (var a in k)
                    {
                        var o = k[a];
                        if (r[o] !== undefined)
                        {
                            s[o] = r[o]
                        }
                    }
                }
            }
            return e
        }

        function N(e, t)
        {
            for (var n = 0, i = t.length; n < i; n++)
            {
                if (e.hasOwnProperty(t[n]))
                {
                    return true
                }
            }
            return false
        }

        function C(e)
        {
            return e == null || (a(e) || s(e)) && e.length === 0 || f(e)
        }

        function A(e, t)
        {
            if (e === t) return true;
            if (C(e) && C(t)) return true;
            var i = n.call(e);
            if (i != n.call(t)) return false;
            switch (i)
            {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
                case "[object Array]":
                    var r = e.toString();
                    var s = t.toString();
                    return r.indexOf("[object") === -1 && s.indexOf("[object") === -1 && r === s
            }
            if (typeof e != "object" || typeof t != "object") return false;
            if (c(e) && c(t))
            {
                if (!A(d(e), d(t)))
                {
                    return false
                }
                for (var a in e)
                {
                    if (e[a] !== t[a]) return false
                }
                return true
            }
            return false
        }
        return t.exports
    }();
    var s = function ()
    {
        var e = {},
            s = {
                exports: e
            };
        var a = t;
        var o = n;
        var l = i;
        var u = r;
        s.exports = a.create(
            {
                Implements: [o, l, u],
                initialize: function (e)
                {
                    this.initAttrs(e);
                    c(this, this.attrs)
                },
                destroy: function ()
                {
                    this.off();
                    for (var e in this)
                    {
                        if (this.hasOwnProperty(e))
                        {
                            delete this[e]
                        }
                    }
                    this.destroy = function () {}
                }
            });

        function c(e, t)
        {
            for (var n in t)
            {
                if (t.hasOwnProperty(n))
                {
                    var i = "_onChange" + f(n);
                    if (e[i])
                    {
                        e.on("change:" + n, e[i])
                    }
                }
            }
        }

        function f(e)
        {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        return s.exports
    }();
    var a = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        var n = e;
        var i = decodeURIComponent;
        var r = encodeURIComponent;
        n.get = function (e, t)
        {
            l(e);
            if (typeof t === "function")
            {
                t = {
                    converter: t
                }
            }
            else
            {
                t = t ||
                    {}
            }
            var n = s(document.cookie, !t["raw"]);
            return (t.converter || u)(n[e])
        };
        n.set = function (e, t, n)
        {
            l(e);
            n = n ||
                {};
            var i = n["expires"];
            var s = n["domain"];
            var a = n["path"];
            if (!n["raw"])
            {
                t = r(String(t))
            }
            var u = e + "=" + t;
            var c = i;
            if (typeof c === "number")
            {
                c = new Date;
                c.setDate(c.getDate() + i)
            }
            if (c instanceof Date)
            {
                u += "; expires=" + c.toUTCString()
            }
            if (o(s))
            {
                u += "; domain=" + s
            }
            if (o(a))
            {
                u += "; path=" + a
            }
            if (n["secure"])
            {
                u += "; secure"
            }
            document.cookie = u;
            return u
        };
        n.remove = function (e, t)
        {
            t = t ||
                {};
            t["expires"] = new Date(0);
            return this.set(e, "", t)
        };

        function s(e, t)
        {
            var n = {};
            if (a(e) && e.length > 0)
            {
                var r = t ? i : u;
                var s = e.split(/;\s/g);
                var o;
                var l;
                var c;
                for (var f = 0, h = s.length; f < h; f++)
                {
                    c = s[f].match(/([^=]+)=/i);
                    if (c instanceof Array)
                    {
                        try
                        {
                            o = i(c[1]);
                            l = r(s[f].substring(c[1].length + 1))
                        }
                        catch (p)
                        {}
                    }
                    else
                    {
                        o = i(s[f]);
                        l = ""
                    }
                    if (o)
                    {
                        n[o] = l
                    }
                }
            }
            return n
        }

        function a(e)
        {
            return typeof e === "string"
        }

        function o(e)
        {
            return a(e) && e !== ""
        }

        function l(e)
        {
            if (!o(e))
            {
                throw new TypeError("Cookie name must be a non-empty string")
            }
        }

        function u(e)
        {
            return e
        }
        return t.exports
    }();
    var o = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        "use strict";
        var n = s;
        var i = a;
        var r = {};
        var o = n.extend(
            {
                attrs:
                    {
                        isLoggedIn: false,
                        isNewUser: false,
                        isFirstIn: true,
                        country: "",
                        firstName: "",
                        lastName: "",
                        serviceType: "",
                        memberSeq: "",
                        locale: ""
                    },
                setup: function ()
                {
                    var e = {};
                    if (i.get("xman_us_f"))
                    {
                        var t = i.get("xman_us_f").split("&");
                        for (var n = t.length; n--;)
                        {
                            var r = t[n].split("=");
                            e[r[0]] = r[1]
                        }
                    }
                    var s = i.get("xman_us_t");
                    var a = i.get("xman_us_f");
                    var o = /x_user=([^&"]+)/;
                    if (s && s.indexOf("sign=y") !== -1)
                    {
                        this.set("isLoggedIn", true)
                    }
                    else
                    {
                        this.set("isLoggedIn", false)
                    }
                    if (a && o.test(a))
                    {
                        a.match(o);
                        a = RegExp.$1;
                        a = a.split("|");
                        if (a.length >= 5)
                        {
                            this.set("country", a[0]);
                            this.set("firstName", a[1].replace(/</g, "&lt;").replace(/>/g, "&gt;"));
                            this.set("lastName", a[2].replace(/</g, "&lt;").replace(/>/g, "&gt;"));
                            this.set("serviceType", a[3]);
                            this.set("memberSeq", a[4])
                        }
                    }
                    if (this.get("memberSeq") !== "")
                    {
                        this.set("isNewUser", true)
                    }
                    if (i.get("ali_intl_firstIn") === "")
                    {
                        this.set("isFirstIn", true)
                    }
                    if (i.get("intl_locale"))
                    {
                        this.set("locale", i.get("intl_locale"))
                    }
                    else
                    {
                        var l = e["x_locale"];
                        if (l)
                        {
                            this.set("locale", l)
                        }
                        else
                        {
                            this.set("locale", "en_US")
                        }
                    }
                    return this
                }
            });
        r = (new o).setup();
        var l = function ()
        {
            var e = true;
            var t = i.get("xman_us_f");
            var t;
            if (t && t.indexOf("x_l=1") !== -1)
            {
                e = false
            }
            if (t && t.indexOf("x_l=0") !== -1)
            {
                e = true
            }
            return e
        };

        function u()
        {
            var e = true;
            if (r.get("memberSeq") !== "")
            {
                r.set("isNewUser", false);
                e = false
            }
            return e
        }
        t.exports = {
            isLoggedIn: r.get("isLoggedIn"),
            isNewUser: u(),
            isFirstIn: r.get("isFirstIn"),
            country: r.get("country"),
            firstName: r.get("firstName"),
            lastName: r.get("lastName"),
            serviceType: r.get("serviceType"),
            memberSeq: r.get("memberSeq"),
            serverDomain: function ()
            {
                var e, t;
                r.setup();
                e = r.get("serviceType"), t = ["gs", "cgs", "twgs", "hkgs", "cnfm"];
                if (t.indexOf(e) > -1)
                {
                    return "hz"
                }
                return "us"
            },
            getIsLoggedIn: function ()
            {
                r.setup();
                var e = r.get("isLoggedIn");
                return e
            },
            getIsNewUser: function ()
            {
                r.setup();
                return u()
            },
            getCountry: function ()
            {
                r.setup();
                return r.get("country")
            },
            getFirstName: function ()
            {
                r.setup();
                return r.get("firstName")
            },
            getLastName: function ()
            {
                r.setup();
                return r.get("lastName")
            },
            getServiceType: function ()
            {
                r.setup();
                return r.get("serviceType")
            },
            getMemberSeq: function ()
            {
                r.setup();
                return r.get("memberSeq")
            },
            getLocale: function ()
            {
                r.setup();
                return r.get("locale")
            },
            getIsOversea: l
        };
        return t.exports
    }();
    var l = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        "use strict";
        var i = e;
        var r = s;
        var l = a;
        var u = o;
        var c = r.extend(
            {
                attrs:
                    {
                        buttonClick: function (e)
                        {
                            var t = e.projectId || "",
                                n = e.pageType || "",
                                i = e.pageArea || "",
                                r = e.buttonType || "",
                                s = e.objectType || "",
                                a = e.objectValue || "",
                                o = e.clickBehavior || "";
                            var c = l.get("ali_apache_id") || "";
                            var f = u.memberSeq || "";
                            var h = "";
                            var p = false;
                            if (f !== "")
                            {
                                p = true;
                                h = f
                            }
                            else
                            {
                                h = c
                            }
                            var d = {
                                ae_project_id: t,
                                ae_page_type: n,
                                ae_page_area: i,
                                ae_button_type: r,
                                ae_object_type: s,
                                ae_object_value: a,
                                ae_ismember: p,
                                ae_user_id: h,
                                ae_click_behavior: o
                            };
                            if (typeof dmtrack !== "undefined")
                            {
                                window.dmtrack.clickstat(location.protocol + "//stat.alibaba.com/ae/aliexpress_button_click.html", d)
                            }
                        },
                        ctr: function (e)
                        {
                            var t = e.projectId || "",
                                n = e.expPage || "",
                                i = e.expPageArea || "",
                                r = e.expType || "",
                                s = e.expCondition || "",
                                a = e.expProduct || "",
                                o = e.expAttribute || "",
                                l = e.expResultCnt || "",
                                u = e.pageSize || "",
                                c = e.pageNo || "",
                                f = e.refer || "",
                                h = e.scmId || "",
                                p = e.pvid || "";
                            var d = {
                                project_id: t,
                                exp_page: n,
                                exp_page_area: i,
                                exp_type: r,
                                exp_condition: s,
                                exp_product: a,
                                exp_attribute: o,
                                exp_result_cnt: l,
                                Page_size: u,
                                Page_no: c,
                                refer: f,
                                scm_id: h,
                                pvid: p
                            };
                            if (typeof dmtrack !== "undefined")
                            {
                                window.dmtrack.clickstat(location.protocol + "//stat.alibaba.com/ctr/aliexpress_ctr.html", d)
                            }
                        },
                        p4pCtr: function (e)
                        {
                            var t = {
                                session_id: e.sessionId,
                                product_id: e.productId
                            };
                            if (typeof dmtrack != "undefined")
                            {
                                window.dmtrack.clickstat(location.protocol + "//stat.alibaba.com/ctr/aliexpress_p4p_ctr.html", t)
                            }
                        }
                    }
            });
        var f = new c;
        n.exports = {
            buttonClick: f.get("buttonClick"),
            ctr: f.get("ctr"),
            p4pCtr: f.get("p4pCtr")
        };
        return n.exports
    }();
    var u = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e;
        t.parseElement = function (e, t)
        {
            e = i(e)[0];
            var n = {};
            if (e.dataset)
            {
                n = i.extend(
                    {}, e.dataset)
            }
            else
            {
                var r = e.attributes;
                for (var s = 0, a = r.length; s < a; s++)
                {
                    var u = r[s];
                    var c = u.name;
                    if (c.indexOf("data-") === 0)
                    {
                        c = o(c.substring(5));
                        n[c] = u.value
                    }
                }
            }
            return t === true ? n : l(n)
        };
        var r = /-([a-z])/g;
        var s = /^\s*[\[{].*[\]}]\s*$/;
        var a = this.JSON ? JSON.parse : i.parseJSON;

        function o(e)
        {
            return e.toLowerCase().replace(r, function (e, t)
            {
                return (t + "").toUpperCase()
            })
        }

        function l(e)
        {
            for (var t in e)
            {
                if (e.hasOwnProperty(t))
                {
                    var n = e[t];
                    if (typeof n !== "string") continue;
                    if (s.test(n))
                    {
                        n = n.replace(/'/g, '"');
                        e[t] = l(a(n))
                    }
                    else
                    {
                        e[t] = u(n)
                    }
                }
            }
            return e
        }

        function u(e)
        {
            if (e.toLowerCase() === "false")
            {
                e = false
            }
            else if (e.toLowerCase() === "true")
            {
                e = true
            }
            else if (/\d/.test(e) && /[^a-z]/i.test(e))
            {
                var t = parseFloat(e);
                if (t + "" === e)
                {
                    e = t
                }
            }
            return e
        }
        return n.exports
    }();
    var c = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e;
        var r = "data-widget-auto-rendered";
        t.autoRender = function (e)
        {
            return new this(e).render()
        };
        t.autoRenderAll = function (e, n)
        {
            if (typeof e === "function")
            {
                n = e;
                e = null
            }
            e = i(e || document.body);
            var s = [];
            var a = [];
            e.find("[data-widget]").each(function (e, n)
            {
                if (!t.isDataApiOff(n))
                {
                    s.push(n.getAttribute("data-widget").toLowerCase());
                    a.push(n)
                }
            });
            if (s.length)
            {
                seajs.use(s, function ()
                {
                    for (var e = 0; e < arguments.length; e++)
                    {
                        var t = arguments[e];
                        var s = i(a[e]);
                        if (s.attr(r)) continue;
                        var o = {
                            initElement: s,
                            renderType: "auto"
                        };
                        var l = s.attr("data-widget-role");
                        o[l ? l : "element"] = s;
                        t.autoRender && t.autoRender(o);
                        s.attr(r, "true")
                    }
                    n && n()
                })
            }
        };
        var s = i(document.body).attr("data-api") === "off";
        t.isDataApiOff = function (e)
        {
            var t = i(e).attr("data-api");
            return t === "off" || t !== "on" && s
        };
        return n.exports
    }();
    var f = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = s;
        var r = e;
        var a = u;
        var o = c;
        var l = ".delegate-events-";
        var f = "_onRender";
        var h = "data-widget-cid";
        var p = {};
        var d = i.extend(
            {
                propsInAttrs: ["initElement", "element", "events"],
                element: null,
                events: null,
                attrs:
                    {
                        id: null,
                        className: null,
                        style: null,
                        template: "<div></div>",
                        model: null,
                        parentNode: document.body
                    },
                initialize: function (e)
                {
                    this.cid = v();
                    var t = this._parseDataAttrsConfig(e);
                    d.superclass.initialize.call(this, e ? r.extend(t, e) : t);
                    this.parseElement();
                    this.initProps();
                    this.delegateEvents();
                    this.setup();
                    this._stamp();
                    this._isTemplate = !(e && e.element)
                },
                _parseDataAttrsConfig: function (e)
                {
                    var t, n;
                    if (e)
                    {
                        t = e.initElement ? r(e.initElement) : r(e.element)
                    }
                    if (t && t[0] && !o.isDataApiOff(t))
                    {
                        n = a.parseElement(t)
                    }
                    return n
                },
                parseElement: function ()
                {
                    var e = this.element;
                    if (e)
                    {
                        this.element = r(e)
                    }
                    else if (this.get("template"))
                    {
                        this.parseElementFromTemplate()
                    }
                    if (!this.element || !this.element[0])
                    {
                        throw new Error("element is invalid")
                    }
                },
                parseElementFromTemplate: function ()
                {
                    var e = this.get("template");
                    if (x(e))
                    {
                        e = e(this.get("model"))
                    }
                    this.element = r(e)
                },
                initProps: function () {},
                delegateEvents: function (e, t, n)
                {
                    if (arguments.length === 0)
                    {
                        t = S(this);
                        e = this.element
                    }
                    else if (arguments.length === 1)
                    {
                        t = e;
                        e = this.element
                    }
                    else if (arguments.length === 2)
                    {
                        n = t;
                        t = e;
                        e = this.element
                    }
                    else
                    {
                        e || (e = this.element);
                        this._delegateElements || (this._delegateElements = []);
                        this._delegateElements.push(r(e))
                    }
                    if (y(t) && x(n))
                    {
                        var i = {};
                        i[t] = n;
                        t = i
                    }
                    for (var s in t)
                    {
                        if (!t.hasOwnProperty(s)) continue;
                        var a = N(s, this);
                        var o = a.type;
                        var l = a.selector;
                        (function (t, n)
                        {
                            var i = function (e)
                            {
                                if (x(t))
                                {
                                    t.call(n, e)
                                }
                                else
                                {
                                    n[t](e)
                                }
                            };
                            if (l)
                            {
                                r(e).on(o, l, i)
                            }
                            else
                            {
                                r(e).on(o, i)
                            }
                        })(t[s], this)
                    }
                    return this
                },
                undelegateEvents: function (e, t)
                {
                    if (!t)
                    {
                        t = e;
                        e = null
                    }
                    if (arguments.length === 0)
                    {
                        var n = l + this.cid;
                        this.element && this.element.off(n);
                        if (this._delegateElements)
                        {
                            for (var i in this._delegateElements)
                            {
                                if (!this._delegateElements.hasOwnProperty(i)) continue;
                                this._delegateElements[i].off(n)
                            }
                        }
                    }
                    else
                    {
                        var s = N(t, this);
                        if (!e)
                        {
                            this.element && this.element.off(s.type, s.selector)
                        }
                        else
                        {
                            r(e).off(s.type, s.selector)
                        }
                    }
                    return this
                },
                setup: function () {},
                render: function ()
                {
                    if (!this.rendered)
                    {
                        this._renderAndBindAttrs();
                        this.rendered = true
                    }
                    var e = this.get("parentNode");
                    if (e && !_(this.element[0]))
                    {
                        var t = this.constructor.outerBoxClass;
                        if (t)
                        {
                            var n = this._outerBox = r("<div></div>").addClass(t);
                            n.append(this.element).appendTo(e)
                        }
                        else
                        {
                            this.element.appendTo(e)
                        }
                    }
                    return this
                },
                _renderAndBindAttrs: function ()
                {
                    var e = this;
                    var t = e.attrs;
                    for (var n in t)
                    {
                        if (!t.hasOwnProperty(n)) continue;
                        var i = f + w(n);
                        if (this[i])
                        {
                            var r = this.get(n);
                            if (!A(r))
                            {
                                this[i](r, undefined, n)
                            }(function (t)
                        {
                            e.on("change:" + n, function (n, i, r)
                            {
                                e[t](n, i, r)
                            })
                        })(i)
                        }
                    }
                },
                _onRenderId: function (e)
                {
                    this.element.attr("id", e)
                },
                _onRenderClassName: function (e)
                {
                    this.element.addClass(e)
                },
                _onRenderStyle: function (e)
                {
                    this.element.css(e)
                },
                _stamp: function ()
                {
                    var e = this.cid;
                    (this.initElement || this.element).attr(h, e);
                    p[e] = this
                },
                $: function (e)
                {
                    return this.element.find(e)
                },
                destroy: function ()
                {
                    this.undelegateEvents();
                    delete p[this.cid];
                    if (this.element && this._isTemplate)
                    {
                        this.element.off();
                        if (this._outerBox)
                        {
                            this._outerBox.remove()
                        }
                        else
                        {
                            this.element.remove()
                        }
                    }
                    this.element = null;
                    d.superclass.destroy.call(this)
                }
            });
        d.query = function (e)
        {
            var t = r(e).eq(0);
            var n;
            t && (n = t.attr(h));
            return p[n]
        };
        d.autoRender = o.autoRender;
        d.autoRenderAll = o.autoRenderAll;
        d.StaticsWhiteList = ["autoRender"];
        n.exports = d;
        var g = Object.prototype.toString;
        var m = 0;

        function v()
        {
            return "widget-" + m++
        }

        function y(e)
        {
            return g.call(e) === "[object String]"
        }

        function x(e)
        {
            return g.call(e) === "[object Function]"
        }
        var b = r.contains || function (e, t)
        {
            return !!(e.compareDocumentPosition(t) & 16)
        };

        function _(e)
        {
            return b(document.documentElement, e)
        }

        function w(e)
        {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        var T = /^(\S+)\s*(.*)$/;
        var E = /{{([^}]+)}}/g;
        var k = "INVALID_SELECTOR";

        function S(e)
        {
            if (x(e.events))
            {
                e.events = e.events()
            }
            return e.events
        }

        function N(e, t)
        {
            var n = e.match(T);
            var i = n[1] + l + t.cid;
            var r = n[2] || undefined;
            if (r && r.indexOf("{{") > -1)
            {
                r = C(r, t)
            }
            return {
                type: i,
                selector: r
            }
        }

        function C(e, t)
        {
            return e.replace(E, function (e, n)
            {
                var i = n.split(".");
                var r = t,
                    s;
                while (s = i.shift())
                {
                    if (r === t.attrs)
                    {
                        r = t.get(s)
                    }
                    else
                    {
                        r = r[s]
                    }
                }
                if (y(r))
                {
                    return r
                }
                return k
            })
        }

        function A(e)
        {
            return e == null || e === undefined
        }
        return n.exports
    }();
    var h = function ()
    {
        var e = {},
            t = {
                exports: e
            };

        function n(e, t, n)
        {
            return o(e, n)[t]
        }

        function i(e, t, n, i)
        {
            i = f(i);
            var r = s(e, t, n, i);
            if (!r.containsKey && (t || n))
            {
                r.result.push(u(t, n, i.seperator))
            }
            return r.result.join(i.delimiter)
        }

        function r(e, t, n, i)
        {
            i = f(i);
            return s(e, t, n, i).result.join(i.delimiter)
        }

        function s(e, t, n, i)
        {
            var r = [];
            var s = false;
            l(e, function (e, a)
            {
                if (e == t)
                {
                    if (s)
                    {
                        return
                    }
                    s = true;
                    e = t;
                    a = n
                }
                if (e || a)
                {
                    r.push(u(e, a, i.seperator))
                }
            }, i);
            return {
                result: r,
                containsKey: s
            }
        }

        function a(e, t, n)
        {
            n = f(n);
            var i = [];
            l(e, function (e, r)
            {
                if (e !== t && (e || r))
                {
                    i.push(u(e, r, n.seperator))
                }
            }, n);
            return i.join(n.delimiter)
        }

        function o(e, t)
        {
            var n = {};
            l(e, function (e, t)
            {
                if (e || t)
                {
                    n[e] = t || null
                }
            }, t);
            return n
        }

        function l(e, t, n)
        {
            if (!e || !c(e))
            {
                return
            }
            n = f(n);
            var i = c(n.delimiter) ? e.split(n.delimiter) : [e];
            var r = n.seperator;
            var s = c(r);
            for (var a = 0, o = i.length; a < o; a++)
            {
                var l = i[a];
                l = s ? l.split(r) : [l];
                if (t.call(l, l[0], l.slice(1).join(r), a) === false)
                {
                    return
                }
            }
        }

        function u(e, t, n)
        {
            return e + (t != null ? n + t : "")
        }

        function c(e)
        {
            return typeof e == "string"
        }

        function f(e)
        {
            return {
                delimiter: h(e, "delimiter", "&"),
                seperator: h(e, "seperator", "=")
            }
        }

        function h(e, t, n)
        {
            t = e && e[t];
            return t == null ? n : t
        }
        t.exports = {
            get: n,
            set: i,
            replace: r,
            remove: a,
            parse: o,
            each: l
        };
        return t.exports
    }();
    var p = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        (function (n, i)
        {
            if (typeof e === "object")
            {
                t.exports = i()
            }
            else
            {
                n.Handlebars = n.Handlebars || i()
            }
        })(this, function ()
        {
            var e = function ()
            {
                "use strict";
                var e;

                function t(e)
                {
                    this.string = e
                }
                t.prototype.toString = function ()
                {
                    return "" + this.string
                };
                e = t;
                return e
            }();
            var t = function (e)
            {
                "use strict";
                var t = {};
                var n = e;
                var i = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                };
                var r = /[&<>"'`]/g;
                var s = /[&<>"'`]/;

                function a(e)
                {
                    return i[e]
                }

                function o(e)
                {
                    for (var t = 1; t < arguments.length; t++)
                    {
                        for (var n in arguments[t])
                        {
                            if (Object.prototype.hasOwnProperty.call(arguments[t], n))
                            {
                                e[n] = arguments[t][n]
                            }
                        }
                    }
                    return e
                }
                t.extend = o;
                var l = Object.prototype.toString;
                t.toString = l;
                var u = function (e)
                {
                    return typeof e === "function"
                };
                if (u(/x/))
                {
                    u = function (e)
                    {
                        return typeof e === "function" && l.call(e) === "[object Function]"
                    }
                }
                var u;
                t.isFunction = u;
                var c = Array.isArray || function (e)
                {
                    return e && typeof e === "object" ? l.call(e) === "[object Array]" : false
                };
                t.isArray = c;

                function f(e)
                {
                    if (e instanceof n)
                    {
                        return e.toString()
                    }
                    else if (e == null)
                    {
                        return ""
                    }
                    else if (!e)
                    {
                        return e + ""
                    }
                    e = "" + e;
                    if (!s.test(e))
                    {
                        return e
                    }
                    return e.replace(r, a)
                }
                t.escapeExpression = f;

                function h(e)
                {
                    if (!e && e !== 0)
                    {
                        return true
                    }
                    else if (c(e) && e.length === 0)
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                }
                t.isEmpty = h;

                function p(e, t)
                {
                    return (e ? e + "." : "") + t
                }
                t.appendContextPath = p;
                return t
            }(e);
            var n = function ()
            {
                "use strict";
                var e;
                var t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

                function n(e, n)
                {
                    var i;
                    if (n && n.firstLine)
                    {
                        i = n.firstLine;
                        e += " - " + i + ":" + n.firstColumn
                    }
                    var r = Error.prototype.constructor.call(this, e);
                    for (var s = 0; s < t.length; s++)
                    {
                        this[t[s]] = r[t[s]]
                    }
                    if (i)
                    {
                        this.lineNumber = i;
                        this.column = n.firstColumn
                    }
                }
                n.prototype = new Error;
                e = n;
                return e
            }();
            var i = function (e, t)
            {
                "use strict";
                var n = {};
                var i = e;
                var r = t;
                var s = "2.0.0";
                n.VERSION = s;
                var a = 6;
                n.COMPILER_REVISION = a;
                var o = {
                    1: "<= 1.0.rc.2",
                    2: "== 1.0.0-rc.3",
                    3: "== 1.0.0-rc.4",
                    4: "== 1.x.x",
                    5: "== 2.0.0-alpha.x",
                    6: ">= 2.0.0-beta.1"
                };
                n.REVISION_CHANGES = o;
                var l = i.isArray,
                    u = i.isFunction,
                    c = i.toString,
                    f = "[object Object]";

                function h(e, t)
                {
                    this.helpers = e ||
                        {};
                    this.partials = t ||
                        {};
                    p(this)
                }
                n.HandlebarsEnvironment = h;
                h.prototype = {
                    constructor: h,
                    logger: d,
                    log: g,
                    registerHelper: function (e, t)
                    {
                        if (c.call(e) === f)
                        {
                            if (t)
                            {
                                throw new r("Arg not supported with multiple helpers")
                            }
                            i.extend(this.helpers, e)
                        }
                        else
                        {
                            this.helpers[e] = t
                        }
                    },
                    unregisterHelper: function (e)
                    {
                        delete this.helpers[e]
                    },
                    registerPartial: function (e, t)
                    {
                        if (c.call(e) === f)
                        {
                            i.extend(this.partials, e)
                        }
                        else
                        {
                            this.partials[e] = t
                        }
                    },
                    unregisterPartial: function (e)
                    {
                        delete this.partials[e]
                    }
                };

                function p(e)
                {
                    e.registerHelper("helperMissing", function ()
                    {
                        if (arguments.length === 1)
                        {
                            return undefined
                        }
                        else
                        {
                            throw new r("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                        }
                    });
                    e.registerHelper("blockHelperMissing", function (t, n)
                    {
                        var r = n.inverse,
                            s = n.fn;
                        if (t === true)
                        {
                            return s(this)
                        }
                        else if (t === false || t == null)
                        {
                            return r(this)
                        }
                        else if (l(t))
                        {
                            if (t.length > 0)
                            {
                                if (n.ids)
                                {
                                    n.ids = [n.name]
                                }
                                return e.helpers.each(t, n)
                            }
                            else
                            {
                                return r(this)
                            }
                        }
                        else
                        {
                            if (n.data && n.ids)
                            {
                                var a = m(n.data);
                                a.contextPath = i.appendContextPath(n.data.contextPath, n.name);
                                n = {
                                    data: a
                                }
                            }
                            return s(t, n)
                        }
                    });
                    e.registerHelper("each", function (e, t)
                    {
                        if (!t)
                        {
                            throw new r("Must pass iterator to #each")
                        }
                        var n = t.fn,
                            s = t.inverse;
                        var a = 0,
                            o = "",
                            c;
                        var f;
                        if (t.data && t.ids)
                        {
                            f = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."
                        }
                        if (u(e))
                        {
                            e = e.call(this)
                        }
                        if (t.data)
                        {
                            c = m(t.data)
                        }
                        if (e && typeof e === "object")
                        {
                            if (l(e))
                            {
                                for (var h = e.length; a < h; a++)
                                {
                                    if (c)
                                    {
                                        c.index = a;
                                        c.first = a === 0;
                                        c.last = a === e.length - 1;
                                        if (f)
                                        {
                                            c.contextPath = f + a
                                        }
                                    }
                                    o = o + n(e[a],
                                        {
                                            data: c
                                        })
                                }
                            }
                            else
                            {
                                for (var p in e)
                                {
                                    if (e.hasOwnProperty(p))
                                    {
                                        if (c)
                                        {
                                            c.key = p;
                                            c.index = a;
                                            c.first = a === 0;
                                            if (f)
                                            {
                                                c.contextPath = f + p
                                            }
                                        }
                                        o = o + n(e[p],
                                            {
                                                data: c
                                            });
                                        a++
                                    }
                                }
                            }
                        }
                        if (a === 0)
                        {
                            o = s(this)
                        }
                        return o
                    });
                    e.registerHelper("if", function (e, t)
                    {
                        if (u(e))
                        {
                            e = e.call(this)
                        }
                        if (!t.hash.includeZero && !e || i.isEmpty(e))
                        {
                            return t.inverse(this)
                        }
                        else
                        {
                            return t.fn(this)
                        }
                    });
                    e.registerHelper("unless", function (t, n)
                    {
                        return e.helpers["if"].call(this, t,
                            {
                                fn: n.inverse,
                                inverse: n.fn,
                                hash: n.hash
                            })
                    });
                    e.registerHelper("with", function (e, t)
                    {
                        if (u(e))
                        {
                            e = e.call(this)
                        }
                        var n = t.fn;
                        if (!i.isEmpty(e))
                        {
                            if (t.data && t.ids)
                            {
                                var r = m(t.data);
                                r.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0]);
                                t = {
                                    data: r
                                }
                            }
                            return n(e, t)
                        }
                        else
                        {
                            return t.inverse(this)
                        }
                    });
                    e.registerHelper("log", function (t, n)
                    {
                        var i = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
                        e.log(i, t)
                    });
                    e.registerHelper("lookup", function (e, t)
                    {
                        return e && e[t]
                    })
                }
                var d = {
                    methodMap:
                        {
                            0: "debug",
                            1: "info",
                            2: "warn",
                            3: "error"
                        },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 3,
                    log: function (e, t)
                    {
                        if (d.level <= e)
                        {
                            var n = d.methodMap[e];
                            if (typeof console !== "undefined" && console[n])
                            {
                                console[n].call(console, t)
                            }
                        }
                    }
                };
                n.logger = d;
                var g = d.log;
                n.log = g;
                var m = function (e)
                {
                    var t = i.extend(
                        {}, e);
                    t._parent = e;
                    return t
                };
                n.createFrame = m;
                return n
            }(t, n);
            var r = function (e, t, n)
            {
                "use strict";
                var i = {};
                var r = e;
                var s = t;
                var a = n.COMPILER_REVISION;
                var o = n.REVISION_CHANGES;
                var l = n.createFrame;

                function u(e)
                {
                    var t = e && e[0] || 1,
                        n = a;
                    if (t !== n)
                    {
                        if (t < n)
                        {
                            var i = o[n],
                                r = o[t];
                            throw new s("Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                        }
                        else
                        {
                            throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + e[1] + ").")
                        }
                    }
                }
                i.checkRevision = u;

                function c(e, t)
                {
                    if (!t)
                    {
                        throw new s("No environment passed to template")
                    }
                    if (!e || !e.main)
                    {
                        throw new s("Unknown template object: " + typeof e)
                    }
                    t.VM.checkRevision(e.compiler);
                    var n = function (n, i, a, o, l, u, c, f, h)
                    {
                        if (l)
                        {
                            o = r.extend(
                                {}, o, l)
                        }
                        var p = t.VM.invokePartial.call(this, n, a, o, u, c, f, h);
                        if (p == null && t.compile)
                        {
                            var d = {
                                helpers: u,
                                partials: c,
                                data: f,
                                depths: h
                            };
                            c[a] = t.compile(n,
                                {
                                    data: f !== undefined,
                                    compat: e.compat
                                }, t);
                            p = c[a](o, d)
                        }
                        if (p != null)
                        {
                            if (i)
                            {
                                var g = p.split("\n");
                                for (var m = 0, v = g.length; m < v; m++)
                                {
                                    if (!g[m] && m + 1 === v)
                                    {
                                        break
                                    }
                                    g[m] = i + g[m]
                                }
                                p = g.join("\n")
                            }
                            return p
                        }
                        else
                        {
                            throw new s("The partial " + a + " could not be compiled when running in runtime-only mode")
                        }
                    };
                    var i = {
                        lookup: function (e, t)
                        {
                            var n = e.length;
                            for (var i = 0; i < n; i++)
                            {
                                if (e[i] && e[i][t] != null)
                                {
                                    return e[i][t]
                                }
                            }
                        },
                        lambda: function (e, t)
                        {
                            return typeof e === "function" ? e.call(t) : e
                        },
                        escapeExpression: r.escapeExpression,
                        invokePartial: n,
                        fn: function (t)
                        {
                            return e[t]
                        },
                        programs: [],
                        program: function (e, t, n)
                        {
                            var i = this.programs[e],
                                r = this.fn(e);
                            if (t || n)
                            {
                                i = f(this, e, r, t, n)
                            }
                            else if (!i)
                            {
                                i = this.programs[e] = f(this, e, r)
                            }
                            return i
                        },
                        data: function (e, t)
                        {
                            while (e && t--)
                            {
                                e = e._parent
                            }
                            return e
                        },
                        merge: function (e, t)
                        {
                            var n = e || t;
                            if (e && t && e !== t)
                            {
                                n = r.extend(
                                    {}, t, e)
                            }
                            return n
                        },
                        noop: t.VM.noop,
                        compilerInfo: e.compiler
                    };
                    var a = function (t, n)
                    {
                        n = n ||
                            {};
                        var r = n.data;
                        a._setup(n);
                        if (!n.partial && e.useData)
                        {
                            r = d(t, r)
                        }
                        var s;
                        if (e.useDepths)
                        {
                            s = n.depths ? [t].concat(n.depths) : [t]
                        }
                        return e.main.call(i, t, i.helpers, i.partials, r, s)
                    };
                    a.isTop = true;
                    a._setup = function (n)
                    {
                        if (!n.partial)
                        {
                            i.helpers = i.merge(n.helpers, t.helpers);
                            if (e.usePartial)
                            {
                                i.partials = i.merge(n.partials, t.partials)
                            }
                        }
                        else
                        {
                            i.helpers = n.helpers;
                            i.partials = n.partials
                        }
                    };
                    a._child = function (t, n, r)
                    {
                        if (e.useDepths && !r)
                        {
                            throw new s("must pass parent depths")
                        }
                        return f(i, t, e[t], n, r)
                    };
                    return a
                }
                i.template = c;

                function f(e, t, n, i, r)
                {
                    var s = function (t, s)
                    {
                        s = s ||
                            {};
                        return n.call(e, t, e.helpers, e.partials, s.data || i, r && [t].concat(r))
                    };
                    s.program = t;
                    s.depth = r ? r.length : 0;
                    return s
                }
                i.program = f;

                function h(e, t, n, i, r, a, o)
                {
                    var l = {
                        partial: true,
                        helpers: i,
                        partials: r,
                        data: a,
                        depths: o
                    };
                    if (e === undefined)
                    {
                        throw new s("The partial " + t + " could not be found")
                    }
                    else if (e instanceof Function)
                    {
                        return e(n, l)
                    }
                }
                i.invokePartial = h;

                function p()
                {
                    return ""
                }
                i.noop = p;

                function d(e, t)
                {
                    if (!t || !("root" in t))
                    {
                        t = t ? l(t) :
                            {};
                        t.root = e
                    }
                    return t
                }
                return i
            }(t, n, i);
            var s = function (e, t, n, i, r)
            {
                "use strict";
                var s;
                var a = e;
                var o = t;
                var l = n;
                var u = i;
                var c = r;
                var f = function ()
                {
                    var e = new a.HandlebarsEnvironment;
                    u.extend(e, a);
                    e.SafeString = o;
                    e.Exception = l;
                    e.Utils = u;
                    e.escapeExpression = u.escapeExpression;
                    e.VM = c;
                    e.template = function (t)
                    {
                        return c.template(t, e)
                    };
                    return e
                };
                var h = f();
                h.create = f;
                h["default"] = h;
                s = h;
                return s
            }(i, e, n, t, r);
            var a = function (e)
            {
                "use strict";
                var t;
                var n = e;

                function i(e)
                {
                    e = e ||
                        {};
                    this.firstLine = e.first_line;
                    this.firstColumn = e.first_column;
                    this.lastColumn = e.last_column;
                    this.lastLine = e.last_line
                }
                var r = {
                    ProgramNode: function (e, t, n)
                    {
                        i.call(this, n);
                        this.type = "program";
                        this.statements = e;
                        this.strip = t
                    },
                    MustacheNode: function (e, t, n, s, a)
                    {
                        i.call(this, a);
                        this.type = "mustache";
                        this.strip = s;
                        if (n != null && n.charAt)
                        {
                            var o = n.charAt(3) || n.charAt(2);
                            this.escaped = o !== "{" && o !== "&"
                        }
                        else
                        {
                            this.escaped = !!n
                        }
                        if (e instanceof r.SexprNode)
                        {
                            this.sexpr = e
                        }
                        else
                        {
                            this.sexpr = new r.SexprNode(e, t)
                        }
                        this.id = this.sexpr.id;
                        this.params = this.sexpr.params;
                        this.hash = this.sexpr.hash;
                        this.eligibleHelper = this.sexpr.eligibleHelper;
                        this.isHelper = this.sexpr.isHelper
                    },
                    SexprNode: function (e, t, n)
                    {
                        i.call(this, n);
                        this.type = "sexpr";
                        this.hash = t;
                        var r = this.id = e[0];
                        var s = this.params = e.slice(1);
                        this.isHelper = !!(s.length || t);
                        this.eligibleHelper = this.isHelper || r.isSimple
                    },
                    PartialNode: function (e, t, n, r, s)
                    {
                        i.call(this, s);
                        this.type = "partial";
                        this.partialName = e;
                        this.context = t;
                        this.hash = n;
                        this.strip = r;
                        this.strip.inlineStandalone = true
                    },
                    BlockNode: function (e, t, n, r, s)
                    {
                        i.call(this, s);
                        this.type = "block";
                        this.mustache = e;
                        this.program = t;
                        this.inverse = n;
                        this.strip = r;
                        if (n && !t)
                        {
                            this.isInverse = true
                        }
                    },
                    RawBlockNode: function (e, t, s, a)
                    {
                        i.call(this, a);
                        if (e.sexpr.id.original !== s)
                        {
                            throw new n(e.sexpr.id.original + " doesn't match " + s, this)
                        }
                        t = new r.ContentNode(t, a);
                        this.type = "block";
                        this.mustache = e;
                        this.program = new r.ProgramNode([t],
                            {}, a)
                    },
                    ContentNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "content";
                        this.original = this.string = e
                    },
                    HashNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "hash";
                        this.pairs = e
                    },
                    IdNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "ID";
                        var r = "",
                            s = [],
                            a = 0,
                            o = "";
                        for (var l = 0, u = e.length; l < u; l++)
                        {
                            var c = e[l].part;
                            r += (e[l].separator || "") + c;
                            if (c === ".." || c === "." || c === "this")
                            {
                                if (s.length > 0)
                                {
                                    throw new n("Invalid path: " + r, this)
                                }
                                else if (c === "..")
                                {
                                    a++;
                                    o += "../"
                                }
                                else
                                {
                                    this.isScoped = true
                                }
                            }
                            else
                            {
                                s.push(c)
                            }
                        }
                        this.original = r;
                        this.parts = s;
                        this.string = s.join(".");
                        this.depth = a;
                        this.idName = o + this.string;
                        this.isSimple = e.length === 1 && !this.isScoped && a === 0;
                        this.stringModeValue = this.string
                    },
                    PartialNameNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "PARTIAL_NAME";
                        this.name = e.original
                    },
                    DataNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "DATA";
                        this.id = e;
                        this.stringModeValue = e.stringModeValue;
                        this.idName = "@" + e.stringModeValue
                    },
                    StringNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "STRING";
                        this.original = this.string = this.stringModeValue = e
                    },
                    NumberNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "NUMBER";
                        this.original = this.number = e;
                        this.stringModeValue = Number(e)
                    },
                    BooleanNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "BOOLEAN";
                        this.bool = e;
                        this.stringModeValue = e === "true"
                    },
                    CommentNode: function (e, t)
                    {
                        i.call(this, t);
                        this.type = "comment";
                        this.comment = e;
                        this.strip = {
                            inlineStandalone: true
                        }
                    }
                };
                t = r;
                return t
            }(n);
            var o = function ()
            {
                "use strict";
                var e;
                var t = function ()
                {
                    var e = {
                        trace: function i()
                        {},
                        yy:
                            {},
                        symbols_:
                            {
                                error: 2,
                                root: 3,
                                program: 4,
                                EOF: 5,
                                program_repetition0: 6,
                                statement: 7,
                                mustache: 8,
                                block: 9,
                                rawBlock: 10,
                                partial: 11,
                                CONTENT: 12,
                                COMMENT: 13,
                                openRawBlock: 14,
                                END_RAW_BLOCK: 15,
                                OPEN_RAW_BLOCK: 16,
                                sexpr: 17,
                                CLOSE_RAW_BLOCK: 18,
                                openBlock: 19,
                                block_option0: 20,
                                closeBlock: 21,
                                openInverse: 22,
                                block_option1: 23,
                                OPEN_BLOCK: 24,
                                CLOSE: 25,
                                OPEN_INVERSE: 26,
                                inverseAndProgram: 27,
                                INVERSE: 28,
                                OPEN_ENDBLOCK: 29,
                                path: 30,
                                OPEN: 31,
                                OPEN_UNESCAPED: 32,
                                CLOSE_UNESCAPED: 33,
                                OPEN_PARTIAL: 34,
                                partialName: 35,
                                param: 36,
                                partial_option0: 37,
                                partial_option1: 38,
                                sexpr_repetition0: 39,
                                sexpr_option0: 40,
                                dataName: 41,
                                STRING: 42,
                                NUMBER: 43,
                                BOOLEAN: 44,
                                OPEN_SEXPR: 45,
                                CLOSE_SEXPR: 46,
                                hash: 47,
                                hash_repetition_plus0: 48,
                                hashSegment: 49,
                                ID: 50,
                                EQUALS: 51,
                                DATA: 52,
                                pathSegments: 53,
                                SEP: 54,
                                $accept: 0,
                                $end: 1
                            },
                        terminals_:
                            {
                                2: "error",
                                5: "EOF",
                                12: "CONTENT",
                                13: "COMMENT",
                                15: "END_RAW_BLOCK",
                                16: "OPEN_RAW_BLOCK",
                                18: "CLOSE_RAW_BLOCK",
                                24: "OPEN_BLOCK",
                                25: "CLOSE",
                                26: "OPEN_INVERSE",
                                28: "INVERSE",
                                29: "OPEN_ENDBLOCK",
                                31: "OPEN",
                                32: "OPEN_UNESCAPED",
                                33: "CLOSE_UNESCAPED",
                                34: "OPEN_PARTIAL",
                                42: "STRING",
                                43: "NUMBER",
                                44: "BOOLEAN",
                                45: "OPEN_SEXPR",
                                46: "CLOSE_SEXPR",
                                50: "ID",
                                51: "EQUALS",
                                52: "DATA",
                                54: "SEP"
                            },
                        productions_: [0, [3, 2],
                            [4, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [10, 3],
                            [14, 3],
                            [9, 4],
                            [9, 4],
                            [19, 3],
                            [22, 3],
                            [27, 2],
                            [21, 3],
                            [8, 3],
                            [8, 3],
                            [11, 5],
                            [11, 4],
                            [17, 3],
                            [17, 1],
                            [36, 1],
                            [36, 1],
                            [36, 1],
                            [36, 1],
                            [36, 1],
                            [36, 3],
                            [47, 1],
                            [49, 3],
                            [35, 1],
                            [35, 1],
                            [35, 1],
                            [41, 2],
                            [30, 1],
                            [53, 3],
                            [53, 1],
                            [6, 0],
                            [6, 2],
                            [20, 0],
                            [20, 1],
                            [23, 0],
                            [23, 1],
                            [37, 0],
                            [37, 1],
                            [38, 0],
                            [38, 1],
                            [39, 0],
                            [39, 2],
                            [40, 0],
                            [40, 1],
                            [48, 1],
                            [48, 2]
                        ],
                        performAction: function r(e, t, n, i, s, a, o)
                        {
                            var l = a.length - 1;
                            switch (s)
                            {
                                case 1:
                                    i.prepareProgram(a[l - 1].statements, true);
                                    return a[l - 1];
                                    break;
                                case 2:
                                    this.$ = new i.ProgramNode(i.prepareProgram(a[l]),
                                        {}, this._$);
                                    break;
                                case 3:
                                    this.$ = a[l];
                                    break;
                                case 4:
                                    this.$ = a[l];
                                    break;
                                case 5:
                                    this.$ = a[l];
                                    break;
                                case 6:
                                    this.$ = a[l];
                                    break;
                                case 7:
                                    this.$ = new i.ContentNode(a[l], this._$);
                                    break;
                                case 8:
                                    this.$ = new i.CommentNode(a[l], this._$);
                                    break;
                                case 9:
                                    this.$ = new i.RawBlockNode(a[l - 2], a[l - 1], a[l], this._$);
                                    break;
                                case 10:
                                    this.$ = new i.MustacheNode(a[l - 1], null, "", "", this._$);
                                    break;
                                case 11:
                                    this.$ = i.prepareBlock(a[l - 3], a[l - 2], a[l - 1], a[l], false, this._$);
                                    break;
                                case 12:
                                    this.$ = i.prepareBlock(a[l - 3], a[l - 2], a[l - 1], a[l], true, this._$);
                                    break;
                                case 13:
                                    this.$ = new i.MustacheNode(a[l - 1], null, a[l - 2], i.stripFlags(a[l - 2], a[l]), this._$);
                                    break;
                                case 14:
                                    this.$ = new i.MustacheNode(a[l - 1], null, a[l - 2], i.stripFlags(a[l - 2], a[l]), this._$);
                                    break;
                                case 15:
                                    this.$ = {
                                        strip: i.stripFlags(a[l - 1], a[l - 1]),
                                        program: a[l]
                                    };
                                    break;
                                case 16:
                                    this.$ = {
                                        path: a[l - 1],
                                        strip: i.stripFlags(a[l - 2], a[l])
                                    };
                                    break;
                                case 17:
                                    this.$ = new i.MustacheNode(a[l - 1], null, a[l - 2], i.stripFlags(a[l - 2], a[l]), this._$);
                                    break;
                                case 18:
                                    this.$ = new i.MustacheNode(a[l - 1], null, a[l - 2], i.stripFlags(a[l - 2], a[l]), this._$);
                                    break;
                                case 19:
                                    this.$ = new i.PartialNode(a[l - 3], a[l - 2], a[l - 1], i.stripFlags(a[l - 4], a[l]), this._$);
                                    break;
                                case 20:
                                    this.$ = new i.PartialNode(a[l - 2], undefined, a[l - 1], i.stripFlags(a[l - 3], a[l]), this._$);
                                    break;
                                case 21:
                                    this.$ = new i.SexprNode([a[l - 2]].concat(a[l - 1]), a[l], this._$);
                                    break;
                                case 22:
                                    this.$ = new i.SexprNode([a[l]], null, this._$);
                                    break;
                                case 23:
                                    this.$ = a[l];
                                    break;
                                case 24:
                                    this.$ = new i.StringNode(a[l], this._$);
                                    break;
                                case 25:
                                    this.$ = new i.NumberNode(a[l], this._$);
                                    break;
                                case 26:
                                    this.$ = new i.BooleanNode(a[l], this._$);
                                    break;
                                case 27:
                                    this.$ = a[l];
                                    break;
                                case 28:
                                    a[l - 1].isHelper = true;
                                    this.$ = a[l - 1];
                                    break;
                                case 29:
                                    this.$ = new i.HashNode(a[l], this._$);
                                    break;
                                case 30:
                                    this.$ = [a[l - 2], a[l]];
                                    break;
                                case 31:
                                    this.$ = new i.PartialNameNode(a[l], this._$);
                                    break;
                                case 32:
                                    this.$ = new i.PartialNameNode(new i.StringNode(a[l], this._$), this._$);
                                    break;
                                case 33:
                                    this.$ = new i.PartialNameNode(new i.NumberNode(a[l], this._$));
                                    break;
                                case 34:
                                    this.$ = new i.DataNode(a[l], this._$);
                                    break;
                                case 35:
                                    this.$ = new i.IdNode(a[l], this._$);
                                    break;
                                case 36:
                                    a[l - 2].push(
                                        {
                                            part: a[l],
                                            separator: a[l - 1]
                                        });
                                    this.$ = a[l - 2];
                                    break;
                                case 37:
                                    this.$ = [
                                        {
                                            part: a[l]
                                        }];
                                    break;
                                case 38:
                                    this.$ = [];
                                    break;
                                case 39:
                                    a[l - 1].push(a[l]);
                                    break;
                                case 48:
                                    this.$ = [];
                                    break;
                                case 49:
                                    a[l - 1].push(a[l]);
                                    break;
                                case 52:
                                    this.$ = [a[l]];
                                    break;
                                case 53:
                                    a[l - 1].push(a[l]);
                                    break
                            }
                        },
                        table: [
                            {
                                3: 1,
                                4: 2,
                                5: [2, 38],
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            },
                            {
                                1: [3]
                            },
                            {
                                5: [1, 4]
                            },
                            {
                                5: [2, 2],
                                7: 5,
                                8: 6,
                                9: 7,
                                10: 8,
                                11: 9,
                                12: [1, 10],
                                13: [1, 11],
                                14: 16,
                                16: [1, 20],
                                19: 14,
                                22: 15,
                                24: [1, 18],
                                26: [1, 19],
                                28: [2, 2],
                                29: [2, 2],
                                31: [1, 12],
                                32: [1, 13],
                                34: [1, 17]
                            },
                            {
                                1: [2, 1]
                            },
                            {
                                5: [2, 39],
                                12: [2, 39],
                                13: [2, 39],
                                16: [2, 39],
                                24: [2, 39],
                                26: [2, 39],
                                28: [2, 39],
                                29: [2, 39],
                                31: [2, 39],
                                32: [2, 39],
                                34: [2, 39]
                            },
                            {
                                5: [2, 3],
                                12: [2, 3],
                                13: [2, 3],
                                16: [2, 3],
                                24: [2, 3],
                                26: [2, 3],
                                28: [2, 3],
                                29: [2, 3],
                                31: [2, 3],
                                32: [2, 3],
                                34: [2, 3]
                            },
                            {
                                5: [2, 4],
                                12: [2, 4],
                                13: [2, 4],
                                16: [2, 4],
                                24: [2, 4],
                                26: [2, 4],
                                28: [2, 4],
                                29: [2, 4],
                                31: [2, 4],
                                32: [2, 4],
                                34: [2, 4]
                            },
                            {
                                5: [2, 5],
                                12: [2, 5],
                                13: [2, 5],
                                16: [2, 5],
                                24: [2, 5],
                                26: [2, 5],
                                28: [2, 5],
                                29: [2, 5],
                                31: [2, 5],
                                32: [2, 5],
                                34: [2, 5]
                            },
                            {
                                5: [2, 6],
                                12: [2, 6],
                                13: [2, 6],
                                16: [2, 6],
                                24: [2, 6],
                                26: [2, 6],
                                28: [2, 6],
                                29: [2, 6],
                                31: [2, 6],
                                32: [2, 6],
                                34: [2, 6]
                            },
                            {
                                5: [2, 7],
                                12: [2, 7],
                                13: [2, 7],
                                16: [2, 7],
                                24: [2, 7],
                                26: [2, 7],
                                28: [2, 7],
                                29: [2, 7],
                                31: [2, 7],
                                32: [2, 7],
                                34: [2, 7]
                            },
                            {
                                5: [2, 8],
                                12: [2, 8],
                                13: [2, 8],
                                16: [2, 8],
                                24: [2, 8],
                                26: [2, 8],
                                28: [2, 8],
                                29: [2, 8],
                                31: [2, 8],
                                32: [2, 8],
                                34: [2, 8]
                            },
                            {
                                17: 21,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                17: 27,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                4: 28,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                28: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            },
                            {
                                4: 29,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                28: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            },
                            {
                                12: [1, 30]
                            },
                            {
                                30: 32,
                                35: 31,
                                42: [1, 33],
                                43: [1, 34],
                                50: [1, 26],
                                53: 24
                            },
                            {
                                17: 35,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                17: 36,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                17: 37,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                25: [1, 38]
                            },
                            {
                                18: [2, 48],
                                25: [2, 48],
                                33: [2, 48],
                                39: 39,
                                42: [2, 48],
                                43: [2, 48],
                                44: [2, 48],
                                45: [2, 48],
                                46: [2, 48],
                                50: [2, 48],
                                52: [2, 48]
                            },
                            {
                                18: [2, 22],
                                25: [2, 22],
                                33: [2, 22],
                                46: [2, 22]
                            },
                            {
                                18: [2, 35],
                                25: [2, 35],
                                33: [2, 35],
                                42: [2, 35],
                                43: [2, 35],
                                44: [2, 35],
                                45: [2, 35],
                                46: [2, 35],
                                50: [2, 35],
                                52: [2, 35],
                                54: [1, 40]
                            },
                            {
                                30: 41,
                                50: [1, 26],
                                53: 24
                            },
                            {
                                18: [2, 37],
                                25: [2, 37],
                                33: [2, 37],
                                42: [2, 37],
                                43: [2, 37],
                                44: [2, 37],
                                45: [2, 37],
                                46: [2, 37],
                                50: [2, 37],
                                52: [2, 37],
                                54: [2, 37]
                            },
                            {
                                33: [1, 42]
                            },
                            {
                                20: 43,
                                27: 44,
                                28: [1, 45],
                                29: [2, 40]
                            },
                            {
                                23: 46,
                                27: 47,
                                28: [1, 45],
                                29: [2, 42]
                            },
                            {
                                15: [1, 48]
                            },
                            {
                                25: [2, 46],
                                30: 51,
                                36: 49,
                                38: 50,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                47: 57,
                                48: 58,
                                49: 60,
                                50: [1, 59],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                25: [2, 31],
                                42: [2, 31],
                                43: [2, 31],
                                44: [2, 31],
                                45: [2, 31],
                                50: [2, 31],
                                52: [2, 31]
                            },
                            {
                                25: [2, 32],
                                42: [2, 32],
                                43: [2, 32],
                                44: [2, 32],
                                45: [2, 32],
                                50: [2, 32],
                                52: [2, 32]
                            },
                            {
                                25: [2, 33],
                                42: [2, 33],
                                43: [2, 33],
                                44: [2, 33],
                                45: [2, 33],
                                50: [2, 33],
                                52: [2, 33]
                            },
                            {
                                25: [1, 61]
                            },
                            {
                                25: [1, 62]
                            },
                            {
                                18: [1, 63]
                            },
                            {
                                5: [2, 17],
                                12: [2, 17],
                                13: [2, 17],
                                16: [2, 17],
                                24: [2, 17],
                                26: [2, 17],
                                28: [2, 17],
                                29: [2, 17],
                                31: [2, 17],
                                32: [2, 17],
                                34: [2, 17]
                            },
                            {
                                18: [2, 50],
                                25: [2, 50],
                                30: 51,
                                33: [2, 50],
                                36: 65,
                                40: 64,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                46: [2, 50],
                                47: 66,
                                48: 58,
                                49: 60,
                                50: [1, 59],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                50: [1, 67]
                            },
                            {
                                18: [2, 34],
                                25: [2, 34],
                                33: [2, 34],
                                42: [2, 34],
                                43: [2, 34],
                                44: [2, 34],
                                45: [2, 34],
                                46: [2, 34],
                                50: [2, 34],
                                52: [2, 34]
                            },
                            {
                                5: [2, 18],
                                12: [2, 18],
                                13: [2, 18],
                                16: [2, 18],
                                24: [2, 18],
                                26: [2, 18],
                                28: [2, 18],
                                29: [2, 18],
                                31: [2, 18],
                                32: [2, 18],
                                34: [2, 18]
                            },
                            {
                                21: 68,
                                29: [1, 69]
                            },
                            {
                                29: [2, 41]
                            },
                            {
                                4: 70,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            },
                            {
                                21: 71,
                                29: [1, 69]
                            },
                            {
                                29: [2, 43]
                            },
                            {
                                5: [2, 9],
                                12: [2, 9],
                                13: [2, 9],
                                16: [2, 9],
                                24: [2, 9],
                                26: [2, 9],
                                28: [2, 9],
                                29: [2, 9],
                                31: [2, 9],
                                32: [2, 9],
                                34: [2, 9]
                            },
                            {
                                25: [2, 44],
                                37: 72,
                                47: 73,
                                48: 58,
                                49: 60,
                                50: [1, 74]
                            },
                            {
                                25: [1, 75]
                            },
                            {
                                18: [2, 23],
                                25: [2, 23],
                                33: [2, 23],
                                42: [2, 23],
                                43: [2, 23],
                                44: [2, 23],
                                45: [2, 23],
                                46: [2, 23],
                                50: [2, 23],
                                52: [2, 23]
                            },
                            {
                                18: [2, 24],
                                25: [2, 24],
                                33: [2, 24],
                                42: [2, 24],
                                43: [2, 24],
                                44: [2, 24],
                                45: [2, 24],
                                46: [2, 24],
                                50: [2, 24],
                                52: [2, 24]
                            },
                            {
                                18: [2, 25],
                                25: [2, 25],
                                33: [2, 25],
                                42: [2, 25],
                                43: [2, 25],
                                44: [2, 25],
                                45: [2, 25],
                                46: [2, 25],
                                50: [2, 25],
                                52: [2, 25]
                            },
                            {
                                18: [2, 26],
                                25: [2, 26],
                                33: [2, 26],
                                42: [2, 26],
                                43: [2, 26],
                                44: [2, 26],
                                45: [2, 26],
                                46: [2, 26],
                                50: [2, 26],
                                52: [2, 26]
                            },
                            {
                                18: [2, 27],
                                25: [2, 27],
                                33: [2, 27],
                                42: [2, 27],
                                43: [2, 27],
                                44: [2, 27],
                                45: [2, 27],
                                46: [2, 27],
                                50: [2, 27],
                                52: [2, 27]
                            },
                            {
                                17: 76,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                25: [2, 47]
                            },
                            {
                                18: [2, 29],
                                25: [2, 29],
                                33: [2, 29],
                                46: [2, 29],
                                49: 77,
                                50: [1, 74]
                            },
                            {
                                18: [2, 37],
                                25: [2, 37],
                                33: [2, 37],
                                42: [2, 37],
                                43: [2, 37],
                                44: [2, 37],
                                45: [2, 37],
                                46: [2, 37],
                                50: [2, 37],
                                51: [1, 78],
                                52: [2, 37],
                                54: [2, 37]
                            },
                            {
                                18: [2, 52],
                                25: [2, 52],
                                33: [2, 52],
                                46: [2, 52],
                                50: [2, 52]
                            },
                            {
                                12: [2, 13],
                                13: [2, 13],
                                16: [2, 13],
                                24: [2, 13],
                                26: [2, 13],
                                28: [2, 13],
                                29: [2, 13],
                                31: [2, 13],
                                32: [2, 13],
                                34: [2, 13]
                            },
                            {
                                12: [2, 14],
                                13: [2, 14],
                                16: [2, 14],
                                24: [2, 14],
                                26: [2, 14],
                                28: [2, 14],
                                29: [2, 14],
                                31: [2, 14],
                                32: [2, 14],
                                34: [2, 14]
                            },
                            {
                                12: [2, 10]
                            },
                            {
                                18: [2, 21],
                                25: [2, 21],
                                33: [2, 21],
                                46: [2, 21]
                            },
                            {
                                18: [2, 49],
                                25: [2, 49],
                                33: [2, 49],
                                42: [2, 49],
                                43: [2, 49],
                                44: [2, 49],
                                45: [2, 49],
                                46: [2, 49],
                                50: [2, 49],
                                52: [2, 49]
                            },
                            {
                                18: [2, 51],
                                25: [2, 51],
                                33: [2, 51],
                                46: [2, 51]
                            },
                            {
                                18: [2, 36],
                                25: [2, 36],
                                33: [2, 36],
                                42: [2, 36],
                                43: [2, 36],
                                44: [2, 36],
                                45: [2, 36],
                                46: [2, 36],
                                50: [2, 36],
                                52: [2, 36],
                                54: [2, 36]
                            },
                            {
                                5: [2, 11],
                                12: [2, 11],
                                13: [2, 11],
                                16: [2, 11],
                                24: [2, 11],
                                26: [2, 11],
                                28: [2, 11],
                                29: [2, 11],
                                31: [2, 11],
                                32: [2, 11],
                                34: [2, 11]
                            },
                            {
                                30: 79,
                                50: [1, 26],
                                53: 24
                            },
                            {
                                29: [2, 15]
                            },
                            {
                                5: [2, 12],
                                12: [2, 12],
                                13: [2, 12],
                                16: [2, 12],
                                24: [2, 12],
                                26: [2, 12],
                                28: [2, 12],
                                29: [2, 12],
                                31: [2, 12],
                                32: [2, 12],
                                34: [2, 12]
                            },
                            {
                                25: [1, 80]
                            },
                            {
                                25: [2, 45]
                            },
                            {
                                51: [1, 78]
                            },
                            {
                                5: [2, 20],
                                12: [2, 20],
                                13: [2, 20],
                                16: [2, 20],
                                24: [2, 20],
                                26: [2, 20],
                                28: [2, 20],
                                29: [2, 20],
                                31: [2, 20],
                                32: [2, 20],
                                34: [2, 20]
                            },
                            {
                                46: [1, 81]
                            },
                            {
                                18: [2, 53],
                                25: [2, 53],
                                33: [2, 53],
                                46: [2, 53],
                                50: [2, 53]
                            },
                            {
                                30: 51,
                                36: 82,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            },
                            {
                                25: [1, 83]
                            },
                            {
                                5: [2, 19],
                                12: [2, 19],
                                13: [2, 19],
                                16: [2, 19],
                                24: [2, 19],
                                26: [2, 19],
                                28: [2, 19],
                                29: [2, 19],
                                31: [2, 19],
                                32: [2, 19],
                                34: [2, 19]
                            },
                            {
                                18: [2, 28],
                                25: [2, 28],
                                33: [2, 28],
                                42: [2, 28],
                                43: [2, 28],
                                44: [2, 28],
                                45: [2, 28],
                                46: [2, 28],
                                50: [2, 28],
                                52: [2, 28]
                            },
                            {
                                18: [2, 30],
                                25: [2, 30],
                                33: [2, 30],
                                46: [2, 30],
                                50: [2, 30]
                            },
                            {
                                5: [2, 16],
                                12: [2, 16],
                                13: [2, 16],
                                16: [2, 16],
                                24: [2, 16],
                                26: [2, 16],
                                28: [2, 16],
                                29: [2, 16],
                                31: [2, 16],
                                32: [2, 16],
                                34: [2, 16]
                            }],
                        defaultActions:
                            {
                                4: [2, 1],
                                44: [2, 41],
                                47: [2, 43],
                                57: [2, 47],
                                63: [2, 10],
                                70: [2, 15],
                                73: [2, 45]
                            },
                        parseError: function s(e, t)
                        {
                            throw new Error(e)
                        },
                        parse: function a(e)
                        {
                            var t = this,
                                n = [0],
                                i = [null],
                                r = [],
                                s = this.table,
                                a = "",
                                o = 0,
                                l = 0,
                                u = 0,
                                c = 2,
                                f = 1;
                            this.lexer.setInput(e);
                            this.lexer.yy = this.yy;
                            this.yy.lexer = this.lexer;
                            this.yy.parser = this;
                            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
                            var h = this.lexer.yylloc;
                            r.push(h);
                            var p = this.lexer.options && this.lexer.options.ranges;
                            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;

                            function d(e)
                            {
                                n.length = n.length - 2 * e;
                                i.length = i.length - e;
                                r.length = r.length - e
                            }

                            function g()
                            {
                                var e;
                                e = t.lexer.lex() || 1;
                                if (typeof e !== "number")
                                {
                                    e = t.symbols_[e] || e
                                }
                                return e
                            }
                            var m, v, y, x, b, _, w = {},
                                T, E, k, S;
                            while (true)
                            {
                                y = n[n.length - 1];
                                if (this.defaultActions[y])
                                {
                                    x = this.defaultActions[y]
                                }
                                else
                                {
                                    if (m === null || typeof m == "undefined")
                                    {
                                        m = g()
                                    }
                                    x = s[y] && s[y][m]
                                }
                                if (typeof x === "undefined" || !x.length || !x[0])
                                {
                                    var N = "";
                                    if (!u)
                                    {
                                        S = [];
                                        for (T in s[y])
                                            if (this.terminals_[T] && T > 2)
                                            {
                                                S.push("'" + this.terminals_[T] + "'")
                                            } if (this.lexer.showPosition)
                                    {
                                        N = "Parse error on line " + (o + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[m] || m) + "'"
                                    }
                                    else
                                    {
                                        N = "Parse error on line " + (o + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'")
                                    }
                                        this.parseError(N,
                                            {
                                                text: this.lexer.match,
                                                token: this.terminals_[m] || m,
                                                line: this.lexer.yylineno,
                                                loc: h,
                                                expected: S
                                            })
                                    }
                                }
                                if (x[0] instanceof Array && x.length > 1)
                                {
                                    throw new Error("Parse Error: multiple actions possible at state: " + y + ", token: " + m)
                                }
                                switch (x[0])
                                {
                                    case 1:
                                        n.push(m);
                                        i.push(this.lexer.yytext);
                                        r.push(this.lexer.yylloc);
                                        n.push(x[1]);
                                        m = null;
                                        if (!v)
                                        {
                                            l = this.lexer.yyleng;
                                            a = this.lexer.yytext;
                                            o = this.lexer.yylineno;
                                            h = this.lexer.yylloc;
                                            if (u > 0) u--
                                        }
                                        else
                                        {
                                            m = v;
                                            v = null
                                        }
                                        break;
                                    case 2:
                                        E = this.productions_[x[1]][1];
                                        w.$ = i[i.length - E];
                                        w._$ = {
                                            first_line: r[r.length - (E || 1)].first_line,
                                            last_line: r[r.length - 1].last_line,
                                            first_column: r[r.length - (E || 1)].first_column,
                                            last_column: r[r.length - 1].last_column
                                        };
                                        if (p)
                                        {
                                            w._$.range = [r[r.length - (E || 1)].range[0], r[r.length - 1].range[1]]
                                        }
                                        _ = this.performAction.call(w, a, l, o, this.yy, x[1], i, r);
                                        if (typeof _ !== "undefined")
                                        {
                                            return _
                                        }
                                        if (E)
                                        {
                                            n = n.slice(0, -1 * E * 2);
                                            i = i.slice(0, -1 * E);
                                            r = r.slice(0, -1 * E)
                                        }
                                        n.push(this.productions_[x[1]][0]);
                                        i.push(w.$);
                                        r.push(w._$);
                                        k = s[n[n.length - 2]][n[n.length - 1]];
                                        n.push(k);
                                        break;
                                    case 3:
                                        return true
                                }
                            }
                            return true
                        }
                    };
                    var t = function ()
                    {
                        var e = {
                            EOF: 1,
                            parseError: function t(e, n)
                            {
                                if (this.yy.parser)
                                {
                                    this.yy.parser.parseError(e, n)
                                }
                                else
                                {
                                    throw new Error(e)
                                }
                            },
                            setInput: function (e)
                            {
                                this._input = e;
                                this._more = this._less = this.done = false;
                                this.yylineno = this.yyleng = 0;
                                this.yytext = this.matched = this.match = "";
                                this.conditionStack = ["INITIAL"];
                                this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                };
                                if (this.options.ranges) this.yylloc.range = [0, 0];
                                this.offset = 0;
                                return this
                            },
                            input: function ()
                            {
                                var e = this._input[0];
                                this.yytext += e;
                                this.yyleng++;
                                this.offset++;
                                this.match += e;
                                this.matched += e;
                                var t = e.match(/(?:\r\n?|\n).*/g);
                                if (t)
                                {
                                    this.yylineno++;
                                    this.yylloc.last_line++
                                }
                                else
                                {
                                    this.yylloc.last_column++
                                }
                                if (this.options.ranges) this.yylloc.range[1]++;
                                this._input = this._input.slice(1);
                                return e
                            },
                            unput: function (e)
                            {
                                var t = e.length;
                                var n = e.split(/(?:\r\n?|\n)/g);
                                this._input = e + this._input;
                                this.yytext = this.yytext.substr(0, this.yytext.length - t - 1);
                                this.offset -= t;
                                var i = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1);
                                this.matched = this.matched.substr(0, this.matched.length - 1);
                                if (n.length - 1) this.yylineno -= n.length - 1;
                                var r = this.yylloc.range;
                                this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - t
                                };
                                if (this.options.ranges)
                                {
                                    this.yylloc.range = [r[0], r[0] + this.yyleng - t]
                                }
                                return this
                            },
                            more: function ()
                            {
                                this._more = true;
                                return this
                            },
                            less: function (e)
                            {
                                this.unput(this.match.slice(e))
                            },
                            pastInput: function ()
                            {
                                var e = this.matched.substr(0, this.matched.length - this.match.length);
                                return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function ()
                            {
                                var e = this.match;
                                if (e.length < 20)
                                {
                                    e += this._input.substr(0, 20 - e.length)
                                }
                                return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function ()
                            {
                                var e = this.pastInput();
                                var t = new Array(e.length + 1).join("-");
                                return e + this.upcomingInput() + "\n" + t + "^"
                            },
                            next: function ()
                            {
                                if (this.done)
                                {
                                    return this.EOF
                                }
                                if (!this._input) this.done = true;
                                var e, t, n, i, r, s;
                                if (!this._more)
                                {
                                    this.yytext = "";
                                    this.match = ""
                                }
                                var a = this._currentRules();
                                for (var o = 0; o < a.length; o++)
                                {
                                    n = this._input.match(this.rules[a[o]]);
                                    if (n && (!t || n[0].length > t[0].length))
                                    {
                                        t = n;
                                        i = o;
                                        if (!this.options.flex) break
                                    }
                                }
                                if (t)
                                {
                                    s = t[0].match(/(?:\r\n?|\n).*/g);
                                    if (s) this.yylineno += s.length;
                                    this.yylloc = {
                                        first_line: this.yylloc.last_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.last_column,
                                        last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                    };
                                    this.yytext += t[0];
                                    this.match += t[0];
                                    this.matches = t;
                                    this.yyleng = this.yytext.length;
                                    if (this.options.ranges)
                                    {
                                        this.yylloc.range = [this.offset, this.offset += this.yyleng]
                                    }
                                    this._more = false;
                                    this._input = this._input.slice(t[0].length);
                                    this.matched += t[0];
                                    e = this.performAction.call(this, this.yy, this, a[i], this.conditionStack[this.conditionStack.length - 1]);
                                    if (this.done && this._input) this.done = false;
                                    if (e) return e;
                                    else return
                                }
                                if (this._input === "")
                                {
                                    return this.EOF
                                }
                                else
                                {
                                    return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(),
                                        {
                                            text: "",
                                            token: null,
                                            line: this.yylineno
                                        })
                                }
                            },
                            lex: function n()
                            {
                                var e = this.next();
                                if (typeof e !== "undefined")
                                {
                                    return e
                                }
                                else
                                {
                                    return this.lex()
                                }
                            },
                            begin: function i(e)
                            {
                                this.conditionStack.push(e)
                            },
                            popState: function r()
                            {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function s()
                            {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function ()
                            {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function a(e)
                            {
                                this.begin(e)
                            }
                        };
                        e.options = {};
                        e.performAction = function o(e, t, n, i)
                        {
                            function r(e, n)
                            {
                                return t.yytext = t.yytext.substr(e, t.yyleng - n)
                            }
                            var s = i;
                            switch (n)
                            {
                                case 0:
                                    if (t.yytext.slice(-2) === "\\\\")
                                    {
                                        r(0, 1);
                                        this.begin("mu")
                                    }
                                    else if (t.yytext.slice(-1) === "\\")
                                    {
                                        r(0, 1);
                                        this.begin("emu")
                                    }
                                    else
                                    {
                                        this.begin("mu")
                                    }
                                    if (t.yytext) return 12;
                                    break;
                                case 1:
                                    return 12;
                                    break;
                                case 2:
                                    this.popState();
                                    return 12;
                                    break;
                                case 3:
                                    t.yytext = t.yytext.substr(5, t.yyleng - 9);
                                    this.popState();
                                    return 15;
                                    break;
                                case 4:
                                    return 12;
                                    break;
                                case 5:
                                    r(0, 4);
                                    this.popState();
                                    return 13;
                                    break;
                                case 6:
                                    return 45;
                                    break;
                                case 7:
                                    return 46;
                                    break;
                                case 8:
                                    return 16;
                                    break;
                                case 9:
                                    this.popState();
                                    this.begin("raw");
                                    return 18;
                                    break;
                                case 10:
                                    return 34;
                                    break;
                                case 11:
                                    return 24;
                                    break;
                                case 12:
                                    return 29;
                                    break;
                                case 13:
                                    this.popState();
                                    return 28;
                                    break;
                                case 14:
                                    this.popState();
                                    return 28;
                                    break;
                                case 15:
                                    return 26;
                                    break;
                                case 16:
                                    return 26;
                                    break;
                                case 17:
                                    return 32;
                                    break;
                                case 18:
                                    return 31;
                                    break;
                                case 19:
                                    this.popState();
                                    this.begin("com");
                                    break;
                                case 20:
                                    r(3, 5);
                                    this.popState();
                                    return 13;
                                    break;
                                case 21:
                                    return 31;
                                    break;
                                case 22:
                                    return 51;
                                    break;
                                case 23:
                                    return 50;
                                    break;
                                case 24:
                                    return 50;
                                    break;
                                case 25:
                                    return 54;
                                    break;
                                case 26:
                                    break;
                                case 27:
                                    this.popState();
                                    return 33;
                                    break;
                                case 28:
                                    this.popState();
                                    return 25;
                                    break;
                                case 29:
                                    t.yytext = r(1, 2).replace(/\\"/g, '"');
                                    return 42;
                                    break;
                                case 30:
                                    t.yytext = r(1, 2).replace(/\\'/g, "'");
                                    return 42;
                                    break;
                                case 31:
                                    return 52;
                                    break;
                                case 32:
                                    return 44;
                                    break;
                                case 33:
                                    return 44;
                                    break;
                                case 34:
                                    return 43;
                                    break;
                                case 35:
                                    return 50;
                                    break;
                                case 36:
                                    t.yytext = r(1, 2);
                                    return 50;
                                    break;
                                case 37:
                                    return "INVALID";
                                    break;
                                case 38:
                                    return 5;
                                    break
                            }
                        };
                        e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
                        e.conditions = {
                            mu:
                                {
                                    rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                                    inclusive: false
                                },
                            emu:
                                {
                                    rules: [2],
                                    inclusive: false
                                },
                            com:
                                {
                                    rules: [5],
                                    inclusive: false
                                },
                            raw:
                                {
                                    rules: [3, 4],
                                    inclusive: false
                                },
                            INITIAL:
                                {
                                    rules: [0, 1, 38],
                                    inclusive: true
                                }
                        };
                        return e
                    }();
                    e.lexer = t;

                    function n()
                    {
                        this.yy = {}
                    }
                    n.prototype = e;
                    e.Parser = n;
                    return new n
                }();
                e = t;
                return e
            }();
            var l = function (e)
            {
                "use strict";
                var t = {};
                var n = e;

                function i(e, t)
                {
                    return {
                        left: e.charAt(2) === "~",
                        right: t.charAt(t.length - 3) === "~"
                    }
                }
                t.stripFlags = i;

                function r(e, t, i, r, s, c)
                {
                    if (e.sexpr.id.original !== r.path.original)
                    {
                        throw new n(e.sexpr.id.original + " doesn't match " + r.path.original, e)
                    }
                    var f = i && i.program;
                    var h = {
                        left: e.strip.left,
                        right: r.strip.right,
                        openStandalone: o(t.statements),
                        closeStandalone: a((f || t).statements)
                    };
                    if (e.strip.right)
                    {
                        l(t.statements, null, true)
                    }
                    if (f)
                    {
                        var p = i.strip;
                        if (p.left)
                        {
                            u(t.statements, null, true)
                        }
                        if (p.right)
                        {
                            l(f.statements, null, true)
                        }
                        if (r.strip.left)
                        {
                            u(f.statements, null, true)
                        }
                        if (a(t.statements) && o(f.statements))
                        {
                            u(t.statements);
                            l(f.statements)
                        }
                    }
                    else
                    {
                        if (r.strip.left)
                        {
                            u(t.statements, null, true)
                        }
                    }
                    if (s)
                    {
                        return new this.BlockNode(e, f, t, h, c)
                    }
                    else
                    {
                        return new this.BlockNode(e, t, f, h, c)
                    }
                }
                t.prepareBlock = r;

                function s(e, t)
                {
                    for (var n = 0, i = e.length; n < i; n++)
                    {
                        var r = e[n],
                            s = r.strip;
                        if (!s)
                        {
                            continue
                        }
                        var c = a(e, n, t, r.type === "partial"),
                            f = o(e, n, t),
                            h = s.openStandalone && c,
                            p = s.closeStandalone && f,
                            d = s.inlineStandalone && c && f;
                        if (s.right)
                        {
                            l(e, n, true)
                        }
                        if (s.left)
                        {
                            u(e, n, true)
                        }
                        if (d)
                        {
                            l(e, n);
                            if (u(e, n))
                            {
                                if (r.type === "partial")
                                {
                                    r.indent = /([ \t]+$)/.exec(e[n - 1].original) ? RegExp.$1 : ""
                                }
                            }
                        }
                        if (h)
                        {
                            l((r.program || r.inverse).statements);
                            u(e, n)
                        }
                        if (p)
                        {
                            l(e, n);
                            u((r.inverse || r.program).statements)
                        }
                    }
                    return e
                }
                t.prepareProgram = s;

                function a(e, t, n)
                {
                    if (t === undefined)
                    {
                        t = e.length
                    }
                    var i = e[t - 1],
                        r = e[t - 2];
                    if (!i)
                    {
                        return n
                    }
                    if (i.type === "content")
                    {
                        return (r || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original)
                    }
                }

                function o(e, t, n)
                {
                    if (t === undefined)
                    {
                        t = -1
                    }
                    var i = e[t + 1],
                        r = e[t + 2];
                    if (!i)
                    {
                        return n
                    }
                    if (i.type === "content")
                    {
                        return (r || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original)
                    }
                }

                function l(e, t, n)
                {
                    var i = e[t == null ? 0 : t + 1];
                    if (!i || i.type !== "content" || !n && i.rightStripped)
                    {
                        return
                    }
                    var r = i.string;
                    i.string = i.string.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, "");
                    i.rightStripped = i.string !== r
                }

                function u(e, t, n)
                {
                    var i = e[t == null ? e.length - 1 : t - 1];
                    if (!i || i.type !== "content" || !n && i.leftStripped)
                    {
                        return
                    }
                    var r = i.string;
                    i.string = i.string.replace(n ? /\s+$/ : /[ \t]+$/, "");
                    i.leftStripped = i.string !== r;
                    return i.leftStripped
                }
                return t
            }(n);
            var u = function (e, t, n, i)
            {
                "use strict";
                var r = {};
                var s = e;
                var a = t;
                var o = n;
                var l = i.extend;
                r.parser = s;
                var u = {};
                l(u, o, a);

                function c(e)
                {
                    if (e.constructor === a.ProgramNode)
                    {
                        return e
                    }
                    s.yy = u;
                    return s.parse(e)
                }
                r.parse = c;
                return r
            }(o, a, l, t);
            var c = function (e, t)
            {
                "use strict";
                var n = {};
                var i = e;
                var r = t.isArray;
                var s = [].slice;

                function a()
                {}
                n.Compiler = a;
                a.prototype = {
                    compiler: a,
                    equals: function (e)
                    {
                        var t = this.opcodes.length;
                        if (e.opcodes.length !== t)
                        {
                            return false
                        }
                        for (var n = 0; n < t; n++)
                        {
                            var i = this.opcodes[n],
                                r = e.opcodes[n];
                            if (i.opcode !== r.opcode || !u(i.args, r.args))
                            {
                                return false
                            }
                        }
                        t = this.children.length;
                        for (n = 0; n < t; n++)
                        {
                            if (!this.children[n].equals(e.children[n]))
                            {
                                return false
                            }
                        }
                        return true
                    },
                    guid: 0,
                    compile: function (e, t)
                    {
                        this.opcodes = [];
                        this.children = [];
                        this.depths = {
                            list: []
                        };
                        this.options = t;
                        this.stringParams = t.stringParams;
                        this.trackIds = t.trackIds;
                        var n = this.options.knownHelpers;
                        this.options.knownHelpers = {
                            helperMissing: true,
                            blockHelperMissing: true,
                            each: true,
                            "if": true,
                            unless: true,
                            "with": true,
                            log: true,
                            lookup: true
                        };
                        if (n)
                        {
                            for (var i in n)
                            {
                                this.options.knownHelpers[i] = n[i]
                            }
                        }
                        return this.accept(e)
                    },
                    accept: function (e)
                    {
                        return this[e.type](e)
                    },
                    program: function (e)
                    {
                        var t = e.statements;
                        for (var n = 0, i = t.length; n < i; n++)
                        {
                            this.accept(t[n])
                        }
                        this.isSimple = i === 1;
                        this.depths.list = this.depths.list.sort(function (e, t)
                        {
                            return e - t
                        });
                        return this
                    },
                    compileProgram: function (e)
                    {
                        var t = (new this.compiler).compile(e, this.options);
                        var n = this.guid++,
                            i;
                        this.usePartial = this.usePartial || t.usePartial;
                        this.children[n] = t;
                        for (var r = 0, s = t.depths.list.length; r < s; r++)
                        {
                            i = t.depths.list[r];
                            if (i < 2)
                            {
                                continue
                            }
                            else
                            {
                                this.addDepth(i - 1)
                            }
                        }
                        return n
                    },
                    block: function (e)
                    {
                        var t = e.mustache,
                            n = e.program,
                            i = e.inverse;
                        if (n)
                        {
                            n = this.compileProgram(n)
                        }
                        if (i)
                        {
                            i = this.compileProgram(i)
                        }
                        var r = t.sexpr;
                        var s = this.classifySexpr(r);
                        if (s === "helper")
                        {
                            this.helperSexpr(r, n, i)
                        }
                        else if (s === "simple")
                        {
                            this.simpleSexpr(r);
                            this.opcode("pushProgram", n);
                            this.opcode("pushProgram", i);
                            this.opcode("emptyHash");
                            this.opcode("blockValue", r.id.original)
                        }
                        else
                        {
                            this.ambiguousSexpr(r, n, i);
                            this.opcode("pushProgram", n);
                            this.opcode("pushProgram", i);
                            this.opcode("emptyHash");
                            this.opcode("ambiguousBlockValue")
                        }
                        this.opcode("append")
                    },
                    hash: function (e)
                    {
                        var t = e.pairs,
                            n, i;
                        this.opcode("pushHash");
                        for (n = 0, i = t.length; n < i; n++)
                        {
                            this.pushParam(t[n][1])
                        }
                        while (n--)
                        {
                            this.opcode("assignToHash", t[n][0])
                        }
                        this.opcode("popHash")
                    },
                    partial: function (e)
                    {
                        var t = e.partialName;
                        this.usePartial = true;
                        if (e.hash)
                        {
                            this.accept(e.hash)
                        }
                        else
                        {
                            this.opcode("push", "undefined")
                        }
                        if (e.context)
                        {
                            this.accept(e.context)
                        }
                        else
                        {
                            this.opcode("getContext", 0);
                            this.opcode("pushContext")
                        }
                        this.opcode("invokePartial", t.name, e.indent || "");
                        this.opcode("append")
                    },
                    content: function (e)
                    {
                        if (e.string)
                        {
                            this.opcode("appendContent", e.string)
                        }
                    },
                    mustache: function (e)
                    {
                        this.sexpr(e.sexpr);
                        if (e.escaped && !this.options.noEscape)
                        {
                            this.opcode("appendEscaped")
                        }
                        else
                        {
                            this.opcode("append")
                        }
                    },
                    ambiguousSexpr: function (e, t, n)
                    {
                        var i = e.id,
                            r = i.parts[0],
                            s = t != null || n != null;
                        this.opcode("getContext", i.depth);
                        this.opcode("pushProgram", t);
                        this.opcode("pushProgram", n);
                        this.ID(i);
                        this.opcode("invokeAmbiguous", r, s)
                    },
                    simpleSexpr: function (e)
                    {
                        var t = e.id;
                        if (t.type === "DATA")
                        {
                            this.DATA(t)
                        }
                        else if (t.parts.length)
                        {
                            this.ID(t)
                        }
                        else
                        {
                            this.addDepth(t.depth);
                            this.opcode("getContext", t.depth);
                            this.opcode("pushContext")
                        }
                        this.opcode("resolvePossibleLambda")
                    },
                    helperSexpr: function (e, t, n)
                    {
                        var r = this.setupFullMustacheParams(e, t, n),
                            s = e.id,
                            a = s.parts[0];
                        if (this.options.knownHelpers[a])
                        {
                            this.opcode("invokeKnownHelper", r.length, a)
                        }
                        else if (this.options.knownHelpersOnly)
                        {
                            throw new i("You specified knownHelpersOnly, but used the unknown helper " + a, e)
                        }
                        else
                        {
                            s.falsy = true;
                            this.ID(s);
                            this.opcode("invokeHelper", r.length, s.original, s.isSimple)
                        }
                    },
                    sexpr: function (e)
                    {
                        var t = this.classifySexpr(e);
                        if (t === "simple")
                        {
                            this.simpleSexpr(e)
                        }
                        else if (t === "helper")
                        {
                            this.helperSexpr(e)
                        }
                        else
                        {
                            this.ambiguousSexpr(e)
                        }
                    },
                    ID: function (e)
                    {
                        this.addDepth(e.depth);
                        this.opcode("getContext", e.depth);
                        var t = e.parts[0];
                        if (!t)
                        {
                            this.opcode("pushContext")
                        }
                        else
                        {
                            this.opcode("lookupOnContext", e.parts, e.falsy, e.isScoped)
                        }
                    },
                    DATA: function (e)
                    {
                        this.options.data = true;
                        this.opcode("lookupData", e.id.depth, e.id.parts)
                    },
                    STRING: function (e)
                    {
                        this.opcode("pushString", e.string)
                    },
                    NUMBER: function (e)
                    {
                        this.opcode("pushLiteral", e.number)
                    },
                    BOOLEAN: function (e)
                    {
                        this.opcode("pushLiteral", e.bool)
                    },
                    comment: function () {},
                    opcode: function (e)
                    {
                        this.opcodes.push(
                            {
                                opcode: e,
                                args: s.call(arguments, 1)
                            })
                    },
                    addDepth: function (e)
                    {
                        if (e === 0)
                        {
                            return
                        }
                        if (!this.depths[e])
                        {
                            this.depths[e] = true;
                            this.depths.list.push(e)
                        }
                    },
                    classifySexpr: function (e)
                    {
                        var t = e.isHelper;
                        var n = e.eligibleHelper;
                        var i = this.options;
                        if (n && !t)
                        {
                            var r = e.id.parts[0];
                            if (i.knownHelpers[r])
                            {
                                t = true
                            }
                            else if (i.knownHelpersOnly)
                            {
                                n = false
                            }
                        }
                        if (t)
                        {
                            return "helper"
                        }
                        else if (n)
                        {
                            return "ambiguous"
                        }
                        else
                        {
                            return "simple"
                        }
                    },
                    pushParams: function (e)
                    {
                        for (var t = 0, n = e.length; t < n; t++)
                        {
                            this.pushParam(e[t])
                        }
                    },
                    pushParam: function (e)
                    {
                        if (this.stringParams)
                        {
                            if (e.depth)
                            {
                                this.addDepth(e.depth)
                            }
                            this.opcode("getContext", e.depth || 0);
                            this.opcode("pushStringParam", e.stringModeValue, e.type);
                            if (e.type === "sexpr")
                            {
                                this.sexpr(e)
                            }
                        }
                        else
                        {
                            if (this.trackIds)
                            {
                                this.opcode("pushId", e.type, e.idName || e.stringModeValue)
                            }
                            this.accept(e)
                        }
                    },
                    setupFullMustacheParams: function (e, t, n)
                    {
                        var i = e.params;
                        this.pushParams(i);
                        this.opcode("pushProgram", t);
                        this.opcode("pushProgram", n);
                        if (e.hash)
                        {
                            this.hash(e.hash)
                        }
                        else
                        {
                            this.opcode("emptyHash")
                        }
                        return i
                    }
                };

                function o(e, t, n)
                {
                    if (e == null || typeof e !== "string" && e.constructor !== n.AST.ProgramNode)
                    {
                        throw new i("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e)
                    }
                    t = t ||
                        {};
                    if (!("data" in t))
                    {
                        t.data = true
                    }
                    if (t.compat)
                    {
                        t.useDepths = true
                    }
                    var r = n.parse(e);
                    var s = (new n.Compiler).compile(r, t);
                    return (new n.JavaScriptCompiler).compile(s, t)
                }
                n.precompile = o;

                function l(e, t, n)
                {
                    if (e == null || typeof e !== "string" && e.constructor !== n.AST.ProgramNode)
                    {
                        throw new i("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e)
                    }
                    t = t ||
                        {};
                    if (!("data" in t))
                    {
                        t.data = true
                    }
                    if (t.compat)
                    {
                        t.useDepths = true
                    }
                    var r;

                    function s()
                    {
                        var i = n.parse(e);
                        var r = (new n.Compiler).compile(i, t);
                        var s = (new n.JavaScriptCompiler).compile(r, t, undefined, true);
                        return n.template(s)
                    }
                    var a = function (e, t)
                    {
                        if (!r)
                        {
                            r = s()
                        }
                        return r.call(this, e, t)
                    };
                    a._setup = function (e)
                    {
                        if (!r)
                        {
                            r = s()
                        }
                        return r._setup(e)
                    };
                    a._child = function (e, t, n)
                    {
                        if (!r)
                        {
                            r = s()
                        }
                        return r._child(e, t, n)
                    };
                    return a
                }
                n.compile = l;

                function u(e, t)
                {
                    if (e === t)
                    {
                        return true
                    }
                    if (r(e) && r(t) && e.length === t.length)
                    {
                        for (var n = 0; n < e.length; n++)
                        {
                            if (!u(e[n], t[n]))
                            {
                                return false
                            }
                        }
                        return true
                    }
                }
                return n
            }(n, t);
            var f = function (e, t)
            {
                "use strict";
                var n;
                var i = e.COMPILER_REVISION;
                var r = e.REVISION_CHANGES;
                var s = t;

                function a(e)
                {
                    this.value = e
                }

                function o()
                {}
                o.prototype = {
                    nameLookup: function (e, t)
                    {
                        if (o.isValidJavaScriptVariableName(t))
                        {
                            return e + "." + t
                        }
                        else
                        {
                            return e + "['" + t + "']"
                        }
                    },
                    depthedLookup: function (e)
                    {
                        this.aliases.lookup = "this.lookup";
                        return 'lookup(depths, "' + e + '")'
                    },
                    compilerInfo: function ()
                    {
                        var e = i,
                            t = r[e];
                        return [e, t]
                    },
                    appendToBuffer: function (e)
                    {
                        if (this.environment.isSimple)
                        {
                            return "return " + e + ";"
                        }
                        else
                        {
                            return {
                                appendToBuffer: true,
                                content: e,
                                toString: function ()
                                {
                                    return "buffer += " + e + ";"
                                }
                            }
                        }
                    },
                    initializeBuffer: function ()
                    {
                        return this.quotedString("")
                    },
                    namespace: "Handlebars",
                    compile: function (e, t, n, i)
                    {
                        this.environment = e;
                        this.options = t;
                        this.stringParams = this.options.stringParams;
                        this.trackIds = this.options.trackIds;
                        this.precompile = !i;
                        this.name = this.environment.name;
                        this.isChild = !!n;
                        this.context = n ||
                            {
                                programs: [],
                                environments: []
                            };
                        this.preamble();
                        this.stackSlot = 0;
                        this.stackVars = [];
                        this.aliases = {};
                        this.registers = {
                            list: []
                        };
                        this.hashes = [];
                        this.compileStack = [];
                        this.inlineStack = [];
                        this.compileChildren(e, t);
                        this.useDepths = this.useDepths || e.depths.list.length || this.options.compat;
                        var r = e.opcodes,
                            a, o, l;
                        for (o = 0, l = r.length; o < l; o++)
                        {
                            a = r[o];
                            this[a.opcode].apply(this, a.args)
                        }
                        this.pushSource("");
                        if (this.stackSlot || this.inlineStack.length || this.compileStack.length)
                        {
                            throw new s("Compile completed with content left on stack")
                        }
                        var u = this.createFunctionContext(i);
                        if (!this.isChild)
                        {
                            var c = {
                                compiler: this.compilerInfo(),
                                main: u
                            };
                            var f = this.context.programs;
                            for (o = 0, l = f.length; o < l; o++)
                            {
                                if (f[o])
                                {
                                    c[o] = f[o]
                                }
                            }
                            if (this.environment.usePartial)
                            {
                                c.usePartial = true
                            }
                            if (this.options.data)
                            {
                                c.useData = true
                            }
                            if (this.useDepths)
                            {
                                c.useDepths = true
                            }
                            if (this.options.compat)
                            {
                                c.compat = true
                            }
                            if (!i)
                            {
                                c.compiler = JSON.stringify(c.compiler);
                                c = this.objectLiteral(c)
                            }
                            return c
                        }
                        else
                        {
                            return u
                        }
                    },
                    preamble: function ()
                    {
                        this.lastContext = 0;
                        this.source = []
                    },
                    createFunctionContext: function (e)
                    {
                        var t = "";
                        var n = this.stackVars.concat(this.registers.list);
                        if (n.length > 0)
                        {
                            t += ", " + n.join(", ")
                        }
                        for (var i in this.aliases)
                        {
                            if (this.aliases.hasOwnProperty(i))
                            {
                                t += ", " + i + "=" + this.aliases[i]
                            }
                        }
                        var r = ["depth0", "helpers", "partials", "data"];
                        if (this.useDepths)
                        {
                            r.push("depths")
                        }
                        var s = this.mergeSource(t);
                        if (e)
                        {
                            r.push(s);
                            return Function.apply(this, r)
                        }
                        else
                        {
                            return "function(" + r.join(",") + ") {\n  " + s + "}"
                        }
                    },
                    mergeSource: function (e)
                    {
                        var t = "",
                            n, i = !this.forceBuffer,
                            r;
                        for (var s = 0, a = this.source.length; s < a; s++)
                        {
                            var o = this.source[s];
                            if (o.appendToBuffer)
                            {
                                if (n)
                                {
                                    n = n + "\n    + " + o.content
                                }
                                else
                                {
                                    n = o.content
                                }
                            }
                            else
                            {
                                if (n)
                                {
                                    if (!t)
                                    {
                                        r = true;
                                        t = n + ";\n  "
                                    }
                                    else
                                    {
                                        t += "buffer += " + n + ";\n  "
                                    }
                                    n = undefined
                                }
                                t += o + "\n  ";
                                if (!this.environment.isSimple)
                                {
                                    i = false
                                }
                            }
                        }
                        if (i)
                        {
                            if (n || !t)
                            {
                                t += "return " + (n || '""') + ";\n"
                            }
                        }
                        else
                        {
                            e += ", buffer = " + (r ? "" : this.initializeBuffer());
                            if (n)
                            {
                                t += "return buffer + " + n + ";\n"
                            }
                            else
                            {
                                t += "return buffer;\n"
                            }
                        }
                        if (e)
                        {
                            t = "var " + e.substring(2) + (r ? "" : ";\n  ") + t
                        }
                        return t
                    },
                    blockValue: function (e)
                    {
                        this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var t = [this.contextName(0)];
                        this.setupParams(e, 0, t);
                        var n = this.popStack();
                        t.splice(1, 0, n);
                        this.push("blockHelperMissing.call(" + t.join(", ") + ")")
                    },
                    ambiguousBlockValue: function ()
                    {
                        this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var e = [this.contextName(0)];
                        this.setupParams("", 0, e, true);
                        this.flushInline();
                        var t = this.topStack();
                        e.splice(1, 0, t);
                        this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
                    },
                    appendContent: function (e)
                    {
                        if (this.pendingContent)
                        {
                            e = this.pendingContent + e
                        }
                        this.pendingContent = e
                    },
                    append: function ()
                    {
                        this.flushInline();
                        var e = this.popStack();
                        this.pushSource("if (" + e + " != null) { " + this.appendToBuffer(e) + " }");
                        if (this.environment.isSimple)
                        {
                            this.pushSource("else { " + this.appendToBuffer("''") + " }")
                        }
                    },
                    appendEscaped: function ()
                    {
                        this.aliases.escapeExpression = "this.escapeExpression";
                        this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                    },
                    getContext: function (e)
                    {
                        this.lastContext = e
                    },
                    pushContext: function ()
                    {
                        this.pushStackLiteral(this.contextName(this.lastContext))
                    },
                    lookupOnContext: function (e, t, n)
                    {
                        var i = 0,
                            r = e.length;
                        if (!n && this.options.compat && !this.lastContext)
                        {
                            this.push(this.depthedLookup(e[i++]))
                        }
                        else
                        {
                            this.pushContext()
                        }
                        for (; i < r; i++)
                        {
                            this.replaceStack(function (n)
                            {
                                var r = this.nameLookup(n, e[i], "context");
                                if (!t)
                                {
                                    return " != null ? " + r + " : " + n
                                }
                                else
                                {
                                    return " && " + r
                                }
                            })
                        }
                    },
                    lookupData: function (e, t)
                    {
                        if (!e)
                        {
                            this.pushStackLiteral("data")
                        }
                        else
                        {
                            this.pushStackLiteral("this.data(data, " + e + ")")
                        }
                        var n = t.length;
                        for (var i = 0; i < n; i++)
                        {
                            this.replaceStack(function (e)
                            {
                                return " && " + this.nameLookup(e, t[i], "data")
                            })
                        }
                    },
                    resolvePossibleLambda: function ()
                    {
                        this.aliases.lambda = "this.lambda";
                        this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
                    },
                    pushStringParam: function (e, t)
                    {
                        this.pushContext();
                        this.pushString(t);
                        if (t !== "sexpr")
                        {
                            if (typeof e === "string")
                            {
                                this.pushString(e)
                            }
                            else
                            {
                                this.pushStackLiteral(e);
                            }
                        }
                    },
                    emptyHash: function ()
                    {
                        this.pushStackLiteral("{}");
                        if (this.trackIds)
                        {
                            this.push("{}")
                        }
                        if (this.stringParams)
                        {
                            this.push("{}");
                            this.push("{}")
                        }
                    },
                    pushHash: function ()
                    {
                        if (this.hash)
                        {
                            this.hashes.push(this.hash)
                        }
                        this.hash = {
                            values: [],
                            types: [],
                            contexts: [],
                            ids: []
                        }
                    },
                    popHash: function ()
                    {
                        var e = this.hash;
                        this.hash = this.hashes.pop();
                        if (this.trackIds)
                        {
                            this.push("{" + e.ids.join(",") + "}")
                        }
                        if (this.stringParams)
                        {
                            this.push("{" + e.contexts.join(",") + "}");
                            this.push("{" + e.types.join(",") + "}")
                        }
                        this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
                    },
                    pushString: function (e)
                    {
                        this.pushStackLiteral(this.quotedString(e))
                    },
                    push: function (e)
                    {
                        this.inlineStack.push(e);
                        return e
                    },
                    pushLiteral: function (e)
                    {
                        this.pushStackLiteral(e)
                    },
                    pushProgram: function (e)
                    {
                        if (e != null)
                        {
                            this.pushStackLiteral(this.programExpression(e))
                        }
                        else
                        {
                            this.pushStackLiteral(null)
                        }
                    },
                    invokeHelper: function (e, t, n)
                    {
                        this.aliases.helperMissing = "helpers.helperMissing";
                        var i = this.popStack();
                        var r = this.setupHelper(e, t);
                        var s = (n ? r.name + " || " : "") + i + " || helperMissing";
                        this.push("((" + s + ").call(" + r.callParams + "))")
                    },
                    invokeKnownHelper: function (e, t)
                    {
                        var n = this.setupHelper(e, t);
                        this.push(n.name + ".call(" + n.callParams + ")")
                    },
                    invokeAmbiguous: function (e, t)
                    {
                        this.aliases.functionType = '"function"';
                        this.aliases.helperMissing = "helpers.helperMissing";
                        this.useRegister("helper");
                        var n = this.popStack();
                        this.emptyHash();
                        var i = this.setupHelper(0, e, t);
                        var r = this.lastHelper = this.nameLookup("helpers", e, "helper");
                        this.push("((helper = (helper = " + r + " || " + n + ") != null ? helper : helperMissing" + (i.paramsInit ? "),(" + i.paramsInit : "") + ")," + "(typeof helper === functionType ? helper.call(" + i.callParams + ") : helper))")
                    },
                    invokePartial: function (e, t)
                    {
                        var n = [this.nameLookup("partials", e, "partial"), "'" + t + "'", "'" + e + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                        if (this.options.data)
                        {
                            n.push("data")
                        }
                        else if (this.options.compat)
                        {
                            n.push("undefined")
                        }
                        if (this.options.compat)
                        {
                            n.push("depths")
                        }
                        this.push("this.invokePartial(" + n.join(", ") + ")")
                    },
                    assignToHash: function (e)
                    {
                        var t = this.popStack(),
                            n, i, r;
                        if (this.trackIds)
                        {
                            r = this.popStack()
                        }
                        if (this.stringParams)
                        {
                            i = this.popStack();
                            n = this.popStack()
                        }
                        var s = this.hash;
                        if (n)
                        {
                            s.contexts.push("'" + e + "': " + n)
                        }
                        if (i)
                        {
                            s.types.push("'" + e + "': " + i)
                        }
                        if (r)
                        {
                            s.ids.push("'" + e + "': " + r)
                        }
                        s.values.push("'" + e + "': (" + t + ")")
                    },
                    pushId: function (e, t)
                    {
                        if (e === "ID" || e === "DATA")
                        {
                            this.pushString(t)
                        }
                        else if (e === "sexpr")
                        {
                            this.pushStackLiteral("true")
                        }
                        else
                        {
                            this.pushStackLiteral("null")
                        }
                    },
                    compiler: o,
                    compileChildren: function (e, t)
                    {
                        var n = e.children,
                            i, r;
                        for (var s = 0, a = n.length; s < a; s++)
                        {
                            i = n[s];
                            r = new this.compiler;
                            var o = this.matchExistingProgram(i);
                            if (o == null)
                            {
                                this.context.programs.push("");
                                o = this.context.programs.length;
                                i.index = o;
                                i.name = "program" + o;
                                this.context.programs[o] = r.compile(i, t, this.context, !this.precompile);
                                this.context.environments[o] = i;
                                this.useDepths = this.useDepths || r.useDepths
                            }
                            else
                            {
                                i.index = o;
                                i.name = "program" + o
                            }
                        }
                    },
                    matchExistingProgram: function (e)
                    {
                        for (var t = 0, n = this.context.environments.length; t < n; t++)
                        {
                            var i = this.context.environments[t];
                            if (i && i.equals(e))
                            {
                                return t
                            }
                        }
                    },
                    programExpression: function (e)
                    {
                        var t = this.environment.children[e],
                            n = t.depths.list,
                            i = this.useDepths,
                            r;
                        var s = [t.index, "data"];
                        if (i)
                        {
                            s.push("depths")
                        }
                        return "this.program(" + s.join(", ") + ")"
                    },
                    useRegister: function (e)
                    {
                        if (!this.registers[e])
                        {
                            this.registers[e] = true;
                            this.registers.list.push(e)
                        }
                    },
                    pushStackLiteral: function (e)
                    {
                        return this.push(new a(e))
                    },
                    pushSource: function (e)
                    {
                        if (this.pendingContent)
                        {
                            this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
                            this.pendingContent = undefined
                        }
                        if (e)
                        {
                            this.source.push(e)
                        }
                    },
                    pushStack: function (e)
                    {
                        this.flushInline();
                        var t = this.incrStack();
                        this.pushSource(t + " = " + e + ";");
                        this.compileStack.push(t);
                        return t
                    },
                    replaceStack: function (e)
                    {
                        var t = "",
                            n = this.isInline(),
                            i, r, o;
                        if (!this.isInline())
                        {
                            throw new s("replaceStack on non-inline")
                        }
                        var l = this.popStack(true);
                        if (l instanceof a)
                        {
                            t = i = l.value;
                            o = true
                        }
                        else
                        {
                            r = !this.stackSlot;
                            var u = !r ? this.topStackName() : this.incrStack();
                            t = "(" + this.push(u) + " = " + l + ")";
                            i = this.topStack()
                        }
                        var c = e.call(this, i);
                        if (!o)
                        {
                            this.popStack()
                        }
                        if (r)
                        {
                            this.stackSlot--
                        }
                        this.push("(" + t + c + ")")
                    },
                    incrStack: function ()
                    {
                        this.stackSlot++;
                        if (this.stackSlot > this.stackVars.length)
                        {
                            this.stackVars.push("stack" + this.stackSlot)
                        }
                        return this.topStackName()
                    },
                    topStackName: function ()
                    {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function ()
                    {
                        var e = this.inlineStack;
                        if (e.length)
                        {
                            this.inlineStack = [];
                            for (var t = 0, n = e.length; t < n; t++)
                            {
                                var i = e[t];
                                if (i instanceof a)
                                {
                                    this.compileStack.push(i)
                                }
                                else
                                {
                                    this.pushStack(i)
                                }
                            }
                        }
                    },
                    isInline: function ()
                    {
                        return this.inlineStack.length
                    },
                    popStack: function (e)
                    {
                        var t = this.isInline(),
                            n = (t ? this.inlineStack : this.compileStack).pop();
                        if (!e && n instanceof a)
                        {
                            return n.value
                        }
                        else
                        {
                            if (!t)
                            {
                                if (!this.stackSlot)
                                {
                                    throw new s("Invalid stack pop")
                                }
                                this.stackSlot--
                            }
                            return n
                        }
                    },
                    topStack: function ()
                    {
                        var e = this.isInline() ? this.inlineStack : this.compileStack,
                            t = e[e.length - 1];
                        if (t instanceof a)
                        {
                            return t.value
                        }
                        else
                        {
                            return t
                        }
                    },
                    contextName: function (e)
                    {
                        if (this.useDepths && e)
                        {
                            return "depths[" + e + "]"
                        }
                        else
                        {
                            return "depth" + e
                        }
                    },
                    quotedString: function (e)
                    {
                        return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                    },
                    objectLiteral: function (e)
                    {
                        var t = [];
                        for (var n in e)
                        {
                            if (e.hasOwnProperty(n))
                            {
                                t.push(this.quotedString(n) + ":" + e[n])
                            }
                        }
                        return "{" + t.join(",") + "}"
                    },
                    setupHelper: function (e, t, n)
                    {
                        var i = [],
                            r = this.setupParams(t, e, i, n);
                        var s = this.nameLookup("helpers", t, "helper");
                        return {
                            params: i,
                            paramsInit: r,
                            name: s,
                            callParams: [this.contextName(0)].concat(i).join(", ")
                        }
                    },
                    setupOptions: function (e, t, n)
                    {
                        var i = {},
                            r = [],
                            s = [],
                            a = [],
                            o, l, u;
                        i.name = this.quotedString(e);
                        i.hash = this.popStack();
                        if (this.trackIds)
                        {
                            i.hashIds = this.popStack()
                        }
                        if (this.stringParams)
                        {
                            i.hashTypes = this.popStack();
                            i.hashContexts = this.popStack()
                        }
                        l = this.popStack();
                        u = this.popStack();
                        if (u || l)
                        {
                            if (!u)
                            {
                                u = "this.noop"
                            }
                            if (!l)
                            {
                                l = "this.noop"
                            }
                            i.fn = u;
                            i.inverse = l
                        }
                        var c = t;
                        while (c--)
                        {
                            o = this.popStack();
                            n[c] = o;
                            if (this.trackIds)
                            {
                                a[c] = this.popStack()
                            }
                            if (this.stringParams)
                            {
                                s[c] = this.popStack();
                                r[c] = this.popStack()
                            }
                        }
                        if (this.trackIds)
                        {
                            i.ids = "[" + a.join(",") + "]"
                        }
                        if (this.stringParams)
                        {
                            i.types = "[" + s.join(",") + "]";
                            i.contexts = "[" + r.join(",") + "]"
                        }
                        if (this.options.data)
                        {
                            i.data = "data"
                        }
                        return i
                    },
                    setupParams: function (e, t, n, i)
                    {
                        var r = this.objectLiteral(this.setupOptions(e, t, n));
                        if (i)
                        {
                            this.useRegister("options");
                            n.push("options");
                            return "options=" + r
                        }
                        else
                        {
                            n.push(r);
                            return ""
                        }
                    }
                };
                var l = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
                var u = o.RESERVED_WORDS = {};
                for (var c = 0, f = l.length; c < f; c++)
                {
                    u[l[c]] = true
                }
                o.isValidJavaScriptVariableName = function (e)
                {
                    return !o.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
                };
                n = o;
                return n
            }(i, n);
            var h = function (e, t, n, i, r)
            {
                "use strict";
                var s;
                var a = e;
                var o = t;
                var l = n.parser;
                var u = n.parse;
                var c = i.Compiler;
                var f = i.compile;
                var h = i.precompile;
                var p = r;
                var d = a.create;
                var g = function ()
                {
                    var e = d();
                    e.compile = function (t, n)
                    {
                        return f(t, n, e)
                    };
                    e.precompile = function (t, n)
                    {
                        return h(t, n, e)
                    };
                    e.AST = o;
                    e.Compiler = c;
                    e.JavaScriptCompiler = p;
                    e.Parser = l;
                    e.parse = u;
                    return e
                };
                a = g();
                a.create = g;
                a["default"] = a;
                s = a;
                return s
            }(s, a, u, c, f);
            return h
        });
        return t.exports
    }();
    var d = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        t.exports = {
            timeServerMap: [
                {
                    hostMatch: "*.aliexpress.com",
                    server: "//time-ae.akamaized.net/gettime",
                    type: "JSONP"
                }]
        };
        return t.exports
    }();
    var g = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e,
            r = s,
            a = d.timeServerMap;
        var o = r.extend(
            {
                attrs:
                    {
                        timeServerMap: a,
                        timeServer: null,
                        cachedTimes:
                            {
                                serverTime: null,
                                localTime: null
                            },
                        setupted: false,
                        setUpDfd: i.Deferred(),
                        _timeType: ""
                    },
                setup: function (e, t, n)
                {
                    var i = this,
                        r = this.get("timeServer"),
                        s = this.get("setUpDfd"),
                        a = typeof e,
                        o = a == "number" || a == "string";
                    if (!o)
                    {
                        n = t;
                        t = e
                    }

                    function l()
                    {
                        return i._getTime()
                    }
                    if (!this.get("setupted"))
                    {
                        this.set("setupted", true);
                        var r = this.timeServer = this.timeServer ? this.timeServer : this._parseTimeServer(this.get("timeServerMap"), location.host, location.protocol);
                        if (o)
                        {
                            var u = new Date(isNaN(e) ? e : Number(e)).getTime();
                            if (!u) throw new Error("Timer.setup(): Invalid assigned time " + e + ', should be a timestamp or formatted date string like "2014/1/1 00:00:00 GMT+0800".');
                            this._setUpByAssignedTime(u)
                        }
                        else
                        {
                            if (!r)
                            {
                                this._setUpByAssignedTime();
                                s.resolveWith(i, [l])
                            }
                            else
                            {
                                this._setUpByServerTime(r.server, r.type).fail(function ()
                                {
                                    i._setUpByAssignedTime();
                                    i.set("_timeType", "local")
                                }).always(function ()
                                {
                                    s.resolveWith(i, [l])
                                })
                            }
                        }
                    }
                    s.done(function ()
                    {
                        if (t) t.call(n || window, l)
                    });
                    return o ? this : s
                },
                getTime: function (e, t)
                {
                    var n = this.get("setupted");
                    if (!e && !n)
                    {
                        throw new Error("Timer.getTime(): You should provide an async callback when first time calling `getTime()`.")
                    }
                    if (!n)
                    {
                        this.setup(function (n)
                        {
                            if (e) e.call(t || window, n())
                        }, t)
                    }
                    else
                    {
                        this.get("setUpDfd").done(function (n)
                        {
                            if (e) e.call(t || window, n())
                        })
                    }
                    return e ? this : this._getTime()
                },
                _getTime: function ()
                {
                    var e = (new Date).getTime(),
                        t = this.get("cachedTimes"),
                        n = this._getDebugTime(location.search);
                    if (n)
                    {
                        return n + e - t.localTime
                    }
                    else
                    {
                        return t.serverTime + (e - t.localTime)
                    }
                },
                _parseTimeServer: function (e, t, n)
                {
                    var i;
                    try
                    {
                        for (var r = 0, s = e.length; r < s; r++)
                        {
                            if (new RegExp(("^" + e[r].hostMatch + "$").replace(/\./, "\\.").replace(/\*/, ".*?"), "i").test(t))
                            {
                                i = e[r]
                            }
                        }
                    }
                    catch (a)
                    {
                        throw a
                    }
                    finally
                    {
                        return i
                    }
                },
                _setUpByAssignedTime: function (e)
                {
                    var t = (new Date).getTime();
                    this.set("cachedTimes",
                        {
                            serverTime: e || t,
                            localTime: t
                        });
                    this.set("_timeType", e ? "assign" : "local")
                },
                _setUpByServerTime: function (e, t)
                {
                    var n = this,
                        r, s = t.toLowerCase() == "jsonp",
                        a = {
                            url: e
                        };
                    if (s)
                    {
                        a["dataType"] = t;
                        a["jsonpCallback"] = "timestampcb"
                    }
                    else
                    {
                        a["type"] = t
                    }
                    return i.ajax(a).done(function (e)
                    {
                        e = s ? Number(e) : new Date(xhr.getResponseHeader("date")).getTime();
                        n.set("cachedTimes",
                            {
                                serverTime: e || (new Date).getTime(),
                                localTime: (new Date).getTime()
                            });
                        if (!e)
                        {
                            throw new Error("Timer: time server returns invalid timestamp.")
                        }
                        n.set("_timeType", "server")
                    })
                },
                _getDebugTime: function (e)
                {
                    var t = /[?&]timer-debug-time=([^&]+)(?:\&|$)/.test(e) ? RegExp.$1 : null;
                    return t ? new Date(isNaN(t) ? decodeURIComponent(t) : Number(t)).getTime() : null
                },
                _reset: function ()
                {
                    this.set("_timeType", "");
                    this.set("timeServerMap", a);
                    this.set("timeServer", null);
                    this.set("setupted", false);
                    this.set("setUpDfd", i.Deferred());
                    this.set("cachedTimes",
                        {
                            serverTime: null,
                            localTime: null
                        })
                }
            });
        n.exports = new o;
        return n.exports
    }();
    var m = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e,
            r = g;
        r.TIC_EVENT = "tic";
        r.set("ticCache",
            {
                inited: false,
                focusingTimeout: null,
                fixOffsetTimeout: null,
                ticInterval: null,
                nowSecondTime: 0
            });
        r._resetTicInterval = function ()
        {
            var e = this,
                t = this.get("ticCache"),
                n = this.getTime(),
                i = 1e3 - n % 1e3;
            t.nowSecondTime = n + i;
            clearTimeout(t.fixOffsetTimeout);
            clearInterval(t.ticInterval);
            t.fixOffsetTimeout = setTimeout(function ()
            {
                e.trigger(e.TIC_EVENT, t.nowSecondTime);
                t.ticInterval = setInterval(function ()
                {
                    t.nowSecondTime += 1e3;
                    e.trigger(e.TIC_EVENT, t.nowSecondTime)
                }, 1e3)
            }, i)
        };
        r._initTic = function ()
        {
            var e = this,
                t = this.get("ticCache");
            this._resetTicInterval();
            clearTimeout(t.focusingTimeout);
            t.focusingTimeout = setTimeout(function ()
            {
                e._resetTicInterval()
            }, 3 * 60 * 1e3);
            if (!t.inited)
            {
                i(window).on("focus", function ()
                {
                    e._resetTicInterval();
                    clearTimeout(t.focusingTimeout)
                })
            }
            t.inited = true
        };
        r.onTic = function (e, t)
        {
            this.on(this.TIC_EVENT, e, t);

            function n()
            {
                if (e)
                {
                    var n = this._getTime(),
                        i = n - 1e3 + n % 1e3;
                    e.call(t || window, i)
                }
            }
            if (!this.get("inited"))
            {
                this.set("inited", true);
                this.setup(function ()
                {
                    this._initTic();
                    n.call(this)
                }, this)
            }
            else
            {
                n.call(this)
            }
            return this
        };
        r.offTic = function (e, t)
        {
            this.off(this.TIC_EVENT, e, t);
            return this
        };
        n.exports = r;
        return n.exports
    }();
    var v = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e,
            r = m,
            s = f;
        var a = s.extend(
            {
                attrs:
                    {
                        dayElement:
                            {
                                value: '[data-role="day"]',
                                getter: function (e)
                                {
                                    return this.$(e)
                                }
                            },
                        hourElement:
                            {
                                value: '[data-role="hour"]',
                                getter: function (e)
                                {
                                    return this.$(e)
                                }
                            },
                        minuteElement:
                            {
                                value: '[data-role="minute"]',
                                getter: function (e)
                                {
                                    return this.$(e)
                                }
                            },
                        secondElement:
                            {
                                value: '[data-role="second"]',
                                getter: function (e)
                                {
                                    return this.$(e)
                                }
                            },
                        remainingFormater:
                            {
                                day: function (e)
                                {
                                    return e
                                },
                                hour: function (e)
                                {
                                    return e < 10 ? "0" + e : e
                                },
                                minute: function (e)
                                {
                                    return e < 10 ? "0" + e : e
                                },
                                second: function (e)
                                {
                                    return e < 10 ? "0" + e : e
                                }
                            },
                        remainings:
                            {
                                day: 0,
                                hour: 0,
                                minute: 0,
                                second: 0
                            },
                        deferred: null,
                        startTime: null,
                        targetTime: null,
                        timeRemaining: null,
                        timeServerMap: null
                    },
                initialize: function (e)
                {
                    this.initAttrs(e);
                    if (!this.element)
                    {
                        this.withoutElement = true
                    }
                    this.parseElement();
                    this._resetGetRemainingFuncs();
                    this.set("deferred", i.Deferred());
                    if (this.get("timeServerMap"))
                    {
                        r.set("timeServerMap", this.get("timeServerMap"))
                    }
                    r.getTime(function (e)
                    {
                        var t = this.get("targetTime");
                        this.set("startTime", e);
                        this.set("targetTime", this._getTargetDateTime(e, t))
                    }, this).onTic(this._ticHandler, this);
                    var t = this;
                    this.get("deferred").fail(function ()
                    {
                        r.offTic(t._ticHandler, t)
                    });
                    return this
                },
                done: function ()
                {
                    return this.get("deferred").done.apply(this.get("deferred"), arguments)
                },
                progress: function ()
                {
                    return this.get("deferred").progress.apply(this.get("deferred"), arguments)
                },
                fail: function ()
                {
                    return this.get("deferred").fail.apply(this.get("deferred"), arguments)
                },
                reject: function ()
                {
                    return this.get("deferred").reject.apply(this.get("deferred"), arguments)
                },
                pipe: function ()
                {
                    return this.get("deferred").pipe.apply(this.get("deferred"), arguments)
                },
                _getTargetDateTime: function (e, t)
                {
                    if (i.type(t) == "number")
                    {}
                    else if (i.type(t) == "string")
                    {
                        t = new Date(t).getTime()
                    }
                    else if (i.type(t) == "data")
                    {
                        t = t.getTime()
                    }
                    else if (i.type(t) == "function")
                    {
                        t = t(e)
                    }
                    return Number(t)
                },
                _ticHandler: function (e)
                {
                    var t = this.get("deferred"),
                        n = this.get("targetTime") - e,
                        i = false;
                    if (n < 0)
                    {
                        i = true;
                        n = 0
                    }
                    if (!this.withoutElement)
                    {
                        var s = this.get("remainingFormater"),
                            a = {},
                            o = {
                                day: this.get("dayElement"),
                                hour: this.get("hourElement"),
                                minute: this.get("minuteElement"),
                                second: this.get("secondElement")
                            };
                        for (var l in o)
                        {
                            var u = o[l],
                                c = s[l],
                                f = a[l] = this["_" + l + "Remaining"](n);
                            if (u && u.length)
                            {
                                u[0].innerHTML = typeof c == "function" ? c(f) : f
                            }
                        }
                        this.set("remainings", a)
                    }
                    this.set("timeRemaining", n);
                    t.notifyWith(this, [n]);
                    if (i)
                    {
                        t.resolveWith(this);
                        r.offTic(this._ticHandler, this)
                    }
                },
                _resetGetRemainingFuncs: function ()
                {
                    var e = "Math.floor( timeRemaining / " + 1e3 * 3600 * 24 + " )";
                    var t = "Math.floor( ( timeRemaining / " + 1e3 * 3600 + " ) % 24 )";
                    var n = "Math.floor( ( timeRemaining / " + 1e3 * 60 + " ) % 60 )";
                    var i = "Math.floor( ( timeRemaining / 1000 ) % 60 )";
                    var r = {
                        day: this.get("dayElement"),
                        hour: this.get("hourElement"),
                        minute: this.get("minnuteElement"),
                        second: this.get("secondElement")
                    };
                    if (r.day && r.day.length > 0)
                    {}
                    else if (r.hour && r.hour.length > 0)
                    {
                        t = "Math.floor( timeRemaining / " + 1e3 * 60 * 60 + " )"
                    }
                    else if (r.minute && r.minute.length > 0)
                    {
                        n = "Math.floor( timeRemaining / " + 1e3 * 60 + " )"
                    }
                    else if (r.second && r.second.length > 0)
                    {
                        i = "Math.floor( timeRemaining / 1000 )"
                    }
                    this._dayRemaining = new Function("timeRemaining", "return " + e + ";");
                    this._hourRemaining = new Function("timeRemaining", "return " + t + ";");
                    this._minuteRemaining = new Function("timeRemaining", "return " + n + ";");
                    this._secondRemaining = new Function("timeRemaining", "return " + i + ";")
                }
            });
        n.exports = a;
        return n.exports
    }();
    var y = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e,
            r = s,
            a;
        a = r.extend(
            {
                attrs:
                    {
                        delay:
                            {
                                value: 400
                            }
                    },
                registers:
                    {},
                registerIndex: 0,
                threadId: null,
                lock: false,
                initialize: function ()
                {
                    this.start()
                },
                start: function ()
                {
                    var e = this;
                    if (this.lock)
                    {
                        return
                    }
                    this.lock = true;
                    this.activateAll();
                    i(window).bind("scroll.scrollTrigger", function ()
                    {
                        e._scroll()
                    });
                    i(window).bind("resize.scrollTrigger", function ()
                    {
                        e._scroll()
                    })
                },
                stop: function ()
                {
                    i(window).unbind("scroll.scrollTrigger");
                    i(window).unbind("resize.scrollTrigger");
                    this.lock = false
                },
                add: function (e)
                {
                    var t = this;
                    i(e.element).each(function ()
                    {
                        var n = i(this);
                        var r = t.registerIndex++;
                        n.data("scrollTrigger", r);
                        t.registers[r] = {
                            element: n,
                            distance: e.distance || 0,
                            onRouse: e.onRouse,
                            options: e.options || null,
                            oneoff: e.oneoff || false,
                            viewportAdjustment: e.viewportAdjustment || 0
                        };
                        t._activate(t.registers[r])
                    })
                },
                remove: function (e)
                {
                    var t = this;
                    var n = i(e.element);
                    n.each(function ()
                    {
                        var e = i(this);
                        var n = e.data("scrollTrigger");
                        delete t.registers[n]
                    })
                },
                activate: function (e)
                {
                    var t = this;
                    var n = i(e.element);
                    n.each(function ()
                    {
                        var e = i(this);
                        var n = e.data("scrollTrigger");
                        t._activate(t.registers[n])
                    })
                },
                activateAll: function ()
                {
                    if (i.isEmptyObject(this.registers))
                    {
                        return
                    }
                    for (var e in this.registers)
                    {
                        this._activate(this.registers[e])
                    }
                },
                isOnScope: function (e, t, n)
                {
                    return this._isOnScope(e, t || 0, n || 0)
                },
                _activate: function (e)
                {
                    if (this._isOnScope(e.element, e.distance, e.viewportAdjustment))
                    {
                        this._rouse(e)
                    }
                },
                _rouse: function (e)
                {
                    e.onRouse.apply(e.element, [e.options]);
                    if (e.oneoff)
                    {
                        this.remove(
                            {
                                element: e.element
                            })
                    }
                },
                _scroll: function ()
                {
                    var e = this;
                    clearTimeout(this.threadId);
                    e.threadId = setTimeout(function ()
                    {
                        e.activateAll();
                        clearTimeout(e.threadId)
                    }, e.get("delay"))
                },
                _isOnScope: function (e, t, n)
                {
                    var i = l();
                    var r = o(e);
                    var t = this._calculateArray(t);
                    var n = this._calculateArray(n);
                    if (t.top < 0 && r.bottom > i.top - n.top)
                    {
                        return true
                    }
                    if (t.right < 0 && r.left < i.right + n.right)
                    {
                        return true
                    }
                    if (t.bottom < 0 && r.top < i.bottom + n.bottom)
                    {
                        return true
                    }
                    if (t.left < 0 && r.right > i.left - n.left)
                    {
                        return true
                    }
                    if (r.bottom + t.bottom < i.top - n.top)
                    {
                        return false
                    }
                    if (r.left - t.left > i.right + n.right)
                    {
                        return false
                    }
                    if (r.top - t.top > i.bottom + n.bottom)
                    {
                        return false
                    }
                    if (r.right + t.right < i.left - n.left)
                    {
                        return false
                    }
                    return true
                },
                _calculateArray: function (e)
                {
                    if (!i.isArray(e))
                    {
                        var t = parseInt(e, 10);
                        e = [t, t, t, t]
                    }
                    switch (e.length)
                    {
                        case 0:
                            return {
                                top: 0, right: 0, bottom: 0, left: 0
                            };
                        case 1:
                            var t = parseInt(e[0], 10);
                            return {
                                top: t, right: t, bottom: t, left: t
                            };
                        case 2:
                            var n = parseInt(e[0], 10);
                            var r = parseInt(e[1], 10);
                            return {
                                top: n, right: r, bottom: n, left: r
                            };
                        case 3:
                            var r = parseInt(e[1], 10);
                            return {
                                top: parseInt(e[0], 10), right: r, bottom: parseInt(e[2], 10), left: r
                            };
                        default:
                            return {
                                top: parseInt(e[0], 10), right: parseInt(e[1], 10), bottom: parseInt(e[2], 10), left: parseInt(e[3], 10)
                            }
                    }
                }
            });
        n.exports = new a;

        function o(e)
        {
            var t = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
            var n = e.offset();
            t.top = n.top;
            t.right = n.left + e.width();
            t.bottom = n.top + e.height();
            t.left = n.left;
            return t
        }

        function l()
        {
            var e = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
            var t = u();
            e.top = t.top;
            e.right = t.left + i(window).width();
            e.bottom = t.top + i(window).height();
            e.left = t.left;
            return e
        }

        function u()
        {
            var e = i(window);
            var t = {
                left: e.scrollLeft(),
                top: e.scrollTop()
            };
            return t
        }
        return n.exports
    }();
    var x = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e,
            r = s,
            o = a,
            l = "aep_history",
            u = "keywords",
            c = "product_selloffer",
            f = "\n\n",
            h = "^\n",
            p = "$\n",
            d = "	";
        var g = r.extend(
            {
                attrs:
                    {
                        keywordsSize:
                            {
                                value: 8
                            },
                        productsSize:
                            {
                                value: 8
                            }
                    },
                groups:
                    {},
                initialize: function ()
                {
                    this.refresh()
                },
                getKeywords: function (e)
                {
                    if (!this.groups || !this.groups[u])
                    {
                        return []
                    }
                    var e = e ||
                        {};
                    var t = e.limit || 0;
                    var n = this._sliceArray(this.groups[u], t).slice(0);
                    return n
                },
                getProducts: function (e)
                {
                    if (!this.groups || !this.groups[c])
                    {
                        return []
                    }
                    var e = e ||
                        {};
                    var t = e.limit || 0;
                    var n = this._sliceArray(this.groups[c], t);
                    var i = [];
                    for (var r = 0, s = n.length; r < s; r++)
                    {
                        var a = n[r].replace(/^http(s)?:\/\/.*\/(\d+_)?|\.html.*$/gi, "");
                        if (/^\d+$/.test(a))
                        {
                            i.push(a)
                        }
                    }
                    return i
                },
                logProduct: function (e)
                {
                    if (!e || !e.id)
                    {
                        return
                    }
                    var t = this._addItem(
                        {
                            array: this.getProducts(),
                            item: e.id,
                            maxSize: this.get("productsSize")
                        });
                    var n = this._buildWholeCookie(
                        {
                            keywordArray: this.getKeywords(),
                            productArray: t
                        });
                    o.set(l, n,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            expires: 365
                        });
                    this.refresh()
                },
                refresh: function ()
                {
                    this.groups = this._parseGroups()
                },
                _buildWholeCookie: function (e)
                {
                    var t = e.keywordArray || [];
                    var n = e.productArray || [];
                    var i = this._buildGroup(
                        {
                            group: u,
                            array: t.reverse()
                        });
                    var r = this._buildGroup(
                        {
                            group: c,
                            array: n.reverse()
                        });
                    return i + f + r
                },
                _buildGroup: function (e)
                {
                    var t = e.group || "";
                    var n = e.array || [];
                    if (!t || t.length <= 0)
                    {
                        return ""
                    }
                    return t + h + t + d + n.join(d)
                },
                _addItem: function (e)
                {
                    var t = e.array || [];
                    var n = e.item || "";
                    var i = e.maxSize || "";
                    if (!n || n.length <= 0)
                    {
                        return t
                    }
                    var r = t.slice(0);
                    r = r.reverse();
                    this._appendToArray(n, r);
                    r = r.reverse().splice(0, i);
                    return r
                },
                _appendToArray: function (e, t)
                {
                    var n = i.inArray(e, t);
                    if (i.inArray(e, t) >= 0)
                    {
                        t.splice(n, 1)
                    }
                    t.push(e)
                },
                _sliceArray: function (e, t)
                {
                    if (t > 0)
                    {
                        return e.splice(0, t)
                    }
                    return e
                },
                _parseGroups: function ()
                {
                    var e = {};
                    var t = o.get(l,
                        {
                            domain: "aliexpress.com",
                            path: "/"
                        });
                    if (t)
                    {
                        var n = t.split(f);
                        for (var i = 0, r = n.length; i < r; i++)
                        {
                            var s = n[i].split(h);
                            var a = s[0];
                            var u = s[1];
                            var c = this._parseGroupContent(a, u);
                            e[a] = c
                        }
                    }
                    return e
                },
                _parseGroupContent: function (e, t)
                {
                    if (!t || t.length === 0)
                    {
                        return []
                    }
                    var n = t.indexOf(e);
                    if (n >= 0)
                    {
                        t = t.substring(n + e.length + d.length)
                    }
                    var i = t.split(d);
                    i = i.reverse();
                    i = this._uniqueArray(i);
                    return i
                },
                _uniqueArray: function (e)
                {
                    var t = e;
                    for (var n = 1; n < t.length; n++)
                    {
                        if (t[n] === t[n - 1])
                        {
                            t.splice(n--, 1)
                        }
                    }
                    return t
                }
            });
        n.exports = new g;
        return n.exports
    }();
    var b = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        "use strict";
        var i = e;
        var r = s;
        var o = a;
        var l = x;
        var u = r.extend(
            {
                attrs:
                    {
                        siteFormat: /^[a-z]{3}(_[a-z]{1})?$/,
                        x_localeFormat: /^[a-z]{2}_[A-Z]{2}$/,
                        s_localeFormat: /^[a-z]{2}_[A-Z]{2}$/,
                        b_localeFormat: /^[a-z]{2}_[A-Z]{2}$/,
                        c_tpFormat: /^[A-Z]{3}$/,
                        regionFormat: /^[A-Z]{2,3}$/,
                        provinceFormat: /^[0-9]{18}$/,
                        cityFormat: /^[0-9]{18}$/,
                        siFormat: /^(glo|rus|bra|esp|idn|fra|deu|ita)$/,
                        signFormat: /^(y|n)$/,
                        x_userFormat: /^.*$/,
                        issFormat: /^(y)$/,
                        isbFormat: /^(y)$/,
                        ispmFormat: /^(y)$/,
                        isksFormat: /^(y)$/,
                        isgclFormat: /^(y)$/,
                        reg_verFormat: /^(new|old)$/,
                        x_lFormat: /^[01]{1}$/,
                        ber_lFormat: /^A\d$/,
                        zero_orderFormat: /^(y)$/,
                        ae_u_p_sFormat: /^[012]{1}$/,
                        ups_u_tFormat: /^[0-9]{13,}$/
                    },
                _setcookie: function (e, t, n)
                {
                    if (!this.validate(t, n))
                    {
                        return false
                    }
                    var i = o.get(e,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            raw: true
                        }) || "";
                    var r = new RegExp("(.*&?" + t + "=)(.*?)(&.*|$)");
                    if (r.test(i))
                    {
                        i = RegExp.$1 + n + RegExp.$3
                    }
                    else
                    {
                        i = (i ? i + "&" : "") + (t + "=" + n)
                    }
                    o.set(e, i,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            expires: 365 * 10,
                            raw: true
                        })
                },
                _getCookie: function (e, t)
                {
                    var n = o.get(e,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            raw: true
                        }) || "";
                    var i = new RegExp("(.*&?" + t + "=)(.*?)(&.*|$)");
                    n.match(i);
                    var r = RegExp.$2;
                    if (i.test(n) && this.validate(t, r))
                    {
                        return r
                    }
                    else
                    {
                        return ""
                    }
                },
                _removeCookie: function (e, t)
                {
                    if (!t)
                    {
                        return
                    }
                    var n = o.get(e,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            raw: true
                        }) || "";
                    if (!n)
                    {
                        return
                    }
                    var i = n.split("&");
                    var r = new RegExp(t + "=.*?");
                    for (var s = i.length; s > -1; s--)
                    {
                        if (r.test(i[s]))
                        {
                            i.splice(s, 1)
                        }
                    }
                    n = i.join("&");
                    o.set(e, n,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            expires: 365 * 10,
                            raw: true
                        })
                },
                validate: function (e, t)
                {
                    if (/(&|=)/.test(t)) return false;
                    if (t && this.get(e + "Format") && this.get(e + "Format").test(t))
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getMSite: function (e, t)
                {
                    var n = o.get(e,
                        {
                            domain: "m.aliexpress.com",
                            path: "/",
                            raw: true
                        }) || "";
                    var i = new RegExp("(.*&?" + t + "=)(.*?)(&.*|$)");
                    n.match(i);
                    var r = RegExp.$2;
                    if (i.test(n) && this.validate(t, r))
                    {
                        return r
                    }
                    else
                    {
                        return ""
                    }
                },
                setSite: function (e)
                {
                    this._setcookie("aep_usuc_f", "site", e)
                },
                getSite: function ()
                {
                    return this._getCookie("aep_usuc_f", "site")
                },
                getZeroOrder: function ()
                {
                    return this._getCookie("xman_us_f", "zero_order")
                },
                isZeroOrderUser: function ()
                {
                    if (this.getZeroOrder() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                setRegion: function (e)
                {
                    this._setcookie("aep_usuc_f", "region", e)
                },
                getRegion: function ()
                {
                    return this._getCookie("aep_usuc_f", "region")
                },
                setProvince: function (e)
                {
                    this._setcookie("aep_usuc_f", "province", e)
                },
                getProvince: function ()
                {
                    return this._getCookie("aep_usuc_f", "province")
                },
                removeProvince: function ()
                {
                    this._removeCookie("aep_usuc_f", "province")
                },
                setCity: function (e)
                {
                    this._setcookie("aep_usuc_f", "city", e)
                },
                getCity: function ()
                {
                    return this._getCookie("aep_usuc_f", "city")
                },
                removeCity: function ()
                {
                    this._removeCookie("aep_usuc_f", "city")
                },
                setCurrency: function (e)
                {
                    this._setcookie("aep_usuc_f", "c_tp", e)
                },
                getCurrency: function ()
                {
                    return this._getCookie("aep_usuc_f", "c_tp")
                },
                setLocale: function (e)
                {
                    this._setcookie("xman_us_f", "x_locale", e)
                },
                getLocale: function ()
                {
                    return this._getCookie("xman_us_f", "x_locale")
                },
                setSellerLocale: function (e)
                {
                    o.set("intl_locale", e,
                        {
                            domain: "aliexpress.com",
                            path: "/",
                            expires: 365,
                            raw: true
                        });
                    this.setLocale(e);
                    this._setcookie("aep_usuc_f", "s_locale", e)
                },
                getSellerLocale: function ()
                {
                    return this._getCookie("aep_usuc_f", "s_locale")
                },
                setBuyerLocale: function (e)
                {
                    this.setLocale(e);
                    this._setcookie("aep_usuc_f", "b_locale", e)
                },
                getBuyerLocale: function ()
                {
                    return this._getCookie("aep_usuc_f", "b_locale")
                },
                getSign: function ()
                {
                    return this._getCookie("xman_us_t", "sign")
                },
                isLoggedIn: function ()
                {
                    if (this.getSign() == "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getIss: function ()
                {
                    return this._getCookie("aep_usuc_f", "iss")
                },
                isSeller: function ()
                {
                    if (this.getIss() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getIsb: function ()
                {
                    return this._getCookie("aep_usuc_f", "isb")
                },
                isBuyer: function ()
                {
                    if (this.getIsb() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getIsks: function ()
                {
                    return this._getCookie("aep_usuc_f", "isks")
                },
                isKaSeller: function ()
                {
                    if (this.getIsks() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getIsgcl: function ()
                {
                    return this._getCookie("aep_usuc_f", "isgcl")
                },
                isGreenChannel: function ()
                {
                    if (this.getIsgcl() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getIspm: function ()
                {
                    return this._getCookie("aep_usuc_f", "ispm")
                },
                isPremiumMember: function ()
                {
                    if (this.getIspm() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getIsfm: function ()
                {
                    return this._getCookie("aep_usuc_f", "isfm")
                },
                isFreeMember: function ()
                {
                    if (this.getIsfm() === "y")
                    {
                        return true
                    }
                    else
                    {
                        return false
                    }
                },
                getRegVer: function ()
                {
                    return this._getCookie("aep_usuc_f", "reg_ver")
                },
                getOversea: function ()
                {
                    return this._getCookie("xman_us_f", "x_l")
                },
                isOversea: function ()
                {
                    if (this.getOversea() === "1")
                    {
                        return false
                    }
                    else
                    {
                        return true
                    }
                },
                _getXUserRaw: function ()
                {
                    return this._getCookie("xman_us_f", "x_user")
                },
                getXUserObj: function ()
                {
                    var e = {
                        country: "",
                        firstName: "",
                        lastName: "",
                        memberSeq: ""
                    };
                    var t = this._getXUserRaw() || "";
                    var n = t.split("|");
                    if (n.length >= 5)
                    {
                        e.country = n[0];
                        e.firstName = n[1].replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        e.lastName = n[2].replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        e.memberSeq = n[4]
                    }
                    return e
                },
                isNewUser: function ()
                {
                    if (this.getXUserObj().memberSeq !== "")
                    {
                        return false
                    }
                    else
                    {
                        return true
                    }
                },
                setHistory: function (e)
                {
                    if (!e) return;
                    l.logProduct(
                        {
                            id: e
                        })
                },
                getHistory: function ()
                {
                    return l.getProducts()
                },
                setAETest: function () {},
                getAETest: function ()
                {
                    return ""
                },
                getBerL: function ()
                {
                    return this._getCookie("aep_usuc_t", "ber_l")
                },
                getAeUps: function ()
                {
                    return this._getCookie("aep_usuc_f", "ae_u_p_s")
                },
                setAeUps: function (e)
                {
                    return this._setcookie("aep_usuc_f", "ae_u_p_s", e)
                },
                getAeUpsTime: function ()
                {
                    return this._getCookie("aep_usuc_f", "ups_u_t")
                },
                setAeUpsTime: function (e)
                {
                    return this._setcookie("aep_usuc_f", "ups_u_t", e)
                }
            });
        n.exports = new u;
        return n.exports
    }();
    var _ = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        var n = b;
        var i = {
            "default": ".aliexpress.com",
            rus: ".aliexpress.ru",
            tmall: ".tmall.ru"
        };
        var r = function ()
        {
            var e = n.getSite();
            var t = window.location.href;
            if (t.indexOf("aliexpress.ru") > -1)
            {
                return i["rus"]
            }
            else if (t.indexOf("tmall.ru") > -1)
            {
                return i["tmall"]
            }
            return i["default"]
        };
        var s = Object.defineProperties(
            {},
            {
                GPS:
                    {
                        get: function ()
                        {
                            return "//gpsfront" + r()
                        },
                        enumerable: true,
                        configurable: false
                    },
                promotion:
                    {
                        get: function ()
                        {
                            return "//promotion" + r()
                        },
                        enumerable: true,
                        configurable: false
                    }
            });
        t.exports = s;
        return t.exports
    }();
    var w = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        t.exports = '{{#each products}}\n    <div class="upper-and-lower deals-item-outer">\n        <div class="deals-item-inner">\n            <a href="{{productDetailUrl}}" target="_blank">\n                <div class="item-image">\n                    <img src="{{productImage}}" />\n                </div>\n                <div class="item-details">\n                    <h3 class="item-details-title">{{productTitle}}</h3>\n                    <p class="current-price">\n                        {{#each icons}}\n                            <img class="detail-product-icon" src="{{icon}}" style="height: 14px;" />\n                        {{/each}}\n                        {{minPrice}}\n                    </p>\n                    <p class="original-price">\n                        {{#if discount}}\n                            <del>{{oriMinPrice}}</del> | <span class="folatR">{{replaceCopy @root.I18n.off discount}}</span> \n                        {{/if}}\n                    </p>\n                    {{#compare phase 1}}\n                        <div class="stock" style="{{showByPercent totalStock orders}}">\n                            <div class="stock-progressbar">\n                                <div class="progressba-status" style="{{barByPercent totalStock orders}}"></div>\n                            </div>\n                            <div class="stock-text">{{{descByPercent stock totalStock orders}}}</div>\n                        </div>\n                    {{/compare}}\n                    {{#showCountDown startTime endTime  orders totalStock}}\n                        <div class="count-down {{countDownClass}}">\n                            {{{countDownCopy startTime endTime}}}\n                        </div>\n                    {{/showCountDown}}\n                </div>\n            </a>\n        </div>\n    </div>\n{{/each}}';
        return t.exports
    }();
    var T = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e;
        var r = f;
        var s = h;
        var a = p;
        var o = g;
        var u = v;
        var c = l;
        var d = y;
        var m = _;
        var x = window.dealsList;
        var b = r.extend(
            {
                widgetId: "",
                device: "",
                lock: false,
                limit: 12,
                offset: 0,
                nextPage: true,
                phase: 1,
                postback: "",
                setup: function ()
                {
                    var e = this;
                    e.$container = e.element;
                    if (/(iPhone|Android)/.test(navigator.userAgent))
                    {
                        e.device = /AliApp\(AE/.test(navigator.userAgent) ? "app" : "msite"
                    }
                    else
                    {
                        e.device = "pc"
                    }
                    e.dealsScrollEle = e.$container.find("[data-role=deals-scroll]");
                    e.menuId = e.$container.data("menuid");
                    e.widgetId = i(e.menuId).find(".active").data("widgetid");
                    e.productIds2Top = e._getQueryString("pid") || e._getQueryString("productIds");
                    e.orders = e.$container.data("orders");
                    e.ordersPercent = e.$container.data("orderpercent");
                    e.onlyStock = e.$container.data("onlystock");
                    e.onlyPercent = e.$container.data("onlypercent");
                    e.maxTime = e.$container.data("maxtime");
                    e.init()
                },
                init: function ()
                {
                    var e = this;
                    e._addHandleHelper();
                    o.getTime(function (t)
                    {
                        e.serverTime = t;
                        e._bindEvent();
                        e._addscrollListener()
                    })
                },
                _paramsResetRequest: function (e)
                {
                    this.offset = 0;
                    this.nextPage = true;
                    this.phase = e;
                    this.postback = "";
                    this.batchStart = 0;
                    this.dealsScrollEle.show();
                    this._addProductData()
                },
                _bindEvent: function ()
                {
                    var e = this;
                    i(e.menuId).find("[data-role=category-menu-item]").on("click", function ()
                    {
                        e.$container.find("[data-role=status-item]").eq(0).addClass("active").siblings().removeClass("active");
                        e.widgetId = i(this).data("widgetid");
                        e._paramsResetRequest(1)
                    });
                    e.$container.find("[data-role=status-item]").on("click", function ()
                    {
                        i(this).addClass("active").siblings().removeClass("active");
                        e._paramsResetRequest(i(this).data("phase"))
                    })
                },
                _addscrollListener: function ()
                {
                    var e = this;
                    d.add(
                        {
                            element: e.dealsScrollEle,
                            onRouse: function ()
                            {
                                e._addProductData()
                            }
                        })
                },
                _addHandleHelper: function ()
                {
                    var e = this;
                    a.registerHelper(
                        {
                            compare: function (e, t, n)
                            {
                                if (e === t) return n.fn(this);
                                return n.inverse(this)
                            },
                            showByPercent: function (t, n)
                            {
                                var i = Math.floor(n / t * 100);
                                if (isNaN(i)) return "display:none";
                                return n > e.orders || i > e.ordersPercent ? "display:block;" : "display:none"
                            },
                            barByPercent: function (e, t)
                            {
                                var n = Math.floor(t / e * 100);
                                if (n == 100) return "width:" + n + "%;" + "background:#999;";
                                if (n !== 0) return "width:" + n + "%;"
                            },
                            descByPercent: function (t, n, i)
                            {
                                var r = Math.floor(i / n * 100);
                                if (r == 100)
                                {
                                    return '<span class="sold-out">' + x.sellOut + "</span>"
                                }
                                else if (r > 100 - e.onlyPercent || t < e.onlyStock)
                                {
                                    return ' <span class="prefer-stock">' + x.only.replace(/xx/, t) + "</span>"
                                }
                                else
                                {
                                    r = r < 1 ? 1 : r;
                                    return '<span class="solder">' + x.sold.replace(/xxx/, i) + '</span><span class="float-r">' + x.claimed.replace(/xx/, r) + "</span>"
                                }
                            },
                            countDownCopy: function (t, n)
                            {
                                var i = "",
                                    r = "",
                                    t = t * 1e3,
                                    n = n * 1e3,
                                    s = e.serverTime,
                                    a = e.maxTime * 60 * 60 * 1e3;
                                if (t < s && n > s && n - s < a)
                                {
                                    r = x.endIn;
                                    i = n
                                }
                                else if (t > s)
                                {
                                    r = x.startIn;
                                    i = t
                                }
                                var o = r.replace("00:00:00", "");
                                var l = '<span data-role="countdowntext">' + o + "</span>";
                                r = r.replace(o, l);
                                return r.replace("00:00:00", '<span data-role="countdown" data-goaltime="' + i + '">' + '<em data-role="hour">00</em>:' + '<em data-role="minute">00</em>:' + '<em data-role="second">00</em>' + "</span>")
                            },
                            showCountDown: function (t, n, r, s, a)
                            {
                                var t = t * 1e3,
                                    n = n * 1e3,
                                    o = e.maxTime * 60 * 60 * 1e3,
                                    l = Math.floor(r / s * 100);
                                if (n - e.serverTime < o && l < 100)
                                {
                                    return a.fn(i.extend(
                                        {
                                            countDownClass: ""
                                        }, this))
                                }
                                else if (t > e.serverTime)
                                {
                                    return a.fn(i.extend(
                                        {
                                            countDownClass: "count-down-up"
                                        }, this))
                                }
                            },
                            replaceCopy: function (e, t)
                            {
                                return e.replace(/xx/, t)
                            }
                        })
                },
                _addProductData: function ()
                {
                    var e = this;
                    if (!e.lock && e.nextPage)
                    {
                        e.lock = true;
                        i.ajax(
                            {
                                url: m.GPS + "/getRecommendingResults.do",
                                dataType: "JSONP",
                                data:
                                    {
                                        widget_id: e.widgetId,
                                        platform: e.device,
                                        limit: e.limit,
                                        offset: e.offset,
                                        phase: e.phase,
                                        productIds2Top: e.productIds2Top,
                                        postback: e.postback
                                    },
                                success: function (t)
                                {
                                    if (!t || !t.results) return;
                                    var n = e.$container.find("[data-role=deals-list]");
                                    var i = a.compile(w)(
                                        {
                                            products: t.results,
                                            I18n: x
                                        });
                                    if (e.offset == 0)
                                    {
                                        n.html(i)
                                    }
                                    else
                                    {
                                        n.append(i)
                                    }
                                    e._cutDownBatch();
                                    var r = t.results.map(function (e)
                                    {
                                        return e.productId
                                    });
                                    c.ctr(
                                        {
                                            projectId: 180153,
                                            expPage: "flash_deals",
                                            expPageArea: e.phase == 1 ? "active_deals" : "upcoming",
                                            expType: "flash_deals_active",
                                            expCondition: "list_product",
                                            expProduct: r.toString(),
                                            expAttribute: "",
                                            expResultCnt: t.results.length
                                        });
                                    e.postback = t.postback;
                                    e.productIds2Top = "";
                                    e.offset += e.limit;
                                    if (t.lastPage || t.finished)
                                    {
                                        e.nextPage = false;
                                        e.$container.find("[data-role=deals-scroll]").hide()
                                    }
                                },
                                complete: function ()
                                {
                                    e.lock = false
                                }
                            })
                    }
                },
                _cutDownBatch: function ()
                {
                    var e = this;
                    e.batchStart = e.batchStart || 0;
                    var t = e.$container.find("[data-role=countdown]");
                    t.each(function (t)
                    {
                        if (t >= e.batchStart)
                        {
                            new u(
                                {
                                    element: i(this),
                                    targetTime: i(this).data("goaltime")
                                })
                        }
                    });
                    e.batchStart = t.length
                },
                _getQueryString: function (e)
                {
                    var t = s.get(window.location.search.substr(1), e);
                    return t ? decodeURI(t) : ""
                }
            });
        n.exports = b;
        return n.exports
    }();
    var E = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e;
        var r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            a = Array.prototype.slice,
            o, l;
        if (i.event.fixHooks)
        {
            for (var u = r.length; u;)
            {
                i.event.fixHooks[r[--u]] = i.event.mouseHooks
            }
        }
        var c = i.event.special.mousewheel = {
            version: "3.1.11",
            setup: function ()
            {
                if (this.addEventListener)
                {
                    for (var e = s.length; e;)
                    {
                        this.addEventListener(s[--e], f, false)
                    }
                }
                else
                {
                    this.onmousewheel = f
                }
                i.data(this, "mousewheel-line-height", c.getLineHeight(this));
                i.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function ()
            {
                if (this.removeEventListener)
                {
                    for (var e = s.length; e;)
                    {
                        this.removeEventListener(s[--e], f, false)
                    }
                }
                else
                {
                    this.onmousewheel = null
                }
                i.removeData(this, "mousewheel-line-height");
                i.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function (e)
            {
                var t = i(e)["offsetParent" in i.fn ? "offsetParent" : "parent"]();
                if (!t.length)
                {
                    t = i("body")
                }
                return parseInt(t.css("fontSize"), 10)
            },
            getPageHeight: function (e)
            {
                return i(e).height()
            },
            settings:
                {
                    adjustOldDeltas: true,
                    normalizeOffset: true
                }
        };
        i.fn.extend(
            {
                mousewheel: function (e)
                {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function (e)
                {
                    return this.unbind("mousewheel", e)
                }
            });

        function f(e)
        {
            var t = e || window.event,
                n = a.call(arguments, 1),
                r = 0,
                s = 0,
                u = 0,
                f = 0,
                d = 0,
                g = 0;
            e = i.event.fix(t);
            e.type = "mousewheel";
            if ("detail" in t)
            {
                u = t.detail * -1
            }
            if ("wheelDelta" in t)
            {
                u = t.wheelDelta
            }
            if ("wheelDeltaY" in t)
            {
                u = t.wheelDeltaY
            }
            if ("wheelDeltaX" in t)
            {
                s = t.wheelDeltaX * -1
            }
            if ("axis" in t && t.axis === t.HORIZONTAL_AXIS)
            {
                s = u * -1;
                u = 0
            }
            r = u === 0 ? s : u;
            if ("deltaY" in t)
            {
                u = t.deltaY * -1;
                r = u
            }
            if ("deltaX" in t)
            {
                s = t.deltaX;
                if (u === 0)
                {
                    r = s * -1
                }
            }
            if (u === 0 && s === 0)
            {
                return
            }
            if (t.deltaMode === 1)
            {
                var m = i.data(this, "mousewheel-line-height");
                r *= m;
                u *= m;
                s *= m
            }
            else if (t.deltaMode === 2)
            {
                var v = i.data(this, "mousewheel-page-height");
                r *= v;
                u *= v;
                s *= v
            }
            f = Math.max(Math.abs(u), Math.abs(s));
            if (!l || f < l)
            {
                l = f;
                if (p(t, f))
                {
                    l /= 40
                }
            }
            if (p(t, f))
            {
                r /= 40;
                s /= 40;
                u /= 40
            }
            r = Math[r >= 1 ? "floor" : "ceil"](r / l);
            s = Math[s >= 1 ? "floor" : "ceil"](s / l);
            u = Math[u >= 1 ? "floor" : "ceil"](u / l);
            if (c.settings.normalizeOffset && this.getBoundingClientRect)
            {
                var y = this.getBoundingClientRect();
                d = e.clientX - y.left;
                g = e.clientY - y.top
            }
            e.deltaX = s;
            e.deltaY = u;
            e.deltaFactor = l;
            e.offsetX = d;
            e.offsetY = g;
            e.deltaMode = 0;
            n.unshift(e, r, s, u);
            if (o)
            {
                clearTimeout(o)
            }
            o = setTimeout(h, 200);
            return (i.event.dispatch || i.event.handle).apply(this, n)
        }

        function h()
        {
            l = null
        }

        function p(e, t)
        {
            return c.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0
        }
        return n.exports
    }();
    var k = function ()
    {
        var e = {},
            t = {
                exports: e
            };
        (function (e, n)
        {
            "use strict";
            var i = function (e, t)
            {
                return new i.Instance(e, t ||
                    {})
            };
            i.defaults = {
                stop_browser_behavior:
                    {
                        userSelect: "none",
                        touchAction: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
            };
            i.HAS_POINTEREVENTS = e.navigator.pointerEnabled || e.navigator.msPointerEnabled;
            i.HAS_TOUCHEVENTS = "ontouchstart" in e;
            i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i;
            i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && e.navigator.userAgent.match(i.MOBILE_REGEX);
            i.EVENT_TYPES = {};
            i.DIRECTION_DOWN = "down";
            i.DIRECTION_LEFT = "left";
            i.DIRECTION_UP = "up";
            i.DIRECTION_RIGHT = "right";
            i.POINTER_MOUSE = "mouse";
            i.POINTER_TOUCH = "touch";
            i.POINTER_PEN = "pen";
            i.EVENT_START = "start";
            i.EVENT_MOVE = "move";
            i.EVENT_END = "end";
            i.DOCUMENT = e.document;
            i.plugins = i.plugins ||
                {};
            i.gestures = i.gestures ||
                {};
            i.READY = false;

            function r()
            {
                if (i.READY)
                {
                    return
                }
                i.event.determineEventTypes();
                i.utils.each(i.gestures, function (e)
                {
                    i.detection.register(e)
                });
                i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect);
                i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect);
                i.READY = true
            }
            i.utils = {
                extend: function l(e, t, i)
                {
                    for (var r in t)
                    {
                        if (e[r] !== n && i)
                        {
                            continue
                        }
                        e[r] = t[r]
                    }
                    return e
                },
                each: function (e, t, i)
                {
                    var r, s;
                    if ("forEach" in e)
                    {
                        e.forEach(t, i)
                    }
                    else if (e.length !== n)
                    {
                        for (r = 0, s = e.length; r < s; r++)
                        {
                            if (t.call(i, e[r], r, e) === false)
                            {
                                return
                            }
                        }
                    }
                    else
                    {
                        for (r in e)
                        {
                            if (e.hasOwnProperty(r) && t.call(i, e[r], r, e) === false)
                            {
                                return
                            }
                        }
                    }
                },
                hasParent: function (e, t)
                {
                    while (e)
                    {
                        if (e == t)
                        {
                            return true
                        }
                        e = e.parentNode
                    }
                    return false
                },
                getCenter: function u(e)
                {
                    var t = [],
                        n = [];
                    i.utils.each(e, function (e)
                    {
                        t.push(typeof e.clientX !== "undefined" ? e.clientX : e.pageX);
                        n.push(typeof e.clientY !== "undefined" ? e.clientY : e.pageY)
                    });
                    return {
                        pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                        pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
                    }
                },
                getVelocity: function c(e, t, n)
                {
                    return {
                        x: Math.abs(t / e) || 0,
                        y: Math.abs(n / e) || 0
                    }
                },
                getAngle: function f(e, t)
                {
                    var n = t.pageY - e.pageY,
                        i = t.pageX - e.pageX;
                    return Math.atan2(n, i) * 180 / Math.PI
                },
                getDirection: function h(e, t)
                {
                    var n = Math.abs(e.pageX - t.pageX),
                        r = Math.abs(e.pageY - t.pageY);
                    if (n >= r)
                    {
                        return e.pageX - t.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT
                    }
                    else
                    {
                        return e.pageY - t.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
                    }
                },
                getDistance: function p(e, t)
                {
                    var n = t.pageX - e.pageX,
                        i = t.pageY - e.pageY;
                    return Math.sqrt(n * n + i * i)
                },
                getScale: function d(e, t)
                {
                    if (e.length >= 2 && t.length >= 2)
                    {
                        return this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1])
                    }
                    return 1
                },
                getRotation: function g(e, t)
                {
                    if (e.length >= 2 && t.length >= 2)
                    {
                        return this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0])
                    }
                    return 0
                },
                isVertical: function m(e)
                {
                    return e == i.DIRECTION_UP || e == i.DIRECTION_DOWN
                },
                stopDefaultBrowserBehavior: function v(e, t)
                {
                    if (!t || !e || !e.style)
                    {
                        return
                    }
                    i.utils.each(["webkit", "khtml", "moz", "Moz", "ms", "o", ""], function (n)
                    {
                        i.utils.each(t, function (t)
                        {
                            if (n)
                            {
                                t = n + t.substring(0, 1).toUpperCase() + t.substring(1)
                            }
                            if (t in e.style)
                            {
                                e.style[t] = t
                            }
                        })
                    });
                    if (t.userSelect == "none")
                    {
                        e.onselectstart = function ()
                        {
                            return false
                        }
                    }
                    if (t.userDrag == "none")
                    {
                        e.ondragstart = function ()
                        {
                            return false
                        }
                    }
                }
            };
            i.Instance = function (e, t)
            {
                var n = this;
                r();
                this.element = e;
                this.enabled = true;
                this.options = i.utils.extend(i.utils.extend(
                    {}, i.defaults), t ||
                    {});
                if (this.options.stop_browser_behavior)
                {
                    i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior)
                }
                i.event.onTouch(e, i.EVENT_START, function (e)
                {
                    if (n.enabled)
                    {
                        i.detection.startDetect(n, e)
                    }
                });
                return this
            };
            i.Instance.prototype = {
                on: function y(e, t)
                {
                    var n = e.split(" ");
                    i.utils.each(n, function (e)
                    {
                        this.element.addEventListener(e, t, false)
                    }, this);
                    return this
                },
                off: function x(e, t)
                {
                    var n = e.split(" ");
                    i.utils.each(n, function (e)
                    {
                        this.element.removeEventListener(e, t, false)
                    }, this);
                    return this
                },
                trigger: function b(e, t)
                {
                    if (!t)
                    {
                        t = {}
                    }
                    var n = i.DOCUMENT.createEvent("Event");
                    n.initEvent(e, true, true);
                    n.gesture = t;
                    var r = this.element;
                    if (i.utils.hasParent(t.target, r))
                    {
                        r = t.target
                    }
                    r.dispatchEvent(n);
                    return this
                },
                enable: function _(e)
                {
                    this.enabled = e;
                    return this
                }
            };
            var s = null;
            var a = false;
            var o = false;
            i.event = {
                bindDom: function (e, t, n)
                {
                    var r = t.split(" ");
                    i.utils.each(r, function (t)
                    {
                        e.addEventListener(t, n, false)
                    })
                },
                onTouch: function w(e, t, n)
                {
                    var r = this;
                    this.bindDom(e, i.EVENT_TYPES[t], function l(u)
                    {
                        var c = u.type.toLowerCase();
                        if (c.match(/mouse/) && o)
                        {
                            return
                        }
                        else if (c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && u.which === 1)
                        {
                            a = true
                        }
                        else if (c.match(/mouse/) && !u.which)
                        {
                            a = false
                        }
                        if (c.match(/touch|pointer/))
                        {
                            o = true
                        }
                        var f = 0;
                        if (a)
                        {
                            if (i.HAS_POINTEREVENTS && t != i.EVENT_END)
                            {
                                f = i.PointerEvent.updatePointer(t, u)
                            }
                            else if (c.match(/touch/))
                            {
                                f = u.touches.length
                            }
                            else if (!o)
                            {
                                f = c.match(/up/) ? 0 : 1
                            }
                            if (f > 0 && t == i.EVENT_END)
                            {
                                t = i.EVENT_MOVE
                            }
                            else if (!f)
                            {
                                t = i.EVENT_END
                            }
                            if (f || s === null)
                            {
                                s = u
                            }
                            n.call(i.detection, r.collectEventData(e, t, r.getTouchList(s, t), u));
                            if (i.HAS_POINTEREVENTS && t == i.EVENT_END)
                            {
                                f = i.PointerEvent.updatePointer(t, u)
                            }
                        }
                        if (!f)
                        {
                            s = null;
                            a = false;
                            o = false;
                            i.PointerEvent.reset()
                        }
                    })
                },
                determineEventTypes: function T()
                {
                    var e;
                    if (i.HAS_POINTEREVENTS)
                    {
                        e = i.PointerEvent.getEvents()
                    }
                    else if (i.NO_MOUSEEVENTS)
                    {
                        e = ["touchstart", "touchmove", "touchend touchcancel"]
                    }
                    else
                    {
                        e = ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"]
                    }
                    i.EVENT_TYPES[i.EVENT_START] = e[0];
                    i.EVENT_TYPES[i.EVENT_MOVE] = e[1];
                    i.EVENT_TYPES[i.EVENT_END] = e[2]
                },
                getTouchList: function E(e)
                {
                    if (i.HAS_POINTEREVENTS)
                    {
                        return i.PointerEvent.getTouchList()
                    }
                    else if (e.touches)
                    {
                        return e.touches
                    }
                    else
                    {
                        e.identifier = 1;
                        return [e]
                    }
                },
                collectEventData: function k(e, t, n, r)
                {
                    var s = i.POINTER_TOUCH;
                    if (r.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, r))
                    {
                        s = i.POINTER_MOUSE
                    }
                    return {
                        center: i.utils.getCenter(n),
                        timeStamp: (new Date).getTime(),
                        target: r.target,
                        touches: n,
                        eventType: t,
                        pointerType: s,
                        srcEvent: r,
                        preventDefault: function ()
                        {
                            if (this.srcEvent.preventManipulation)
                            {
                                this.srcEvent.preventManipulation()
                            }
                            if (this.srcEvent.preventDefault)
                            {
                                this.srcEvent.preventDefault()
                            }
                        },
                        stopPropagation: function ()
                        {
                            this.srcEvent.stopPropagation()
                        },
                        stopDetect: function ()
                        {
                            return i.detection.stopDetect()
                        }
                    }
                }
            };
            i.PointerEvent = {
                pointers:
                    {},
                getTouchList: function ()
                {
                    var e = this;
                    var t = [];
                    i.utils.each(e.pointers, function (e)
                    {
                        t.push(e)
                    });
                    return t
                },
                updatePointer: function (e, t)
                {
                    if (e == i.EVENT_END)
                    {
                        this.pointers = {}
                    }
                    else
                    {
                        t.identifier = t.pointerId;
                        this.pointers[t.pointerId] = t
                    }
                    return Object.keys(this.pointers).length
                },
                matchType: function (e, t)
                {
                    if (!t.pointerType)
                    {
                        return false
                    }
                    var n = t.pointerType,
                        r = {};
                    r[i.POINTER_MOUSE] = n === t.MSPOINTER_TYPE_MOUSE || n === i.POINTER_MOUSE;
                    r[i.POINTER_TOUCH] = n === t.MSPOINTER_TYPE_TOUCH || n === i.POINTER_TOUCH;
                    r[i.POINTER_PEN] = n === t.MSPOINTER_TYPE_PEN || n === i.POINTER_PEN;
                    return r[e]
                },
                getEvents: function ()
                {
                    return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
                },
                reset: function ()
                {
                    this.pointers = {}
                }
            };
            i.detection = {
                gestures: [],
                current: null,
                previous: null,
                stopped: false,
                startDetect: function S(e, t)
                {
                    if (this.current)
                    {
                        return
                    }
                    this.stopped = false;
                    this.current = {
                        inst: e,
                        startEvent: i.utils.extend(
                            {}, t),
                        lastEvent: false,
                        name: ""
                    };
                    this.detect(t)
                },
                detect: function N(e)
                {
                    if (!this.current || this.stopped)
                    {
                        return
                    }
                    e = this.extendEventData(e);
                    var t = this.current.inst.options;
                    i.utils.each(this.gestures, function (n)
                    {
                        if (!this.stopped && t[n.name] !== false)
                        {
                            if (n.handler.call(n, e, this.current.inst) === false)
                            {
                                this.stopDetect();
                                return false
                            }
                        }
                    }, this);
                    if (this.current)
                    {
                        this.current.lastEvent = e
                    }
                    if (e.eventType == i.EVENT_END && !e.touches.length - 1)
                    {
                        this.stopDetect()
                    }
                    return e
                },
                stopDetect: function C()
                {
                    this.previous = i.utils.extend(
                        {}, this.current);
                    this.current = null;
                    this.stopped = true
                },
                extendEventData: function A(e)
                {
                    var t = this.current.startEvent;
                    if (t && (e.touches.length != t.touches.length || e.touches === t.touches))
                    {
                        t.touches = [];
                        i.utils.each(e.touches, function (e)
                        {
                            t.touches.push(i.utils.extend(
                                {}, e))
                        })
                    }
                    var n = e.timeStamp - t.timeStamp,
                        r = e.center.pageX - t.center.pageX,
                        s = e.center.pageY - t.center.pageY,
                        a = i.utils.getVelocity(n, r, s),
                        o, l;
                    if (e.eventType === "end")
                    {
                        o = this.current.lastEvent && this.current.lastEvent.interimAngle;
                        l = this.current.lastEvent && this.current.lastEvent.interimDirection
                    }
                    else
                    {
                        o = this.current.lastEvent && i.utils.getAngle(this.current.lastEvent.center, e.center);
                        l = this.current.lastEvent && i.utils.getDirection(this.current.lastEvent.center, e.center)
                    }
                    i.utils.extend(e,
                        {
                            deltaTime: n,
                            deltaX: r,
                            deltaY: s,
                            velocityX: a.x,
                            velocityY: a.y,
                            distance: i.utils.getDistance(t.center, e.center),
                            angle: i.utils.getAngle(t.center, e.center),
                            interimAngle: o,
                            direction: i.utils.getDirection(t.center, e.center),
                            interimDirection: l,
                            scale: i.utils.getScale(t.touches, e.touches),
                            rotation: i.utils.getRotation(t.touches, e.touches),
                            startEvent: t
                        });
                    return e
                },
                register: function P(e)
                {
                    var t = e.defaults ||
                        {};
                    if (t[e.name] === n)
                    {
                        t[e.name] = true
                    }
                    i.utils.extend(i.defaults, t, true);
                    e.index = e.index || 1e3;
                    this.gestures.push(e);
                    this.gestures.sort(function (e, t)
                    {
                        if (e.index < t.index)
                        {
                            return -1
                        }
                        if (e.index > t.index)
                        {
                            return 1
                        }
                        return 0
                    });
                    return this.gestures
                }
            };
            i.gestures.Drag = {
                name: "drag",
                index: 50,
                defaults:
                    {
                        drag_min_distance: 10,
                        correct_for_drag_min_distance: true,
                        drag_max_touches: 1,
                        drag_block_horizontal: false,
                        drag_block_vertical: false,
                        drag_lock_to_axis: false,
                        drag_lock_min_distance: 25
                    },
                triggered: false,
                handler: function O(e, t)
                {
                    if (i.detection.current.name != this.name && this.triggered)
                    {
                        t.trigger(this.name + "end", e);
                        this.triggered = false;
                        return
                    }
                    if (t.options.drag_max_touches > 0 && e.touches.length > t.options.drag_max_touches)
                    {
                        return
                    }
                    switch (e.eventType)
                    {
                        case i.EVENT_START:
                            this.triggered = false;
                            break;
                        case i.EVENT_MOVE:
                            if (e.distance < t.options.drag_min_distance && i.detection.current.name != this.name)
                            {
                                return
                            }
                            if (i.detection.current.name != this.name)
                            {
                                i.detection.current.name = this.name;
                                if (t.options.correct_for_drag_min_distance && e.distance > 0)
                                {
                                    var n = Math.abs(t.options.drag_min_distance / e.distance);
                                    i.detection.current.startEvent.center.pageX += e.deltaX * n;
                                    i.detection.current.startEvent.center.pageY += e.deltaY * n;
                                    e = i.detection.extendEventData(e)
                                }
                            }
                            if (i.detection.current.lastEvent.drag_locked_to_axis || t.options.drag_lock_to_axis && t.options.drag_lock_min_distance <= e.distance)
                            {
                                e.drag_locked_to_axis = true
                            }
                            var r = i.detection.current.lastEvent.direction;
                            if (e.drag_locked_to_axis && r !== e.direction)
                            {
                                if (i.utils.isVertical(r))
                                {
                                    e.direction = e.deltaY < 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
                                }
                                else
                                {
                                    e.direction = e.deltaX < 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT
                                }
                            }
                            if (!this.triggered)
                            {
                                t.trigger(this.name + "start", e);
                                this.triggered = true
                            }
                            t.trigger(this.name, e);
                            t.trigger(this.name + e.direction, e);
                            if (t.options.drag_block_vertical && i.utils.isVertical(e.direction) || t.options.drag_block_horizontal && !i.utils.isVertical(e.direction))
                            {
                                e.preventDefault()
                            }
                            break;
                        case i.EVENT_END:
                            if (this.triggered)
                            {
                                t.trigger(this.name + "end", e)
                            }
                            this.triggered = false;
                            break
                    }
                }
            };
            i.gestures.Hold = {
                name: "hold",
                index: 10,
                defaults:
                    {
                        hold_timeout: 500,
                        hold_threshold: 1
                    },
                timer: null,
                handler: function D(e, t)
                {
                    switch (e.eventType)
                    {
                        case i.EVENT_START:
                            clearTimeout(this.timer);
                            i.detection.current.name = this.name;
                            this.timer = setTimeout(function ()
                            {
                                if (i.detection.current.name == "hold")
                                {
                                    t.trigger("hold", e)
                                }
                            }, t.options.hold_timeout);
                            break;
                        case i.EVENT_MOVE:
                            if (e.distance > t.options.hold_threshold)
                            {
                                clearTimeout(this.timer)
                            }
                            break;
                        case i.EVENT_END:
                            clearTimeout(this.timer);
                            break
                    }
                }
            };
            i.gestures.Release = {
                name: "release",
                index: Infinity,
                handler: function I(e, t)
                {
                    if (e.eventType == i.EVENT_END)
                    {
                        t.trigger(this.name, e)
                    }
                }
            };
            i.gestures.Swipe = {
                name: "swipe",
                index: 40,
                defaults:
                    {
                        swipe_min_touches: 1,
                        swipe_max_touches: 1,
                        swipe_velocity: .7
                    },
                handler: function L(e, t)
                {
                    if (e.eventType == i.EVENT_END)
                    {
                        if (t.options.swipe_max_touches > 0 && e.touches.length < t.options.swipe_min_touches && e.touches.length > t.options.swipe_max_touches)
                        {
                            return
                        }
                        if (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity)
                        {
                            t.trigger(this.name, e);
                            t.trigger(this.name + e.direction, e)
                        }
                    }
                }
            };
            i.gestures.Tap = {
                name: "tap",
                index: 100,
                defaults:
                    {
                        tap_max_touchtime: 250,
                        tap_max_distance: 10,
                        tap_always: true,
                        doubletap_distance: 20,
                        doubletap_interval: 300
                    },
                handler: function M(e, t)
                {
                    if (e.eventType == i.EVENT_END && e.srcEvent.type != "touchcancel")
                    {
                        var n = i.detection.previous,
                            r = false;
                        if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance)
                        {
                            return
                        }
                        if (n && n.name == "tap" && e.timeStamp - n.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance)
                        {
                            t.trigger("doubletap", e);
                            r = true
                        }
                        if (!r || t.options.tap_always)
                        {
                            i.detection.current.name = "tap";
                            t.trigger(i.detection.current.name, e)
                        }
                    }
                }
            };
            i.gestures.Touch = {
                name: "touch",
                index: -Infinity,
                defaults:
                    {
                        prevent_default: false,
                        prevent_mouseevents: false
                    },
                handler: function j(e, t)
                {
                    if (t.options.prevent_mouseevents && e.pointerType == i.POINTER_MOUSE)
                    {
                        e.stopDetect();
                        return
                    }
                    if (t.options.prevent_default)
                    {
                        e.preventDefault()
                    }
                    if (e.eventType == i.EVENT_START)
                    {
                        t.trigger(this.name, e)
                    }
                }
            };
            i.gestures.Transform = {
                name: "transform",
                index: 45,
                defaults:
                    {
                        transform_min_scale: .01,
                        transform_min_rotation: 1,
                        transform_always_block: false
                    },
                triggered: false,
                handler: function R(e, t)
                {
                    if (i.detection.current.name != this.name && this.triggered)
                    {
                        t.trigger(this.name + "end", e);
                        this.triggered = false;
                        return
                    }
                    if (e.touches.length < 2)
                    {
                        return
                    }
                    if (t.options.transform_always_block)
                    {
                        e.preventDefault()
                    }
                    switch (e.eventType)
                    {
                        case i.EVENT_START:
                            this.triggered = false;
                            break;
                        case i.EVENT_MOVE:
                            var n = Math.abs(1 - e.scale);
                            var r = Math.abs(e.rotation);
                            if (n < t.options.transform_min_scale && r < t.options.transform_min_rotation)
                            {
                                return
                            }
                            i.detection.current.name = this.name;
                            if (!this.triggered)
                            {
                                t.trigger(this.name + "start", e);
                                this.triggered = true
                            }
                            t.trigger(this.name, e);
                            if (r > t.options.transform_min_rotation)
                            {
                                t.trigger("rotate", e)
                            }
                            if (n > t.options.transform_min_scale)
                            {
                                t.trigger("pinch", e);
                                t.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e)
                            }
                            break;
                        case i.EVENT_END:
                            if (this.triggered)
                            {
                                t.trigger(this.name + "end", e)
                            }
                            this.triggered = false;
                            break
                    }
                }
            };
            if (typeof t === "object" && typeof t.exports === "object")
            {
                t.exports = i
            }
            else
            {
                e.Hammer = i
            }
        })(this);
        return t.exports
    }();
    var S = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e,
            r = f,
            s = E,
            a = k,
            o = "scrollToFixed_setFixed",
            l = "scrollToFixed_resetFixed",
            u = "ontouchstart" in window,
            c = i(window);
        var h = r.extend(
            {
                attrs:
                    {},
                registers:
                    {},
                registerIndex: 0,
                setup: function ()
                {
                    var e = this;
                    c.bind("scroll", function ()
                    {
                        e._scrollFun()
                    })
                },
                bindEvents:
                    {
                        setFixed: o,
                        resetFixed: l
                    },
                add: function (e)
                {
                    var t = this;
                    i(e.element).each(function (n, r)
                    {
                        var s = i(this),
                            a = t.registerIndex++;
                        t.registers[a] = {
                            element: s,
                            parentElement: i(e.parentElement) || s.parent(),
                            parentFixedClassName: e.parentFixedClassName || "",
                            fixedDistanceTop: e.fixedDistanceTop || 0,
                            fixedClassName: e.fixedClassName || "",
                            fixedOffsetY: e.fixedOffsetY || 0,
                            triggerY: s.offset().top - (e.fixedOffsetY || 0),
                            hitBottom: e.hitBottom || false,
                            bottomHitBox: e.bottomHitBox ? i(e.bottomHitBox) : s.parent(),
                            isFixed: false
                        };
                        t._initialize(t.registers[a])
                    })
                },
                _initialize: function (e)
                {
                    var t = this,
                        n = c.scrollTop();
                    t._checkFixed(e, n);
                    if (e.isFixed)
                    {
                        t._checkHitBottom(e, n)
                    }
                    if (u)
                    {
                        if (i("#page").length > 0)
                        {
                            new a(i("#page")[0]).on("swipeup", function (t)
                            {
                                if (e.isFixed)
                                {
                                    e.element.css(
                                        {
                                            visibility: "hidden"
                                        })
                                }
                            });
                            new a(i("#page")[0]).on("swipedown", function (t)
                            {
                                e.element.css(
                                    {
                                        visibility: "visible"
                                    })
                            })
                        }
                    }
                },
                _scrollFun: function ()
                {
                    var e = this;
                    for (var t in e.registers)
                    {
                        e._checkFixed(e.registers[t], c.scrollTop())
                    }
                },
                _checkFixed: function (e, t)
                {
                    var n = this;
                    if (!e.isFixed)
                    {
                        if (t >= e.triggerY)
                        {
                            n._setScrollFixed(e)
                        }
                    }
                    else
                    {
                        if (t < e.triggerY)
                        {
                            n._cancelFixed(e)
                        }
                    }
                    if (e.isFixed)
                    {
                        n._checkHitBottom(e, t)
                    }
                },
                _setScrollFixed: function (e)
                {
                    var t = this,
                        n = e.element;
                    e.isFixed = true;
                    e.stylePosition = t._getInlineStyle(e.element, "position");
                    e.styleTop = t._getInlineStyle(e.element, "top");
                    e.parentElement.addClass(e.parentFixedClassName);
                    n.css(
                        {
                            position: "fixed",
                            top: e.fixedDistanceTop
                        }).addClass(e.fixedClassName).trigger(o, e)
                },
                _cancelFixed: function (e)
                {
                    var t = this;
                    e.isFixed = false;
                    e.parentElement.removeClass(e.parentFixedClassName);
                    e.element.css(
                        {
                            position: e.stylePosition,
                            top: e.styleTop
                        }).removeClass(e.fixedClassName).trigger(l, e)
                },
                _checkHitBottom: function (e, t)
                {
                    if (e.hitBottom)
                    {
                        var n = e.element.outerHeight(),
                            i = e.bottomHitBox.outerHeight(),
                            r = e.element.offset().top,
                            s = e.bottomHitBox.offset().top,
                            a = Number(e.element.css("top").slice(0, -2)),
                            o = i + s - (n + r) + a;
                        if (o < 0)
                        {
                            e._bottomHited = true;
                            e.element.css(
                                {
                                    top: e.fixedDistanceTop + o
                                })
                        }
                        else if (e._bottomHited)
                        {
                            e._bottomHited = false;
                            e.element.css(
                                {
                                    top: e.fixedDistanceTop
                                })
                        }
                    }
                },
                _getInlineStyle: function (e, t)
                {
                    var n = new RegExp("(?:.+?\\;\\s*)?" + t + "\\s*\\:\\s*([^;$]*?)(\\;|$).*", "i"),
                        i = e.get(0).style.cssText;
                    return n.test(i) ? RegExp.$1 : ""
                }
            });
        n.exports = (new h).render();
        return n.exports
    }();
    var N = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e;
        var r = f;
        var s = S;
        var a = h;
        var o = r.extend(
            {
                current: null,
                eachWidth: null,
                maxNum: null,
                setup: function ()
                {
                    var e = this;
                    e.menuMain = e.element.find("[data-role=menu-container]");
                    e.categoryList = e.element.find("[data-role=category-menu-lists]");
                    e.menuItem = e.element.find("[data-role=category-menu-item]");
                    this.init()
                },
                init: function ()
                {
                    this._initTabStyle();
                    this._addClickListener();
                    this._addFixedTopListener();
                    this._addWindowListener()
                },
                _addWindowListener: function ()
                {
                    var e = this;
                    i(window).resize(function ()
                    {
                        i(window).width() <= 760 ? e._getMSlide() : e._getPcSlide()
                    })
                },
                _initTabStyle: function ()
                {
                    var e = this;
                    var t = e._getQueryString("widgetId");
                    var n = e.element.find("[data-widgetid=" + t + "]");
                    if (n.length > 0)
                    {
                        n.first().addClass("active").siblings().removeClass("active")
                    }
                    i(window).width() <= 760 ? e._getMSlide() : e._getPcSlide()
                },
                _getMSlide: function ()
                {
                    this.element.find(".active")[0].scrollIntoView()
                },
                _getPcSlide: function ()
                {
                    var e = this;
                    e.len = e.menuItem.length;
                    if (i(window).width() >= 1200)
                    {
                        e.maxNum = 11
                    }
                    else if (i(window).width() >= 990)
                    {
                        e.maxNum = 9
                    }
                    else
                    {
                        e.maxNum = 5
                    }
                    e.current = e.element.find(".active").index() + 1;
                    e._resetEachWidth()
                },
                _resetEachWidth: function ()
                {
                    var e = this;
                    e.eachWidth = e.menuMain.width() / e.maxNum;
                    e.menuItem.css("width", e.eachWidth);
                    e._slideCenter()
                },
                _slideCenter: function ()
                {
                    var e = this;
                    var t = Math.ceil(e.maxNum / 2);
                    var n = (t - e.current) * e.eachWidth;
                    e.element.find("[data-role=lists-btn]").removeClass("disable");
                    if (t - e.current >= 0)
                    {
                        n = 0;
                        e.element.find(".prev-btn").addClass("disable")
                    }
                    else if (e.len - e.current < t)
                    {
                        n = (e.maxNum - e.len) * e.eachWidth;
                        e.element.find(".next-btn").addClass("disable")
                    }
                    e.categoryList.stop().animate(
                        {
                            marginLeft: n
                        });
                    if (e.maxNum < e.len)
                    {
                        e.element.find("[data-role=lists-btn]").show();
                        e._categoryBtn()
                    }
                },
                _categoryBtn: function ()
                {
                    var e = this;
                    var t = e.menuMain.width() - e.len * e.eachWidth;
                    e.element.on("click", "[data-role=lists-btn]", function ()
                    {
                        var n;
                        var r = Number(e.categoryList.css("marginLeft").slice(0, -2));
                        if (i(this).data("btn") == "prev")
                        {
                            n = r + e.eachWidth
                        }
                        else
                        {
                            n = r - e.eachWidth
                        }
                        e.element.find("[data-role=lists-btn]").removeClass("disable");
                        if (n >= 0)
                        {
                            e.categoryList.stop().animate(
                                {
                                    marginLeft: 0
                                });
                            i(this).addClass("disable")
                        }
                        else if (t >= n)
                        {
                            e.categoryList.stop().animate(
                                {
                                    marginLeft: t
                                });
                            i(this).addClass("disable")
                        }
                        else
                        {
                            e.categoryList.stop().animate(
                                {
                                    marginLeft: n
                                })
                        }
                    })
                },
                _addFixedTopListener: function ()
                {
                    var e = this;
                    s.add(
                        {
                            element: e.element,
                            parentElement: e.element.parent(),
                            parentFixedClassName: "category-fix"
                        });
                    e.element.bind(s.bindEvents.setFixed, function ()
                    {
                        if (i(window).width() > 760) e._resetEachWidth()
                    });
                    e.element.bind(s.bindEvents.resetFixed, function ()
                    {
                        if (i(window).width() > 760) e._resetEachWidth()
                    })
                },
                _addClickListener: function ()
                {
                    var e = this;
                    e.menuItem.on("click", function ()
                    {
                        i(this).addClass("active").siblings().removeClass("active");
                        e.current = e.element.find(".active").index() + 1;
                        if (i(window).width() > 760) e._slideCenter();
                        i("html,body").stop().animate(
                            {
                                scrollTop: 0
                            }, 500)
                    })
                },
                _getQueryString: function (e)
                {
                    var t = a.get(window.location.search.substr(1), e);
                    return t ? decodeURI(t) : ""
                }
            });
        n.exports = o;
        return n.exports
    }();
    var C = function ()
    {
        var t = {},
            n = {
                exports: t
            };
        var i = e;
        var r = l;
        var s = T;
        var a = N;
        i(document).ready(function ()
        {
            var e = i(".category-menu");
            if (e.length > 0)
            {
                e.each(function ()
                {
                    new a(
                        {
                            element: i(this)
                        })
                })
            }
            var t = i(".deals-container");
            if (t.length > 0)
            {
                t.each(function ()
                {
                    new s(
                        {
                            element: i(this)
                        })
                })
            }

            function n(e)
            {
                r.buttonClick(
                    {
                        projectId: 180153,
                        pageType: "flash_deals",
                        pageArea: e.pageArea,
                        buttonType: e.buttonType,
                        objectType: e.objectType,
                        objectValue: e.objectValue
                    })
            }
            i(".category-menu-lists").on("click", ".category-menu-item", function ()
            {
                var e = i(this).find(".menu-item-title").text();
                n(
                    {
                        pageArea: "category_list",
                        buttonType: "category",
                        objectType: "categoryName",
                        objectValue: e
                    })
            });
            i(".deals-discount-status").on("click", ".status-up", function ()
            {
                n(
                    {
                        pageArea: "tab",
                        buttonType: "tab",
                        objectType: "tab_name",
                        objectValue: "upcoming"
                    })
            })
        });
        return n.exports
    }()
})();