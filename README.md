# 📚 Boighor – Minimal Library Management System

**Live Link:** [https://boighor-three.vercel.app/](https://boighor-three.vercel.app/)  
Boighor is a **minimal library management system** built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**.  
It provides a clean, responsive, and fully client-side experience for managing books and borrow records — **without authentication, category filters, or payments**.

---

## 🚀 Project Overview

Boighor demonstrates the use of **modern frontend technologies** to create a simple yet effective library system that interacts with a **RESTful API**.  
The goal is to show **state management**, **API integration**, and **UI design best practices** using **RTK Query** and **TypeScript**.

Users can:
- View a list of books
- Add, edit, or delete books
- Borrow books with limited quantity validation
- View a simple borrow summary

---

## ✨ Features

### 🔓 Public Routes
All pages are accessible without login. The focus is on core book and borrowing functionality.

### 🛠️ Book Management
**Book List Table**
- Displays all books in a table format.  
- Columns: `Title`, `Author`, `Genre`, `ISBN`, `Copies`, `Availability`, and `Actions`.

**Actions**
- 📝 **Edit Book:** Opens a pre-filled form to update book details. Updates instantly in the UI.  
  - If `copies = 0`, the book is automatically marked as unavailable.  
- 🗑️ **Delete Book:** Opens a confirmation dialog before deleting the book.  
- 📖 **Borrow Book:** Opens a form to borrow the selected book.  

**Add New Book**
- Button opens a form with fields: `Title`, `Author`, `Genre`, `ISBN`, `Description`, `Copies`, and `Available (optional, defaults to true)`.  
- After creation, redirects to book list and updates UI immediately.

---

### 📘 Borrow Book
- Opened from the “Borrow” button in the book list.  
- Fields: `Quantity` (number), `Due Date` (date).  
- **Business Logic:**
  - Quantity cannot exceed available copies.
  - When copies reach `0`, the book is marked unavailable.
- On success:
  - Borrow data is stored via API.
  - Success message is shown.
  - Redirects to **Borrow Summary** page.

---

### 📊 Borrow Summary
- Displays a list of borrowed books with their **total borrowed quantity**.
- Data is retrieved from an **aggregation API**.
- Columns: `Book Title`, `ISBN`, `Total Quantity Borrowed`.

---

## 🧩 Page Structure

| Route | Description |
|--------|--------------|
| `/books` | Displays a list of all books with options to view, edit, delete, and borrow. |
| `/books/:id` | Detailed view of a single book’s information. |
| `/summary` | Displays an aggregated summary of borrowed books. |

---

## 🧠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React, TypeScript |
| **State Management & API** | Redux Toolkit Query (RTK Query) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Deployment** | Vercel |

---

## 💻 UI Components

- **Navbar:** Navigation links to all main routes.  
- **Book Table/List:** Displays books with interactive actions.  
- **Dialog & Forms:** Used for add, edit, and borrow operations.  
- **Footer:** Simple footer with site info or credits.

---

## 🎨 UI/UX Design

- **Minimalist & Clean:** Focus on simplicity and readability.  
- **Responsive Layout:** Fully adaptive to mobile, tablet, and desktop devices.  
- **User-Friendly:** Clear buttons, well-labeled forms, and consistent design.

---

## 🧪 Core Functionalities

- CRUD operations for books.
- Borrow system with validation.
- Real-time UI updates using RTK Query cache invalidation.
- Aggregated borrow summary using API integration.

---

## ⚙️ Setup Instructions

1. **Clone repository**
   ```bash
   git clone <your-repo-url>
   cd <repo-directory>
    ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
