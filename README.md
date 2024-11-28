# Book Review Application

This repository contains a full-stack application developed as part of a coding task for a software engineering internship. The application allows users to log in and post reviews for available books.

## Features

- User Management: Users can log into the system using Firebase Authentication.
- Review Viewing: Anyone, including users who have not created an account, can view the reviews for books.
- Review Posting: Authenticated users with an account can post reviews for books.
- Backend Management: Backend functionality for handling books and authors (not integrated into the frontend due to time constraints).
- Technologies Used:
  - Frontend: Next.js
  - Backend: Express.js
  - Authentication: Firebase Authentication
  - Database: PostgreSQL

## Prerequisites

To run this application, ensure you have the following:
- Node.js installed
- PostgreSQL database setup
- Firebase project configured for authentication

## Environment Setup

The application requires .env files for both the frontend and backend. Ensure you create these files with the necessary configurations.

## Run Application

Both front-end and back-end can be executed using following commands
1. npm install
2. configure environments
3. npm run dev
