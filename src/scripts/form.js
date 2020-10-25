$(document).ready(() => {
	send_message.onclick = () => {
		let email = document.getElementById("email_message").value;
		let text = document.getElementById("text_message").value;
		if(email == "") error_email.innerHTML = "Пожалуйста, введите правильный email.";
		else if (email.indexOf("@") == -1) {
			error_email.innerHTML = "Пожалуйста, введите правильный email.";
		}
		else if(text == "") {
			error_email.innerHTML = "";
			error_text.innerHTML = "Поле не заполнено.";
		}
		else { 
			alert("Сообщение отправлено!");
				error_email.innerHTML = "";
				error_text.innerHTML = "";
		}
	}
});