$(document).ready(() => {
	send_message.onclick = () => {
		let email = document.getElementById("email_message").value;
		let text = document.getElementById("text_message").value;
		let emaillenCheck = email.match("[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+");
		let errorMail = "Введите почту в формате xxx@xxx.xxx";
		if(emaillenCheck == null){
			error_email.innerHTML = errorMail;
			$('#email_message').css({"background-color": "#ffd5d6", "color": "#c00000"});
		}
		else if (text == "") {
			error_email.innerHTML = "";
			error_text.innerHTML = "Поле не заполнено.";
			$('#email_message').css({"background-color": "white", "color": "black"});
			$('#text_message').css({"background-color": "#ffd5d6", "color": "#c00000"});
		}
		else	message_success.innerHTML = "<div class=\"success\"><h2>отправлено</h2><p>Мы ответимвам на почту</p><p>в течение нескольких рабочих дней</p></div>";

		localStorage.setItem('emailForm', email);
		let testMailForm = localStorage.getItem('emailForm');
		if (testMailForm != 0) $("#email_message").val(testMailForm);

		localStorage.setItem('textForm', text);
		let testTextForm = localStorage.getItem('textForm');
		if (testTextForm != 0) $("#text_message").val(testTextForm);
	}
});