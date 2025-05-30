function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.getElementById("searchField");
   const tabelRow = document.querySelectorAll('tbody tr');

   function onClick() {
      let searchText = input.value;
      if(!searchText) {
         return;
      } 

      input.value = "";
      
      for(let row of tabelRow) {
         const tabelData = row.querySelectorAll("td");
         for(let data of tabelData) {
            if(data.textContent.includes(searchText)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }
      }

   }
}