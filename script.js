var dateHTML = '<option>Select a date</option>';
for (var i = 1; i <= 31; i++ ) {
    dateHTML += `<option>${i}</option>`;
}
document.getElementById('date').innerHTML = dateHTML;

var monthHTML = '<option>Select a month</option>';
for (var i = 1; i <= 12; i++ ) {
    monthHTML += `<option>${i}</option>`;
}
document.getElementById('month').innerHTML = monthHTML;

var yearHTML = '<option>Select a year</option>';
for (var i = 1990; i <= new Date().getFullYear(); i++ ) {
    yearHTML += `<option>${i}</option>`;
}
document.getElementById('year').innerHTML = yearHTML;
