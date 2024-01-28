function toggleSidePanel() {
    const sidePanel = document.getElementById('sidePanelForRules');
    sidePanel.classList.toggle('openSidePannel');
}

document.addEventListener('click', function(event) {
    const isClickInsideDiv = document.getElementById('sidePanelForRules').contains(event.target);
    const isClickInsideButton = document.getElementById('rules').contains(event.target);
    if (!isClickInsideDiv && !isClickInsideButton && document.getElementById('sidePanelForRules').classList[0] === 'openSidePannel'){
        toggleSidePanel()
    }    
});