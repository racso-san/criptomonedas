import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #B7322C;
    padding: 1rem;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neues', cursive;
`;

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>
            {mensaje}
        </MensajeError>
     );
}
 
export default Error;
