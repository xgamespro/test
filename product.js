let price = document.querySelector('.price')

let imgs = document.querySelector('.imgs')
let name1 = document.querySelector('.name')
let buys = document.querySelector('.buys')




window.onload = setTimeout(() => {

    let d = document.querySelector(".d");
    let loading2 = document.querySelector(".loading2");
    d.remove();
    loading2.remove();


}, 400);

let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.location.href = "index.html";

});

let Home = document.querySelector(".Home");
Home.addEventListener("click", () => {
    window.location.href = "index.html";

});

let about = document.querySelector(".about");
about.addEventListener("click", () => {
    window.location.href = "about.html";

});

let Our = document.querySelector(".Our");
Our.addEventListener("click", () => {
    window.location.href = "Our.html";

});

let Shop = document.querySelector(".Shop");
Shop.addEventListener("click", () => {
    window.location.href = "Shop.html";

});

let Content = document.querySelector(".Content");
Content.addEventListener("click", () => {
    window.location.href = "Content.html";

});



let login = document.querySelector(".login");
login.addEventListener("click", () => {
    window.location.href = "Login.html";

});

let Register = document.querySelector(".Register");
Register.addEventListener("click", () => {
    window.location.href = "Register.html";

});





fetch("data.json")
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        data.forEach(element => {
            if (window.location.hash == `#${element.id}`) {
                price.innerHTML = `$${element.price}`
                imgs.innerHTML = `<img src="${element.link}" alt="" class="bigone">`
                name1.innerHTML = `${element.name}`
            }
        });
    });


buys.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, buy it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'buy!',
                'Your product buy now.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your Cancelled this product :)',
                'error'
            )
        }
    })

});