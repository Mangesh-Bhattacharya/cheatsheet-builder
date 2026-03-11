# Cheatsheet Generator

A React-based application for creating and exporting cheatsheets as PDF documents using Markdown.

<img width="1918" height="989" alt="image" src="https://github.com/user-attachments/assets/80897d4b-31f7-4b8d-bca4-6a814b7e4c78" />


<img width="1880" height="1005" alt="image" src="https://github.com/user-attachments/assets/267cfd0b-462a-4f07-871f-774fd3846e32" />


## Features

- Real-time Markdown editing
- Live preview of formatted Markdown content
- PDF export via browser print functionality
- Customizable multi-column layout settings
- Mathematical expressions with KaTeX (lazy-loaded for performance)
- HTML support in Markdown 
- Diagrams with Mermaid
- Drag and drop images directly into the editor with automatic storage in IndexedDB or using GitHub for remote storage

- Automatic saving settings using localStorage
- Create, rename, delete, and switch between multiple files
- Push and pull files to/from GitHub repositories for backup and synchronization

## Tech Stack

- React
- Vite
- Monaco Editor for code editing
- KaTeX for mathematical expressions


## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```


