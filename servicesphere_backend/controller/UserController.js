
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {UserModel,ServiceProviderModel,ProductUserModel} = require("../Models/UserModel");


exports.UserSignup = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists' });
    }

    const newUser= new UserModel(req.body);
    await newUser.save();

    res.status(201).send({ message: 'User account created successfully' });
  } catch (error) {
    console.error('Error creating User account:', error.message);
    res.status(500).send({ message: 'Internal server error' });
  }
};

exports.ServiceProviderSignup = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await ServiceProviderModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists' });
    }

    const newProvider = new ServiceProviderModel(req.body);
    await newProvider.save();

    res.status(201).send({ message: 'User account created successfully' });
  } catch (error) {
    console.error('Error creating User account:', error.message);
    res.status(500).send({ message: 'Internal server error' });
  }
};

exports.ProductUserSignup = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await ProductUserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists' });
    }

    const newUser = new ProductUserModel(req.body);
    await newUser.save();

    res.status(201).send({ message: 'User account created successfully' });
  } catch (error) {
    console.error('Error creating User account:', error.message);
    res.status(500).send({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).send({ message: 'Email, password, and role are required' });
    }

    let user;

    switch (role) {
      case 'User':
        user = await UserModel.findOne({ email });
        break;
      case 'ServiceProvider':
        user = await ServiceProviderModel.findOne({ email });
        break;
      case 'Buyer':
        user = await ProductUserModel.findOne({ email });
        break;
      default:
        return res.status(400).send({ message: 'Invalid role' });
    }

    if (!user) {
      return res.status(401).send({ message: 'Invalid User' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).send({ message: 'Invalid password' });
    }

   
    res.status(200).send({ message: 'logged in successfully' });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).send({ message: 'Internal server error' });
  }
};

