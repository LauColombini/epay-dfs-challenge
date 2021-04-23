import React, { useState, useRef, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query'
import { useForm } from "react-hook-form";
import styled from "styled-components";
//Hooks
//Components
//Images
import back from '../../assets/back.png'
import download from '../../assets/download.png'


export default function SingleView({ bill, setIsSingleView }) {

    let year = new Date(bill.expirationDateFirst * 1000).getFullYear().toString()
    let month = new Date(bill.expirationDateFirst * 1000).getMonth().toString()
    let newMonth = month.length === 1 ? 0 + month : month
    let day = new Date(bill.expirationDateFirst * 1000).getUTCDay().toString()
    let newDay = day.length === 1 ? 0 + day : day
    let hour = new Date(bill.expirationDateFirst * 1000).toString().slice(16, 24)
    let newFullDate = year + '-' + newMonth + '-' + newDay + ' ' + hour
    let newAmount = bill.amountFirst.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (

        <ContainerSingleView>
            <Header>
                <BackImg src={back} onClick={() => setIsSingleView(false)} />
                <HeaderText>Número factura {bill.billId}</HeaderText>
            </Header>
            <div>
                <ContainerInfoBill>
                    <TitleInfoBill>Descripción</TitleInfoBill>
                    <div>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Código empresa</PropertyBillItem>
                            <ValueBillItem>{bill.additionalFirst}</ValueBillItem>
                        </ContainerInfoBillItem>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Fecha vencimiento</PropertyBillItem>
                            <ValueBillItem>{newFullDate}</ValueBillItem>
                        </ContainerInfoBillItem>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Fecha de facturación</PropertyBillItem>
                            <ValueBillItem>{bill.billDate}</ValueBillItem>
                        </ContainerInfoBillItem>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Número de identificación del usuario</PropertyBillItem>
                            <ValueBillItem>{bill.billId}</ValueBillItem>
                        </ContainerInfoBillItem>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Número factura</PropertyBillItem>
                            <ValueBillItem>{bill.billId}</ValueBillItem>
                        </ContainerInfoBillItem>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Periodos facturados</PropertyBillItem>
                            <ValueBillItem>{bill.descriptionFirst}</ValueBillItem>
                        </ContainerInfoBillItem>
                        <ContainerInfoBillItem>
                            <PropertyBillItem>Valor</PropertyBillItem>
                            <ValueBillItem>$ {newAmount} COP</ValueBillItem>
                        </ContainerInfoBillItem>
                        <DownloadBtn> <ImgBtn src={download} alt="" /> Descargar</DownloadBtn>
                    </div>
                </ContainerInfoBill>
                <ContainerBtnsPaySubs>
                    <PaySuscribBtn>Pagar factura</PaySuscribBtn>
                    <PaySuscribBtn>Suscribir factura</PaySuscribBtn>
                </ContainerBtnsPaySubs>
            </div>
            <div>
                <DescriptionDown>
                    Si tiene alguna duda puede escribir a <Span>felipemesa14@gmail.com</Span>, o llamar al <Span>(57) 3024133765</Span>
                </DescriptionDown>
            </div>
        </ContainerSingleView>
    )
}

const ContainerInfoBill = styled.div`
display:flex;
flex-direction:column;
background-color:#F4F5F7;
padding:10px 40px;
max-height: 300px;
min-height:300px;
overflow-y: scroll;
`;

const DescriptionDown = styled.p`
text-align:center;
color: #9da8bb;
user-select:none;
`
const Span = styled.span`
color: rgb(64, 168, 230);
user-select:none;
`

const DownloadBtn = styled.button`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:200px;
text-transform:uppercase;
text-align: center;
background: white;
color: rgb(64, 168, 230);
box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
border-radius: 4px;
border: none;
cursor: pointer;
padding: 0.5em;
margin:20px 0;
font-weight:bold;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px;
}
@media (max-width: 767px) {
    width: 90%;
   
   
}

`
const ContainerBtnsPaySubs = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
box-shadow: 0px 0px 0px #888, 0px -1px 5px #888;
padding:10px 0;

@media (max-width: 767px) {
    flex-direction:column;
   
}
`

const PaySuscribBtn = styled.button`
border-radius: 4px;
border: none;
cursor: pointer;
width: 35%;
height: 50px;
text-align: center;
background: rgb(64, 168, 230);
color: white;
box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
padding: 0.5em;
font-size:16px;
@media (max-width: 767px) {
    width: 90%;
    margin-top:10px;
   
}
`

const ImgBtn = styled.img`
width:30px;
margin-right:20px;
`

const TitleInfoBill = styled.p`
margin: 20px 0 0 0;
color: #9da8bb;
font-size:16px;
font-weight:bold;
border-bottom: 1px dotted rgb(136, 152, 170);
`
const ContainerInfoBillItem = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
border-bottom: 1px dotted rgb(136, 152, 170);
padding:16px 0 0 0;
margin-top:8px;
`;

const PropertyBillItem = styled.p`
margin:0;
font-size:12px;
font-weight:bold;
`;

const ValueBillItem = styled.p`
color: #9da8bb;
margin:0;
font-size:12px;
`

const ContainerSingleView = styled.div`
display:flex;
flex-direction:column;
width:53%;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
boder-radius:25px;
margin-top:85px;


@media (max-width: 767px) {
    width:90%;
   
}
`;

const Header = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
flex-direction:row;
background-color:white;
padding: 10px 20px;
height:36px;
`

const BackImg = styled.img`
display:flex;
align-self:flex-start;
width:24px;
height:24px;
cursor:pointer;
`

const HeaderText = styled.p`
text-align:center;
color: rgb(136, 152, 170);
font-size:16px;
margin:0 23rem 0 0;
`