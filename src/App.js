import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayOptions from './components/DisplayOptions';
import TicketCard from './components/TicketCard';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  // Fetch tickets from the API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      // .then((data) => console.log(data.tickets))
      .catch((error) => console.error('Error fetching tickets:', error));
  }, []);

  // Save and load the grouping and sorting options from localStorage
  useEffect(() => {
    const savedGrouping = localStorage.getItem('groupingOption');
    const savedSorting = localStorage.getItem('sortingOption');
    if (savedGrouping) setGroupingOption(savedGrouping);
    if (savedSorting) setSortingOption(savedSorting);
  }, []);

  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortingOption', sortingOption);
  }, [groupingOption, sortingOption]);

  return (
    <div className="App">
      {/* <h1>Kanban Board</h1> */}
      <DisplayOptions
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />
      <KanbanBoard tickets={tickets} groupingOption={groupingOption} sortingOption={sortingOption} />
      {/* <TicketCard ticket = {tickets} groupingOption ={groupingOption} sortingOption = {sortingOption}/> */}
    </div>
  );
}

export default App;
