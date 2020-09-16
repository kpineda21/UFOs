// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html('');

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

var filters = {};

function updateFilters() {

  let date = d3.select("#datetime");
  let city = d3.select("#city");
  let state = d3.select("#state");
  let country = d3.select("#country");
  let shape = d3.select("#shape");

  let inputs = [date, city, state, country, shape];

  for (let i = 0; i < inputs.length; i++) {
    let value = inputs[i].property("value");
    let id = inputs[i].attr("id");
    if (value) {
      filters[id] = value
    } else {
      delete filters[id];
    }

  }

  console.log(filters);
  filterTable();
} 

function filterTable() {

  let filteredData = tableData;

  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.select("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
