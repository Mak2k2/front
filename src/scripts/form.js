$(document).ready(() => {
	send_message.onclick = () => {
		document.location.href = "checkout_complete.html";
		localStorage.clear();
	}
});