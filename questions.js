/* Essential first-page Lesson 2 concepts. No counting or slogan-completion questions. */
(() => {
  const questions = [];
  function mc(id, topic, prompt, answer, distractors, explanation) {
    questions.push({id, type: 'mc', topic, prompt, answer, options: [answer, ...distractors], explanation});
  }
  function tf(id, topic, prompt, answer, explanation) {
    questions.push({id, type: 'tf', topic, prompt, answer: answer ? 'True' : 'False', options: ['True', 'False'], explanation});
  }
  function fill(id, topic, prompt, answer, aliases, explanation) {
    questions.push({id, type: 'fill', topic, prompt, answer, aliases, explanation});
  }
  mc('m1','Meaning & importance','What does GIS stand for?','Geographic Information System',['Global Information Service','Geographic Input Software','General Information System'],'GIS connects information to places.');
  mc('m2','The five components','What are the five main components of GIS?','Hardware, software, data, people, methods/applications',['GPS, cameras, probes, scanners, printers','Hardware, software, keyboards, monitors, printers','Maps, roads, rivers, lakes, forests'],'Remember: equipment, programs, information, users, and procedures.');
  mc('m3','Meaning & importance','What does GIS do with data?','Organize, analyze, visualize, and share it',['Only collect and store it','Only draw and print maps','Only record coordinates'],'GIS helps us organize data, study it, show it visually, and share it.');
  mc('m4','Meaning & importance','Why is knowing where an event happened important?','It helps us understand what happened and why',['It tells us everything about the event','It makes other data unnecessary','It only helps us print a map'],'Knowing where helps us understand what, when, how, and why something happened.');
  mc('m5','Hardware & devices','What is the role of hardware in GIS?','Run software, store data, and let users work with data',['Set the procedures for a project','Provide the facts being studied','Act as the computer program'],'Hardware is the physical equipment, such as computers and other devices.');
  mc('m6','Hardware & devices','GPS, cameras, and probes are used for what?','Data collection',['Data input','Data output','Data analysis and storage'],'These devices collect data.');
  mc('m7','Hardware & devices','Which devices are used for data input?','Scanners and digitizers',['Cameras and probes','Printers and plotters','Computers and hard drives'],'Scanners and digitizers enter data into the system.');
  mc('m8','Real-world applications','How can GIS help track a disease outbreak?','Show where disease cases occur',['Show only the total number of cases','List only the names of patients','Record only the dates of cases'],'Mapping case locations helps us see which areas are affected.');
  mc('m9','Real-world applications','What locations are needed to find the nearest supermarket?','Your location and the supermarket locations',['Only your location','Only the supermarket locations','Only the supermarket addresses, without your location'],'GIS can compare distances when it knows both locations.');
  mc('m10','Real-world applications','Which is an example of using GIS?','Tracking the path of a tornado',['Counting storms without their locations','Listing storm dates only','Recording wind speeds without locations'],'A tornado path shows where the tornado moved.');
  tf('t1','Meaning & importance','GIS only makes maps; it cannot analyze data.',false,'GIS can organize, analyze, visualize, and share data.');
  tf('t2','The five components','Hardware, software, and data are the only GIS components.',false,'People and methods/applications are also GIS components.');
  tf('t3','The five components','A computer is hardware. Its programs are software.',true,'Hardware = equipment. Software = programs.');
  tf('t4','The five components','Procedures belong to the data component of GIS.',false,'Procedures belong to methods/applications. Data means information.');
  tf('t5','Hardware & devices','Scanners and digitizers are data input devices.',true,'They bring data into the system.');
  tf('t6','Hardware & devices','Monitors, printers, and plotters are output devices.',true,'They display or produce results.');
  tf('t7','Hardware & devices','Hard drives are data output devices.',false,'Hard drives belong to data analysis and storage.');
  tf('t8','Meaning & importance','Location helps us understand our local environment and the world.',true,'Knowing where helps us understand events in different places.');
  tf('t9','Real-world applications','The total number of disease cases tells us exactly where they occur.',false,'We need case locations to know which places are affected.');
  tf('t10','Real-world applications','GIS can record where a new frog species was discovered.',true,'The discovery location is geographic information.');
  fill('f1','Meaning & importance','GIS stands for ______. Write the full name.','Geographic Information System',['geographical information system'],'GIS connects information to locations.');
  fill('f2','The five components','The physical equipment used in GIS is called ______.','Hardware',[],'Hardware includes computers and other physical devices.');
  fill('f3','The five components','The computer programs used in GIS are called ______.','Software',['computer software'],'Software = programs. Hardware = equipment.');
  fill('f4','The five components','The information used in GIS is its ______ component.','Data',[],'Data are the facts and information used by GIS.');
  fill('f5','The five components','The users who work with GIS are its ______ component.','People',['users'],'People use the equipment, programs, and data.');
  fill('f6','The five components','Procedures and uses belong to the ______ component of GIS.','Methods/applications',['methods','applications','methods and applications','methods or applications','methods applications'],'Methods/applications describe how GIS is used.');
  fill('f7','Hardware & devices','GPS, cameras, and probes are used for data ______.','Collection',['data collection','collecting'],'They collect data from the real world.');
  fill('f8','Hardware & devices','Scanners and digitizers are used for data ______.','Input',['data input'],'They enter data into the system.');
  fill('f9','Hardware & devices','Printers, monitors, and plotters are used for data ______.','Output',['data output'],'They display or produce results.');
  fill('f10','Hardware & devices','Computers and hard drives belong to data analysis and ______.','Storage',['data storage'],'Computers process data, and hard drives store it.');
  window.GIS_QUESTIONS = questions;
})();
