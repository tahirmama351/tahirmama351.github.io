
let newBook = document.getElementById("save");
if (newBook) {
    newBook.addEventListener("click", addBook);
}
async function addBook() {

    let Title = document.getElementById("title").value;
    let Isbn = document.getElementById("isbn").value;
    let publisher = document.getElementById("publisher").value;
    let overdueFee = Number(document.getElementById("Overdue").value);
    let datePublished = document.getElementById("date").value;

    let data = {

        "isbn": Isbn,
        "title": Title,
        "overdueFee": overdueFee,
        "publisher": publisher,
        "datePublished": datePublished
    }

    const resp = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    let display = document.getElementById("add");
    display.innerHTML = "Book is successfilly Added"

    setTimeout(_ => {
        location.replace("addBook.html")
    }, 2000)

};




