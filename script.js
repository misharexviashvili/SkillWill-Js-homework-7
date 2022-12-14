"use strict";
// Task 1
function mySetTimeout(delayMs) {
  return new Promise((resolve, reject) => setTimeout(resolve, delayMs));
}

// Task 2

// getFacebookProfile(1, (profile) => {
//   getFacebookProfile(profile.friends[0].id, (friendProfile) => {
//     getFacebookProfile(friendProfile.friends[0].id, (friendsFriend) => {
//       getFacebookProfile(friendsFriend.friends[0].id, (finalProfile) => {
//         console.log("Finally, i have all the profiles");
//       });
//     });
//   });
// });

const allProfiles = async function () {
  try {
    const result1 = await getFacebookProfile(1);
    const result2 = await getFacebookProfile(result1.profile.friends[0].id);
    const result3 = await getFacebookProfile(
      result2.friendProfile.friends[0].id
    );
    const result4 = await getFacebookProfile(
      result3.friendsFriend.friends[0].id
    );
    console.log("I have all the data");
  } catch (error) {
    console.log(error);
  }
};

const allProfs = getFacebookProfile(1)
  .then((result1) => getFacebookProfile(result1.profile.friends[0].id))
  .then((result2) => getFacebookProfile(result2.friendProfile.friends[0].id))
  .then((result3) => {
    getFacebookProfile(result3.friendsFriend.friends[0].id);
    console.log("I have all the data");
  })
  .catch((error) => console.log(error));
