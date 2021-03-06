import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';
import theme from '../../styles/theme';
import { Subtitle } from '../../components/Typography/Typography';
import { ThumbnailImgProps } from './PostThumbnail.types';

const { mediaQueryMin, colors } = theme;
const { secondary } = colors;

export const StyledSubtitle = styled(Subtitle)`
    margin-bottom: 0.66rem;
`;

export const ThumbnailBase = styled(Link)`
    padding-bottom: 2em !important;
    cursor: pointer;
    transition: all 0.4s ease;
    min-width: 10em;
    width: 100%;
    & > * {
        box-shadow: 0 0 0.1em 0 rgba(0, 0, 0, 0.05);
    }
    .thumbnail-cta {
        transition: 0.3s ease all;
        transform: translate(0em, -1em);
        img {
            transition: 0.3s ease all;
        }
    }
    &:hover {
        & > .thumbnail-img {
            transform: scale(1.02);
        }

        .thumbnail-cta {
            transform: translate(0.3em, -1em);
            img {
                transform: scaleX(1.1);
            }
        }
    }
`;

export const ThumbnailContent = styled.div<{ big?: boolean }>`
    padding: 1.33em 1em;
    background-color: ${(props) =>
        props.big ? 'transparent' : theme.colors.secondary};
    height: ${(props) => (props.big ? '5rem' : '13rem')};
`;

const ThumbnailImgBase = styled.figure<{ big?: boolean }>`
    background: ${secondary};
    background-position: center center;
    background-size: cover;
    transition: all 0.5s ease;
    height: ${(props) => (props.big ? '80vh' : '20rem')};
    overflow: hidden;
    object-fit: cover;
    @media (${mediaQueryMin.md}) {
        height: ${(props) => (props.big ? '85vh' : '20rem')};
    }
`;

const ThumbnailImgContent = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

export const ThumbnailImg: React.FC<ThumbnailImgProps> = ({
    img,
    alt,
    big,
}) => (
    <ThumbnailImgBase big={big}>
        <ThumbnailImgContent src={img} alt={alt || 'featured image'} />
    </ThumbnailImgBase>
);

export const Arrow = styled.img`
    margin-left: 0.01em;
`;
