# Jyothiradithya P. — Personal Story Website (iLEAD 2027, GyanSys)

A personal website built for the **"Build Your Story"** challenge at **GyanSys (iLEAD 2027)**.

Developed in **pure React (JavaScript / JSX)**, Vite, Framer Motion, and CSS Modules.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd ilead-story
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The production bundle will be generated in `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🧭 Website Routes & Architecture

The site features 4 routes and experiences:

1. **`/` — The Person Behind the Profile**
   - **Cinematic Dark Opening**: Name, taglines, intro statement, scroll indicator.
   - **Part 1 — Who I Am**: Narrative personal introduction, 5 interactive personality cards (*The People Person, The Curious Mind, The Adventure Seeker, The Sports Enthusiast, The Organised One*).
   - **Part 2 — Why I Chose Engineering & College Journey**: Why tech/ISE, development of time management, decision-making, public relations, hosting, and leadership.
   - **Part 3 — My Kind of Happiness**: Everyday joy and balance, interactive 5-category activity switcher with placeholders for photography.
   - **Part 4 — When Doubt Met Determination (Aikyam 2026)**: Multi-stage interactive narrative (*The Doubt, The Challenge, The Response, The Outcome, The Lesson*) and quote card.
   - **Mindset & "My Reset Button"**: Honest effort philosophy, Bhagavad Gita insight, and the interactive reset button.
   - **Footer Navigation**: Next chapter route links.

2. **`/ambitions` — Who I Want to Be**
   - Narrative on solving meaningful problems rather than chasing designations.
   - Core impact areas: **Agriculture** (crop recommendation systems), **Health & Fitness** (habit-building), and **Organisational Growth**.
   - Interactive ambition cards that reveal underlying motivations.

3. **`/future` — The Next Five Years**
   - Concise, mature 5-year outlook.
   - Focus on becoming more experienced, capable, responsible, and adding value to the organisation.
   - 3 core pillars: Experienced, Responsible, Contributing.

4. **`/professional` — My Professional Dashboard**
   - Strictly derived from your submitted resume (`JYOTHIRADITHYA P[11].pdf`).
   - Clean contact bar (Email, Phone, Bangalore, LinkedIn, GitHub).
   - **Education**: RVITM (B.E. ISE, 8.56 CGPA), RV PU College (95%), Sri Kumaran Children's Home (94.72%).
   - **Technical Skills**: Languages, Frontend, Backend, Python Libraries, Databases, Tools & Platforms, Core Concepts, Soft Skills.
   - **Projects**: Expandable project cards for *SmartVision AI*, *Jarvis - Personal AI Assistant*, *Online Event Booking System*, and *EDIIP (Enterprise Document & Invoice Intelligence Platform)*.
   - **Experience**: Ninestar Information Technologies Pvt. Limited (Technology division internship).
   - **Leadership**: Head – Logistics, On-Ground Operations & PR, Aikyam 2026.
   - **Certifications**: Infosys Springboard (DSA), Acmegrade (Data Science), Udemy (Complete Python Bootcamp).

---

## 📸 Adding Your Personal Photographs

All image placeholders are mapped in one central file:
[`src/data/images.js`](src/data/images.js)

When you're ready to add your photos:
1. Place your image files in the `public/images/` directory.
2. Open [`src/data/images.js`](src/data/images.js) and update the paths:

```javascript
export const IMAGES = {
  heroPortrait:         '/images/portrait.jpg',
  friends:              '/images/friends.jpg',
  collegeMemories:      '/images/college-memories.jpg',
  trekking:             '/images/trekking.jpg',
  nature:               '/images/nature.jpg',
  birdwatching:         '/images/birdwatching.jpg',
  badminton:            '/images/badminton.jpg',
  coffee:               '/images/coffee.jpg',
  aikyamTeam:           '/images/aikyam-team.jpg',
  aikyamEvent:          '/images/aikyam-event.jpg',
  aikyamBehind:         '/images/aikyam-behind.jpg',
  ambitionsHero:        '/images/ambitions-hero.jpg',
  futureHero:           '/images/future-hero.jpg',
  professionalPortrait: '/images/professional.jpg',
}
```

Until images are provided, every image placeholder renders an intentional, beautifully styled container with category labels and vector iconography — no broken image icons or missing elements.

---

## 🌐 Deployment Instructions

You can deploy this site to any static hosting service in minutes:

### Vercel (Recommended)
1. Push this project folder to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `ilead-story`.
5. Click **Deploy**.

### Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Base directory: `ilead-story`.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. For single-page app routing, add a `_redirects` file in `public/` with:
   `/*    /index.html   200`
