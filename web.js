// JavaScript to show an alert message when the button is clicked
document.getElementById('messageButton').addEventListener('click', function() {
  alert("Thank you for your interest! We aim to promote reading culture in our community.");
});

// Complete list of books with known authors where available
const books = [
  { title: "Karnali Blues", author: "Buddhisagar" },
  { title: "Doshi Chasma", author: "B.P. Koirala" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini" },
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Seto Dharti", author: "Amar Neupane" },
  { title: "Jhola", author: "Krishna Dharabasi" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Man's Search for Meaning", author: "Viktor Frankl" },
  { title: "Who Moved My Cheese?", author: "Spencer Johnson" },
  { title: "Siddhartha", author: "Hermann Hesse" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { title: "Gitanjali", author: "Rabindranath Tagore" },
  { title: "The Good Earth", author: "Pearl S. Buck" },
  { title: "Phirphire", author: "Buddhisagar" },
  { title: "Khushi", author: "Bijaya Kumar Pandey" },
  { title: "Saya", author: "Subin Bhattarai" },
  { title: "Paniko Gham", author: "Nayan Raj Pandey" },
  { title: "Lajja", author: "Taslima Nasrin" },
  { title: "Musa Manus" },
  { title: "Brahmaputraka Cheuchauma" },
  { title: "Sambandaharu" },
  { title: "Mohapath" },
  { title: "Bikendrikaran ra Bikas" },
  { title: "Hamro Lok Khata" },
  { title: "Prem ra Mrityu" },
  { title: "Ani" },
  { title: "Bangatinga Dharsahaura" },
  { title: "Microsoft Dekhi Bahun Dada Samma" },
  { title: "Tyo Nepal" },
  { title: "Afnai Aakhako Laayma" },
  { title: "Maile Dekheko Darbar" },
  { title: "Yar" },
  { title: "Ek Chihan" },
  { title: "Swet Bhairabi" },
  { title: "Modi Aain" },
  { title: "Narendra Dai" },
  { title: "Tin Ghumti", author: "B.P. Koirala" },
  { title: "Babu Aama ra Chora" },
  { title: "Chirharan" },
  { title: "Jail Journal", author: "B.P. Koirala" },
  { title: "Jatiharuko Utpathi" },
  { title: "Soch" },
  { title: "Badlido Nepali Samaj" },
  { title: "Warren Buffet" },
  { title: "Lee Yun Yuw" },
  { title: "Ghanchakker" },
  { title: "Kalyani Dharti" },
  { title: "Ishwarko" },
  { title: "Socrates ko Aatma Katha" },
  { title: "Jiban Khadaki Phool" },
  { title: "Ghamka Pailaharu" },
  { title: "Chakrabumba Chandra Surya" },
  { title: "Naya Saddako Geet" },
  { title: "Pandulipi" },
  { title: "Aina" },
  { title: "Tarun Tapaswi" },
  { title: "Karagar" },
  { title: "Aagonera Ubiyeko Manxe" },
  { title: "Dwandako Awasan" },
  { title: "Malala" },
  { title: "Rahasya" },
  { title: "Kirat Itihas" },
  { title: "Kattel Chirko Chotpatak" },
  { title: "Dhupi Salla ra Laliguras ko Fedma" },
  { title: "Aba Yesto Kaile Nahos" },
  { title: "Kathmandu ma Ek Din" },
  { title: "Urgenko Ghoda" },
  { title: "Mahako Ma" },
  { title: "Damini Veer" },
  { title: "Antarmako Yatra" },
  { title: "Nepal Hindu Adirajyako Ithihas" },
  { title: "Alikhit" },
  { title: "Muluk Baira" },
  { title: "Gamkiri" },
  { title: "Sallipir" },
  { title: "Hamro Bansa" },
  { title: "Karadau Kasturi" },
  { title: "Lu" },
  { title: "Ullar" },
  { title: "Monsoon" },
  { title: "Summer Love", author: "Subin Bhattarai" },
  { title: "Khana Pugos Dina Pugos" },
  { title: "Nepalka Jatiya Sanskar 1, 2, 3, 4" },
  { title: "Jeen Katha" },
  { title: "Khukura Palan" },
  { title: "Bhakra Palan" },
  { title: "Byabasahik Tarkari Kheti" },
  { title: "Khalangama Hamala" },
  { title: "Phoolkoakaham" },
  { title: "Ghatmandu" },
  { title: "Saya", author: "Subin Bhattarai" },
  { title: "Naaso" },
  { title: "Sajha Katha" },
  { title: "Chuteka Anuhar" },
];

// Function to display the books
function displayBooks(filteredBooks) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ""; // Clear current list

  // If there are no results
  if (filteredBooks.length === 0) {
      bookList.innerHTML = "<li>No results found</li>";
      return;
  }

  // Create an li element for each book
  filteredBooks.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book.author ? `${book.title} by ${book.author}` : book.title;
      bookList.appendChild(li);
  });
}

// Function to filter books based on search input
function searchBooks() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const bookList = document.getElementById("bookList");

  // Show the list only if there is input
  if (searchInput.trim() !== "") {
      bookList.classList.remove("hidden"); // Show the book list
      const filteredBooks = books.filter(book =>
          book.title.toLowerCase().includes(searchInput) || 
          (book.author && book.author.toLowerCase().includes(searchInput))
      );
      displayBooks(filteredBooks);
  } else {
      bookList.classList.add("hidden"); // Hide the book list if input is empty
  }
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", searchBooks);
