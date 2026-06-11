export interface PdfData {
    text: string;
    numpages: number;
    info: any;
}

export interface result {
  intro : string
  careerDirection : string
  jobRole : string
  gapAnalysis : string
  learningPlan : string
  resumeImprovements : string
}

export interface jobResult {
  url : string
  title : string
  content : string
  score : number
}