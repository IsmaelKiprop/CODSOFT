"use strict";

const classicTheme = "style/classic.css";
const darkTheme = "style/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  try {
    const calculatedValue = Function('"use strict";return (' + value + ')')();
    res.value = isNaN(calculatedValue) ? "Can't divide 0 with 0" : calculatedValue;
  } catch (error) {
    res.value = "Error";
  }
}

function changeTheme() {
  const classicThemeLink = document.getElementById("classicTheme");
  const darkThemeLink = document.getElementById("darkTheme");

  if (classicThemeLink && darkThemeLink) {
    if (classicThemeLink.disabled) {
      classicThemeLink.disabled = false;
      darkThemeLink.disabled = true;
      themeIcon.setAttribute("src", moonIcon);
      toast.innerHTML = "Classic Mode 🌙";
    } else {
      classicThemeLink.disabled = true;
      darkThemeLink.disabled = false;
      themeIcon.setAttribute("src", sunIcon);
      toast.innerHTML = "Dark Mode 🌙";
    }
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  const key = e.key;
  const operators = ["+", "-", "*", "/"];

  if (key >= "0" && key <= "9") {
    res.value += key;
  } else if (operators.includes(key)) {
    res.value += key;
  } else if (key === ".") {
    res.value += key;
  } else if (key === "Enter") {
    calculate(result.value);
  } else if (key === "Backspace") {
    res.value = res.value.slice(0, -1);
  }
}
