//Get post Section
let refresh = document.getElementById("refresh");
let tbody = document.querySelector("tbody");

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(function(data) {
       // console.log(data);
        data.forEach(element => {
       // console.log(element);
       let tr = document.createElement("tr");

    for (const key in element) {
         if (element.hasOwnProperty(key)) {
         const elements = element[key];
       //  console.log(elements);
          let td = document.createElement("td");

            td.innerHTML = elements;
            tbody.appendChild(tr);
            tr.appendChild(td);


 }
}
});
})

    refresh.addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(function(data) {
    console.log(data);
    data.forEach(element => {
   // console.log(element);
    for (const key in element) {
    if (element.hasOwnProperty(key)) {
    const elements = element[key];
    // console.log(elements);
}

}
});
})

        });

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
    try{
let id=document.getElementById("id").value;    
let userId2=document.getElementById("userId2").value;
let fbody2=document.getElementById('fbody2').value;
let title2=document.getElementById('title2').value;
let error=document.querySelector('span');
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
.then(function(data) {
    console.log(data);
    
    error.innerHTML = `**Changed data of ${id} successfully`;
})
} catch (error) {

error.innerHTML = `**Changing data of ${id} was not successfu`;


}

})