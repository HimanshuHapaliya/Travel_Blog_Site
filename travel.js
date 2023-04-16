function validateForm()
{
	var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	var a=document.getElementById("name").value;

	if(!regName.test(a))
	{
		alert("Please Enter Full name Properly");
		document.getElementById("name").focus();
		return false;
	}
	var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var mail=document.getElementById("email").value;
	if(!mailformat.test(mail))
	{
		alert("Please enter mail correctly");
		document.getElementById("mail").focus();
		return false;
	}
	var phone=document.getElementById("phonenumber").value;
	var phoneno = /^\d{10}$/;

	if(!phoneno.test(phone))
	{
		alert("Enter Mobile Number in digits");
		return false;
	}
}
    
   

