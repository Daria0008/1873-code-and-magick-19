'use strict';

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomArrIndex = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
};

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницки', 'Нионго', 'Ирвинг'];

var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [

  {
    name: WIZARD_NAMES[getRandomArrIndex(WIZARD_NAMES)],
    lastname: WIZARD_LASTNAMES[getRandomArrIndex(WIZARD_LASTNAMES)],
    coatColor: WIZARD_COATS[getRandomArrIndex(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomArrIndex(WIZARD_EYES)],
  },
  {
    name: WIZARD_NAMES[getRandomArrIndex(WIZARD_NAMES)],
    lastname: WIZARD_LASTNAMES[getRandomArrIndex(WIZARD_LASTNAMES)],
    coatColor: WIZARD_COATS[getRandomArrIndex(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomArrIndex(WIZARD_EYES)],
  },
  {
    name: WIZARD_NAMES[getRandomArrIndex(WIZARD_NAMES)],
    lastname: WIZARD_LASTNAMES[getRandomArrIndex(WIZARD_LASTNAMES)],
    coatColor: WIZARD_COATS[getRandomArrIndex(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomArrIndex(WIZARD_EYES)],
  },
  {
    name: WIZARD_NAMES[getRandomArrIndex(WIZARD_NAMES)],
    lastname: WIZARD_LASTNAMES[getRandomArrIndex(WIZARD_LASTNAMES)],
    coatColor: WIZARD_COATS[getRandomArrIndex(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomArrIndex(WIZARD_EYES)],
  },
];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + " " + wizards[i].lastname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');
