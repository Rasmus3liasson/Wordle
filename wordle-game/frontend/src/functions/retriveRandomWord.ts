export async function retrieveRandomWord() {
    const res = await fetch("http://localhost:5080/api/randomword");
    const data = await res.json();
    const randomWord = data.data.randomWord;
    return randomWord;
  }