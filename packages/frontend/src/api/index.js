export const getWordDefinition = (locale, word) =>
  fetch(`${process.env.REACT_APP_API_URL}/dictionary?locale=${locale}&word=${word.toLowerCase()}`).then((response) =>
    response.json()
  );

export const postSolve = (payload) =>
  fetch(`${process.env.REACT_APP_API_URL}/solve`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json());
