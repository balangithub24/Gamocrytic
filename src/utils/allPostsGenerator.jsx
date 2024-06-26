import newImages from "../assets/Cards/New";
import upImages from "../assets/Cards/Upcom";
import pcImages from "../assets/Cards/PC";
import mobImages from "../assets/Cards/Mob";
import ps5Images from "../assets/Cards/PS5";

export const generateAllPosts = () => {
  const newTitles = [
    "Night Springs",
    "Monster Hunter",
    "Killer Klowns",
    "Kamaero",
    "Hades",
    "Fading Afternoon",
    "Elden Ring: Shadow of the Erdtree",
    "#Blud",
    "Blockbuster",
    "Autopsy Simulator",
  ];

  const upTitles = [
    "Assassins Creed Shadows",
    "Astro Bot",
    "Collegge Football",
    "Dawntrail",
    "Flintlock",
    "Frostpunk 2",
    "Luigies Mansion",
    "Madden",
    "Outlaws",
    "Silent Hill 2",
  ];

  const mobTitles = [
    "Zelda",
    "Riven",
    "The Legendof Heros",
    "Space Marine",
    "Star Wars",
    "Super Monkey",
    "SWTD",
    "Tadern Talk",
    "Test Drive",
    "The Final Shape",
    "Shin Megami",
    "World Championship",
  ];

  const pcTitles = newTitles.slice().reverse();
  const ps5Titles = upTitles.slice().reverse();

  const categories = [
    "Action",
    "Adventure",
    "RPG",
    "Simulation",
    "Strategy",
    "Sports",
    "Puzzle",
    "Casual",
    "Horror",
  ];

  const scores = [
    83, 69, 95, 78, 61, 99, 72, 53, 85, 66, 47, 88, 79, 68, 92, 74, 51, 97, 62,
    90, 45, 82, 70, 56, 94, 73, 60, 86, 50,
  ];

  const links = ["new", "upcoming", "mobile", "pc", "ps5"];
  const typeTitles = [
    "New Releases",
    "Upcoming Funs",
    "Mobile Games",
    "PC World",
    "PS5 Games",
  ];

  const images = [newImages, upImages, mobImages, pcImages, ps5Images];
  const allTitles = [newTitles, upTitles, mobTitles, pcTitles, ps5Titles];

  // Function to rotate an array by n elements
  const rotateArray = (array, n) => {
    const len = array.length;
    return array.slice(n % len).concat(array.slice(0, n % len));
  };

  const types = links.map((link, linkIndex) => {
    const titles = allTitles[linkIndex % allTitles.length];
    const rotatedScores = rotateArray(scores, 7 * linkIndex);
    const rotatedCategories = rotateArray(categories, 7 * linkIndex);

    const posts = images[linkIndex % images.length].map(
      (image, imageIndex) => ({
        image,
        title: titles[imageIndex % titles.length],
        score: rotatedScores[imageIndex % rotatedScores.length],
        category: rotatedCategories[imageIndex % rotatedCategories.length],
      })
    );

    return {
      link,
      posts,
    };
  });

  return typeTitles.map((type, index) => ({
    type,
    link: types[index].link,
    posts: types[index].posts,
  }));
};
