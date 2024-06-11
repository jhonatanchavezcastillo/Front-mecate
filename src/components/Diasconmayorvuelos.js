import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../functions'

const App = () => {
    const url = '/api/diasconmayorvuelos';//'https://mecate-api.onrender.com';
    const [diamayorvuelos, setDiamayorvuelos] = useState('');
    
    useEffect( ()=>{
        getOnrender();
    },[]);

    const getOnrender = async () => {
        try {
          const response = await axios.get(url);
          // Assuming response.data contains id, total_answered, total_unanswered
          setDiamayorvuelos(response.data.dia_mayor_vuelos);
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
                                <i className='fa-solid '></i> 3\. ¿En qué día se han tenido mayor número de vuelos?
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Día con más vuelos</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'> 
                                <tr>
                                    <td>{diamayorvuelos}</td>
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