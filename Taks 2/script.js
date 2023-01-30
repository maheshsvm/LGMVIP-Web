let info = async () =>{
    let p = fetch('https://reqres.in/api/users?page=1');
    let response = await p;
    let result = response.json();
    return result;
}


//get data
let getDataButton = document.getElementById('getDataButton');
getDataButton.addEventListener('click' ,  async () =>{
    let dataObject =  await info();
    console.log(dataObject.data)
    let container = document.getElementById('container')
    container.innerHTML = ''
    let data = dataObject.data;
    (data).forEach(element => {
        container.innerHTML += `<div class="card my-3" style="width: 18rem;">
        <img src="${element.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.first_name + " " + element.last_name}</h5>
          <p class="card-text">${element.email}</p>
        </div>
      </div>`
    });
})

//clear data
let clearDataButton = document.getElementById('clearDataButton');
clearDataButton.addEventListener('click' , () =>{
    let container = document.getElementById('container')
    container.innerHTML = ''
})