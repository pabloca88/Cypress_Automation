# Cypress Automation 🚀  
![Cypress](https://img.shields.io/badge/Cypress-9.7.0-04C38E?logo=cypress&logoColor=white) ![Node](https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black) ![License](https://img.shields.io/badge/License-MIT-blue) ![Status](https://img.shields.io/badge/Status-Active-success)


End-to-end UI testing project using **Cypress 9.7.0** and **JavaScript**.  
This repository contains automation examples, best testing practices, dynamic element handling, and a clean structure designed for scalable test suites in real-world QA Automation environments.

## 🛠️ Technologies  
- **Cypress 9.7.0** (classic `integration/` folder structure)  
- **JavaScript (ES6+)**  
- **Node.js 18+**  
- **Mocha + Chai** (built into Cypress)

## 📂 Project Structure
cypress/  
  fixtures/           → Static test data  
  integration/        → All test specifications (.spec.js)  
      home/  
      login/  
  pages/              → Page Objects (if POM is used)  
  plugins/            → Cypress 9 plugins  
      index.js  
  support/            → Custom commands & global configuration  
      commands.js  
      index.js  
cypress.json          → Main Cypress configuration  
package.json          → Project scripts and dependencies

## ⚡ Installation
**1. Clone the repository**  
git clone https://github.com/<your-username>/Cypress_Automation.git  
cd Cypress_Automation  

**2. Install dependencies**  
npm install  

> Recommended: **Node 18** (Node 14 no longer compiles on modern macOS versions)

## ▶️ Running Tests
**Open the Cypress Test Runner**  
npx cypress open  

> On macOS with Chrome 150+ (not compatible with Cypress 9), use **Electron**:  
npx cypress open --browser electron  

**Headless mode**  
npx cypress run  

## 💡 Useful Scripts
"scripts": {  
  "test": "cypress run",  
  "cy:open": "cypress open",  
  "cy:headed": "cypress run --headed",  
  "cy:electron": "cypress open --browser electron"  
}

## 🧪 Best Practices
✔ Avoid fixed waits like `cy.wait(2000)`  
✔ Validate elements using `.should('be.visible')` and `.should('exist')`  
✔ Use `cy.intercept()` for API-dependent behavior  
✔ Keep tests short, readable, and deterministic  
✔ Store reusable data in `fixtures/`  
✔ Use `support/commands.js` for custom reusable commands  

## 📄 Project Purpose  
This repository is used as a practical Cypress demonstration, showcasing testing fundamentals, structure, and best practices for QA Automation interviews and real-world workflows.

## 📬 Contact  
**Pablo Calvano**  
QA Automation Engineer
