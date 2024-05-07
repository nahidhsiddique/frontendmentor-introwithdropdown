// Navigation Menu >>
const openMenu = document.querySelector('header > div:nth-of-type(2) > img'); 
const closeMenu = document.querySelector('header > div:nth-of-type(2) > nav > img');
const darkBackground = document.querySelector('body > div:nth-of-type(1)');
const menuCard = document.querySelector('header > div:nth-of-type(2) > nav');

const tileFeature = document.querySelector('header > div:nth-of-type(2) > nav > ul > li:nth-of-type(1) > a');
const tileCompany = document.querySelector('header > div:nth-of-type(2) > nav > ul > li:nth-of-type(2) > a');

const featureMenu = document.querySelector('header > div:nth-of-type(2) > nav > ul > li:nth-of-type(1) > ul');
const companyMenu = document.querySelector('header > div:nth-of-type(2) > nav > ul > li:nth-of-type(2) > ul');

openMenu.addEventListener("click", () => {
    darkBackground.setAttribute("class", "dark-background-for-nav");
    menuCard.setAttribute("id", "activate-to-flex");
})

closeMenu.addEventListener("click", () => {
    darkBackground.removeAttribute("class");
    menuCard.removeAttribute("id");
})

let tileFeatureCount = 0;
tileFeature.addEventListener("click",()=> {
    tileFeatureCount++;
    if (tileFeatureCount % 2 != 0 ) {
        featureMenu.setAttribute("id","activate-to-block");
    } else {
        featureMenu.removeAttribute("id");
    }
})

let tileCompanyCount = 0;
tileCompany.addEventListener("click",()=> {
    tileCompanyCount++;
    if (tileCompanyCount % 2 != 0 ) {
        companyMenu.setAttribute("id","activate-to-block");
    } else {
        companyMenu.removeAttribute("id");
    }
})

console.log(tileCompany);
console.log(companyMenu);
// << Navigation Menu