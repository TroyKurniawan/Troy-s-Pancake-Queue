// GLOBALS ========================================================

// Get input text element
let name = document.getElementById("nameInput");
let comment = document.getElementById("commentInput");

// Counter for table
let counter = 1;
let numberOfRows = 1;

// FUNCTIONS ======================================================

// Enter Button
function enterButton()
{
    console.log("Enter Button Pressed");

    // Get time
    var time = new Date();
    // If the minute is less than 10, add a 0 to the time (eg. 5 minutes = 05)
    if(time.getMinutes() < 10)
    {
        var time = time.getHours() + ":0" + time.getMinutes();
    }
    // Otherwise, concatenate the time
    else
    {
        var time = time.getHours() + ":" + time.getMinutes();
    }

    // Get the input values
    personName = document.getElementById("nameInput");        // Get nameInput element
    personName = personName.value;                                  // Get actual name
    comment = document.getElementById("commentInput");  // Get commentInput element
    comment = comment.value;                            // Get actual name
    console.log(personName + ", " + comment);

    // Get table element
    let table = document.getElementById("queueTable"); 

    // Check if at least a name has been added
    let valid = (personName !== "" ? true : false);

    // As long as we have at least a name
    if(valid)
    {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);      // Number
        var cell2 = row.insertCell(1);      // Name
        var cell3 = row.insertCell(2);      // Comment
        var cell4 = row.insertCell(3);      // Time
        var cell5 = row.insertCell(4);      // Check
    
        // Add text to the new cells:
        cell1.innerHTML = counter;
        cell2.innerHTML = personName;
        cell3.innerHTML = comment;
        cell4.innerHTML = time;
        cell5.innerHTML = "";

        // Counter used for removing members
        let currentCount = counter;
    
        // EventListeners
        row.addEventListener('click', () => clickRow(cell5));
        row.addEventListener('dblclick', () => removeRow(cell2.innerHTML, currentCount));
    
        // Increment counter
        counter++;
        numberOfRows++;
    }
    else
    {
        alert("go to hell \n- Evan");
    }

    // Erase input field after pressing enter
    personName = document.getElementById("nameInput").value = "";
    comment = document.getElementById("commentInput").value = "";
}

// Click function to add "DONE" to the row
function clickRow(cell5)
{
    console.log("CHECK");
    if(cell5.innerHTML != "DONE")
    {
        cell5.innerHTML = "DONE";
        cell5.style.color = "limegreen";
    }
    else
    {
        cell5.innerHTML = "";
    }
}

// Enables the sidebar button functionality
function toggleSidebar()
{
    document.getElementById("infoSidebar").classList.toggle('active');
}

// Remove a row from the table
function removeRow(personName, number)
{
    console.log("Searching for: " + personName + ", " + number);

    // Get table element
    let table = document.getElementById("queueTable"); 
    
    // Iterate through the entire table
    for(var i=1; i<numberOfRows; i++)
    {
        // If the name and counter matches, remove
        if((table.rows[i].cells[1].innerHTML == personName) && (table.rows[i].cells[0].innerHTML == number))
        {
            table.deleteRow(i);
            console.log("REMOVED");
            break;
        }
    }
    numberOfRows--;
}

// EVENT LISTENERS ================================================

name.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      enterButton();
    }
});

comment.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      enterButton();
    }
});