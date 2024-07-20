# Mikir

Simple and fast neural network framework for JavaSript

**Fun fact: "mikir" is Indonesian word that mean think/thinking**

## Installation

To install the package, use npm:

```sh
npm install mikir
```

## Usage

Here’s a simple example of how to use the package:

```js
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
```

## API

```js
declare class NeuralNetwork {
    private hiddenLayer;
    private outputLayer;
    constructor(inputCount: number, hiddenCount: number, outputCount: number);
    predict(inputs: number[]): number[];
    train(inputs: number[], targets: number[], learningRate?: number): void;
}
```

The neuralNetwork using 3 paramater which is inputCount, how much hidden layer and output layer wanted.

train: train your neural network using inputs, target as desired output and learningRate (default 0.1)

predict: after training your neural network, use it with predict to predict output from input based on trained model
