class Neuron {
    public weights: number[]
    public bias: number

    constructor(inputCount: number) {
        this.weights = new Array(inputCount).fill(0).map(() => Math.random()) // Random weights [0.1, 0.2, 0.5]
        this.bias = Math.random() // Random bias [0.1]
    }

    activate(inputs: number[]) {
        const sum = inputs.reduce((acc, input, i) => acc + input * this.weights[i], 0)
        return this.sigmoid(sum + this.bias)
    }

    sigmoid(x: number) {
        return 1 / (1 + Math.exp(-x))           
    }
}

export default Neuron
