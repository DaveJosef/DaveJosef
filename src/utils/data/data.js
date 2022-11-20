import { HollowAnchor } from '../../components/HollowAnchor/HollowAnchor';
import download from '../../assets/icons/download.png';
import { Anchor } from '../../components/Anchor/Anchor';
import { Icon } from '../../components/Icon/Icon';

class MultiLanguageString {

    constructor (portuguese, english) {
        this.portuguese = portuguese;
        this.english = english;
    }

}

function getString(instance, language) {
    return instance[language];
}

const LANGUAGE_LEVELS = (language) => {
    return {
        BEGINNER: language === 'portuguese' ? "Iniciante" : "Beginner",
        INTERMEDIARY: language === 'portuguese' ? "Intermediário" : "Intermediary",
        ADVANCED: language === 'portuguese' ? "Avançado" : "Advanced",
        NATIVE: language === 'portuguese' ? "Nativo" : "Native",
    };
};

const persona = {
    presentation: new MultiLanguageString(
        "Como vai? Sou José David, Junior Dev 👋",
        "How're you doing? I'm José David, Junior Dev 👋"
    ),
    objective: new MultiLanguageString(
        "🎯 Almejo desenvolvimento pessoal ao implementar soluções inteligentes para a empresa.",
        "🎯 I aim for developing myself while coding smart solutions for the company."
    ),
    currentlyDoing: new MultiLanguageString(
        <>Para tal, estou inscrito no <HollowAnchor href="https://startcapgemini.com.br/#:~:text=O%20Programa%20START%20da%20Capgemini%20foi%20criado%20para,sua%20idade.%20Jornada%20online%20e%20gratuita%20de%20forma%C3%A7%C3%A3o">Programa Start da Capgemini</HollowAnchor></>,
        <>For that purpose, I'm committed to the <HollowAnchor href="https://startcapgemini.com.br/#:~:text=O%20Programa%20START%20da%20Capgemini%20foi%20criado%20para,sua%20idade.%20Jornada%20online%20e%20gratuita%20de%20forma%C3%A7%C3%A3o">Capgemini's Start Program</HollowAnchor></>,
    ),
    description: new MultiLanguageString(
        "20 anos, apaixonado por Design de Qualidade, admiro muito trabalho em equipe. Objetivo de contratação: quero muito ser contratado para impulsionar minha carreira fazendo o negócio crescer, pois o que eu aprendi na faculdade dá um ótimo fundamento para o que eu irei precisar no mercado, como trabalho em equipe, gerenciamento de tempo e as principais tecnologias para desenvolvimento tanto Web quanto Mobile. Habilidades: NodeJS, React, React Native, CSS, API REST com Spring e/ou Express. 3 organizações que me identifico: Capgemini, Luby, TQI.",
        "I'm a twenty years old guy, passionate about Design with Quality, who relates to the efficiency of teamwork. Hiring goals: I want to get hired in order to boost my career by making the business grow, because what I learned in graduation gets me a significative background for what I will need in my goal, for instance, teamwork, time management and the main tecnologies for Web development as well as Mobile programming. Skills: NodeJS, React, React Native, CSS, API REST with Spring and/or Express. Companies that inspires me: Capgemini, Luby, TQI.",
    ),
    githubLink: "https://github.com/DaveJosef",
    linkedinLink: "https://www.linkedin.com/in/jos%C3%A9-david-de-oliveira-sousa-99bba4125/",
    cvDownloadLink: "https://drive.google.com/uc?export=download&id=1oLxTnRhnKa_NDxRQqia-MRnzaW-FtG9S",
    email: "josedaaaaavid@gmail.com",
    background: [
        {
            name: new MultiLanguageString(
                "Bootcamp Spring Framework Experience",
                "Spring Framework Experience Online Bootcamp"
            ),
            location: "Digital Innovation One",
            startAt: new Date("2022/07/19"),
            finishAt: new Date("2022/08/05"),
            certificateLink: "https://www.dio.me/certificate/19BB6F41/",
        },
        {
            name: new MultiLanguageString(
                "Bootcamp TQI Fullstack Developer",
                "TQI Fullstack Developer Online Bootcamp"
            ),
            location: "Digital Innovation One",
            startAt: new Date("2022/05/19"),
            finishAt: new Date("2022/07/20"),
            certificateLink: "https://www.dio.me/certificate/AB7EF6FE/",
        },
        {
            name: new MultiLanguageString(
                "Tecnologia em Análise e Desenvolvimento de Sistemas",
                "Technology in System Development and Analysis"
            ),
            location: "IFPB campus Cajazeiras",
            startAt: new Date("2019/02/25"),
            finishAt: new Date("2022/07/01"),
        },
        {
            name: new MultiLanguageString(
                "Ensino Médio",
                "High School"
            ),
            location: "E. E. E. I. E. F. M. Dr. Thomaz Pires, Sousa - PB",
            startAt: new Date("2015/01/01"),
            finishAt: new Date("2018/01/01"),
        },
    ],
    languages: new MultiLanguageString(
        [
            {
                language: "Português",
                reading: LANGUAGE_LEVELS('portuguese').NATIVE,
                writing: LANGUAGE_LEVELS('portuguese').NATIVE,
                speaking: LANGUAGE_LEVELS('portuguese').NATIVE,
                listening: LANGUAGE_LEVELS('portuguese').NATIVE,
            },
            {
                language: "Inglês",
                reading: LANGUAGE_LEVELS('portuguese').ADVANCED,
                writing: LANGUAGE_LEVELS('portuguese').ADVANCED,
                speaking: LANGUAGE_LEVELS('portuguese').BEGINNER,
                listening: LANGUAGE_LEVELS('portuguese').INTERMEDIARY,
            },
        ],
        [
            {
                language: "Portuguese",
                reading: LANGUAGE_LEVELS('english').NATIVE,
                writing: LANGUAGE_LEVELS('english').NATIVE,
                speaking: LANGUAGE_LEVELS('english').NATIVE,
                listening: LANGUAGE_LEVELS('english').NATIVE,
            },
            {
                language: "English",
                reading: LANGUAGE_LEVELS('english').ADVANCED,
                writing: LANGUAGE_LEVELS('english').ADVANCED,
                speaking: LANGUAGE_LEVELS('english').BEGINNER,
                listening: LANGUAGE_LEVELS('english').INTERMEDIARY,
            },
        ],
    )
};

const getPersona = (language) => {
    const {
        presentation,
        objective,
        currentlyDoing,
        description,
        githubLink,
        linkedinLink,
        cvDownloadLink,
        email,
        background,
        languages
    } = persona;

    return {
        presentation: getString(presentation, language),
        objective: getString(objective, language),
        currentlyDoing: getString(currentlyDoing, language),
        description: getString(description, language),
        githubLink,
        linkedinLink,
        cvDownloadLink,
        email,
        background,
        languages: getString(languages, language),
    };
}

const getSection = (language, t) => {
    const {
        title,
        introduction,
        conclusion
    } = sections.find(section => section.title[language] === t[language]);

    return {
        title: getString(title, language),
        introduction: getString(introduction, language),
        conclusion: getString(conclusion, language),
    };
}

const getProject = (language, project) => {
    const 
    {
        assetsName,
        name,
        catchLine,
        description,
        previewLink,
        downloadLink,
        githubLink,
        linkedinLink,
        finishMonth,
        finishYear,
        tags,
    } = project;

    return {
        assetsName,
        name: getString(name, language),
        catchLine: getString(catchLine, language),
        description: getString(description, language),
        previewLink,
        downloadLink,
        githubLink,
        linkedinLink,
        finishMonth,
        finishYear,
        tags,
    };
}

const getTag = (id) => {
    return tags.find(tag => tag.id === id);
}

const tags = [
    {
        id: 1,
        name: "REACT",
        assetsName: "reactjs",
    },
    {
        id: 3,
        name: "HTML",
        assetsName: "w3_html5",
    },
    {
        id: 4,
        name: "CSS",
        assetsName: "w3_css",
    },
    {
        id: 5,
        name: "JS",
        assetsName: "javascript",
    },
    {
        id: 8,
        name: "JAVA",
        assetsName: "java",
    },
    {
        id: 9,
        name: "SQL",
        assetsName: "mysql",
    },
];

const tags_projects = [
    {
        project: 1,
        tag: 3,
    },
    {
        project: 1,
        tag: 4,
    },
    {
        project: 1,
        tag: 5,
    },
    {
        project: 2,
        tag: 8,
    },
    {
        project: 2,
        tag: 9,
    },
    {
        project: 3,
        tag: 1,
    },
    {
        project: 3,
        tag: 3,
    },
    {
        project: 3,
        tag: 4,
    },
    {
        project: 3,
        tag: 5,
    },
];

const projects = [
    {
        assetsName: "mariomemorygame",
        name: new MultiLanguageString(
            "Jogo da Memória de Mario", "Mario Memory Game"
        ),
        catchLine: new MultiLanguageString(
            "Jogo em Javascript simplesmente Imersivo",
            "Simply immersive Javascript game"
        ),
        description: new MultiLanguageString(
            <p>Jogo da memória com JavaScript, CSS3 e HMTL5. Eu o fiz imaginando como a Nintendo faria um jogo da memória de Mario. Dá para se dizer que aprendi bastante com este projeto. Nessa atividade, eu aprendi como fazer transições em CSS bem como tivemos contato com o 3D na estilização.</p>,
            <p>Memory game with JavaScript, CSS3 and HMTL5. I did it wondering how Nintendo would make a mario memory game. You could say I learned a lot from this project. In this activity, I learned how to make transitions in CSS as well as we had contact with 3D in the styles.</p>
        ),
        previewLink: "https://davejosef.github.io/Desafio-JavaScript-Dio-TQI-Bootcamp/",
        downloadLink: "",
        githubLink: "https://github.com/DaveJosef/Desafio-JavaScript-Dio-TQI-Bootcamp",
        linkedinLink: "https://www.linkedin.com/posts/jos%C3%A9-david-de-oliveira-sousa-99bba4125_javascript-css-html-activity-6944302320457297920-GaM1?utm_source=share&utm_medium=member_desktop",
        finishMonth: 6,
        finishYear: 2022,
        tags: [3, 4, 5],
    },
    {
        assetsName: "todoapp",
        name: new MultiLanguageString(
            "ToDo App", "ToDo App"
        ),
        catchLine: new MultiLanguageString(
            "Lista de afazeres feita com javax Swing e integrada a SQL",
            "SQL integrated javax Swing Tasklist manager",
        ),
        description: new MultiLanguageString(
            <>
                <p>Aplicação de lista de afazeres com java Swing e mysql - feito no curso LA3 disponibilizado no <HollowAnchor href="https://startcapgemini.com.br/#:~:text=O%20Programa%20START%20da%20Capgemini%20foi%20criado%20para,sua%20idade.%20Jornada%20online%20e%20gratuita%20de%20forma%C3%A7%C3%A3o">Programa Start da Capgemini</HollowAnchor>, com o auxílio das aulas do professor <a href='https://github.com/marciomichelluzzi/' target='_blank' rel='noreferrer'>Marcio Michelluzzi</a>.</p>
                <p>O projeto inclui um sistema de tags e tem até um esboço de autenticação, contando com as seguintes funcionalidades:</p>
                <ul>
                    <li>Cadastro e login de Users;</li>
                    <li>Cadastro de projetos;</li>
                    <li>Cadastro, Remoção e Atualização de Tarefas;</li>
                    <li>Cadastro de Tags.</li>
                </ul>
            </>,
            <>
                <p>To-do list app with java Swing and mysql - made in the LA3 course available in the <HollowAnchor href="https://startcapgemini.com.br/#:~:text=O%20Programa%20START%20da%20Capgemini%20foi%20criado%20para,sua%20idade.%20Jornada%20online%20e%20gratuita%20de%20forma%C3%A7%C3%A3o">Capgemini's Start Program</HollowAnchor>, with the help of the professor <a href='https://github.com/marciomichelluzzi/' target='_blank' rel='noreferrer'>Marcio Michelluzzi</a>{"'s"} classes.</p>
                <p>The project includes a tag system and even has an authentication sketch, with the following features:</p>
                <ul>
                    <li>Registering and login of Users;</li>
                    <li>Registering of projects;</li>
                    <li>Registering, Deletion and Updating of Tasks;</li>
                    <li>Registering of Tags.</li>
                </ul>
            </>
        ),
        previewLink: "",
        downloadLink: "https://drive.google.com/uc?export=download&id=1qgcUVYHEDjLug_gy9q_EhfdCDtIedB3w",
        githubLink: "https://github.com/DaveJosef/Projeto-LA3-Capgemini-Start",
        linkedinLink: "https://www.linkedin.com/posts/jos%C3%A9-david-de-oliveira-sousa-99bba4125_java-swing-mysql-activity-6992525541463474177-0WKL?utm_source=share&utm_medium=member_desktop",
        finishMonth: 10,
        finishYear: 2022,
        tags: [8, 9],
    },
    {
        assetsName: "githubfront",
        name: new MultiLanguageString(
            "Frontend do Github", "Github Frontend"
        ),
        catchLine: new MultiLanguageString(
            "Consumindo a API do Github com ReactJS",
            "Github API Consumption with ReactJS",
        ),
        description: new MultiLanguageString(
            <>
                <p>Aplicação em React feita para disponibilizar em um interface visual altamente componentizada dados sobre os usuários e seus repositórios do Github.</p>
                <p>O projeto conta com as seguintes funcionalidades:</p>
                <ul>
                    <li>exibição de usuário;</li>
                    <li>exibição de repositórios de dado usuário;</li>
                    <li>exibição de repositórios favoritados por dado usuário.</li>
                </ul>
            </>,
            <>
                <p>React app that makes available in a highly componentized UI data about users and their respective Github repositories.</p>
                <p>The project has the following features:</p>
                <ul>
                    <li>user view;</li>
                    <li>display of given user's repositories;</li>
                    <li>display of repositories favorited by a given user.</li>
                </ul>
            </>
        ),
        previewLink: "https://github-api-interface.netlify.app/",
        downloadLink: "",
        githubLink: "https://github.com/DaveJosef/Desafio-ReactJS-Dio-TQI-Bootcamp.git",
        linkedinLink: "https://www.linkedin.com/posts/jos%C3%A9-david-de-oliveira-sousa-99bba4125_react-app-activity-6946847695495942144-SEZ7?utm_source=share&utm_medium=member_desktop",
        finishMonth: 6,
        finishYear: 2022,
        tags: [1, 3, 4, 5],
    },
];

const sections = [
    {
        title: new MultiLanguageString(
            "Sobre Mim", "About Me"
        ),
        introduction: new MultiLanguageString(
            <p>Quer me conhecer um pouco mais? Este é o lugar certo.</p>,
            <p>Wanna know more about me? This is the right place.</p>
        ),
        conclusion: new MultiLanguageString(
            <>
                <p>Combina bem às suas necessidades? Deixe-me saber <HollowAnchor href='#reachmeout'>Entrar em Contato</HollowAnchor></p>
                <p>Deseja baixar o meu Currículo? <Anchor href={persona.cvDownloadLink} download target="_blank" rel="noreferrer"><Icon src={download} alt="Download"/> Baixar meu currículo</Anchor></p>
            </>,
            <>
                <p>Seems like it meets your needs? Let me know <HollowAnchor href='#reachmeout'>Reach me out</HollowAnchor></p>
                <p>Want to download my CV? <Anchor href={persona.cvDownloadLink} download target="_blank" rel="noreferrer"><Icon src={download} alt="Download"/> Download my CV</Anchor></p>
            </>
        ),
    },
    {
        title: new MultiLanguageString(
            "Meus Projetos",
            "My Projects",
        ),
        introduction: new MultiLanguageString(
            <p>
                Esses são os meus melhores projetos Front-end, espero que encontre as habilidades que procura enquanto navega por eles, que com certeza fiz com bastante dedicação e esforço.
            </p>,
            <p>
                Those are my best Front-End projects, I hope you find the skills you're looking for while you browse between them, projects which I surely dedicated a lot to do.
            </p>,
        ),
        conclusion: new MultiLanguageString(
            <>
                <p>
                    Então, o que achou deles? Está precisando de algum site repleto do dinamismo do Javascript a exemplo de <HollowAnchor href="#mariomemorygame">Jogo de Memória do Mario</HollowAnchor>? Ou talvez você possua uma api e você precisa consumí-la em um Front-end responsivo bonito como <HollowAnchor href="#githubfront">Frontend do Github</HollowAnchor>? De qualquer forma, deixe-me saber: <HollowAnchor href="#reachmeout">Entrar em Contato</HollowAnchor>.
                </p>
                <p>Na próxima seção, nós temos um resumo das habilidades mostradas até aqui.</p>
            </>,
            <>
                <p>
                    So, what did you thought about them? Are you needing some website filled with the dynamism of javascript Like the <HollowAnchor href="#mariomemorygame">Mario Memory Game</HollowAnchor>? Or perhaps you have an api and you're needing to consume it in a Beautiful Responsive Front-End like <HollowAnchor href="#githubfront">Github Frontend</HollowAnchor>? Anyway let me know: <HollowAnchor href="#reachmeout">Reach me out</HollowAnchor>.
                </p>
                <p>In the next section, we have a summary of beforeshown skills.</p>
            </>,
        ),
    },
    {
        title: new MultiLanguageString(
            "Habilidades", "Skills"
        ),
        introduction: new MultiLanguageString(
            <>
                <p>Veja as habilidades que eu pratiquei enquanto estes projetos ganhavam vida.</p>
            </>,
            <>
                <p>See the skills practiced while I was bringing these projects to life.</p>
            </>,
        ),
        conclusion: new MultiLanguageString(
            <>
                <p>Agora que você viu minhas habilidades, está chegando ao final da página. Você poderá deixar sua opinião na próxima seção.</p>
            </>,
            <>
                <p>Now that you seemed my skills, the end of the page is near. In the next section you'll can leave your feedback.</p>
            </>
        ),
    },
    {
        title: new MultiLanguageString(
            "Entrar em Contato", "Reach Me Out"
        ),
        introduction: new MultiLanguageString(
            <>
                <p>O que achou desta página? Deixe-me saber. Se você tem alguma sugestão de melhoria ou gostou de meus serviços, envie-me uma mensagem no formulário abaixo, será um prazer ouví-lo. Mas antes, confira meu currículo, ele está bem completo e pode responder previamente alguma de suas dúvidas <Anchor href={persona.cvDownloadLink} download target="_blank" rel="noreferrer"><img src={download} alt="Download"/> Baixar meu currículo</Anchor>.</p>
            </>,
            <>
                <p>What did you think of this page? Let me know. If you have any suggestions for improvement or liked my services, send me a message in the form below, it will be a pleasure to hear you. But first, check out my CV, it is pretty complete and can answer previously some of your questions <Anchor href={persona.cvDownloadLink} download target="_blank" rel="noreferrer"><img src={download} alt="Download"/> Download my CV</Anchor>.</p>
            </>
        ),
        conclusion: new MultiLanguageString(
            <></>,
            <></>
        )
    },
];

export {projects, getProject, tags, getTag, tags_projects, getPersona, sections, getSection, MultiLanguageString, getString};
