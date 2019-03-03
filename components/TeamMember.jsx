import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import AllSocials from '../lib/Socials';

const TeamMemberWrapper = styled.div`
    padding: 3rem 0rem 3rem 0rem;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 1em 1em;
    }
    transition: 0.5s;
    & > div {
        opacity: 0;
        transition: 0.5s;
        transform: translate(1em, 0.5em);
    }
    & > p {
        opacity: 1;
        transition: 0.5s;
        height: auto;
        transition-delay: 0.5s;
    }
    &:hover {
        & figure {
            background: ${theme.colors.red};
        }
    }
    &:hover {
        & img {
            transform: scale(1);
        }
        & figure::before {
            background-color: ${theme.colors.green};
            transform: translate(0, 30%) scale(0.85);
        }
        & > div {
            opacity: 1;
            transform: translate(1em, -1em);
        }
        & > p {
            opacity: 0;
            height: 0px;
            transition-delay: 0s;
        }
    }
`;

const TeamMemberPhoto = styled.figure`
    margin: 1rem;
    /* border-radius: 100rem; */
    overflow: hidden;
    width: 100%;
    height: auto;
    transition: 0.5s;

    &::before {
        content: '';
        width: 100%;
        height: 45%;
        background: ${theme.colors.mediumgray};
        position: absolute;
        left: 0;
        transform: translate(0, 30%) scale(0.9);
        display: flex;
        top: 0;
        z-index: -1;
        transition: 0.3s ease;
    }
    img {
        transform: scale(0.95);
        transition: 0.3s ease;
        font-size: 3em;
        color: ${theme.colors.green} !important;
        min-height: 5em;
    }
`;
const getAltText = (name, alt) => {
    if (alt) {
        return alt;
    }
    return `Een foto van ${name}`;
};
const TeamMember = props => {
    // eslint-disable-next-line
    const { name, title, img, alt, description } = props;

    return (
        <TeamMemberWrapper>
            <TeamMemberPhoto>
                <img src={img} alt={getAltText(name, alt)} />
            </TeamMemberPhoto>
            <h4>{name}</h4>
            <p>{title}</p>
            <AllSocials />
        </TeamMemberWrapper>
    );
};

export default TeamMember;
