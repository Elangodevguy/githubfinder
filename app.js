// instantiate Classes
const github = new Github;
const ui = new UI;

// UI elements
// search input
const searchUser = document.getElementById('searchUser');

// event listeners
// search input event listener
searchUser.addEventListener('keyup', e => {
    const userText = e.target.value;
    // makesure that input is not empty
    if (userText !== '') {
        // make a http call
        github.getUser(userText)
            .then(profile => {
                if (profile.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                    ui.clearProfile();
                } else {
                    // show profile
                    ui.showProfile(profile.profile);
                    ui.showRepos(profile.repos);
                }
            })
    } else {
        // clear profile container
        ui.clearProfile();
    }
});