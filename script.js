function insert_Row() {
    var table = document.getElementById("sampleTable");
    var newRow = table.insertRow(0); // Adds the row at the top of the table
    
    // Insert new cells into the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Fill the new cells with content
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
	
  
}
