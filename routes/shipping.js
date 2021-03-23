const router = require("express").Router();
const axios = require("axios");
const { Package } = require("../models");

// Get carriers listing.
router.get("/api/carrier", async function (req, res, next) {
    const { data } = await axios.get("https://api.shipengine.com/v1/carriers", {
        headers: {
            "Content-Type": "applications/json",
            "API-Key": "TEST_x35d9QOd3kSHxFVMFgWPKi5E/ZZHKF7VRqNiFik0uaw"
        },
    });

    res.json(data);
})


router.post("/api/package", async (req, res) => {
    try {
        const result = await Package.create(req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
})

// Post get estimate ***
router.post("/api/estimate", async function (req, res, next) {

    console.log(req.body)

    var raw = JSON.stringify({ "carrier_ids": ["se-123890"], "from_country_code": "US", "from_postal_code": req.body.zip1, "to_country_code": "US", "to_postal_code": req.body.zip2, "to_city_locality": req.body.address2, "to_state_province": req.body.state2, "weight": { "value": 1, "unit": "ounce" }, "dimensions": { "unit": "inch", "length": 5, "width": 5, "height": 5 }, "confirmation": "none", "address_residential_indicator": "no" });

    var requestOptions = {
        method: 'POST',
        headers: {
            "Host": "api.shipengine.com",
            "API-Key": "TEST_x35d9QOd3kSHxFVMFgWPKi5E/ZZHKF7VRqNiFik0uaw",
            "Content-Type": "application/json"
        },
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.shipengine.com/v1/rates/estimate", requestOptions)
        .then(response => res.json(response))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});

module.exports = router;