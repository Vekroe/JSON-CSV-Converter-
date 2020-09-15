const curlWeight = {
  type: "number",
  metric: "curlWeight",
  text: "What is the last weight you curled at the gym? 💪",
  placeholder: "in pounds"
};
const gymSentiment = {
  type: "choice",
  metric: "gymSentiment",
  text: "How do you feel about your most recent gym session?",
  choices: ["Bad", "Average", "Great"]
};
const workoutParticipation = {
  type: "choice",
  metric: "workoutParticipation",
  text: "Did you workout today?",
  choices: ["No", "Yes"]
};
const workoutReason = {
  type: "choice",
  metric: "workoutReason",
  text: "Do you know why your working out?",
  choices: ["No", "Yes"]
};
const workoutMotivation = {
  type: "segment",
  metric: "workoutMotivation",
  text: "Have you been motivated to go to the gym lately?",
  choices: ["Nope", "Some", "Average", "Yes", "Very"]
};

module.exports = {
  title: "The Gym",
  author: "LifeMetrics",
  description: "About your gym workouts.",
  default: false,
  public: true,
  questions: [
    curlWeight,
    gymSentiment,
    workoutParticipation,
    workoutReason,
    workoutMotivation
  ]
};
