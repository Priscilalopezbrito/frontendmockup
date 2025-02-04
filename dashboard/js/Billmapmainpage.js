document.addEventListener("DOMContentLoaded", () => {
    // Sidebar navigation click event to change pages
    const menuItems = document.querySelectorAll(".sidebar nav ul li a");
    const pageMapping = {
        "Home": "Billmapmainpage.html",
        "Calendar": "calendar.html",
        "Bill Management": "bills.html",
        "Payments": "payments.html",
        "Settings": "account.html"
    };

    menuItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const pageName = event.target.innerText;
            if (pageMapping[pageName]) {
                window.location.href = pageMapping[pageName];
            }
        });
    });

    // Card click effect
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            alert("You clicked on: " + card.querySelector("h4").innerText);
        });
    });

    // Transactions click effect
    document.querySelectorAll(".transactions ul li").forEach(transaction => {
        transaction.addEventListener("click", () => {
            alert("Transaction selected: " + transaction.innerText);
        });
    });
});
