// Name: Noah Monnington
// Date: 10/10/26

const playListContainer = document.querySelector("#playlistContainer");
const addButton = document.querySelector("#addBtn");
const songTitle = document.querySelector("#songTitle");
const artistInput = document.querySelector("#songArtist");

function addSong(title, artist){
    const newArticle = document.createElement('article');
    newArticle.classList.add('songCard');

    const span = document.createElement('span');
    span.textContent = `${title} - ${artist}`;

    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('deleteBtn');
    newRemoveBtn.textContent = 'Delete';

    newArticle.appendChild(span);
    newArticle.appendChild(newRemoveBtn);
    playListContainer.append(newArticle)
}

function handleAddButtonClick(){
    const title = songTitle.value.trim();
    const artist = artistInput.value.trim();

    if (title != '' && artist != '') {
        addSong(title, artist);
        songTitle.value = '';
        artistInput.value = '';
    }
}
addButton.addEventListener("click", handleAddButtonClick)
function handleListClick(event) {
    console.log(`${event.target} is where the click originated from.`)
    if (event.target.classList.contains('deleteBtn')) {
        event.target.parentElement.remove();
    }
}
playListContainer.addEventListener('click', handleListClick);