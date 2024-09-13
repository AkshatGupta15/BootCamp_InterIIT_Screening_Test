const { PrismaClient } = require('@prisma/client');
const e = require('express');
const prisma = new PrismaClient();

const getAllNiftyStocks = async (req, res) => {
    try {
        const stocks = await prisma.nifty50.findMany();
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching stocks:', error);
        res.status(500).json({ error: 'Failed to fetch stocks' });
    }
}

const getNiftyStock = async (req, res) => {
    const { symbol } = req.params;
    try {
        const stock = await prisma.nifty50.findMany({
            where: {
                symbol: symbol,
            },
        });
        res.json(stock);
    } catch (error) {
        console.error('Error fetching stock:', error);
        res.status(500).json({ error: 'Failed to fetch stock' });
    }
}

const getAllRecentNiftyStocks = async (req, res) => {
    try {
        // Fetch the latest Nifty50 stock data
        const stocks = await prisma.nifty50.findMany({
            orderBy: {
                timestamp: 'desc', // Order by most recent first
            },
            take: 10, // Limit to recent 10 records, adjust as needed
        });
        
        // Check if data was fetched
        if (stocks.length === 0) {
            return res.status(404).json({ message: 'No stock data found.' });
        }
        
        // Send the fetched data as JSON response
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching stocks:', error);
        res.status(500).json({ error: 'Failed to fetch stocks' });
    }
}
const getAllLatestNiftyStocks = async (req, res) => {
    try {
        const stocks = await prisma.nifty50.findMany({
            
        });
        // const stocks = await prisma.nifty50.findMany({
        //     // orderBy: {
        //     //     timestamp: 'desc',
        //     // },
        //     // where: {symbol:"RELIANCE.NS","OR":{symbol:"TCS.NS","OR":{symbol:"HDFCBANK.NS"}}},
        //     // take: 3, // Get the latest 6 stocks
        // });
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching latest stocks:', error);
        res.status(500).json({ error: 'Failed to fetch latest stocks' });
    }
}

const getLatestNiftyStock = async (req, res) => {
    const { symbol } = req.params;
    try {
        const stock = await prisma.nifty50.findFirst({
            where: {
                symbol: symbol,
            },
            orderBy: {
                timestamp: 'desc',
            },
        });
        res.json(stock);
    } catch (error) {
        console.error('Error fetching latest stock:', error);
        res.status(500).json({ error: 'Failed to fetch latest stock' });
    }
}
const getTodaysNiftyStock = async (req, res) => {
    const { symbol } = req.params;
    try {
        const stock = await prisma.nifty50.findMany({
            where: {
                symbol: symbol,
                timestamp: { 
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                 } // Start of today
            },
            orderBy: {
                timestamp: 'desc',
            },
        });
        res.json(stock);
    } catch (error) {
        console.error('Error fetching latest stock:', error);
        res.status(500).json({ error: 'Failed to fetch latest stock' });
    }
}
const getRelevantStocks = async (req, res) => {
    try {
        const stocks = await prisma.nifty50.findMany({
            where: {
                symbol: {
                    in: ["RELIANCE.NS", "TCS.NS", "HDFCBANK.NS"]
                }
            }
        });
        res.json(stocks);
    } catch (error) {
        console.error('Error fetching relevant stocks:', error);
        res.status(500).json({ error: 'Failed to fetch relevant stocks' });
    }
};
exports.getAllNiftyStocks = getAllNiftyStocks;
exports.getNiftyStock = getNiftyStock;
exports.getAllLatestNiftyStocks = getAllLatestNiftyStocks;
exports.getLatestNiftyStock = getLatestNiftyStock;
exports.getAllRecentNiftyStocks = getAllRecentNiftyStocks;
exports.getTodaysNiftyStock = getTodaysNiftyStock;
exports.getRelevantStocks = getRelevantStocks;