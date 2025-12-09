# HR Nexus Backend - Spring Boot API

This is the backend API for the HR Nexus Planner application.

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- MySQL 8.0 or higher

## Setup Instructions

### 1. Database Setup

1. Install MySQL if not already installed
2. Create the database:
   ```sql
   CREATE DATABASE hrnexus_db;
   ```
   Or run the schema.sql file:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

### 2. Configuration

Update `src/main/resources/application.properties` with your MySQL credentials:
```properties
spring.datasource.username=root
spring.datasource.password=your_password
```

### 3. Build and Run

```bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The API will be available at: `http://localhost:8080`

## API Endpoints

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get task by ID
- `GET /api/tasks/status/{status}` - Get tasks by status (UPCOMING, ONGOING, COMPLETED)
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update a task
- `PATCH /api/tasks/{id}/status` - Update task status only
- `DELETE /api/tasks/{id}` - Delete a task

### Request/Response Examples

#### Create Task (POST /api/tasks)
```json
{
  "title": "New Task",
  "description": "Task description",
  "status": "UPCOMING",
  "assignedTo": "John Doe"
}
```

#### Update Task Status (PATCH /api/tasks/{id}/status)
```json
{
  "status": "ONGOING"
}
```

## Project Structure

```
backend/
├── src/main/java/com/hrnexus/planner/
│   ├── PlannerApplication.java
│   ├── model/
│   │   └── Task.java
│   ├── repository/
│   │   └── TaskRepository.java
│   ├── service/
│   │   └── TaskService.java
│   ├── controller/
│   │   └── TaskController.java
│   └── config/
│       └── CorsConfig.java
├── src/main/resources/
│   └── application.properties
└── database/
    └── schema.sql
```

## Technologies Used

- Spring Boot 3.2.0
- Spring Data JPA
- MySQL Connector
- Lombok
- Maven




