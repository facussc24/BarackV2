const dataService = {
  getAll: (key) => {
    return new Promise((resolve) => {
      const data = localStorage.getItem(key);
      try {
        const parsed = JSON.parse(data) || [];
        resolve(parsed);
      } catch(e) {
        resolve([]);
      }
    });
  }
};
