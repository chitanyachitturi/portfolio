# Portfolio Website - Product Requirements Document

## Original Problem Statement
Build a modern, responsive portfolio website for a Cloud Engineer. The site should highlight technical expertise, professional experience, and projects, while including playful interactive elements for engagement.

## User Persona
- **Name**: Chaitanya Chitturi
- **Role**: Cloud Engineer & DevOps Specialist
- **Location**: Blacksburg, VA

## Core Requirements

### Sections
- [x] Hero section with name and title
- [x] About Me (with photo and bio)
- [x] Experience (work history with timeline)
- [x] Projects (technical portfolio)
- [x] Skills (technology icons grid)
- [x] Certifications & Education
- [x] Photography Gallery
- [x] Blogs section
- [x] Contact (email/social links)
- [x] Footer

### Design Requirements
- [x] Light theme with blue accents (user preference)
- [x] Dark/Light theme toggle
- [x] Floating/sticky header with blur effect
- [x] Glass morphism cards
- [x] Responsive design for all screen sizes

### Playful Interactive Elements (Implemented Dec 2025)
- [x] Text scramble effect on hover (name and title)
- [x] Magnetic button effects (CTA and social links)
- [x] Scroll reveal animations (reversible on scroll up)
- [x] Hidden Tic-Tac-Toe easter egg (click name 3 times)
- [x] AI opponent using minimax algorithm

### Removed Features
- Custom cursor (removed per user request - too distracting)

## Technical Stack
- **Frontend**: React, TailwindCSS, Shadcn UI components
- **Backend**: FastAPI (not yet integrated)
- **Database**: MongoDB (not yet integrated)
- **Icons**: Lucide React

## File Structure
```
/app
├── backend/
│   ├── server.py       # FastAPI boilerplate (not connected)
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Experience.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Skills.jsx
    │   │   ├── TicTacToe.jsx (easter egg game)
    │   │   ├── TextScramble.jsx
    │   │   ├── MagneticButton.jsx
    │   │   ├── ScrollReveal.jsx
    │   │   └── ...other sections
    │   ├── hooks/
    │   │   └── useEasterEgg.js
    │   ├── context/
    │   │   └── ThemeContext.js
    │   ├── data/
    │   │   └── mock.js (all portfolio data)
    │   └── App.js
    └── package.json
```

## What's Implemented
- Complete frontend with all portfolio sections
- Dark/Light theme toggle with persistence
- Playful interactive elements (text scramble, magnetic buttons, scroll animations)
- Hidden Tic-Tac-Toe game as easter egg
- All data is MOCKED in `/app/frontend/src/data/mock.js`

## Backlog / Future Tasks

### P0 (High Priority)
- [ ] Backend integration - Create API endpoints for portfolio data
- [ ] MongoDB models for Projects, Experience, Skills, etc.
- [ ] Remove hardcoded mock data and fetch from API

### P1 (Medium Priority)
- [ ] Admin panel for content management
- [ ] Contact form with email sending (SendGrid/Resend)
- [ ] Blog CMS integration or markdown support

### P2 (Low Priority)
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization (lazy loading images)

## Known Issues
- None currently

## GitHub Repository
https://github.com/chitanyachitturi/portfolio

## Preview URL
https://creative-coder-58.preview.emergentagent.com
