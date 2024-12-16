document.addEventListener("DOMContentLoaded", () => {
  // Handle the search bar input for filtering cards
  const searchBar = document.querySelector("#search-bar"); // Ensure ID matches your input element
  const cards = document.querySelectorAll(".card");

  searchBar.addEventListener("input", () => {
    const filter = searchBar.value.toLowerCase().trim();
    let hasMatch = false; // To check if any card matches the search

    cards.forEach((card) => {
      const categories = card.getAttribute("data-category").toLowerCase();
      if (categories.includes(filter)) {
        card.style.display = "block"; // Show matching cards
        hasMatch = true;
      } else {
        card.style.display = "none"; // Hide non-matching cards
      }
    });

    // Hide the cards section if no match is found and search is non-empty
    const cardsContainer = document.querySelector(".cards-container");
    if (!hasMatch && filter !== "") {
      cardsContainer.style.display = "none";
    } else {
      cardsContainer.style.display = "grid"; // Display grid if matches are found
    }
  });
});

// Function to show specific sections
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
  }
}

// Functionality for the search bar
function search() {
  const searchInput = document.querySelector("#search-bar").value.trim();
  if (searchInput) {
    alert(`You searched for: ${searchInput}`);
  } else {
    alert("Please enter a valid search query.");
  }
}

function clearSearch() {
  const searchBar = document.querySelector("#search-bar");
  searchBar.value = ""; // Clear the input field
  searchBar.dispatchEvent(new Event("input")); // Trigger input event to reset card visibility
}
