const formSet = document.querySelector('.feedback-form');
const inputInfo = formSet.elements.email;
const areaInfo = formSet.elements.message;
let saveInfo = { email: '', message: '' };

const parsedinfo = JSON.parse(localStorage.getItem('feedback-form-state'));

if (parsedinfo !== null) {
  areaInfo.value = parsedinfo.message;
  inputInfo.value = parsedinfo.email;

  saveInfo = parsedInfo;
}

formSet.addEventListener('input', event => {
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  saveInfo.email = email.trim();
  saveInfo.message = message.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(saveInfo));
});

formSet.addEventListener('submit', evt => {
  evt.preventDefault();

  if (saveInfo.email.length == 0 || saveInfo.message.length == 0) {
    console.log(`please fill all field`);
  } else {
    console.log(saveInfo);
    localStorage.removeItem('feedback-form-state');
    formSet.reset();
    saveInfo.email = '';
    saveInfo.message = '';
  }
});
