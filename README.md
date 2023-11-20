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

3. Run the application in development mode:

```bash
npm run dev
```

4. Access the API at http://localhost:3000.

## API Endpoints with cURL's

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
