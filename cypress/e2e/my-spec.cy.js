import ContactListPage from "../pageobject/contactListPage";

describe("Test ContactList App", () => {
  let userData;

  //Data Driven Test
  before(() => {
    cy.fixture("userData").then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.visit("./contact_app.html");
  });

  //Test if the application loads correctly
  it("Test if the application loads correctly", () => {
    cy.get("h1.text-center").should("have.text", "Contact List App");
    cy.get("table tbody tr").should("have.length", 1);
  });

  // Add single user Contact to Contect List form json and assert the insertion in table
  it(
    "Add single user Contact to Contact List",
    { defaultCommandTimeout: 3000 },
    () => {
      const contactListPage = new ContactListPage();
      cy.xpath(contactListPage.name).should("be.visible");
      contactListPage.setName(userData.name);
      contactListPage.setPhone(userData.phone);
      contactListPage.setEmail(userData.email);
      contactListPage.submitForm();
      cy.xpath(contactListPage.tableRecord).should("be.visible");
    }
  );

  // Edit Contact from Contect List and assert
  it("Edit Contact from Contact List", { defaultCommandTimeout: 3000 }, () => {
    const contactListPage = new ContactListPage();
    cy.xpath(contactListPage.name).should("be.visible");
    contactListPage.setName(userData.name);
    contactListPage.setPhone(userData.phone);
    contactListPage.setEmail(userData.email);
    contactListPage.submitForm();
    cy.xpath(contactListPage.tableRecord).should("be.visible");

    //update record & assert
    let updatedName = "CypressUpdated";
    let updatedPhone = "2453678238";
    let updatedEmail = "cypressUpdated@gmail.com";

    cy.xpath(contactListPage.editButton).click();
    cy.xpath(contactListPage.tableName).clear();
    cy.xpath(contactListPage.tableName).type(updatedName);
    cy.xpath(contactListPage.tablePhone).clear();
    cy.xpath(contactListPage.tablePhone).type(updatedPhone);
    cy.xpath(contactListPage.tableEmail).clear();
    cy.xpath(contactListPage.tableEmail).type(updatedEmail);
    cy.xpath(contactListPage.updateButton).click();
    cy.xpath(contactListPage.updateRecordName).should("have.text", updatedName);
   // cy.xpath(contactListPage.updateRecordPhone).should("have.text", updatedPhone);
   // cy.xpath(contactListPage.updateRecordEmail).should("have.text", updatedEmail);
  });

  // delete Contact from Contect List and assert
  it(
    "delete Contact from Contact List",
    { defaultCommandTimeout: 5000 },
    () => {
      const contactListPage = new ContactListPage();
      cy.xpath(contactListPage.name).should("be.visible");
      contactListPage.setName(userData.name);
      contactListPage.setPhone(userData.phone);
      contactListPage.setEmail(userData.email);
      contactListPage.submitForm();
      cy.xpath(contactListPage.tableRecord).should("be.visible");
      cy.xpath(contactListPage.deleteButton).click();
      cy.xpath(contactListPage.rowElement).find('tr').should('have.length',1)
      cy.log("end of the flow!!!!!!!!!!!!!!!");
    }
  );

  // Add multiple Contacts to Contect List form json and assert the insertion in table
  it(
    "Add Multiple users Contact to Contact List",
    { defaultCommandTimeout: 3000 },
    () => {
      cy.fixture("usersData").then((data) => {
        let count = 1
        data.forEach((user) => {
          const contactListPage = new ContactListPage();
          cy.xpath(contactListPage.name).should("be.visible");
          contactListPage.setName(user.name);
          contactListPage.setPhone(user.phone);
          contactListPage.setEmail(user.email);
          contactListPage.submitForm();
          count++;
          cy.xpath(contactListPage.rowElement).find('tr').should('have.length', count);
        });
      });
    }
  );
  
});
