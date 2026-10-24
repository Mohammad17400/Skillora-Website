# Skillora Learning Platform

A responsive e-learning front-end built with React, Vite, Tailwind CSS, Framer Motion, React Router, and Lucide icons.

## Included features
- Responsive landing page with animated sections and course cards
- Course search, category and level filters, and sorting by recommendation, rating, price, or duration
- Individual course pages with curriculum, enrollment demo, lesson completion tracking, and learner reviews
- Student dashboard with enrollment and progress summaries
- Wishlist saved in browser storage
- Light/dark mode with saved preference and contrast-aware styles
- Demo sign-up/log-in profile flow
- Rule-based Study Buddy for course and study suggestions
- Printable demo completion certificates after all lessons are marked complete
- Instructor portal to create local course drafts
- Safe checkout preview with demo enrollment (no real payment processing)
- Responsive mobile navigation and animated transitions

## Run locally
1. Install Node.js 18 or newer.
2. Open this folder in VS Code.
3. In the terminal, run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Important prototype limitations
This is a front-end demonstration. Accounts, enrollments, lesson progress, wishlist items, reviews, and instructor drafts are saved in the current browser's local storage; they are not synchronized across devices or users. The sign-in flow is not secure production authentication. The Study Buddy is rule-based, not connected to a live AI model. Checkout/payment processing, video hosting, server-side course publishing, and a real certificate verification system are not connected. Do not enter sensitive information. A production release needs a secure backend, authentication, database, video delivery, and payment provider integration.

## Images and theme
Course images use external Unsplash URLs and need an internet connection. The theme selection is stored as `skillora-theme` in local storage.
