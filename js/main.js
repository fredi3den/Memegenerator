fetch("https://api.imgflip.com/get_memes", {

    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const meme = response.data.memes[~~(Math.random() * response.data.memes.length)];

        document.getElementById('name').innerHTML = meme.name;
        document.getElementById('image').src = meme.url;
    })
    .catch(err => {
        console.error(err);
    });