/* jshint esversion: 8 */

// Quiz game questions
const questions = [
    {
        question: "What does CPL mean?",
        choices: [
            { text: "Commercial Pilot License", correct: true},
            { text: "Can Pilots Land?", correct: false},
            { text: "Clearance Prior Landing", correct: false},
            { text: "Caution Parachute Location", correct: false},
        ]        
    },
    {
        question: "In which of the following weather conditions can you expect the lowest visibility?",
        choices: [
            { text: "Haze", correct: false},
            { text: "Mist", correct: false},
            { text: "Fog", correct: true},
            { text: "Moderate rain", correct: false},
        ]        
    },
    {
        question: "You cannot become an airline pilot if your height is less than 1.575 metres.",
        choices: [
            { text: "False", correct: false},
            { text: "True", correct: true},
            { text: "Depends on which country", correct: false},
            { text: "Depends on which specific aircraft and type-rating", correct: false},
        ]        
    },
    {
        question: "Alpha, Bravo, Charlie, Delta, Echo, ...",
        choices: [
            { text: "Fokker", correct: false},
            { text: "Facebook", correct: false},
            { text: "Flight", correct: false},
            { text: "Foxtrot", correct: true},
        ]        
    },
    {
        question: "How long does it take to train to be a pilot at a Flight Academy?",
        choices: [
            { text: "4 year", correct: false},
            { text: "22 months", correct: true},
            { text: "16 months", correct: false},
            { text: "3 years", correct: false},
        ]        
    },
    {
        question: "What is the collective name of the 6 instruments that allow you to fly an aircraft even when you cannot see outside?",
        choices: [
            { text: "Basic six", correct: true},
            { text: "Blind instruments", correct: false},
            { text: "Instrumental Flight Gauges", correct: false},
            { text: "Trust the six", correct: false},
        ]        
    },
    {
        question: "What is UTC?",
        choices: [
            { text: "Cordinated Universal Time", correct: false},
            { text: "A time standard that doesn't observe daylight", correct: false},
            { text: "Saying time or time zones", correct: false},
            { text: "All choices are correct", correct: true},
        ]        
    },
    {
        question: "Which statement is correct?",
        choices: [
            { text: "The lower the speed, the greater the lift on an aircraft", correct: false},
            { text: "The higher the speed, the lower the lift on an aircraft", correct: false},
            { text: "The higher the speed, the greater the lift on an aircraft", correct: true},
            { text: "The lower the speed, the lower the lift on an aircraft", correct: false},
        ]        
    },
    {
        question: "What does RPM stand for?",
        choices: [
            { text: "Runtime errors per minute", correct: false},
            { text: "Revolutions per minute", correct: true},
            { text: "Rides per minute", correct: false},
            { text: "Range per minute", correct: false},
        ]        
    },
    {
        question: "Which force does not usually act upon an aircraft during flight?",
        choices: [
            { text: "Lift", correct: false},
            { text: "Drag", correct: false},
            { text: "Muscle power", correct: true},
            { text: "Gravity", correct: false},
        ]        
    },
    {
        question: '"G-force" refers to what?"',
        choices: [
            { text: "A Jedi warplane trick", correct: false},
            { text: "Warp capability", correct: false},
            { text: "Force that act upon the aircraft body", correct: false},
            { text: "The forces a pilot endures during high-speed maneuvering", correct: true},
        ]        
    },
    {
        question: "The troposphere is the:",
        choices: [
            { text: "Inner layer of the atmoshere", correct: true},
            { text: "Middle layer of the atmosphere", correct: false},
            { text: "Outer layer of the atmosphere", correct: false},
            { text: "Upper layer of the atmosphere", correct: false},
        ]        
    },
    {
        question: "An approaching aircraft that is on a constant bearing represents:",
        choices: [
            { text: "The least risk of collision", correct: false},
            { text: "Absolutely no risk of collision", correct: true},
            { text: "The greatest risk of collision", correct: false},
            { text: "Moderate risk of collision", correct: false},
        ]        
    },
    {
        question: "What do the floor pedals in a cockpit control?",
        choices: [
            { text: "Engine power", correct: false},
            { text: "Airspeed", correct: false},
            { text: "Rudder", correct: true},
            { text: "Height", correct: false},
        ]        
    },
    {
        question: "What's the purpose of an altimeter?",
        choices: [
            { text: "To measure height", correct: true},
            { text: "To reduce drag", correct: false},
            { text: "To reduce air pressure", correct: false},
            { text: "To measure pressure", correct: false},
        ]        
    },
    {
        question: "The curve on top of an airplane wing helps to do what?",
        choices: [
            { text: "Offers more space for missiles", correct: false},
            { text: "Decreases pressure on top of the wing", correct: true},
            { text: "Controls yaw", correct: false},
            { text: "Makes it look cooler", correct: false},
        ]        
    },
    {
        question: "What do the ailerons control?",
        choices: [
            { text: "Spirals", correct: false},
            { text: "Dive", correct: false},
            { text: "Speed", correct: false},
            { text: "Roll", correct: true},
        ]        
    },
    {
        question: "What happens to air pressure as your altitude climbs?",
        choices: [
            { text: "It increases", correct: false},
            { text: "Variable", correct: false},
            { text: "It decreases", correct: true},
            { text: "It stays the same", correct: false},
        ]        
    },
    {
        question: "What happens when the pilot pushes the throttle forward?",
        choices: [
            { text: "Engine power increases", correct: true},
            { text: "Pilot's seat ejects", correct: false},
            { text: "Wing angles drop", correct: false},
            { text: "The doors lock", correct: false},
        ]        
    },
    {
        question: "What part of the plane creates thrust?",
        choices: [
            { text: "Yoke", correct: false},
            { text: "Wings", correct: false},
            { text: "Midsection", correct: false},
            { text: "Engines", correct: true},
        ]        
    },
]



