const { ServiceProviderModel } = require('../Models/UserModel'); 

const getAllCarServiceUsers = async (req, res) => {
    try {
        const carServiceUsers = await ServiceProviderModel.find({ ServiceType: "car-service" })
            .select("UserName phoneNumber Address");

        if (carServiceUsers.length === 0) {
            return res.status(404).json([]);
        }

        res.status(200).json(carServiceUsers);
    } catch (error) {
        console.error("Error fetching car service users:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const getAllWaterUser = async(req,res) =>{
    try {
        const waterUsers = await ServiceProviderModel.find({ ServiceType: "water-service" })
            .select("UserName phoneNumber Address");

        if (waterUsers.length === 0) {
            return res.status(404).json([]);
        }

        res.status(200).json(waterUsers);
    } catch (error) {
        console.error("Error fetching water service users:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const getAllSolarUser = async (req, res) => {
    try {
        const solarUsers = await ServiceProviderModel.find({ ServiceType: "solar-service" })
            .select("UserName phoneNumber Address");

        if (solarUsers.length === 0) {
            return res.status(404).json([]);
        }

        res.status(200).json(solarUsers);
    } catch (error) {
        console.error("Error fetching solar service users:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const getAllElectricUsers = async (req, res) => {
    try {
        const electricUsers = await ServiceProviderModel.find({ ServiceType: "electric-service" })
            .select("UserName phoneNumber Address");

        if (electricUsers.length === 0) {
            return res.status(404).json([]);
        }

        res.status(200).json(electricUsers);
    } catch (error) {
        console.error("Error fetching electric service users:", error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    getAllCarServiceUsers,
    getAllWaterUser,
    getAllSolarUser,
    getAllElectricUsers
};
