class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;

    this._online = false; 
    this.element = null; 
  }

  get online() {
    return this._online;
  }

  set online(value) {
    this._online = value;

    if (this.element) {
      const titleDiv = this.element.querySelector('.title');
      if (value) {
        titleDiv.classList.add('online');
      } else {
        titleDiv.classList.remove('online');
      }
    }
  }

  render(id) {
    const article = document.createElement('article');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = `${this.firstName} ${this.lastName}`;

    if (this.online) {
      titleDiv.classList.add('online');
    }

    const btn = document.createElement('button');
    btn.innerHTML = '&#8505;'; 
    titleDiv.appendChild(btn);


    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.style.display = 'none';

    const phoneSpan = document.createElement('span');
    phoneSpan.innerHTML = `&#9742; ${this.phone}`; 

    const emailSpan = document.createElement('span');
    emailSpan.innerHTML = `&#9993; ${this.email}`; 

    infoDiv.appendChild(phoneSpan);
    infoDiv.appendChild(emailSpan);

    btn.addEventListener('click', () => {
      if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
      } else {
        infoDiv.style.display = 'none';
      }
    });

    article.appendChild(titleDiv);
    article.appendChild(infoDiv);

    this.element = article;

    const container = document.getElementById(id);
    if (container) {
      container.appendChild(article);
    }
  }
}