// animate on scroll effect
AOS.init();

// aos extra staff

// navbar selector
const navlink = document.querySelectorAll(".navbar-nav .nav-link");

navlink.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        navlink.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// register scroll plugins

// var Scrollbar = window.Scrollbar;

const scrollbar = Scrollbar.init(document.querySelector("body"), {
    damping: 0.1,
    delegateTo: document,
});

scrollbar.setPosition(0, 0);
// scrollbar.track.yAxis.element.remove()
scrollbar.track.xAxis.element.remove();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
    },
});

scrollbar.addListener(ScrollTrigger.update);

[].forEach.call(document.querySelectorAll("[data-aos]"), (el) => {
    scrollbar.addListener(() => {
        if (scrollbar.isVisible(el)) {
            el.classList.add("aos-animate");
        }
    });
});

// timeline define

gsap.timeline()
    .to("body", {
        opacity: 1,
        delay: 0.3,
    })
    .from(
        ".navbar",
        {
            opacity: 0,
            y: -200,
            duration: 1,
        },
        "<"
    )
    .from(
        gsap.utils.toArray([
            "#main #home__svg path",
            "#main #home__svg circle",
        ]),
        {
            x: function () {
                return Math.random() * 600;
            },
            y: function () {
                return Math.random() * 600;
            },
            z: function () {
                return Math.random() * 600;
            },
            opacity: 0,
            ease: "power3.in",
            duration: 2.5,
        },
        "<"
    )
    .from(
        gsap.utils.toArray([
            "#main h5",
            "#main h1",
            "#main p",
            "#main a.cus__btn",
        ]),
        {
            opacity: 0,
            y: 250,
            stagger: {
                amount: 1,
            },
        },
        "-=1"
    );
gsap.from("#mobile__svg path", {
    x: function () {
        return gsap.utils.random(-500, 500);
    },
    y: function () {
        return gsap.utils.random(-500, 500);
    },
    delay: 1.2,
    opacity: 0,
    stagger: {
        amount: 4,
    },
    scrollTrigger: {
        trigger: "#feature__property",
    },
});
