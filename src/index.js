document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    const theatreId = 1;
    const baseURL = `https://evening-plateau-54365.herokuapp.com/theatres/1`

    const shows = document.getElementsByClassName('showings')[0]
    function getData() {
      fetch(baseURL).then(res => res.json()).then(res => {
      const theatre = new Theatre(res)

        theatre.showings.forEach(show => {

          shows.innerHTML += `<div class="card">
          <div class="content">
            <div class="header">
              ${show.film.title}
            </div>
            <div class="meta">
              ${show.film.runtime} minutes
            </div>
            <div class="description">
              <span class="ui label">
                ${show.showtime}
              </span>
              <span id="ticketsLeft">${show.tickets_sold}<span> remaining tickets
            </div>
          </div>
          <div class="extra content">
            <div onclick"decrementTickets()" class="ui blue button">Buy Ticket</div>
          </div>
        </div>`
        })
      })
    }
    getData()

    let buyTicket =  document.getElementById('buy_ticket')
    let ticketsLeft = document.getElementById('ticketsLeft')
    console.log(ticketsLeft);


    function decrementTickets() {
      console.log("got it1");
    }

    function createTicket(showId) {
      fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json'
        },
        body: JSON.stringify({
          showing_id: showId
        })
      }).then(res => res.json())
    }




    //
    // POST `https://evening-plateau-54365.herokuapp.com/tickets`
    //
    // ```
    // Required Headers
    // {
    //   'Content-Type': 'application/json',
    //   Accepts: 'application/json'
    // }
    //
    // Required Keys
    // (in body of request - must be stringified)
    // {
    //   showing_id: <add showing_id here>
    // }






  });
