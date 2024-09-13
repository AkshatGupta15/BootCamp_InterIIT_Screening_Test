# .....
My server is running on AWS EC2 and is accessible via http://3.110.155.108/. When the frontend is deployed to platforms like Vercel, it blocks HTTP requests and only allows HTTPS. However, locally, the frontend works fine with HTTP requests when using npm run dev.

Steps to Reproduce Locally are mentioned below





# Stock Price Tracking Application

This project is a comprehensive stock price tracking application that uses a modern stack including Vite, React, Express, Prisma, PostgreSQL, Docker, and is hosted on AWS EC2. The application fetches minute-wise stock data, stores it in a PostgreSQL database, and provides APIs for frontend integration.

## Features

- **Frontend**: Built with React and Vite for fast development and build times.
- **Backend**: Express server with Prisma ORM for PostgreSQL database interactions.
- **Database**: PostgreSQL for storing stock data.
- **Docker**: Containerized application for easy deployment.
- **Hosting**: Deployed on AWS EC2 for cloud-based hosting.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Containerization**: Docker
- **Hosting**: AWS EC2

## Setup and Installation

- Node.js (v14 or later)
- Docker (for containerization)
- AWS EC2 instance (for hosting)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AkshatGupta15/BootCamp_InterIIT_Screening_Test
   cd BootCamp_InterIIT_Screening_Test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following content:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/yourdatabase
   PORT=3001
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```

5. Start the Express server:
   ```bash
   npm start
   ```

### Docker Setup

1. Build Docker images for frontend and backend:
   ```bash
   docker build -t your-frontend-image ./frontend
   docker build -t your-backend-image ./backend
   ```

2. Run Docker containers:
   ```bash
   docker run -p 3000:3000 your-frontend-image
   docker run -p 3001:3001 your-backend-image
   ```

### Deployment on AWS EC2


---

# API Documentation

## Endpoints

### 1. Get All Nifty Stocks

- **Endpoint:** `GET /stocks/all`
- **Description:** Fetches all Nifty50 stock data from the database.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": 1,
        "symbol": "RELIANCE.NS",
        "price": 2150.30,
        "change": 1.45,
        "timestamp": "2024-09-13T10:15:00Z"
      },
      ...
    ]
    ```

### 2. Get Stock Data by Symbol

- **Endpoint:** `GET /stocks/:symbol`
- **Description:** Fetches stock data for a specific symbol.
- **Parameters:**
  - `symbol` (path parameter): The stock symbol (e.g., `RELIANCE.NS`).
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": 1,
      "symbol": "RELIANCE.NS",
      "price": 2150.30,
      "change": 1.45,
      "timestamp": "2024-09-13T10:15:00Z"
    }
    ```
  - **Status Code:** 404 Not Found (if the stock symbol does not exist)

### 3. Get Latest Nifty50 Stocks

- **Endpoint:** `GET /stocks/latest`
- **Description:** Fetches the latest Nifty50 stock data.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": 1,
        "symbol": "RELIANCE.NS",
        "price": 2150.30,
        "change": 1.45,
        "timestamp": "2024-09-13T10:15:00Z"
      },
      ...
    ]
    ```

### 4. Get Today's Stock Data by Symbol

- **Endpoint:** `GET /stocks/today/:symbol`
- **Description:** Fetches stock data for a specific symbol for today.
- **Parameters:**
  - `symbol` (path parameter): The stock symbol (e.g., `RELIANCE.NS`).
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": 1,
        "symbol": "RELIANCE.NS",
        "price": 2150.30,
        "change": 1.45,
        "timestamp": "2024-09-13T10:15:00Z"
      },
      ...
    ]
    ```
  - **Status Code:** 404 Not Found (if the stock symbol does not exist)

### 5. Get Latest Stock Data by Symbol

- **Endpoint:** `GET /stocks/latest/:symbol`
- **Description:** Fetches the latest data entry for a specific stock symbol.
- **Parameters:**
  - `symbol` (path parameter): The stock symbol (e.g., `RELIANCE.NS`).
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    {
      "id": 1,
      "symbol": "RELIANCE.NS",
      "price": 2150.30,
      "change": 1.45,
      "timestamp": "2024-09-13T10:15:00Z"
    }
    ```
  - **Status Code:** 404 Not Found (if the stock symbol does not exist)

### 6. Get All Nifty50 Stocks for Today

- **Endpoint:** `GET /stocks/today`
- **Description:** Fetches all Nifty50 stock data for today.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": 1,
        "symbol": "RELIANCE.NS",
        "price": 2150.30,
        "change": 1.45,
        "timestamp": "2024-09-13T10:15:00Z"
      },
      ...
    ]
    ```

### 7. Get Relevant Stocks

- **Endpoint:** `GET /stocks`
- **Description:** Fetches relevant stocks based on criteria defined in the `getRelevantStocks` function.
- **Response:**
  - **Status Code:** 200 OK
  - **Body:**
    ```json
    [
      {
        "id": 1,
        "symbol": "RELIANCE.NS",
        "price": 2150.30,
        "change": 1.45,
        "timestamp": "2024-09-13T10:15:00Z"
      },
      ...
    ]
    ```
