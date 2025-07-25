window.addEventListener('load', solve);
function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let dateInElement = document.getElementById('from-date');
    let dateOutElement = document.getElementById('to-date');
    let nextBtnElement = document.getElementById('next-btn');
    let infoListElement = document.querySelector('.info-list');
    let confirmListElement = document.querySelector('.confirm-list');
    let status = document.getElementById('status');
    let okElement = document.getElementById('ok');


nextBtnElement.addEventListener('click',onNext)
function onNext(e) {
    e.preventDefault();
    if(firstNameElement.value == ''
    || lastNameElement.value == ''
    || dateInElement.value == ''
    ||dateOutElement.value == ''
    || new Date(dateInElement.value) >= new Date(dateOutElement.value)) {
        return;
    }
    let liElementInfo = document.createElement('li');
    liElementInfo.setAttribute('class', 'vacation-content');

    let articleElementInfo = document.createElement("article");

    let fullName =  document.createElement('h3');
    fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

    let dateIn = document.createElement('p');
    dateIn.textContent = `From date: ${dateInElement.value}`;

    let dateOut = document.createElement('p');
    dateOut.textContent = `To date: ${dateOutElement.value}`;


    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement("button");
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';

    articleElementInfo.appendChild(fullName);
    articleElementInfo.appendChild(dateIn);
    articleElementInfo.appendChild(dateOut);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(editBtn);
    liElementInfo.appendChild(continueBtn);

    infoListElement.appendChild(liElementInfo);

    let editFirstName = firstNameElement.value;
    let editLastName = lastNameElement.value;
    let editDateIn = dateInElement.value;
    let editDateOut = dateOutElement.value;


firstNameElement.value = "";
lastNameElement.value = "";
dateInElement.value = "";
dateOutElement.value = "";


nextBtnElement.disabled = true;

editBtn.addEventListener("click", onEdit);
function onEdit() {
    firstNameElement.value = editFirstName;
    lastNameElement.value = editLastName;
    dateInElement.value = editDateIn;
    dateOutElement.value = editDateOut;


  liElementInfo.remove();

  nextBtnElement.disabled = false;    
}
continueBtn.addEventListener('click', onContinue);
function onContinue() {
    let liElementconfirm = document.createElement('li');
    liElementconfirm.setAttribute('class', 'vacation-content');

    let articleElementContinue = document.createElement("article");
    articleElementContinue = articleElementInfo;

    let confirmBtn = document.createElement("button");
    confirmBtn.setAttribute('class', 'confirm-btn');
    confirmBtn.textContent = 'Confirm';

    let cancelBtn = document.createElement("button");
    cancelBtn.setAttribute('class', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';


    liElementconfirm.appendChild(articleElementContinue);
    liElementconfirm.appendChild(confirmBtn);
    liElementconfirm.appendChild(cancelBtn);
    liElementInfo.remove();

    confirmListElement.appendChild(liElementconfirm)

    confirmBtn.addEventListener('click', onConfirm);
    function onConfirm() {
        liElementconfirm.remove();
        nextBtnElement.disabled = false;

        status.setAttribute('class', 'vacation-confirmed');
        status.textContent = 'Vacation Requested';
    }

    cancelBtn.addEventListener('click',onCancel);
    function onCancel() {

        liElementconfirm.remove();
        nextBtnElement.disabled = false;

        status.setAttribute('class', 'vacation-cancelled');
        status.textContent = 'Cancelled Vacation';

    }
    okElement.addEventListener('click', onOk);
    function onOk() {
        window.location.reload()
    }
}

}   
    
}

    
    
