const fb = document.getElementById('FB').children[0]
const yt = document.getElementById('YT').children[0]

fb.addEventListener('click', () => {
    const url = 'https://www.facebook.com/tbcbank/'
    window.open(url, '_blank');
});
fb.addEventListener('click', () => {
    const url = 'https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ'
    window.open(url, '_blank');
});