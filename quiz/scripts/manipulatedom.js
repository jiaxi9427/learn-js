window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    
    let btn = document.createElement("button");
    btn.innerHTML = "Edit text";
    btn.onclick = function() {
      let tdNode = this.parentNode.previousElementSibling;
      let input = document.createElement("input");
      input.type = "text";
      input.value = tdNode.textContent;
      tdNode.innerHTML = '';
      tdNode.appendChild(input); 
    };
    
    let col2 = createTDNode(btn);
    
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}