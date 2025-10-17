const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet Email est déjà utilisé.' });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hash });
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès.' });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'inscription.', error: error.message });

  }
};

exports.login = async (req, res) => {
  try{
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    res.status(200).json({ userId: existingUser._id, token });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la connexion.', error: error.message });
  }
};