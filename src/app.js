import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {

  const pageElements = setupPageBasics(appDiv);
  const statusDiv = pageElements.statusDiv;
  const usersUl = pageElements.usersUl;
  const postsUl = pageElements.postsUl;
  const newUserForm = pageElements.newUserForm;
  const newUserDiv = pageElements.newUserDiv;


  checkResponseStatus()
    .then(statusInfo => {
      renderStatus(statusDiv, statusInfo);
    })
    .catch(error => {
      console.error("Failed to fetch status:", error);
    });

  getUsers()
    .then(users => {
      renderUsers(usersUl, users);
    })
    .catch(error => {
      console.error("Failed to fetch users:", error);
    });

  usersUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const userId = event.target.getAttribute('data-user-id');
      getUserPosts(userId)
        .then(posts => {
          renderPosts(postsUl, posts);
        })
        .catch(error => {
          console.error(`Failed to fetch posts for user ${userId}:`, error);
        });
    }
  });


  newUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(newUserForm);
    const newUserData = {
      username: formData.get('username'),
      email: formData.get('email')
    };

    createNewUser(newUserData)
      .then(newUser => {
        renderNewUser(newUserDiv, newUser);
        newUserForm.reset();
      })
      .catch(error => {
        console.error("Failed to create a new user:", error);
      });
  });
};
