/* First-page Lesson 2 notes only. Every answer includes a study explanation. */
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
  mc('m1','Meaning & importance','What does GIS stand for?','Geographic Information System',['Global Internet Service','Geographic Input Software','General Information Storage'],'GIS stands for Geographic Information System. It connects information to locations.');
  mc('m2','Meaning & importance','Which question is central to GIS?','Where?',['Who paid?','Which password?','What brand?'],'GIS answers “Where?” Knowing location helps explain what, when, how, and why something happened.');
  mc('m3','Meaning & importance','Which set describes the uses of GIS in your notes?','Organize, analyze, visualize, and share information',['Print, delete, restart, and shut down','Collect only, without analysis','Replace people, methods, and data'],'The notes describe GIS as a tool to organize, analyze, visualize, and share data and information.');
  mc('m4','The five components','Which list contains all five GIS components?','Hardware, software, data, people, methods/applications',['GPS, cameras, probes, scanners, printers','Maps, rivers, roads, lakes, forests','Hardware, software, keyboards, monitors, printers'],'The five components are hardware, software, data, people, and methods/applications. Devices are examples of hardware, not the complete component list.');
  mc('m5','The five components','Which GIS component refers to physical equipment?','Hardware',['Software','People','Methods/applications'],'Hardware is physical equipment. A computer runs software, stores data, and lets users interact with it.');
  mc('m6','The five components','Which component refers to the computer programs used in GIS?','Software',['Hardware','People','Data'],'Software means computer programs; hardware means physical equipment.');
  mc('m7','The five components','Which component refers to users who work with GIS?','People',['Data','Hardware','Methods/applications'],'People are the users who work with GIS.');
  mc('m8','The five components','Which component refers to procedures and uses?','Methods/applications',['Hardware','People','Data'],'Methods/applications describe procedures and uses—the way GIS is applied.');
  mc('m9','Hardware & devices','GPS, cameras, and probes belong to which hardware category?','Data collection',['Data input','Data output','Data analysis and storage'],'GPS, cameras, and probes gather data. Your notes classify them as data collection devices.');
  mc('m10','Hardware & devices','Scanners and digitizers belong to which category?','Data input',['Data output','Data collection','Data analysis and storage'],'Scanners and digitizers enter data into the system, so the notes classify them as input devices.');
  mc('m11','Hardware & devices','Printers, computer monitors, and plotters belong to which category?','Data output',['Data input','Data collection','Data analysis and storage'],'Output devices display or produce results: printers, monitors, and plotters.');
  mc('m12','Hardware & devices','Computers and hard drives are listed under which category?','Data analysis and storage',['Data output','Data collection','Data input'],'Your notes place computers and hard drives in data analysis and storage.');
  mc('m13','Real-world applications','A health team maps where disease cases occur. How can GIS help?','Display case locations and examine spatial patterns',['Diagnose every patient automatically','Eliminate the need for location data','Replace all health workers'],'GIS organizes and displays case locations, helping the team identify affected areas and examine spatial patterns.');
  mc('m14','Real-world applications','Which task directly uses GIS location information?','Finding the nearest supermarket',['Changing a keyboard font','Choosing a computer password','Adjusting speaker volume'],'Finding a nearby supermarket uses the location of the user and of supermarkets.');
  mc('m15','Meaning & importance','Why is knowing where something happens important?','It helps explain what, when, how, and why it happened',['Location removes the need for data','It only changes the colors on a map','It guarantees every explanation is correct'],'Knowing where helps us understand events, our local environment, and the world at large.');
  tf('t1','Meaning & importance','GIS stands for Geographic Information System.',true,'GIS is short for Geographic Information System.');
  tf('t2','Meaning & importance','GIS only makes maps; it cannot analyze or share information.',false,'GIS organizes, analyzes, visualizes, and shares data and information.');
  tf('t3','Meaning & importance','“Stuff happens somewhere” emphasizes the importance of location.',true,'The lesson uses this phrase to show why knowing where matters.');
  tf('t4','The five components','A working GIS has only three components: hardware, software, and data.',false,'The full set has five: hardware, software, data, people, and methods/applications.');
  tf('t5','Hardware & devices','Hardware can run software, store data, and allow users to interact with data.',true,'These are the roles of computer hardware described in the notes.');
  tf('t6','Hardware & devices','GPS devices are classified as data output hardware in the notes.',false,'GPS devices are data collection hardware. Output examples are printers, monitors, and plotters.');
  tf('t7','Hardware & devices','Scanners and digitizers are data input devices.',true,'Both are listed under data input.');
  tf('t8','Hardware & devices','Printers and plotters are classified as data collection devices.',false,'Printers and plotters are output devices: they produce results.');
  tf('t9','Hardware & devices','Computer monitors are data output devices.',true,'A monitor displays results, so it is listed under data output.');
  tf('t10','Hardware & devices','Hard drives are listed under data analysis and storage.',true,'Hard drives store data and appear in the analysis and storage category.');
  tf('t11','Hardware & devices','Cameras and probes belong to the data input category in the notes.',false,'The notes list cameras and probes under data collection. Scanners and digitizers are input examples.');
  tf('t12','Real-world applications','GIS can help track the path of a tornado.',true,'A tornado path is one of the lesson’s examples of why location matters.');
  tf('t13','Real-world applications','Recording where a new frog species was discovered is an example of using geographic information.',true,'The discovery location is geographic information and is an example in the lesson.');
  tf('t14','The five components','People are not one of the five GIS components.',false,'People are essential members of the five-component list.');
  tf('t15','Meaning & importance','Knowing where events occur matters only locally and cannot help us understand the wider world.',false,'The notes link understanding location to both our local environment and the world at large.');
  fill('f1','Meaning & importance','GIS stands for ______. Write the full name.','Geographic Information System',['geographical information system'],'GIS = Geographic Information System. Say the full name when you review the abbreviation.');
  fill('f2','Meaning & importance','The central location question answered by GIS is “______?”','Where',[],'“Where?” is the key question. Location helps connect what, when, how, and why.');
  fill('f3','The five components','A working GIS integrates ______ key components.','Five',['5'],'The five are hardware, software, data, people, and methods/applications.');
  fill('f4','The five components','The physical equipment of a GIS is called ______.','Hardware',[],'Hardware means the computer and other physical devices.');
  fill('f5','The five components','Computer programs belong to the GIS component called ______.','Software',[],'Software means the programs used in GIS.');
  fill('f6','The five components','The GIS component referring to users is ______.','People',['users'],'People are the users who work with GIS.');
  fill('f7','The five components','The information used in GIS is its ______ component.','Data',[],'Data are the information used in the system.');
  fill('f8','The five components','Hardware, software, data, people, and ______ make up GIS.','Methods/applications',['methods','applications','methods and applications','methods or applications','methods applications'],'Methods/applications complete the five-component list.');
  fill('f9','Hardware & devices','GPS, cameras, and probes are used for data ______.','Collection',['data collection','collecting'],'Collect → Input → Analyze/store → Output. GPS, cameras, and probes collect data.');
  fill('f10','Hardware & devices','Scanners and digitizers are used for data ______.','Input',['data input'],'Scanners and digitizers input data into the system.');
  fill('f11','Hardware & devices','Printers, monitors, and plotters are used for data ______.','Output',['data output'],'These devices display or produce the system’s results.');
  fill('f12','Hardware & devices','Computers and hard drives are listed under data analysis and ______.','Storage',['data storage'],'Computers and hard drives are the analysis and storage examples in your notes.');
  fill('f13','Hardware & devices','Hardware runs ______, stores data, and lets users interact with data.','Software',['computer software','programs','computer programs'],'Hardware is the physical equipment that runs software.');
  fill('f14','Meaning & importance','Complete the lesson’s main idea: “Stuff happens ______.”','Somewhere',[],'Location matters: knowing where helps us understand events and our world.');
  fill('f15','Meaning & importance','GIS is used to organize, analyze, visualize, and ______ data and information.','Share',['sharing'],'Remember the four verbs: organize, analyze, visualize, share.');
  window.GIS_QUESTIONS = questions;
})();
