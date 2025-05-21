# ✅ To-Do List App (FastAPI + React)

## 🔗 Link to Frontend (Firebase)
- https://todo-fastapi-6424a.web.app/

## 🔗 Link to Backend (Render)
- https://todolist-fastapi-clcc.onrender.com/

---

## ⚙️ Setup Instructions


### 📦 Backend (FastAPI)

1. Navigate to the `backend/` folder.
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
3. Install dependencies:
   ```bash
   pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic
4. Generate a requirements.txt using:
   ```bash
   pip freeze > requirements.txt
5. Run the FastAPI server locally:
   ```bash
   uvicorn main:app --reload


### 💻 Frontend (React)
1. Navigate to the `frontend/` folder.
2. Create the project using Vite:
   ```bash
   npm create vite@latest todo-app --template react
4. Navigate into the project folder:
   ```bash
   cd todo-app
6. Install dependencies:
   ```bash
   npm install
7. Run the app locally:
   ```bash
   npm run dev

---

## 📡 Backend API Endpoints

1. **Fetch All Tasks**  
- **URL:** https://todolist-fastapi-clcc.onrender.com/todos/
- **Method**: `GET`
- **Request:** `https://todolist-fastapi-clcc.onrender.com/todos/`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Play a guitar",
      "completed": false
    }
    {
    "id": 2,
    "title": "Ride a bike",
    "completed": false
    }
  ]

2. **Fetch a Single Task by ID**  
- **URL:** https://todolist-fastapi-clcc.onrender.com/todos/{id}
- **Method**: `GET`
- **Request:** `https://todolist-fastapi-clcc.onrender.com/todos/1`
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Play a guitar",
    "completed": false
  }

3. Create a Task  
- **URL:** https://todolist-fastapi-clcc.onrender.com/todos/
- **Method**: `POST`
- **Request:**
  ```json
  {
    "title": "Ride a bike",
    "completed": false
  }
- **Response:**
  ```json
  {
    "id": 2,
    "title": "Ride a bike",
    "completed": false
  }

4. **Update a Task by ID**  
- **URL:** https://todolist-fastapi-clcc.onrender.com/todos/{id}
- **Method**: `PUT`
- **Request:**
  ```json
  {
    "title": "Do homework (updated)",
    "completed": true
  }
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Do homework (updated)",
    "completed": true
  }

5. **Delete a Task by ID**  
- **URL:** https://todolist-fastapi-clcc.onrender.com/todos/{id}
- **Method**: `DELETE`
- **Request:** `https://todolist-fastapi-clcc.onrender.com/todos/4`
- **Response:**
  ```json
  {
    "message": "Todo deleted"
  }

6. **Filter a Task by Status**
- **URL:** https://todolist-fastapi-clcc.onrender.com/todos/filter/{status}
- **Method**: `GET`
- **Request:** `https://todolist-fastapi-clcc.onrender.com/todos/filter/completed`
- **Response:**
    ```json
    [
      {
        "id": 1,
        "title": "Play a guitar",
        "completed": true
      }
      {
      "id": 2,
      "title": "Ride a bike",
      "completed": true
      }
    ]

