const mapping = {
    1: 'F',
    'F': 'Food',
    2: 'P',
    'P': 'People',
    3: 'M',
    'M': 'Money',
    4: 'A',
    'A': 'Army',
    5: 'I',
    'I': 'Influence'
};
class Choice {
    constructor(description, decisionYes, decisionNo) {
        this.description = description;
        this.decisionYes = decisionYes;
        this.decisionNo = decisionNo;
    }
}
class Decision {
    constructor(decisionText, consequences) {
        this.decisionText = decisionText;
        this.consequences = consequences;
    }
}
class Consequence {
    constructor(simpleEffect, advancedEffects) {
        this.simpleEffect = simpleEffect;
        this.advancedEffects = advancedEffects;
    }
}
class Effect {
    constructor(effectText, affects) {
        this.effectText = effectText;
        this.affects = affects;
    }
}
const effect = new Effect("sampleEffect", [1]);
const consequence = new Consequence("simpleEffect", [effect]);
const y = new Decision("testDecision", [consequence]);
const C = new Choice("testChoice", y, y);
console.log(C);
