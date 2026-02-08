let currentDay = 0;

const days = [
    {
    title: "Hey Beautiful Babyyy girllll 🐥🤍",
    text: "Just a small surprise for you just look at it not much but still enjoy it and holing you will like what i did and like my also more and more heheheheheheee.",
    image: "images/01-main.png"
  },
  {
    title: "Happy Rose Day my Loveeeeee 🌹",
    text: "A rose for the most beautiful girl that fouond me loved me and made me what i am tpday.",
    image: "images/02-rose.png"
  },
  {
    title: "Happy Propose Day 💍",
    text: "I choose you today, tomorrow, always, ever and forever my love.",
    image: "images/03-propose.png"
  },
  {
    title: "Happy Chocolate Day 🍫",
    text: "Life is sour but you are the sweetness of the cholcolate that came dripping in ly life so my babyyy here is a chocolate for you.",
    image: "images/04-chocolate.png"
  },
  {
    title: "Happy Teddy Day 🐢",
    text: "Whenever you miss me, hug mr turtle tightly until you feel satisfied at that moment.",
    image: "images/05-teddy.png"
  },
  {
    title: "Happy Promise Day 🤞",
    text: "I am not good at it but still for you i will always promis to be with you for you and irritate you and make you happy, smile and blush.",
    image: "images/06-promise.png"
  },
  {
    title: "Happy Hug Day 🤗",
    text: "Here’s a hug for my chota sa babyyyy with allll my love for you my babyyyyy.",
    image: "images/07-hug.png"
  },
  {
    title: "Happy Kiss Day 😘",
    text: "Sealing my love with a kiss Untill we seal it with a thumb stamp just a little longer my love.",
    image: "images/08-kiss.png"
  },
  {
    title: "Will You Be My Valentine? ❤️",
    text: "Tension mt lo aj shoes silwane ni bolunga. But still can you come with me to have a walk until we get old and irritated looking at each other and happy that we stayed together facing all hardships for now and for the future self too. So one again WILL YOU LIKE TO BE WITH THIS DUMB AND BUMPHU LESS BOYFRIEND OF YOURS..???",
    image: "images/09-valentine.png"
  },
 {
    title: "My Babyyyy",
    text: "Happyyy valentines day my love hope so apko accha laga ho ya chota sa kalakriti by your kuttiii kaminiii. Missing you a lot my love and man kar raha hai bhag ka tera paas phir sa a jau just to hold you close to me once again, hugging you kissing you and wandering by holding your hand. just wishing ki sb sahi ho jai between us and in eachothers life also get clear like all we desire we get and all. so all the best and keep smiling because you have a beautiful smile and be brave and keep your head high my love. because I am here with you my love. at last once again I LOVE YOU MY BABYYYY 😚🤍🐥🫂",
  }
];

function loadDay() {
  document.getElementById("title").innerText = days[currentDay].title;
  document.getElementById("text").innerText = days[currentDay].text;
  document.getElementById("img").src = days[currentDay].image;
  document.getElementById("msg").innerText = "";
}

function sayYes() {
  if (currentDay < days.length - 1) {
    currentDay++;
    loadDay();
  }
}

function sayNo() {
  document.getElementById("msg").innerText = "Nope 😩 Try again You Can't run from me babyyyy girl.";
}

loadDay();
