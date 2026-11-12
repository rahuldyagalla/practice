import{test,expect} from '@playwright/test';

test("adminlogin",async({page})=>
{
await page.goto('https:10.12.0.206');
await page.getByRole('link',{name: 'admin'}).click;
expect(page.getByRole('heading',{name:"Flexydial"})).toBeVisible();

}