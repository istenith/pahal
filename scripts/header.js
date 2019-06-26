document.getElementById('filler').style.height =
    (document.getElementsByTagName('header')[0].offsetHeight + 6) + 'px';

var menuBtn = document.getElementById('menu-btn');
menuBtn.onclick = function(eve) {
  document.getElementById('menu').classList.remove('off-screen');
};

var closeMenuBtn = document.getElementById('close-menu');
closeMenuBtn.onclick = function(eve) {
  document.getElementById('menu').classList.add('off-screen');
};

/* Color mode handling*/
var colorModeSwitch = document.getElementById('color-mode-switch');
var mode = localStorage.getItem('colorMode');
if (mode == '' || mode == null) {
  mode = 'dark';
}
updateColorModeSwitch();
implementColorMode();

colorModeSwitch.addEventListener('change', function(eve) {
  if (eve.target.checked) {
    mode = 'dark';
  } else {
    mode = 'light';
  }
  implementColorMode();
});

function implementColorMode() {
  if (mode == 'dark' || mode == 'light') {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('colorMode', mode);
  }
}

function updateColorModeSwitch() {
  if (mode == 'light') {
    if (colorModeSwitch.getElementsByTagName('input')[0].checked) {
      colorModeSwitch.click();
    }
  } else if (mode == 'dark') {
    if (colorModeSwitch.getElementsByTagName('input')[0].checked == false) {
      colorModeSwitch.click();
    }
  }
}
