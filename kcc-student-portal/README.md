# KCC Student Portal - Static Version

A fully static, GitHub Pages-ready version of the KCC Student Portal. No backend required - deploy directly to GitHub Pages!

## ✨ Features

- ✅ **100% Static** - Pure HTML, CSS, and JavaScript
- ✅ **No Backend** - No server, database, or dependencies needed
- ✅ **Dark Mode** - Automatic light/dark theme switching with localStorage persistence
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Modern UI** - Built with Tailwind CSS and DaisyUI
- ✅ **GitHub Pages Ready** - Deploy in seconds

### Pages Included

- **Dashboard** - Overview of notices, assignments, events, and timetable
- **Notices** - College announcements and updates
- **Assignments** - Track coursework and due dates
- **Timetable** - Class schedule with filtering by day
- **Events** - Upcoming college events with categories
- **Documents** - Download course materials and resources

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Fork or clone this repository**
   ```bash
   git clone <repo-url>
   cd static-site
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

4. **Your site is live!** 🎉
   - Your portal will be available at: `https://<username>.github.io/<repo-name>/`

### Option 2: Deploy Locally

Simply open `index.html` in your browser. No server required!

```bash
# macOS/Linux
open index.html

# Windows
start index.html
```

### Option 3: Use Python's Built-in Server

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## 📝 How to Update Content

All content is embedded directly in HTML files. To update:

1. **Dashboard** - Edit `index.html`
2. **Notices** - Edit `notices.html`
3. **Assignments** - Edit `assignments.html`
4. **Timetable** - Edit `timetable.html`
5. **Events** - Edit `events.html`
6. **Documents** - Edit `documents.html`

### Example: Adding a New Notice

Open `notices.html` and add a new card in the grid:

```html
<div class="card bg-base-100/60 shadow-lg hover:shadow-xl transition-shadow">
    <div class="card-body">
        <div class="flex items-start justify-between mb-3">
            <span class="badge badge-primary text-xs">📢 Notice</span>
            <span class="text-xs opacity-60">DD-MM-YYYY</span>
        </div>
        <h2 class="card-title text-lg leading-tight">Your Notice Title</h2>
        <p class="text-sm leading-relaxed my-3 opacity-90">Your notice content here...</p>
        <div class="card-actions justify-end mt-4">
            <button class="btn btn-primary btn-sm">Read More</button>
        </div>
    </div>
</div>
```

## 🎨 Customization

### Change Theme Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
    --primary-h: 238;    /* Hue (0-360) */
    --primary-s: 90%;    /* Saturation */
    --primary-l: 62%;    /* Lightness */
    
    --secondary-h: 145;
    --secondary-s: 70%;
    --secondary-l: 50%;
}
```

### Add Your Logo/Branding

1. Add logo file to the project
2. Replace "KCC Portal" text in sidebar with `<img src="logo.png" alt="KCC">`
3. Update title in base template

### Update Meta Information

Edit HTML `<head>` sections:
- `<title>` - Page title
- `<meta name="description">` - SEO description
- Add favicon with `<link rel="icon" href="favicon.ico">`

## 📁 Project Structure

```
static-site/
├── index.html              # Dashboard (homepage)
├── notices.html            # Notices page
├── assignments.html        # Assignments page
├── timetable.html         # Timetable page
├── events.html            # Events page
├── documents.html         # Documents page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # Navigation and theme toggle
└── README.md              # This file
```

## 🔧 Features Breakdown

### Theme Switching
- Automatically detects system preference (light/dark)
- User can toggle with 🌙/☀️ button
- Preference stored in localStorage

### Navigation
- Sidebar with active link highlighting
- Mobile-responsive menu
- All pages link to each other

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints (sm, md, lg)
- Touch-friendly buttons and spacing

## 📱 Browser Support

- Chrome/Edge (90+)
- Firefox (88+)
- Safari (14+)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Zero external dependencies** (CDN only for Tailwind & DaisyUI)
- **Fast load times** - ~50KB total size
- **Instant navigation** - No loading delays
- **SEO friendly** - Static HTML is crawlable

## 📊 Future Enhancements

Potential additions (keep static):
- [ ] Search functionality (JavaScript-based)
- [ ] Local storage for saved assignments
- [ ] Print-friendly page layouts
- [ ] More page transitions
- [ ] Offline capability (Service Worker)

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Feel free to fork, customize, and submit improvements!

### Tips:
- Keep all data in HTML (no APIs)
- Use only client-side JavaScript
- Test on mobile devices
- Keep CSS organized in `styles.css`

---

**Made with ❤️ for KCC Students**

Questions? Issues? Need help? Check the code or create an issue in the repository!
