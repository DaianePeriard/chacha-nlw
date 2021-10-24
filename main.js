const LinksSocialMedia = {
  github:'daianeperiard',
  instagram: 'anneperiard',
  twitter: 'anneperiard'
  
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`

  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos () {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    UserImage.src = data.avatar_url
  })
    

}
getGitHubProfileInfos()
