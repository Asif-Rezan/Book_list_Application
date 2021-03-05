const title=document.querySelector('#titleId');
const author=document.querySelector('#authorId');
const year=document.querySelector('#yearId');
const button=document.querySelector('.btn');
const bookList=document.querySelector('#book-list');


button.addEventListener('click',function(e){
  e.preventDefault();
  
  if(title.value=='' || author.value=='' || year.value=='')
  {
    alert("Input field should not be empty");
  }

  else{
    const newRow=document.createElement('tr');

    const newTitle=document.createElement('td');
    newTitle.innerHTML=title.value;
    newRow.appendChild(newTitle);

    const newYear=document.createElement('td');
    newYear.innerHTML=year.value;
    newRow.appendChild(newYear);

    const newAuthor=document.createElement('td');
    newAuthor.innerHTML=author.value;
    newRow.appendChild(newAuthor);

    

    bookList.appendChild(newRow);

    title.value='';
    author.value='';
    year.value='';





  }




});
