import React, { useState } from 'react';
import styled from "styled-components";
import Form from '../../commons/form'
import background from '../../../assets/background.png'
import LogoCasa from '../../../assets/logo.png'
import EpaycoLogo from '../../../assets/ePayco.png'


export default function Home() {

    return (
        <Background>
            <BackgroundImage>
                <Container>
                    <LogoCasaa src={LogoCasa} alt="" />
                    <Form />
                    <TextPays>
                        Los pagos son procesados de forma segura por ePayco
                    </TextPays>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginRight: 110, marginBottom: 9 }}>
                        <p style={{ fontSize: 13, userSelect: 'none' }}>Powered by </p>
                        <ImgEPayco src={EpaycoLogo} alt="" />
                    </div>
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