const express = require('express');
const router = express.Router();
const CostDetails = require("../model/CostCalculation");


router.get('/vehicle-cost/calculation',async(req,res) => {
    try{

        const fetch = require('node-fetch');

        var model = 'camry';
        const vehicalResponcePromise = fetch('https://api.api-ninjas.com/v1/cars?model=' + model, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'ZH8xUL5f7cWXSdXt2b6IZw==v8PIZcb7x7YlYDbH'
          }
        });
        
        vehicalResponcePromise
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            return response.json();
          })
          .then(data => {
            const responseData =data;
            console.log(data)
            return responseData
          })
          .catch(error => {
            console.error('Fetch failed:', error);
          });
        // console.log(responseData)
        
        // Function to calculate cost for vehicle travel
        function calculateCost(distance, fuelConsumption, fuelPrice) {
            // Calculate fuel needed for the trip
            const fuelNeeded = distance / fuelConsumption;

            // Calculate total cost
            const totalCost = fuelNeeded * fuelPrice;

            return totalCost;
        }
        
        // Example usage
        const distance = 300; // Distance in kilometers
        const fuelConsumption = 12; // Fuel consumption in liters per 100 kilometers
        const fuelPrice = 1.5; // Fuel price per liter

        const cost = calculateCost(distance, fuelConsumption, fuelPrice);

        const costDetails = new CostDetails({
            distance: distance,
            fuelConsumption: fuelConsumption,
            fuelPrice: fuelPrice,
            totalCost: cost
        });

        await costDetails.save();
        
        console.log("Total cost for the trip:", cost.toFixed(2), "USD");
        res.status(200).json({ message: 'Cost details saved successfully.', data: costDetails });


        
    } catch (error){
        console.error('Error saving cost data:', error);
        res.status(500).send('Internal server error');
    }
})

module.exports =router;