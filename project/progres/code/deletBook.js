async function deletBook(bookID) {
     const result = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${bookID}`, {
          method: 'DELETE'
     })
     setInterval(() => {
          location.replace('books.html')
     },1000)
}

















































let modal = ` <div class="modal fade" id="confirmDeleteBookModal" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Confirm Delete</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p><b>Are you sure you wish to delete this book?</b></p>
            <br />
            <p id="isbn"></p>
            <p id="title"></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
            <input type="hidden" id="bookId">
            <button id="deleteModalBtnYes" onclick="deletebook(bookId)" type="button" data-dismiss="modal" class="btn btn-primary">Yes</button>
        </div>
    </div>
</div>
</div>`


function deletebook(bookId) {
     //let displydelete = document.getElementById("confirmDeleteBookModal")
     outlet.innerHTML = modal + mytable + output;
     $('#confirmDeleteBookModal').on('show.bs.modal', function (event) {
          bookId = $(event.relatedTarget).data('bookid');
          //alert(bookId)
          let isbn = $(event.relatedTarget).data('bookisbn');
          let title = $(event.relatedTarget).data('booktitle');
          $(this).find('.modal-body #isbn').text("Isbn: " + isbn);
          $(this).find('.modal-body #title').text("Book title: " + title);
          $('#deleteModalBtnYes').click(async function () {
               await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${bookId}`, {
                    method: "delete"

               })
               let disp = document.getElementById("btdisplay");
               disp.style.display = "block";
               setTimeout(_ => {
                    fetchbook()
               }, 2000)
               disp.style.display = "block";
          })
     })

}