# Pokedex - Pokémon Data API

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokedex.git
cd pokedex
```

2. Install dependencies:

```bash
npm install
```

3. Run Development Server with ts-node-dev

The development server is set up to use `ts-node-dev` for automatic code reloading. Run the following command to start the development server:

```bash
npm run dev
```

This will watch for changes in your TypeScript files and automatically restart the server.

4. Build the Project

To build the project for production, use the following command:

```bash
npm run build
```

This command will clean the `dist` folder and compile TypeScript files into JavaScript.

5. Start the Production Server

After building the project, start the production server using:

```bash
npm start
```

6. Run Tests with ts-mocha for Development

For development purposes, tests are executed using `ts-mocha`. This allows for running tests directly from TypeScript files, providing a smoother development experience.

```bash
npm run dev:test
```

### 6. Run Tests with Mocha for the Dist Folder

For testing the compiled code in the `dist` folder, use the following command:

```bash
npm test
```

This command runs tests using `mocha` on the JavaScript files in the `dist` directory.

7. Access the API at http://localhost:3000.

## API Endpoints

### 1. **Login**

- **Endpoint:** `/auth/login`
- **Method:** POST
- **Description:** Authenticate and obtain a JWT token for accessing secured endpoints.

#### Curl Request:

```bash
curl -X POST \
  http://localhost:3000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"randominfo": "veryrandom"}'
```

### 2. **Find Pokemons**

- **Endpoint:** `/pokemons`
- **Method:** GET
- **Description:** Retrieve a list of all Pokémon.

#### Curl Request:

```bash
curl -X GET \
  http://localhost:3000/pokemons \
  -H 'Authorization: Bearer {{PokedexToken}}'
```

### 3. **Find Pokemon by ID**

- **Endpoint:** `/pokemons/:id`
- **Method:** GET
- **Description:** Retrieve detailed information about a Pokémon by its ID.

#### Curl Request:

```bash
curl -X GET \
  http://localhost:3000/pokemons/1 \
  -H 'Authorization: Bearer {{PokedexToken}}'
```

### 4. **Create Pokemon**

- **Endpoint:** `/pokemons`
- **Method:** POST
- **Description:** Create a new Pokémon.

#### Curl Request:

```bash
curl -X POST \
  http://localhost:3000/pokemons \
  -H 'Authorization: Bearer {{PokedexToken}}' \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "https://pokeapi.co/api/v2/pokemon/6",
    "name": "Charizard",
    "details": {
      "height": 200
    }
  }'
```

### 5. **Update Pokemon**

- **Endpoint:** `/pokemons/:id`
- **Method:** PUT
- **Description:** Update existing Pokémon details.

#### Curl Request:

```bash
curl -X PUT \
  http://localhost:3000/pokemons/2 \
  -H 'Authorization: Bearer {{PokedexToken}}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Ivysaur the Second"
  }'
```

### 6. **Delete Pokemon**

- **Endpoint:** `/pokemons/:id`
- **Method:** DELETE
- **Description:** Delete an existing Pokémon.

#### Curl Request:

```bash
curl -X DELETE \
  http://localhost:3000/pokemons/2 \
  -H 'Authorization: Bearer {{PokedexToken}}'
```

**Note:** Replace `{{PokedexToken}}` with the actual JWT token obtained from the login response. Ensure proper authentication for secured endpoints.

## Authentication

Secure endpoints with JWT-based authentication. Include the JWT token in the request headers for secured routes.

## Notes

- Make sure to initialize the project, install dependencies, and run the server before using the endpoints.
- A Postman collection is provided for ease of use that can be imported directly into the Postman client.
