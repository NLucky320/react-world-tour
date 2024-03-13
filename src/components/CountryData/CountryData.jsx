

const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h4><small>Country data: { country.name.common}</small> </h4>
        </div>
    );
};

export default CountryData;