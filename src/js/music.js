const albums = [
  {
    imageURL: "../assets/images/albums/music-parachutes.jpg",
    title: "parachutes",
    year: 2000,
    songs: [
      "don't panic",
      "shiver",
      "spices",
      "sparks",
      "yellow",
      "truble",
      "parachutes",
      "high speed",
      "we never change",
      "everything's not",
    ],
    links: ["../index.html"],
  },
  {
    imageURL: "../assets/images/albums/music-xy.jpg",
    title: "x & y",
    year: 2005,
    songs: [
      "squad one",
      "what if",
      "white shadows",
      "fix you",
      "talk",
      "x & y",
      "speed of sound",
      "a message",
      "low",
      "the hardest part",
      "swallowed in the sea",
      "twisted logic",
      "'til kindom come",
    ],
    links: [""],
  },

  {
    imageURL: "../assets/images/albums/moon-music.jpg",
    title: "moon music",
    year: 2024,
    songs: [
      "moon music",
      "feels like im falling in love",
      "we pray",
      "jupiter",
      "good feeling",
      "🌈",
      "iaam",
      "aeterna",
      "all my love",
      "one world",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-arushofbloodtothehead.jpg",
    title: "a rush of blood to the head",
    year: 2002,
    songs: [
      "politik",
      "im my place",
      "god put a smile upon your face",
      "the scientist",
      "clocks",
      "daylight",
      "green eyes",
      "warning sign",
      "a whisper",
      "a rush of blood to the head",
      "amsterdam",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-buenos-aires.jpg",
    title: "live in buenos aires",
    year: 2018,
    songs: [
      "a head full of dreams",
      "yellow",
      "every teardop is a waterfall",
      "the scientist",
      "got put a smile upon your face",
      "paradise",
      "magic",
      "everglow",
      "clocks",
      "midnight",
      "charlie brown",
      "hdmn for the weekend",
      "fix you",
      "viva la vida",
      "adventure of a lifetime",
      "de mùsica ligera",
      "colour spectrun",
      "im my place",
      "amor argentina",
      "something just like this",
      "a sky full of stars",
      "up&up",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-everyday-life.jpg",
    title: "everyday life",
    year: 2019,
    songs: [
      "sunrise",
      "church",
      "truble in town",
      "broken",
      "daddy",
      "wotw/potp",
      "arabesque",
      "when i need a friend",
      "guns",
      "orphans",
      "èkó",
      "cry cry cry",
      "old friends",
      "بنی آدم",
      "champion of the world",
      "everyday life",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-full-of-dreams.jpg",
    title: "a head full of dreams",
    year: 2015,
    songs: [
      "a head full of dreams",
      "birds",
      "hymn for the weekend",
      "everglow",
      "adventure of the a lifetime",
      "fun",
      "kaleidoscope",
      "army of one",
      "amazing day",
      "colour spectrum",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-ghoststories.jpg",
    title: "ghost stories",
    year: 2014,
    songs: [
      "always in my head",
      "magic",
      "ink",
      "true love",
      "midnight",
      "another's arms",
      "oceans",
      "a sky full of stars",
      "o",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-Kaleidoscope.jpg",
    title: "Kaleidoscope",
    year: 2017,
    songs: [
      "all i can think about is you",
      "miracles (someone special) - coldplay & big sean",
      "aliens",
      "something just like this (tokyo remix) - coldplay & the chainsmokers",
      "hypnotised",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-myloxyloto.jpg",
    title: "myloxyloto",
    year: 2011,
    songs: [
      "mylo xyloto",
      "hurts like heaven",
      "paradise",
      "charlie brown",
      "us against the world",
      "m.m.i.x",
      "every teardrop is a waterfall",
      "major minus",
      "u.f.o",
      "princess of china",
      "up in flames",
      "a hopeful transmission",
      "don't let it break your heart",
      "up with the birds",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-spheres.jpg",
    title: "music of the spheres",
    year: 2021,
    songs: [
      "🪐",
      "higher power",
      "humankind",
      "✨",
      "let somebody go",
      "❤️",
      "people of the pride",
      "biutyful",
      "🌎",
      "my universe",
      "♾️",
      "coloratura",
    ],
    links: [""],
  },
  {
    imageURL: "../assets/images/albums/music-vivalavida.jpg",
    title: "viva la vida",
    year: 2008,
    songs: [
      "life in technicolor",
      "cemeteries of london",
      "lost!",
      "42",
      "lovers in japan / reign of love",
      "yes",
      "viva la vida",
      "violet hill",
      "strawberry swing",
      "death and all his friends",
    ],
    links: [""],
  },
];

// selceting element from html file
const displayButton = document.querySelectorAll(".button__option");
const slideshowSection = document.querySelector(".slideshow__albums");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const dotContainer = document.querySelector(".slideshow__dot-container");

let activeAlbum = 0;

document.addEventListener("DOMContentLoaded", () => {
  createContent(albums);
  displayActiveAlbum();
});

const createContent = (albumsArray) => {
  albumsArray = [...albums];
  albumsArray.forEach((album, index) => {
    const albumLinkWrapper = document.createElement("a");
    albumLinkWrapper.classList.add("slideshow__link-to-album");
    albumLinkWrapper.dataset.index = index;
    albumLinkWrapper.href = "#";

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("slideshow__image-contaner");

    const imageElement = document.createElement("img");
    imageElement.classList.add("slideshow__image");
    imageElement.src = album.imageURL;
    imageElement.alt = `${album.title} album image`;

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("slideshow__links-container");

    const linkDescription = document.createElement("p");
    linkDescription.classList.add("slideshow__links-description");
    linkDescription.textContent = "Links:";

    const albumLink = document.createElement("a");
    albumLink.classList.add("slideshow__link");
    // albumLink.src.textContent = `link${album.links}`;

    const title = document.createElement("h3");
    title.classList.add("slideshow__title");
    title.textContent = album.title;

    const year = document.createElement("p");
    year.classList.add("slideshow__year");
    year.textContent = album.year;

    imageContainer.append(imageElement);
    linkContainer.append(linkDescription, albumLink);
    albumLinkWrapper.append(imageContainer, linkContainer, title, year);
    slideshowSection.append(albumLinkWrapper);

    const dot = document.createElement("span");
    dot.classList.add("slideshow__dot");
    dot.dataset.index = index;
    dot.addEventListener("click", () => {
      showAlbum(index);
    });
    dotContainer.append(dot);
  });
};

const displayActiveAlbum = () => {
  const albums = document.querySelectorAll(".slideshow__link-to-album");
  const dots = document.querySelectorAll(".slideshow__dot");

  albums.forEach((album, index) => {
    album.classList.toggle(
      "slideshow__link-to-album--active",
      index === activeAlbum
    );
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("slideshow__dot--active", index === activeAlbum);
  });
  updateDot();
};

const showAlbum = (index) => {
  activeAlbum = index;
  displayActiveAlbum();
};

const updateDot = () => {
  const dots = document.querySelectorAll(".slideshow__dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("slideshow__dot--active", index === activeAlbum);
  });
};

nextButton.addEventListener("click", () => {
  activeAlbum = (activeAlbum + 1) % albums.length;
  displayActiveAlbum();
});

previousButton.addEventListener("click", () => {
  activeAlbum = (activeAlbum - 1 + albums.length) % albums.length;
  displayActiveAlbum();
});
