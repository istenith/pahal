document.getElementById('filler').style.height =
    document.getElementsByTagName('header')[0].offsetHeight + 'px';

removeClassToOnclick('off-screen', '#menu', '#menu-btn');
addClassToOnclick('off-screen', '#menu', '#close-menu');

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
  var colorModeSwitchCheckbox =
      colorModeSwitch.getElementsByTagName('input')[0];
  if (mode == 'light') {
    colorModeSwitchCheckbox.checked = false;
  } else if (mode == 'dark') {
    colorModeSwitchCheckbox.checked = true;
  }
}
