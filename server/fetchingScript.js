const yahooFinance = require('yahoo-finance2').default;
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Stocks to fetch (symbols)
const stocks = ["RELIANCE.NS", "TCS.NS", "HDFCBANK.NS"];
const intervalMinutes = 15;
const startTime = 9 * 60; // 9 AM in minutes
const endTime = 15 * 60; // 3 PM in minutes

// Function to fetch stock data
const fetchStockData = async () => {
    try {
        const stockData = [];

        // Fetch data for each stock
        for (const symbol of stocks) {
            const result = await yahooFinance.quote(symbol);
            const { regularMarketPrice: price, regularMarketChangePercent: change } = result;
            const timestamp = new Date().toISOString();

            stockData.push({
                symbol,
                price,
                change,
                timestamp,
            });
        }

        // Save to database
        await saveStockData(stockData);
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
};

// Function to save data to the database
const saveStockData = async (data) => {
    try {
        await prisma.nifty50.createMany({
            data: data,
            skipDuplicates: true, // Optional: Skip duplicates based on primary key
        });
        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        // Ensure Prisma client disconnects
        await prisma.$disconnect();
    }
}

// Function to check if the current time is within the specified range (9 AM to 3 PM)
const isWithinTimeRange = () => {
    const now = new Date();
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    return minutesNow >= startTime && minutesNow <= endTime;
}

// Start the scheduler
const startScheduler = () => {
    console.log('Scheduler started.');

    // Initial run
    if (isWithinTimeRange()) {
        console.log("Fetching data...");
        fetchStockData();
    } else {
        console.log('Outside of trading hours, no data fetched.');
    }

    // Schedule the function to run every 15 minutes
    // setInterval(() => {
    //     if (isWithinTimeRange()) {
    //         console.log("Fetching data...");
    //         fetchStockData();
    //     } else {
    //         console.log('Outside of trading hours, no data fetched.');
    //     }
    // }, intervalMinutes * 60 * 1000); // Every 15 minutes
};

module.exports = { startScheduler };
