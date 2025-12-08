# Complete Setup Guide - HR Nexus with Spring Boot Backend

## Prerequisites

1. **Java 17+** - Download from [Oracle](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://openjdk.org/)
2. **Maven 3.6+** - Download from [Apache Maven](https://maven.apache.org/download.cgi)
3. **MySQL 8.0+** - Download from [MySQL](https://dev.mysql.com/downloads/)
4. **Node.js 18+** - Download from [Node.js](https://nodejs.org/)

## Backend Setup

### 1. Database Setup

```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE hrnexus_db;

# Or run the SQL script
mysql -u root -p < backend/database/schema.sql
```

### 2. Configure Database Connection

Edit `backend/src/main/resources/application.properties`:

```properties
spring.datasource.username=root
spring.datasource.password=your_mysql_password
```

### 3. Build and Run Backend

```bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The backend API will be available at: `http://localhost:8080`

## Frontend Setup

### 1. Install Dependencies

```bash
# From project root
npm install
```

### 2. Run Frontend

```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## Testing the Integration

1. **Start Backend**: Make sure Spring Boot is running on port 8080
2. **Start Frontend**: Run `npm run dev`
3. **Open Browser**: Navigate to `http://localhost:5173`
4. **Go to Product/Planner**: Click "Product" in the navbar
5. **Test CRUD Operations**:
   - Create a task
   - Edit a task
   - Drag and drop to change status
   - Delete a task

## API Endpoints

All endpoints are available at `http://localhost:8080/api/tasks`:

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get task by ID
- `GET /api/tasks/status/{status}` - Get tasks by status
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `PATCH /api/tasks/{id}/status` - Update task status
- `DELETE /api/tasks/{id}` - Delete task

## Troubleshooting

### Backend Issues

1. **Port 8080 already in use**: Change port in `application.properties`:
   ```properties
   server.port=8081
   ```
   Then update `src/services/api.js` to use the new port.

2. **Database connection error**: 
   - Check MySQL is running
   - Verify username/password in `application.properties`
   - Ensure database `hrnexus_db` exists

3. **Maven build fails**: 
   - Check Java version: `java -version` (should be 17+)
   - Check Maven: `mvn -version`

### Frontend Issues

1. **Cannot connect to backend**:
   - Ensure backend is running on port 8080
   - Check CORS configuration in backend
   - Verify API URL in `src/services/api.js`

2. **Axios not found**:
   ```bash
   npm install axios
   ```

## Project Structure

```
project/
├── backend/                    # Spring Boot Backend
│   ├── src/main/java/
│   │   └── com/hrnexus/planner/
│   │       ├── PlannerApplication.java
│   │       ├── model/Task.java
│   │       ├── repository/TaskRepository.java
│   │       ├── service/TaskService.java
│   │       ├── controller/TaskController.java
│   │       └── config/CorsConfig.java
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── database/
│   │   └── schema.sql
│   └── pom.xml
│
└── src/                        # React Frontend
    ├── pages/
    │   └── Planner.jsx
    └── services/
        └── api.js
```

## Next Steps

- Add user authentication
- Add task priorities and due dates
- Add task comments
- Add file attachments
- Add real-time updates with WebSockets



