export async function loginServer(idToken,pubKey) {
    const response = await fetch(`https://backend.sportsverse.cricket/users/login`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + idToken,
        }),
        body: JSON.stringify({"publicKey": pubKey})
      })
      console.log(response)
    return await response.json();
}

// export async function postAvatarURL(idToken,pubKey,avatarURL) {
//     const response = await fetch(`https://wtlbackend.metalok.io/users/update`, {
//         method: 'POST',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             Authorization: "Bearer " + idToken,
//         }),
//         body: JSON.stringify({
//             "walletAddress": pubKey,
//             "avatarURL": avatarURL
//         })
//       })
//       console.log(response)
//     return await response.json();
// }