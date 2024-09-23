// import React, { useState } from 'react';

// function DisplayOptions({ groupingOption, setGroupingOption, sortingOption, setSortingOption }) {
//   const [localGrouping, setLocalGrouping] = useState(groupingOption);
//   const [localSorting, setLocalSorting] = useState(sortingOption);

//   // Handle the "Display" button click
//   const handleDisplay = () => {
//     setGroupingOption(localGrouping); // Set grouping based on user selection
//     setSortingOption(localSorting);   // Set sorting based on user selection
//   };

//   return (
//     <div className="display-options">
//       {/* <h3>Group by:</h3> */}
//       <select value={localGrouping} onChange={(e) => setLocalGrouping(e.target.value)}>
//         <option value="status">Status</option>
//         <option value="user">User</option>
//         <option value="priority">Priority</option>
//       </select>

//       <h3>Sort by:</h3>
//       <select value={localSorting} onChange={(e) => setLocalSorting(e.target.value)}>
//         <option value="priority">Priority</option>
//         <option value="title">Title</option>
//       </select>

//       <button onClick={handleDisplay}>Display</button>
//     </div>
//   );
// }

// export default DisplayOptions;







import React, { useState } from 'react';

function DisplayOptions({ groupingOption, setGroupingOption }) {
  const [showDropdown, setShowDropdown] = useState(false); // Toggle to show/hide dropdown
  const [localGrouping, setLocalGrouping] = useState(groupingOption);

  // Handle the "Display" button click
  const handleDisplay = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown visibility on each click
  };

  const handleApply = () => {
    setGroupingOption(localGrouping); // Apply the selected grouping option
    setShowDropdown(false); // Hide the dropdown after applying
  };

  return (
    <div className="display-options">
      {/* Initially only the "Display" button is visible */}
      <button className= "btn" onClick={handleDisplay}>
        {showDropdown ? 'Hide Options' : 'Display'} {/* Toggle button label */}
      </button>

      {/* When the button is clicked, show or hide the dropdown */}
      {showDropdown && (
        <>
          <select className = "btn" value={localGrouping} onChange={(e) => setLocalGrouping(e.target.value)}>
            <option className = "btn" value="status">Status</option>
            <option className = "btn" value="user">User</option>
            <option className = "btn" value="priority">Priority</option>
          </select>

          <button className="btn" onClick={handleApply}>Apply</button>
        </>
      )}
    </div>
  );
}

export default DisplayOptions;
