import {test} from '@playwright/test'

test('Login to website', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})