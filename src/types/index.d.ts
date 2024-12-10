export interface CSVRecord {
  "Id": string;
  "Start time": string;
  "Completion time": string;
  "Email": string;
  "Name": string;
  "Where is your institution based?": string;
  "Please select your organization type": string;
  "What is your official job title?": string;
  "What is the nature / contract type of your current employment?": string;
  "Please select the discipline in which you work. Please select all that apply.": string;
  "What is the highest level of education you have attained?": string;
  "In which discipline is your highest academic qualification?": string;
  "Do you consider yourself a professional Research Software Engineer (RSE) ?": string;
  "How many years of software development experience do you have?": string;
  "On average, how much of your time is spent developing software?": string;
  "On average, how much of your time is spent on research?": string;
  "On average, how much of your time is spent on management and/or administration?": string;
  "On average, how much of your time is spent on teaching/training?": string;
  "What are the barriers for someone to choose a job as an Arts/Humanities Research Software Engineer (AH RSE)? Please rank each of the following items in order of importance with #1(top) being the most ": string;
  "Do you always work with the same researchers, or do you regularly change the researchers you work with?": string;
  "Are you part of a dedicated research group within your institution?": string;
  "Describe your work pattern:": string;
  "Are you normally working on a single or multiple projects?": string;
  "Are you currently working or have you worked in industry projects as well?": string;
  "Have you participated in any pan-institutional RSE collaboration or activity?": string;
  "Are you a member of an association of Research Software Engineers, or more generally research technical professionals?": string;
  "Would you be interested in joining such an organisation?": string;
  "What would you hope to get out of such an organisation? Please rank each of the following items in order of importance with #1(top) being the most important object to #3(last) being the least importan": string;
  "In general, when your software contributes to a paper, are you acknowledged in that paper?": string;
  "Have you contributed to research articles as the primary author?": string;
  "Have you contributed to other types of research outputs (reports, prototypes)?": string;
  "Do you feel that your contribution to research is recognised by your supervisor/line manager/ the researchers you work with/ your institution?": string;
  "Have you presented your software work at a conference or workshop?": string;
  "How many software developers typically work on your projects/team ?": string;
  "Describe briefly your team structure": string;
  "Do your research software projects typically include a (technical ) project manager?": string;
  "What is the bus factor of your most important software project? (The bus factor designates the minimal number of developers that have to be hit by a bus (or quit) before a project is incapacitated)\n": string;
  "How often do you licensing software you produce under an open-source license ?": string;
  "How often do you associate your software with a Digital Object Identifier (DOI)?": string;
  "Do you have an ORCID ID?": string;
  "How is your current research software work funded?": string;
  "Are you willing and/or able to act as PI on grants?": string;
  "Are you supported in your funding applications by your institution (policy-wise/research office)?": string;
  "How do you assess existing funding provision in the arts and humanities for the following areas: \n. technical assessment of funded projects and research outputs ": string;
  "How do you assess existing funding provision in the arts and humanities for the following areas: \n. sustainability of funded projects and research outputs ": string;
  "How do you assess existing funding provision in the arts and humanities for the following areas: \n. infrastructure provision, including access to HPC / scalable compute": string;
  "How do you assess existing funding provision in the arts and humanities for the following areas: \n. devoted AH RSE work (pool) ": string;
  "How do you assess existing funding provision in the arts and humanities for the following areas: \n. RSE compute capability ": string;
  "How do you assess existing funding provision in the arts and humanities for the following areas: \n. maintenance of technical infrastructure (data repositories, services, systems) ": string;
  "What do you consider as a RSE AH community training priority (choose all that apply)": string;
  "What do you consider as RSE AH community Policy priorities ": string;
  "Please enter your email address (this will not be connected with your answers) (optional)": string;
  "Please enter your name (this will not be connected with your answers) (optional)": string;
  "Can we add your email address to a list run by the UK-IE CIG for AH RSEs? We'd like to share information on community events, learning and networking opportunities (optional)": string;
  "Any other comments? "
}

export interface InputData { id: number; value: number; label: string; } 

export type Field = {
  data: string[];
  label: string;
  note?: string;
  type: string;
  answersNumber: number;
};
