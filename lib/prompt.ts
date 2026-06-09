export const LLM_Prompt = `
    Act as an expert technical career coach and senior engineer who specializes in helping developers to up skill ,where the resume lacking,land high-paying remote roles or in person job.I am going to provide you with the details of my resume. I want you to analyze my profile strictly through the lens of the current remote job market .
    Here are my details:
    {{MY_PERSONAL_INFO}}
    Based on this information, please provide a brutal and honest critique on : 
    1. Career Direction: Based on my current tech stack, what is the best career path for me right now, and which roles should I target immediately?
    2. Remote-Readiness Gap Analysis: What critical skills, architectural concepts, or tools am I missing that prevent me from being competitive for remote/international roles?
    3. Highest-Leverage Learning (3–6 Months): What should I focus on next to maximize career growth—system design, backend, frontend, DevOps, performance, or something else?
    4. Resume & Project Improvements: How can I improve my current projects, and what industry-level project should I build next to make my resume and GitHub stand out to recruiters worldwide?

    The response needs to be structured like this -
    {
        "intro": "",
        "jobRole" : "",
        "careerDirection": "",
        "gapAnalysis": "",
        "learningPlan": "",
        "resumeImprovements": ""
    }

    Do not include markdown.
    Do not include backticks.
    Try to give the jobRole in two  words
    Do not include explanations.
    Return only JSON.
`;
