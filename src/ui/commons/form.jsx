import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { isCompositeComponentWithType } from 'react-dom/test-utils';
export default function Form() {
    const { register, handleSubmit } = useForm();
    const [isPayAuto, setIsPayAuto] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Formm onSubmit={handleSubmit(onSubmit)}>
            <ButtonContainer>
                {!isPayAuto ? (
                    <>
                        <Button type='button' style={{ borderBottom: '2px solid rgb(64, 168, 230)' }}>Ingrese sus datos</Button>
                        <Button type='button' onClick={() => setIsPayAuto(true)}>Pagos automaticos</Button>
                    </>
                ) : (
                    <>
                        <Button type='button' onClick={() => setIsPayAuto(false)}>Ingrese sus datos</Button>
                        <Button type='button' style={{ borderBottom: '2px solid rgb(64, 168, 230)' }}>Pagos automaticos</Button>
                    </>
                )}
            </ButtonContainer>
            {!isPayAuto ? (
                <>
                    <Text>Consulte sus facturas</Text>
                    <InputContainer>
                        <TextInput>Numero de identificacion del usuario</TextInput>
                        <Input name='userId' {...register('userId')} type="text" />
                    </InputContainer>
                    <ContinuarButtom>Continuar</ContinuarButtom>
                </>
            ) : (
                <>
                    <Text>Suscriba sus facturas para pagos automáticos</Text>
                    <InputContainer>
                        <TextInput>Id Cliente: Número de identificación del usuario</TextInput>
                        <Input name='clientId' {...register('clientId')} type="text" />
                    </InputContainer>
                    <ContinuarButtom style={{ cursor: 'not-allowed', backgroundColor: 'rgb(241, 241, 242)', color: 'rgb(153, 153, 153)' }}>Continuar</ContinuarButtom>

                </>
            )}

        </Formm>



    )
}

const Button = styled.button`
width:50%;
margin: 0 0 15px 0;
color: rgb(58, 58, 58);
height:63px;
background-color: white;
border-top-left-radius:5px;
border-top-right-radius:5px;
border-bottom: 2px solid rgba(0,0,0,0);
&:hover{
    border-bottom: 2px solid RGBA(0,0,0,0.13);
}
font-size:14px;
`

const ContinuarButtom = styled.button`
margin:50px 0 20px 0;
color:white;
border-radius:5px;
padding: 15px;
text-aling:center;
font-size:16px;
width: 82%;
background-color:#41A8E6;
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
`

const Text = styled.p`
color:#9da8bb;
font-size:12px;

`

const InputContainer = styled.label`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
`

const TextInput = styled.p`
margin: 30px 0 5px 0;
font-size: 15px;
color:rgb(82, 95, 127);
`
const Input = styled.input`
width: 280px;
height:45px;
border-radius:5px;
padding: 0px 0.75em;
font-size:20px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
`


const ButtonContainer = styled.div`
width:100%;
`

const Formm = styled.form`
width: 375px;
background-color:#F4F5F7;
border-radius:5px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:55px;
user-select:none;
`