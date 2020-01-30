export const client = {
  get: async url => {
    const result = await fetch(url, {
      method: 'GET',
    });

    return result.json();
  },
};
