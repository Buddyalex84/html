# Ansh Verma - Portfolio Website

## 🎨 Design
- **Style**: Professional Monochrome (Black, White, Subtle Grays)
- **Features**: Modern animations, smooth transitions, responsive design
- **Sections**: Hero, About, Experience, Projects, Skills, Education, Certifications, Contact

## 📝 How to Update Content

### 1. Personal Information & Profile Photo
Edit `/app/frontend/src/data/portfolioData.js`:
- Update `personalInfo` object
- Add your profile photo by setting `profileImage: "your-image-url"`

### 2. Add/Edit Projects
In the same file, update the `projects` array:
```javascript
{
  id: 3,
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  liveUrl: "https://your-project.com" // optional
}
```

### 3. Update Skills
Modify the `skills` array to add/remove skills by category.

### 4. Add Experience
Update the `experience` array with new roles.

### 5. Add Certifications
Modify the `certifications` array to add new achievements.

### 6. Update Education
Edit the `education` array to update your academic qualifications.

### 7. Add Resume Download
Set `resumeUrl` in `personalInfo` to your PDF resume URL.

## 🎯 Key Features

### Responsive Design
- ✅ Desktop optimized (1920px+)
- ✅ Tablet friendly (768px+)
- ✅ Mobile compatible (375px+)

### Interactive Elements
- Smooth scroll navigation
- Hover effects on cards
- Animated section reveals
- Mobile hamburger menu
- Social media links

### Animations
- Fade-in on scroll
- Hover scale effects
- Smooth transitions
- Parallax elements

## 🚀 Future Enhancements (Easy to Add)

1. **Profile Photo**: Just add the URL in `portfolioData.js`
2. **Blog Section**: Add a new component following the same pattern
3. **Resume Download**: Add PDF URL to `personalInfo.resumeUrl`
4. **Contact Form**: Can be integrated with backend API
5. **Dark/Light Mode Toggle**: Easy to implement with theme switching

## 📂 File Structure

```
/app/frontend/src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section with profile
│   ├── About.jsx           # About me section
│   ├── Experience.jsx      # Work experience
│   ├── Projects.jsx        # Project showcase
│   ├── Skills.jsx          # Skills grid
│   ├── Education.jsx       # Education timeline
│   ├── Certifications.jsx  # Certifications & achievements
│   ├── Contact.jsx         # Contact information
│   └── Footer.jsx          # Footer with links
├── data/
│   └── portfolioData.js    # ⭐ MAIN DATA FILE - Update this!
└── App.js                  # Main app component
```

## 🎨 Color Palette (Monochrome)

- **Primary Black**: #000000
- **Dark Gray**: #0F0F0F, #1A1A1A, #2A2A2A
- **Medium Gray**: #404040, #737373
- **Light Gray**: #A3A3A3, #E5E5E5, #F5F5F5
- **White**: #FFFFFF

## 🔧 Need Help?

All your portfolio content is centralized in one file:
**`/app/frontend/src/data/portfolioData.js`**

Just edit this file to update your entire portfolio!
