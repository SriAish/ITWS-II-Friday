// Return true if input is valid



function validateUsername(name) {

	if(name.length<4)
	{
		return false;
		document.getElementById("submitbtn").disabled = true;
	}
	if(name.length>8)
	{
		return false;
		document.getElementById("submitbtn").disabled = true;
	}
	for(i=0 ; i<name.length; i++)
	{
		if(name[i]==" ")
		{
			document.getElementById("submitbtn").disabled = true;
			return false;
		}
	}
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
	return true;
}

function validatePassword(password) {

	var u=0, l=0 ,d=0,s=0;
	for(i=0 ; i<password.length ;i++)
	{
		if(password[i]>'A' && password[i]<'Z')
		{
			u=u+1;
		}
		else if(password[i]>'a' && password[i]<'z')
                {
                        l=l+1;
                }
		else if (password[i]>'0' && password[i]<'9'){
                        n=n+1;
                }
		else
			s=s+1;
	}

	if(u*l*n*s==0)
	{
		 document.getElementById("submitbtn").disabled = true;
		return false;
	}
	else
	{
		return true;
	}
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
}

function validateCountry(country) {

	if(country==	
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
}

function validateEmail(email) {
	// Check if the email is valid
}

function validateGender(gender) {
	// Check if any one of radio button is selected
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
}
