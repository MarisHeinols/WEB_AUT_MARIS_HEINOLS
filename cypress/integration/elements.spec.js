import PracticeForm from "../../pageObjects/PracticeForm";
import formData from "../fixtures/formData.json";

context("Elements Page", () => {
	context("Text box scenarios", () => {
		beforeEach(() => {
			PracticeForm.visit();
		});

		it("Filling in Text Boxes", () => {
			// Input information
			// Data for input is from fixtures fromData.json
			PracticeForm.firstName.type(
				formData.firstName
			);
			PracticeForm.lastName.type(
				formData.lastName
			);
			PracticeForm.email.type(formData.email);
			PracticeForm.radioButton.check(
				formData.gender,
				{
					force: true,
				}
			);
			PracticeForm.mobileNr.type(
				formData.mobileNr
			);
			PracticeForm.dateOfBirth.click();
			PracticeForm.getYearPicker.select(
				formData.year
			);
			PracticeForm.getMonthPicker.select(
				formData.month
			);
			PracticeForm.getDay.click({ force: true });
			PracticeForm.radioButton.check("3", {
				force: true,
			});
			PracticeForm.subjects.type(
				formData.subjects + "{enter}"
			);
			PracticeForm.currentAdress.type(
				formData.currentAddress
			);
			PracticeForm.imageUpload.selectFile(
				"files/e6fdog.jpeg"
			);
			PracticeForm.state.type(
				formData.state + "{enter}"
			);
			PracticeForm.city.type(
				formData.city + "{enter}"
			);
			PracticeForm.submit.click({ force: true });

			//Data validation from output table
			//Data is validated from fixtures data formData.json

			PracticeForm.finalTable
				.should(
					"contain",
					formData.firstName +
						" " +
						formData.lastName
				)
				.should("contain", formData.email)
				.should("contain", formData.gender)
				.should("contain", formData.mobileNr)
				.should("contain", formData.dateOfBirht)
				.should("contain", formData.subjects)
				.should("contain", formData.hobbies)
				.should(
					"contain",
					formData.filePath.split("/")[1]
				)
				.should(
					"contain",
					formData.currentAddress
				)
				.should(
					"contain",
					formData.state + " " + formData.city
				);
		});
	});
});
