document.getElementById('burger').onclick = () => {
  let header = document.getElementById('header');
  let display = getComputedStyle(header, null).display;
  if (display == 'none') {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }


}