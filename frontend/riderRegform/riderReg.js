// When a user clicks Submit, rider data is captured and stored in database
router.post("/rider/register", async (req, res) => {
    const riderData = req.body
    try{
        const newRider = new rider(riderData);
        await newRider.save();
        res
        .status(201)
        .send({ message: "Rider rigestered successfully", rider: newRider})
    } catch (error){
    res.status(400).send({error});
    }
    });