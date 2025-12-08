-- HR Nexus Database Schema
-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS hrnexus_db;
USE hrnexus_db;

-- Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'UPCOMING',
    assigned_to VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_assigned_to (assigned_to)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample data (optional)
INSERT INTO tasks (title, description, status, assigned_to) VALUES
('Setup Project', 'Initialize the project structure', 'UPCOMING', 'John Doe'),
('Design Database', 'Create database schema and relationships', 'ONGOING', 'Jane Smith'),
('Implement API', 'Build REST endpoints for task management', 'UPCOMING', 'Mike Johnson');



