const router = require("express").Router();
const usersController = require("./controller/UserController");
const ServiceController = require("./controller/ServiceController");

router.post("/api/v1/users/add-user", usersController.UserSignup);
router.post("/api/v1/users/add-provider", usersController.ServiceProviderSignup);
router.post("/api/v1/users/add-buyer", usersController.ProductUserSignup);
router.post("/api/v1/users/login", usersController.login);

router.get("/api/v1/users/car-service",ServiceController.getAllCarServiceUsers);
router.get("/api/v1/users/water-service",ServiceController.getAllWaterUser);
router.get("/api/v1/users/electric-service",ServiceController.getAllElectricUsers);
router.get("/api/v1/users/solar-service",ServiceController.getAllSolarUser);


module.exports = router;