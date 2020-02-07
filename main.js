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

    clone.querySelector("h3").textContent = dishes.name;
    clone.querySelector("h3").textContent = dishes.shortdescription;
    clone.querySelector("h4").textContent = dishes.longdescription;

    const parent = document.querySelector("main");
    parent.appendChild(clone)
}
