import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Residents = ({ url }) => {
    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])

    console.log(resident)

    let statusArray = []
    const bgStatus = () => {
        if (resident.status === "Alive") {
            statusArray.push("chartreuse", "Vivo")
        } else if (resident.status === "Dead") {
            statusArray.push("red", "Muerto")
        } else {
            statusArray.push("grey", "Desconocido")
        }

        return statusArray
    }
    bgStatus()

    return (
        <div className='Nieto'>
            <div className="Caracteristicas">
                <div className='Tipos'>
                    <div className='div-container-img'>
                        <img src={resident.image} alt="" />
                    </div>
                    <div className='div-sections-name'>
                        <h1 style={{fontSize: 20}}>{resident.name}</h1>
                        <section>
                            <p>Episodios:</p>
                            <h2> {resident.episode?.length}   </h2>
                        </section>
                    </div>

                    <div className='div-sections'>

                        <section>

                            <p>Especie:</p>
                            <h2> {resident.species} </h2>
                        </section>
                        <section>
                            <p>Origen:</p>
                            <h2> {resident.origin?.name} </h2>
                        </section>

                    </div>

                </div>
            </div>
            <div className='prueba-status'>
                <div className='info_status'>
                    <div className='status' style={{ backgroundColor: statusArray[0] }}></div>
                    <p>{statusArray[1]}</p>
                </div>
            </div>

        </div>

    );
};

export default Residents;