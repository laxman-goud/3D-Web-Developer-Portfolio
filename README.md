# 🌐 3D Web Developer Portfolio

This is a **personal portfolio website** that showcases my skills and projects through **interactive 3D visuals**.  
Built with modern web technologies, it provides an **engaging and responsive user experience**.

---

## ✨ Features

- **Immersive 3D Experience**: Interactive 3D models of a desktop computer and a planet, powered by **Three.js** and **React Three Fiber**.  
- **Modern Technology Stack**: Dynamic UIs built with **React.js** and styled using **Tailwind CSS**.  
- **Fully Responsive Design**: Optimized for a seamless experience on all screen sizes, from desktops to mobile devices.  
- **Smooth Animations**: Uses **Framer Motion** to deliver fluid and visually appealing animations.  
- **Integrated Contact Form**: Functional contact form powered by **EmailJS** for direct communication.  

---

## 🛠️ Tech Stack

```markdown
### 🎨 Frontend
- **⚛️ React.js** – Component-based UI development
- **⚡ Vite** – Next-gen frontend tooling & fast dev server
- **🎭 Framer Motion** – Smooth animations & transitions
- **🎨 Tailwind CSS** – Utility-first styling framework
- **🎨 Three.js & React Three Fiber** – 3D graphics & WebGL integration
- **🛰️ React Router DOM** – Client-side routing
- **✉️ EmailJS** – Contact form integration

### 🔧 Tools & Deployment
- **🖥️ Git & GitHub** – Version control & collaboration
- **▲ Vercel** – Deployment & hosting
```

---

## ⚙️ Installation & Setup

To get a local copy of this project up and running, follow these steps:

### 🔹 Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- npm or yarn  

### 🔹 Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/laxman-goud/3D-Web-Developer-Portfolio.git
   cd 3D-Web-Developer-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS credentials**  
   Create a `.env` file in the project root and add your credentials:

   ```env
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

   You can get these values from your **EmailJS dashboard**.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at **http://localhost:5173**

---

## 📂 Project Structure

```
.
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   ├── desktop_pc/      # 3D model assets
│   ├── logo.png
│   └── planet/          # 3D model assets
├── src/
│   ├── App.jsx          # Main application component
│   ├── assets/          # Images, icons, etc.
│   ├── components/      # UI components
│   │   ├── canvas/      # 3D canvas components
│   │   └── ...
│   ├── constants/       # Static data
│   ├── hoc/             # Higher-Order Components
│   ├── index.css        # Global styles
│   ├── styles.js        # Style constants
│   └── utils/           # Utility functions
├── tailwind.config.js
└── vite.config.js
```

---

## 🖼️ 3D Model Credits

The 3D models used in this project are licensed under **CC-BY-4.0** and sourced from **Sketchfab**:

- **Gaming Desktop PC** by *Yolala1232*  
- **Stylized Planet** by *cmzw*

---

## 🤝 Contributing

Contributions are welcome! 🎉  

Feel free to **fork this project**, open an **issue**, or submit a **pull request** with your improvements.  
Please make sure your changes are clear, concise, and follow the contributing guidelines. [Contributing Guidelines](CONTRIBUTING.md)


## 📄 License

This project is open-source and available under the [MIT License](LICENSE.md).

## 👤 Author

**Laxman Goud**  
GitHub: [@laxman-goud](https://github.com/laxman-goud)

---
