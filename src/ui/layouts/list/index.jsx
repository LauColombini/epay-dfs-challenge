import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import back from '../../../assets/back.png'
import SingleView from '../../commons/singleViewBill'


export default function Bills({ bills, setExistBills }) {
    const [singleViewData, setSingleViewData] = useState()
    const [isSingleView, setIsSingleView] = useState(false)

    const handleSeeSingleView = (data) => {
        setSingleViewData(data)
        setIsSingleView(true)
    }


    return (
        isSingleView ? <SingleView bill={singleViewData} setIsSingleView={setIsSingleView} /> : (
            <ContainerBills >
                <Header>
                    <div>
                        <BackImg onClick={() => setExistBills(false)} src={back} alt="" />
                    </div>
                    <HeaderText>Lista de facturas</HeaderText>
                </Header>
                <ContainerSingleBills>

                    {bills && bills.map((bill, index) => {

                        let year = new Date(bill.expirationDateFirst * 1000).getFullYear().toString()
                        let month = new Date(bill.expirationDateFirst * 1000).getMonth().toString()
                        let newMonth = month.length === 1 ? 0 + month : month
                        let day = new Date(bill.expirationDateFirst * 1000).getUTCDay().toString()
                        let newDay = day.length === 1 ? 0 + day : day
                        let hour = new Date(bill.expirationDateFirst * 1000).toString().slice(16, 24)
                        let newFullDate = year + '-' + newMonth + '-' + newDay + ' ' + hour
                        let newAmount = bill.amountFirst.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

                        return (

                            <ContainerBill key={index}>
                                <ContainerItemBill>
                                    <ItemBill>
                                        Valor
                                </ItemBill>
                                    <ItemBillValue>
                                        $ {newAmount} COP
                                </ItemBillValue>
                                </ContainerItemBill>
                                <ContainerItemBill>
                                    <ItemBill>
                                        Numero de factura
                                </ItemBill>
                                    <ItemBillValue>
                                        {bill.billId}
                                    </ItemBillValue>
                                </ContainerItemBill>
                                <ContainerItemBill>
                                    <ItemBill>
                                        Fecha vencimiento
                                </ItemBill>
                                    <ItemBillValue>
                                        {newFullDate}
                                    </ItemBillValue>
                                </ContainerItemBill>
                                <PayBillButton type='button' onClick={() => handleSeeSingleView(bill)}>Pagar factura</PayBillButton>
                            </ContainerBill>



                        )
                    })}
                </ContainerSingleBills>

            </ContainerBills>
        )

    )
}

const ContainerBills = styled.div`
display:flex;
flex-direction:column;
width:83%;
background-color:rgba(0,0,0,0.5);
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
boder-radius:25px;
margin-top:85px;
`

const ContainerSingleBills = styled.div`
margin:20px
`

const ContainerBill = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
margin: 20px;
`

const ContainerItemBill = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin: 10px 20px;
`
const PayBillButton = styled.button`
padding: 20px;
border-radius:5px;
text-transform:uppercase;
max-width:128px;
background: rgb(64, 168, 230);
color: white;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
cursor:pointer;
&:active{
    background: rgb(44, 138, 250);
}
`

const ItemBill = styled.p`
font-weight:bold;
margin:0;
font-size:16px;
color:#2F3033;
`

const ItemBillValue = styled.p`
margin:0;
color: #9da8bb;
font-size:16px;
`

const Header = styled.div`
display:flex;
justify-content: space-between;
flex-direction:row;
align-items:center;
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

