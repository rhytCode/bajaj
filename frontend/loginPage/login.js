// Login User - trial 1
const login = [];
loginBtn.addEventListener ("click", (e) => {
    e.preventDefault() 
{
router.post("/users/login", async (req,res) => {
    const {name,password,role} = req.body;
    const user = await User.findByCredentials(name,password,role);
    if (name == " " && password == " " && role == " ")
    {   const token = await user.generateAuthToken() 
        console.log("Logged in successfully");
        window.location = "dashboard.html"; 
    return true;
    } else {
        (user.error)
        alert ("Invalid username or password");
        return false;
    }
}}});