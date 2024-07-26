const toggle = document.getElementById("menu-toggle")
const links = document.getElementById("menu-links")
const cards = document.getElementById("cards")
document.querySelector('video').playbackRate = 0.5;

const cardData = [{
    author: "Nestor Renja",
    title: "Boost Online Presence with Unik Digital Marketing's Services",
    description: "In the ever-evolving landscape of digital marketing, staying ahead of the competition is crucial for businesses looking to thrive in the...",
    viewCount: 0,
    likeCount: 0,
    img: "./media/001.jpg"
}, {
    author: "Nestor Renja",
    title: "Elevate Your Brand with Unik Identity by Unik Digital",
    description: "In today's fast-paced digital world, establishing a strong online presence is essential for businesses to thrive. This is where Unik...",
    viewCount: 2,
    likeCount: 1,
    img: "./media/002.jpg"
},, {
    author: "John Francis",
    title: "UNIK AI : An Intelligent Digital Marketing Tool",
    description: "Imagine an AI that recommends a digital marketing strategy based on your current business needs and siz...",
    viewCount: 0,
    likeCount: 0,
    img: "./media/004.jpg"
}, {
    author: "Nestor Renja",
    title: "Unlock Your Business Potential with Unik Digital Marketing",
    description: "In the era of digital dominance, having a strong online presence is no longer an option but a necessity for businesses. Unik Digital...",
    viewCount: 1,
    likeCount: 1,
    img: "./media/003.jpg"
}]

toggle.addEventListener("click", () => {
    // show nav links
    links.classList.value.split(" ")[1] == "visible" ? links.classList.remove("visible") : links.classList.add("visible");


})

cardData.forEach((card) => {
    const cardi = document.createElement("div");
    cardi.classList.add("blurbs-card")

    const cardImage = document.createElement("div");
    cardImage.classList.add("article-card");
    // Set the background image
    cardImage.style.backgroundImage = `url(${card.img})`;
    cardi.appendChild(cardImage);

    const cardDesc = document.createElement("div");
    cardDesc.classList.add("desc-card")
    cardDesc.innerHTML = `<article class="article">
            <div class="articlee" style="display:flex;">
                <div class="author"><span title="${card.author}" >By ${card.author}</span></div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"><path d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"></path></svg>
                            </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;
    cardi.appendChild(cardDesc);

    cards.appendChild(cardi)
    
})