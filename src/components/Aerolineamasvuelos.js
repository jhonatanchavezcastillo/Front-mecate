import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../functions'

const App = () => {
    const url = '/api/aerolineamasvuelos';//'https://mecate-api.onrender.com';
    const [nombreAerolinea, setNombreAerolinea] = useState('');
    const [vuelosCount, setVuelosCount] = useState('');

    useEffect( ()=>{
        getOnrender();
    },[]);

    const getOnrender = async () => {
        try {
          const response = await axios.get(url);
          // Assuming response.data contains id, total_answered, total_unanswered
          setNombreAerolinea(response.data.nombre_aerolinea);
          setVuelosCount(response.data.vuelos_count);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <div className='btn btn-dark'>
                                <i className='fa-solid '></i> 2\. ¿Cuál es el nombre aerolínea que ha realizado mayor número de vuelos durante el año?
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Aeropuerto</th>
                                    <th>Número de vuelos</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'> 
                                <tr>
                                    <td>{nombreAerolinea}</td>
                                    <td>{vuelosCount}</td>
                                </tr>                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='modal fade'>
            </div>
        </div>
    )
}

export default App