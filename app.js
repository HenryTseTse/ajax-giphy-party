const gifArea = $("#gif-container");
const searchInput = $('#search-box');

$("form").on("submit", async function(e) {
    e.preventDefault();

    let searchVal =  searchInput.val();
    searchInput.val("");

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params : {
            q: searchVal,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
        }
    });
    appendGif(res.data);
});

function appendGif(res) {
    let numOfGifs = res.data.length;
    if (numOfGifs) {
        let idx = Math.floor(Math.random() * numOfGifs);
        let newGif = $("<img>", {
            src: res.data[idx].images.original.url,
        });
        gifArea.append(newGif);
    }
};

$("#delete").on("click", function() {
    gifArea.empty();
  });