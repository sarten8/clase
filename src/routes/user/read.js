
const read = async (req, res) => {
    console.log(req.dbUser)
    try {
        res.json({ message: true })
    }
    catch (err) {
        res.status(500).json(`Error: ${err}`)
    }
}

export default read