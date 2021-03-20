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
    console.log(req.body);
    try {
        const result = await Package.create(req.body);
        res.json(result);
    } catch(error) {
        console.log(error);
    }
})

// Post get estimate ***
router.get("/api/estimate", async function (req, res, next) {
    const { postal_to, postal_from } = req.body;
    
    try {
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
    } catch(error) {
        console.log(error);
    }
});

module.exports = router;