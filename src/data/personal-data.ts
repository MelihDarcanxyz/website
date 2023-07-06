export type link = {
    name: string,
    url: string,
};

export type educationElement = {
    school: string,
    specialty: string,
    rank: string,
    date: string,
};

export type experience = {
    position: string,
    location: string,
    date: string,
    work_done: Array<string>,
    references: Array<link>,
};

export type reference = {
    name: string,
    title: string,
    about: string,
}

export const contacts: Array<link> = [
    {
        "name": "e-mail",
        "url": "mailto:melih.darcan@tutamail.com",
    },
    {
        "name": "github",
        "url": "https://github.com/MelihDarcanxyz",
    },
    {
        "name": "linkedin",
        "url": "https://www.linkedin.com/in/melih-d-6203b71b7/",
    },
    {
        "name": "website",
        "url": "https://melihdarcan.xyz",
    },
];

export const neofetch: object = {
    "Full Name": "Melih DARCAN",
    "Codename": "Melo",
    "Status": "Alive",
    "Species": "Human",
    "Rank": "Undergraduate",
    "Specialty": "Artificial Intelligence Engineering",
    "Affiliation": "Hacettepe University Biological Data Science Laboratory",
};

export const education: Array<educationElement> = [
    {
        "school": "Hacettepe University",
        "specialty": "Artificial Intelligence Engineering",
        "rank": "Undergraduate",
        "date": "2020 - now",
    },
];

export const interests: Array<string> = [
    "Agricultural Sciences",
    "Bioinformatics",
    "Multi-agent Reinforcement Learning"
];

export const familiarWith: Array<string> = [
    "SQL",
    "Java",
    "C++",
    "C",
];

export const goodAt: Array<string> = [
    "Machine Learning",
    "Python",
    "Linux (I use arch btw)",
    "Learning (very good)",
];

export const hobbies: Array<string> = [
    "Throat singing",
    "Archery",
    "Messing with my computer",
    "Turkish folk dance (especially zeybek)",
];

export const languages: Array<string> = [
    "English, B2 - C1",
    "Spanish, A0 - A1",
    "Dutch, A0 - A1",
    "Turkish, Native",
];

export const achievements: Array<link> = [
    {
        "name": "Supervised Machine Learning: Regression and Classification by DeepLearning.AI",
        "url": "https://www.coursera.org/account/accomplishments/verify/CRDCEYXEPZDU",
    },
    {
        "name": "Finalist (and 5th) of METUSTAT Datathon 2022 as the team \"Muzdarip\"",
        "url": "https://verified.sertifier.com/en/verify/94905103601870/",
    },
    {
        "name": "CS50x: CS50's Introduction to Computer Science by HarvardX",
        "url": "https://courses.edx.org/certificates/33432f991617415a89c5b97608e05231",
    },
    {
        "name": "Denizbank Denizaşırı Online Internship",
        "url": "https://verified.sertifier.com/tr/verify/567659536867/"
    },
]

export const experiences: Array<experience> = [
    {
        "position": "Lab Intern",
        "location": "Hacettepe University Biological Data Science Laboratory",
        "date": "2022 - now",
        "work_done": [
            "Helped the development of pypath python library",
            "Developed the lab website from scratch"
        ],
        "references": [
            {
                "name": "pypath",
                "url": "https://github.com/saezlab/pypath",
            },
            {
                "name": "website",
                "url": "https://github.com/HUBioDataLab/website",
            },
        ],
    }
]

export const references: Array<reference> = [
    {
        "name": "Tunca Doğan",
        "title": "Assoc. Prof.",
        "about": "https://avesis.hacettepe.edu.tr/tuncadogan",
    },
    {
        "name": "My family",
        "title": "The best reference possible",
        "about": "",
    }
]