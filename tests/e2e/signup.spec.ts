import { test, expect } from '@playwright/test'

test.describe('Signup page', () => {
  test('displays the email and password fields', async ({ page }) => {
    await page.goto('/signup')

    const emailInput = page.locator('provet-input[data-testid="email"] >> input')
    const passwordInput = page.locator('provet-input[data-testid="password"] >> input')

    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
  })

  test('shows both visual and accessible errors when submitting empty form', async ({ page }) => {
    await page.goto('/signup')

    // Focus then blur to trigger validation
    const emailInput = page.locator('provet-input[data-testid="email"] >> input')
    const passwordInput = page.locator('provet-input[data-testid="password"] >> input')
    await emailInput.focus()
    await emailInput.blur()
    await passwordInput.focus()
    await passwordInput.blur()

    // Select the button
    const signUpBtn = page.locator('provet-button[data-testid="signup-button"] >> button.n-button')

    // 1. ✅ Visible error messages
    const emailErrorSlot = page.locator('slot[name="error"]').filter({ hasText: 'Email is required' })
    const passwordErrorSlot = page.locator('slot[name="error"]').filter({ hasText: 'Password is required' })
    await expect(emailErrorSlot).toBeVisible()
    await expect(passwordErrorSlot).toBeVisible()

    // 2. ✅ Accessibility: hidden error messages
    const emailError = page.locator('#email-error')
    const passwordError = page.locator('#password-error')
    await expect(emailError).toHaveText('Email is required')
    await expect(passwordError).toHaveText('Password is required')

    // 3. ✅ Button remains disabled
    await expect(signUpBtn).toBeDisabled()
  })

  test('allows successful signup flow', async ({ page }) => {
    await page.goto('/signup')

    const emailInput = page.locator('provet-input[data-testid="email"] >> input')
    await emailInput.fill('user@example.com')
    const passwordInput = page.locator('provet-input[data-testid="password"] >> input')
    await passwordInput.fill('StrongPass123!')
    // Wait for the submit button to become enabled
    const signUpBtn = page.locator('provet-button[data-testid="signup-button"] >> button.n-button')
    await expect(signUpBtn).toBeEnabled()

    // Click the sign-up button
    await signUpBtn.click()

    await expect(page.getByText(/successfully created/i)).toBeVisible()
  })

  test('toggles password visibility when clicking the show/hide button', async ({ page }) => {
    await page.goto('/signup')

    const passwordInput = page.locator('provet-input[data-testid="password"] >> input')
    const toggleBtn = page.locator('provet-button[data-testid="password-toggle-btn"] >> button.n-button') // Assumes show/hide is a button inside the input

    // Type a password
    await passwordInput.fill('TestPassword123')

    // Should be type="password" initially
    await expect(passwordInput).toHaveAttribute('type', 'password')

    // Click to show password
    await toggleBtn.click()
    await expect(passwordInput).toHaveAttribute('type', 'text')

    // Click again to hide password
    await toggleBtn.click()
    await expect(passwordInput).toHaveAttribute('type', 'password')
  })

  test('can check and uncheck the product updates checkbox', async ({ page }) => {
    await page.goto('/signup')

    const checkbox = page.locator('provet-checkbox[data-testid="updates"] >> input[type="checkbox"]')

    // Initially unchecked
    await expect(checkbox).not.toBeChecked()

    // Check it
    await checkbox.check()
    await expect(checkbox).toBeChecked()

    // Uncheck it
    await checkbox.uncheck()
    await expect(checkbox).not.toBeChecked()
  })
})
