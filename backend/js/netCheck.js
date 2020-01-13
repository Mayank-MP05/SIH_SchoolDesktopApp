const status = document.querySelector("#netStatus");

if (navigator.onLine) {
  status.innerHTML = "Online";
  status.className = "badge badge-pill badge-success";
} else {
  status.innerHTML = "Offline :(";
  status.className = "badge badge-pill badge-danger";
}

window.addEventListener("online", function() {
  status.innerHTML = "Online";
  status.className = "badge badge-pill badge-success";
  window.onload = () => {
    downloadData();
    setTimeout(() => {
      /* upload(fileDB);*/
      status.innerHTML = "Synchronizing to Master ...";
    }, 150);
    setTimeout(() => {
      status.innerHTML = "Online";
    }, 800);
  };
});

window.addEventListener("offline", function() {
  status.innerHTML = "Offline :(";
  status.className = "badge badge-pill badge-danger";
});
