function createComplexDomElement() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = "random text";
  div.appendChild(h1);
  document.body.appendChild(div);
}
