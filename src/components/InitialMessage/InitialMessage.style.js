import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 490px;
    height: 320px;
    border-radius: 26px;
    background: #FFF;
    padding: 30px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 320px;
    }

    div {
        margin: auto 0;
        width: 300px;
    }

    strong {
        font-weight: 700;
    }

    svg {
        font-size: 25px;
        color: #3875CF;
        padding-bottom: 25px;
        width: 100%;
        border-bottom: 1px solid #E5E5E5 ;
    }

    p {
        text-align: center;
        margin: 20px;
}
`
