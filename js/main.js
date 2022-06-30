var elList = document.querySelector(".js-list");
// elList.innerHTML = '';

function domgachiqar(array, node){
  for (poc of array) {
    var newItem = document.createElement('li');
    newItem.setAttribute('class', 'item');
    var newId = document.createElement('span');
    var newNum = document.createElement('p');
    var newName = document.createElement('h2');
    newName.setAttribute('class', 'name');
    var newImg = document.createElement('img');
    var newType = document.createElement('strong');
    var newWrap = document.createElement('div');
    var newHeight = document.createElement('p');
    var newWeight = document.createElement('p');
    var newСandy = document.createElement('p');
    var newEgg = document.createElement('p');
    var newSpawn = document.createElement('p');
    var newAvg = document.createElement('p');
    var newTime = document.createElement('p');
    var newMultipliers = document.createElement('p');
    var newWeaknesses = document.createElement('p');
    var newImg = document.createElement('img');
    
    
    newId.textContent = `id: ${poc.id}`;
    newNum.textContent = `num: ${poc.num}`;
    newName.textContent = ` ${poc.name}`;
    newType.textContent = `type: ${poc.type}`;
    newHeight.textContent = `height: ${poc.height}`;
    newWeight.textContent = `weigth: ${poc.weight}`;
    newСandy.textContent = `сandy: ${poc.candy}`;
    newEgg.textContent = `egg: ${poc.egg}`;
    newAvg.textContent = `avg_spawns: ${poc.avg_spawns}`;
    newTime.textContent = `spawn_time: ${poc.spawn_time}`;
    newMultipliers.textContent = `multipliers: ${poc.multipliers}`;
    newWeaknesses.textContent = `weaknesses: ${poc.weaknesses}`;
    newImg.src = `${poc.img}`;
    newImg.setAttribute('alt', 'Template img');
    newImg.setAttribute('width', '100%');
    newImg.setAttribute('height', '200');
    
    newWrap.style.marginTop = '10px'
    newImg.style.display = 'block';
    newWrap.style.display = 'flex';
    newWrap.style.justifyContent = 'space-between';
    newWrap.style.backgroundColor = '#AEE3DD';
    newWrap.style.borderRadius = '24px';
    newId.style.color = 'black';
    newId.style.display = 'block';
    newId.style.fontSize = '24px';
    newId.style.textAlign = 'center';
    newType.style.fontSize = '24px';
    newType.style.color = 'darkblue';
    newNum.style.color = 'darkgreen';
    newСandy.style.color = 'crimson';
    newWeaknesses.style.fontWeight = '900';
    newWeaknesses.style.color = 'red';
    newHeight.style.fontSize = '18px';
    newHeight.style.marginLeft = '10px'
    newWeight.style.fontSize = '18px';
    newWeight.style.marginRight = '10px'
    newHeight.style.color = 'red';
    newWeight.style.color = 'red';
    
    
    newItem.appendChild(newId);
    newItem.appendChild(newName);
    newItem.appendChild(newImg);
    newItem.appendChild(newNum);
    newItem.appendChild(newType);
    newWrap.appendChild(newHeight);
    newWrap.appendChild(newWeight);
    newItem.appendChild(newWrap);
    newItem.appendChild(newСandy);
    newItem.appendChild(newEgg);
    newItem.appendChild(newSpawn);
    newItem.appendChild(newAvg);
    newItem.appendChild(newTime); 
    newItem.appendChild(newMultipliers);
    newItem.appendChild(newWeaknesses);
    node.appendChild(newItem);
  }
}
domgachiqar(pokemons, elList);

const elSelect = document.querySelector('.js-select');
let result = [];
elSelect.addEventListener('change', function () {
	elList.innerHTML = '';
	result = [];
	let selectValue = elSelect.value;
	pokemons.forEach((poc) => {
		if (poc.type.includes(selectValue)) {
			result.push(poc);
		}
	});

	domgaChiqarator(result, elList);
});


const optionsList = new Set();
const optionList = [];
pokemons.forEach((element) => {
	element.type.forEach((el) => optionsList.add(el));
})  
optionsList.forEach((type) => {
	let newOption = document.createElement('option');
	newOption.textContent = type;
	newOption.value = type;
	elSelect.appendChild(newOption);
})
