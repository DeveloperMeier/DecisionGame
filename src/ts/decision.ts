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
}

interface Choice {
    description: string;
    decisionYes: Decision;
    decisionNo: Decision;
}

class Choice {
    constructor(description: string, decisionYes: Decision, decisionNo: Decision) {
        this.description = description
        this.decisionYes = decisionYes
        this.decisionNo  = decisionNo
    }
}

interface Decision {
    decisionText: string;
    consequences: Consequence[]
}

class Decision {
    constructor(decisionText: string, consequences: Consequence[]) {
        this.decisionText = decisionText
        this.consequences = consequences
    }
}

interface Consequence {
    simpleEffect: string;
    advancedEffects: Effect[]
}

class Consequence {
    constructor(simpleEffect: string, advancedEffects: Effect[]) {
        this.simpleEffect    = simpleEffect
        this.advancedEffects = advancedEffects
    }
}

interface Effect {
    effectText: string
    affects: number[] | string[]
}

class Effect {
    constructor(effectText: string, affects: number[] | string[]) {
        this.effectText = effectText
        this.affects = affects
    }
}
const effect = new Effect("sampleEffect", [1])
const consequence = new Consequence("simpleEffect", [effect])
const y = new Decision("testDecision", [consequence])
const C = new Choice("testChoice",y,y)
console.log(C)
