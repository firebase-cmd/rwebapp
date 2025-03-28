function goBack() {
    window.location.href = "file:///C:/Users/ak759/Desktop/webiste/index.html";
}

function openPopupMedia(mediaContent) {
    const popupMedia = document.querySelector(".popup-media");
    const videoElement = popupMedia.querySelector("video");
    const imgElement = popupMedia.querySelector("img");

    if (mediaContent.tagName === "VIDEO") {
        videoElement.src = mediaContent.src;
        videoElement.style.display = "block";
        imgElement.style.display = "none";
    } else if (mediaContent.tagName === "IMG") {
        imgElement.src = mediaContent.src;
        imgElement.style.display = "block";
        videoElement.style.display = "none";
    }

    popupMedia.style.display = "block";  
}

function closePopupMedia() {
    const popupMedia = document.querySelector(".popup-media");
    const videoElement = popupMedia.querySelector("video");

    if (!videoElement.paused) {
        videoElement.pause();
    }

    popupMedia.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".popup-media span");
    if (closeButton) {
        closeButton.addEventListener("click", closePopupMedia);
    }

    const mediaItems = document.querySelectorAll(".media");
    mediaItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const mediaContent = item.querySelector("video, img");
            if (mediaContent) {
                openPopupMedia(mediaContent);
            }
        });
    });
});