import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomonedas from '../hooks/useCriptomonedas';
import axios from 'axios';


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }

`;

const Formulario = () => {

    // State del listado de criptomonedas
    const [listacripto,guardarCriptomonedas] = useState([]);
    const [error,guardarError] = useState(false);

    const MONEDAS = [
        {codigo: 'ARG', nombre: 'Peso Argentino'},
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];

    // Utilizar useMoneda
    const [moneda,SelectMonedas] = useMoneda('Elige tu Moneda', '' , MONEDAS);

    // Utilizar criptomonedas
    const [criptomoneda,SelectCripto] = useCriptomonedas('Elige tu Criptomonedas','',listacripto);

    // Ejecutar llamdo a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
                
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    },[]);

    const cotizarMoneda = (e) => {
        e.preventDefault();

        // Validar
        if(moneda==='' || criptomoneda===''){
            guardarError(true);
            return;
        };

        guardarError(false);

    };

    return ( 

        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMonedas/>
            <SelectCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>

     );
}
 
export default Formulario;
