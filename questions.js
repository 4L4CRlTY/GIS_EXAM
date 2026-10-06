/* Page 1 only: GIS introduction, component names, and hardware.
 * Instructor-style wording; content follows the first supplied lesson page.
 */
(() => {
  const questions = [
  {
    "id": "p1-i1",
    "type": "fill",
    "topic": "GIS introduction",
    "prompt": "The system used to organize, analyze, visualize, and share information linked to locations.",
    "answer": "GIS",
    "aliases": [
      "Geographic Information System",
      "Geographical Information System"
    ],
    "explanation": "GIS connects information to places so we can understand the world."
  },
  {
    "id": "p1-i2",
    "type": "fill",
    "topic": "Hardware",
    "prompt": "The GIS component that includes computers and other physical devices.",
    "answer": "Hardware",
    "aliases": [],
    "explanation": "Hardware is the physical equipment used in GIS."
  },
  {
    "id": "p1-i3",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category that includes GPS devices, cameras, and probes.",
    "answer": "Data Collection",
    "aliases": [
      "collection"
    ],
    "explanation": "These devices collect data from the real world."
  },
  {
    "id": "p1-i4",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category that includes scanners and digitizers.",
    "answer": "Data Input",
    "aliases": [
      "input"
    ],
    "explanation": "Scanners and digitizers enter data into the computer."
  },
  {
    "id": "p1-i5",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category that includes printers, monitors, and plotters.",
    "answer": "Data Output",
    "aliases": [
      "output"
    ],
    "explanation": "These devices display or produce GIS results."
  },
  {
    "id": "p1-i6",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category of a camera used to gather GIS data.",
    "answer": "Data Collection",
    "aliases": [
      "collection"
    ],
    "explanation": "A camera collects images that can be used as data."
  },
  {
    "id": "p1-i7",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category of a scanner used to enter a paper map into a computer.",
    "answer": "Data Input",
    "aliases": [
      "input"
    ],
    "explanation": "A scanner turns a paper map into computer-readable input."
  },
  {
    "id": "p1-i8",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category of a monitor used to display a GIS map.",
    "answer": "Data Output",
    "aliases": [
      "output"
    ],
    "explanation": "A monitor displays results to the user."
  },
  {
    "id": "p1-i9",
    "type": "fill",
    "topic": "Hardware categories",
    "prompt": "The hardware category of a plotter used to print a large map.",
    "answer": "Data Output",
    "aliases": [
      "output"
    ],
    "explanation": "A printed map is an output from GIS."
  },
  {
    "id": "p1-i10",
    "type": "fill",
    "topic": "Hardware",
    "prompt": "The central hardware device that runs GIS software and allows users to work with collected data.",
    "answer": "Computer",
    "aliases": [
      "computers"
    ],
    "explanation": "The computer runs the software, stores data, and lets users interact with it."
  },
  {
    "id": "p1-t11",
    "type": "tf",
    "topic": "GIS introduction",
    "prompt": "GIS stands for Geographic Information System.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ],
    "explanation": "GIS is short for Geographic Information System."
  },
  {
    "id": "p1-t12",
    "type": "tf",
    "topic": "GIS introduction",
    "prompt": "GIS can analyze and share geographic information as well as display it.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ],
    "explanation": "GIS organizes, analyzes, visualizes, and shares data and information."
  },
  {
    "id": "p1-t13",
    "type": "tf",
    "topic": "GIS introduction",
    "prompt": "Knowing where something happens can help explain what happened, when, how, and why.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ],
    "explanation": "Location gives context to events in our local environment and the wider world."
  },
  {
    "id": "p1-t14",
    "type": "tf",
    "topic": "GIS components",
    "prompt": "Hardware, software, data, people, and methods/applications are the five main components of GIS.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ],
    "explanation": "These five components work together in a GIS."
  },
  {
    "id": "p1-t15",
    "type": "tf",
    "topic": "GIS components",
    "prompt": "People are excluded from the five main components of GIS.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ],
    "explanation": "People are one of the five main GIS components."
  },
  {
    "id": "p1-t16",
    "type": "tf",
    "topic": "Hardware",
    "prompt": "GIS hardware consists only of computer programs.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ],
    "explanation": "Hardware is physical equipment. Programs are software."
  },
  {
    "id": "p1-t17",
    "type": "tf",
    "topic": "Hardware categories",
    "prompt": "GPS devices, cameras, and probes are data collection hardware.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ],
    "explanation": "These devices gather data."
  },
  {
    "id": "p1-t18",
    "type": "tf",
    "topic": "Hardware categories",
    "prompt": "Scanners and digitizers belong to the data output category.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ],
    "explanation": "Scanners and digitizers belong to Data Input."
  },
  {
    "id": "p1-t19",
    "type": "tf",
    "topic": "Hardware categories",
    "prompt": "Printers, computer monitors, and plotters belong to the data output category.",
    "answer": "True",
    "options": [
      "True",
      "False"
    ],
    "explanation": "These devices present results on screen or on paper."
  },
  {
    "id": "p1-t20",
    "type": "tf",
    "topic": "Hardware categories",
    "prompt": "Computers and hard drives belong to the data collection category.",
    "answer": "False",
    "options": [
      "True",
      "False"
    ],
    "explanation": "Computers and hard drives are listed under Data Analysis and Storage."
  },
  {
    "id": "p1-m21",
    "type": "mc",
    "topic": "GIS introduction",
    "prompt": "The full meaning of the abbreviation GIS.",
    "answer": "Geographic Information System",
    "options": [
      "Geographic Information System",
      "Global Internet Service",
      "Geographic Input Software",
      "General Information Storage"
    ],
    "explanation": "GIS stands for Geographic Information System."
  },
  {
    "id": "p1-m22",
    "type": "mc",
    "topic": "GIS introduction",
    "prompt": "The set of activities GIS uses to work with information linked to places.",
    "answer": "Organize, analyze, visualize, and share",
    "options": [
      "Organize, analyze, visualize, and share",
      "Print, scan, copy, and staple",
      "Type, call, text, and record",
      "Install, restart, charge, and repair"
    ],
    "explanation": "GIS organizes, analyzes, visualizes, and shares geographic data and information."
  },
  {
    "id": "p1-m23",
    "type": "mc",
    "topic": "GIS components",
    "prompt": "The group that correctly lists the five main components of GIS.",
    "answer": "Hardware, software, data, people, and methods/applications",
    "options": [
      "Hardware, software, data, people, and methods/applications",
      "Hardware, software, scanners, printers, and monitors",
      "GPS, cameras, probes, scanners, and printers",
      "Maps, roads, rivers, lakes, and forests"
    ],
    "explanation": "The components include equipment, programs, information, users, and methods/applications."
  },
  {
    "id": "p1-m24",
    "type": "mc",
    "topic": "Hardware",
    "prompt": "The role of computer hardware in a GIS.",
    "answer": "Run software, store data, and let users interact with data",
    "options": [
      "Run software, store data, and let users interact with data",
      "Provide only printed maps",
      "Replace all people who use GIS",
      "Define the procedures for every GIS project"
    ],
    "explanation": "Computer hardware supports running software, storing data, and user interaction."
  },
  {
    "id": "p1-m25",
    "type": "mc",
    "topic": "Hardware categories",
    "prompt": "The hardware category that includes computers and hard drives.",
    "answer": "Data Analysis and Storage",
    "options": [
      "Data Analysis and Storage",
      "Data Collection",
      "Data Input",
      "Data Output"
    ],
    "explanation": "Computers process data, and hard drives store it."
  },
  {
    "id": "p1-m26",
    "type": "mc",
    "topic": "Hardware categories",
    "prompt": "The group of devices used for GIS data collection.",
    "answer": "GPS devices, cameras, and probes",
    "options": [
      "GPS devices, cameras, and probes",
      "Scanners and digitizers",
      "Printers, monitors, and plotters",
      "Computers and hard drives"
    ],
    "explanation": "Collection hardware gathers data from the real world."
  },
  {
    "id": "p1-m27",
    "type": "mc",
    "topic": "Hardware categories",
    "prompt": "The group of devices used for GIS data input.",
    "answer": "Scanners and digitizers",
    "options": [
      "Scanners and digitizers",
      "GPS devices, cameras, and probes",
      "Printers, monitors, and plotters",
      "Computers and hard drives"
    ],
    "explanation": "Input hardware enters data into the computer."
  },
  {
    "id": "p1-m28",
    "type": "mc",
    "topic": "Hardware categories",
    "prompt": "The group of devices used for GIS data output.",
    "answer": "Printers, monitors, and plotters",
    "options": [
      "Printers, monitors, and plotters",
      "Scanners and digitizers",
      "GPS devices, cameras, and probes",
      "Computers and hard drives"
    ],
    "explanation": "Output hardware displays or prints results."
  },
  {
    "id": "p1-m29",
    "type": "mc",
    "topic": "Hardware categories",
    "prompt": "The group of devices used for GIS data analysis and storage.",
    "answer": "Computers and hard drives",
    "options": [
      "Computers and hard drives",
      "GPS devices, cameras, and probes",
      "Scanners and digitizers",
      "Printers, monitors, and plotters"
    ],
    "explanation": "Computers and hard drives support processing and storing collected data."
  },
  {
    "id": "p1-m30",
    "type": "mc",
    "topic": "Why location matters",
    "prompt": "The way GIS can help a health team understand an outbreak of a contagious disease.",
    "answer": "Show the locations of cases and examine affected areas",
    "options": [
      "Show the locations of cases and examine affected areas",
      "Show patient names without any location information",
      "Replace all medical examinations",
      "Guarantee that no new cases will occur"
    ],
    "explanation": "Knowing where cases occur helps the team understand the affected area."
  }
];
  questions.push({
    id: 'e1', type: 'enum', sourceQuestion: null, topic: 'GIS components', entryLabel: 'Component',
    prompt: 'What are the five main components of GIS?',
    answer: 'Hardware, Software, People, Data, Methods',
    terms: [{name: 'Hardware'}, {name: 'Software'}, {name: 'People'}, {name: 'Data'},
      {name: 'Methods', aliases: ['method', 'applications', 'methods/applications', 'methods and applications', 'methods or applications']}],
    explanation: 'Hardware = equipment; software = programs; people = users; data = information; methods = procedures. Any order is accepted. This question earns one point when all five different components are correct.'
  });
  questions.push({
    id: 'e2', type: 'enum', sourceQuestion: null, topic: 'Hardware categories', entryLabel: 'Category',
    prompt: 'What are the four categories of GIS hardware?',
    answer: 'Data Collection, Data Input, Data Output, Data Analysis and Storage',
    terms: [
      {name: 'Data Collection', aliases: ['collection']},
      {name: 'Data Input', aliases: ['input']},
      {name: 'Data Output', aliases: ['output']},
      {name: 'Data Analysis and Storage', aliases: ['data analysis', 'analysis', 'analysis and storage', 'data analysis storage', 'analysis storage', 'data storage and analysis']}
    ],
    explanation: 'Collection: GPS, cameras, probes. Input: scanners, digitizers. Output: printers, monitors, plotters. Analysis and storage: computers, hard drives. Data Analysis is accepted here; the complete category name is Data Analysis and Storage. All four different categories correct = one point.'
  });
  window.GIS_QUESTIONS = questions;
})();
