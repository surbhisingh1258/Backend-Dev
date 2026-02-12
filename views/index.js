const validateYear = (req, res, next) => {
    const {year} = req.query;

    if(isNaN(year)){
        return res.status(400).send("Year must be a number");
    }
    if (year < 2000 || year > 2026) {
            return res.status(400).send(`Year must be between 1900 and 2026`);
    }
    next();
};
export default validateYear;