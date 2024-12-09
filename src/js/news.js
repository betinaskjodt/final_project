const news = [
  {
    date: "Desmber 2, 2024",
    title: "Chris & Jonny to play special show for Crisis in London on Tuesday",
    description1:
      "On Tuesday evening (10 December), Chris and Jonny will play a very special, one-off show at Hackney Church in London, to raise funds towards Crisis’s vital work helping those in the UK experiencing homelessness.",
    description2:
      "The tickets are available in a prize draw, which is open now to UK residents. Enter the prize draw here. All proceeds from the draw will go to Crisis. The prize draw will close at 12 noon (GMT) on Monday, 9 December.",
    description3:
      "The randomly-selected winners be notified that afternoon, with 150 winners each receiving a pair of tickets.",
    description4:
      "All tickets will be strictly non-transferable and winners will be required to show photo ID to gain entry.",
    imageURL: "../assets/images/news/news-allproceedstocrisis.webp",
  },
  {
    date: "November 14, 2024",
    title: "Watch The Karate Kid video",
    description1:
      "Watch the new video for The Karate Kid, taken from the expanded Full Moon Edition of Moon Music.",
    description2:
      "The video stars legendary actor Ralph Macchio (The Karate Kid and Cobra Kai) as a down-on-his-luck busker who gets his shot at a Coldplay stadium show in Melbourne.",
    video:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/8vCD_lK_B1w?si=5d0uN8Kcbw_-HWPW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    imageURL: "../assets/images/news/news-thekaratekid.webp",
  },
  {
    date: "October 1, 2024",
    title: "MOON MUSiC out today - get the TOUR EDITION",
    description1: "Coldplay’s new album, Moon, Music, is out today everywhere!",
    description2:
      "And for a limited time, you can get the special Tour Edition from the Coldplay Store, which features the full, new album alongside ten exclusive live tracks from the Music Of The Spheres World Tour. Plus it comes with an 80-page digital booklet of photography from the tour.",
    albumtitle: "MOON MUSIC",
    albumList: [
      "MOON MUSiC",
      "feelslikeimfallinginlove",
      "WE PRAY ft Little Simz, Burna Boy, Elyanna & TINI",
      "JUPiTER",
      "GOOD FEELiNGS ft Ayra Starr",
      "iAAM",
      "AETERNA",
      "ALL MY LOVE",
      "ONE WORLD",
    ],
    imageURL: "../assets/images/news/news-moonmusic.jpg",
  },
  {
    date: "November 24, 2024",
    title: "SEE THE ONE WORLD CREDITS",
    description1:
      "In November 2023, we asked Coldplay fans to add their voices to a new song, ONE WORLD, by uploading themselves singing Ahhhhh for a few seconds",
    description2:
      "Within a week, we had received 137,204 unique recordings, from 207 different countries / territories.",
    description3:
      "This cornucopia of voices was then brought together by the wizardry of Peter Chilvers to form a very special vocal arrangement on ONE WORLD, which you can hear at the end of our new album Moon Music.",
    description4:
      "137,204 thankyous to all of you who turned this dream into a stereophonic reality.",
    imageURL: "../assets/images/news/news-oneworld.webp",
  },
  {
    date: "Agust 12, 2024",
    title: "Dolor sit amet.",
    description1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, architecto! Repellendus, accusantium aut consequuntur necessitatibus aspernatur sequi. Delectus voluptate doloremque, illo tenetur incidunt repellat sapiente odit, commodi aliquam consequuntur architecto",
    description2:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolores amet unde rem expedita voluptatibus nam! Cumque quaerat accusamus, sunt mollitia tenetur tempora impedit, dolorum fuga consequatur illum culpa facere doloribus at sit repudiandae soluta voluptates nobis, optio placeat esse. Laudantium voluptates iusto, aspernatur iste tempora dignissimos, sed numquam maxime maiores et eveniet a alias deserunt delectus quis accusamus eum! Distinctio, id aliquid doloremque totam dolore voluptatum illum magni optio beatae pariatur nemo nihil voluptatem facilis odit tempora inventore iusto nisi a. Id repellendus odio at iste odit rerum dolor consectetur necessitatibus, consequuntur vero perferendis. Cumque quod optio mollitia illum!",
    imageURL: "../assets/images/news/consert.webp",
  },
  {
    date: "April 4, 2024",
    title: "Lorem ipsum dolor sit amet.",
    description1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, architecto! Repellendus, accusantium aut consequuntur necessitatibus aspernatur sequi. Delectus voluptate doloremque, illo tenetur incidunt repellat sapiente odit, commodi aliquam consequuntur architecto",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, architecto! Repellendus, accusantium aut consequuntur necessitatibus aspernatur sequi. Delectus voluptate doloremque, illo tenetur incidunt repellat sapiente odit, commodi aliquam consequuntur architecto",
    description3:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolores amet unde rem expedita voluptatibus nam! Cumque quaerat accusamus, sunt mollitia tenetur tempora impedit, dolorum fuga consequatur illum culpa facere doloribus at sit repudiandae soluta voluptates nobis, optio placeat esse. Laudantium voluptates iusto, aspernatur iste tempora dignissimos, sed numquam maxime maiores et eveniet a alias deserunt delectus quis accusamus eum! Distinctio, id aliquid doloremque totam dolore voluptatum illum magni optio beatae pariatur nemo nihil voluptatem facilis odit tempora inventore iusto nisi a. Id repellendus odio at iste odit rerum dolor consectetur necessitatibus, consequuntur vero perferendis. Cumque quod optio mollitia illum!",
    imageURL: "../assets/images/news/news-runingmanbaloons.webp",
  },
];

const newsCardSection = document.querySelector(".news");
const newsArticleSection = document.querySelector(".news-content");

document.addEventListener("DOMContentLoaded", () => {
  createContent(news);
  displayNewsArticle(news);
});

const createContent = () => {
  news.forEach((news, index) => {
    const newsContainer = document.createElement("div");
    newsContainer.classList.add("news__card");
    newsContainer.dataset.index = index;

    const newsDate = document.createElement("span");
    newsDate.classList.add("news__card-date");
    newsDate.textContent = news.date;

    const newsImage = document.createElement("img");
    newsImage.classList.add("news__card-img");
    newsImage.src = news.imageURL;
    newsImage.alt = `image of ${news.title}`;

    const newsTitle = document.createElement("h2");
    newsTitle.classList.add("news__card-title");
    newsTitle.textContent = news.title;

    const newsLink = document.createElement("a");
    newsLink.classList.add("news__card-link");

    const linkbutton = document.createElement("button");
    linkbutton.classList.add("news__card-link-button");
    linkbutton.dataset.index = index;
    linkbutton.textContent = "Read more";

    const buttonIcon = document.createElement("i");
    buttonIcon.className = "fa-solid fa-arrow-right fa-xl";
    buttonIcon.classList.add("news__card-link-icon");

    linkbutton.appendChild(buttonIcon);
    newsLink.appendChild(linkbutton);
    newsContainer.append(newsDate, newsImage, newsTitle, newsLink);
    newsCardSection.append(newsContainer);
  });
};

const displayNewsArticle = () => {
  const linkbuttons = document.querySelectorAll(".news__card-link-button");

  linkbuttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index || e.target.parentNode.dataset.index;
      const item = news[index];

      newsArticleSection.textContent = "";
      newsArticleSection.classList.add("visible");
      newsArticleSection.classList.remove("hidden");

      newsCardSection.classList.add("news--hidden");

      const newsArticleContainer = document.createElement("div");
      newsArticleContainer.classList.add("news__container");

      const newsArticleTitle = document.createElement("h2");
      newsArticleTitle.classList.add("news__title");
      newsArticleTitle.textContent = item.title;

      const backButton = document.createElement("button");
      backButton.classList.add("news__back-button");
      backButton.textContent = "close";

      const backButtonIcon = document.createElement("i");
      backButtonIcon.className = "fa-solid fa-xmark";
      backButtonIcon.classList.add("news__back-button-icon");

      backButton.append(backButtonIcon);
      backButton.addEventListener("click", () => {
        newsArticleSection.textContent = "";
        newsCardSection.classList.remove("news--hidden");
      });

      newsArticleContainer.append(backButton, newsArticleTitle);

      //   did not manage to solve. and i know innerHTML suddent be used for security resons 🥲
      //   if (item.video) {
      //     const newsArticleVideoContainer = document.createElement("div");
      //     newsArticleVideoContainer.classList.add("news__video");
      //     // newsArticleVideoContainer.innerHTML = item.video;
      //     newsArticleContainer.append(newsArticleVideoContainer);
      //   }

      if (item.imageURL) {
        const newsArticleImage = document.createElement("img");
        newsArticleImage.classList.add("news__image");
        newsArticleImage.src = item.imageURL;
        newsArticleImage.alt = `ìmage of ${item.title}`;
        newsArticleContainer.append(newsArticleImage);
        if (item.video === true) {
          newsArticleContainer.remove(newsArticleImage);
        }
      }

      Object.keys(item).forEach((key) => {
        if (key.startsWith("description")) {
          const newsArticleDescription = document.createElement("p");
          newsArticleDescription.classList.add("news__description");
          newsArticleDescription.textContent = item[key];
          newsArticleContainer.append(newsArticleDescription);
        }
      });

      if (item.albumList) {
        const newsArticlelistContent = document.createElement("div");
        newsArticlelistContent.classList.add("news__list-container");
        const newsArticleListTitle = document.createElement("h3");
        newsArticleListTitle.classList.add("news__list-title");
        newsArticleListTitle.textContent = item.albumtitle;
        const newsArticleList = document.createElement("ol");
        newsArticleList.classList.add("news__list");
        item.albumList.forEach((song) => {
          const newsArticleSongListItem = document.createElement("li");
          newsArticleSongListItem.textContent = song;
          newsArticleSongListItem.classList.add("news__list-item");
          newsArticleList.append(newsArticleSongListItem);
        });

        newsArticlelistContent.append(newsArticleListTitle, newsArticleList);
        newsArticleContainer.append(newsArticlelistContent);
      }

      newsArticleSection.append(newsArticleContainer);

      newsCardSection.classList.add("hidden");
      newsArticleContainer.classList.add("visible");
    });
  });
};
