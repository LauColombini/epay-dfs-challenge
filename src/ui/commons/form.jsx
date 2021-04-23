import React, { useState, useRef, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query'
import { useForm } from "react-hook-form";
import styled from "styled-components";
//Hooks
import ConfigAndBills from '../../hooks/useConfigAndBills'
//Components
import Bills from '../layouts/list/index'
//Images
import spinner from '../../assets/loading.gif'
import alertInfo from '../../assets/alert-info.png'
import closeModal from '../../assets/closem.png'


export default function Form({ dataToken }) {

    const { register, handleSubmit, errors } = useForm();
    const [isPayAuto, setIsPayAuto] = useState(false)
    const [proyectId, setProyectId] = useState('')
    const [notBillsScreen, setNotBillsScreen] = useState(false)
    const [existBills, setExistBills] = useState(false)
    const [bills, setBills] = useState()


    const [data, isLoading, refetch] = ConfigAndBills(dataToken, proyectId)


    const queryClient = useQueryClient()

    useEffect(() => {
        if (data && data.bills.data.data.bills.length === 0) {
            setNotBillsScreen(true)
        } else if (data && data.bills.data.data.bills.length > 0) {
            setBills(data.bills.data.data.bills)
            setExistBills(true)
        }
    }, [dataToken, data])

    const onSubmit = () => {
        queryClient.invalidateQueries("ConfigAndBills")
        refetch()
    }

    const mutation = useMutation((data) => {
        onSubmit(data)
    })

    const Submit = (data) => {
        setProyectId(data.userId)
        mutation.mutate(data)
    }



    return (
        existBills ? <Bills bills={bills} setExistBills={setExistBills} /> : (
            <Formm onSubmit={handleSubmit(Submit)}>
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
                            <TextInput>Número de identificación del usuario</TextInput>
                            <Input name='userId' {...register('userId')} type="text" />
                        </InputContainer>
                        <ContinuarButtom>
                            {isLoading ? <img style={{ width: 15 }} src={spinner} alt='spinner' /> : <>Continuar</>}
                        </ContinuarButtom>
                    </>
                ) : (
                    <>
                        <Text>Suscriba sus facturas para pagos automáticos</Text>
                        <InputContainer>
                            <TextInput>Id Cliente: Número de identificación del usuario</TextInput>
                            <Input name='clientId' {...register('clientId')} type="text" />
                        </InputContainer>
                        <ContinuarButtom style={{ cursor: 'not-allowed', backgroundColor: 'rgb(241, 241, 242)', color: 'rgb(153, 153, 153)' }}>
                            Continuar
                    </ContinuarButtom>

                    </>
                )}

                {notBillsScreen ?
                    <Modal>
                        <BoxInsideOfModal>
                            <BtnCloseModalAlert type='button' onClick={() => setNotBillsScreen(false)}><ImgCloseModalAlert src={closeModal} alt="" /></BtnCloseModalAlert>
                            <ImgModalAlert src={alertInfo} alt="" />
                            <TextInsideOfModal>No cuenta con facturas pendientes por pagar.</TextInsideOfModal>
                        </BoxInsideOfModal>
                    </Modal>
                    :
                    null
                }

            </Formm>
        )




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
font-size:14px;
&:hover{
    border-bottom: 2px solid RGBA(0,0,0,0.13);
}
@media (max-width: 576px) {
    width:100%;
    margin:0;
}

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
cursor:pointer;
transtition:3s;
&:active{
    transition:0.1s;
    background-color:#7887E0;
}
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
@media (max-width: 576px) {
    width:80%;
    
}
`


const ButtonContainer = styled.div`
width:100%;
@media (max-width: 576px) {
    display:flex;
    flex-direction:column;
}

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
@media (max-width: 576px) {
    width: 90%;
    margin: 0 10px;
}
`


const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color:rgba(0,0,0,0.4);
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index:300;  

`;
const BoxInsideOfModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color:white;
  width:65%;
  padding:0.5em;
  border-radius:10px;
  border:4px solid rgb(64, 168, 230);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px;
`;

const TextInsideOfModal = styled.p`
color: rgb(91, 102, 112);
font-size: 1.2em;
`

const ImgModalAlert = styled.img`
width:70px;
height:70px;
`
const BtnCloseModalAlert = styled.button`
align-self:flex-end;
width: 30px;
cursor: pointer;
z-index: 99;
background-color:transparent;

`

const ImgCloseModalAlert = styled.img`
width:30px;
height:30px;

`