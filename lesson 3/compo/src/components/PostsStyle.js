import styled from "styled-components"

export const CurrentPost= styled.div`
    width: 300px;
    border: 2px solid orange;
    transition: 1s;
    &:hover{
        transform: translateY(-20px);
    }
`

export const Paragraph = styled.p`
    font-size:50px;
    text-align:justify;

`

export const FlexDiv = styled.div`
    display: flex;
`