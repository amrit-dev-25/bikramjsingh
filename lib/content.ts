// All demo copy + images live here so you can re-skin the pitch per client.
// Swap `img` for files in /public (e.g. "/images/01.jpg") when you have real ones.

export const studio = {
  name: "Bikram J Singh Photography",
  short: "BJS",
  headline: "Refined Wedding Editorials",
  intro:
    "Bikram J Singh Photography is a wedding photography and film studio based in Canada. We shoot candid, unhurried stories for destination weddings worldwide.",
};

const pic = (seed: string, w = 900, h = 1200) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const quote = {
  text: "Some Days Deserve To Be Lived Twice.",
  author: "Bikram J Singh",
};

// 15 images. Index 7 (the 8th) is the centre photo that starts full-size.
const files = [
  "1.heic",
  "2.heic",
  "3.heic",
  "4.heic",
  "5.heic",
  "6.heic",
  "7.heic",
  "8.heic",
  "9.heic",
  "10.jpg",
  "11.heic",
  "12.heic",
  "13.heic",
  "14.heic",
  "15.heic",
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
    year: 2026,
    img: "/films/1.jpg",
  },
  {
    id: 2,
    names: "Simran & Jagpreet",
    title: "Simran & Jagpreet – A Royal Celebration in Patiala",
    place: "Patiala",
    year: 2026,
    img: "/films/2.heic",
  },
  {
    id: 3,
    names: "Harleen & Manbir",
    title: "Harleen & Manbir – A Regal Affair in Nabha",
    place: "Nabha",
    year: 2025,
    img: "/films/3.heic",
  },
  {
    id: 4,
    names: "Aman & Pardeep",
    title: "Aman & Pardeep – A Dream in Punjab",
    place: "Punjab",
    year: 2025,
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
];

export const contactImage = "contact-bjs.png";
