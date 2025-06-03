export const scrollOpportunity = state => {
    if (state) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
