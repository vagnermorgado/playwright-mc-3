// @ts-check
import { test, expect } from '@playwright/test';

test('Login com Sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('vagner.morgado@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('Login com E-mail vazio', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('Login com Senha vazia', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('vagner.morgado@gmail.com');
  await page.locator('#password').fill('');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});