codesMap.forEach((value, key, map) => {
    const row = document.createElement("tr");
    const code = document.createElement("th");
    const desc = document.createElement("th");

    code.innerText = key;
    desc.innerText = value;

    row.appendChild(code);
    row.appendChild(desc);
    document.getElementById("codes-table").appendChild(row);
});

const viewTableBtn = document.getElementById("open-table");
const table = document.getElementById("table-wrapper");

viewTableBtn.addEventListener("click", () => {
    if (table.classList.contains("table-hidden")) {
        table.classList.remove("table-hidden");
        viewTableBtn.classList.add("open");
        viewTableBtn.innerText = "Close Table";
    } else {
        table.classList.add("table-hidden");
        viewTableBtn.classList.remove("open");
        viewTableBtn.innerText = "View Table";
    }
});
