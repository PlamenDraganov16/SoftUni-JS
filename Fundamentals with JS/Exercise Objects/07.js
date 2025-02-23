class Vehicle
{
    constructor(vehicleType, vehicleModel, vehicleParts, vehicleFuel)
    {
        vehicleParts.quality = vehicleParts.engine * vehicleParts.power;

        this.type = vehicleType;
        this.model = vehicleModel;
        this.parts = vehicleParts;
        this.fuel = vehicleFuel; 
    }
            
        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);



