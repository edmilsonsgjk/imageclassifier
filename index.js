let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
    
  // Show prediction and probability.
  
  document.getElementById('console').innerText = `
      Prediction: ${result[0].className}\n
      Probability: ${result[0].probability}
    `;
}

app();