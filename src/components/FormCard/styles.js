import styled from 'styled-components'
export const FormContainer = styled.div`
    border: 1px solid #ededed;
    font-family: system-ui;
    margin:16px;
    width: 448px;
    padding: 20px;
`
export const FormBody = styled.div`
    padding: 10px;
    margin: 0;
    
`
export const FormTitle = styled.h2`
    font-size: 20px;
    font-family: system-ui;
    font-weight: 600;
`
export const FormGroup = styled.div`
        width: 100%;
        margin-bottom: 10px;
    `
export const Label = styled.label`
    font-size: 16px;
    font-family: system-ui;
    font-weight: 400;
    padding: 8px;
`
export const Input = styled.input`
    font-size: 16px;
    font-family: system-ui;
    font-weight: 400;
    width:100%;
    padding: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
    
    box-sizing: border-box;
`
export const FormButtonContainer = styled.div`
    background-color:#f8f9fa ;  
    display: flex;
    width: 100%;
    padding: 16px 0;
    
    & :first-child {
        margin-left: 16px;
    }
`

export const FormButtonsSuccess = styled.button`
    color:green;
    padding: 16px 16px; 
    border-radius: 8px;
    font-size: 16px;
    cursor:pointer;  
    border:1px solid green;
    background-color: transparent;
  
`
export const FormButtonsReject = styled.button`
     color:red;
    padding: 16px 16px; 
    border-radius: 8px;    
    cursor:pointer;  
    border:1px solid red;
    background-color: transparent;
    font-size: 16px;
  
`
