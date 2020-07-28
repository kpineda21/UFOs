// import the data from data.js
const tableDate = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // first. clear out any existing data
    tbody.html("");
    //next loop through each object 
    // and append a row and cells for each value
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the datarow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}