document.addEventListener('DOMContentLoaded', () => {
    const yearsSection = document.getElementById('years');
    const monthSections = document.querySelectorAll('.monthCalendar');
    const daySections = document.querySelectorAll('.daysCalendar');

    monthSections.forEach(section => section.style.display = 'none');
    daySections.forEach(section => section.style.display = 'none');

    yearsSection.addEventListener('click', (e) => {
        if (e.target.classList.contains('date')) {
            const year = e.target.textContent.trim();
            
            monthSections.forEach(section => section.style.display = 'none');
            daySections.forEach(section => section.style.display = 'none');

            const selectedYearSection = document.getElementById(`year-${year}`);
            if (selectedYearSection) {
                selectedYearSection.style.display = 'block';
            }
        }
    });

    monthSections.forEach(monthSection => {
        monthSection.addEventListener('click', (e) => {
            if (e.target.classList.contains('date')) {
                const monthName = e.target.textContent.trim();
                const parentId = monthSection.id; 
                const year = parentId.split('-')[1];
                const monthIndex = getMonthIndex(monthName);

                if (monthIndex !== null) {
                    const dayViewId = `month-${year}-${monthIndex + 1}`; 
                    const dayView = document.getElementById(dayViewId);

                    monthSections.forEach(section => section.style.display = 'none');
                    daySections.forEach(section => section.style.display = 'none');

                    if (dayView) {
                        dayView.style.display = 'block';
                    }
                }
            }
        });
    });

    function getMonthIndex(monthName) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return months.indexOf(monthName);
    }
});
