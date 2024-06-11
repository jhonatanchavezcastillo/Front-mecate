import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../functions'

const App = () => {
    const url = '/api/current';
    const [title_current, setTitleCurrent] = useState('');
    const [view_count_current, setViewCountCurrent] = useState('');
    const [profile_image_current, setProfileimageCurrent] = useState('');
    const [score_current, setScoreCurrent] = useState('');
    const [link_current, setLinkCurrent] = useState('');
    const [creation_date_current, setDateCurrent] = useState('');

    const [title_old, setTitleOld] = useState('');
    const [view_count_old, setViewCountOld] = useState('');
    const [profile_image_old, setProfileimageOld] = useState('');
    const [score_old, setScoreOld] = useState('');
    const [link_old, setLinkOld] = useState('');
    const [creation_date_old, setDateOld] = useState('');
    
    useEffect( ()=>{
        getOnrender();
    },[]);

    const getOnrender = async () => {
        try {
          const response = await axios.get(url);
          setTitleCurrent(response.data[0].answer_current.title);
          setViewCountCurrent(response.data[0].answer_current.view_count);
          setProfileimageCurrent(response.data[0].answer_current.owner.profile_image);
          setScoreCurrent(response.data[0].answer_current.score);
          setLinkCurrent(response.data[0].answer_current.link);

          const timestamp_current = response.data[0].answer_current.creation_date; // Ajusta esto según tu estructura de datos
          const date_current = new Date(timestamp_current * 1000);
          const creation_date_current = date_current.toLocaleDateString('en-US') + ' ' + date_current.toLocaleTimeString('en-US');
          setDateCurrent(creation_date_current);

          setTitleOld(response.data[1].answer_old.title);
          setViewCountOld(response.data[1].answer_old.view_count);
          setProfileimageOld(response.data[1].answer_old.owner.profile_image);
          setScoreOld(response.data[1].answer_old.score);
          setLinkOld(response.data[1].answer_old.link);

          const timestamp = response.data[1].answer_old.creation_date; // Ajusta esto según tu estructura de datos
          const date = new Date(timestamp * 1000);
          const creation_date_old = date.toLocaleDateString('en-US') + ' ' + date.toLocaleTimeString('en-US');
          setDateOld(creation_date_old);
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
                                <i className='fa-solid '></i> 4\. Obtener la respuesta más vieja y más actual
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <table className='table table-bordered'>
                            <thead>
                            <tr><th>Más actual</th></tr>
                                <tr>
                                    <th>Título</th>
                                    <th>Fecha de publicación</th>
                                    <th>Vistas</th>
                                    <th>Avatar</th>
                                    <th>Puntaje</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'> 
                                <tr>
                                    <td>{title_current}</td>
                                    <td>{creation_date_current}</td>
                                    <td>{view_count_current}</td>
                                    <td><img style={{width: "50px"}} src={profile_image_current}  alt="image"></img></td>
                                    <td>{score_current}</td>
                                    <td>{link_current}</td>
                                </tr>                           
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <table className='table table-bordered'>
                            <thead>
                            <tr><th>Más vieja</th></tr>
                                <tr>
                                    <th>Título</th>
                                    <th>Fecha de publicación</th>
                                    <th>Vistas</th>
                                    <th>Avatar</th>
                                    <th>Puntaje</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'> 
                                <tr>
                                    <td>{title_old}</td>
                                    <td>{creation_date_old}</td>
                                    <td>{view_count_old}</td>
                                    <td><img style={{width: "50px"}} src={profile_image_old}  alt="image"></img></td>
                                    <td>{score_old}</td>
                                    <td>{link_old}</td>
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