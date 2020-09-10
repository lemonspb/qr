import React                 from 'react';
import styled, { keyframes } from 'styled-components';

const ldsRollerAnimation = () => keyframes`
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}`;

const LdsRoller = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    & div {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
    }
    & div:after {
        content: " ";
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #017EF2;
        margin: -3px 0 0 -3px;
    }
    & div:nth-child(1) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.036s;
      
        &:after {
             top: 50px;
             left: 50px;
        }
    }
    
    & div:nth-child(2) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.072s;
        &:after{
             top: 54px;
             left: 45px;
        }
    }
     & div:nth-child(3) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.108s;
        &:after{
             top: 57px;
             left: 39px;
        }
    }
    & div:nth-child(4) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.144s;
        &:after{
             top: 58px;
             left: 32px;
        }
    }
    & div:nth-child(5) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.18s;
        &:after{
             top: 57px;
             left: 25px;
        }
    }
    & div:nth-child(6) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.216s;
        &:after{
             top: 54px;
             left: 19px;
        }
    }
    & div:nth-child(7) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.252s;
        &:after{
             top: 50px;
             left: 14px;
        }
    }
    & div:nth-child(8) {
        animation: ${ldsRollerAnimation()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
        animation-delay: -0.288s;
        &:after{
             top: 45px;
             left: 10px;
        }
    }
`;

export const Spinner = () => {
    return (
        <LdsRoller>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </LdsRoller>
    );
};