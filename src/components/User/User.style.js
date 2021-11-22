import styled from 'styled-components'

export const Container =styled.div`
    width: 490px;
    height: 420px;
    border-radius: 26px;
    background: #FFF;
    padding: 30px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 320px;
    }

    div {
        display: flex;
    justify-content: space-between;
    padding-bottom: 23px;
    margin-bottom: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5 ;
    }

    h2 {
        font-size: 25px;
    font-weight: bold;
    color: #000000;
    }

    h3 {
        color: #CBCBCB;
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;
    }

    p {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        color: #000000;
        font-size: 12px;
        font-weight: bold;

        
    }

    svg {
            font-size: 25px;
            margin-right: 10px;
        }

    a {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff; 
        text-decoration: none;
        background: #3875CF;
        font-size: 12px;
        font-weight: bold;
        border-radius: 6px;
        border: none;
        width: 140px;
        height: 50px;

        &:hover {
            background: #6A95D1;
        }
    }
`