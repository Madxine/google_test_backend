const User = require("../schemas/User");
const jwt = require("jsonwebtoken");

const createToken = (_id, name) => {
  return jwt.sign({ _id, name }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    //create token
    const token = createToken(user._id, user, username);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = await User.signup(email, password, username);
    //create token
    const token = createToken(user._id, user,username, username);
    res.status(200).json({ email, token, username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser };
