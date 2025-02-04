const bills = {
    "2025-02-05": [{ type: "overdue", description: "Electric bill - $75.00" }],
    "2025-02-10": [
        { type: "paid", description: "Water bill - $40.00" },
        { type: "paid", description: "Internet bill - $55.00" }
    ],
    "2025-02-15": [{ type: "upcoming", description: "Phone bill - $45.00" }],
    "2025-02-20": [{ type: "upcoming", description: "Car payment - $300.00" }],
    "2025-02-25": [
        { type: "upcoming", description: "Rent - $1000.00" },
        { type: "upcoming", description: "Credit Card - $200.00" }
    ]
};

const calendarGrid = document.getElementById("calendarGrid");
const currentMonthYear = document.getElementById("currentMonthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
let currentDate = new Date(2025, 1, 1);

document.body.style.overflowY = "auto"; // Enable scrolling

document.documentElement.style.height = "100%";
document.body.style.height = "100%";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";

document.querySelector(".container").style.flexGrow = "1";

document.querySelector(".dashboard").style.overflowY = "auto";
document.querySelector(".dashboard").style.maxHeight = "100vh";

function renderCalendar(date) {
    calendarGrid.innerHTML = "";
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    currentMonthYear.innerText = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("calendar-day");
        calendarGrid.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day");
        dayDiv.innerText = day;

        let dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        if (bills[dateString]) {
            bills[dateString].forEach(bill => {
                let billInfo = document.createElement("div");
                billInfo.classList.add("bill-date", bill.type);
                billInfo.innerText = bill.description;
                dayDiv.appendChild(billInfo);
            });
        }
        calendarGrid.appendChild(dayDiv);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);

// CSS styles for bill types
const style = document.createElement('style');
style.innerHTML = `
    .bill-date.overdue { background-color: #f8d7da; color: #dc3545; }
    .bill-date.paid { background-color: #d4edda; color: #28a745; }
    .bill-date.upcoming { background-color: #cce5ff; color: #007bff; }
`;
document.head.appendChild(style);
