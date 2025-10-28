const title = document.querySelector('#title') as HTMLElement;
if (title) {
    title.textContent = 'Hello TypeScript by elie';
}

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true, 
        date: '27-03-2021'
    },
]
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    if (reviewTotalDisplay) {
        const icon = isLoyalty ? '▶️▶️' : '😒😒';
        reviewTotalDisplay.innerHTML = `Review total: ${value} | Last reviewed by ${reviewer} ${icon}`;
    }
}

if (reviews.length > 0) {
    showReviewTotal(reviews.length, reviews[1].name, reviews[1].loyaltyUser);
}
