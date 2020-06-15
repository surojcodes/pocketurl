const searchBar = document.getElementById('search-bar');
const shortenBtn = document.getElementById('shorten-btn');

const resultUI = document.getElementById('result');

const pocketifyAndDisplay = (e) => {
    const longUrl = searchBar.value;
    shorten(longUrl).then(data => {
        //display the short url
        resultUI.innerHTML = `<p class="text-secondary display-6 cold">Your Shorter URL is </p>
                            <hr style="width:15%">
                            <p class="display-5 text-custom-secondary bold" id="shortUrl">${data.data.shortUrl}</p>`
    })
        .catch(err => {
            // display error message
            resultUI.innerHTML = `<p class="text-custom-secondary display-6 bold">ERROR ❌❌</p>
                        <hr style="width:15%">
                        <p class="display-5 text-secondary bold" id="shortUrl">Invalid URL</p>`
        })

    e.preventDefault();
}

shortenBtn.addEventListener('click', pocketifyAndDisplay);
searchBar.addEventListener('keyup', () => {
    let url = searchBar.value;
    if (url === '') {
        resultUI.innerHTML = '';
    }
})

