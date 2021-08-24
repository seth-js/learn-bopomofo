let progress = 0;
let total = 0;
let lastQuestion = '';

document.querySelector('#initials').addEventListener('click', (e) => {
  e.target.classList.contains('selected')
    ? e.target.classList.remove('selected')
    : e.target.classList.add('selected');
});

document.querySelector('#finals').addEventListener('click', (e) => {
  e.target.classList.contains('selected')
    ? e.target.classList.remove('selected')
    : e.target.classList.add('selected');
});

document.querySelector('#start').addEventListener('click', (e) => {
  if (
    document.querySelector('#initials.selected') &&
    document.querySelector('#finals.selected')
  ) {
    startBoth();
  } else if (document.querySelector('#initials.selected')) {
    startInitials();
  } else if (document.querySelector('#finals.selected')) {
    startFinals();
  } else alert('Please select at least one group before starting.');
});

function startInitials() {
  document.body.innerHTML = '';
  const initials = shuffle([
    'ㄅ',
    'ㄆ',
    'ㄇ',
    'ㄈ',
    'ㄉ',
    'ㄊ',
    'ㄋ',
    'ㄌ',
    'ㄍ',
    'ㄎ',
    'ㄏ',
    'ㄐ',
    'ㄑ',
    'ㄒ',
    'ㄓ',
    'ㄔ',
    'ㄕ',
    'ㄖ',
    'ㄗ',
    'ㄘ',
    'ㄙ',
  ]);

  document.body.innerHTML += `<h1>Correct: ${progress}/${total}</h1>`;

  document.body.innerHTML +=
    '<h3>Try to think of the correct pronunciation.<h3>';

  const [bopomofo] = initials;

  if (lastQuestion === bopomofo) {
    startInitials();
  } else {
    showQuestion(bopomofo, 'initials');
  }
}

function startFinals() {
  document.body.innerHTML = '';
  const finals = shuffle([
    'ㄚ',
    'ㄛ',
    'ㄜ',
    'ㄝ',
    'ㄞ',
    'ㄟ',
    'ㄠ',
    'ㄡ',
    'ㄢ',
    'ㄣ',
    'ㄤ',
    'ㄥ',
    'ㄦ',
    'ㄧ',
    'ㄨ',
    'ㄩ',
  ]);

  document.body.innerHTML += `<h1>Correct: ${progress}/${total}</h1>`;

  document.body.innerHTML +=
    '<h3>Try to think of the correct pronunciation.<h3>';

  const [bopomofo] = finals;

  if (lastQuestion === bopomofo) {
    startFinals();
  } else {
    showQuestion(bopomofo, 'finals');
  }
}

function startBoth() {
  document.body.innerHTML = '';
  const both = shuffle([
    'ㄅ',
    'ㄆ',
    'ㄇ',
    'ㄈ',
    'ㄉ',
    'ㄊ',
    'ㄋ',
    'ㄌ',
    'ㄍ',
    'ㄎ',
    'ㄏ',
    'ㄐ',
    'ㄑ',
    'ㄒ',
    'ㄓ',
    'ㄔ',
    'ㄕ',
    'ㄖ',
    'ㄗ',
    'ㄘ',
    'ㄙ',
    'ㄚ',
    'ㄛ',
    'ㄜ',
    'ㄝ',
    'ㄞ',
    'ㄟ',
    'ㄠ',
    'ㄡ',
    'ㄢ',
    'ㄣ',
    'ㄤ',
    'ㄥ',
    'ㄦ',
    'ㄧ',
    'ㄨ',
    'ㄩ',
  ]);

  document.body.innerHTML += `<h1>Correct: ${progress}/${total}</h1>`;

  document.body.innerHTML +=
    '<h3>Try to think of the correct pronunciation.<h3>';

  const [bopomofo] = both;

  if (lastQuestion === bopomofo) {
    startBoth();
  } else {
    showQuestion(bopomofo, 'both');
  }
}

function showQuestion(bopomofo, type) {
  lastQuestion = bopomofo;
  document.body.innerHTML += `<div id="bopomofo">${bopomofo}</div>`;

  document.body.innerHTML += `<div id="show">Show</div>`;

  const showButton = document.querySelector('#show');
  showButton.addEventListener('click', () => {
    showButton.parentElement.removeChild(showButton);
    document.body.innerHTML += `<audio controls autoplay><source src="audio/${bopomofo}.m4a" type="audio/mpeg">`;
    document.body.innerHTML += `<h3>Were you correct?</h3>`;

    const yesBtn = `<span id="yes" class="yes-no">Yes</span>`;
    const noBtn = `<span id="no" class="yes-no">No</span>`;

    document.body.innerHTML += `<div id="answer-btns">${yesBtn}${noBtn}</div>`;

    document.querySelector('#yes').addEventListener('click', () => {
      total += 1;
      progress += 1;
      if (type === 'initials') startInitials();
      else if (type === 'finals') startFinals();
      else if (type === 'both') startBoth();
    });

    document.querySelector('#no').addEventListener('click', () => {
      total += 1;
      if (type === 'initials') startInitials();
      else if (type === 'finals') startFinals();
      else if (type === 'both') startBoth();
    });
  });
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
