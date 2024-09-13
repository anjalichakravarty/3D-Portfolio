import Flipspaces from "/src/assets/images/Flipspaces.png";
import xetc from "/src/assets/images/xetc.png";
import safetyTroop from "/src/assets/images/safetyTroop.png";
import sevenframes from "/src/assets/images/sevenframes.png";
import blender from '../assets/icons/blender.svg'; // Adjust the path and extension as needed
import maya from '../assets/icons/maya.svg';
import max from '../assets/icons/max.svg';
import marvelous from '../assets/icons/marvelous.png';
import cpp from '../assets/icons/cpp.svg';
import html from '../assets/icons/html.svg';
import javascript from '../assets/icons/javascript.svg';
import cinema4d from '../assets/icons/cinema4d.svg';
import zbrush from '../assets/icons/zbrush.svg';
import substance from '../assets/icons/substance.svg';
import photoshop from '../assets/icons/photoshop.svg';
import unrealengine from '../assets/icons/unrealengine.svg';
import vs from '../assets/icons/vs.svg';
import home from '../assets/images/home.svg';
import games from '../assets/images/games.png';
import model from '../assets/images/model.png';
import clothes from '../assets/images/clothes.png';

export const skills = [
    {
        imageUrl: blender,
        name: "Blender",
        type: "Design",
    },
    {
        imageUrl: maya,
        name: "Maya",
        type: "Design",
    },
    {
        imageUrl: max,
        name: "3DS Max",
        type: "Design",
    },
    {
        imageUrl: marvelous,
        name: "Marvelous Designer",
        type: "Design",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: unrealengine,
        name: "Unreal Engine",
        type: "GameDev",
    },
    {
        imageUrl: substance,
        name: "Substance Painter",
        type: "Texture",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "GameDev",
    },
    {
        imageUrl: cinema4d,
        name: "Cinema 4D",
        type: "Design",
    },
    {
        imageUrl: vs,
        name: "Visual Studio Code",
        type: "GameDev",
    },
    {
        imageUrl: zbrush,
        name: "ZBrush",
        type: "Design",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Design",
    }
];

export const experiences = [
    {
        title: "3D Generalist",
        company_name: "ExperientialEtc",
        icon: xetc,
        iconBg: "#e8e8e8",
        date: "Dec 2023 - Present",
        points: [
            "Contributing to the development of visually compelling and cohesive projects.",
            "Modelling, Texturing, Lighting, Rendering, Problem solving.",
            "Steered multiple projects to successful completion.",
            "Acquired new skills and applied them in various projects.",
        ],
    },
    {
        title: "Junior Level Designer",
        company_name: "Flipspaces Technologies",
        icon: Flipspaces,
        iconBg: "#fffde0",
        date: "Feb 2022 - Nov 2023",
        points: [
            "Modelling interior designs in 3DS Max and Blender.",
            "Optimizing/Retopology high poly 3D models into low poly models for Unreal Engine.",
            "Unwrapping and texturing 3D models.",
            "Lighting and Rendering of interior with final output.",
            "Creating walkthrough videos of interior in Unreal Engine."
        ],
    },
    {
        title: "2D Animator Intern",
        company_name: "7 Frames",
        icon: sevenframes,
        iconBg: "#fff4cb",
        date: "Jan 2021 - March 2021",
        points: [
            "Creating educational animated videos from provided illustrations in after effects."
        ],
    },
    {
        title: "2D Animator/Graphic Designer Intern",
        company_name: "Safety Troop",
        icon: safetyTroop,
        iconBg: "#b7fffa",
        date: "Sept 2020 - Jan 2021",
        points: [
            "Creating 2D Explainer videos in after effects.",
            "Designing posts for social media.",
            "Making story board from the given scripts."
        ],
    },
];

// export const socialLinks = [
//     {
//         name: 'Contact',
//         iconUrl: contact,
//         link: '/contact',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/YourGitHubUsername',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/YourLinkedInUsername',
//     }
// ];

export const projects = [
    {
        iconUrl: home,
        theme: 'btn-back-red',
        name: '3D Interior Walkthroughs',
        description: 'Created immersive detailed 3D walkthroughs that showcase detailed environments. These projects are designed to deliver visually engaging and interactive environments for users.',
        link: 'https://drive.google.com/drive/folders/1rmfEnsj87oXgZP6_WmsdOQjNS5pL4TJA?usp=sharing',
    },
    {
        iconUrl: games,
        theme: 'btn-back-green',
        name: '3D/2D Games',
        description: 'Developed a series of mini 3D and 2D games using Unreal Engine and c++, showcasing creativity and technical skills in game design and development. These games feature: Simple yet engaging gameplay mechanics, vibrant visuals, offering dynamic player experiences, and intuitive controls.',
        link: 'https://drive.google.com/drive/folders/1mxbIsKt8ZV0GxxKUOfB5efVeUeKYbMSi?usp=sharing',
    },
    {
        iconUrl: model,
        theme: 'btn-back-blue',
        name: '3D Content',
        description: 'Developed realistic 3D models and anamorphic content, showcasing detailed modeling and immersive visual effects. These projects emphasize technical precision and creativity in creating dynamic, engaging displays.',
        link: 'https://drive.google.com/drive/folders/1MbZ8dIpHDbSiH3TK-9dsy3fXJrbcibEn?usp=sharing',
    },
    {
        iconUrl: clothes,
        theme: 'btn-back-pink',
        name: '3D Clothing Design',
        description: 'Created realistic 3D clothing using Marvelous Designer, focusing on accurate fabric simulation and detailed garment design. These pieces demonstrate a strong understanding of draping, tailoring, and dynamic simulations for high-quality visual results.',
        link: 'https://drive.google.com/drive/folders/1wsEZwQtKNqUdHMcHW6DAqjExza8Wcgim?usp=sharing',
    }
];
