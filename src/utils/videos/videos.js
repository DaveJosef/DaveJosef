import video1 from '../../assets/projects/githubfront.mp4';
import video2 from '../../assets/projects/mariomemorygame.mp4';
import video3 from '../../assets/projects/todoapp.mp4';

const videos = [
    {
        name: "githubfront",
        video: video1,
    },
    {
        name: "mariomemorygame",
        video: video2,
    },
    {
        name: "todoapp",
        video: video3,
    },
];

const getVideo = (project) => videos.find(video => video.name === project.assetsName);

export {videos, getVideo};