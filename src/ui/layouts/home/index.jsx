import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Form from '../../commons/form'
import background from '../../../assets/background.png'
import LogoCasa from '../../../assets/logo.png'
import EpaycoLogo from '../../../assets/ePayco.png'
import useLogin from '../../../hooks/useLogin'


export default function Home() {
    const [data, isLoading] = useLogin()

    return (
        <Background>
            <BackgroundImage>
                <Container>
                    <LogoCasaa src={LogoCasa} alt="" />
                    {!isLoading ? <Form dataToken={data.data.token} /> : <Form />}
                    <TextPays>
                        Los pagos son procesados de forma segura por ePayco
                    </TextPays>
                    <PoweredBy >
                        <p style={{ fontSize: 13, userSelect: 'none' }}>Powered by </p>
                        <ImgEPayco src={EpaycoLogo} alt="" />
                    </PoweredBy>
                </Container>
            </BackgroundImage>

        </Background>
    )
}

const Container = styled.div`
min-height: 100vh;
width:100%;
display:flex;
flex-direction: column;
justify-content:space-between;
align-items:center;

`
const TextPays = styled.p`
width: 250px;
color: white;
text-align:center;
user-select:none;
`

const ImgEPayco = styled.img`
width: 68px;
height: 22px;
margin-left:5px;
user-select:none;
`

const LogoCasaa = styled.img`
align-self: flex-start;
margin: 1% 0 0 18%;
user-select:none;

@media (max-width: 767px) {
    align-self: center;
    margin:0;
}

`
const PoweredBy = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-self: flex-end;
margin-right: 110px;
margin-bottom: 9px;

@media (max-width: 767px) {
    align-self: center;
    margin:0;
}
`


const Background = styled.div`
background-color: rgb(245, 63, 35);
min-height: 100vh;
width: 100vw;
`

const BackgroundImage = styled.div`
background:url(${background});
background-size: cover;    
background-position: center bottom;
`