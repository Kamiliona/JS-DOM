document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const catalogueListItem = createCatalogueListItem(event.target);
    const catalogueList = document.querySelector('#catalogue-list');
    catalogueList.appendChild(catalogueListItem);
  
    event.target.reset();
  }
  
  const createCatalogueListItem = function (form) {
    const catalogueListItem = document.createElement('li');
    catalogueListItem.classList.add('catalogue-list-item');
  
    const title = document.createElement('h1');
    title.textContent = form.title.value;
    catalogueListItem.appendChild(title);
  
    const author = document.createElement('h2');
    author.textContent = form.author.value;
    catalogueListItem.appendChild(author);
  
    const category = document.createElement('p');
    category.textContent = form.category.value;
    catalogueListItem.appendChild(category);
  
    return catalogueListItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const catalogueList = document.querySelector('#catalogue-list');
    catalogueList.innerHTML = '';
  }
  