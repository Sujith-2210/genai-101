const facts = {
    food: [
        "Honey never spoils.",
        "Bananas are berries, but strawberries aren't.",
        "Pineapples take two years to grow.",
        "Apples float in water because they are 25% air",
        "Carrots were originally purple, not orange",
        "Chocolate was once used as currency",
        "McDonald's sells 75 hamburgers every second",
        "The world's most expensive pizza costs $12,000",
        "Ketchup was once sold as medicine",
        "The fear of cooking is called 'mageirocophobia'",
        "Bananas are slightly radioactive",
        "A quarter of all hazelnuts go into making Nutella"
    ],
    science: [
        "Water can boil and freeze at the same time.",
        "A day on Venus is longer than a year on Venus.",
        "Octopuses have three hearts.",
        "Bananas are berries, but strawberries aren't",
        "Honey never spoils - archaeologists found 3000-year-old edible honey",
        "20% of Earth's oxygen is produced by the Amazon rainforest",
        "A single lightning bolt can cook 100,000 pieces of toast",
        "The human body contains enough carbon to make 900 pencils",
        "The average person spends 6 months of their lifetime waiting for red lights",
        "A cloud can weigh more than a million pounds",
        "DNA can store up to 2.2 petabytes of data per gram",
        "The speed of light in miles per hour is 670,616,629 mph"
    ],
    history: [
        "Cleopatra lived closer to the moon landing than to the building of the Great Pyramid.",
        "Oxford University is older than the Aztec Empire.",
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "The shortest war in history lasted only 38 minutes",
        "Nintendo was founded in 1889 as a playing card company",
        "Ancient Egyptians used honey as medicine",
        "The first oranges weren't orange - they were green",
        "Ice cream cones were invented at the 1904 World's Fair",
        "Ancient Romans used crushed mouse brains as toothpaste",
        "The Great Wall of China took over 2000 years to build",
        "Coca-Cola was originally green",
        "The first person convicted of speeding was going 8 mph"
    ],
    animals: [
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have blue blood.",
        "Cows have best friends.",
        "Lions can roar so loud it can be heard from 5 miles away",
        "Elephants are the only mammals that can't jump",
        "A sloth's metabolism is so slow that it can take up to 30 days to digest one leaf",
        "A woodpecker can peck 20 times per second",
        "Penguins propose to their partners with a pebble",
        "Honey bees can recognize human faces",
        "Flamingos aren't naturally pink - they get their color from the food they eat",
        "Giraffes have the same number of vertebrae as humans",
        "Dolphins give each other names"
    ],
    space: [
        "There are more stars in the universe than grains of sand on all the Earth's beaches.",
        "One day on Mercury is equivalent to 59 Earth days.",
        "Neutron stars can spin 600 times per second.",
        "One million Earths could fit inside the Sun",
        "A day on Venus is longer than its year",
        "The sunset on Mars appears blue",
        "There's a planet made entirely of diamonds",
        "Space is completely silent",
        "The largest known star is UY Scuti",
        "Black holes are invisible",
        "Saturn's moon Titan has liquid methane lakes",
        "Our galaxy smells like raspberries and rum"
    ]
};

// Function to generate random fact
function generateFact() {
    const category = document.getElementById('category').value;
    const factArray = facts[category];
    const randomIndex = Math.floor(Math.random() * factArray.length);
    const factDiv = document.getElementById('fact');
    
    // Add fade-out effect
    factDiv.style.opacity = 0;
    
    // Wait for fade-out, then update text and fade-in
    setTimeout(() => {
        factDiv.textContent = factArray[randomIndex];
        factDiv.style.opacity = 1;
    }, 500);
}

// Add event listeners
document.getElementById('generate').addEventListener('click', generateFact);
document.getElementById('category').addEventListener('change', generateFact);

// Generate initial fact when page loads
window.addEventListener('load', generateFact);
