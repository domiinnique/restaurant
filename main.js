fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function(response) {
    return response.json()
})
      .then(function (data){
    showData(data)
})

      function showData(jsonData) {
    jsonData.forEach(showDishes)
    console.log(jsonData)
}

function showDishes(dishes){

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector("h").textContent = dishes.id;
    clone.querySelector("h2").textContent = dishes.category;
    clone.querySelector("h3").textContent = dishes.name;
    clone.querySelector("h4").textContent = dishes.shortdescription;


    clone.querySelector(".discount").textContent = dishes.discount;
clone.querySelector("h5").textContent = dishes.price;

    const parent = document.querySelector("main");
    parent.appendChild(clone)
}
