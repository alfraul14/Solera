import styled from 'styled-components'
export const BoxContainer = styled.div`
    border: 1px solid #ededed;
    width: 224px;
    font-family: system-ui;
    margin:16px;
    height: fit-content;
`
export const CardBody = styled.div`
    padding: 10px;
    margin: 0;
    height: 128px;
    overflow: hidden;
`
export const CardTitle = styled.h2`
    font-weight:600px;
    font-size: 20px;
    margin-bottom: 0.75rem;
`
export const CardText = styled.p`
    
`
export const BoxButtonsContainer = styled.div`
    background-color:#f8f9fa ;  
    display: flex;
    & :first-child {
        margin-left: 16px;
    }
    
`
export const BoxButtons = styled.button`
    color:rgb(57 138 253);
    padding: 16px 8px; 
    cursor:pointer;  
    border-style :none ;
    background-color: transparent;
  
`
