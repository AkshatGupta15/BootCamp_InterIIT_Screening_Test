const fs = require('fs');

const symbols = ["RELIANCE.NS", "TCS.NS", "INFY.NS", "HDFCBANK.NS", "ICICIBANK.NS", "HINDUNILVR.NS"];
const startDate = new Date('2024-09-06'); // Start of the week
const endDate = new Date('2024-09-12'); // End of the week

// Function to generate random minute-wise stock data
function generateRandomData(symbols, startDate, endDate) {
    const data = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const tradingDayStart = new Date(currentDate.setHours(9, 0, 0));
        const tradingDayEnd = new Date(currentDate.setHours(15, 30, 0));
        const minutesInDay = 390; // Minutes from 9:00 AM to 3:30 PM

        symbols.forEach(symbol => {
            for (let i = 0; i < minutesInDay; i++) {
                const timestamp = new Date(tradingDayStart.getTime() + i * 60000);
                const price = parseFloat((Math.random() * 1000 + 1000).toFixed(2)); // Convert to float
                const change = parseFloat((Math.random() * 2 - 1).toFixed(6)); // Convert to float

                data.push({
                    symbol,
                    price: price,
                    change: change,
                    timestamp: timestamp.toISOString(),
                });
            }
        });

        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    return data;
}

// Generate the data
const generatedData = generateRandomData(symbols, startDate, endDate);

// Save the data to a JSON file
fs.writeFile('stockData.json', JSON.stringify(generatedData, null, 2), err => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Stock data generated and saved to stockData.json');
    }
});
