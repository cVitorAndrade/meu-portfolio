import styled from "styled-components";
import countriesPath from "../../assets/countries.png";

export const Container = styled.div`
    position: relative;
    outline: 0;
    appearance: none;
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
    -webkit-transform:translate3d(0,0,0);
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    height: 30px;
    width: 60px;

    margin: 5px auto;

    &:before , &:after {
        position: absolute;
        color: white;
        font-family: 'Raleway', sans-serif;
        top: 8px;
        font-size: 13px;
        font-weight: 700;
    }

    &:before {
        left: -19px;
        content: attr(data-first-lang);
    }

    &:after {
        right: -20px;
        content: attr(data-second-lang);
    }

    input{
        display:none;
    }

    input + label {
        display: block;
        position: absolute;
        cursor: pointer;
        user-select: none;
        width: 60px;

        &:before, &:after {
            content: "";
            position: absolute;
            border-radius: 30px;
            transition: all 0.25s ease-in-out;
        }

        &:before { 
            height: 30px;
            width: 60px;
            background-color: #1F80B0;
        }

        &:after { 
            top: 1px;
            left: 1px;
            border: 2px solid #DFDFDF;
            width: 24px;
            height: 24px;
            background: #eb3 url(${countriesPath}) -26px center;
            transform:  translate(30px, 0);
            -webkit-transform: translate(30px, 0);

        }
    }

    input:checked + label:after { 
        background: #000233 url(${countriesPath}) -2px center;
        transition: all 0.25s ease-in-out;
        -webkit-transform: translate(0 ,0);
        transform: translate(0 ,0);
    }
    
    input:checked + label:before { 
        background-color: #346259;
    }


`;