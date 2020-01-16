
const getGif = (wrd) => (
    $.ajax({
    method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${wrd}&api_key=${'pyMYNFRnSdJEDubZ6K9ZeX85RY8prDTF'}&limit=2`
    })
)

export default getGif;