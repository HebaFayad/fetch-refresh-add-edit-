//Add Section
let btn=document.getElementById('add');
btn.addEventListener("click",function(){
let userId=document.getElementById("userId").value;
let fbody=document.getElementById('fbody').value;
let title=document.getElementById('title').value;
  //  console.log(fuserId.value)

fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
  title: title,
  body: fbody,
  userId: userId
}),
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json))
})

//Edit Section
let edit=document.getElementById('edit');
edit.addEventListener("click",function(){
let id=document.getElementById("id").value;    
let userId2=document.getElementById("userId2").value;
let fbody2=document.getElementById('fbody2').value;
let title2=document.getElementById('title2').value;
  //  console.log(fuserId.value)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
method: 'PUT',
body: JSON.stringify({
  title: title2,
  body: fbody2,
  userId: userId2
}),
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json))
})