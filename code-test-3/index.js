(function () {
    // tried to implement declarative method using data from html but that was working extremely bad
    const cardsStates = {};

    function resetCards(excludedIds) {
        [...document.getElementsByClassName('card')].forEach(cardEl => {
            if (!excludedIds.includes(cardEl.id)) { // without that condition we are disabling ability to change any properties
                cardsStates[cardEl.id] = {
                    shortDescription: true,
                    fullDescription: false,
                    text1: false,
                    text2: false,
                    actions: false
                }
            }
        });
    }

    function applyCardStateItem(className, visible, cardEl, toggleHiddenClass) {
        const elements = [...cardEl.getElementsByClassName(className)];

        if (visible) {
            elements.forEach(el => {
                if (toggleHiddenClass) { // dirty fix only because of short description
                    el.classList.remove('hidden');
                }
                el.style.maxHeight = el.scrollHeight + 'px'; // height changes break animations
                el.style.opacity = '1'; // needed for cosmetic reasons
            });
        } else {
            elements.forEach(el => {
                // reset values
                if (toggleHiddenClass) {
                    el.classList.add('hidden');
                }
                el.style.maxHeight = null;
                el.style.opacity = null;
            });
        }
    }

    function applyCardsStates() {
        [...document.getElementsByClassName('card')].forEach(cardEl => {
            const mainContentEl = cardEl.querySelector('.main-content');
            const additionalContentEl = cardEl.querySelector('.additional-content');

            const oldHeight = mainContentEl.scrollHeight + additionalContentEl.scrollHeight;

            applyCardStateItem('short-description', cardsStates[cardEl.id].shortDescription, cardEl, true);
            applyCardStateItem('full-description', cardsStates[cardEl.id].fullDescription, cardEl, false);
            applyCardStateItem('text1', cardsStates[cardEl.id].text1, cardEl, false);
            applyCardStateItem('text2', cardsStates[cardEl.id].text2, cardEl, false);
            applyCardStateItem('actions', cardsStates[cardEl.id].actions, cardEl, false);

            const bouncer = cardEl.querySelector('.bouncer'); // needed for bouncing at the end of animation

            setTimeout(() => {
                    const newHeight = mainContentEl.scrollHeight + additionalContentEl.scrollHeight;

                    const animationClass = newHeight > oldHeight ? 'animate' : 'rev-animate';
                    if (newHeight !== oldHeight) {
                        bouncer.classList.add(animationClass);
                        setTimeout(() => {
                            bouncer.classList.remove(animationClass); // remove class that triggers animation to be able to trigger it again next time :)
                        }, 200);
                    }
                }, 400 // need timeout for correct comparison of heights
            );
        });
    }

    [...document.getElementsByClassName('main-content')].forEach(
        el => {
            el.addEventListener('click', () => {
                resetCards([el.dataset.cardId]); // needed for collapsing all cards when expanding a new one
                const card = document.getElementById(el.dataset.cardId);
                if (cardsStates[card.id].shortDescription || cardsStates[card.id].text1 || cardsStates[card.id].text2) {
                    cardsStates[card.id].shortDescription = false;
                    cardsStates[card.id].fullDescription = true;
                    cardsStates[card.id].text1 = false;
                    cardsStates[card.id].text2 = false;
                    cardsStates[card.id].actions = true;
                } else {
                    cardsStates[card.id].shortDescription = true;
                    cardsStates[card.id].fullDescription = false;
                    cardsStates[card.id].text1 = false;
                    cardsStates[card.id].text2 = false;
                    cardsStates[card.id].actions = false;
                }

                applyCardsStates(); // apply newest state
            });
        }
    );

    [...document.getElementsByClassName('action-toggle')].forEach(
        el => {
            el.addEventListener('click', () => {
                resetCards([el.dataset.cardId]); // needed for collapsing all cards when expanding a new one
                const card = document.getElementById(el.dataset.cardId);

                const actionId = el.dataset.actionId;

                if (cardsStates[card.id]['text' + actionId]) {
                    cardsStates[card.id].shortDescription = false;
                    cardsStates[card.id].fullDescription = true;
                    cardsStates[card.id].text1 = false;
                    cardsStates[card.id].text2 = false;
                    cardsStates[card.id].actions = true;
                } else {
                    cardsStates[card.id].shortDescription = false;
                    cardsStates[card.id].fullDescription = false;
                    cardsStates[card.id]['text' + actionId] = true;
                    cardsStates[card.id]['text' + (+actionId % 2 + 1)] = false; // 2 -> 1; 1 -> 2
                    cardsStates[card.id].actions = true;
                }
                applyCardsStates(); // apply newest state
            });
        }
    );

    resetCards([]); // set initial values
})();
