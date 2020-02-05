const authorization = "Bearer sk_5467371e8e307d19ab2b8d2a1876fa15";
// TODO

const displayData = (data) => {
  const name = data.person.name.fullName;
  const email = document.querySelector("#clearbitEmail").value;
  const bio = data.person.bio;
  const location = data.person.location;
  // display user data in dom
  document.getElementById('userName').innerText = name;
  document.getElementById('userEmail').innerText = email;
  document.getElementById('userBio').innerText = bio;
  document.getElementById('userLocation').innerText = location;
};

const fetchUserData = (event) => {
  event.preventDefault();
  // get email address
  const email = document.querySelector("#clearbitEmail").value;
  // interpolate email in url
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  // call to clearbit API with authorization
  fetch(url, {
    headers: {
      'Authorization': authorization
    }
  }).then(response => response.json())
  // store revelante data in variable
    .then(displayData);
}

// select form
const form = document.querySelector("#clearbitForm");
// add event listener on form
form.addEventListener('submit', fetchUserData);
