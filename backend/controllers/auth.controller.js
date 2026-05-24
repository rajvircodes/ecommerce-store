import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
const generateToken = async () =>{
  const accessToken =  jwt.sign({userId}, process.env.ACCESS_TOKEN,{
    expiresIn:"15m"
  });

  const refreshToken = jwt.sign({userId},process.env.UPSTASH_REDIS_REST_TOKEN)
}


// =======SIGNUP USER=====================
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
  // Check existing...
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
      success: false,
    });
  }
// create new user
  const user = await User.create({
    name,
    email,
    password,
  });
  const {accessToken, refreshToken} = generateToken(user._id)
  res.status(201).json({ message: "User created successfully", user: user });

  } catch (error) {
    res.status(400).json({message: error.message})
  }
};





// =====LOGIN USER ======================
const login = async (req, res) => {
  const {email, password} = req.body

  if(!email || !password){
    return res.status(400).json({message:"all field required"})
  }

  const user = await User.findOne({email})
  res.status(200).json({user})
};







const logout = async (req, res) => {
  res.send("logout called");
};

export { signup, login, logout };
