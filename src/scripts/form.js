$(document).ready(() => {
	send_message.onclick = () => {
		let email = document.getElementById("email_message").value;
		let text = document.getElementById("text_message").value;
		let emaillenCheck = email.indexOf("@");
		let errorMail = "Введите почту в формате xxx@xxx.xxx";
		if(email == "") error_email.innerHTML = errorMail;
		else if (emaillenCheck == -1) {
			error_email.innerHTML = "";
		}
		else if (emaillenCheck > 3) {
			error_email.innerHTML = errorMail;
		}
		else if (email.length > 11) {
			error_email.innerHTML = errorMail;
		}
		else if (email.indexOf(".") == -1) {
			error_email.innerHTML = errorMail;
		}
		else if(text == "") {
			error_email.innerHTML = "";
			error_text.innerHTML = "Поле не заполнено.";
		}
		else {
			message_success.innerHTML = "<div class=\"success\"><h2>отправлено</h2><p>Мы ответимвам на почту</p><p>в течение нескольких рабочих дней</p></div>";
		}

		localStorage.setItem('emailForm', email);
		let testMailForm = localStorage.getItem('emailForm');
		if (testMailForm != 0) $("#email_message").val(testMailForm);

		localStorage.setItem('textForm', text);
		let testTextForm = localStorage.getItem('textForm');
		if (testTextForm != 0) $("#text_message").val(testTextForm);
	}
});