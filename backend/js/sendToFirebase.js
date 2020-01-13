const upload = obj => {
  const app = firebase.app();

  const db = firebase.firestore();
  const studs = db.collection("city-pride");

  studs
    .set(obj)
    .then(e => {
      console.log("Data Sucessfully uploaded to firebase : Ref ID :" + e.id);
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
