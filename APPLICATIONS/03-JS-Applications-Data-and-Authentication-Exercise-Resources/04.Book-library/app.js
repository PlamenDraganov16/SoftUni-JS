const loadBtn = document.getElementById('loadBooks');
const tbody = document.querySelector('table tbody');
const form = document.querySelector('form');
const [titleInput, authorInput] = form.querySelectorAll('input');

const BASE_URL = 'http://localhost:3030/jsonstore/collections/books';

let editId = null; // Track current book id being edited

loadBtn.addEventListener('click', loadBooks);
form.addEventListener('submit', onSubmit);

async function loadBooks() {
  tbody.innerHTML = ''; // Clear existing rows

  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch books');
    const data = await res.json();

    // data is an object with keys as ids, values as book objects
    Object.entries(data).forEach(([id, book]) => {
      const tr = document.createElement('tr');

      const titleTd = document.createElement('td');
      titleTd.textContent = book.title;

      const authorTd = document.createElement('td');
      authorTd.textContent = book.author;

      const actionsTd = document.createElement('td');
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => onEdit(id, book));

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => onDelete(id));

      actionsTd.appendChild(editBtn);
      actionsTd.appendChild(deleteBtn);

      tr.appendChild(titleTd);
      tr.appendChild(authorTd);
      tr.appendChild(actionsTd);

      tbody.appendChild(tr);
    });

  } catch (error) {
    alert(error.message);
  }
}

function onEdit(id, book) {
  editId = id;
  form.querySelector('h3').textContent = 'Edit FORM';
  form.title.value = book.title;
  form.author.value = book.author;
  form.querySelector('button').textContent = 'Save';
}

async function onDelete(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete book');
    loadBooks(); // reload books after delete
  } catch (error) {
    alert(error.message);
  }
}

async function onSubmit(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title === '' || author === '') {
    alert('Both title and author fields are required!');
    return;
  }

  const bookData = { title, author };

  try {
    if (editId) {
      // Update existing book
      const res = await fetch(`${BASE_URL}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      if (!res.ok) throw new Error('Failed to update book');
      editId = null;
      form.querySelector('h3').textContent = 'FORM';
      form.querySelector('button').textContent = 'Submit';

    } else {
      // Create new book
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      if (!res.ok) throw new Error('Failed to create book');
    }

    form.reset();
    loadBooks();

  } catch (error) {
    alert(error.message);
  }
}
