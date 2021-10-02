let params = new URLSearchParams(location.search);

let contactName = params.get('name');
let contactEmail = params.get('return');
let contactMessage = params.get('message');

let pageName = document.getElementById('name');
let pageEmail = document.getElementById('email');
let pageMessage = document.getElementById('message');

pageName.textContent = `Name: ${contactName}`;
pageEmail.textContent = `Return Email: ${contactEmail}`;
pageMessage.textContent = `Message to me: ${contactMessage}`;