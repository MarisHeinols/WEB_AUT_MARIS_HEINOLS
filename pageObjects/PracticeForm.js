import BasePage from "./BasePage";

class PracticeForm extends BasePage {
	static get url() {
		return "/automation-practice-form";
	}
	static get firstName() {
		return cy.get("#firstName");
	}
	static get lastName() {
		return cy.get("#lastName");
	}
	static get email() {
		return cy.get("#userEmail");
	}
	static get radioButton() {
		return cy.get(".custom-control-input");
	}
	static get checkBox() {
		return cy.get(".custom-control-input");
	}
	static get mobileNr() {
		return cy.get("#userNumber");
	}
	static get dateOfBirth() {
		return cy.get("#dateOfBirthInput");
	}
	static get subjects() {
		return cy.get("#subjectsContainer");
	}
	static get currentAdress() {
		return cy.get("#currentAddress");
	}
	static get state() {
		return cy.get("#state");
	}
	static get city() {
		return cy.get("#city");
	}
	static get getMonthPicker() {
		return cy.get(
			".react-datepicker__month-select"
		);
	}
	static get getYearPicker() {
		return cy.get(
			".react-datepicker__year-select"
		);
	}
	static get getDay() {
		return cy.get(
			"[aria-label='Choose Friday, February 28th, 1930']"
		);
	}
	static get imageUpload() {
		return cy.get("#uploadPicture");
	}
	static get submit() {
		return cy.get("#submit");
	}
	static get finalTable() {
		return cy.get("tbody");
	}
}

export default PracticeForm;
