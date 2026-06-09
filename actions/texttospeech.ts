interface Result {
  intro: string;
  careerDirection: string;
  jobRole: string;
  gapAnalysis: string;
  learningPlan: string;
  resumeImprovements: string;
}

export function speakResult(result: Result, index = 0) {
  const sections = [
    result.intro,
    result.careerDirection,
    result.jobRole,
    result.gapAnalysis,
    result.learningPlan,
    result.resumeImprovements,
  ];

  if (index >= sections.length) return;

  const utterance = new SpeechSynthesisUtterance(sections[index]);

  utterance.onend = () => {
    speakResult(result, index + 1);
  };

  speechSynthesis.speak(utterance);
}