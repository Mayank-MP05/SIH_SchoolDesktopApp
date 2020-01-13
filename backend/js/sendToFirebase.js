const upload = obj => {
  const app = firebase.app();

  const db = firebase.firestore();
  const studs = db.collection("PCCOE").doc("Mega-DB-PCCOE");

  studs
    .set(obj)
    .then(e => {
      console.log("Data Sucessfully uploaded to firebase");
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
