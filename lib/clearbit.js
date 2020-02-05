const authorization = "Bearer sk_5467371e8e307d19ab2b8d2a1876fa15";
// TODO
const clearbitForm = document.querySelector("#clearbitForm");


// console.log(clearbitForm);

clearbitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("#clearbitEmail").value;
  const url = `https://person.clearbit.com/v2/combined/find?email=${emailInput}`;
  fetch(url, {
    headers: {
      "Authorization": authorization
    }
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      const name = data.person.name.fullName;
      document.querySelector('#userName').innerText = name;
      const bio = data.person.bio;
      document.querySelector('#userBio').innerText = bio;
      const email = data.person.email;
      document.querySelector('#userEmail').innerText = email;
      const location = data.person.location;
      document.querySelector('#userLocation').innerText = location;
    });
});
