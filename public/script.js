




document.getElementById("workoutNameSubmit").addEventListener("click", function submitWorkoutName() {
  var req = new XMLHttpRequest();
  var wName = document.getElementById("workoutName").value;
  var payload = wName;
  payload.postData = document.getElementById("postData").value;
  req.open("POST", "/insert?c=", true);
  req.setRequestHeader('accept', 'application/json');
  req.send(JSON.stringify(payload));
  var response = JSON.parse(req.responseBody);
  //document.getElementById("getData").textContent = response.data;
  event.preventDefault();
}


/*
document.getElementById("workoutNameSubmit").addEventListener("click", function submitWorkoutName() {
  var req = new XMLHttpRequest();
  var wName = document.getElementById("workoutName").value;
  req.open("GET", "/insert?c=" + wName, false);
  req.send(null);
  event.preventDefault();
}
*/
