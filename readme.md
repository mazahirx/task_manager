# Notes Taking App

A simple and lightweight Notes Taking Application that allows users to create, edit, and manage notes efficiently. Each note is stored as a `.txt` file, making it easy to access, share, or back up outside the application.

---

## Features

* Create new notes
* Edit note content
* Edit or rename the title of a note
* Automatically saves notes as `.txt` files
* Lightweight and fast file-based storage
* Simple and user-friendly interface

---

## How It Works

1. When a user creates a note, the content is written and saved as a `.txt` file.
2. The note title is used as the file name.
3. If the title is edited, the corresponding `.txt` file is renamed.
4. Any changes made to the note content are automatically updated in the file.

---

## Project Structure

```
project-folder/
│
├── files/            # Stores all notes as .txt files
├── public/           # Static assets (CSS, JS, etc.)
├── views/            # UI templates (if using EJS or similar)
├── app.js            # Main application file
└── README.md
```

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/mazahirx/task_manager.git
```

2. Navigate to the project folder

```bash
cd notes-app
```

3. Install dependencies

```bash
npm install
```

4. Run the application

```bash
node app.js
```

5. Open in browser

```
http://localhost:3000
```

---

## Usage

* Create a new note from the homepage.
* Enter a title and content.
* Save the note — a `.txt` file will be created automatically.
* Edit the title to rename the file.
* Modify the content anytime; changes will be saved instantly.

---

## Technologies Used

* Node.js
* Express.js
* EJS (for templating)
* File System (`fs` module)
* HTML, CSS, JavaScript

---

## Future Improvements

* Delete notes
* Search notes
* Markdown support
* User authentication
* Cloud storage integration

---

## License

This project is open-source and available under the MIT License.

---

## Author

**Your Name**
Mazahir Mehdi | Full Stack Developer
