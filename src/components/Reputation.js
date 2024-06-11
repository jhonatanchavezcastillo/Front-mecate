import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../functions'

const App = () => {
    const url = '/api/reputation';
    const [title, setTitle] = useState('');
    const [reputation, setReputation] = useState('');
    const [profile_image, setProfileimage] = useState('');
    const [score, setScore] = useState('');
    const [link, setLink] = useState('');
    
    useEffect( ()=>{
        getOnrender();
    },[]);

    const getOnrender = async () => {
        try {
          const response = await axios.get(url);
          setTitle(response.data.title);
          setReputation(response.data.owner.reputation);
          setProfileimage(response.data.owner.profile_image);
          setScore(response.data.score);
          setLink(response.data.link);
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
                                <i className='fa-solid '></i> 2\. Obtener la respuesta con mayor reputación
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Reputación</th>
                                    <th>Avatar</th>
                                    <th>Puntaje</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'> 
                                <tr>
                                    <td>{title}</td>
                                    <td>{reputation}</td>
                                    <td><img style={{width: "50px"}} src={profile_image}  alt="image"></img></td>
                                    <td>{score}</td>
                                    <td>{link}</td>
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