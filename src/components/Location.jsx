import React from 'react';

const Location = ({ rick }) => {
    return (
        <div className='Location'>
            <div className='Counter'>
                <div className='Section'>
                    <section>
                        <p>Name:</p>
                        <h2>{rick.name}</h2>
                    </section>
                    <section>
                        <p>Id:</p>
                        <h2>{rick.id}</h2>
                    </section>
                    <section>
                        <p>Tipo:</p>
                        <h2>{rick.type}</h2>
                    </section>
                    <section>
                        <p>Dimension:</p>
                        <h2>{rick.dimension}</h2>
                    </section>
                    <section>
                        <p>Residentes</p>
                        <h2>{rick.residents?.length}</h2>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Location;