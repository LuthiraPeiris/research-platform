# CollabSolve

**Collaborative problem solving made simple.**

CollabSolve is a full-stack collaborative problem-solving platform for students, researchers, developers, engineers, and technical teams. Users can post real academic or technical challenges, discuss ideas, submit solutions, verify the most useful answer, and preserve solved knowledge for future users.

```text
Problem → Discussion → Solution → Verification → Knowledge Archive
```

## Key Features

- Secure user registration and login with JWT authentication
- Role-based access for users and administrators
- Problem posting with field, difficulty level, post type, tags, and attachments
- Similar-problem detection while creating a post
- Public landing page with active challenges and recently solved problems
- Search and filtering by title, field, status, difficulty, and post type
- Comments, nested replies, likes, and discussion history
- Solution submission with images and document attachments
- Owner/admin solution verification
- Knowledge Archive for verified solved problems
- Saved Problems, My Problems, My Solutions, and Received Solutions
- Notifications and user-controlled notification preferences
- Reputation points, badges, user levels, and leaderboard rankings
- User profiles with skills, bio, activity, achievements, and profile picture
- Light, dark, and system themes
- Professional reusable alerts and responsive dashboard navigation
- Admin dashboard for platform monitoring and content management

## File Storage

Problem and solution attachments are stored securely in **Amazon S3**.

- Files are uploaded through the Node.js backend
- Multer uses memory storage before sending files to S3
- S3 object keys are stored in MySQL
- Private files are accessed through temporary signed URLs
- Files are removed from S3 when their attachment or solution is deleted
- Supported files include JPG, PNG, WEBP, PDF, DOC, DOCX, TXT, and ZIP
- Maximum of 5 files per request
- Maximum file size of 10 MB per file

## Main Workflow

1. A user posts an academic or technical problem.
2. The platform checks for similar existing problems.
3. Other users discuss the problem and submit solutions.
4. The problem owner or an admin verifies the best solution.
5. The verified solution is preserved in the Knowledge Archive.
6. Contributors receive reputation and recognition.

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- React Router
- Tailwind CSS
- Lucide React

### Backend

- Node.js
- Express.js
- MySQL2
- JWT
- bcrypt
- Multer
- AWS SDK for JavaScript v3
- Amazon S3
- dotenv
- CORS

### Database

- MySQL

### Development Tools

- Git and GitHub
- npm
- nodemon
- MySQL Workbench
- Postman

## Main Modules

- Authentication and authorization
- User profiles and settings
- Problems and attachments
- Comments and nested replies
- Solutions and verification
- Saved problems
- Received solutions
- Knowledge Archive
- Notifications
- Reputation, badges, and leaderboard
- Admin management
- Theme and UI preferences

## Project Structure

```text
CollabSolve/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── layouts/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=collabsolve

JWT_SECRET=your_jwt_secret

AWS_REGION=ap-south-1
AWS_S3_BUCKET_NAME=your_bucket_name
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
```

Do not commit real credentials to GitHub.

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd CollabSolve
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Configure the database and environment variables

Create the MySQL database, import the required schema, and add the backend `.env` file.

### 5. Run the backend

```bash
cd backend
npm run dev
```

### 6. Run the frontend

```bash
cd frontend
npm run dev
```

## What Makes CollabSolve Different

CollabSolve is not only a question-and-answer platform. It combines structured discussion, solution verification, contributor recognition, reusable knowledge, and technical file sharing in one workflow.

```text
Problems do not just get answered.
They become verified knowledge.
```

## Project Status

The main platform workflow is implemented, including authentication, problems, discussions, solutions, verification, knowledge archiving, notifications, reputation, profiles, themes, admin functionality, and Amazon S3 attachment storage.

## Future Improvements

- Real-time messaging and notifications
- Advanced AI-assisted problem matching
- Full-text knowledge search
- Email notifications
- Cloud deployment and CI/CD
- Mobile application
- Analytics and reporting
