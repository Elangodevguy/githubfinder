class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // show the profile in ui
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company:${user.company}</li>
                        <li class="list-group-item">Website/Blog:${user.blog}</li>
                        <li class="list-group-item">Location:${user.location}</li>
                        <li class="list-group-item">Member Since:${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-2">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    // show repositories
    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output+=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }

    // clear profile if search is empty
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // show alert when no user found
    showAlert(message, className) {
        // remove all alert before insert new one
        this.clearAlert();
        // create a div element
        const div = document.createElement('div');
        // add classes to the element
        div.className = className;
        // create text node and append
        div.append(document.createTextNode(message));
        // search container
        const container = document.querySelector('.searchContainer');
        // search field
        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}