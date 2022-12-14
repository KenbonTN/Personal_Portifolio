const form = document.getElementById('contact-form');
const userName = document.getElementById('name');
const message = document.getElementById('message');
const emails = document.getElementById('email');
let localData = {
    name: '',
    email: '',
    message: '',
  };

  function storeLocalData() {
    localStorage.setItem('user', JSON.stringify(localData));
  }

  form.addEventListener('change', () => {
    localData.name = userName.value;
    localData.email = emails.value;
    localData.message = message.value;
    storeLocalData();
  });

  if (JSON.parse(localStorage.getItem('user')) !== null) {
    localData = JSON.parse(localStorage.getItem('name'));
    userName.setAttribute('value', localData.name);
    emails.setAttribute('value', localData.email);
    message.value = localData.message;
  }