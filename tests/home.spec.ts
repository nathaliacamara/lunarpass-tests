import { test, expect } from '@playwright/test'

test('must display the title in the browser tab', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page).toHaveTitle(/Lunar Pass/)

})

test('must display the slogan in homepage', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const slogan = page.getByRole('heading', {name: 'Sua viagem para a Lua começa aqui.' })
  await expect(slogan).toBeVisible()

})
