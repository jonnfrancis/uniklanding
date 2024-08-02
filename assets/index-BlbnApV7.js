import{initializeApp as g}from"https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";import{getAnalytics as m}from"https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";import{getFirestore as f,collection as y,getDocs as h,doc as v,getDoc as C,updateDoc as b}from"https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const w={apiKey:"IzaSyCb1BXSkXYtpKRCaju2zi8hkhpM8z6r1n8",authDomain:"unik-cards.firebaseapp.com",projectId:"unik-cards",storageBucket:"unik-cards.appspot.com",messagingSenderId:"111388240499",appId:"1:111388240499:web:05154cb135c4faf2155806",measurementId:"G-Q0ZQ6ZLFLG"},u=g(w);m(u);const p=f(u);function k(s){const r=document.getElementById("cards");s.forEach(o=>{const t=document.createElement("div");t.classList.add("blurbs-card"),gsap.from(t,{scrollTrigger:{trigger:t,end:"bottom 20%",scrub:2},scale:.8,opacity:0,transformOrigin:"center",duration:2,ease:"power4.out"});const e=document.createElement("div");e.classList.add("article-card"),e.style.backgroundImage=`url(./media/00${o.img}.jpg)`,t.appendChild(e);const a=document.createElement("div");a.classList.add("desc-card"),a.innerHTML=`
            <article class="article">
                <div class="articlee" style="display:flex;">
                    <div class="author"><span title="${o.author}">By ${o.author}</span></div>
                    <div class="main">
                        <a class="main-link" href="#"><p class="article-header" style="-webkit-line-clamp:3;">${o.title}</p></a>
                        <div class="main-desc"><p style="-webkit-line-clamp:3">${o.description}</p></div>
                    </div>
                    <div class="likes">
                        <span class="line"></span>
                        <div class="likes-container">
                            <div class="views-span"><span class="P7Wc3k has-custom-focus" tabindex="0">${o.viewCount} views</span></div>
                            <div class="likes-span">
                                <span class="h7K_lu" data-hook="like-button-with-count__like-count">
                                    <span aria-hidden="true" class="like-count">${o.likeCount}</span>
                                </span>
                                <span class="likes-svg">
                                    <svg id="like-svg" xmlns="http://www.w3.org/2000/svg" width="19" onclick="increaseLikeCount(this, '${o.id}')" viewBox="0 0 19 19" role="img"><path d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"></path></svg>
                                </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `,t.appendChild(a),r.appendChild(t)})}async function L(s){const r=y(s,"cards"),t=(await h(r)).docs.map(e=>({id:e.id,...e.data()}));k(t)}document.addEventListener("DOMContentLoaded",L(p));let l={};async function O(s,r){const o=v(p,"cards",r);try{const t=await C(o);if(t.exists()){const e=t.data(),a=s.closest(".likes-span").querySelector(".like-count"),i=s.closest(".likes-svg").querySelector("#like-svg");let n=e.likeCount,c=e.viewCount;l[r]?(n--,i.style.fill="rgba(0, 0, 0, 0)",delete l[r]):(n++,i.style.fill="#e84a43",l[r]=!0,c<n&&c++),a.textContent=n,await b(o,{likeCount:n,viewCount:c})}else console.log("No such document!")}catch(t){console.error("Error getting document:",t)}}window.increaseLikeCount=O;const E=document.getElementById("menu-toggle"),d=document.getElementById("menu-links");document.getElementById("cards");document.querySelector("video").playbackRate=.5;E.addEventListener("click",()=>{console.log("nav unleashed"),d.classList.value.split(" ")[1]=="visible"?d.classList.remove("visible"):d.classList.add("visible")});document.addEventListener("DOMContentLoaded",s=>{function r(){let t=document.querySelector(".count p"),e=0;function a(){if(e<100){let i=Math.floor(Math.random()*10)+1;e=Math.min(e+i,100),t.textContent=e;let n=Math.floor(Math.random()*200)+25;setTimeout(a,n)}}a()}r(),gsap.to(".count",{opacity:0,delay:3.5,duration:.5});let o=document.querySelector(".ali6");o.innerHTML=o.textContent.replace(/./g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ali6 .letter",translateY:[-100,0],easing:"easeOutExpo",duration:1500,delay:(t,e)=>30*e,opacity:[0,1]}).add({targets:".ali6 .letter",translateY:[0,100],easing:"easeOutExpo",duration:3e3,delay:(t,e)=>2e3+30*e,opacity:[1,0]}),gsap.to(".pre-loader",{scale:.5,ease:"power4.inOut",duration:2,delay:3}),gsap.to(".loader",{height:"0",ease:"power4.inOut",duration:1.5,delay:3.75}),gsap.to(".loader-bg",{height:"0",ease:"power4.inOut",duration:1.5,delay:4}),gsap.to(".loader-2",{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",ease:"power4.inOut",duration:1.5,delay:3.5}),gsap.from(".hero-header h1",{opacity:1,y:200,ease:"power4.inOut",duration:1.5,delay:3.75}),gsap.from(".hero-desc p",{opacity:1,y:200,ease:"power4.inOut",duration:1.5,delay:4}),gsap.from([".nav-logo",".menu-item",".search",".menu"],{opacity:0,y:-100,transformOrigin:"center",duration:2,stagger:.05,ease:"power4.out",delay:4}),gsap.from(".hero-img",{scrollTrigger:{trigger:".hero-img",end:"bottom 20%"},scale:.8,opacity:0,y:200,transformOrigin:"center",duration:2,ease:"power4.out"}),gsap.from(".about-pictures",{scrollTrigger:{trigger:".about-pictures",end:"bottom 20%"},scale:.8,opacity:0,transformOrigin:"center",duration:2,ease:"power4.out"}),gsap.from([".about-header",".about-sub",".about-desc"],{scrollTrigger:{trigger:".about-header",end:"bottom 20%"},opacity:0,x:200,transformOrigin:"center",duration:2,stagger:.25,ease:"power4.out"}),gsap.from([".gradient",".blurbss"],{scrollTrigger:{trigger:".latest-news",end:"bottom 20%"},opacity:0,scale:.8,transformOrigin:"center",duration:2,stagger:.25,ease:"power4.out"}),gsap.from(".insta-title h2",{scrollTrigger:{trigger:".insta-widget",end:"bottom 20%"},y:200,opacity:0,transformOrigin:"center",duration:2,ease:"power4.out"}),gsap.from(".gallery-items",{scrollTrigger:{trigger:".gallery-items",end:"bottom 20%"},opacity:0,scale:.8,y:100,transformOrigin:"center",duration:2,stagger:.25,ease:"power4.out"}),gsap.from([".notion",".canva-design",".waiting-list-btn"],{scrollTrigger:{trigger:".notion-container",end:"bottom 20%"},opacity:0,scale:.7,transformOrigin:"center",duration:2,stagger:.25,ease:"power4.out"})});
