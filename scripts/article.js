(function () {
    let c = function () {
        document.querySelectorAll(".outline-item-active").forEach(e => e.classList.remove("outline-item-active")), document.querySelectorAll(".outline-item-single.outline-item-open").forEach(e => e.classList.remove("outline-item-open"))
    };
    let d = function () {
        if (n) {
            c();
            let e = document.querySelector('.outline-label[href="#' + (CSS.escape ? CSS.escape(n[0]) : n[0]) + '"]');
            if (e) if (i) {
                const t = e.closest(".outline-item-open>ul>.outline-item-wrapper");
                if (t) t.classList.add("outline-item-active"); else {
                    for (let r = (e = e.closest(".outline-item-wrapper")).parentElement.closest(".outline-item-wrapper"); r;) r = (e = r).parentElement.closest(".outline-item-wrapper");
                    e.classList.add("outline-item-active")
                }
            } else e.closest(".outline-item-wrapper").classList.add("outline-item-active")
        }
    };
    let e = document.body.parentElement, t = [], n = null,
        i = document.body.classList.contains("typora-export-collapse-outline"), r = function (e, t, n) {
            document.addEventListener(e, function (e) {
                if (!e.defaultPrevented) for (let i = e.target; i && i !== this; i = i.parentNode) if (i.matches(t)) {
                    !1 === n.call(i, e) && (e.preventDefault(), e.stopPropagation());
                    break
                }
            }, !1)
        };

    function o() {
        return e.scrollTop
    }

    r("click", ".outline-expander", function () {
        const t = this.closest(".outline-item-wrapper").classList;
        return t.contains("outline-item-open") ? t.remove("outline-item-open") : t.add("outline-item-open"), d(), !1
    }), r("click", ".outline-item", function () {
        const t = this.querySelector(".outline-label");
        if (location.hash = "#" + t.getAttribute("href"), i) {
            const n = this.closest(".outline-item-wrapper").classList;
            n.contains("outline-item-open") || n.add("outline-item-open"), c(), n.add("outline-item-active")
        }
    });
    let a, s, l = function () {
        const e = o();
        n = null;
        for (let i = 0; i < t.length && t[i][1] - e < 60; i++) n = t[i]
    };
    window.addEventListener("scroll", function () {
        a && clearTimeout(a), a = setTimeout(function () {
            l(), d()
        }, 300)
    });
    const u = function () {
        s = setTimeout(function () {
            !function () {
                t = [];
                const e = o();
                document.querySelector("#write").querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(n => {
                    const i = n.getAttribute("id");
                    t.push([i, e + n.getBoundingClientRect().y])
                })
            }(), l(), d()
        }, 300)
    };
    window.addEventListener("resize", function () {
        s && clearTimeout(s), u()
    }), u()
})();