// All demo copy + images live here so you can re-skin the pitch per client.
// Swap `img` for files in /public (e.g. "/images/01.jpg") when you have real ones.

export const studio = {
  name: "Hardeep Bheora Photography",
  short: "HBP",
  headline: "Refined Wedding Editorials",
  intro:
    "Hardeep Bheora Photography is a wedding photography and film studio based in London and India. We shoot candid, unhurried stories for destination weddings worldwide.",
};

const pic = (seed: string, w = 900, h = 1200) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const quote = {
  text: "Some Days Deserve To Be Lived Twice.",
  author: "HARDEEP",
};

// 15 images. Index 7 (the 8th) is the centre photo that starts full-size.
const files = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "8.webp",
  "7.webp",
  "9.webp",
  "10.webp",
  "11.jpg",
  "12.webp",
  "13.webp",
  "1.jpg",
  "2.jpg",
];

export const gridImages = files.map((f, i) => ({
  id: i + 1,
  img: `/grid/${f}`,
  alt: `Wedding photograph ${i + 1}`,
}));

export const films = [
  {
    id: 1,
    names: "Simran & Jagpreet",
    title: "Simran & Jagpreet – A Royal Celebration in Patiala",
    place: "Patiala",
    year: 2025,
    img: "/films/1.webp",
  },
  {
    id: 2,
    names: "Simran & Jagpreet",
    title: "Simran & Jagpreet – A Royal Celebration in Patiala",
    place: "Patiala",
    year: 2025,
    img: "/films/4.jpg",
  },
  {
    id: 3,
    names: "Harleen & Manbir",
    title: "Harleen & Manbir – A Regal Affair in Nabha",
    place: "Nabha",
    year: 2024,
    img: "/films/7.webp",
  },
  {
    id: 4,
    names: "Aman & Pardeep",
    title: "Aman & Pardeep – A Dream in Punjab",
    place: "Punjab",
    year: 2024,
    img: "/films/2.webp",
  },
];

export const contactImage = "contact.jpg";
