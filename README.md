# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern web application that helps you maintain and track your relationships with friends. It allows users to monitor interactions, set contact goals, and ensure meaningful connections stay active.

---

## 🚀 Live Demo

🔗 Live Site: *(Add your deployed link here)*
🔗 GitHub Repo: *(Add your repo link here)*

---

## 📌 Project Overview

KeenKeeper is designed to solve a simple but important problem — staying in touch with friends.
Users can track when they last contacted someone, set reminders, and log interactions like calls, texts, or video chats.

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🌐 React Router DOM
* 🎨 Tailwind CSS
* 📊 Recharts (for analytics)
* 🔔 React Toastify (notifications)
* 💾 LocalStorage (data persistence)

---

## ✨ Key Features

### 🔝 Navbar

* Responsive navigation bar
* Active route highlighting
* Icons for each menu (Home, Timeline, Stats)

---

### 👫 Friends Management

* Display friends from JSON data
* Each friend card shows:

  * Profile picture
  * Name
  * Days since contact
  * Tags
  * Status (color-coded)

---

### 👤 Friend Details Page

* Two-column responsive layout
* Detailed friend information
* Action buttons:

  * Snooze
  * Archive
  * Delete

---

### ⚡ Quick Check-In

* Call / Text / Video buttons
* Automatically logs interaction
* Saves data to LocalStorage
* Prevents duplicate entries
* Shows toast notification on click

---

### 📜 Timeline Page

* Displays all interaction history
* Shows:

  * Date
  * Icon (Call/Text/Video)
  * Title
* Filter system:

  * All / Call / Text / Video

---

### 📊 Friendship Analytics (Stats Page)

* Donut chart using Recharts
* Dynamic data from timeline
* Shows count of:

  * Calls
  * Texts
  * Videos

---

### 🔄 Data Persistence

* Uses LocalStorage
* Data remains after refresh
* Reset option available

---

### ⚠️ Error Handling

* Custom 404 page
* No crash on invalid routes

---

### 📱 Fully Responsive

* Works on:

  * Mobile
  * Tablet
  * Desktop

---

## 🎯 Challenge Features

* 🔍 Timeline filtering system
* 📊 Dynamic analytics chart
* 💾 Persistent data using LocalStorage

---

## 📂 Project Structure

```
src/
 ├── components/
 ├── pages/
 │   ├── homepage/
 │   ├── friendsDetails/
 │   ├── timeline/
 │   ├── dashboard/
 ├── Layout/
 ├── data/
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/keenkeeper.git

# Navigate to project folder
cd keenkeeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🚀 Deployment

You can deploy this project on:

* Vercel
* Netlify
* Cloudflare Pages

---

## 📌 Important Notes

* Page reload does NOT break routing ✔
* All features work without errors ✔
* Minimum 8 meaningful commits recommended ✔

---

## 👨‍💻 Author

* Name: *(Your Name)*
* GitHub: *(Your GitHub Profile)*

---

## ⭐ Final Status

✅ Fully functional
✅ Responsive design
✅ Meets all assignment requirements 
✅ Ready for submission

---

💡 *“Stay connected. Stay remembered.”*
