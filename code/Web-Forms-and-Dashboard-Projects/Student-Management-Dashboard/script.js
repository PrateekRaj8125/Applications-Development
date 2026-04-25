const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");
const themeBtn = document.getElementById("themeBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "") {
        alert("Name cannot be empty");
        return;
    }
    if (!/^[0-9]+$/.test(roll)) {
        alert("Roll must be numeric");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid email");
        return;
    }
let photoInput = document.getElementById("photo");
let photoURL = "";

if (photoInput.files.length > 0) {
    photoURL = URL.createObjectURL(photoInput.files[0]);
}

    let dept = document.getElementById("dept").value;
    let year = document.querySelector('input[name="year"]:checked')?.value || "";
    let skills = [...document.querySelectorAll('input[type="checkbox"]:checked')]
                .map(cb => cb.value).join(", ");

    let row = document.createElement("tr");
    row.innerHTML = `
    <td><img src="${photoURL}" class="table-img"></td>
    <td>${name}</td>
    <td>${roll}</td>
    <td>${email}</td>
    <td>${dept}</td>
    <td>${year}</td>
    <td>${skills}</td>
    <td>
        <button class="edit-btn" onclick="editRow(this)">Edit</button>
        <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
    </td>
`;

    tableBody.appendChild(row);

    alert("Student Registered Successfully");
    form.reset();
});

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

function updateTime() {
    let now = new Date();
    document.getElementById("dateTime").innerText = now.toLocaleString();
    document.getElementById("footerDate").innerText = now.toDateString();
}
setInterval(updateTime, 1000);
updateTime();
function editRow(btn) {
    selectedRow = btn.parentElement.parentElement;

    document.getElementById("name").value = selectedRow.cells[1].innerText;
    document.getElementById("roll").value = selectedRow.cells[2].innerText;
    document.getElementById("email").value = selectedRow.cells[3].innerText;
    document.getElementById("dept").value = selectedRow.cells[4].innerText;

    let year = selectedRow.cells[5].innerText;
    document.querySelector(`input[name="year"][value="${year}"]`).checked = true;

    let skills = selectedRow.cells[6].innerText.split(", ");
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = skills.includes(cb.value);
    });
}
function deleteRow(btn) {
    if (confirm("Are you sure you want to delete this record?")) {
        btn.closest("tr").remove();
    }
}
