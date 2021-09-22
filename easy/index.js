const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
  title:
      "EDITOR REAGE A VÍDEOS E EFEITOS DO TIKTOK",
    artist:"BrainStorm Tutoriais",
    cover:"files/EDITOR REAGE A VÍDEOS E EFEITOS DO TIKTOK.jpg",
    file: "files/EDITOR REAGE A VÍDEOS E EFEITOS DO TIKTOK.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;
