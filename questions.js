/* Lesson 2: instructor-pattern practice.
 * 24 supplied review items + 6 additional multiple-choice practice items.
 * Question 12's answer is supported by the earlier Monitoring lesson notes.
 */
(() => {
  const questions = [];
  function identify(id, sourceQuestion, topic, prompt, answer, aliases, explanation) {
    questions.push({id, type: 'fill', sourceQuestion, topic, prompt, answer, aliases, explanation});
  }
  function tf(id, sourceQuestion, topic, prompt, answer, explanation) {
    questions.push({id, type: 'tf', sourceQuestion, topic, prompt, answer: answer ? 'True' : 'False', options: ['True', 'False'], explanation});
  }
  function mc(id, topic, prompt, answer, distractors, explanation) {
    questions.push({id, type: 'mc', sourceQuestion: null, topic, prompt, answer, options: [answer, ...distractors], explanation});
  }
  identify('i1',1,'GIS functions','The GIS function that uses geographic information to support planning, decision-making, and resource allocation.','Management',[],'Management uses geographic information to help plan and make decisions.');
  identify('i2',3,'GIS functions','The GIS function concerned with finding the exact position or geographic location of an object or phenomenon.','Mapping',[],'Your instructor uses Mapping for locating and showing geographic features.');
  identify('i3',5,'GIS components','The GIS component that includes computers, GPS devices, scanners, cameras, and other physical equipment.','Hardware',[],'Hardware means physical equipment.');
  identify('i4',7,'GIS applications','A GIS application that can identify flood-prone areas, landslide hazards, and other risks to support disaster preparedness and response.','Disaster Management',[],'The application is Disaster Management. GIS is the system used for this work.');
  identify('i5',9,'GIS concepts','The GIS concept that uses geographic information to answer questions such as “Where is it?”, “What is nearby?”, “What pattern exists?”, and “What may happen?”','GIS as a Question-Answering Tool',['gis as a question answering tool','question answering tool','gis as question answering tool'],'Use the term from your instructor: GIS as a Question-Answering Tool. Modelling covers possible conditions, but this question includes several kinds of questions.');
  identify('i6',10,'GIS components','The GIS component referring to the people who collect, manage, analyze, interpret, and use geographic information.','People',[],'People are the users who work with GIS.');
  identify('i7',11,'GIS applications','A GIS application used to identify suitable locations for crops and analyze agricultural land.','Agriculture',[],'Agriculture uses GIS to study land and find suitable places for crops.');
  identify('i8',12,'GIS functions','The GIS function that involves observing changes or conditions over time, such as changes in water level or land cover.','Monitoring',[],'Monitoring follows conditions and changes over time. This answer is supported by your lesson notes.');
  identify('i9',16,'GIS applications','A GIS application used to plan routes, analyze traffic, and manage transportation networks.','Transportation',[],'The application is Transportation. Routing is a task within this application.');
  identify('i10',17,'GIS components','The GIS component consisting of programs used to collect, process, analyze, and visualize geographic information.','Software',[],'Software means the programs used in GIS.');
  identify('i11',19,'GIS functions','The GIS function used to determine distance, area, length, or other spatial quantities.','Measurement',[],'Measurement tells us how far, how long, or how large something is.');
  identify('i12',20,'GIS concepts','A system that captures, stores, analyzes, manages, and displays information connected to locations on Earth.','Geographic Information System',['gis','geographical information system'],'Geographic Information System is the full name of GIS.');
  identify('i13',22,'GIS functions','The GIS function that uses geographic data to represent or predict possible future conditions.','Modelling',['modeling'],'Modelling represents a system or explores what might happen.');
  identify('i14',23,'GIS components','The GIS component referring to the procedures and techniques used to collect, process, analyze, and manage geographic information.','Methods',['methods/applications','methods and applications'],'Methods describe the procedures used in GIS work.');
  identify('i15',24,'GIS components','The GIS component consisting of geographic information such as maps, satellite imagery, coordinates, and attribute information.','Data',[],'Data are the geographic information and related details used by GIS.');
  tf('t1',2,'GIS components','Methods in GIS refer to the procedures and workflows used to collect, process, analyze, and manage geographic information.',true,'Methods describe how GIS work is carried out.');
  tf('t2',4,'GIS concepts','GIS stands for Geographic Information System.',true,'GIS means Geographic Information System.');
  tf('t3',6,'GIS concepts','GIS is used only for creating maps and cannot support analysis or decision-making.',false,'GIS also supports analysis and decision-making.');
  tf('t4',8,'GIS components','Hardware refers to the physical devices used to operate and interact with a GIS.',true,'Computers, GPS devices, and scanners are hardware.');
  tf('t5',13,'GIS components','The five major components of GIS include Hardware, Software, People, Methods, and Data.',true,'Learn the components and their roles, not just their number.');
  tf('t6',14,'GIS components','GIS software is responsible only for storing files and cannot perform spatial analysis.',false,'GIS software can analyze geographic information as well as store it.');
  tf('t7',15,'GIS components','People are not considered a component of a GIS because GIS is mainly computer-based.',false,'People are an essential GIS component.');
  tf('t8',18,'GIS functions','Mapping is one of the GIS functions used to represent geographic information visually.',true,'Mapping shows geographic information in a visual form.');
  tf('t9',21,'GIS components','GIS data can include geographic information represented by layers such as roads, buildings, and other features.',true,'GIS layers can represent different kinds of geographic features.');
  mc('m1','GIS components','The GIS component that includes computers, scanners, and GPS devices.','Hardware',['Software','Data','Methods'],'These are physical devices, so they are hardware.');
  mc('m2','GIS functions','The GIS function used to find the distance between two places.','Measurement',['Mapping','Monitoring','Management'],'Distance is a quantity, so the function is Measurement.');
  mc('m3','GIS functions','The GIS function used to observe changes in land cover over time.','Monitoring',['Measurement','Modelling','Mapping'],'Observing change over time is Monitoring.');
  mc('m4','GIS functions','The GIS function used to predict possible future conditions.','Modelling',['Monitoring','Measurement','Management'],'Modelling explores possible conditions; monitoring observes changes.');
  mc('m5','GIS applications','The GIS application used to plan routes and study traffic.','Transportation',['Agriculture','Disaster Management','Public Health'],'Transportation is the application area. Routing is one of its tasks.');
  mc('m6','GIS applications','The GIS application used to identify flood and landslide hazards.','Disaster Management',['Transportation','Agriculture','Real Estate'],'Disaster Management uses hazard information to support preparedness and response.');
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
    explanation: 'Collection: GPS, cameras, probes. Input: scanners, digitizers. Output: printers, monitors, plotters. Analysis and storage: computers, hard drives. Data Analysis is accepted here; the complete category in your lesson is Data Analysis and Storage. All four different categories correct = one point.'
  });
  window.GIS_QUESTIONS = questions;
})();
