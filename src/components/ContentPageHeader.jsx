import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const MainHeader = styled.header`
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.img});
    background-blend-mode: soft-light;
    display: flex;
    position: relative;
    align-items: flex-end;
    background-size: cover;
    background-blend-mode: soft-light;
    animation: fadeIn 2s;
    padding: 3em 1em;
    @media (min-width: ${theme.breakpoints[2]}px) {
        padding: 3em 3em;
    }
    @media (min-width: ${theme.breakpoints[3] * 0.75}px) {
        background-color: ${theme.colors.mediumgray};
        background-image: url(${props => props.img});
        background-size: ${props => props.bgSize || 'cover'};
        background-repeat: no-repeat;
        background-position-x: ${props => props.bgX || '85%'};
        background-position-y: ${props => props.bgY || 0};
        min-height: 80vh;
        background-blend-mode: ${props => props.blendMode || 'soft-light'};
    }
    .content {
        margin-left: none;
    }
`;

const MainHeaderContent = styled.div`
    margin: 4em 0 4em;

    @media (min-width: ${theme.breakpoints[2]}px) {
        margin-bottom: 8em;
    }
`;

const ContentPageHeader = props => {
    // eslint-disable-next-line
    const { subtitle, title, button, href, text } = props;
    return (
        // eslint-disable-next-line
        <MainHeader {...props}>
            <MainHeaderContent fluid={true}>
                <Row>
                    <Col offset={{ xl: 1, lg: 0 }} md={10} lg={9} xl={5}>
                        <TextBlock
                            subtitle={subtitle || ''}
                            title={title || ''}
                            href={href}
                            button={button || ''}
                        >
                            {text}
                        </TextBlock>
                    </Col>
                </Row>
            </MainHeaderContent>
        </MainHeader>
    );
};

export default ContentPageHeader;
