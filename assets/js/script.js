var timeDisplayEl = $('#time-display');
var saveBtnEl = $('#save-btn')
var textAreaEl = $('#text-area')



function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

$('.saveBtn').on('click', function(){
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

localStorage.setItem(time, value);


})

displayTime();
setInterval(displayTime, 1000);

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-1 .description').val(localStorage.getItem('hour-1'));
$('#hour-2 .description').val(localStorage.getItem('hour-2'));
$('#hour-3 .description').val(localStorage.getItem('hour-3'));
$('#hour-4 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));

var currentTime = dayjs().hour()

$('.time-block').each(function(){
  var hour = $(this).val()
  if (hour == currentTime){
    $(this).val().addClass("present")
  } else if (hour < currentTime) {
    $(this).val().addClass("past")
  } else $(this).val().addClass("future")
})
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

 


