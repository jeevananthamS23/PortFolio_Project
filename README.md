# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open https://port-folio-project-ten.vercel.app/  to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)







# Student Portfolio Website - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [Component Documentation](#component-documentation)
7. [Styling Guide](#styling-guide)
8. [Customization Guide](#customization-guide)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This is a modern, responsive student portfolio website built with React and plain CSS. It showcases your skills, projects, certifications, and provides a way for potential employers or clients to contact you.

### Key Highlights:
- **Single Page Application (SPA)** with smooth scrolling navigation
- **Dark/Light mode** toggle for better user experience
- **Fully responsive** design that works on all devices
- **No CSS frameworks** - Pure CSS with modern techniques
- **Component-based architecture** for easy maintenance
- **Production-ready** code with best practices

---

## ✨ Features

### 1. **Header Navigation**
- Sticky header that stays at the top while scrolling
- Smooth scroll to sections
- Active section highlighting
- Mobile hamburger menu
- Theme toggle button

### 2. **Hero Section**
- Eye-catching introduction with gradient text
- Profile image with border effects
- Floating statistic cards with animations
- Call-to-action buttons

### 3. **About Section**
- Personal introduction
- Experience statistics
- Education card
- Grid layout for stats

### 4. **Skills Section**
- Visual skill representation with progress bars
- Icon-based skill cards
- Percentage indicators
- Hover effects

### 5. **Certifications Section**
- Certification cards with details
- Issuing organization
- Date of completion
- Hover animations

### 6. **Projects Section**
- Project cards with images
- Overlay effect on hover
- GitHub and live demo links
- Technology tags
- Responsive grid layout

### 7. **Contact Section**
- Working contact form
- Social media links
- Email, LinkedIn, GitHub integration
- Form validation

### 8. **Footer**
- Copyright information
- Quick navigation links
- Social media icons
- Multi-column layout

### 9. **Additional Features**
- Dark/Light mode with smooth transitions
- CSS custom properties (variables) for theming
- Smooth animations and transitions
- Accessibility considerations
- Mobile-first responsive design

---

## 🛠 Technology Stack

### Core Technologies:
- **React 18+** - JavaScript library for building user interfaces
- **CSS3** - Styling with modern features (Grid, Flexbox, Custom Properties)
- **Lucide React** - Icon library (only external dependency)

### Development Tools (Recommended):
- **Node.js** (v14 or higher)
- **npm** or **yarn** - Package managers
- **Create React App** or **Vite** - React project setup
- **VS Code** - Code editor (recommended)

### Browser Support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation header component
│   │   ├── Home.js            # Hero section component
│   │   ├── About.js           # About section component
│   │   ├── Skills.js          # Skills section component
│   │   ├── Certifications.js  # Certifications component
│   │   ├── Projects.js        # Projects showcase component
│   │   ├── Contact.js         # Contact form component
│   │   └── Footer.js          # Footer component
│   ├── styles/
│   │   ├── global.css         # Global styles & CSS variables
│   │   ├── Header.css         # Header styles
│   │   ├── Home.css           # Hero section styles
│   │   ├── About.css          # About section styles
│   │   ├── Skills.css         # Skills section styles
│   │   ├── Certifications.css # Certifications styles
│   │   ├── Projects.css       # Projects section styles
│   │   ├── Contact.css        # Contact section styles
│   │   ├── Footer.css         # Footer styles
│   │   └── responsive.css     # Media queries
│   ├── App.js                 # Main application component
│   ├── index.js               # Application entry point
│   └── index.css              # Root styles
├── package.json               # Project dependencies
├── README.md                  # Project readme
└── .gitignore                # Git ignore file
```

### Recommended Structure (For Separate Files):

If you want to split the single-file React app into multiple files:

1. **Create separate component files** in `src/components/`
2. **Create separate CSS files** in `src/styles/`
3. **Import components** in `App.js`
4. **Import CSS** in respective component files

---

## 🚀 Installation & Setup

### Method 1: Using Create React App

```bash
# Step 1: Create a new React app
npx create-react-app student-portfolio
cd student-portfolio

# Step 2: Install lucide-react (icon library)
npm install lucide-react

# Step 3: Replace src/App.js with the portfolio code
# Copy the entire React code into src/App.js

# Step 4: Clean up default files (optional)
# Remove: App.css, App.test.js, logo.svg

# Step 5: Start the development server
npm start
```

### Method 2: Using Vite (Faster Alternative)

```bash
# Step 1: Create a new Vite React app
npm create vite@latest student-portfolio -- --template react
cd student-portfolio

# Step 2: Install dependencies
npm install
npm install lucide-react

# Step 3: Replace src/App.jsx with the portfolio code

# Step 4: Start the development server
npm run dev
```

### Quick Setup Steps:

1. **Copy the Code**: Copy the entire React component code
2. **Install Dependencies**: Run `npm install lucide-react`
3. **Run Development Server**: Execute `npm start` or `npm run dev`
4. **View in Browser**: Open `http://localhost:3000` or `http://localhost:5173`

---

## 🧩 Component Documentation

### 1. App Component

**Purpose**: Main application wrapper that manages global state

**State Variables**:
- `darkMode` (boolean): Tracks theme state
- `menuOpen` (boolean): Controls mobile menu visibility
- `activeSection` (string): Tracks current active section

**Key Functions**:
- `toggleTheme()`: Switches between dark and light mode
- `toggleMenu()`: Opens/closes mobile navigation menu

**Usage**:
```jsx
<App />
```

---

### 2. Header Component

**Purpose**: Navigation header with menu and theme toggle

**Props**:
- `darkMode`: Current theme state
- `toggleTheme`: Function to toggle theme
- `menuOpen`: Mobile menu state
- `toggleMenu`: Function to toggle mobile menu
- `activeSection`: Currently active section
- `setActiveSection`: Function to update active section

**Features**:
- Smooth scrolling to sections
- Active section highlighting
- Responsive hamburger menu
- Theme toggle button

**Code Structure**:
```jsx
<Header 
  darkMode={darkMode}
  toggleTheme={toggleTheme}
  menuOpen={menuOpen}
  toggleMenu={toggleMenu}
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>
```

---

### 3. Home Component

**Purpose**: Hero section with introduction and CTA buttons

**Props**:
- `setActiveSection`: Function to update active section when buttons clicked

**Elements**:
- Profile image
- Name and title
- Introduction text
- Call-to-action buttons
- Floating statistic cards

**Customization Points**:
```jsx
// Change name
<h1>Hi, I'm <span>Your Name</span></h1>

// Change title
<h2>Your Professional Title</h2>

// Change description
<p>Your personal introduction...</p>

// Change profile image
<img src="your-image-url" alt="Profile" />
```

---

### 4. About Component

**Purpose**: Personal information and background

**Elements**:
- Biography paragraphs
- Statistics (years, projects, certifications)
- Education/experience card

**Customization**:
```jsx
// Edit biography
<p>Your story...</p>

// Update statistics
<div className="stat">
  <h3>Your Number</h3>
  <p>Your Metric</p>
</div>

// Modify education
<h3>Your Degree</h3>
<p>Your Major</p>
<span>Your University</span>
<span className="year">Year Range</span>
```

---

### 5. Skills Component

**Purpose**: Display technical skills with visual progress bars

**Data Structure**:
```jsx
const skills = [
  {
    name: 'Skill Name',
    level: 85,        // 0-100
    icon: '🎨'        // Emoji or icon
  }
];
```

**Features**:
- Animated progress bars
- Percentage display
- Icon representation
- Hover effects

**Adding New Skills**:
```jsx
// Add to skills array
{ name: 'New Skill', level: 75, icon: '🚀' }
```

---

### 6. Certifications Component

**Purpose**: Showcase educational certificates and achievements

**Data Structure**:
```jsx
const certifications = [
  {
    title: 'Certificate Title',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    icon: '🎓'
  }
];
```

**Adding Certifications**:
```jsx
// Add to certifications array
{
  title: 'Your Certificate',
  issuer: 'Platform/University',
  date: 'Completion Date',
  icon: '📜'
}
```

---

### 7. Projects Component

**Purpose**: Display portfolio projects with images and links

**Data Structure**:
```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: 'image-url',
    tags: ['Tech1', 'Tech2'],
    github: 'github-url',
    demo: 'live-demo-url'
  }
];
```

**Features**:
- Image hover effects
- Overlay with action buttons
- Technology tags
- GitHub and live demo links

**Adding Projects**:
```jsx
{
  title: 'My Awesome Project',
  description: 'What it does...',
  image: 'https://your-image-url.com',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/username/repo',
  demo: 'https://live-demo-url.com'
}
```

---

### 8. Contact Component

**Purpose**: Contact form and social media links

**State Management**:
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
```

**Form Handling**:
```jsx
// Handle input changes
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here
};
```

**Integration Points**:
- Email service (EmailJS, SendGrid)
- Backend API
- Form validation library

**Updating Contact Info**:
```jsx
// Email link
<a href="mailto:your-email@example.com">

// LinkedIn
<a href="https://linkedin.com/in/your-profile">

// GitHub
<a href="https://github.com/your-username">
```

---

### 9. Footer Component

**Purpose**: Footer with copyright and quick links

**Features**:
- Multi-column layout
- Quick navigation links
- Social media icons
- Copyright notice

**Customization**:
```jsx
// Update copyright
<p>&copy; 2025 Your Name. All rights reserved.</p>

// Update social links
<a href="your-social-url">
```

---

## 🎨 Styling Guide

### CSS Architecture

The project uses **CSS Custom Properties (Variables)** for theming:

```css
:root {
  /* Primary Colors */
  --primary: #6366f1;           /* Main brand color */
  --primary-dark: #4f46e5;      /* Darker shade */
  --secondary: #ec4899;         /* Accent color */
  --success: #10b981;           /* Success color */
  
  /* Light Mode Colors */
  --bg-light: #ffffff;
  --bg-light-secondary: #f9fafb;
  --text-light: #1f2937;
  --text-light-secondary: #6b7280;
  --border-light: #e5e7eb;
  
  /* Dark Mode Colors */
  --bg-dark: #0f172a;
  --bg-dark-secondary: #1e293b;
  --text-dark: #f1f5f9;
  --text-dark-secondary: #cbd5e1;
  --border-dark: #334155;
}
```

### Theming System

**Light Mode**:
```css
.light-mode {
  background-color: var(--bg-light);
  color: var(--text-light);
}
```

**Dark Mode**:
```css
.dark-mode {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}
```

### Key CSS Techniques Used

1. **CSS Grid**: Layout system for responsive grids
```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

2. **Flexbox**: Alignment and spacing
```css
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

3. **CSS Animations**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

4. **Transitions**: Smooth state changes
```css
.btn {
  transition: all 0.3s;
}
```

5. **Backdrop Filter**: Glassmorphism effect
```css
.header {
  backdrop-filter: blur(10px);
}
```

### Responsive Breakpoints

```css
/* Tablet and below */
@media (max-width: 968px) {
  /* Styles for tablets */
}

/* Mobile devices */
@media (max-width: 640px) {
  /* Styles for mobile */
}
```

---

## 🔧 Customization Guide

### 1. Changing Colors

**Method 1: Update CSS Variables**
```css
:root {
  --primary: #your-color;      /* Change brand color */
  --secondary: #your-accent;   /* Change accent */
}
```

**Method 2: Create Color Themes**
```css
/* Blue Theme */
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
}

/* Green Theme */
:root {
  --primary: #10b981;
  --secondary: #14b8a6;
}

/* Red Theme */
:root {
  --primary: #ef4444;
  --secondary: #f97316;
}
```

### 2. Changing Fonts

**Add Google Fonts**:
```html
<!-- In public/index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Update CSS**:
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 3. Modifying Layout

**Grid Columns**:
```css
/* Change from 3 columns to 2 */
.skills-grid {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
```

**Section Spacing**:
```css
section {
  padding: 6rem 2rem;  /* Increase/decrease padding */
}
```

### 4. Adding New Sections

**Step 1: Create Component**
```jsx
function NewSection() {
  return (
    <section id="new-section" className="new-section">
      <div className="container">
        <h2 className="section-title">New Section</h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

**Step 2: Add to App Component**
```jsx
<NewSection />
```

**Step 3: Add to Navigation**
```jsx
const navLinks = ['home', 'about', 'skills', 'new-section', ...];
```

**Step 4: Add CSS**
```css
.new-section {
  padding: 5rem 2rem;
}
```

### 5. Customizing Animations

**Change Animation Speed**:
```css
.floating-card {
  animation: float 5s ease-in-out infinite;  /* Changed from 3s */
}
```

**Modify Transition Duration**:
```css
.btn {
  transition: all 0.5s;  /* Changed from 0.3s */
}
```

**Add Custom Animations**:
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 1s ease-out;
}
```

### 6. Image Customization

**Profile Image**:
```jsx
<img 
  src="/path/to/your/image.jpg"
  alt="Your Name"
/>
```

**Project Images**:
- Use your actual project screenshots
- Recommended size: 600x400px
- Format: JPG or PNG
- Optimize for web (use tools like TinyPNG)

**Image Sources**:
- Your own photos
- Unsplash (free stock photos)
- Pexels (free stock photos)
- Screenshot your projects

### 7. Content Updates

**Personal Information**:
```jsx
// In Home component
<h1>Hi, I'm <span>Your Name</span></h1>
<h2>Your Title</h2>
<p>Your introduction...</p>
```

**Skills**:
```jsx
const skills = [
  { name: 'Your Skill', level: 90, icon: '💻' },
  // Add more...
];
```

**Projects**:
```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Description...',
    image: 'your-image-url',
    tags: ['Tech1', 'Tech2'],
    github: 'your-github-url',
    demo: 'your-demo-url'
  }
];
```

---

## 🚢 Deployment

### Option 1: Vercel (Recommended)

**Steps**:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live

**CLI Method**:
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Netlify

**Steps**:
1. Build your app: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder
4. Your site is live!

**CLI Method**:
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

### Option 3: GitHub Pages

**Steps**:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

### Option 4: Custom Server

**Build for production**:
```bash
npm run build
```

**Upload** the `build` folder to your server via FTP/SFTP.

**Server Configuration** (for React Router):
- Configure server to serve `index.html` for all routes
- Example Nginx config:
```nginx
location / {
  try_files $uri /index.html;
}
```

---

## 🔍 Troubleshooting

### Common Issues & Solutions

#### 1. Icons Not Showing

**Problem**: Lucide icons not displaying

**Solution**:
```bash
npm install lucide-react
```

Ensure import is correct:
```jsx
import { Menu, X, Sun, Moon } from 'lucide-react';
```

#### 2. Styles Not Applying

**Problem**: CSS not working

**Solution**:
- Check if styles are injected in the component
- Ensure `styleSheet.textContent = styles;` exists
- Clear browser cache (Ctrl+Shift+R)

#### 3. Smooth Scrolling Not Working

**Problem**: Navigation doesn't scroll smoothly

**Solution**:
Add to CSS:
```css
html {
  scroll-behavior: smooth;
}
```

#### 4. Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open

**Solution**:
- Check `menuOpen` state is updating
- Verify `toggleMenu` function is called
- Check CSS class `.nav-open` is applied

#### 5. Dark Mode Not Persisting

**Problem**: Theme resets on page reload

**Solution**: Add localStorage persistence:
```jsx
// Load theme on mount
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkMode(true);
  }
}, []);

// Save theme on change
useEffect(() => {
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}, [darkMode]);
```

#### 6. Images Not Loading

**Problem**: Images showing broken links

**Solution**:
- Check image URLs are correct
- Use absolute URLs for external images
- For local images, place in `public` folder:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

#### 7. Build Errors

**Problem**: `npm run build` fails

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 8. Performance Issues

**Problem**: Site is slow

**Solutions**:
- Optimize images (compress, use WebP)
- Lazy load images:
```jsx
<img loading="lazy" src="..." alt="..." />
```
- Remove unused code
- Minimize animations

---

