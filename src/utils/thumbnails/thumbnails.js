
const thumbs = [
    {
        name: "mariomemorygame",
        thumb: "https://res.cloudinary.com/dloygzh7o/image/upload/v1685832177/mariomemorygame_ftbdjg.jpg",
    },
    {
        name: "githubfront",
        thumb: "https://res.cloudinary.com/dloygzh7o/image/upload/v1685832177/githubfront_bjejby.png",
    },
    {
        name: "todoapp",
        thumb: "https://res.cloudinary.com/dloygzh7o/image/upload/v1685832177/todoapp_taffup.png",
    },
];

const getThumbs = (project) => thumbs.find(thumb => thumb.name === project.assetsName);

export {thumbs, getThumbs};