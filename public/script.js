const API_URL = "http://localhost:5000/employees";
console.log("🚀 JavaScript is running!");
alert("JS Loaded!");


// Fetch and display employees
async function fetchEmployees() {
    const response = await fetch(API_URL);
    const employees = await response.json();

    const tableBody = document.getElementById("employee-table");
    tableBody.innerHTML = "";

    employees.forEach(emp => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.position}</td>
            <td>${emp.department}</td>
            <td>${emp.performanceScore}</td>
            <td>
                <button class="edit" onclick="editEmployee('${emp._id}')">Edit</button>
                <button class="delete" onclick="deleteEmployee('${emp._id}')">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Add an employee
document.getElementById("employee-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const newEmployee = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        position: document.getElementById("position").value,
        department: document.getElementById("department").value,
        performanceScore: document.getElementById("performanceScore").value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee)
    });

    fetchEmployees();
});

// Delete an employee
async function deleteEmployee(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchEmployees();
}

// Edit an employee (Simple prompt-based update)
async function editEmployee(id) {
    const newScore = prompt("Enter new performance score (0-10):");
    if (newScore !== null) {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ performanceScore: newScore })
        });
        fetchEmployees();
    }
}

// Load employees on page load
fetchEmployees();
