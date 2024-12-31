// 12 based on month 
const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Scorpio", "Saggitarius"
];

// 31 based on day
 // Compliments array
 const compliments = [
    "You have a great sense of humor!",
    "Your positivity is contagious.",
    "You light up the room.",
    "You are a true friend.",
    "Your creativity inspires me.",
    "You have an amazing smile.",
    "Your kindness is a gift to those around you.",
    "You bring out the best in others.",
    "Your perspective is refreshing.",
    "You are a great listener.",
    "Your dedication is admirable.",
    "You have impeccable taste.",
    "You are wise beyond your years.",
    "You have a great sense of style.",
    "You are a ray of sunshine.",
    "You have a beautiful soul.",
    "You make people feel valued.",
    "You are an incredible problem solver.",
    "Your determination is inspiring.",
    "You are a fantastic leader.",
    "Your laughter is infectious.",
    "You are incredibly thoughtful.",
    "You radiate confidence.",
    "Your hard work pays off.",
    "You are a wonderful conversationalist.",
    "You have a heart of gold.",
    "You are a shining example to others.",
    "Your patience is remarkable.",
    "You are a breath of fresh air.",
    "You have an exceptional talent.",
    "Your courage is inspiring."
];


// 20
const victimCardCompliments = [
    "You always go out of your way for others, but they rarely notice.",
    "Your kindness is often taken for granted.",
    "You put others first, yet it feels like no one does the same for you.",
    "You always lend a helping hand, but people forget to return the favor.",
    "You are so selfless, yet people don't appreciate your sacrifices.",
    "You do so much for others, but they don’t seem to value it.",
    "Your generosity knows no bounds, yet people often overlook it.",
    "You always show up for others, but no one seems to show up for you.",
    "You care so deeply, even when it feels like no one cares for you.",
    "You give your all to people who don't give back.",
    "You are always there for others, even when they forget about you.",
    "You always see the best in people, but they don't do the same for you.",
    "Your efforts often go unnoticed, but they truly make a difference.",
    "You are always the bigger person, even when it’s unfair.",
    "You forgive so easily, even when others don't deserve it.",
    "You put so much love into the world, even when it doesn’t come back to you.",
    "You go above and beyond for others, but it feels like no one goes above and beyond for you.",
    "You are always understanding, even when others fail to understand you.",
    "You give second chances to people who don't deserve them.",
    "You work so hard for others, yet they rarely acknowledge your efforts."
];



// 30
const lifeRecommendations = [
    "Feed a street dog or cat and spread kindness.",
    "Spend 10 minutes meditating daily for inner peace.",
    "Volunteer at a local shelter to help those in need.",
    "Start a gratitude journal and write three things you're thankful for every day.",
    "Plant a tree and contribute to a greener planet.",
    "Take a 15-minute walk in nature to refresh your mind.",
    "Smile at a stranger and brighten their day.",
    "Read a self-help book to expand your perspective.",
    "Spend quality time with your family without distractions.",
    "Learn a new skill or hobby that excites you.",
    "Compliment someone genuinely and watch their face light up.",
    "Declutter your space to create a peaceful environment.",
    "Drink more water to stay hydrated and healthy.",
    "Try cooking a healthy meal for yourself and loved ones.",
    "Disconnect from your phone for an hour and enjoy the present moment.",
    "Write a letter of appreciation to someone who has impacted your life.",
    "Donate old clothes or items to those in need.",
    "Practice random acts of kindness to make someone's day better.",
    "Start exercising regularly for physical and mental well-being.",
    "Spend time journaling your thoughts and emotions.",
    "Listen to uplifting music to boost your mood.",
    "Reconnect with an old friend and cherish the bond.",
    "Make a vision board for your future goals.",
    "Help a neighbor with a small task or favor.",
    "Try learning basic first aid to help others in emergencies.",
    "Make an effort to reduce plastic usage and live sustainably.",
    "Practice deep breathing exercises to reduce stress.",
    "Spend a day exploring your city or town like a tourist.",
    "Avoid negative self-talk and be kinder to yourself.",
    "Start saving a small portion of your income for future goals."
];


// 20
const futurePredictions = [
    "You will become a crorepati and live a luxurious life.",
    "A great opportunity is on its way; embrace it wholeheartedly.",
    "You will soon meet someone who will change your life forever.",
    "Financial abundance is heading your way, prepare to celebrate!",
    "You will achieve your dream job in the near future.",
    "A surprise gift from a loved one will make you very happy.",
    "You will travel to a dream destination you've always wished for.",
    "Your hard work will soon be recognized and rewarded handsomely.",
    "A creative idea of yours will bring you immense success.",
    "You will inspire others with your achievements and story.",
    "Unexpected good news will brighten your week very soon.",
    "You are destined to build something amazing that will benefit others.",
    "A long-held wish of yours will come true in the next few months.",
    "You will find a mentor who will guide you to great success.",
    "Happiness and prosperity will follow you wherever you go.",
    "You will master a skill that will transform your career.",
    "Your health will improve significantly, and you’ll feel more energetic.",
    "A new friendship will bring joy and positivity to your life.",
    "You will overcome a major challenge and emerge stronger.",
    "You will live a peaceful and fulfilling life surrounded by loved ones."
];

const form = document.getElementById('astro_form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("Form Submitted");
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const date = Number(document.getElementById('date').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);
    
    const result = document.getElementById('result');

    const firstMessage = `Hello, ${name} ${surname}.`;
    const secondMessage = `Your Zodiac Sign is ${zodiacSigns[month - 1]}`;
    const thirdMessage = compliments[date - 1];

    let index = Math.floor(Math.random() * 20);
    const fourthMessage = victimCardCompliments[index];

    // Saurav Kumar 2005= 5 * 4 * 2005 = 59040 % 30 = 0---29(range)
    index = (name.length * surname.length * year) % 30;
    const fifthMessage = lifeRecommendations[index];

    index = (date * month * year) % 20; // 0-19
    const sixthMessage = futurePredictions[index];

    result.innerText = `${firstMessage} ${secondMessage} ${thirdMessage} ${fourthMessage} Our Reccomendation for you: ${fifthMessage} Your Future Prediction is : ${sixthMessage}`;
    
})