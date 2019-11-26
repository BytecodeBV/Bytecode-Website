import React from 'react';
import PropTypes from 'prop-types';
import {
    ContentWrapper,
    ImageWrapper,
    TextAndImageBase,
} from './ContentBlocks.components';

const TextAndImage = props => {
    const { children, img, alt, reverse, fluid } = props;

    const getImgPos = () => {
        if (reverse) {
            if (fluid) {
                return {
                    pos: '1 / 1 / 1 / 3',
                    translate: '-3vw',
                };
            }
            return {
                pos: '1 / 2 / 1 / 3',
                translate: '0',
            };
        }
        if (fluid) {
            return {
                pos: '1 / 3 / 1 / 5',
                translate: '3vw',
            };
        }
        return {
            pos: '1 / 3 / 1 / 4',
            translate: '0',
        };
    };

    return (
        <TextAndImageBase>
            <ImageWrapper
                reverse={reverse}
                fluid={fluid}
                translate={getImgPos().translate}
                pos={getImgPos().pos}
            >
                <img src={img} alt={alt} />
            </ImageWrapper>
            <ContentWrapper reverse={reverse}>{children}</ContentWrapper>
        </TextAndImageBase>
    );
};

export default TextAndImage;

TextAndImage.propTypes = {
    children: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    fluid: PropTypes.bool,
};

TextAndImage.defaultProps = {
    reverse: false,
    fluid: false,
};