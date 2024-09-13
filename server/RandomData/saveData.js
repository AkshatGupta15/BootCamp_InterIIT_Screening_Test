const fs = require('fs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const saveData = async () => {
    try {
        // Read the generated data from the JSON file
        const fileContent = fs.readFileSync('stockData.json', 'utf8');
        console.log('File content:', fileContent); // Log file content to debug

        const data = JSON.parse(fileContent);
        console.log('Parsed data:', data); // Log parsed data to verify

        // Insert data into the database
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
};

saveData();
