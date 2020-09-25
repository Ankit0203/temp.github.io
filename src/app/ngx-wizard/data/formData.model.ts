//Wizard form data class Starts
export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
    }
}
//Wizard form data class Ends

//Personal tab data class starts
export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
}
//Personal tab data class ends
