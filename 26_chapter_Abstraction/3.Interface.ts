interface BasePage{
    url: string; //Every object that follows BasePage must have a url, and it must be a string.
    }
interface LoginPage extends BasePage {
    usernameSelector: string;
}
interface FreeTrailPage extends BasePage {
   }
let loginPage: LoginPage = {
    url: "/login",
    usernameSelector: "#username"
   }

let freeTrialPage: FreeTrailPage = {
    url: "/free-trial",
    }
console.log("URL:", loginPage.url);
