$(document).ready(() => {
	send_message.onclick = () => {
		let email = document.getElementById("email_message").value;
		//sessionStorage.setItem(emailForm, email);
		let text = document.getElementById("text_message").value;
		let emaillenCheck = email.indexOf("@");
		if(email == "") error_email.innerHTML = "Пожалуйста, введите правильный email.";
		else if (emaillenCheck == -1) {
			error_email.innerHTML = "Пожалуйста, введите правильный email.";
		}
		else if (emaillenCheck > 3) {
			error_email.innerHTML = "Пожалуйста, введите правильный email.";
		}
		else if (email.length > 11) {
			error_email.innerHTML = "Пожалуйста, введите правильный email.";
		}
		else if (email.indexOf(".") == -1) {
			error_email.innerHTML = "Пожалуйста, введите правильный email.";
		}
		else if(text == "") {
			error_email.innerHTML = "";
			error_text.innerHTML = "Поле не заполнено.";
		}
		else {
			message_success.innerHTML = "<div class=\"success\"><h1>отправлено</h1><p>Мы ответимвам на почту</p><p>в течение нескольких рабочих дней</p></div>";
			error_email.innerHTML = "";
			error_text.innerHTML = "";
		}

		localStorage.setItem('emailForm', email);
		let testMailForm = localStorage.getItem('emailForm');
		if (testMailForm != 0) $("#email_message").val(testMailForm);

		localStorage.setItem('textForm', text);
		let testTextForm = localStorage.getItem('textForm');
		if (testTextForm != 0) $("#text_message").val(testTextForm);
	}
});