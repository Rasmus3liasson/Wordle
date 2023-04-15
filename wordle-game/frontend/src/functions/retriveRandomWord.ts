export async function retrieveRandomWord() {
    const res = await fetch("/api/randomword");
    const data = await res.json();
    const randomWord = data.data.randomWord;
    return randomWord;
  }