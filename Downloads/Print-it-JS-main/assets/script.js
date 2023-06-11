const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
    // we initialize the selected dot
    let carouselIdx = 0;
    window.addEventListener("load", () => {
        // we get all the dots in the HTML as a collection of dots that we can manipulate
        const dots = document.querySelectorAll(".dots > .dot");
        // the first dot should be the selected dot on page load
        dots[carouselIdx].classList.add("dot_selected");
        // TODO arrows should be identified by ids
        const leftArrow = document.querySelector(".arrow_left");
        const rightArrow = document.querySelector(".arrow_right");
        //SLIDES
        const imageBanner = document.getElementById("bannerImg");
        let slide = slides[carouselIdx];
        let slideImg = slide.image; // you can also write slide["image"]
        let tagLine = slide.tagLine;
        imageBanner.src = `./assets/images/slideshow/${slideImg}`;
        const tagLineBanner = document.getElementById("tagLine");
        tagLineBanner.innerHTML = tagLine;
        /**
         * the image that is displayed should be replaced with the next image
         */
        rightArrow.addEventListener("click",() => {
            // DOT SELECTED PART
            // removing current dot selected
            dots[carouselIdx].classList.remove("dot_selected");
            // change the value of `dotSelectedIdx`
            carouselIdx++;
            // plan the case when the index is too high (maybe reset ?)
            if (carouselIdx > 3) carouselIdx = 0;
            // add class to the selected dot
            dots[carouselIdx].classList.add("dot_selected");
            let slide = slides[carouselIdx];
            let slideImg = slide.image; // you can also write slide["image"]
            let tagLine = slide.tagLine;
            // IMAGE SELECTION PART
            imageBanner.src = `./assets/images/slideshow/${slideImg}`;
            // TAG LINE BANNER PART
            tagLineBanner.innerHTML = tagLine;
        });
        /**
         * the image that is displayed should be replaced with the previous image
         */
        leftArrow.addEventListener("click",() => {
            // DOT SELECTED PART
            // removing current dot selected
            dots[carouselIdx].classList.remove("dot_selected");
            // change the value of `dotSelectedIdx`
            carouselIdx--;
            // plan the case when the index is too high (maybe reset ?)
            if (carouselIdx < 0) carouselIdx = 3;
            // add class to the selected dot
            dots[carouselIdx].classList.add("dot_selected");
            let slide = slides[carouselIdx];
            let slideImg = slide.image; // you can also write slide["image"]
            let tagLine = slide.tagLine;
            // IMAGE SELECTION PART
            imageBanner.src = `./assets/images/slideshow/${slideImg}`;
            // TAG LINE BANNER PART
            tagLineBanner.innerHTML = tagLine;
        });
    });