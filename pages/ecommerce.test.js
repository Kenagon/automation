import {Ecommerce} from "../pages/ecommerce"

const {chromium} = require('playwright');
let browser;
let page;

describe("Ecommerce test", () => {
	beforeAll(async () => {
		browser = await chromium.launch({headless: false});
	});
	beforeEach(async () => {
		page = await browser.newPage();
	});
	afterEach(async () => {
		await browser.close()
	});
	afterAll(async () => {
		await browser.close();
	});
	it("caseID: Case Title", async () => {
		let ecommerce = new Ecommerce(page)
		await ecommerce.open();
		// await ecommerce.createAccount("", "")
		// await page.goto("https://ucraft.com/");
	});
});