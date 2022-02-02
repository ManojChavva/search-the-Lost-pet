const animalsList = document.getElementById('animalsList');
const searchBar = document.getElementById('searchBar');
let tAnimals = [];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredAnimals = tAnimals.filter((animal) => {
        return (
            animal.name.toLowerCase().includes(searchString)
        );
    });
    displayAnimals(filteredAnimals);
});

const loadAnimals = async () => {
    try {
        const res = await fetch('https://60d075407de0b20017108b89.mockapi.io/api/v1/animals');
        tAnimals = await res.json();
        displayAnimals(tAnimals);
    } catch (err) {
        console.error(err);
    }
};


/* Tried age calculation--- thought to give the getAge at <p>Age = ${animal.bornAt=getAge}</p>
function getAge(dateString)
    var today =  new Date();
    var b = today.toISOString();
    console.log(b);
    var bornAt = bornAt;
    console.log(bornAt);

    var age = b.getFullYear() - bornAt.getFullYear();
    var m = b.getMonth() - bornAt.getMonth();
    if (m < 0 || (m === 0 && b.getDate() < bornAt.getDate()))
    {
        age--;
    }
    return age;
  }

*/

const displayAnimals = (animals) => {
    const htmlString = animals
        .map((animal) => {
            return `
            <li class="animal">
                <h2>${animal.name}</h2>

                <p>Age = ${animal.bornAt}</p>

            </li>
        `;
        })
        .join('');
    animalsList.innerHTML = htmlString;
};

loadAnimals();
