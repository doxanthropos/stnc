console.log("Ringeling");
document.body.innerHTML = document.body.innerHTML.replace( /(?:\(\+?\d+\)|\+?\d+)(?:\s*[\-\/]*\s*\d+)+/g, "<a href='tel:$&'>$&</a>");
