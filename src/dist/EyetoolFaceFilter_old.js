
var JEEFACEFILTERAPI = (function () {
window.JEEFACEFILTERAPIGEN = function () {
    function yb() {
        var a = null, c = null, d = null, e = 0; this.kd = function (f) { return a[f] }; this.Jd = function (f) { var k = null; e = f.length; a = f.map(function (l, n) { l = Object.assign({}, l, { index: n, parent: this, Na: k, td: n === e - 1 }); return k = n = 0 === n ? Kb.instance(l) : Lb.instance(l) }); c = a[0]; d = a[e - 1]; a.forEach(function (l, n) { 0 !== n && l.Ed() }) }; this.I = function (f, k) { var l = k; a.forEach(function (n) { l = n.I(l, f) }); return l }; this.Tb = function () { return c.A() }; this.Vb = function () { return d.ld() }; this.Ld = function (f) { d.Uc(f) };
        this.Sb = function () { return d.Sb() }; this.h = function () { a && (a.forEach(function (f) { f.h() }), d = c = a = null, e = 0) }
    } var Ma, Na, Oa, Wa, Xa, Pa, Ya, Za, $a, ab, ib, jb, kb, lb; function mb(a, c) { var d = c % 8; return a[(c - d) / 8] >> 7 - d & 1 } function Mb(a) {
        var c = JSON.parse(a); a = c.ne; var d = c.nf, e = c.n; var f = "undefined" === typeof btoa ? Buffer.from(c.data, "base64").toString("latin1") : atob(c.data); var k = f.length; c = new Uint8Array(k); for (var l = 0; l < k; ++l)c[l] = f.charCodeAt(l); f = new Float32Array(e); k = new Float32Array(d); l = a + d + 1; for (var n = 0; n < e; ++n) {
            for (var p =
                l * n, y = 0 === mb(c, p) ? 1 : -1, m = p + 1, q = 1, x = 0, z = m + a - 1; z >= m; --z)x += q * mb(c, z), q *= 2; m = x; p = p + 1 + a; q = k.length; x = 0; for (z = p; z < p + q; ++z)k[x] = mb(c, z, !0), ++x; for (q = p = 0; q < d; ++q)p += k[q] * Math.pow(2, -q - 1); f[n] = 0 === p && 0 === m ? 0 : y * (1 + p) * Math.pow(2, 1 + m - Math.pow(2, a - 1))
        } return f
    } function nb() { return -1 !== [ba.play, ba.pause].indexOf(ea) } function Nb(a) { if (ea !== ba.pause) { var c = ea === ba.play ? H.Aa : I.Ec; bb = setTimeout(zb.bind(null, a), c) } } function ob() {
        if (ea === ba.play) return !1; ea = ba.play; P.timestamp = Date.now(); Qa && window.cancelAnimationFrame(Qa);
        zb(0)
    } function Ab() { if (ea !== ba.play) return !1; bb && (clearTimeout(bb), bb = null); Qa && (window.cancelAnimationFrame(Qa), Qa = null); ea = ba.pause; return !0 } function Ca(a, c, d, e, f) { a = 4 * (3 * c + a) + d; return e + (U.buffer[a] / 255 + U.buffer[a + 12] / 65025) * (f - e) } function Bb() { b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1); ra.U(); Q.reset(); R.reset(); u.ka(); u.Mb(); b.disable(b.DEPTH_TEST); b.disable(b.BLEND); Q.oa(); u.xa() } function zb() {
        if (ea !== ba.pause) {
            u.Mb(); Q.reset(); Q.oa(); b.disable(b.DEPTH_TEST); b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,
                !1); ra.U(); u.xa(); if (!t.kb) a: { if (t.jb) { if (!t.element.needsUpdate) break a; t.W.Xd(t.element.arrayBuffer); t.element.needsUpdate = !1 } else { var a = t.element.currentTime, c = a - t.Oa; 0 > c && (t.Oa = a); if (1E3 * c < I.Zd) break a; t.Oa += c; t.W.refresh() } u.set("s48"); t.ba.J(); t.W.b(0); Q.g(!1, !1) } if (E.L.length > P.F) E.L.splice(0, E.L.length - P.F); else for (; E.L.length < P.F;)E.L.push(0); if (1 !== E.i) if (ma.every(pb)) { for (var d = a = c = 0; d < ma.length; ++d)ma[d].detected > c && (c = ma[d].detected, a = 0); for (c = 0; c < P.F; ++c)E.L[c] = a } else {
                    a = E.dc; c = 0; for (d =
                        !1; c < P.F; ++c) { if (pb(ma[a])) if (d) { do ++a === E.i && (a = 0); while (pb(ma[a])) } else d = !0; E.L[c] = a++; a >= E.i && (a = 0) } E.dc = a
                } for (a = 0; a < P.F; ++a)E.$ = E.L[a], E.qb = (.5 + E.$) / E.i, E.ac = E.L.lastIndexOf(E.$) === a, u.set("s49"), H.ga && u.B("u36", ma[E.$].rz), 1 !== E.i && u.B("u35", E.qb), V.Ga.J(), t.ba.b(0), U.Qa.b(1), Q.g(!1, !1), V.Ga.b(0), za.I(!1, V.Ga); a = Date.now(); P.ra = a - P.timestamp; P.timestamp = a; -1 !== W.nDetectsPerLoop ? P.F = W.nDetectsPerLoop : (a = I.Ta, P.hc = P.ob / P.ra, P.ic = P.hc * a + P.ic * (1 - a), P.kc = 1E3 / P.ra, P.ia = P.kc * I.Ta + P.ia * (1 - I.Ta), P.ia >
                    I.ea[1] ? (a = I.za[1], 1 < E.i && (++a, c = ma.filter(Ob).length, a *= Math.max(1, c)), P.F = Math.min(P.F + 1, a), P.ia = (I.ea[0] + I.ea[1]) / 2) : P.ia < I.ea[0] && (P.F = Math.max(P.F - 1, I.za[0]), P.ia = (I.ea[0] + I.ea[1]) / 2)); ra.G(); b.viewport(0, 0, 3, 2 * E.i); u.set("s47"); U.Qa.b(0); Q.g(!1, !1); b.readPixels(0, 0, 3, 2 * E.i, b.RGBA, b.UNSIGNED_BYTE, U.buffer); for (a = 0; a < E.i; ++a)if (-1 !== E.L.indexOf(a)) {
                        var e = a; c = Ta[e]; var f = [e]; d = ma[e]; var k = qb[e], l = 2 * e; c.Da = Ca(1, l, 3, 0, 1); d.detected = pa.P(d.detected, c.Da, I.Bc); if (c.Da < I.nb) H.ga && (d.rz = 0); else {
                            var n =
                                U.ya; c.x = Ca(0, l, 1, -1, 1); c.y = Ca(0, l, 2, -1, 1); c.T = Ca(0, l, 3, 0, 1); c.tb = Ca(1, l, 0, -n[0], n[0]); c.ub = Ca(1, l, 1, -n[1], n[1]); c.va = Ca(1, l, 2, -n[2], n[2]); for (n = 0; n < U.R; ++n)c.Ob[n] = U.ta[n](Ca(2, l, n, 0, 1)); f.Za = c.x - d.x; f.$a = c.y - d.y; f.Ya = c.T - d.s; f.Va = c.tb - d.rx; f.Wa = c.ub - d.ry; f.Xa = H.ga ? c.va : c.va - d.rz; f = (1 - cb.Ia(sa.translationFactorRange[0], sa.translationFactorRange[1], Math.sqrt(f.Za * f.Za + f.$a * f.$a + f.Ya * f.Ya) / P.ra)) * (1 - cb.Ia(sa.rotationFactorRange[0], sa.rotationFactorRange[1], Math.sqrt(f.Va * f.Va + f.Wa * f.Wa + f.Xa * f.Xa) /
                                    P.ra)) * cb.Ia(sa.qualityFactorRange[0], sa.qualityFactorRange[1], c.Da); e = k[++rb[e] % k.length] = f; for (l = 0; l < k.length; ++l)e = Math.min(e, k[l]); e = Math.max(.5, e); f = Math.min(e, f); k = pa.P(sa.alphaRange[1], sa.alphaRange[0], Math.pow(f, I.Dc)); d.x = pa.P(d.x, c.x, k); d.y = pa.P(d.y, c.y, k); d.s = pa.P(d.s, c.T, k); d.rx = pa.P(d.rx, c.tb, k); d.ry = pa.P(d.ry, c.ub, k); d.rz = H.ga ? d.rz + k * c.va : pa.P(d.rz, c.va, k); k = Math.max(k, I.Cc); for (e = 0; e < U.R; ++e)d.expressions[e] = pa.P(d.expressions[e], c.Ob[e], k); ++c.La
                        }
                    } ra.Wd(); ra.reset(); R.reset(); b.enable(b.DEPTH_TEST);
            H.Ca && (1 === E.i ? H.Ca(ma[0]) : H.Ca(ma)); b.disable(b.BLEND); ea === ba.play && (Qa = window.requestAnimationFrame(Nb))
        }
    } function Pb() {
        function a(d) { for (var e = [], f = 0; f < E.i; ++f)e.push(JSON.parse(JSON.stringify(d))); return e } t.ba = R.instance({ isPot: !1, isLinear: !0, isFloat: !1, width: V.M, height: V.O }); V.Ga = R.instance({ isPot: !0, isFloat: !1, width: za.Tb() }); var c = {
            width: 3, height: E.i, isFloat: !0, isPot: !1, array: function (d) {
                for (var e = new Float32Array(d.length * E.i), f = 0, k; f < E.i; ++f)for (k = 0; k < d.length; ++k)e[f * d.length + k] = d[k];
                return e
            }(new Float32Array([0, W.borderWidth, W.borderHeight, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
        }; U.Qa = Qb.instance(c); U.buffer = new Uint8Array(8 * c.width * E.i); Ta = a({ Da: 0, x: 0, y: 0, T: 1, tb: 0, ub: 0, va: 0, Ob: new Float32Array(U.R), La: 0 }); ma = a({ detected: 0, x: 0, y: 0, s: 1, rx: 0, ry: 0, rz: 0, expressions: new Float32Array(U.R) }); a({ Za: 0, $a: 0, Ya: 0, Va: 0, Wa: 0, Xa: 0 })
    } function sb() {
        u.K("s49", [{ type: "1i", name: "u1", value: 0 }, { type: "1i", name: "u33", value: 1 }, { type: "2f", name: "u34", value: V.v }, { type: "1f", name: "u35", value: .5 }, { type: "1f", name: "u36", value: 0 }]);
        u.K("s50", [{ type: "1i", name: "u37", value: 0 }, { type: "1i", name: "u33", value: 1 }, { type: "1f", name: "u40", value: I.Ud }, { type: "1f", name: "u41", value: I.yc }, { type: "1f", name: "u42", value: I.xc }, { type: "3f", name: "u39", value: [U.ca[0] * V.v[0], U.ca[1] * V.v[1], U.ca[2]] }, { type: "1f", name: "u35", value: .5 }, { type: "1f", name: "u43", value: 1 }, { type: "1f", name: "u36", value: 0 }]); var a = [{ type: "1i", name: "u37", value: 0 }]; u.K("s51", a); u.K("s52", a); u.K("s47", [{ type: "1i", name: "u33", value: 0 }, { type: "1f", name: "u46", value: V.v[0] }, {
            type: "2f", name: "u45",
            value: [0, .5 / E.i]
        }])
    } function tb() { var a = za.Tb(), c = V.M / a; Pa = W.minScale * c; Ya = W.maxScale * c; Za = (1 - 2 * W.borderWidth) / W.nStepsX; $a = (1 - 2 * W.borderHeight) / W.nStepsY; ab = (Ya - Pa) / W.nStepsScale; ib = W.borderWidth; jb = W.borderHeight; kb = 1 - W.borderWidth; lb = 1 - W.borderHeight; V.v[0] = a / V.M; V.v[1] = a / V.O; Ma = W.borderWidth; Na = W.borderHeight; Oa = Pa; Wa = W.borderWidth; Xa = W.borderHeight; ub = Pa } function Rb(a) {
        if (H.la) Cb("string" === typeof H.la ? JSON.parse(H.la) : H.la, a); else {
            var c = H.zb; "JSON" !== c.toUpperCase().split(".").pop() && (c += I.save);
            Db.get(c, function (d) { d = JSON.parse(d); Cb(d, a) })
        }
    } function Cb(a, c) { if (a.exportData) { var d = a.exportData; d.thetaXYZfactor && (U.ya = d.thetaXYZfactor); d.trackingDxysFactor && (U.ca = d.trackingDxysFactor); "undefined" !== typeof d.nExpressions && (U.R = d.nExpressions) } U.R || (U.R = I.jc); if (!U.ta) for (U.ta = [], d = 0; d < U.R; ++d)U.ta.push(I.dd); c(a) } function Sb() {
        if (Aa.o({ Ua: H.V, width: V.M, height: V.O, debug: !1, lc: function () { Da("GLCONTEXT_LOST") }, antialias: !0, premultipliedAlpha: !0 })) { if (Aa.qd()) return !0; Da("GL_INCOMPATIBLE"); return !1 } Da("GL_INCOMPATIBLE");
        return !1
    } function pb(a) { return a.detected <= I.nb } function Ob(a) { return a.detected > I.nb } function Eb(a, c, d, e) { return d > a ? Math.max(0, a + c / 2 - (d - e / 2)) : Math.max(0, d + e / 2 - (a - c / 2)) } function Tb() { return Ta.some(function (a, c) { if (c === E.$) return !1; c = Ta[E.$]; if (c.La > a.La || 3 > a.La || Eb(c.x, c.T, a.x, a.T) < I.ec * c.T) return !1; var d = V.M / V.O; return Eb(c.y, c.T * d, a.y, a.T * d) > I.ec * c.T * d }) } function Ub() {
        var a = E.$; U.Qa.Nd(1); 1 !== E.i && (b.viewport(0, 0, 3, E.i), u.set("s0"), u.rc("u1", 1), Q.g(!1, !1), u.rc("u1", 0)); b.viewport(0, a, 1, 1); u.set("s50");
        H.ga && u.B("u36", ma[a].rz); 1 !== E.i && u.B("u35", E.qb); if (1 < E.i) { var c = Tb() ? 0 : 1; u.B("u43", c) } u.Pd("u38", Wa, Xa, ub); Q.g(!1, !1); E.ac && (b.viewport(1, a, 1, 1), u.set("s51"), Q.g(!1, !1), b.viewport(2, a, 1, 1), u.set("s52"), Q.g(!1, !1)); Oa += ab; Oa > Ya && (Ma += Za, Oa = Pa, Ma > kb && (Ma = ib, Na += $a, Na > lb && (Na = jb))); Wa = Ma + .5 * (Math.random() - .5) * Za; Xa = Na + .5 * (Math.random() - .5) * $a; ub = Oa + .5 * (Math.random() - .5) * ab
    } function Fb() {
    t.W && t.W.remove(); t.jb = t.element.isFakeVideo ? !0 : !1; t.W = R.instance(Object.assign({ isPot: !1, isFloat: !1 }, t.jb ? {
        isFlipY: !1,
        array: t.element.arrayBuffer, width: t.element.videoWidth, height: t.element.videoHeight, isKeepArray: !0
    } : { D: t.element }))
    } function Ga() { u.K("s48", [{ type: "1i", name: "u1", value: 0 }, { type: "mat2", name: "u32", value: t.m }]) } function Ha() {
    t.C[0] = .5; t.C[1] = .5; var a = t.v[1] / t.v[0], c = Aa.N() / Aa.A(); 90 === Math.abs(ha.rotate) && (a = 1 / a); a > c ? t.C[1] *= c / a : t.C[0] *= a / c; u.K("s50", [{ name: "u44", type: "1f", value: c }]); t.m[0] = 0; t.m[1] = 0; t.m[2] = 0; t.m[3] = 0; switch (ha.rotate) {
        case 0: t.m[0] = t.C[0]; t.m[3] = t.C[1]; break; case 180: t.m[0] = -t.C[0];
            t.m[3] = -t.C[1]; break; case 90: t.m[1] = t.C[0]; t.m[2] = -t.C[1]; break; case -90: t.m[1] = -t.C[0], t.m[2] = t.C[1]
    }ha.flipX && (t.m[0] *= -1, t.m[2] *= -1)
    } function vb() { var a = t.element.videoWidth, c = t.element.videoHeight, d = t.v[0] !== a || t.v[1] !== c; d && (t.v[0] = a, t.v[1] = c); return d } function db(a, c) { if (ea === ba.error) return !1; t.element = a; vb(); c && c(); return !0 } function Gb(a, c, d) {
        a && a(); t.qa = {
            video: {
                facingMode: { ideal: ha.facingMode }, width: { min: ha.minWidth, max: ha.maxWidth, ideal: ha.idealWidth }, height: {
                    min: ha.minHeight, max: ha.maxHeight,
                    ideal: ha.idealHeight
                }
            }, audio: !1
        }; ha.deviceId && (t.qa.deviceId = ha.deviceId); S.get(t.element ? t.element : S.nd(), function (e) { c && c(e); d(e) }, function () { 
            //if camera is unavailable choose phote
            console.log("here could be choosing photo")
            choosePhoto()
            document.getElementById('loader').remove();
            document.getElementById('logo').remove();
            // Da("WEBCAM_UNAVAILABLE") 
        }, t.qa)
    } function Da(a) { ea !== ba.error && (ea = ba.error, H.pa && H.pa(a)) } var pa = {
        Te: function (a) { return Math.ceil(Math.log2(a)) }, wd: function (a) { return Math.log2(a) }, ff: function (a) { a = Math.log2(a); return a === Math.floor(a) }, he: function (a) { var c = [0, 0, 0, 0]; a.forEach(function (d) { c[0] += d[0]; c[1] += d[1]; c[2] += d[2]; c[3] += d[3] }); return c }, ie: function (a,
            c, d) { return Math.min(Math.max(a, c), d) }, me: function (a) { return a * Math.PI / 180 }, mf: function (a, c) { c = Math.pow(10, c); return Math.round(a * c) / c }, pf: function (a) { return Math.round(1E6 * a) / 1E6 }, Ue: function (a, c) { return (100 * a / c).toFixed(3) }, P: function (a, c, d) { return a * (1 - d) + c * d }, Zc: function (a, c) { return pa.Qc(a - c) }, Qc: function (a) { for (; a > Math.PI;)a -= 2 * Math.PI; for (; a <= -Math.PI;)a += 2 * Math.PI; return a }, pe: function (a, c) { return Math.abs(pa.Zc(a, c)) }, $d: function (a, c) {
                return Math.atan2(Math.sin(a) + Math.sin(c), Math.cos(a) +
                    Math.cos(c))
            }
    }, Db = {
        get: function (a, c, d) { var e = new XMLHttpRequest; e.open("GET", a, !0); e.withCredentials = !1; e.onreadystatechange = function () { 4 === e.readyState && (200 === e.status || 0 === e.status ? c(e.responseText) : "undefined" !== typeof d && d(e.status)) }; e.send() }, Pe: function (a, c) { Db.get(a, function (d) { c(JSON.parse(d)) }) }, kf: function (a, c, d) {
            var e = new XMLHttpRequest; e.open("POST", a, !0); e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); e.onreadystatechange = function () {
            4 !== e.readyState || 200 !== e.status &&
                0 !== e.status || d(e.responseText)
            }; e.send(c)
        }, Ge: function (a, c) { var d = new XMLHttpRequest; d.open("POST", a, !0); d.responseType = "arraybuffer"; d.onload = function () { c(d.response) }; d.send() }
    }, cb = {
        Af: function (a, c, d) { a = Math.min(Math.max((d - a) / (c - a), 0), 1); return a * a * (3 - 2 * a) }, Ia: function (a, c, d) { return Math.min(Math.max((d - a) / (c - a), 0), 1) }, Ae: function (a, c, d, e) { return Math.pow(Math.min(Math.max((e - a) / (c - a), 0), 1), d) }, Ef: function () { return 0 }, jf: function () { return 1 }, hf: function (a) { return a }, xe: function (a) { return a * a },
        Ce: function (a) { return a * (2 - a) }, ue: function (a) { return .5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a }, se: function (a) { return a * a * a }, Be: function (a) { return --a * a * a + 1 }, te: function (a) { return .5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1 }, ye: function (a) { return a * a * a * a }, De: function (a) { return 1 - --a * a * a * a }, ve: function (a) { return .5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a }, ze: function (a) { return a * a * a * a * a }, Ee: function (a) { return 1 + --a * a * a * a * a }, we: function (a) { return .5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a }
    }, Vb = {
        gd: function (a, c, d) {
            switch (a) {
                case "relu": return d + "=max(vec4(0.,0.,0.,0.)," +
                    c + ");"; case "elu": return d + "=mix(exp(-abs(" + c + "))-vec4(1.,1.,1.,1.)," + c + ",step(0.," + c + "));"; case "elu01": return d + "=mix(0.1*exp(-abs(" + c + "))-vec4(0.1,0.1,0.1,0.1)," + c + ",step(0.," + c + "));"; case "arctan": return d + "=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;"; case "copy": return ""; default: return !1
            }
        }
    }, u = function () {
        function a(g, w) { g = b.createShader(g); b.shaderSource(g, w); b.compileShader(g); return b.getShaderParameter(g, b.COMPILE_STATUS) ? g : !1 } function c(g, w) {
            g = a(b.VERTEX_SHADER, g); w = a(b.FRAGMENT_SHADER,
                w); f.push(g, w); var A = b.createProgram(); b.attachShader(A, g); b.attachShader(A, w); b.linkProgram(A); return A
        } function d(g) {
        void 0 === g.da && (g.da = "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}"); void 0 === g.Ba && (g.Ba = ["a0"]); void 0 === g.ma && (g.ma = [2]); if (void 0 === g.precision || "highp" === g.precision) g.precision = y; g.id = n++; void 0 !== g.Id && g.Id.forEach(function (A, Y) { g.a = g.a.replace(A, g.Pa[Y]) }); g.yb = 0; g.ma.forEach(function (A) { g.yb += 4 * A });
            g.ua = c(g.da, "precision " + g.precision + " float;\n" + g.a); g.j = {}; g.c.forEach(function (A) { g.j[A] = b.getUniformLocation(g.ua, A) }); g.attributes = {}; g.na = []; g.Ba.forEach(function (A) { var Y = b.getAttribLocation(g.ua, A); g.attributes[A] = Y; g.na.push(Y) }); if (g.f) { b.useProgram(g.ua); l = g; k = g.id; for (var w in g.f) b.uniform1i(g.j[w], g.f[w]) } g.hb = !0
        } function e(g) { Ia.Od(G); k !== g.id && (G.ka(), k = g.id, l = g, b.useProgram(g.ua), g.na.forEach(function (w) { 0 !== w && b.enableVertexAttribArray(w) })) } var f = [], k = -1, l = null, n = 0, p = !1, y = "highp",
            m = ["u1"], q = ["u0"], x = { u1: 0 }, z = { u0: 0 }, T = { u1: 0, u2: 1 }, M = { u3: 0 }, F = {
                s0: { a: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", c: m, f: x }, s1: { a: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", c: m, f: x, precision: "lowp" }, s2: { a: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}", c: ["u1", "u2"], f: T }, s3: {
                    a: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}",
                    c: m, f: x
                }, s4: { a: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}", c: ["u1", "u2"], f: T }, s5: { a: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}", c: m, f: x }, s6: { a: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}", c: m, f: x }, s7: {
                    a: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}",
                    c: ["u0", "u4"], f: z
                }, s8: { a: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}", c: ["u0", "u4"], f: z }, s9: { a: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}", c: m, f: x }, s10: {
                    a: "uniform sampler2D u1,u5;uniform float u6;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u5,vv0);gl_FragColor=mix(b,a,u6*f);}",
                    c: ["u1", "u5", "u6"], f: { u1: 0, u5: 1 }
                }, s11: { a: "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u7)+texture2D(u1,vv0+u7*vec2(1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,1.)));}", c: ["u1", "u7"], f: x }, s12: {
                    a: "uniform sampler2D u1;uniform vec4 u8;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u8);gl_FragColor=j(a);}",
                    c: ["u1", "u8"], f: x
                }, s13: { a: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}", c: q, f: z }, s14: { a: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}", c: q, f: z }, s15: { a: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}", c: q, f: z }, s16: {
                    a: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",
                    c: q, f: z
                }, s17: { a: "uniform sampler2D u0,u6,u9;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u6,vv0),d=texture2D(u9,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}", c: ["u0", "u6", "u9"], f: { u0: 0, u6: 1, u9: 2 } }, s18: { a: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}", c: q, f: z }, s19: {
                    a: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}",
                    c: q, f: z
                }, s20: { a: "uniform sampler2D u0,u10;uniform float u11;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u10,e);float b=u11*u11;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}", c: ["u0", "u10", "u11"], f: { u0: 0, u10: 1 } }, s21: {
                    a: "uniform sampler2D u1;uniform vec2 u12;varying vec2 vv0;void main(){float a=u12.x*u12.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u12.y),f=floor(u12.x*fract(b*u12.y)),g=(f*u12.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
                    c: ["u1", "u12"], f: x
                }, s22: { a: "uniform sampler2D u13,u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u15,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u13,b),f=texture2D(u14,c);gl_FragColor=d*f;}", c: ["u13", "u14", "u15"], f: { u14: 0, u13: 1, u15: 2 } }, s23: { a: "uniform float u16;uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec2 a=fract(vv0*u16);vec4 b=texture2D(u13,vv0),c=texture2D(u14,a);gl_FragColor=b*c;}", c: ["u14", "u13", "u16"], f: { u14: 0, u13: 1 } }, s24: {
                    a: "uniform float u16;uniform sampler2D u13,u14,u17,u18,u19,u20;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u16,l=floor(h),c=h-l;vec4 m=texture2D(u13,vv0),d=texture2D(u14,c),a=texture2D(u20,vv0);a=a*255.;vec4 n=texture2D(u17,c),o=texture2D(u18,c),p=texture2D(u19,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}",
                    c: "u13 u14 u16 u20 u17 u18 u19".split(" "), f: { u14: 0, u13: 1, u20: 3, u17: 4, u18: 5, u19: 6 }
                }, s25: {
                    a: "uniform sampler2D u13,u14,u21;uniform float u16,u22,u23,u24;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u22*vv0),b=u22*vv0-a;float c=u16/u22;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u22;float k=u22*u24/u16;vec2 l=k*d,h=(l+f*u23)/u24,i=step(h,j);vec4 m=texture2D(u13,g),n=texture2D(u14,h),o=m*n*i.x*i.y,p=texture2D(u21,g);gl_FragColor=o*u23*u23+p;}", c: "u13 u14 u16 u22 u23 u24 u21".split(" "), f: {
                        u14: 0,
                        u13: 1, u21: 2
                    }
                }, s26: { a: "uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec4 a=texture2D(u13,vv0),b=texture2D(u14,vv0);gl_FragColor=a*b;}", c: ["u13", "u14"], f: { u14: 0, u13: 1 } }, s27: { a: "uniform sampler2D u1,u21;uniform float u25;varying vec2 vv0;void main(){gl_FragColor=texture2D(u21,vv0)+u25*texture2D(u1,vv0);}", c: ["u1", "u21", "u25"], f: { u1: 0, u21: 1 } }, s28: {
                    a: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
                    c: m, f: x, precision: "lowp"
                }, s29: { a: "varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}", c: ["u1", "u26"], f: x, precision: "lowp" }, s30: {
                    a: "varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
                    c: ["u1", "u26"], f: x, precision: "lowp"
                }, s31: {
                    a: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u27))*2.,b-=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,b+=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u27))*2.,b+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
                    c: ["u1", "u2", "u27"], f: T
                }, s32: { a: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u27,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}", c: ["u1", "u2", "u27"], f: T }, s33: {
                    a: "uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u7*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*h),d=texture2D(u3,a+u7*i),j=texture2D(u3,a+u7),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
                    c: ["u3", "u7"], f: M
                }, s34: { a: "uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*k),d=texture2D(u3,a+u7*l),g=texture2D(u3,a+u7),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u7*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u7*m),d=f(a+u7*2.),g=f(a+u7*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}", c: ["u3", "u7"], f: M }, s35: {
                    a: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",
                    c: ["u1"], f: x, precision: "lowp"
                }, s36: { a: "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u7)+2002./e*texture2D(u1,vv0-2.*u7)+3003./e*texture2D(u1,vv0-u7)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u7)+2002./e*texture2D(u1,vv0+2.*u7)+1001./e*texture2D(u1,vv0+3.*u7);gl_FragColor=a;}", c: ["u7", "u1"], f: x, precision: "lowp" }, s37: {
                    a: "uniform sampler2D u1,u28,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u28,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",
                    c: ["u1", "u28", "u29"], f: { u1: 0, u28: 1, u29: 2 }
                }
            }, D = {
                s38: {
                    a: "uniform float u16,u30;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u21,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u16,xyTo=floor(vv0*u16+eps2);float weightSize=toSparsity*u16;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u16,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                    c: ["u16", "u13", "u14", "u21", "u30"], Pa: ["1.1111", "gl_FragColor\\*=2.2222;"]
                }, s39: {
                    a: "uniform float u16,u30,u24;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u21,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u24,xyTo=floor(vv0*u16+eps2);float weightSize=fromSparsity*u24;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u16;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u24,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                    c: "u16 u24 u13 u14 u21 u30".split(" "), Pa: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
                }
            }, G = {
                lb: function () { return p }, o: function () { if (!p) { y = "highp"; for (var g in F) d(F[g], g); u.set("s0"); b.enableVertexAttribArray(0); g = Ua.o(); p = !0; return g } }, Ac: function (g) { g.forEach(function (w) { G.Bb(w) }) }, Bb: function (g) { F[g.id] = g; d(g, g.id) }, Xb: function (g, w, A) { w || (w = g); F[w] = Object.create(D[g]); F[w].sd = !0; D[g].Pa && D[g].Pa.forEach(function (Y, na) { F[w].a = F[w].a.replace(new RegExp(Y, "g"), A[na]) }); d(F[w], w) }, set: function (g) { e(F[g]) },
                cd: function (g) { return "undefined" === typeof F[g] ? !1 : F[g].hb }, ka: function () { -1 !== k && (k = -1, l.na.forEach(function (g) { 0 !== g && b.disableVertexAttribArray(g) })) }, wb: function () { var g = 0; l.na.forEach(function (w, A) { A = l.ma[A]; b.vertexAttribPointer(w, A, b.FLOAT, !1, l.yb, g); g += 4 * A }) }, Mb: function () { b.enableVertexAttribArray(0) }, xa: function () { b.vertexAttribPointer(l.na[0], 2, b.FLOAT, !1, 8, 0) }, rc: function (g, w) { b.uniform1i(l.j[g], w) }, B: function (g, w) { b.uniform1f(l.j[g], w) }, wa: function (g, w, A) { b.uniform2f(l.j[g], w, A) }, uf: function (g,
                    w) { b.uniform2fv(l.j[g], w) }, vf: function (g, w) { b.uniform3fv(l.j[g], w) }, Pd: function (g, w, A, Y) { b.uniform3f(l.j[g], w, A, Y) }, wf: function (g, w, A, Y, na) { b.uniform4f(l.j[g], w, A, Y, na) }, vb: function (g, w) { b.uniform4fv(l.j[g], w) }, xf: function (g, w) { b.uniformMatrix2fv(l.j[g], !1, w) }, yf: function (g, w) { b.uniformMatrix3fv(l.j[g], !1, w) }, zf: function (g, w) { b.uniformMatrix4fv(l.j[g], !1, w) }, K: function (g, w) {
                        G.set(g); w.forEach(function (A) {
                            switch (A.type) {
                                case "4f": b.uniform4fv(l.j[A.name], A.value); break; case "3f": b.uniform3fv(l.j[A.name],
                                    A.value); break; case "2f": b.uniform2fv(l.j[A.name], A.value); break; case "1f": b.uniform1f(l.j[A.name], A.value); break; case "1i": b.uniform1i(l.j[A.name], A.value); break; case "mat2": b.uniformMatrix2fv(l.j[A.name], !1, A.value); break; case "mat3": b.uniformMatrix3fv(l.j[A.name], !1, A.value); break; case "mat4": b.uniformMatrix4fv(l.j[A.name], !1, A.value)
                            }
                        })
                    }, Se: function () { return "lowp" }, h: function () {
                        b.disableVertexAttribArray(0); G.ka(); for (var g in F) { var w = F[g]; w.hb && (w.hb = !1, b.deleteProgram(w.ua)); w.sd && delete F[g] } f.forEach(function (A) { b.deleteShader(A) });
                        f.splice(0); n = 0; p = !1
                    }
            }; return G
    }(), b = null, Aa = function () {
        function a(m) { console.log("ERROR in ContextFeedForward: ", m); return !1 } function c() {
            if (navigator.userAgent && -1 !== navigator.userAgent.indexOf("forceWebGL1") || /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) return !0; if (/(Mac)/i.test(navigator.platform)) {
                var m; (m = navigator.userAgent) ? (m = m.match(/Mac OS X (\d+)_(\d+)/) || m.match(/Mac OS X (\d+).(\d+)/), m = !m || 3 > m.length ? !1 : [parseInt(m[1], 10), parseInt(m[2], 10)]) : m = !1; if (m && 10 === m[0] &&
                    15 === m[1]) return !0
            } return !1
        } var d = null, e = null, f = null, k = null, l = !0, n = null, p = null, y = {
            A: function () { return d.width }, N: function () { return d.height }, Je: function () { return d }, Ie: function () { return b }, u: function () { return l }, flush: function () { b.flush() }, jd: function () { n || (n = new Uint8Array(d.width * d.height * 4)); b.readPixels(0, 0, d.width, d.height, b.RGBA, b.UNSIGNED_BYTE, n); return n }, Le: function () { return d.toDataURL("image/jpeg") }, Me: function () {
                ra.G(); e || (e = document.createElement("canvas"), f = e.getContext("2d")); e.width =
                    d.width; e.height = d.height; for (var m = y.jd(), q = f.createImageData(e.width, e.height), x = e.width, z = e.height, T = q.data, M = 0; M < z; ++M)for (var F = z - M - 1, D = 0; D < x; ++D) { var G = 4 * (M * x + D), g = 4 * (F * x + D); T[G] = m[g]; T[G + 1] = m[g + 1]; T[G + 2] = m[g + 2]; T[G + 3] = m[g + 3] } f.putImageData(q, 0, 0); return e.toDataURL("image/png")
            }, Ke: function (m) { !e && m && (e = document.createElement("canvas"), f = e.getContext("2d")); var q = m ? e : document.createElement("canvas"); q.width = d.width; q.height = d.height; (m ? f : q.getContext("2d")).drawImage(d, 0, 0); return q }, o: function (m) {
            m.Vc &&
                !m.Ua ? d = document.getElementById(m.Vc) : m.Ua && (d = m.Ua); d || (d = document.createElement("canvas")); d.width = m && void 0 !== m.width ? m.width : 512; d.height = m && void 0 !== m.height ? m.height : 512; "undefined" === typeof m && (m = {}); void 0 === m.premultipliedAlpha && (m.premultipliedAlpha = !1); void 0 === m.$b && (m.$b = !0); void 0 === m.antialias && (m.antialias = !1); if (!b) {
                    var q = { antialias: m.antialias, alpha: !0, preserveDrawingBuffer: !0, premultipliedAlpha: m.premultipliedAlpha, stencil: !1, depth: m.$b }; navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("noAntialiasing") &&
                        (q.antialias = !1); c() || (b = d.getContext("webgl2", q)); b ? l = !0 : ((b = d.getContext("webgl", q)) || (b = d.getContext("experimental-webgl", q)), l = !1)
                } if (!b) return a("WebGL is not enabled"); (k = b.getExtension("WEBGL_lose_context")) && m.lc && (p = m.lc, d.addEventListener("webglcontextlost", p, !1)); if (!Z.o()) return a("Not enough capabilities"); if (!Z.Kc() && l) return a("Your configuration cannot process color buffer float"); b.clearColor(0, 0, 0, 0); b.disable(b.DEPTH_TEST); b.disable(b.BLEND); b.disable(b.DITHER); b.disable(b.STENCIL_TEST);
                b.disable(b.SCISSOR_TEST); b.GENERATE_MIPMAP_HINT && b.hint(b.GENERATE_MIPMAP_HINT, b.FASTEST); b.disable(b.SAMPLE_ALPHA_TO_COVERAGE); b.disable(b.SAMPLE_COVERAGE); return !0
            }, qd: function () { if (!u.o()) return !1; b.depthFunc(b.LEQUAL); b.clearDepth(1); return !0 }, h: function () { b && Z.h(); k && p && (d.removeEventListener("webglcontextlost", p, !1), p = null); n = f = e = d = null }
        }; return y
    }(), Ia = function () {
        var a = "undefined" === typeof u ? null : u; return {
            Od: function (c) { a !== c && (a && a.ka(), a = c) }, lb: function () { return a.lb() }, xa: function () { a.xa() },
            wb: function () { a.wb() }, ka: function () { a.ka() }, set: function (c) { a.set(c) }, h: function () { a.h && a.h() }
        }
    }(), ka = function () {
        var a = null, c = null, d = 0, e = -2, f = -2, k = !1, l = [], n = {
            reset: function () { f = e = -2 }, o: function () { k || (a = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, a), b.bufferData(b.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), b.STATIC_DRAW), c = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), b.STATIC_DRAW), n.oa(), k = !0) }, instance: function (p) {
                var y =
                    d++, m = p.aa ? p.aa.length : 0, q = "undefined" === typeof p.mode ? b.STATIC_DRAW : p.mode, x = b.createBuffer(); b.bindBuffer(b.ARRAY_BUFFER, x); b.bufferData(b.ARRAY_BUFFER, p.wc instanceof Float32Array ? p.wc : new Float32Array(p.wc), q); e = y; var z = null, T = null, M = null; if (p.aa) { z = b.createBuffer(); b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, z); var F = null; 65536 > p.aa.length ? (F = Uint16Array, T = b.UNSIGNED_SHORT, M = 2) : (F = Uint32Array, T = b.UNSIGNED_INT, M = 4); b.bufferData(b.ELEMENT_ARRAY_BUFFER, p.aa instanceof F ? p.aa : new F(p.aa), q); f = y } var D = {
                        Jc: function (G) {
                        e !==
                            y && (b.bindBuffer(b.ARRAY_BUFFER, x), e = y); G && Ia.wb()
                        }, Gc: function () { f !== y && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, z), f = y) }, bind: function (G) { D.Jc(G); D.Gc() }, qe: function () { b.drawElements(b.TRIANGLES, m, T, 0) }, re: function (G, g) { b.drawElements(b.TRIANGLES, G, T, g * M) }, remove: function () { b.deleteBuffer(x); p.aa && b.deleteBuffer(z); D = null }
                    }; l.push(D); return D
            }, oa: function () { -1 !== e && (b.bindBuffer(b.ARRAY_BUFFER, a), e = -1); -1 !== f && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c), f = -1) }, g: function (p, y) {
                p && ka.oa(); y && Ia.xa(); b.drawElements(b.TRIANGLES,
                    3, b.UNSIGNED_SHORT, 0)
            }, Rb: function () { b.deleteBuffer(a); b.deleteBuffer(c) }, h: function () { n.Rb(); l.forEach(function (p) { p.remove() }); b.bindBuffer(b.ARRAY_BUFFER, null); b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null); n.reset(); k = !1; l.splice(0); d = 0 }
        }; return n
    }(), aa = function () {
        var a = null, c = null, d = null, e = !1, f = [], k = { w: -2, Pb: 1 }, l = {
            o: function () { if (!e) { a = b.createFramebuffer(); var n = Z.u(); c = n && b.DRAW_FRAMEBUFFER ? b.DRAW_FRAMEBUFFER : b.FRAMEBUFFER; d = n && b.READ_FRAMEBUFFER ? b.READ_FRAMEBUFFER : b.FRAMEBUFFER; e = !0 } }, Oe: function () { return c },
            cb: function () { return d }, ha: function () { return b.FRAMEBUFFER }, Ve: function () { return k }, He: function () { return a }, instance: function (n) {
            void 0 === n.Zb && (n.Zb = !1); var p = n.W ? n.W : null, y = n.width, m = void 0 !== n.height ? n.height : n.width, q = a, x = null, z = !1, T = !1, M = 0; p && (y = y ? y : p.A(), m = m ? m : p.N()); var F = {
                qc: function () { z || (q = b.createFramebuffer(), z = !0, M = k.Pb++) }, zc: function () {
                    F.qc(); F.l(); x = b.createRenderbuffer(); b.bindRenderbuffer(b.RENDERBUFFER, x); b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, y, m); b.framebufferRenderbuffer(c,
                        b.DEPTH_ATTACHMENT, b.RENDERBUFFER, x); b.clearDepth(1)
                }, bind: function (D, G) { M !== k.w && (b.bindFramebuffer(c, q), k.w = M); p && p.l(); G && b.viewport(0, 0, y, m); D && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT) }, ce: function () { M !== k.w && (b.bindFramebuffer(c, q), k.w = M) }, clear: function () { b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT) }, je: function () { b.clear(b.COLOR_BUFFER_BIT) }, ke: function () { b.clear(b.DEPTH_BUFFER_BIT) }, Qd: function () { b.viewport(0, 0, y, m) }, l: function () { M !== k.w && (b.bindFramebuffer(c, q), k.w = M) }, rtt: function (D) {
                    p =
                    D; k.w !== M && (b.bindFramebuffer(b.FRAMEBUFFER, q), k.w = M); D.l()
                }, G: function () { b.bindFramebuffer(c, null); k.w = -1 }, resize: function (D, G) { y = D; m = G; x && (b.bindRenderbuffer(b.RENDERBUFFER, x), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, y, m)) }, remove: function () {
                q === a || T || (b.bindFramebuffer(c, q), b.framebufferTexture2D(c, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), x && b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, null), b.bindFramebuffer(c, null), b.deleteFramebuffer(q), x && b.deleteRenderbuffer(x));
                    T = !0
                }
            }; n.Zb && F.zc(); f.push(F); return F
            }, G: function () { b.bindFramebuffer(c, null); k.w = -1 }, Wd: function () { b.bindFramebuffer(c, null); b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT); b.viewport(0, 0, Z.A(), Z.N()); k.w = -1 }, reset: function () { k.w = -2 }, U: function () { 0 !== k.w && (b.bindFramebuffer(c, a), k.w = 0) }, clear: function () { b.viewport(0, 0, Z.A(), Z.N()); b.clear(b.COLOR_BUFFER_BIT) }, h: function () { l.G(); f.forEach(function (n) { n.remove() }); b.deleteFramebuffer(a); l.reset(); e = !1; f.splice(0); k.w = -2; k.Pb = 1 }
        }; return l
    }(), Fa = function () {
        function a(r) {
            b.bindTexture(b.TEXTURE_2D,
                r)
        } function c(r) { la[0] = r; r = ca[0]; var C = r >> 16 & 32768, h = r >> 12 & 2047, N = r >> 23 & 255; return 103 > N ? C : 142 < N ? C | 31744 | ((255 == N ? 0 : 1) && r & 8388607) : 113 > N ? (h |= 2048, C | (h >> 114 - N) + (h >> 113 - N & 1)) : C = (C | N - 112 << 10 | h >> 1) + (h & 1) } function d(r) { var C = new Uint16Array(r.length); r.forEach(function (h, N) { C[N] = c(h) }); return C } function e() { if (null !== oa.fb) return oa.fb; var r = k(d([1, 1, 1, 1])); return null === r ? !0 : oa.fb = r } function f() { if (null !== oa.gb) return oa.gb; var r = k(new Uint8Array([255, 255, 255, 255])); return null === r ? !0 : oa.gb = r } function k(r) {
            if (!Ia.lb() ||
                !M) return null; var C = null; try { var h = b.getError(); C = B.instance({ isFloat: !1, H: !0, array: r, width: 1 }); h = b.getError(); if (h !== b.NO_ERROR) return !1 } catch (N) { return !1 } aa.G(); b.viewport(0, 0, 1, 1); b.clearColor(0, 0, 0, 0); b.clear(b.COLOR_BUFFER_BIT); Ia.set("s0"); C.Db(0); ka.g(!1, !0); r = new Uint8Array(4); b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, r); r = .9 < r[0]; C.remove(); aa.U(); return r
        } var l = 0, n = null, p = 0, y = null, m = null, q = null, x = null, z = null, T = null, M = !1, F = [], D = {
            isFloat: !1, isPot: !0, isLinear: !1, isMipmap: !1, isAnisotropicFiltering: !1,
            isMirrorX: !1, isMirrorY: !1, isSrgb: !1, isKeepArray: !1, isFlipY: null, width: 0, height: 0, url: null, array: null, data: null, D: null, rd: !1, H: !1, Z: null, Ka: 4, mb: 0
        }, G = !1, g = null, w = null, A = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], Y = !1, na = !1, la = new Float32Array(1), ca = new Int32Array(la.buffer), oa = { fb: null, gb: null }, B = {
            o: function () {
                if (!M) {
                    z = [b.RGB, !1, b.RGB, b.RGBA]; T = [b.RGB, !1, b.RGB, b.RGBA]; n = [b.TEXTURE0, b.TEXTURE1, b.TEXTURE2, b.TEXTURE3, b.TEXTURE4, b.TEXTURE5, b.TEXTURE6, b.TEXTURE7]; Y = "undefined" !== typeof JEContext; na = "undefined" !==
                        typeof Z; Y && JEContext.gf() && n.push(b.TEXTURE8, b.TEXTURE9); y = [-1, -1, -1, -1, -1, -1, -1, -1]; x = [b.UNSIGNED_BYTE, b.FLOAT, b.FLOAT]; if (!m) { for (var r = new Float32Array(16384), C = 0; 16384 > C; ++C)r[C] = 2 * Math.random() - 1; m = { random: B.instance({ isFloat: !0, isPot: !0, array: r, width: 64 }), vc: B.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }) } } M = !0
                }
            }, pd: function () { B.Yd() }, Ze: function () { return m.vc }, Yd: function () { x[1] = Z.Fa() }, Kd: function () { T = z = [b.RGBA, b.RGBA, b.RGBA, b.RGBA] }, lf: function (r, C) {
                u.set("s1");
                aa.G(); var h = r.A(), N = r.N(); b.viewport(0, 0, h, N); r.b(0); ka.g(!1, !1); b.readPixels(0, 0, h, N, b.RGBA, b.UNSIGNED_BYTE, C)
            }, ed: function (r, C, h) {
                b.activeTexture(b.TEXTURE0); l = 0; var N = b.createTexture(); a(N); var qa = Z.u() && b.RGBA32F ? b.RGBA32F : b.FLOAT; C = C instanceof Float32Array ? C : new Float32Array(C); var ua = pa.wd(C.length); ua !== Math.floor(ua) && (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER,
                    b.NEAREST); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST); b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, h); b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, r.A(), r.N(), 0, b.RGBA, qa, C); a(null); b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1); aa.U(); u.set("s0"); r.J(); b.clearColor(0, 0, 0, 0); b.clear(b.COLOR_BUFFER_BIT); a(N); ka.g(!0, !1); b.deleteTexture(N)
            }, instance: function (r) {
                function C() {
                    a(ta); va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, va); h.isPot ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, h.isMirrorX ? b.MIRRORED_REPEAT :
                        b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, h.isMirrorY ? b.MIRRORED_REPEAT : b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)); h.isAnisotropicFiltering && "undefined" !== typeof JESETTINGS && b.texParameterf(b.TEXTURE_2D, JEContext.Ne().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.ae); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, h.isLinear ? b.LINEAR : b.NEAREST); h.isLinear ? b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER,
                            h.isMipmap && !Ja ? b.NEAREST_MIPMAP_LINEAR : b.LINEAR) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, h.isMipmap && !Ja ? b.NEAREST_MIPMAP_NEAREST : b.NEAREST); fa = z[h.Ka - 1]; ia = T[h.Ka - 1]; ja = x[qa]; if (Z.u()) { var v = b.RGBA32F; fa === b.RGBA && ja === b.FLOAT && v && (ia = v); fa === b.RGB && ja === b.FLOAT && v && (ia = v, fa = b.RGBA) } if (h.H && !h.isFloat || h.isFloat && h.isMipmap && Ua.vd()) (v = b.RGBA16F) && (ia = v), ja = Z.Fa(); h.mb && (eb = h.mb); h.isSrgb && 4 === h.Ka && (fa = JEContext.Xe()); if (h.D) b.texImage2D(b.TEXTURE_2D, 0, ia, fa, ja, h.D); else if (h.url) b.texImage2D(b.TEXTURE_2D,
                                0, ia, fa, ja, Ea); else if (wa) { try { b.getError(), b.texImage2D(b.TEXTURE_2D, 0, ia, J, K, 0, fa, ja, wa), b.getError() !== b.NO_ERROR && (b.texImage2D(b.TEXTURE_2D, 0, ia, J, K, 0, fa, ja, null), b.getError() !== b.NO_ERROR && b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, J, K, 0, b.RGBA, b.UNSIGNED_BYTE, null)) } catch (fc) { b.texImage2D(b.TEXTURE_2D, 0, ia, J, K, 0, fa, ja, null) } h.isKeepArray || (wa = null) } else b.texImage2D(b.TEXTURE_2D, 0, ia, J, K, 0, fa, ja, null); if (h.isMipmap) if (!Ja && X) X.bb(), fb = !0; else if (Ja) {
                                    v = Math.log(Math.min(J, K)) / Math.log(2); Ra = Array(1 +
                                        v); Ra[0] = ta; for (var L = 1; L <= v; ++L) { var da = Math.pow(2, L), O = J / da; da = K / da; var Ka = b.createTexture(); a(Ka); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST); b.texImage2D(b.TEXTURE_2D, 0, ia, O, da, 0, fa, ja, null); a(null); Ra[L] = Ka } fb = !0
                                } a(null); y[l] = -1; va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1); gb = !0; h.Z && X && (h.Z(X), h.Z = null)
                } var h = Object.assign({}, D, r), N = p++; null === h.isFlipY && (h.isFlipY = h.url || h.array ? !0 : !1); h.data && (h.array = "string" ===
                    typeof h.data ? Mb(h.data) : h.isFloat ? new Float32Array(h.data) : new Uint8Array(h.data), h.isFlipY = !1); var qa = 0, ua = h.D ? !0 : !1, xa = null, Sa = null, Hb = !1, wb = null; h.H = h.H || h.isFloat; h.H && (qa = 1); h.rd || Z.u() || !h.isFloat || !na || Z.Fb() || (h.isFloat = !1); h.isFloat && (qa = 2); h.isAnisotropicFiltering && Y && !JEContext.af() && (h.isAnisotropicFiltering = !1); var ta = b.createTexture(), Ea = null, wa = !1, J = 0, K = 0, gb = !1, hb = !1, ya = null, Ba = null, xb = null, Va = null, ia = null, fa = null, ja = null, va = h.isFlipY, Ja = h.H && h.isMipmap && "undefined" !== typeof Ua && !Ua.Mc() ?
                        !0 : !1, Ra = null, eb = -1, fb = !1, La = { bc: !1, Eb: null, Qb: null }; h.width && (J = h.width, K = h.height ? h.height : J); var X = {
                            get: function () { return ta }, A: function () { return J }, N: function () { return K }, $e: function () { return h.url }, bf: function () { return h.isFloat }, df: function () { return h.H }, ef: function () { return h.isLinear }, bb: function () { b.generateMipmap(b.TEXTURE_2D) }, Ic: function (v, L) { Ja ? (v || (v = X.Ub()), X.Sa(L), a(Ra[v]), y[L] = -1) : X.b(L) }, Ub: function () { -1 === eb && (eb = Math.log(J) / Math.log(2)); return eb }, fd: function (v) {
                                if (Ja) {
                                    v || (v = X.Ub());
                                    u.set("s11"); X.Sa(0); for (var L = J, da = K, O = 1; O <= v; ++O)L /= 2, da /= 2, u.wa("u7", .25 / L, .25 / da), b.viewport(0, 0, L, da), a(Ra[O - 1]), b.framebufferTexture2D(aa.ha(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Ra[O], 0), ka.g(!1, 1 === O); y[0] = -1
                                } else X.bb()
                            }, Sa: function (v) { v !== l && (b.activeTexture(n[v]), l = v) }, b: function (v) { if (!gb) return !1; X.Sa(v); if (y[v] === N) return !1; a(ta); y[v] = N; return !0 }, Db: function (v) { b.activeTexture(n[v]); l = v; a(ta); y[v] = N }, l: function () { q = X; b.framebufferTexture2D(aa.ha(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, ta, 0) },
                            J: function () { q = X; b.viewport(0, 0, J, K); b.framebufferTexture2D(aa.ha(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, ta, 0) }, xb: B.xb, resize: function (v, L) { J = v; K = L; C() }, clone: function (v) { v = B.instance({ width: J, height: K, H: h.H, isFloat: h.isFloat, isLinear: h.isLinear, isMirrorY: h.isMirrorY, isFlipY: v ? !va : va, isPot: h.isPot }); Ia.set("s0"); aa.U(); v.l(); b.viewport(0, 0, J, K); X.b(0); ka.g(!0, !0); return v }, Qd: function () { b.viewport(0, 0, J, K) }, remove: function () { b.deleteTexture(ta); F.splice(F.indexOf(X), 1); X = null }, refresh: function () {
                                X.Db(0);
                                va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0); ua ? b.texImage2D(b.TEXTURE_2D, 0, ia, fa, b.UNSIGNED_BYTE, h.D) : b.texImage2D(b.TEXTURE_2D, 0, ia, J, K, 0, fa, ja, wa); va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                            }, Jb: function () { var v = J * K * 4; Ba = [new Uint8Array(v), new Uint8Array(v), new Uint8Array(v), new Uint8Array(v)]; ya = [new Float32Array(Ba[0].buffer), new Float32Array(Ba[1].buffer), new Float32Array(Ba[2].buffer), new Float32Array(Ba[3].buffer)]; xb = new Uint8Array(4 * v); Va = new Float32Array(xb.buffer); hb = !0 }, pc: function () {
                                hb ||
                                X.Jb(); b.readPixels(0, 0, J, 4 * K, b.RGBA, b.UNSIGNED_BYTE, xb); for (var v = J * K, L = 2 * v, da = 3 * v, O = 0; O < v; ++O)ya[0][O] = Va[O], ya[1][O] = Va[O + v], ya[2][O] = Va[O + L], ya[3][O] = Va[O + da]; return ya
                            }, Gd: function () { La.bc || (La.Eb = new Uint8Array(J * K * 4), La.Qb = new Float32Array(La.buffer), La.bc = !0); b.readPixels(0, 0, J, K, b.RGBA, b.UNSIGNED_BYTE, La.Eb); return La.Qb }, Kb: function (v) {
                                aa.G(); u.set("s12"); X.b(0); if (v) b.viewport(0, 0, J, K), u.vb("u8", .25, .25, .25, .25), ka.g(!1, !0); else for (v = 0; 4 > v; ++v)b.viewport(0, K * v, J, K), u.vb("u8", A[v]), ka.g(!1,
                                    0 === v)
                            }, Xd: function (v) { var L = ja === x[0] && !f(); a(ta); va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0); L ? (Hb || (xa = document.createElement("canvas"), xa.width = J, xa.height = K, Sa = xa.getContext("2d"), wb = Sa.createImageData(J, K), Hb = !0), wb.data.set(v), Sa.putImageData(wb, 0, 0), b.texImage2D(b.TEXTURE_2D, 0, ia, fa, ja, xa)) : b.texImage2D(b.TEXTURE_2D, 0, ia, J, K, 0, fa, ja, v); y[l] = N; va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1) }, Cf: function (v, L) {
                                a(ta); L && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0); b.texImage2D(b.TEXTURE_2D, 0, ia, fa, ja,
                                    v); y[l] = N; L && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                            }, sf: function (v, L) {
                                var da = J * K, O = 4 * da; v = h.H ? v ? "RGBE" : "JSON" : "RGBA"; L && (v = L); L = Z.u() && !1; var Ka = null; switch (v) { case "RGBE": Ka = "s40"; break; case "JSON": Ka = L ? "s0" : "s12"; break; case "RGBA": case "RGBAARRAY": Ka = "s6" }hb || ("RGBA" === v || "RGBE" === v || "RGBAARRAY" === v ? (Ba = new Uint8Array(O), hb = !0) : "JSON" !== v || L || X.Jb()); aa.G(); u.set(Ka); X.b(0); O = null; if ("RGBA" === v || "RGBE" === v || "RGBAARRAY" === v) {
                                    b.viewport(0, 0, J, K); ka.g(!0, !0); b.readPixels(0, 0, J, K, b.RGBA, b.UNSIGNED_BYTE,
                                        Ba); if ("RGBAARRAY" === v) return { data: Ba }; G || (g = document.createElement("canvas"), w = g.getContext("2d"), G = !0); g.width = J; g.height = K; da = w.createImageData(J, K); da.data.set(Ba); w.putImageData(da, 0, 0); O = g.toDataURL("image/png")
                                } else if ("JSON" === v) if (L) O = new Float32Array(da), b.viewport(0, 0, J, K), ka.g(!0, !0), b.readPixels(0, 0, J, K, b.RGBA, b.FLOAT, O); else {
                                    for (O = 0; 4 > O; ++O)b.viewport(0, K * O, J, K), u.vb("u8", A[O]), ka.g(!O, !O); X.pc(); O = Array(da); for (L = 0; L < da; ++L)O[4 * L] = ya[0][L], O[4 * L + 1] = ya[1][L], O[4 * L + 2] = ya[2][L], O[4 * L +
                                        3] = ya[3][L]
                                } return { format: v, data: O, width: J, height: K, isMirrorY: h.isMirrorY, isFlipY: "RGBA" === v ? h.isFlipY : !h.isFlipY }
                            }
                        }; h.isMipmap && !Ja && gb && !fb && (X.bb(), fb = !0); if (h.url) a(ta), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 1, 1, 0, b.RGBA, b.UNSIGNED_BYTE, null), Ea = new Image, Ea.oe = "Anonymous", Ea.crossOrigin = "Anonymous", Ea.src = h.url, Ea.onload = function () { J = Ea.width; K = Ea.height; C() }; else if (h.D) {
                            var Ib = function () {
                                J = void 0 !== h.D.videoWidth ? h.D.videoWidth : h.D.width; K = void 0 !== h.D.videoHeight ? h.D.videoHeight : h.D.height; J ?
                                    C() : setTimeout(Ib, 1)
                            }; Ib()
                        } else h.array ? (h.H && !h.isFloat ? h.array instanceof Uint16Array ? (wa = h.array, C()) : e() ? (wa = d(h.array), C()) : (C(), B.ed(X, h.array, va)) : (wa = h.isFloat ? h.array instanceof Float32Array ? h.array : new Float32Array(h.array) : h.array instanceof Uint8Array ? h.array : new Uint8Array(h.array), C()), h.isKeepArray || (wa && wa !== h.array && (wa = null), delete h.array)) : C(); X.We = X.A; h.Z && gb && (h.Z(X), h.Z = null); F.push(X); return X
            }, G: function (r) { r !== l && (b.activeTexture(n[r]), l = r); y[r] = -1; a(null) }, ee: function (r) { m.random.b(r) },
            xb: function () { q = null; b.framebufferTexture2D(aa.ha(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0) }, reset: function () { for (var r = 0; r < n.length; ++r)y[r] = -1; l = -1 }, qf: function () { l = -1 }, Vd: function () { for (var r = 0; r < n.length; ++r)B.G(r) }, Rb: function () { m && (m.random.remove(), m.vc.remove()) }, Bf: function (r, C) {
                if ("RGBA" === r.format || "RGBE" === r.format) {
                    var h = new Image; h.src = r.data; h.onload = function () {
                        B.instance({
                            isMirrorY: r.isMirrorY, isFlipY: r.isFlipY, isFloat: !1, D: h, Z: function (N) {
                                if ("RGBA" === r.format) C(N); else {
                                    var qa = r.width,
                                    ua = r.height, xa = B.instance({ isMirrorY: r.isMirrorY, isFloat: !0, width: qa, height: ua, isFlipY: r.isFlipY }); aa.U(); b.viewport(0, 0, qa, ua); u.set("s41"); xa.l(); N.b(0); ka.g(!0, !0); B.G(0); C(xa); b.flush(); setTimeout(N.remove, 50)
                                }
                            }
                        })
                    }
                } else "JSON" === r.format ? C(B.instance({ isFloat: !0, isFlipY: r.isFlipY, width: r.width, height: r.height, array: new Float32Array(r.data) })) : C(!1)
            }, h: function () { q && (ra.U(), B.xb(), ra.G()); B.Vd(); F.slice(0).forEach(function (r) { r.remove() }); F.splice(0); M = !1; p = 0; Ua.h() }
        }; return B
    }(), Qb = function () {
        return {
            instance: function (a) {
                var c =
                    [Fa.instance(a), Fa.instance(a)], d = [c[1], c[0]], e = d, f = { Nd: function (k) { e[1].l(); e[0].b(k); f.sc() }, tf: function (k) { e[1].J(); e[0].b(k); f.sc() }, sc: function () { e = e === c ? d : c }, refresh: function () { e[0].refresh(); e[1].refresh() }, b: function (k) { e[0].b(k) }, de: function (k) { e[1].b(k) }, Qe: function () { return e[0] }, remove: function () { e[0].remove(); e[1].remove(); e = null } }; return f
            }
        }
    }(), Z = function () {
        function a() { c = "undefined" === typeof Aa ? JEContext : Aa; d = !0 } var c = null, d = !1, e = !1, f = null, k = null, l = !1, n = null, p = !1, y = null, m = !1, q = null,
            x = !1, z = !0, T = !0, M = !0, F = null, D = "undefined" === typeof window ? {} : window, G = {
                o: function () { if (d) return !0; a(); G.Nb(); G.ab(); G.ad(); G.bd(); aa.o(); Fa.o(); if (!G.Wc()) return !1; ka.o(); Fa.pd(); return !0 }, A: function () { d || a(); return c.A() }, N: function () { d || a(); return c.N() }, u: function () { d || a(); return c.u() }, ad: function () { x = (q = b.getExtension("EXT_color_buffer_float") || b.getExtension("WEBGL_color_buffer_float") || b.getExtension("OES_color_buffer_float")) ? !0 : !1; D.GL_EXT_COLORBUFFERFLOAT = q }, bd: function () {
                    b.getExtension("EXT_color_buffer_half_float") ||
                    b.getExtension("WEBGL_color_buffer_half_float") || b.getExtension("OES_color_buffer_half_float")
                }, Nb: function () { if (!e) { this.u() || (f = b.getExtension("OES_texture_float") || b.getExtension("MOZ_OES_texture_float") || b.getExtension("WEBKIT_OES_texture_float"), l = (D.GL_EXT_FLOAT = f) ? !0 : !1); if (l || this.u()) k = b.getExtension("OES_texture_float_linear") || b.getExtension("MOZ_OES_texture_float_linear") || b.getExtension("WEBKIT_OES_texture_float_linear"), D.GL_EXT_FLOATLINEAR = k; e = !0 } }, ab: function () {
                    if (!m) {
                        if (!this.u()) {
                            if (n =
                                b.getExtension("OES_texture_half_float") || b.getExtension("MOZ_OES_texture_half_float") || b.getExtension("WEBKIT_OES_texture_half_float")) F = n.HALF_FLOAT_OES, p = !0; !F && b.HALF_FLOAT && (F = b.HALF_FLOAT); !F && b.FLOAT && (F = b.FLOAT); D.GL_EXT_HALFFLOAT = n
                        } if (p || this.u()) y = b.getExtension("OES_texture_half_float_linear") || b.getExtension("MOZ_OES_texture_half_float_linear") || b.getExtension("WEBKIT_OES_texture_half_float_linear"), D.GL_EXT_HALFFLOATLINEAR = y; m = !0
                    }
                }, Fa: function () {
                    if (G.u()) return b.HALF_FLOAT; G.ab(); return p ?
                        F : b.FLOAT
                }, Fb: function () { return z }, Lc: function () { return T }, fe: function () { return M }, Kc: function () { return x }, Yc: function () {
                    T = z = !0; var g = b.createFramebuffer(); b.bindFramebuffer(b.FRAMEBUFFER, g); var w = b.createTexture(); b.bindTexture(b.TEXTURE_2D, w); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST); b.texImage2D(b.TEXTURE_2D, 0, G.u() && b.RGBA32F ? b.RGBA32F : b.RGBA, 1, 1, 0, b.RGBA, b.FLOAT, null); b.framebufferTexture2D(aa.ha(), b.COLOR_ATTACHMENT0,
                        b.TEXTURE_2D, w, 0); var A = b.checkFramebufferStatus(aa.cb()); A !== b.FRAMEBUFFER_COMPLETE && (z = !1); b.texImage2D(b.TEXTURE_2D, 0, G.u() && b.RGBA16F ? b.RGBA16F : b.RGBA, 1, 1, 0, b.RGBA, G.Fa(), null); b.framebufferTexture2D(aa.ha(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, w, 0); A = b.checkFramebufferStatus(aa.cb()); A !== b.FRAMEBUFFER_COMPLETE && (T = !1); b.bindTexture(b.TEXTURE_2D, null); b.bindFramebuffer(b.FRAMEBUFFER, null); b.deleteTexture(w); b.deleteFramebuffer(g)
                }, Xc: function () {
                    var g = aa.instance({ width: 1 }); g.qc(); var w = Fa.instance({
                        width: 1,
                        isFloat: !0, Ka: 3
                    }); g.l(); w.l(); b.flush(); b.checkFramebufferStatus(aa.cb()) !== b.FRAMEBUFFER_COMPLETE ? (Fa.Kd(), M = !1) : M = !0; g.remove(); w.remove()
                }, Wc: function () { G.Yc(); if (!z && !T) return !1; G.Xc(); return !0 }, h: function () { Fa.h(); Ia.h(); aa.h(); ka.h(); d = !1 }
            }; return G
    }(), Q = ka, ra = aa, R = Fa, Ua = function () {
        function a(z, T, M, F) {
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, F ? b.NEAREST_MIPMAP_NEAREST : b.LINEAR); var D = null; try {
                if (D = b.getError(), D !== b.NO_ERROR && console.log("GLERR in test_mipmapping():", D), b.texImage2D(b.TEXTURE_2D,
                    0, z, 2, 2, 0, b.RGBA, T, M), D = b.getError(), D !== b.NO_ERROR) return !1
            } catch (G) { return !1 } F && b.generateMipmap(b.TEXTURE_2D); Q.oa(); Q.g(!1, !0); b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, l); D = b.getError(); D === b.INVALID_OPERATION && "undefined" !== typeof b.PIXEL_PACK_BUFFER && (b.bindBuffer(b.PIXEL_PACK_BUFFER, null), b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, l), D = b.getError()); return D !== b.NO_ERROR ? !1 : 0 !== l[0]
        } function c(z) { return Z.Fb() && a(m, b.FLOAT, new Float32Array(p), z) ? (k = f.Ab, !0) : !1 } function d(z) {
            return Z.Lc() ?
                a(q, Z.Fa(), new Uint16Array(p), z) || a(q, b.FLOAT, new Float32Array(p), z) ? (k = f.Ra, !0) : !1 : !1
        } var e = !1, f = { Ab: 3, Ra: 2, RGBA8: 0 }, k = f.RGBA8, l = new Uint8Array(4), n = [.8, 1, .8, 1], p = n.concat(n, n, n), y = !0, m = null, q = null, x = {
            o: function () {
                Z.Nb(); Z.ab(); q = m = b.RGBA; if (Aa.u()) { var z = b.RGBA32F; z && (m = z); (z = b.RGBA16F) && (q = z) } Q.o(); ra.reset(); ra.G(); b.viewport(0, 0, 1, 1); u.set("s0"); e = !0; z = b.createTexture(); b.activeTexture(b.TEXTURE0); b.bindTexture(b.TEXTURE_2D, z); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT); b.texParameteri(b.TEXTURE_2D,
                    b.TEXTURE_WRAP_T, b.REPEAT); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST); if (d(!0) || c(!0)) return !0; y = !1; if (d(!1) || c(!1)) return !0; if (Aa.u()) { q = m = b.RGBA; if (d(!0) || c(!0)) return !0; y = !1; if (d(!1) || c(!1)) return !0 } return !1
            }, Mc: function () { return y }, Re: function () { return k }, cf: function () { e || x.o(); return k === f.Ab }, vd: function () { e || x.o(); return k === f.Ra }, h: function () { e = !1; k = f.RGBA8; y = !0 }
        }; return x
    }(), Wb = function () {
        return {
            instance: function (a) {
                var c = R.instance(a.alpha), d = R.instance(a.beta); return {
                    $c: function () {
                        c.b(1);
                        d.b(2)
                    }
                }
            }
        }
    }(), Kb = function () {
        return {
            instance: function (a) {
                var c = null, d = !1, e = !1, f = null, k = !1, l = !1, n = null, p = "undefined" === typeof a.preprocessing ? !1 : a.preprocessing, y = "undefined" === typeof a.preprocessingSize ? a.size : a.preprocessingSize; a.mask && (d = !0, I && void 0 !== I.Fc && (a.mask = I.Fc + a.mask), c = R.instance({ isFloat: !1, url: a.mask })); var m = !1; a.customInputShader && (m = "s42", u.Bb({ name: "_", id: m, a: a.customInputShader, c: ["uSource"], precision: "lowp" }), u.K(m, [{ type: "1i", name: "_", value: 0 }])); switch (p) {
                    case "sobel": n = "s31";
                        k = !0; break; case "meanNormalization": n = "s32"; k = !0; break; case "grayScale": n = "s28"; k = !1; break; case "grayScaleTilt": n = "s29"; l = !0; k = !1; break; case "rgbGrayTilt": n = "s30"; l = !0; k = !1; break; case "copy": n = m ? m : "s0"; break; case "inputLightRegulation": n = m ? m : "s28"; f = Xb.instance({ Yb: y, nc: a.size, fc: a.nBlurPass, ud: !1 }); e = !0; break; case "direct": case "none": n = !1; break; default: n = "s3"
                }l && u.K(n, [{ name: "u26", type: "1f", value: a.tilt }]); d && (n += "Mask"); var q = R.instance({ isFloat: !1, isPot: !1, width: a.size }), x = {
                    A: function () { return y },
                    eb: function () { return x.A() }, ld: function () { return e ? f.Vb() : q }, I: function () { ra.U(); n && (u.set(n), k && u.B("u27", 1 / a.size), q.J(), d && c.b(1), Q.g(!1, !1), q.b(0), e && f.process(q)) }, h: function () { q.remove(); d && c.remove() }
                }; return x
            }
        }
    }(), Lb = function () {
        return {
            instance: function (a) {
            "undefined" === typeof a.disableNormalize && (a.disableNormalize = !1); var c = { input: null, fa: null, ib: null, S: null, Ma: null, rb: null, sb: null }, d = null, e = [], f = [], k = !1, l = null, n = !0, p = -1, y = a.isReorganize ? a.isReorganize : !1, m = a.kernelsNumber ? !0 : !1, q = a.dynPelu ?
                Wb.instance(a.dynPelu) : !1, x = q ? !0 : !1, z = { isEnabled: !1 }; a.td ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.Na.eb(), n = !1) : "full" === a.connectivityUp && (a.sparsity = a.Na.eb()); var T = { elu: "s15", elu01: "s16", relu: "s14", arctan: "s18", sigmoid: "s13", copy: "s0", softplus: "s19", dynPelu: "s17" }[a.activation], M = a.sparsity * a.sparsity, F = !1, D = a.size, G = ""; if (a.maxPooling) { switch (a.maxPooling.size) { case 2: G = "s33"; break; case 4: G = "s34" }F = !0; D /= a.maxPooling.size; c.rb = R.instance({ isFloat: !0, isPot: !1, width: D }) } var g =
                    void 0 !== a.Cd && a.Cd ? !0 : !1, w = null, A = null, Y = null; if (g) { w = "s43" + a.index.toString(); u.Xb("s43", w, [((a.normalization.n - 1) / 2).toFixed(1)]); u.K(w, [{ type: "1i", name: "u1", value: 0 }, { type: "2f", name: "u7", value: [1 / a.size, 1 / a.size] }, { type: "1f", name: "u6", value: a.normalization.alpha }, { type: "1f", name: "u9", value: a.normalization.beta }, { type: "1f", name: "u31", value: a.normalization.k }]); var na = { isFloat: !0, isPot: !0, width: a.size }; A = R.instance(na); Y = R.instance(na) } var la = -1, ca = null; n && (c.S = R.instance({ isFloat: !0, isPot: !1, width: a.size }));
                c.fa = R.instance(a.bias); var oa = {
                    A: function () { return a.size }, eb: function () { return D }, Sb: function () { return a.classesCount }, Hc: function (B) { d.b(B) }, Ed: function () { a.remap && a.remap.isEnabled && (z = { isEnabled: !0, yd: R.instance({ isFloat: !1, isFlipY: !1, array: new Uint8Array(a.remap.maskTexture.data), width: a.remap.maskTexture.width, isPot: !1 }), layers: a.remap.layers.map(function (B) { return a.parent.kd(B) }), depth: a.remap.depth }) }, Md: function () {
                        switch (a.connectivityUp) {
                            case "direct": ca = Yb.instance(a.connectivity); break;
                            case "square": ca = Zb.instance(a.connectivity); break; case "squareFast": ca = $b.instance(a.connectivity, a.activation); break; case "full": ca = ac.instance(a.connectivity); break; case "conv": p = a.kernelsNumber, ca = bc.instance(a.connectivity), y && (c.Ma = R.instance({ width: D, isFloat: !0, isFlipY: !1, isPot: !1 }))
                        }if (ca.ja) { var B = a.size * a.sparsity; la = Math.log(B / a.size) / Math.log(2); c.input = R.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: B, mb: la }); c.ib = R.instance({ isFloat: !0, isPot: !0, width: a.size }) }
                    }, I: function (B) {
                        d = B; ca.ja ?
                            (c.input.J(), m && c.fa.b(2), ca.I(z), c.input.b(0), c.input.fd(la), c.ib.J(), m ? u.set("s0") : (u.set("s27"), u.B("u25", M), c.fa.b(1)), c.input.Ic(la, 0), Q.g(!1, !1), u.set(T), g ? A.l() : c.S.l(), c.ib.b(0), x && q.$c(), Q.g(!1, !1)) : (c.S.J(), c.fa.b(1), ca.I()); g && (u.set(w), Y.l(), A.b(0), Q.g(!1, !1), u.set("s44"), u.B("u6", 1), c.S.l(), Y.b(1), Q.g(!1, !1)); if (n) return F ? (c.rb.J(), c.S.b(0), u.set(G), u.wa("u7", 1 / a.size, 1 / a.size), Q.g(!1, !1), B = c.rb) : B = c.S, B.b(0), y && (c.Ma.l(), u.set("s21"), u.wa("u12", p, D / p), Q.g(!1, !1), B = c.Ma, c.Ma.b(0)), B;
                        B = c.S; a.disableNormalize || (u.set("gpuRawAvg" === k ? "s8" : "s7"), u.B("u4", 1 / a.size), c.sb.J(), c.S.b(0), Q.g(!1, !1), B = c.sb); switch (k) { case "cpuRGBA2Float": B.Kb(!1); B = oa.Fd(B); l(B); break; case "cpuMeanFloat": B.Kb(!0); B = B.Gd(); l(B); break; case "gpuRawAvg": case "gpuRaw": B.b(0); case "none": l(B) }return !1
                    }, Uc: function (B) {
                    B && "undefined" !== typeof B.mc && (k = B.mc, l = B.Dd); c.S = R.instance({ isFloat: !0, isPot: !0, isMipmap: !1, width: a.size }); B = "undefined" !== typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size; for (var r =
                        0, C = 0, h = 0; r < B; ++r)e.push(C + (a.size - 1 - h) * a.size), f.push([-1, -1, -1, -1]), ++C, C === a.size && (C = 0, ++h); a.disableNormalize || (c.sb = R.instance({ isFloat: !0, isPot: !0, width: a.size }))
                    }, Fd: function (B) { var r = B.pc(); e.forEach(function (C, h) { f[h][0] = r[0][C]; f[h][1] = r[1][C]; f[h][2] = r[2][C]; f[h][3] = r[3][C] }); return f }, h: function () { for (var B in c) { var r = c[B]; r && r.remove() } ca && (ca.h(), ca = null) }
                }; a.Na && oa.Md(a.Na); return oa
            }
        }
    }(); yb.Lb = function (a) { a.forEach(function (c) { c.Sc && R.Lb(c.Sc.Df); c.fa && R.Lb(c.fa) }) }; var Yb = function () {
        return {
            instance: function (a) {
                var c =
                    R.instance(a.weights); delete a.weights.data; return { ja: !0, Ea: function () { return 1 }, h: function () { c.remove() }, od: function () { return c }, I: function () { u.set("s26"); c.b(1); Q.g(!1, !1) } }
            }
        }
    }(), ac = function () {
        return {
            instance: function (a) {
                var c = a.fromLayerSize, d = R.instance(a.weights); delete a.weights.data; return {
                    ja: !0, Ea: function () { return c }, h: function () { d.remove() }, I: function (e) {
                        if (e.isEnabled) { u.set("s24"); e.yd.b(3); var f, k = Math.min(e.layers.length, e.depth); for (f = 0; f < k; ++f)e.layers[f].Hc(4 + f) } else u.set("s23");
                        u.B("u16", a.toLayerSize); d.b(1); Q.g(!1, !1)
                    }
                }
            }
        }
    }(), Zb = function () {
        return {
            instance: function (a) {
                for (var c = a.fromLayerSize, d = a.toLayerSize, e = a.toSparsity, f = e * d, k = f / c, l = c / d, n = 0, p = 0, y = 0, m = Array(e * d * e * d * 4), q = Array(e * d * e * d * 4), x = Array(c * c), z = 0; z < x.length; ++z)x[z] = 0; z = Math.floor(e / 2); for (var T = .5 / d, M = .5 / c, F = .5 / f, D = 0; D < d; ++D)for (var G = Math.round(D * l), g = 0; g < d; ++g) {
                    var w = Math.round(g * l), A = D / d, Y = g / d; A += T; Y += T; for (var na = 0; na < e; ++na) {
                        var la = G + na - z; 0 > la && (la += c); la >= c && (la -= c); for (var ca = 0; ca < e; ++ca) {
                            var oa = n / f, B =
                                p / f, r = w + ca - z; 0 > r && (r += c); r >= c && (r -= c); var C = la / c, h = r / c; B = 1 - B - 1 / f; C += M; h += M; oa += F; B += F; var N = D * e + na, qa = g * e + ca; qa = d * e - qa - 1; N = qa * d * e + N; m[4 * N] = oa; m[4 * N + 1] = B; m[4 * N + 2] = C; m[4 * N + 3] = h; h = x[r * c + la]++; N = h % k; C = la * k + N; r = r * k + (h - N) / k; r = c * k - 1 - r; r = r * c * k + C; q[4 * r] = oa; q[4 * r + 1] = B; q[4 * r + 2] = A; q[4 * r + 3] = Y; ++n >= f && (n = 0, ++p); ++y
                        }
                    }
                } x = null; var ua = R.instance(a.weights); delete a.weights.data; var xa = R.instance({ width: f, isFloat: !0, array: new Float32Array(q), isPot: !0 }); q = null; var Sa = R.instance({
                    width: f, isFloat: !0, array: new Float32Array(m),
                    isPot: !0
                }); m = null; return { ja: !0, Ea: function () { return k }, h: function () { xa.remove(); Sa.remove(); ua.remove() }, I: function () { u.set("s22"); ua.b(1); Sa.b(2); Q.g(!1, !1) } }
            }
        }
    }(), bc = function () {
        return {
            instance: function (a) {
                var c = a.kernelsNumber, d = a.toSparsity, e = d * a.toLayerSize / a.fromLayerSize, f = R.instance(a.weights); delete a.weights.data; return {
                    ja: !0, Ea: function () { return e }, Ye: function () { return d }, od: function () { return f }, h: function () { f.remove() }, I: function () {
                        u.set("s25"); u.B("u22", c); u.B("u23", d); u.B("u16", a.toLayerSize);
                        u.B("u24", a.fromLayerSize); f.b(1); Q.g(!1, !1)
                    }
                }
            }
        }
    }(), $b = function () {
        return {
            instance: function (a, c) {
                var d = a.fromLayerSize, e = a.toLayerSize, f = a.toSparsity, k = a.stride ? a.stride : 1, l = f * e / d, n = e < d, p = d / e, y = R.instance(a.weights); delete a.weights.data; var m = "s45" + [d.toString(), e.toString(), f.toString(), k.toString(), c].join("_"); u.cd(m) || (a = Vb.gd(c, "gl_FragColor", "gl_FragColor"), e = [{ type: "1f", name: "u16", value: e }, { type: "1f", name: "u30", value: k }], n && e.push({ type: "1f", name: "u24", value: d }), d = [(n ? l : f).toFixed(1), a], n &&
                    d.push(p.toFixed(1)), u.Xb(n ? "s39" : "s38", m, d), u.K(m, e.concat([{ type: "1i", name: "u14", value: 0 }, { type: "1i", name: "u21", value: 1 }, { type: "1i", name: "u13", value: 3 }]))); return { ja: !1, Ea: function () { return l }, h: function () { y.remove() }, I: function () { u.set(m); y.b(3); Q.g(!1, !1) } }
            }
        }
    }(), Xb = function () {
        return {
            instance: function (a) {
                var c = a.fc ? a.fc : 3, d = a.Yb ? a.Yb : 64, e = a.nc ? a.nc : 64, f = a.ud ? !0 : !1; a = { isFloat: !1, width: d, isPot: !1, isFlipY: !1 }; var k = R.instance(a), l = R.instance(a), n = R.instance(a), p = R.instance(a), y = R.instance({
                    isFloat: !0,
                    width: e, isPot: !1, isFlipY: !1
                }), m = 1 / d; return { process: function (q) { u.set("s35"); p.l(); Q.g(f, !1); u.set("s36"); for (var x = 0; x < c; ++x)k.l(), u.wa("u7", m, 0), Q.g(f, !1), n.l(), p.b(0), Q.g(f, !1), l.l(), k.b(0), u.wa("u7", 0, m), Q.g(f, !1), p.l(), n.b(0), Q.g(f, !1), x !== c - 1 && l.b(0); u.set("s37"); y.l(); q.b(0); l.b(1); p.b(2); Q.g(f, !1); y.b(0) }, Vb: function () { return y } }
            }
        }
    }(), S = {
        nd: function () { return S.Ib() ? document.createElement("video") : !1 }, sa: function (a, c) { a[c] = !0; a.setAttribute(c, "true") }, Pc: function () {
            var a = !1, c = navigator.userAgent ||
                navigator.vendor || window.opera; if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0,
                    4))) a = !0; return a
        }, Gb: function () { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream }, hd: function () { var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); return 2 < a.length ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)] : [0, 0, 0] }, cc: function () { try { return window.matchMedia("(orientation: portrait)").matches ? !0 : !1 } catch (a) { return window.innerHeight > window.innerWidth } }, Oc: function () { return S.Hb() || S.Gb() }, Hb: function () {
            var a = navigator.userAgent.toLowerCase(); return -1 !==
                a.indexOf("safari") && -1 === a.indexOf("chrome") ? !0 : !1
        }, Fe: function () { return S.Pc() ? S.cc() ? window.innerHeight / window.innerWidth * 45 : 45 : 45 }, Ib: function () { return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1 }, pause: function (a) { a.pause() }, rf: function (a) { a.play() }, release: function (a) { a.pause(); a.videoStream && a.videoStream.stop(); a.videoStream = null }, Rc: function (a) {
            if (!a) return a; var c = !1; if (a.video) {
                var d = function (e) {
                    var f = {}; "undefined" !== typeof e.min && (f.min = e.min); "undefined" !== typeof e.max &&
                        (f.max = e.max); "undefined" !== typeof e.ideal && (f.ideal = e.ideal); return f
                }; c = {}; "undefined" !== typeof a.video.width && (c.width = d(a.video.width)); "undefined" !== typeof a.video.height && (c.height = d(a.video.height)); "undefined" !== typeof a.video.facingMode && (c.facingMode = a.video.facingMode)
            } c = { audio: a.audio, video: c }; "undefined" !== typeof a.deviceId && (c.deviceId = a.deviceId); return c
        }, tc: function (a) { var c = a.video.width; a.video.width = a.video.height; a.video.height = c; return a }, Tc: function (a) {
            function c(q) {
                return [480,
                    576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function (x, z) { return Math.abs(x - q) - Math.abs(z - q) })
            } function d(q) { var x = S.Rc(a); e.push(q(x)) } var e = []; if (!a || !a.video) return e; if (a.video.width && a.video.height) {
                if (a.video.width.ideal && a.video.height.ideal) {
                    var f = c(a.video.width.ideal).slice(0, 3), k = c(a.video.height.ideal).slice(0, 3), l = {}, n = 0; for (l.Y = void 0; n < f.length; l = { Y: l.Y }, ++n) {
                    l.Y = f[n]; var p = {}, y = 0; for (p.X = void 0; y < k.length; p = { X: p.X }, ++y)if (p.X = k[y], l.Y !== a.video.width.ideal || p.X !== a.video.height.ideal) {
                        var m =
                            Math.max(l.Y, p.X) / Math.min(l.Y, p.X); m < 4 / 3 - .1 || m > 16 / 9 + .1 || d(function (q, x) { return function (z) { z.video.width.ideal = q.Y; z.video.height.ideal = x.X; return z } }(l, p))
                    }
                    }
                } d(function (q) { return S.tc(q) })
            } a.video.width && a.video.height && (a.video.width.ideal && a.video.height.ideal && d(function (q) { delete q.video.width.ideal; delete q.video.height.ideal; return q }), d(function (q) { delete q.video.width; delete q.video.height; return q })); a.video.facingMode && (d(function (q) { delete q.video.facingMode; return q }), a.video.width &&
                a.video.height && d(function (q) { S.tc(q); delete q.video.facingMode; return q })); e.push({ audio: a.audio, video: !0 }); return e
        }, Td: function (a) { if (S.cc()) { if (!a || !a.video) return !1; var c = a.video.width, d = a.video.height; if (!c || !d) return !1; if (c.ideal && d.ideal && c.ideal > d.ideal) return a.video.height = c, a.video.width = d, !0 } return !1 }, Ja: function (a) {
        a.volume = 0; S.sa(a, "muted"); if (S.Hb()) {
            if (1 === a.volume) {
                var c = function () {
                a.volume = 0; window.removeEventListener("mousemove", c, !1); window.removeEventListener("touchstart", c,
                    !1)
                }; window.addEventListener("mousemove", c, !1); window.addEventListener("touchstart", c, !1)
            } setTimeout(function () { a.volume = 0; S.sa(a, "muted") }, 5)
        }
        }, uc: function (a, c, d) { return new Promise(function (e, f) { if (a.srcObject && a.srcObject.getVideoTracks) { var k = a.srcObject.getVideoTracks(); 1 !== k.length ? f("INVALID_TRACKNUMBER") : (k = k[0], c ? S.get(a, e, f, d) : (k.stop(), e())) } else f("BAD_IMPLEMENTATION") }) }, Wb: function (a, c, d, e) {
            function f(l) { k || (k = !0, d(l)) } var k = !1; return navigator.mediaDevices.getUserMedia(e).then(function (l) {
                function n() {
                    setTimeout(function () {
                        if (a.currentTime) {
                            var p =
                                a.videoWidth, y = a.videoHeight; if (0 === p || 0 === y) f("VIDEO_NULLSIZE"); else {
                                    p && (a.style.width = p.toString() + "px"); y && (a.style.height = y.toString() + "px"); p = { Nc: null, Rd: null, zd: null }; try { var m = l.getVideoTracks()[0]; m && (p.zd = m, p.Nc = m.getCapabilities(), p.Rd = m.getSettings()) } catch (q) { } S.Oc() ? a.parentNode && null !== a.parentNode ? (k || c(a, l, p), setTimeout(function () { a.play() }, 100)) : (document.body.appendChild(a), S.Ja(a), k || c(a, l, p), setTimeout(function () {
                                        a.style.transform = "scale(0.0001,0.0001)"; a.style.position = "fixed";
                                        a.style.bottom = "0px"; a.style.right = "0px"; S.Ja(a); setTimeout(function () { a.play() }, 100)
                                    }, 80)) : k || c(a, l, p)
                                }
                        } else f("VIDEO_NOTSTARTED")
                    }, 700)
                } "undefined" !== typeof a.srcObject ? a.srcObject = l : (a.src = window.URL.createObjectURL(l), a.videoStream = l); S.Ja(a); a.addEventListener("loadeddata", function () { var p = a.play(); S.Ja(a); "undefined" === typeof p ? n() : p.then(function () { n() }).catch(function () { f("VIDEO_PLAYPROMISEREJECTED") }) }, !1)
            }).catch(function (l) { 
                f(l) 
            })
        }, get: function (a, c, d, e) {
            if (!a) return d && d("VIDEO_NOTPROVIDED"),
                !1; if (!S.Ib()) return d && d("MEDIASTREAMAPI_NOTFOUND"), !1; if (e && e.video) { if (S.Gb()) { var f = S.hd(); (12 > f[0] || 12 === f[0] && 2 > f[1]) && S.Td(e) } e.video.width && e.video.width.ideal && (a.style.width = e.video.width.ideal + "px"); e.video.height && e.video.height.ideal && (a.style.height = e.video.height.ideal + "px") } S.sa(a, "autoplay"); S.sa(a, "playsinline"); e && e.audio ? a.volume = 0 : S.sa(a, "muted"); S.Wb(a, c, function () {
                    function k(n) { if (0 === n.length) d("INVALID_FALLBACKCONSTRAINTS"); else { var p = n.shift(); S.Wb(a, c, function () { k(n) }, p) } }
                    var l = S.Tc(e); k(l)
                }, e)
        }, md: function (a) { if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return a(!1, "NOTSUPPORTED"), !1; navigator.mediaDevices.enumerateDevices().then(function (c) { (c = c.filter(function (d) { return d.kind && -1 !== d.kind.toLowerCase().indexOf("video") && d.label && d.deviceId })) && c.length && 0 < c.length ? a(c, !1) : a(!1, "NODEVICESFOUND") }).catch(function () { a(!1, "PROMISEREJECTED") }) }, ge: function (a, c, d) { var e = {}; e[c] = d; c = []; c.push(e); a.applyConstraints({ advanced: c }).catch(function () { }) }
    },
        I = { save: "NNC.json", Cb: 0, Ec: 25, Ta: .2, ea: [45, 55], be: 1 / 3.5, za: [2, 7], Hd: { minScale: .15, maxScale: .6, borderWidth: .2, borderHeight: .2, nStepsX: 6, nStepsY: 5, nStepsScale: 3, nDetectsPerLoop: -1 }, Ud: 50, ec: .5, nb: .4, Ad: 8, yc: .8, xc: 1, Sd: { translationFactorRange: [.0015, .005], rotationFactorRange: [.003, .02], qualityFactorRange: [.9, .98], alphaRange: [.05, 1] }, ya: [.65, 1, .262], ca: [.092, .092, .3], Bc: .2, Dc: 2, Cc: .1, Bd: 8, jc: 1, dd: cb.Ia.bind(null, .3, .7), Zd: 20 }, ha = {
            facingMode: "user", idealWidth: 800,
            idealHeight: 600, minWidth: 480, maxWidth: 1280, minHeight: 480, maxHeight: 1280, rotate: 0, flipX: !1
        }, ba = { pb: -3, xd: -1, error: -2, play: 1, pause: 2 }, ea = ba.pb, t = null, cc = { kb: !1, element: null, W: null, ba: null, v: [0, 0], C: [.5, .5], m: [.5, 0, 0, .5], Oa: 0, qa: null, jb: !1 }, H = null, dc = { pa: null, Ca: null, zb: "./", la: null, V: null, Aa: I.Cb, oc: I.Cb, Ha: !1, ga: !1 }, za = null, W = null, sa = null; var ub = Oa = Xa = Wa = Na = Ma = Ya = Pa = lb = kb = jb = ib = ab = $a = Za = 0; var V = null, ec = { M: 0, O: 0, v: [0, 0], Ga: null }, U = { Qa: null, buffer: null, ca: null, ya: null, R: I.jc, ta: null }, Ta = null, ma = null,
            bb = null, Qa = null, E = { i: 1, $: 0, L: null, ac: !1, dc: 0, qb: 0 }, P = { ra: 0, timestamp: 0, hc: 0, ic: 0, F: I.za[0], ob: I.za[0], kc: 0, ia: 0, le: 1 }, qb = [], rb = [], Jb = {
                VERSION: "1.2.9", init: function (a) {
                    function c() { ea !== ba.error && 2 === ++e && (Ha(), Fb(), Ga(), H.pa && (H.pa(!1, { GL: b, canvasElement: H.V, videoTexture: t.ba.get(), maxFacesDetected: E.i, videoElement: t.element }), Bb()), ob()) } if (ea !== ba.pb) return a.callbackReady && a.callbackReady("ALREADY_INITIALIZED"), !1; ea = ba.xd; t = Object.assign({}, cc); H = Object.assign({}, dc); V = Object.assign({}, ec); E.L =
                        [0]; U.ca = I.ca.slice(0); U.ya = I.ya.slice(0); a.callbackReady && (H.pa = a.callbackReady); a.callbackTrack && (H.Ca = a.callbackTrack); a.nExpressions && (U.R = a.nExpressions); a.expressionsEasings && (U.ta = a.expressionsEasings); "undefined" !== typeof a.animateDelay && (H.Aa = a.animateDelay); "undefined" !== typeof a.NNCpath && (H.zb = a.NNCpath); "undefined" !== typeof a.NNC && (H.la = a.NNC); "undefined" !== typeof a.maxFacesDetected && (E.i = Math.max(1, a.maxFacesDetected)); "undefined" !== typeof a.followZRot && (H.ga = a.followZRot ? !0 : !1); if (E.i >
                            I.Ad) return Da("MAXFACES_TOOHIGH"), !1; if (!a.canvasId && !a.canvas) return Da("NO_CANVASID"), !1; H.V = a.canvas ? a.canvas : document.getElementById(a.canvasId); if (!H.V) return Da("INVALID_CANVASID"), !1; V.M = H.V.width; V.O = H.V.height; if (!V.M || !V.O) return Da("INVALID_CANVASDIMENSIONS"), !1; for (var d = 0; d < E.i; ++d)qb.push(new Float32Array(I.Bd)), rb.push(0); W = Object.create(I.Hd); a.scanSettings && (Object.assign(W, a.scanSettings), -1 !== W.nDetectsPerLoop && (P.F = W.nDetectsPerLoop, P.ob = W.nDetectsPerLoop)); sa = Object.create(I.Sd);
                    a.stabilizationSettings && Object.assign(sa, a.stabilizationSettings); var e = 0; a.videoSettings && a.videoSettings.videoElement ? db(a.videoSettings.videoElement, c) : (a.videoSettings && Object.assign(ha, a.videoSettings), Gb(a.onWebcamAsk, a.onWebcamGet, function (f) { db(f, c) })); Rb(function (f) {
                        if (!Sb()) return !1; za = new yb({}); za.Jd(f.layers); za.Ld({ mc: "gpuRawAvg", Dd: Ub }); u.Ac([{
                            id: "s48", name: "_", da: "attribute vec2 a0;uniform mat2 u32;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u32*a0*vec2(1.,-1.);}",
                            Ba: ["a0"], ma: [2], a: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", c: ["u1", "u32"], precision: "lowp"
                        }, {
                            id: "s49", name: "_", a: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", da: "attribute vec2 a0;uniform sampler2D u33;uniform vec2 u34;uniform float u35,u36;varying vec2 vv0;void main(){vec4 a=texture2D(u33,vec2(.17,u35));vec2 d=a.gb,f=a.a*u34;float b=cos(u36),c=sin(u36);vec2 g=mat2(b,c,-c,b)*a0;vv0=d+g*.5*f,gl_Position=vec4(a0,0.,1.);}",
                            Ba: ["a0"], ma: [2], c: ["u1", "u33", "u34", "u35", "u36"], precision: "lowp"
                        }, {
                            id: "s50", name: "_", a: "uniform sampler2D u37,u33;uniform vec3 u38,u39;uniform float u40,u41,u42,u35,u43,u36,u44;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 f=texture2D(u37,vec2(.625,.625)),g=texture2D(u37,vec2(.875,.625)),a=texture2D(u33,vec2(.17,u35));float b=dot(f,e),h=dot(g,e);bool i=b>u41&&b>h+u42;i?a.r=2.:a.r>u40?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r*=u43;if(a.r<.9)a=vec4(1.,u38);else{a.r*=step(1.9,a.r);float j=dot(e,texture2D(u37,vec2(.875,.875))),k=dot(e,texture2D(u37,vec2(.125,.625))),l=dot(e,texture2D(u37,vec2(.375,.625))),c=cos(u36),d=sin(u36);vec2 m=mat2(c,d*u44,-d/u44,c)*vec2(j,k);a.gba+=vec3(m,l)*u39*a.a;}gl_FragColor=a;}",
                            da: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", c: "u37 u33 u38 u40 u39 u43 u36 u44 u41 u42 u35".split(" ")
                        }, {
                            id: "s51", name: "_", da: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", a: "uniform sampler2D u37;const vec4 e=vec4(.25,.25,.25,.25);const vec3 f=vec3(.5,.5,.5);void main(){float a=dot(e,texture2D(u37,vec2(.125,.875))),b=dot(e,texture2D(u37,vec2(.375,.875))),c=dot(e,texture2D(u37,vec2(.625,.875))),d=dot(e,texture2D(u37,vec2(.625,.625)));vec3 g=vec3(a,b,c)*.5+f;gl_FragColor=vec4(g,d);}",
                            c: ["u37"]
                        }, { id: "s52", name: "_", da: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", a: "uniform sampler2D u37;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=dot(e,texture2D(u37,vec2(.375,.375))),b=dot(e,texture2D(u37,vec2(.625,.375))),c=dot(e,texture2D(u37,vec2(.875,.375))),d=dot(e,texture2D(u37,vec2(.125,.125)));gl_FragColor=vec4(a,b,c,d);}", c: ["u37"] }, {
                            id: "s47", name: "_", a: "uniform sampler2D u33;uniform vec2 u45;uniform float u46;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),c=step(.33,vv0.x);vec4 a=texture2D(u33,vv0+u45);a.a=mix(a.a*u46,a.a,c);vec4 d=floor(255.*a),g=255.*(255.*a-d),b=mix(d,g,f)/255.;b.x=mix(step(a.x,1.5),b.x,c),gl_FragColor=b;}",
                            c: ["u33", "u46", "u45"]
                        }]); Pb(); tb(); sb(); c()
                    }); return !0
                }, destroy: function () { return new Promise(function (a, c) { Jb.toggle_pause(!0, !0).catch(function () { c() }).then(function () { za && za.h(); Aa.h(); za = ma = Ta = null; qb.splice(0); rb.splice(0); ea = ba.pb; a() }) }) }, toggle_pause: function (a, c) { if (!nb()) return Promise.reject(); c = c ? S.uc(t.element, !a, t.qa) : Promise.resolve(); a ? Ab() : ob(); return c }, update_videoSettings: function (a) {
                    Ab(); return new Promise(function (c) {
                        S.uc(t.element, !1, t.qa).then(function () {
                            Object.assign(ha, a);
                            Gb(null, null, function (d) { db(d, function () { Ha(); Ga(); ob(); c() }) })
                        })
                    })
                }, toggle_slow: function (a) { nb() && ea === ba.play && (a && !H.Ha ? (H.oc = H.Aa, W.nDetectsPerLoop = 1, this.set_animateDelay(100), H.Ha = !0) : !a && H.Ha && (W.nDetectsPerLoop = -1, this.set_animateDelay(H.oc), H.Ha = !1)) }, set_animateDelay: function (a) { H.Aa = a }, resize: function () { var a = H.V.width, c = H.V.height; if (!vb() && a === V.M && c === V.O) return !1; V.M = a; V.O = c; tb(); sb(); Ha(); Ga(); t.ba && t.ba.resize(V.M, V.O); return !0 }, set_inputTexture: function (a, c, d) {
                t.v[0] = c; t.v[1] = d;
                    t.kb = !0; Ha(); Bb(); Ga(); u.set("s48"); t.ba.J(); b.activeTexture(b.TEXTURE0); b.bindTexture(b.TEXTURE_2D, a); Q.g(!0, !0)
                }, reset_inputTexture: function () { vb(); t.kb = !1; Ha(); Ga() }, get_videoDevices: function (a) { return S.md(a) }, set_scanSettings: function (a) { Object.assign(W, a); -1 !== W.nDetectsPerLoop && (P.F = W.nDetectsPerLoop, P.ob = W.nDetectsPerLoop); tb(); sb() }, set_stabilizationSettings: function (a) { Object.assign(sa, a) }, set_videoOrientation: function (a, c) { nb() && (ha.flipX = c, ha.rotate = a, Ha(), Ga()) }, update_videoElement: function (a,
                    c) { db(a ? a : t.element, function () { Fb(); Ha(); Ga(); c && c() }) }
            }; return Jb
}; window.JEEFACEFILTERAPI = window.JEEFACEFILTERAPIGEN();
    ; return JEEFACEFILTERAPI;
})();


var choosePhoto = function(){
    document.getElementById('jeeFaceFilterCanvas').style.display = "none";
    document.getElementById('loader').style.display = "none";
    var photo = document.getElementById('choosePhoto')
    photo.style.display = "block";
    var input = document.createElement('input');
    input.type="file";
    photo.appendChild(input);
}