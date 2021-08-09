let metersAway = Math.floor(Math.random() * 300);
const data = {
  header: {
    image: "",
    subtitle: [
      `"hitler is cringe lmao" - joseph stalin, 1942`,
      `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">join discord server here</a>`,
      `reload for another message`,
      `<h2>big text</h2>`,
      `Joe is ${Math.random() > 0.5 ? "attractive" : "ugly"}`,
      `Oi its 'm8', innit?`,
      `🙃🔫`,
      `yikes, I love it`,
      `as easy as tax evasion - messi`,
      `<h4>small text</h4>`,
      `ivy chan uwu`,
      `seoyeon i swear this is my website`,
      `laos mouse - seb`,
      `thank God i found a bench under a tree in the president's park because I NEED SOME SHADE`,
      `did you hear about joe?`,
      `Shrek the third is kinda underrated tbf`,
      `wait what why`,
      `what if you wanted to go to heaven but god say fuck you`,
      `amogus`,
      `i like kids - joe`,
      `Lets get hypixel youtube rank guys! 1/30000`,
      `yareyareda ze`,
      `is that a jojo reference?`,
      `THIS SITE GETS AN EASY F TIER FROM ME`,
      `thanks i ${Math.random() > 0.5 ? "htae" : "hate"} it`,
      () => {
        let interval = setInterval(() => {
          const quote = document.getElementById("headerSubtitle");
          if (metersAway > 0) {
            quote.innerHTML = `I am within ${metersAway} meters and rapidly approaching`;
            metersAway--;
          } else if (metersAway <= 0) {
            quote.innerHTML = "Knock knock, I'm at your door.";
            clearInterval(interval);
          }
        }, 100);
      },
      `<img src="https://cdn.discordapp.com/emojis/775767117089865758.gif?v=1"  draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/837301591198924810.png?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/784933350569279498.png?v=1" draggable="false">`,
    ],
  },
  credits: [
    {
    },
  ],
};

