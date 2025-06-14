const DEFAULT_DATA = {
  amfe: [
    { ID: 1, Item: "pieza", ModoFalla: "rotura" },
    { ID: 2, Item: "pieza2", ModoFalla: "desgaste" }
  ]
};

const dataService = {
  getAll: (key) => {
    return new Promise((resolve) => {
      let data = localStorage.getItem(key);
      if (!data && DEFAULT_DATA[key]) {
        localStorage.setItem(key, JSON.stringify(DEFAULT_DATA[key]));
        data = JSON.stringify(DEFAULT_DATA[key]);
      }
      try {
        const parsed = JSON.parse(data) || [];
        resolve(parsed);
      } catch (e) {
        resolve([]);
      }
    });
  }
};
