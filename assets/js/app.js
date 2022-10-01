// _____

// Variables and constants
// _____

// Create a reference to the data from data.js; note that "data" is also the array that stores data in the data.js file
const tableData = data;

// Get table reference
var tbody = d3.select("tbody");

// 1. Create a variable to keep track of all the filters as an object
var filters = {};

// _____

// Functions
// _____

// Define a function for building the table
function buildTable(data) {
  // Clear out any existing data in the table (so that we don't have duplicate entries in the table)
  tbody.html("");

  // Next, loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 3. Use this function to update the filters
function updateFilters() {
  // 4a. Save the element that was changed as a variable
  let changedelement = d3.select(this);

  // 4b. Save the value that was changed as a variable
  let elementvalue = changedelement.property("value");
  
  // 4c. Save the id of the filter that was changed as a variable
  let filterId = changedelement.attr("id");

  // 5. If a filter value was entered then add that filterId and value to the filters list; otherwise, clear that filter from the filters object
  if (elementvalue) {
    filters[filterId] = elementvalue;
    console.log(filters);
  }
  else {
    delete filters[filterId];
  }

  // 6. Call function to apply all filters and rebuild the table
  filterTable();  
}
  
// 7. Use this function to filter the table when data is entered
function filterTable() {

  // 8. Set the filtered data to the tableData
  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that matches the filter values in the variable created in Step 8
  Object.entries(filters).forEach(([key, value]) => { filteredData= filteredData.filter( row => row[key] === value)});

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// _____

// Event listeners
// _____
  
// 2. Attach an event to listen for changes to each filter
d3.selectAll('input').on("change", updateFilters);

// _____

// Script
// _____
  
// Build the table when the page loads
buildTable(tableData);