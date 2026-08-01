// Search Food Item by ID — QuickBite Project

let items = JSON.parse(localStorage.getItem("items")) || [];

function renderItems() {
  const tbody = document.getElementById("itemTableBody");
  tbody.innerHTML = "";

  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>₹${item.price}</td>
    `;
    tbody.appendChild(row);
  });
}

function searchItem() {
  const searchId = document.getElementById("searchId").value.trim();
  const resultBox = document.getElementById("searchResult");

  if (!searchId) {
    resultBox.textContent = "Please enter an Item ID to search.";
    resultBox.style.color = "orange";
    return;
  }

  const foundItem = items.find((item) => item.id === searchId);

  if (foundItem) {
    resultBox.textContent = `Found: ${foundItem.name} (${foundItem.category}) — ₹${foundItem.price}`;
    resultBox.style.color = "#2e7d32";
  } else {
    resultBox.textContent = `No food item found with ID "${searchId}".`;
    resultBox.style.color = "#c62828";
  }
}

renderItems();