module.exports = {
    "title": "users",
    "author": "LifeMetrics",
    "description": "About your gym workouts.",
    "default": false,
    "public": true,
    "questions": [
        {
            "title": "The Gym",
            "author": "LifeMetrics",
            "description": "About your gym workouts.",
            "default": "false",
            "public": "true",
            "type": "undefined",
            "metric": "undefined",
            "text": "undefined",
            "placeholder": "undefined",
            "choices": "undefined"
        },
        {
            "title": "undefined",
            "author": "undefined",
            "description": "undefined",
            "default": "undefined",
            "public": "undefined",
            "type": "number",
            "metric": "curlWeight",
            "text": "What is the last weight you curled at the gym? 💪",
            "placeholder": "in pounds",
            "choices": "undefined"
        },
        {
            "title": "undefined",
            "author": "undefined",
            "description": "undefined",
            "default": "undefined",
            "public": "undefined",
            "type": "choice",
            "metric": "gymSentiment",
            "text": "How do you feel about your most recent gym session?",
            "placeholder": "",
            "choices": "[\"Bad\",\"Average\",\"Great\"]"
        },
        {
            "title": "undefined",
            "author": "undefined",
            "description": "undefined",
            "default": "undefined",
            "public": "undefined",
            "type": "choice",
            "metric": "workoutParticipation",
            "text": "Did you workout today?",
            "placeholder": "",
            "choices": "[\"No\",\"Yes\"]"
        },
        {
            "title": "undefined",
            "author": "undefined",
            "description": "undefined",
            "default": "undefined",
            "public": "undefined",
            "type": "choice",
            "metric": "workoutReason",
            "text": "Do you know why your working out?",
            "placeholder": "",
            "choices": "[\"No\",\"Yes\"]"
        },
        {
            "title": "undefined",
            "author": "undefined",
            "description": "undefined",
            "default": "undefined",
            "public": "undefined",
            "type": "segment",
            "metric": "workoutMotivation",
            "text": "Have you been motivated to go to the gym lately?",
            "placeholder": "",
            "choices": "[\"Nope\",\"Some\",\"Average\",\"Yes\",\"Very\"]"
        }
    ]
}