import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "unik-cards.firebaseapp.com",
    projectId: "unik-cards",
    storageBucket: "unik-cards.appspot.com",
    messagingSenderId: "111388240499",
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function renderCards(cardData) {
    const cardContainer = document.getElementById('cards');

    cardData.forEach((card) => {
        const cardi = document.createElement("div");
        cardi.classList.add("blurbs-card");
        gsap.from(cardi, {
            scrollTrigger: {
                trigger: cardi,
                end: 'bottom 20%',
                scrub: 2
            },
            scale: .8,
            opacity: 0,
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.out'
        })

        const cardImage = document.createElement("div");
        cardImage.classList.add("article-card");
        cardImage.style.backgroundImage = `url(./media/00${card.img}.jpg)`;
        cardi.appendChild(cardImage);

        const cardDesc = document.createElement("div");
        cardDesc.classList.add("desc-card");
        cardDesc.innerHTML = `
            <article class="article">
                <div class="articlee" style="display:flex;">
                    <div class="author"><span title="${card.author}">By ${card.author}</span></div>
                    <div class="main">
                        <a class="main-link" href="#"><p class="article-header" style="-webkit-line-clamp:3;">${card.title}</p></a>
                        <div class="main-desc"><p style="-webkit-line-clamp:3">${card.description}</p></div>
                    </div>
                    <div class="likes">
                        <span class="line"></span>
                        <div class="likes-container">
                            <div class="views-span"><span class="P7Wc3k has-custom-focus" tabindex="0">${card.viewCount} views</span></div>
                            <div class="likes-span">
                                <span class="h7K_lu" data-hook="like-button-with-count__like-count">
                                    <span aria-hidden="true" class="like-count">${card.likeCount}</span>
                                </span>
                                <span class="likes-svg">
                                    <svg id="like-svg" xmlns="http://www.w3.org/2000/svg" width="19" onclick="increaseLikeCount(this, '${card.id}')" viewBox="0 0 19 19" role="img"><path d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"></path></svg>
                                </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `;
        cardi.appendChild(cardDesc);

        cardContainer.appendChild(cardi);
    });
}

// Fetch data from Firestore and render cards
async function fetchCards(db) {
    const cardsCol = collection(db, 'cards');
    const cardSnapshot = await getDocs(cardsCol);
    const cardList = cardSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    renderCards(cardList);
}

// Call fetchCards on page load
document.addEventListener('DOMContentLoaded', fetchCards(db));


let likedCards = {}; 

async function increaseLikeCount(element, cardId) {
    const cardRef = doc(db, 'cards', cardId);

    try {
        const docSnap = await getDoc(cardRef);
        if (docSnap.exists()) {
            const cardData = docSnap.data();
            const likeCountSpan = element.closest('.likes-span').querySelector('.like-count');
            const likeBtn = element.closest('.likes-svg').querySelector("#like-svg");
            let likeCount = cardData.likeCount;
            let viewCount = cardData.viewCount;

            if (likedCards[cardId]) {
                likeCount--;
                likeBtn.style.fill = "rgba(0, 0, 0, 0)";
                delete likedCards[cardId];
            } else {
                likeCount++;
                likeBtn.style.fill = "#e84a43";
                likedCards[cardId] = true;
                if (viewCount < likeCount) {
                    viewCount++
                }
            }

            likeCountSpan.textContent = likeCount;

            await updateDoc(cardRef, { likeCount: likeCount, viewCount: viewCount });
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error getting document:", error);
    }
}

window.increaseLikeCount = increaseLikeCount;