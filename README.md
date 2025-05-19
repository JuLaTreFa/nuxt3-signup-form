# Nuxt 3 Client-Side Sign-Up Application

This is a client-side rendered Nuxt 3 application that provides a user registration form for a product signup. It is built using TypeScript and integrates the [Provet Cloud Design System](https://provetcloud.design/) Web Components for UI consistency and accessibility.

## Features

- User registration form with required **email** and **password** fields.
- Real-time validation with error messages for empty fields.
- Password visibility toggle for improved usability.
- Option to subscribe to product updates and announcements.
- Success page displayed upon successful signup.
- Fully client-side rendered with Nuxt 3.
- Utilizes Provet Cloud Design System components to ensure a consistent look and feel.
- Developed with TypeScript for type safety and maintainability.

## 🧪 Testing Strategy

### End-to-End Testing (E2E) with Playwright

Due to the use of **Web Components with Shadow DOM** (via Provet Cloud components), this project uses **Playwright for E2E testing**.

#### Why E2E instead of unit testing?

- Shadow DOM encapsulates internal structure, making unit testing brittle and difficult to scale
- E2E tests allow us to simulate real user interactions across full components, regardless of encapsulation
- Tests ensure the full flow from input to submission, including form validation, accessibility, interactivity, and success state

#### What’s covered?

- Field rendering and visibility
- Visual and ARIA error messages
- Form submission success flow
- Password show/hide toggle behavior
- Checkbox interaction for updates

> ✅ All tests are located in `/tests/e2e/signup.spec.ts`

## Technologies Used

- [Nuxt 3](https://nuxt.com/)
- TypeScript
- Provet Cloud Design System Web Components ([docs](https://provetcloud.design/web-components/#installation-1))
- Vue 3 Composition API
- ESLint & Prettier for code quality and formatting
- [Playwright](https://playwright.dev/) for E2E Testing

## Installation

1. **Clone the repository**, install dependencies, run the development server, and open in the browser:
   ```bash
   git clone https://github.com/yourusername/nuxt3-signup-app.git
   cd nuxt3-signup-app

   npm install
   # or
   yarn install

   npm run dev
   # or
   yarn dev

   npm run test:e2e
   # or
   yarn test:e2e

Then open your browser and go to:
http://localhost:3000

## Code Quality & Best Practices

- TypeScript is used throughout the project to enhance type safety.

- Proper form validation with user-friendly error feedback.

- Accessibility considerations implemented

- Modular and reusable components following Vue best practices.

- Clean and maintainable code structure.

- Comprehensive comments and documentation where necessary.

## Next Steps / Improvements

- Enhance form with password strength meter and improved email validation feedback (e.g., live email format checking or suggestion).

- Integration with backend API for real user registration.



