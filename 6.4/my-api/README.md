# My API

This project is a simple API that handles routes related to photos. It includes a controller for handling photo-related routes, an error handler for handling errors, a router for setting up routes, a database file for connecting to the database, and a REST API class for making API calls.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and set up your database credentials
4. Run `npm start` to start the server

## Usage

The API has the following endpoints:

- `GET /photos`: Get all photos
- `GET /photos/:id`: Get a single photo by ID
- `POST /photos`: Create a new photo
- `PUT /photos/:id`: Update a photo by ID
- `DELETE /photos/:id`: Delete a photo by ID

## Error Handling

The application uses a custom error handler for handling errors. If an error occurs, the error handler will send a response with an error message and a status code.

## Database

The application connects to a database using the `connectToDatabase` function in `database.js`. To disconnect from the database, it uses the `disconnectFromDatabase` function.

## REST API

The `ApiRest` class in `apiRest.js` includes methods for making REST API calls. It includes `get`, `post`, `put`, and `delete` methods.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)