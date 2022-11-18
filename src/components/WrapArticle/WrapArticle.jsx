import React from 'react';
import styled from 'styled-components';

const Article = styled.article`

    border-radius: 1rem;
    border: 4px solid rgb(${props => props.theme.foreground});
    margin: 5vh 0;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;

    & header {
        border-right: 4px solid rgb(${props => props.theme.foreground});
        display: flex;
        flex-flow: column;
        justify-content: start;
        align-items: center;
        padding: 5vw 0;
        max-width: 61.8%;
        background-color: rgb(${props => props.theme.colorA});
    }

    & header div.profile {
        display: flex;
        border-radius: 50%;
        width: 12.5vw;
        height: 12.5vw;
        margin: 0 5vw;
        overflow: hidden;
    }

    & header video {
        width: 25vw;
        margin: 1rem;
    }

    & header ul {
        line-height: 2.6rem;
        list-style: none;
        display: flex;
    }

    & header li {
        color: ${props => props.theme.foreground};
        margin: 0 2.5vw;
        margin-top: 3vw;
    }
    
    & header li a {
        display: flex;
        text-decoration: none;
    }

    & header li img {
        border-radius: 50%;
        width: 32px;
    }

    & aside {
        width: 100%;
        background-color: rgb(${props => props.theme.background});
    }

    & aside > ul {
        background-color: rgb(${props => props.theme.background});
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        padding: 1rem;
    }

    & aside > ul li {
        width: 10vw;
        margin: 1rem;
        display: inline-block;
    }
    
    & aside details:last-child {
        border-bottom: none;
    }

    & aside details {
        border-bottom: 4px solid rgb(${props => props.theme.foreground});
        background-color: rgb(${props => props.theme.background});
    }

    & aside details summary:hover {
        cursor: pointer;
        background-color: rgb(${props => props.theme.foreground});
        color: rgb(${props => props.theme.background});
    }
    
    & aside details > :nth-child(2) {
        border-top: 4px solid rgb(${props => props.theme.foreground});
        padding: 1rem;
    }

    & aside details summary {
        display: block;
        padding: 1rem;
    }
    
    & aside details summary p {
        display: list-item;
    }
    
    & aside details summary span {
        display: block;
        width: 100%;
        font-size: 1.25rem;
        color: rgb(${props => props.theme.foregroundB});
    }
    
    @media screen and (max-width: 720px) {

        & {
            flex-direction: column;
            align-items: center;
        }

        & header div {
            height: 25vw;
            width: 25vw;
        }

        & header video {
            width: 50vw;
        }

        & header .video {
            width: auto;
            height: auto;
            margin: 1rem;
        }

        & header {
            max-width: 100%;
            width: 100%;
            border-right: none;
            border-bottom: 4px solid rgb(${props => props.theme.foreground});
        }

        & aside > ul li {
            width: 20vw;
        }

        div.aboutme div > p {
            flex-direction: column;
        }

        div.aboutme div > p a {
            margin-top: 1rem;
            margin-left: 0;
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 320px) {

        & aside details table {
            font-size: 1rem;
        }

        & aside details table td {
            padding: .25vw;
        }

        & aside > ul li {
            width: 10vw;
            font-size: .75rem;
        }
        
    }

`;

const Aside = styled.aside`
    
    overflow-x: scroll;

`;

function WrapArticle(props) {

    const {headerContent} = props;

    return (
        <Article>
            <header>
                {headerContent}
            </header>
            <Aside>
                {props.children}
            </Aside>
        </Article>
    );
}

export default WrapArticle;