document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    document.getElementById('screen1').classList.add('visible');
    document.getElementById('screen2').classList.add('hidden');
    updateProgress(1);
}

function copyLink() {
    navigator.clipboard.writeText('https://www.stbenedictcoffee.com/').then(function() {
        alert('Link copied!');
        updateButtonStates('copyLinkBtn', false);
        updateButtonStates('shareDealBtn', true);
        updateProgress(2);
    }, function() {
        alert('Failed to copy link.');
    });
}

function shareDeal() {
    window.open('https://www.stbenedictcoffee.com/', '_blank');
    alert('Link shared!');
    transitionToSecondScreen();
}

function transitionToSecondScreen() {
    document.getElementById('screen1').classList.remove('visible');
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
    document.getElementById('screen2').classList.add('visible');
    updateProgress(3);
}

function useDeal() {
    alert('Present at checkout');
    updateButtonStates('useDealBtn', false);
}

function saveForLater() {
    alert('Take a screenshot and present later');
    updateButtonStates('saveForLaterBtn', false);
}

function updateProgress(step) {
    for (let i = 1; i <= step; i++) {
        document.getElementById('progress' + i).classList.add('active');
    }
}

function updateButtonStates(buttonId, isActive) {
    const button = document.getElementById(buttonId);
    if (isActive) {
        button.classList.add('active');
        button.classList.remove('inactive');
        button.disabled = false;
    } else {
        button.classList.add('inactive');
        button.classList.remove('active');
        button.disabled = true;
    }
}
