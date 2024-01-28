const causebtn = document.getElementById('causebtn');

document.querySelectorAll('.share__option').forEach(item => {
  item.addEventListener('click', () => {
    causebtn.textContent = item.textContent;
    causebtn.click();
  })
})
