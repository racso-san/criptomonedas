import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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

Error.propType = { 
    mensaje: PropTypes.string.isRequired
};

export default Error;
