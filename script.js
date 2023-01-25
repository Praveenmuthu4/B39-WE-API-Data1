const itemsList = document.getElementById("items-list");

fetch("https://cat-fact.herokuapp.com/facts")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const newItem = document.createElement("div");
      newItem.innerHTML = `
        <h3>${item.type}</h3>
        <p>${item.text}</p>
        <p>${item.user}</p>
      `;
      itemsList.appendChild(newItem);
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
