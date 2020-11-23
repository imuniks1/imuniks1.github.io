window.onload = () => {
    document
        .querySelectorAll('input.input-std')
        .forEach(input => {
            transformLabelForInput(input);
            input.addEventListener('keyup', event => {
                transformLabelForInput(event.target);
            });
        });
};
function transformLabelForInput(input) {
    const length = input.value.trim().length;
    const label = input.nextElementSibling;
    if (length > 0) {
        label.style.transform = "translate(-5px, -33px)";
        label.style.fontSize = '12px';
    } else {
        label.style.transform = "translate(0, -50%)";
        label.style.fontSize = '16px';
    }
}