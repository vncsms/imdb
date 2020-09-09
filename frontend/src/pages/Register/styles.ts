import styled from 'styled-components';

export const InputContainer = styled.label`
    width: 130px;
    padding: 5px 0px;
    display: flex;
    flex-direction: column;

    input {
      padding: 5px;
      border-radius: 2px;
      background-color: white;
      border-color: black;
      border-width: 1px;
      border-style: solid;
    }
`;

export const FormContainer = styled.form`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: fit-content;
    margin: 0 auto;
`;

export const RegisterButton = styled.input`
    width: 90%;
    padding: 10px 20px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: white;
`;

export const DataContainer = styled.div`
    display: flex;
    margin: 10px 7px;

    div:nth-child(1) {
      padding-right: 5px;
    }
    div:nth-child(2) {
      padding-left: 5px;
    }
`;

export const RegisterTitle = styled.div`
    padding: 0 7px;
    font-size: 19px;
    color: white;
    text-transform: uppercase;
`;