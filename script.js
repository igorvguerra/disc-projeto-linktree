function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light"))
    img.setAttribute("src", "./assets/avatar-light.png")
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light"))
    img.setAttribute(
      "alt",
      "Foto de Igor Guerra sorrindo de cabeca para o lado, barba e fundo de praia"
    )
  else {
    img.setAttribute(
      "alt",
      "Foto de Igor Guerra usando camisa cinza, barba e fundo cinza"
    )
  }
}
