const defaults = {
  type: "segment",
  overText: "To what extent do you feel this way?",
  choices: ["Not at All", "A Little", "Moderately", "Quite a Bit", "Extremely"]
};

const Interested = Object.assign(
  {
    metric: "Interested",
    text: "Interested",
    details:
      "Interested: showing curiosity or concern about something or someone; having a feeling of interest."
  },
  defaults
);
const Irritable = Object.assign(
  {
    metric: "Irritable",
    text: "Irritable",
    details:
      "Irritable: Having or showing a tendency to be easily annoyed or made angry."
  },
  defaults
);
const Distressed = Object.assign(
  {
    metric: "Distressed",
    text: "Distressed",
    details: "Distressed: Suffering from anxiety, sorrow, or pain."
  },
  defaults
);
const Alert = Object.assign(
  {
    metric: "Alert",
    text: "Alert",
    details:
      "Alert: Quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant."
  },
  defaults
);
const Excited = Object.assign(
  {
    metric: "Excited",
    text: "Excited",
    details: "Excited: To be very enthusiastic and eager."
  },
  defaults
);
const Ashamed = Object.assign(
  {
    metric: "Ashamed",
    text: "Ashamed",
    details:
      "Ashamed: Embarrassed or guilty because of one's actions, characteristics, or associations."
  },
  defaults
);
const Upset = Object.assign(
  {
    metric: "Upset",
    text: "Upset",
    details: "Upset: A state of being unhappy, disappointed, or worried."
  },
  defaults
);
const Inspired = Object.assign(
  {
    metric: "Inspired",
    text: "Inspired",
    details:
      "Inspired: Of extraordinary quality, as if arising from some external creative impulse."
  },
  defaults
);
const Strong = Object.assign(
  {
    metric: "Strong",
    text: "Strong",
    details:
      "Strong: Able to withstand great force or pressure; not easily disturbed, upset, or affected."
  },
  defaults
);
const Nervous = Object.assign(
  {
    metric: "Nervous",
    text: "Nervous",
    details:
      "Nervous: Easily agitated or alarmed; tending to be anxious; highly strung."
  },
  defaults
);
const Guilty = Object.assign(
  {
    metric: "Guilty",
    text: "Guilty",
    details:
      "Guilty: Conscious of or affected by a feeling of guilt;culpable of or responsible for specified wrongdoing."
  },
  defaults
);
const Determined = Object.assign(
  {
    metric: "Determined",
    text: "Determined",
    details:
      "Determined: Having made a firm decision and being resolved not to change it; processing or displaying resolve."
  },
  defaults
);
const Scared = Object.assign(
  {
    metric: "Scared",
    text: "Scared",
    details: "Scared: Fearful; frightened."
  },
  defaults
);
const Attentive = Object.assign(
  {
    metric: "Attentive",
    text: "Attentive",
    details: "Attentive: Paying close attention to something."
  },
  defaults
);
const Hostile = Object.assign(
  {
    metric: "Hostile",
    text: "Hostile",
    details: "Hostile: Unfriendly; antagonistic."
  },
  defaults
);
const Jittery = Object.assign(
  {
    metric: "Jittery",
    text: "Jittery",
    details: "Jittery: Nervous or unable to relax."
  },
  defaults
);
const Enthusiastic = Object.assign(
  {
    metric: "Enthusiastic",
    text: "Enthusiastic",
    details:
      "Enthusiastic: Having or showing intense and eager enjoyment, interest, or approval."
  },
  defaults
);
const Active = Object.assign(
  {
    metric: "Active",
    text: "Active",
    details:
      "Active: Engaging or ready to engage in physically energetic pursuits."
  },
  defaults
);
const Proud = Object.assign(
  {
    metric: "Proud",
    text: "Proud",
    details:
      "Proud: Feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated."
  },
  defaults
);
const Afraid = Object.assign(
  {
    metric: "Afraid",
    text: "Afraid",
    details: "Afraid: Feeling fear or anxiety; frightened."
  },
  defaults
);

module.exports = {
  title: "PANAS",
  author: "LifeMetrics",
  description:
    "The Positive and Negative Affect Scale. A tool commonly used by psychologists in evaluating the mental well-being of a patient.",
  default: false,
  public: true,
  atMost: 3, //we don't want to put too many in there
  tags: ["PANAS"],
  questions: [
    Interested,
    Irritable,
    Distressed,
    Alert,
    Excited,
    Ashamed,
    Upset,
    Inspired,
    Strong,
    Nervous,
    Guilty,
    Determined,
    Scared,
    Attentive,
    Hostile,
    Jittery,
    Enthusiastic,
    Active,
    Proud,
    Afraid
  ]
};
