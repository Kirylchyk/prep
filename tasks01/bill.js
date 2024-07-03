function calculateMonthlyBilling(dailyRate, year, month) {
    // Function to get the number of days in a month
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    // Adjust month index to be 1-based (1 for January, 12 for December)
    let daysInMonth = getDaysInMonth(year, month);
    return dailyRate * daysInMonth;
}

// Example usage:
let dailyRate = 10; // $10 per day
let year = 2023;
let month = 2; // February

let billingAmount = calculateMonthlyBilling(dailyRate, year, month);
console.log(`Billing Amount for February 2023: $${billingAmount}`);
