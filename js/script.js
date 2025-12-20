
const movies = [
    {
        title: "Интерстеллар",
        description: "Научно-фантастический фильм о путешествии за пределы галактики.",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
    },
    {
        title: "Начало",
        description: "Фильм о проникновении в сны и управлении подсознанием.",
        image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f"
    },
    {
        title: "Матрица",
        description: "Человечество живёт в иллюзии, созданной машинами.",
        image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
    },
    {
        title: "Темный рыцарь",
        description: "Бэтмен против хаоса, который сеет Джокер.",
        image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66"
    },
    {
        title: "Гладиатор",
        description: "История генерала, ставшего гладиатором.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        title: "Аватар",
        description: "Фантастический мир Пандоры и борьба за его будущее.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
    }
];

const grid = document.getElementById("moviesGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-content">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <button>Подробнее</button>
        </div>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => {
        modalTitle.textContent = movie.title;
        modalDescription.textContent = movie.description;
        modal.style.display = "flex";
    });

    grid.appendChild(card);
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});