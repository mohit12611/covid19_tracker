import React from 'react';
import { useEffect, useState } from 'react';

// import Chart from './components/Chart/Chart';
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

import image from './images/covid_.jpg'

const App = () => {

    const [state, setState] = useState({ data: {}, country: "" })

    useEffect(() => {
        (async function () {
            const fetchedData = await fetchData();
            setState({ data: fetchedData });

            console.log("state", state)
        })();
    }, []);

    const handleCountryChange = async (country) => {
        //
        const fetchedData = await fetchData(country);

        setState({ data: fetchedData , country: country });
    }

    const {data ,country} = state;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19"></img>
            <Cards data={state.data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country}/>
        </div>
    )
}

export default App;