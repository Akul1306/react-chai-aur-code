import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})   //to update on UI even if nothing is fetched so that it does not crashes
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/
        // currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  //converting to json  //JSON.Parse also used
        .then((res) => setData(res[currency]))           //to hold the data
        console.log(data);
    },[currency])
    console.log(data);
    return data ;  //what is to be returned data?, data/setData? => not applicable in this case

}
export default useCurrencyInfo;

//custom hook is designed