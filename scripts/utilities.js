function addClassToOnclick(className, targetQuery, buttonQuery) {
  document.querySelector(buttonQuery).addEventListener('click', function() {
    document.querySelector(targetQuery).classList.add(className);
  })
}
function removeClassToOnclick(className, targetQuery, buttonQuery) {
  document.querySelector(buttonQuery).addEventListener('click', function() {
    document.querySelector(targetQuery).classList.remove(className);
  })
}
function toggleClassToOnclick(className, targetQuery, buttonQuery) {
  document.querySelector(buttonQuery).addEventListener('click', function() {
    document.querySelector(targetQuery).classList.toggle(className);
  })
}
