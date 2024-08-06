import './style.css'
import './fonts.css'

const toggle = document.getElementById("menu-toggle")
const links = document.getElementById("menu-links")
document.querySelector('video').playbackRate = 0.5;
// const db = firebase.firestore()
// const increment = firebase.firestore.FieldValue.increment(1)
// const decrement = firebasse.firestore.FieldValue.increment(-1)




toggle.addEventListener("click", () => {
    // show nav links
    console.log("nav unleashed")
    links.classList.value.split(" ")[1] == "visible" ? links.classList.remove("visible") : links.classList.add("visible");

})

// const scrollAnimObjects = document.querySelectorAll(".animReady")

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.remove("animReady");
//             entry.target.classList.add("now-visible");
//             observer.unobserve(entry.target);
//         }
//     })
// }, {
//     threshold: 0.5
// })

// scrollAnimObjects.forEach((animObject) => {
//     observer.observe(animObject)
// })

document.addEventListener("DOMContentLoaded", (event) => {
    function startLoader() {
        let counterElement = document.querySelector(".count p");
        let currentValue = 0;

        function updateCounter() {
            if (currentValue < 100) {
                let increment = Math.floor(Math.random() * 10) + 1;
                currentValue = Math.min(currentValue + increment, 100);
                counterElement.textContent = currentValue;

                let delay = Math.floor(Math.random() * 200) + 25;
                setTimeout(updateCounter, delay);
            }
        }
        updateCounter();
    }

    startLoader();
    gsap.to(".count", {
        opacity: 0,
        delay: 3.5,
        duration: 0.5
    });

    let textWrapper = document.querySelector(".ali6");
    textWrapper.innerHTML = textWrapper.textContent.replace(/./g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false
        })
        .add({
            targets: ".ali6 .letter",
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 1500,
            delay: (el, i) => 30 * i,
            opacity: [0, 1]
        })
        .add({
            targets: '.ali6 .letter',
            translateY: [0, 100],
            easing: "easeOutExpo",
            duration: 3000,
            delay: (el, i) => 2000 + 30 * i,
            opacity: [1, 0]
        });

    gsap.to(".pre-loader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3
    })

    gsap.to(".loader", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75
    })

    gsap.to(".loader-bg", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4
    })

    gsap.to(".loader-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.5
    })

    // gsap.to(".load-header h1", {
    //     y: 200,
    //     ease: "power4.inOut",
    //     duration: 1.5,
    //     delay: 3.75,
    //     stagger: 0.05
    // })
    gsap.from(".hero-header h1", {
        opacity: 1,
        y: 200,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75
    })
    gsap.from(".hero-desc p", {
        opacity: 1,
        y: 200,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4
    })
    gsap.from([".nav-logo", ".menu-item", ".search", ".menu"], {
        opacity: 0,
        y: -100,
        transformOrigin: 'center',
        duration: 2,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 4
    })
    gsap.set('.site-content', {css:{zIndex:1}, delay: 5})
    gsap.from(".hero-img", {
        scrollTrigger: {
            trigger: ".hero-img",
            end: 'bottom 20%',
        },
        scale: .8,
        opacity: 0,
        y: 200,
        transformOrigin: 'center',
        duration: 2,
        ease: 'power4.out'
    })

    gsap.from(".about-pictures", {
        scrollTrigger: {
            trigger: ".about-pictures",
            end: 'bottom 20%',
        },
        scale: .8,
        opacity: 0,
        transformOrigin: 'center',
        duration: 2,
        ease: 'power4.out'
    })

    gsap.from([".about-header", ".about-sub", ".about-desc"], {
        scrollTrigger: {
            trigger: ".about-header",
            end: 'bottom 20%',
        },
        opacity: 0,
        x: 200,
        transformOrigin: 'center',
        duration: 2,
        stagger: 0.25,
        ease: 'power4.out'
    })

    gsap.from([".gradient", ".blurbss"], {
        scrollTrigger: {
            trigger: ".latest-news",
            end: 'bottom 20%',
        },
        opacity: 0,
        scale: .8,
        transformOrigin: 'center',
        duration: 2,
        stagger: 0.25,
        ease: 'power4.out'
    })

    gsap.from(".insta-title h2", {
        scrollTrigger: {
            trigger: ".insta-widget",
            end: 'bottom 20%',
        },
        y: 200,
        opacity: 0,
        transformOrigin: 'center',
        duration: 2,
        ease: 'power4.out'
    })


    gsap.from(".gallery-items", {
        scrollTrigger: {
            trigger: ".gallery-items",
            end: 'bottom 20%',
        },
        opacity: 0,
        scale: .8,
        y: 100,
        transformOrigin: 'center',
        duration: 2,
        stagger: 0.25,
        ease: 'power4.out'
    })

    gsap.from([".notion", ".canva-design", ".waiting-list-btn"], {
        scrollTrigger: {
            trigger: ".notion-container",
            end: 'bottom 20%',
        },
        opacity: 0,
        scale: .7,
        transformOrigin: 'center',
        duration: 2,
        stagger: 0.25,
        ease: 'power4.out'
    })

    // gsap.to(".img", {
    //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    //     ease: "power4.inOut",
    //     duration: 1.5,
    //     delay: 4.5,
    //     stagger: 0.25
    // })
    //gsap.to});100%)",
    //     ease: "power4.inOut",
    //     duration: 1.5,
    //     delay: 4.5,
    //     stagger: 0.25
    // })
});