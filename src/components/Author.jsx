import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
    max-width: 40rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        h4 {
            font-size: 1.4rem;
        }
        h5 {
            font-size: 0.8rem;
        }
    }
`;

const AuthorBlockPhoto = styled.img`
    min-width: 5rem;
    width: 5rem;
    min-height: 5rem;
    height: 5rem;
    margin-right: 2rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(${props => props.src});
    background-size: cover;
`;

const Author = props => {
    const { img, name, title } = props;
    const image = require(`../images/img/authors/${img}`);
    return (
        <AuthorBlock>
            <AuthorBlockPhoto src={image} />
            <div className="content">
                <h4>{name}</h4>
                <h5>{title}</h5>
            </div>
        </AuthorBlock>
    );
};

export default Author;