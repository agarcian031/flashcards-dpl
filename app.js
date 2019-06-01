$(document).ready(function () {
const add_card = $('#add-card'); 


  $('#flipcard').click( () => {
    $('#flipcard').toggleClass('flipped');
  });


  // Add a card 
  add_card.click(() => {
      $(".cards").append(`
      <div class="card-container">
      <div class="container">
        <div id="flipcard">
          <div class="front">
            <h2>Question</h2>
          </div>
          <div class="back">
            <p>Answer</p>
          </div>
        </div>
        <div id="button-group">
          <button id="edit-card" class="btn">Edit Card</button>
          <button id="delete-card" class="btn">Delete Card</button>
        </div>
      </div>
    </div>
      `);
    newCard(); 
  }); 

  // Fill in the data for new card 
const newCard = () => {
  alert("worked!")
}


  // Edit cards



  //Delete a card 




});