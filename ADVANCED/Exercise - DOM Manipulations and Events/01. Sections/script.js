function create(words) {
   const contentRef = document.getElementById("content");

   for(let i = 0; i < words.length; i++) {
      const word = words[i];

      const divEl = document.createElement("div");

      const pEl = document.createElement("p");

      pEl.textContent = word;
      pEl.style.display = "none";

      divEl.appendChild(pEl);
      divEl.addEventListener("click", onClick)
      contentRef.appendChild(divEl);
   }

   function onClick(event) {
      const currentTarget = event.currentTarget
      const children = currentTarget.children;
      const pEl = children[0];
      const currentState = pEl.style.display;

      pEl.style.display = currentState === "none" ? "block" : "none";
   }
}