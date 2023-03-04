
const registrationForm = document.querySelector('#registration-form');
const submittedFirstName = document.querySelector('#submitted-first-name');
const submittedLastName = document.querySelector('#submitted-last-name');
const submittedName=document.querySelector('#submitted-name');
const submittedDateOfBirth = document.querySelector('#submitted-date-of-birth');
const submittedCurrentAddress = document.querySelector('#submitted-current-address');
const submittedEmail = document.querySelector('#submitted-email');
const submittedGender = document.querySelector('#submitted-gender');
const submittedPhoneNumber = document.querySelector('#submitted-phone-number');
const submittedImage = document.querySelector('#submitted-image');

registrationForm.addEventListener('submit', (e) => {
e.preventDefault();
submittedFirstName.innerText = registrationForm['first-name'].value;
submittedLastName.innerText = registrationForm['last-name'].value;
submittedName.innerText=submittedFirstName.innerText+" "+submittedLastName.innerText;
submittedDateOfBirth.innerText = registrationForm['date-of-birth'].value;
submittedCurrentAddress.innerText = registrationForm['current-address'].value;
submittedEmail.innerText = registrationForm['email'].value;
submittedGender.innerText = registrationForm['gender'].value;
submittedPhoneNumber.innerText = registrationForm['phone-number'].value;
// Display uploaded image
if (registrationForm['upload-picture'].files.length > 0) {
	const uploadedImage = registrationForm['upload-picture'].files[0];
	const imageReader = new FileReader();
	imageReader.readAsDataURL(uploadedImage);
	imageReader.onload = (e) => {
		submittedImage.innerHTML = `<img src="${e.target.result}" alt="Uploaded Picture">`;
	};
} else {
	submittedImage.innerHTML = '';
}

// Clear form
registrationForm.reset();
});
