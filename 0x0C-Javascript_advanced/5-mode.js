const changeMode = (size, weight, transform, background, color) => {
    return () => {
      document.documentElement.style['font-size'] = size;
      document.documentElement.style['font-weight'] = weight;
      document.documentElement.style['text-transform'] = transform;
      document.documentElement.style['background-color'] = background;
      document.documentElement.style['color'] = color;
    }
  }
  
  const main = () => {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
  
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!"
    document.body.appendChild(paragraph);
  
    const spookyButton = document.createElement("button");
    spookyButton.innerHTML = "Spooky";
    spookyButton.onclick = () => spooky()
    document.body.appendChild(spookyButton);
  
    const darkButton = document.createElement("button");
    darkButton.innerHTML = "Dark Mode";
    darkButton.onclick = () => darkMode()
    document.body.appendChild(darkButton);
  
  
    const screamButton = document.createElement("button");
    screamButton.innerHTML = "Scream Mode";
    screamButton.onclick = () => screamMode()
    document.body.appendChild(screamButton);
  
  }
  
  window.onload = main();