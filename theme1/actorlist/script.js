fetch("actors.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    actorsList(data);
  });
function actorsList(data) {
  data.forEach(showActors);
}

function showActors(product) {
  console.log(product);

  const template = document.querySelector("#template1").content;
  //copy content
  const copy = template.cloneNode(true);

  copy.querySelector(".popup").textContent = product.fullname;
  copy.querySelector("#id01").textContent = product.movie;

  //grap parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}

var modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
