const addr = "http://api.giphy.com/v1/gifs/search?q=${search+term}&api_key=${YOUR_GIPHY_API_KEY}&limit=2"

$.ajax({
    method: "GET",
    url: addr
})