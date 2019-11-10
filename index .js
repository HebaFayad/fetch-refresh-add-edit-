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
