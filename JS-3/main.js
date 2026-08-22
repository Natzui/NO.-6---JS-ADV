const loadBtn = document.getElementById("LDFA");
const clearBtn = document.getElementById("CLR");

const output = document.createElement("div");
document.body.appendChild(output);

async function loadData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
        const todos = await response.json();

        let tableHTML = `
            <table border="1" cellpadding="8">
                <tr>
                    <th>User ID</th>
                    <th>Task ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
        `;

        todos.forEach(todo => {
            tableHTML += `
                <tr>
                    <td>${todo.userId}</td>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td style="color:${todo.completed ? 'green' : 'red'};">
                        ${todo.completed ? 'Completed' : 'Not yet Completed'}
                    </td>
                </tr>
            `;
        });

        tableHTML += `</table>`;
        output.innerHTML = tableHTML;
    } catch (error) {
        output.innerHTML = `<p style="color:red;">Error loading data: ${error}</p>`;
    }
}

function clearData() {
    output.innerHTML = "";
}

loadBtn.addEventListener("click", loadData);
clearBtn.addEventListener("click", clearData);
