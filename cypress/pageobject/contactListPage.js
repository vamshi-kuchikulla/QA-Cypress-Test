class ContactListPage{
    name = "//body/div[@id='app']/div[@class='form-row justify-content-center']/div[1]/input[1]";
    phone = "//body/div[@id='app']/div[@class='form-row justify-content-center']/div[2]/input[1]";
    eamil = "//body/div[@id='app']/div[@class='form-row justify-content-center']/div[3]/input[1]";
    submitButton = "//button[@class='btn btn-primary']";
    tableRecord = "//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr[2]";
    rowElement ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody";
    editButton = "//button[@class='btn btn-info']";
    deleteButton = "//button[@class='btn btn-danger']";
    tableName ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr/td[1]/input[1]";
    tablePhone ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr/td[2]/input[1]";
    tableEmail ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr/td[3]/input[1]";
    updateButton = "//button[@class='btn btn-success']";
    updateRecordName ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr/td[1]";
    updateRecordPhone ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr/td[2]";
    updateRecordEmail ="//body/div[@id='app']/table[@class='table text-center w-auto mx-auto']/tbody/tr/td[3]"



    setName(name){
        cy.xpath(this.name).type(name);
    }

    setPhone(phone){
        cy.xpath(this.phone).type(phone);
    }

    setEmail(eamil){
        cy.xpath(this.eamil).type(eamil);
    }

    submitForm(){
        cy.xpath(this.submitButton).click();
    }
}

export default ContactListPage