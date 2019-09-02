import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);

const Figure = styled.figure`
    position: relative;
    width: 100%;

    padding-left: 10px;
    margin-bottom: 4rem;
`;

const Subtitle = styled(SubtitleBase)`
    margin-bottom: 2rem;
`;

const H1 = styled.h1``;

const H2 = styled.h2``;

const H3 = styled.h3``;

const H4 = styled.h4``;

const StyledButton = styled(Button)`
    margin: 1em 0;
`;

const getImage = (src, alt) => {
    if (src) {
        return (
            <Figure>
                <img src={src} alt={alt} />
            </Figure>
        );
    }
    return '';
};

const getButton = (href, button, useGatsbyLink) => {
    if (href && button) {
        return (
            <StyledButton href={href} useGatsbyLink={useGatsbyLink}>
                {button}
            </StyledButton>
        );
    }
    return '';
};

const getTitle = (type, title) => {
    if (type === 'h1') {
        return <H1>{title}</H1>;
    }
    if (type === 'h2') {
        return <H2>{title}</H2>;
    }
    if (type === 'h3') {
        return <H3>{title}</H3>;
    }
    if (type === 'h4') {
        return <H4>{title}</H4>;
    }
    return <H1>{title}</H1>;
};

const TextBlock = props => {
    const {
        image,
        alt,
        subtitle,
        title,
        headingType,
        href = null,
        button = null,
        useGatsbyLink,
        children,
    } = props;

    return (
        <div>
            {getImage(image, alt)}
            <Subtitle>{subtitle}</Subtitle>
            {getTitle(headingType, title)}
            <p>{children}</p>
            {getButton(href, button, useGatsbyLink)}
        </div>
    );
};

TextBlock.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    button: PropTypes.string,
    useGatsbyLink: PropTypes.bool,
};

export default TextBlock;
