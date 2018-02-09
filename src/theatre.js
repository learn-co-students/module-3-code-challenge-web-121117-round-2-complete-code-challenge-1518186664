class Theatre {
  constructor({id, name, showings}) {
    this.id = id
    this.name = name
    this.showings = showings
    
  }

  render() {
    return `<div class="card">
      <div class="content">
        <div class="header">
          ${this.showings.film.title}
        </div>
        <div class="meta">
          ${this.showings.film.runtime} minutes
        </div>
        <div class="description">
          <span class="ui label">
            (Showtime)
          </span>
          (Num Tickets) remaining tickets
        </div>
      </div>
      <div class="extra content">
        <div class="ui blue button">Buy Ticket</div>
      </div>
    </div>`
  }
}
