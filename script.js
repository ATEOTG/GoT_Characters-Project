// https://thronesapi.com/api/v2/Characters
// https://www.anapioficeandfire.com/api/characters

const showCharacter = async function () {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
showCharacter();
