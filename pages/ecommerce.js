import {projectURL} from "../pages/configs"
import {validLoginData, invalidLoginData} from "../pages/data"

export class Ecommerce{
    constructor(page, browser){
        this.page = page;
        this.browser = browser;
    }
    
    async open(){
        await this.page.goto(projectURL);
    }

    async createAccount() {
        await this.page.click("//div[@class='header_user_info']");
        
    }

    async logOut(){
        await this.page.click("//a[@class='logout']");
    }
    async signIn(){
        await this.page.fill("//input[@id='email']", validLoginData.login);
        await this.page.fill("//input[@id='passwd']", validLoginData.pass);
        await this.page.click("//button[@id='SubmitLogin']");
    }
    async search(){
        await this.page.fill("//input[@id='search_query_top']", search.query);
        await this.page.click("//button[@name='submit_search']");
    }
}