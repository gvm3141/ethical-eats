function changeTable() {
  const table = document.querySelector('.alternative_table');

  const rows = document.querySelectorAll('tr');
  const rowsArray = Array.from(rows);
  const rowIndex = rowsArray.findIndex(row => row.contains(event.target));

  const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));

  table.rows[rowIndex].cells[0].innerHTML = table.rows[rowIndex].cells[1].getElementsByTagName("select")[0].value;
}