const URL = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

const main = document.getElementById("item-results");
main.innerHTML = "";

fetch(URL).then((response) => response.json()).then((items) => main.innerHTML = getListOfNames(items));

const getListOfNames = (items) => {
  const listings = items.filter(item => item.name != null && item.name != false)
  .sort((a,b) => a.listId - b.listId || a.name.localeCompare(b.name))
  .map((item) => `<p class="rectangle"><strong> Category:</strong> ${item.listId} <i class="fas fa-grip-lines-vertical" style="color:darkorchid;"></i> <strong>Name:</strong> ${item.name}</p>`).join("\n");

  return `${listings}`;
};