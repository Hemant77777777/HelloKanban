import React from 'react';

function TicketCard({ ticket }) {

  return (
    <div className="ticket-card">

      <p>This is card</p>
      <div className ="heading">
      <h4>{ticket.title}</h4>
      <img src = "Screenshot (99).png"/>
      </div>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
    </div>
  );
}

export default TicketCard;
