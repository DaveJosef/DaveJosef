
const videos = [
    {
        name: "githubfront",
        video: "https://res.cloudinary.com/dloygzh7o/video/upload/v1685832150/githubfront_qiegaq.mp4",
    },
    {
        name: "mariomemorygame",
        video: "https://res.cloudinary.com/dloygzh7o/video/upload/v1685832150/mariomemorygame_t3hqqh.mp4",
    },
    {
        name: "todoapp",
        video: "https://res.cloudinary.com/dloygzh7o/video/upload/v1685832168/todoapp_o27exz.mp4",
    },
];

const getVideo = (project) => videos.find(video => video.name === project.assetsName);

export {videos, getVideo};