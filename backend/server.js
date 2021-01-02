const express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    cors = require("cors");
const axios = require('axios');
const router = express.Router();

// const rp = require('request-promise');


const plus2 = () => {
    let start = 0;
    let result = start + 2

    return 'ds'
}

const getAllCmcListings = () => {
    // axios({
    //     method: 'GET',
    //     url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    // }).then((response) => {
    //     console.log(response)
    // }).catch(function(error) {
    //     // console.log(error);
    // });

    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest')
        .then(res => {
            console.log(res)
        }).
    catch(function(error) {
        console.log(error);
    });
}

// getAllCmcListings()


app.use(cors());
app.listen(port, () => console.log("RUNNING ON PORT " + port));

app.get("/", (req, res) => {



    // console.log(req);

    res.send(plus2);
});