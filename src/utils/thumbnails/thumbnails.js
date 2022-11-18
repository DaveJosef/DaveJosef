import thumb1 from '../../assets/projects/thumbnails/mariomemorygame.jpg';
import thumb2 from '../../assets/projects/thumbnails/githubfront.png';
import thumb3 from '../../assets/projects/thumbnails/todoapp.png';

const thumbs = [
    {
        name: "mariomemorygame",
        thumb: thumb1,
    },
    {
        name: "githubfront",
        thumb: thumb2,
    },
    {
        name: "todoapp",
        thumb: thumb3,
    },
];

const getThumbs = (project) => thumbs.find(thumb => thumb.name === project.assetsName);

export {thumbs, getThumbs};