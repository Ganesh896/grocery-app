# Grocery Booking API

A simple Grocery Booking API built using Node.js and Express, designed to handle two main roles: Admin and User. The API allows Admins to manage grocery items and inventory, while Users can view and book grocery items.

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v18 or later)
-   npm
-   PostgreSQL

## Setup

1. Clone the repository:

```sh

git clone https://github.com/Ganesh896/grocery-app
cd server & npm i

```

2. Set up environment variables by looking .env.example file: Create a `.env` file in the root directory and add the following
3. Set up the database:
4. npm run migrate
5. npm run seed

```sh
    npm run start
```

## API Endpoints

### User Management

-   POST `/api/user/register`

    -   Description: Register a new user
    -   Body: User registration data

-   POST `/api/user/login`

    -   Description: Authenticate a user
    -   Body: Login credentials


### Grocery Items

-   POST `/api/grocery/add`

    -   Description: Add new item
    -   Authentication: Required
    -   Body: data

-   GET `/api/grocery/`

    -   Description: Get the items
    -   Authentication: Required

-   PUT `/api/grocery/update/:id`

    -   Description: Update an item
    -   Authentication: Required

-   DELETE `/api/grocery/delete/:id`

    -   Description: Delete an item by its ID
    -   Authentication: Required
