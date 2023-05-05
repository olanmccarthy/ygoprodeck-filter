const run = () => {
    const url = 'https://ygoprodeck.com/pack-sim/'

    if (window.location.href === url) {
        const collection = document.getElementsByClassName("set-text");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].textContent.includes('- Duel Links') || collection[i].textContent.includes('- Master Duel') || collection[i].textContent.includes('- Speed Duel')) {
                const parent = collection[i].parentNode;
                parent.remove();
            }
        }

    }
}

$(".container").bind("DOMSubtreeModified", run);