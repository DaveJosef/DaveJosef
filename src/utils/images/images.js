import image1 from '../../assets/icons/skills/communication.png';
import image2 from '../../assets/icons/skills/team.png';

const images = [
    {
        name: "communication",
        image: image1,
    },
    {
        name: "team",
        image: image2,
    },
];

const getImages = (skill) => images.find(image => image.name === skill.assetsName);

export {images, getImages};