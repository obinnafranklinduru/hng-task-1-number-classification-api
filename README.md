# Number Classification API

Provides mathematical properties and fun facts for integers.

## Endpoint

`GET /api/classify-number?number=<integer>`

## Response

- **200 OK**

  ```json
  {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an uninteresting number."
  }
  ```

- **400 Bad Request**

  ```json
  {
    "number": "invalid",
    "error": true
  }
  ```

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/obinnafranklinduru/hng-task-1-number-classification-api.git
   cd hng-task-1-number-classification-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

The server will start on port 3000 by default. You can change the port by setting the `PORT` environment variable.

### Testing the API

1. **Valid Request**
   `GET http://localhost:3000/api/classify-number?number=371`

2. **Invalid Request**
   `GET http://localhost:3000/api/classify-number?number=abc`
