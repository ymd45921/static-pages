window.CONFIG = {}
CONFIG.fireworks = {
    colors: [
        "102, 167, 221",
        "62, 131, 225",
        "33, 78, 194"
    ]
}
function createFireworks(t={
    numberOfParticules: 20,
    orbitRadius: {
        min: 50,
        max: 100
    },
    circleRadius: {
        min: 10,
        max: 20
    },
    diffuseRadius: {
        min: 50,
        max: 100
    },
    animeDuration: {
        min: 900,
        max: 1500
    }
}) {
    let i = 0
      , n = 0
      , r = ["102, 167, 221", "62, 131, 225", "33, 78, 194"];
    CONFIG.fireworks.colors && (r = CONFIG.fireworks.colors);
    const e = document.querySelector(".fireworks")
      , o = e.getContext("2d");
    function a(e) {
        e.width = window.innerWidth,
        e.height = window.innerHeight,
        e.style.width = window.innerWidth + "px",
        e.style.height = window.innerHeight + "px"
    }
    function d(e, i) {
        let n = {};
        var a;
        return n.x = e,
        n.y = i,
        n.color = "rgba(" + r[anime.random(0, r.length - 1)] + "," + anime.random(.2, .8) + ")",
        n.radius = anime.random(t.circleRadius.min, t.circleRadius.max),
        n.endPos = (a = n,
        e = anime.random(0, 360) * Math.PI / 180,
        i = anime.random(t.diffuseRadius.min, t.diffuseRadius.max),
        i = [-1, 1][anime.random(0, 1)] * i,
        {
            x: a.x + i * Math.cos(e),
            y: a.y + i * Math.sin(e)
        }),
        n.draw = function() {
            o.beginPath(),
            o.arc(n.x, n.y, n.radius, 0, 2 * Math.PI, !0),
            o.fillStyle = n.color,
            o.fill()
        }
        ,
        n
    }
    function s(i) {
        for (let e = 0; e < i.animatables.length; e++)
            i.animatables[e].target.draw()
    }
    function u(i, n) {
        var e = function(e, i) {
            let n = {};
            return n.x = e,
            n.y = i,
            n.color = "#000",
            n.radius = .1,
            n.alpha = .5,
            n.lineWidth = 6,
            n.draw = function() {
                o.globalAlpha = n.alpha,
                o.beginPath(),
                o.arc(n.x, n.y, n.radius, 0, 2 * Math.PI, !0),
                o.lineWidth = n.lineWidth,
                o.strokeStyle = n.color,
                o.stroke(),
                o.globalAlpha = 1
            }
            ,
            n
        }(i, n);
        let a = [];
        for (let e = 0; e < t.numberOfParticules; e++)
            a.push(d(i, n));
        anime.timeline().add({
            targets: a,
            x(e) {
                return e.endPos.x
            },
            y(e) {
                return e.endPos.y
            },
            radius: .1,
            duration: anime.random(t.animeDuration.min, t.animeDuration.max),
            easing: "easeOutExpo",
            update: s
        }).add({
            targets: e,
            radius: anime.random(t.orbitRadius.min, t.orbitRadius.max),
            lineWidth: 0,
            alpha: {
                value: 0,
                easing: "linear",
                duration: anime.random(600, 800)
            },
            duration: anime.random(1200, 1800),
            easing: "easeOutExpo",
            update: s
        }, 0)
    }
    const l = anime({
        duration: 1 / 0,
        update: ()=>{
            o.clearRect(0, 0, e.width, e.height)
        }
    });
    document.addEventListener("mousedown", e=>{
        l.play(),
        e = e,
        i = e.clientX || (e.touches[0] ? e.touches : e.changedTouches)[0].clientX,
        n = e.clientY || (e.touches[0] ? e.touches : e.changedTouches)[0].clientY,
        u(i, n)
    }
    , !1),
    a(e),
    window.addEventListener("resize", a(e), !1)
}
document.addEventListener("DOMContentLoaded", () => {
    createFireworks()
});
console.log("js/firework.js: ", "Event listener is tracked.")
createFireworks()
