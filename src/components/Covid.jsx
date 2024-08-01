import React, { useEffect, useState } from 'react';
import '../assets/covid.css';

function Covid() {

    const [ data, setData ] = useState([])

    const getData = async () => {
        try {
            const response = await fetch(`https://data.covid19india.org/data.json`);
            const actualData = await response.json();
            console.log(actualData.statewise);
            setData(actualData.statewise);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <section className="container-fluid">
                <div className="container">
                    <div className="row">
                        <header className="col-12">
                            <h1 className="fs-3 text-center">Live</h1>
                            <h1 className="fs-3 text-center">COVID-19 TRACKER</h1>
                        </header>

                        {data?.map((item, index) => {
                            return (
                                <section className="col-4" key={index}>
                                    <div className="card bg-secondary">
                                        <div className="card-body">
                                            <h1 className="card-subtitle mb-2 text-body-secondary fs-2 text-center">{item.state}</h1>
                                            <h2 className="card-title fs-5 text-center">{item.statecode}</h2>
                                            <p className="card-teaxt fs-5 text-center">{item.active}</p>
                                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        </div>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid;
