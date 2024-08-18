const open = indexedDB.open('MyFirstDB', 1);

open.onupgradeneeded = () => {
  const db = open.result;
  db.createObjectStore('MyUserStore', { keyPath: 'id' });
};

open.onsuccess = () => {
  console.log('SUCCESS!!!');
  const db = open.result;
  // console.log(open);
  const transaction = db.transaction('MyUserStore', 'readwrite');
  const store = transaction.objectStore('MyUserStore');

  //   store.put({ id: 2, username: "Brandy", age: 9 });
  //   store.put({ id: 3, username: "Brandon", age: 12 });
  //   store.put({ id: 4, username: "Brady", age: 34 });
  //   const largeString = new Array(5 * 1024 * 1024 + 1).join("a");
  //   store.put({ id: 5, username: largeString });
  const user = store.getAll();
  user.onsuccess = () => {
    console.log(user.result);
  };

  transaction.oncomplete = () => {
    db.close();
  };
};

open.onerror = () => {
  console.log('ERROR!');
};
