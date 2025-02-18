const API_URL = "http://localhost:5000/employees";

// Fetch and display employees
async function fetchEmployees() {
    try {
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
    } catch (error) {
        console.error("Error fetching employees:", error);
    }
}

// Add an employee
document.getElementById("employee-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const newEmployee = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        position: document.getElementById("position").value.trim(),
        department: document.getElementById("department").value.trim(),
        performanceScore: parseInt(document.getElementById("performanceScore").value)
    };

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEmployee)
        });
        fetchEmployees();
        document.getElementById("employee-form").reset();
    } catch (error) {
        console.error("Error adding employee:", error);
    }
});

// Delete an employee
async function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
        try {
            await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            fetchEmployees();
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    }
}

// Edit an employee
async function editEmployee(id) {
    const newScore = prompt("Enter new performance score (0-10):");
    if (newScore !== null && !isNaN(newScore) && newScore >= 0 && newScore <= 10) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ performanceScore: newScore })
            });
            fetchEmployees();
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    } else {
        alert("Invalid input. Please enter a number between 0 and 10.");
    }
}

// Load employees on page load
fetchEmployees();
