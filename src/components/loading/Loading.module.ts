import styled, { keyframes } from 'styled-components'

const frames = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

export const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #000000;
    animation: ${frames} 0.8s linear 0s infinite;
    margin-top: 400px;

    &:after {
        content: "";
        position: absolute;
        width: 60px;
        height: 30px;
        background-color: red;
        border-bottom: 4px solid #000000;
        top: -1px;
    }

    &:before {
        content: "";
        position: absolute;
        background-color: #fff;
        width: 14px;
        height: 14px;
        border: 4px solid #000000;
        border-radius: 50%;
        bottom: 20px;
        right: 20px;
        z-index: 1;
    }
`
