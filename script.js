document.getElementById('yesBtn').addEventListener('click', function() {
    if (event.target.id == 'yesBtn'){
    window.location.href = 'https://www.iemoji.com/view/emoji/40/symbols/red-heart'; // Redirect to Wikipedia page if "Yes" button is clicked
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'https://www.istockphoto.com/illustrations/thumbs-down-clipart'; // Redirect to iStockphoto page if "No" button is clicked
});
