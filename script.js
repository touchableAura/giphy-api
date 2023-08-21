// &tag=technology&rating=g added to api string for specificity

fetch("https://api.giphy.com/v1/gifs/random?api_key=vWB3zCX6IyL0DHraBEgJ2Zc0A2kK43Ge&tag=crazy&rating=g")
.then(function(response) {
    return response.json(); // convert response to json
})
.then(function(jsonData) {
    console.log(jsonData);
    let gifUrl = jsonData.data.images.original.url;
    console.log(gifUrl);
    let gifImg = document.createElement("img");
    gifImg.setAttribute("src", gifUrl);
    document.body.appendChild(gifImg);

    let gifTitle = jsonData.data.title;
    let caption = document.createElement("h3");
    caption.innerHTML = gifTitle;
    document.body.appendChild(caption);
})