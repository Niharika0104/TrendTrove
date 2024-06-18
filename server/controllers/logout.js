const logout = (req, res) => {
    res.cookie('jwt', '', { expires: new Date(0), secure: true });
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = {logout};
