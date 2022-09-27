
const apiUrl = 'https://randomuser.me/api/?results=20';

const displayElm = document.getElementById("first");

const fetchUsers=()=> {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            display(data.results);
        })
        .catch((error) => {
            console.log(error);
        });

}

const display = (users) => {
    let str = ""

    console.log(users);
    
    users.map((item, i) =>{
        str += 
        `
        <div class="card mt-2" style="width: 300rem;">
            <img src="${item.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">
            ${item.name.title} ${item.name.first} ${item.name.last}
        </h5>
        <p class="card-text">
            <ul clas="list-unstyled">
            <li><i class="fa-solid fa-envelope"> ${item.email}</i></li>
            <li><i class="fa-solid fa-calendar-days"> ${item.dob.date}</i></li>
            <li><i class="fa-solid fa-phone"> ${item.phone}</i></li>
            <li><i class="fa-solid fa-house"> ${item.location.city} ${item.location.country} ${item.location.postcode} ${item.location.state}</i></li>
            </ul>
        </p>
        </div>
        </div>
        `
       
    })

    displayElm.innerHTML = str;
    
}

fetchUsers();

const handleOnSearch = (e) =>{
    console.log(e.value);
    const str = e.value;

    const filteredUser = iserList.filter((item) => {
        const userName = item.name.first + item.name.last;

        return userName.toLowerCase().includes(str.toLowerCase());
    });
    display(filteredUser)
}