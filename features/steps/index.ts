import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I login on Console page', async ({ page }) => {
  await page.goto('https://internal.dev.es.ecom.dgrp.io/console-front/index.html');
  await expect(page.getByRole('link', { name: ' USUARIOS EXTERNOS' })).toBeVisible();
  await page.getByRole('link', { name: ' USUARIOS EXTERNOS' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('QAtildes');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('tildes');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test-id="userName"]')).toBeVisible();
});

When('I click menu', async ({ page }) => {
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
});

When('I select menu option {string}', async ({ page }, option: string) => {
  await page.locator('[data-test-id="'+option+'"]').click();
  await page.locator('[data-test-id="Gestión de Coordinadores"]').click();
  await page.locator('[data-test-id="Alta"]').getByText('Alta').click();});

Then('I expect {string} to be visible', async ({ page }, text: string) => {
  await expect(page.getByRole('heading', { name: 'ALTA' })).toBeVisible();
  await page.close();
});
