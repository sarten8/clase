const deleteSession = async (req, res) => {
    try {
        await req.dbUser.update({ sessionId: null })
    } catch (err) {
        res.status(500).json({ message: `Error: ${err}` })
    }
}

export default deleteSession