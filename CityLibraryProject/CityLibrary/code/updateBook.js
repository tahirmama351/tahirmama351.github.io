async function editBookForm(bookid) {
    // console.log(`tahir`)
    $('.jumbotron').html(`
    <div id="container">
     <div id="main">
          <ul>
               <li><a class="active" href="#home">The CityLibrary<sup>&reg</sup> ::: a CS418 WebApp Project</a></li>
               <li><a href="books.html">Books</a></li>
               <li><a href="vertualTour.html">Vertual tuor</a></li>
               <li><a href="aboutUs.html">About us</a></li>
               <li style="float:right"><a href="welcomeGuest.html">Welcome, Guest</a></li>
          </ul>
 
          <form onsubmit="updatebookform(${bookid})" id="bookform">              
                    <div id="reset" class="container">                  

                    <legend>Edit Book on this form</legend>
                    <div class="text-center col-md-12">
                         <span class="alert alert-dismissible alert-success align-items-lg-center"
                              id="succesalert" style="display:none" role="alert">
                              <strong>Congra! You Updated a book</strong>
                         </span>
                    </div>

                        <div class="col-md-16 mb-3">
                            <label for="exampl">*required form fields</label><br>
                            <label for="title">*Book Titles</label>
                            <input type="text" class="form-control" id="booktitle" aria-describedby="titleHelp"
                                placeholder="Enter Titles" required>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">

                                <label for="isbn">*ISBN</label>
                                <input type="isbn" class="form-control" id="isbn" aria-describedby="isbnHelp"
                                    placeholder="Enter isbn" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="Overdue">*Overdue per Pay</label>
                                <input type="text" class="form-control" id="overduefee" aria-describedby="OverduebnHelp"
                                    placeholder="Enter Overdue " required>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">

                                <label for="Publisher">*Publisher</label>
                                <input type="text" class="form-control" id="publisher"
                                    aria-describedby="PublisherbnHelp" placeholder="Enter Publisher" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="date">*Date Published</label>
                               
                                    <input class="form-control " type="date"
                                    placeholder="MM-DD-YYYY" id="publisheddata" required>
                            </div>
                        </div>
                        <div>
                            <span style="float:right;">

                                <div class="btn-group" role="group" aria-label="Third group">
                                <button type="submit" style="float: right;" id="button">Update book</button>
                                </div>
                            </span>
                        </div>
                    </div>
                </form>
     </div>
 </div>    
`)

    this.event.preventDefault();
    let response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/get/${bookid}`)
    let result = await response.json();

    document.getElementById("booktitle").value = result["title"];
    document.getElementById("isbn").value = result["isbn"];
    document.getElementById("overduefee").value = result["overdueFee"];
    document.getElementById("publisher").value = result["publisher"];
    document.getElementById("publisheddata").value = result["datePublished"];
}
async function updatebookform(bookid) {
    this.event.preventDefault();
    isbn = document.getElementById("isbn").value
    title = document.getElementById("booktitle").value
    overdueFee = document.getElementById("overduefee").value
    publisher = document.getElementById("publisher").value
    datePublished = document.getElementById("publisheddata").value

    try {
        fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${bookid}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "bookId": `${bookid}`,
                "isbn": `${isbn}`,
                "title": `${title}`,
                "overdueFee": `${overdueFee}`,
                "publisher": `${publisher}`,
                "datePublished": `${datePublished}`
            })
        })

        $('#succesalert').fadeIn(1000)
        setTimeout(function () {
            $('#succesalert').fadeOut(1000);
            books();
            history.pushState({ page: "editBook", bookid: bookid }, "", "editBook")
        }, 2000);
    } catch (error) {
        alert(error)
    }
    setTimeout(_ => {
        location.reload('books.html')
    }, 1000)
}