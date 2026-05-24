const signup = async (req, res) =>{
    res.send('Signup called')
}
const login = async (req, res) =>{
    res.send('login called')
}
const logout = async (req, res) =>{
    res.send('logout called')
}

export {signup, login, logout}