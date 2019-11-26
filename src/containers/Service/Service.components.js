import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const Icon = styled.img`
    margin-top: 2em;
    margin-bottom: 0;
    padding: 0 !important;
    @media (${mediaQueryMin.sm}) {
        max-height: 10rem;
        margin-top: 3em;
        margin-left: 0;
        padding: 0.1em;
    }
`;

export const ServiceWrapper = styled.div`
    min-height: 10em;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1em 0;
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
    }
    @media (${mediaQueryMin.md}) {
        padding: 0 6em 1em 0;
        flex-basis: ${props => (props.fullWidth ? '100%' : '50%')};
    }
`;

export const ServiceIcon = styled.div`
    margin: 0 3em 0 0;
    transform: translateY(0.1em);
    width: 120px;
    @media (${mediaQueryMin.sm}) {
        margin: 0 3em 0 0;
        min-height: 100%;
    }
`;

export const ServiceText = styled.div`
    flex: 1;
`;