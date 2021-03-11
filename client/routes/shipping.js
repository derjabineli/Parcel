var express = require("express");
var router = express.Router();
const axios = require("axios");

// Get carriers listing.
router.get("/carrier", async function (req, res, next) {
    const { data } = await axios.get("https://api.shipengine.com/v1/carriers", {
        headers: {
            "Content-Type": "applications/json",
            "API-Key": "TEST_x35d9QOd3kSHxFVMFgWPKi5E/ZZHKF7VRqNiFik0uaw"
        },
    });

    res.json(data);
})

// Post get estimate
router.post("/", async function (req, res, next) {
    const { postal_to, postal_from } = req.body;

    const { data } = await axios.post(
        "https://api.shipengine.com/v1/rates/estimate",
        {
            "carrier_id": "se-28529731",
            "from_country_code": "US",
            "from_postal_code": postal_from,
            "to_country_code": "US",
            "to_postal_code": postal_to,

            "weight": {
                "value": 0,
                "unit": "pound"
            },
            "dimensions": {
                "unit": "inch",
                "length": 0,
                "width": 0,
                "height": 0
            },
            "confirmation": "none",
            "address_residential_indicator": "unknown",
            "ship_date": "2018-09-23T15:00:00.000Z"
        },
        {
            headers: {
                "API-Key": "TEST_x35d9QOd3kSHxFVMFgWPKi5E/ZZHKF7VRqNiFik0uaw"
            }
        }
    );

    res.json(data);
});

module.exports = router;