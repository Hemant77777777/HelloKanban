import React from 'react';
import DoneIcon from './Done.svg';

function KanbanBoard({ tickets, groupingOption, sortingOption }) {
  // Group tickets based on the selected option
  const groupTickets = () => {
    switch (groupingOption) {
      case 'status':
        return groupBy(tickets, 'status');
      case 'user':
        return groupBy(tickets, 'user');
      case 'priority':
        return groupBy(tickets, 'priority');
      default:
        return tickets;
    }
  };

  // Function to group tickets by a given key (status, user, priority)
  const groupBy = (tickets, key) => {
    return tickets.reduce((acc, ticket) => {
      const groupKey = ticket[key] || 'No ' + key; // Fallback for missing values
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(ticket);
      return acc;
    }, {});
  };

  // Sort tickets based on the selected sorting option
  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sortingOption === 'priority') {
        return b.priority - a.priority; // Descending order for priority
      }
      return a.title.localeCompare(b.title); // Ascending order for title
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-group">
          <h3>{group}</h3>
          {sortTickets(groupedTickets[group]).map((ticket) => (
            <div key={ticket.id} className="ticket-card">
          
              <div className="heading">
              <h4>{ticket.title}</h4>
              <img src={DoneIcon} alt="react"/>
              </div>

            
              {/* <p>Status: {ticket.status}</p>
              <p>User: {ticket.user}</p>
              <p>Priority: {ticket.priority}</p> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
