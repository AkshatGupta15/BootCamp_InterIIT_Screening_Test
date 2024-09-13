const express = require('express');
const { getAllNiftyStocks, getNiftyStock, getTodaysNiftyStock, getAllLatestNiftyStocks, getLatestNiftyStock, getRelevantStocks,  } = require('../controllers/Operations');

const router = express.Router();

router.get('/welcome', (req, res) => {
    res.send('Welcome to the Operations routes');
});

router.get('/stocks/all', getAllNiftyStocks);
router.get('/stocks/:symbol', getNiftyStock);
router.get('/stocks/latest', getAllLatestNiftyStocks);
router.get('/stocks/today/:symbol', getTodaysNiftyStock);
router.get('/stocks/latest/:symbol', getLatestNiftyStock);
router.get('/stocks/today', getAllNiftyStocks);
router.get("/stocks",getRelevantStocks);

module.exports = router;