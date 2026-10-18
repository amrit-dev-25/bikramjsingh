// All demo copy + images live here so you can re-skin the pitch per client.
// Swap `img` for files in /public (e.g. "/images/01.jpg") when you have real ones.

export const studio = {
  name: "Dream Glimpse",
  short: "HBP",
  headline: "Refined Wedding Editorials",
  intro:
    "Dream Glimpse is a wedding photography and film studio based in India, Canada, US and UK. We shoot candid, unhurried stories for destination weddings worldwide.",
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
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
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
    img: "/films/1.jpg",
  },
  {
    id: 2,
    names: "Simran & Jagpreet",
    title: "Simran & Jagpreet – A Royal Celebration in Patiala",
    place: "Patiala",
    year: 2025,
    img: "/films/2.jpg",
  },
  {
    id: 3,
    names: "Harleen & Manbir",
    title: "Harleen & Manbir – A Regal Affair in Nabha",
    place: "Nabha",
    year: 2024,
    img: "/films/3.jpg",
  },
  {
    id: 4,
    names: "Aman & Pardeep",
    title: "Aman & Pardeep – A Dream in Punjab",
    place: "Punjab",
    year: 2024,
    img: "/films/4.jpg",
  },
  {
    id: 5,
    names: "Aman & Pardeep",
    title: "Aman & Pardeep – A Dream in Punjab",
    place: "Punjab",
    year: 2024,
    img: "/films/5.jpg",
  },
  {
    id: 6,
    names: "Aman & Pardeep",
    title: "Aman & Pardeep – A Dream in Punjab",
    place: "Punjab",
    year: 2024,
    img: "/films/6.jpg",
  },
];

export const contactImage = "contact.png";
