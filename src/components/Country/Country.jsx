import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';


const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited)
    }
    
const passWithParams=() => {
    handleVisitedCountry(country)
}

    return (
        <div className={`country ${visited? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited?'purple':'blue'}}>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags (country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{ visited? 'Visited':'Going'}</button>
            {/* {visited && 'i have visited this country'} */}
            {visited ? 'i have visited this country' : 'i want to visit'}
            <hr />
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetails>
        </div>
    );
};

export default Country;