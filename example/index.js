import { NeuralNetwork } from "mikir"

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

const nn = new NeuralNetwork(2, 2, 1)

for (let i = 0; i < 10000; i++) {
    trainingData.forEach(data => [
        nn.train(data.input, data.output)
    ])
}

trainingData.forEach(data => {
    const output = nn.predict(data.input)
    console.log(`Input: ${data.input}, Predicted: ${output}, Actual: ${data.output}`)
})
