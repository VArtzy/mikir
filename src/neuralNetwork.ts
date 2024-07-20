import Neuron from './neuron.js'

class NeuralNetwork {
    private hiddenLayer: Neuron[]
    private outputLayer: Neuron[]

    constructor(inputCount: number, hiddenCount: number, outputCount: number) {
        this.hiddenLayer = new Array(hiddenCount).fill(null).map(() => new Neuron(inputCount))
        this.outputLayer = new Array(outputCount).fill(null).map(() => new Neuron(hiddenCount))
    }

    predict(inputs: number[]) {
        const hiddenOutputs = this.hiddenLayer.map(neuron => neuron.activate(inputs))
        return this.outputLayer.map(neuron => neuron.activate(hiddenOutputs))
    }

    train(inputs: number[], targets: number[], learningRate: number = 0.1) {
        // Forward pass
        const hiddenOutputs = this.hiddenLayer.map(neuron => neuron.activate(inputs))
        const outputs = this.outputLayer.map(neuron => neuron.activate(hiddenOutputs))

        // Calculate output layer errors
        const outputErrors = outputs.map((output, i) => {
            const error = targets[i] - output
            return error * output * (1 - output)
        })

        // Update output layer weights
        this.outputLayer.forEach((neuron, i) => {
            neuron.weights = neuron.weights.map((weight, j) => {
                return weight + learningRate * outputErrors[i] * hiddenOutputs[j]
            })
            neuron.bias += learningRate * outputErrors[i]
        })

        // Calculate hidden layer errors
        const hiddenErrors = this.hiddenLayer.map((_, i) => {
            return this.outputLayer.reduce((sum, outputNeuron, j) => {
                return sum + outputErrors[j] * outputNeuron.weights[i]
            }, 0) * hiddenOutputs[i] * (1 - hiddenOutputs[i])
        })

        // Update hidden layer weights
        this.hiddenLayer.forEach((neuron, i) => {
            neuron.weights = neuron.weights.map((weight, j) => {
                return weight + learningRate * hiddenErrors[i] * inputs[j]
            })
            neuron.bias += learningRate * hiddenErrors[i]
        })
    }
}

export default NeuralNetwork
