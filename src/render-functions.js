export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
  const statusHeading = document.createElement('h2')
  statusHeading.textContent = `Info on - ${statusInfoObj.url}`
  statusHeading.id = 'status-heading'

  const statusPtag = document.createElement('p')
  statusPtag.id = 'status-code'

  let statusMessage = '';
  if (statusInfoObj.ok) {
    statusMessage = `Status code: ${statusInfoObj.status}, OK!`
  } else {
    statusMessage = `Status code: ${statusInfoObj.status}, FAIL!`
  }

  statusPtag.textContent = statusMessage
  statusDiv.append(statusHeading, statusPtag)
}


export const renderUsers = (usersUI, users) => {
  usersUI.replaceChildren()
  users.forEach(user => {
    const userLi = document.createElement('li')
    userLi.className = "user-card"
    userLi.textcontent = `Username: ${username.name}, id: ${user.id}`

    const button = document.createElement('button')
    button.id = 'data-user-id'
    button.textContent = `Load ${username.name}'s posts`

    users.append(userLi)
    userLi.append(button)

  });


};

export const renderPosts = () => {
}

export const renderNewUser = (newUserDiv, newUserInfo) => {

  newUserDiv.replaceChildren()
  // newUserDiv.innerHTML = ''

  const usernameH2 = document.createElement('h2');
  usernameH2.textContent = newUserInfo.username

  const emailProp = document.createElement('p');
  emailProp.textContent = newUserInfo.email

  newUserDiv.append(usernameH2)
  newUserDiv.append(emailProp)
}