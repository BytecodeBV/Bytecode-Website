import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);

const Figure = styled.figure`
    position: relative;
    width: 100%;
    margin-bottom: 4rem;
`;

const Subtitle = styled(SubtitleBase)`
    margin-bottom: 2rem;
`;

const H1 = styled.h1`
    margin-bottom: 4rem;
`;

const H2 = styled.h2`
    margin-bottom: 4rem;
`;

const Paragraph = styled.p`
    margin: 0.5rem 0;
`;

const H3 = styled.h3`
    margin-bottom: 0rem;
`;

const H4 = styled.h4`
    margin-bottom: 0rem;
`;

const StyledButton = styled(Button)`
    margin-top: 5rem;
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

const getButton = (href, button, useNextLink) => {
    if (href && button) {
        return (
            <StyledButton href={href} useNextLink={useNextLink}>
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
        useNextLink,
        children,
    } = props;

    return (
        <div>
            {getImage(image, alt)}
            <Subtitle>{subtitle}</Subtitle>
            {getTitle(headingType, title)}
            <Paragraph>{children}</Paragraph>
            {getButton(href, button, useNextLink)}
        </div>
    );
};

TextBlock.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    button: PropTypes.string,
    useNextLink: PropTypes.bool,
};

export default TextBlock;
