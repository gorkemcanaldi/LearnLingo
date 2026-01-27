# LearnLingo 🎓

This project was developed using **React + Vite** as a language learning platform.  
Users can browse teachers, apply filters, add them to favorites, and book trial lessons.

---

## 🚀 Features

### 🛣️ Routes
- `/` → **Home**
- `/teachers` → **Teachers**
- `/favorites` → **Favorites** (visible after login)
- `*` → **NoPage (404)**

### 🖼️ Header
- On the left: **LearnLingo logo** and "LearnLingo" → `/`
- In the center: **Home** → `/`
- Next to it: **Teachers** → `/teachers`
- On the right: **Login** and **Register** buttons (open modals)
- After login/register → **Logout** button
- Successful login/register → **Toast notification**
- After login → **Favorites** route appears

---

## 🏠 Home Page
- **Get Started** button → redirects to `/teachers`.

---

## 👩‍🏫 Teachers Page
- Teachers are fetched from **Firebase**.
- Displayed in a **4-card grid**.
- **Filters (optional):**
  - Language
  - Level
  - Price
- If no filter is applied → default 4 teachers are shown.
- **Load More** button:
  - If filters applied → +4 matching teachers
  - If no filters → +4 default teachers
- Card content:
  - Teacher info (language, level, price, rating, description)
  - **Read More** → shows user reviews and ratings
  - **Book Trial Lesson** → modal opens after login
    - Radio input: asks why the user wants to learn a language
    - Form: Full name, Email, Phone (React Hook Form + Yup)
    - **Toast:** "Trial lesson request sent successfully!"
  - Top-right **Favorite icon**:
    - Turns yellow when clicked → **Toast:** "Added to favorites"
    - Favorites are visible on `/favorites` after login
    - Removing → **Toast:** "Removed from favorites"
    - Login required for adding/removing favorites

---

## ⭐ Favorites Page
- Displays the user’s saved favorite teachers.
- Teachers can be removed from favorites.
- **Loading state:** `react-spinners` show until data is fetched.

---

## ⚙️ State Management
- Built with **Redux Toolkit**.
- Favorites and filters managed via **Redux**.
- **LocalStorage** used to persist favorites.

---

## 🛠️ Technologies
- **React + Vite**
- **Firebase**
- **Redux Toolkit**
- **React Hook Form + Yup**
- **React Toastify**
- **React Spinners**
