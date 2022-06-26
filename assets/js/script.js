
const usersDiv = document.getElementById('btnToggle').addEventListener('click', displayDiv)
function displayDiv(){
    if (userNames.style.display === 'none') {
        userNames.style.display = 'block';
        alert('Click on specific name to view user profile')
    } else {
        userNames.style.display = 'none';
    }
}