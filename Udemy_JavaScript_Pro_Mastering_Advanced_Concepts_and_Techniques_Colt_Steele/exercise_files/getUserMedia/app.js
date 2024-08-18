document.querySelector('#startStream').addEventListener('click', async () => {
  try {
    //I WANT TO REQUEST VIDEO STREAM FROM THE USER
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      // audio: true,
    });
    const videoElement = document.querySelector('#videoElement');
    //METHOD #1 - A fallback version of the srcObject support
    // console.log(videoElement.__proto__);
    if ('srcObject' in videoElement) {
      videoElement.srcObject = stream;
    } else {
      // Avoid using this in new browsers, as it is going away.
      videoElement.src = URL.createObjectURL(stream);
    }
    //METHOD #2 - Calling in a fully supportted Environment
    // videoElement.srcObject = stream;
  } catch (err) {
    console.log(err);
    document.querySelector('#errText').textContent = err.message;
  }
});

navigator.mediaDevices
  .enumerateDevices()
  .then(devices => {
    console.log(devices);
  })
  .catch(e => console.log(e));
