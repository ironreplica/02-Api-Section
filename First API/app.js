const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(URL)

.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
});
console.log(jsObject);