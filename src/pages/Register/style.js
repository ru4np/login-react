import styled from 'styled-components'
import { FaEnvelope, FaLock } from 'react-icons/fa';



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Form = styled.div`
    padding: 59px 67px;
    background-color: #202024;
`

export const UserCredentials = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 11px;
    gap: 9px;

    margin-top: 14px;

    width: 283px;
    height: 44px;

    background: #121214;
    border-radius: 4px;
`

export const MailIcon = styled(FaEnvelope)`
  color: #202024;
`;

export const LockIcon = styled(FaLock) `
    color: #202024;
`


export const InputCredentials = styled.input`
    background-color: transparent;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: white;

    border: none;
    outline: none;

    ::placeholder {
    color: #313136;
  }
`

export const ForgotPassword = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #CBB3FF;

    margin-top: 14px;

    cursor: pointer;
`

export const LoginButton = styled.button`
    width: 283px;
    height: 42px;

    background: #CBB3FF;
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    border: none;
    outline: none;

    margin-top: 22px;

    color: #FFFFFF;
`

export const HaveAccount = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;

    text-align: center;

    margin-top: 22px;
`

export const SpanContext = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    cursor: pointer;

    color: #CBB3FF;
`

