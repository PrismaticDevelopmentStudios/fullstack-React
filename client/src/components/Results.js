import axios from 'axios';

const Results = () => {
        // Axios GET Response
        var data;
        const getData= (e) => {
            e.preventDefault();
            axios.get(`http://localhost:5000/keychain`, {data})
            .then(Response => {
                data = Response.data
                for (let i = 0; i < data.length; i++) {
                    const site = data[i].website;
                    const account = data[i].account;
                    const password = data[i].password;
                    console.log(site, account, password);
                }
            })
            .catch(err => {
                console.error(err);
            });
        };
    return (
        <div>
             <div className="inline">
                <h3>{data}</h3>
                <h3>data</h3>
                <h3>data</h3>
                <h3>data</h3>
                <h3>data</h3>
                <button className="btn" onClick={getData}>Data</button>
            </div>
        </div>
    )
}

export default Results
