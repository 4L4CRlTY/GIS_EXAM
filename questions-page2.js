/* Page 2 only: GIS Components (continued), based on the user's Page 2 keynotes.
 * Instructor examples guide wording only. No extra lesson content is required.
 */
(() => {
  const bank = [];
  const add = (id, type, topic, prompt, answer, explanation, extra = {}) => bank.push({id: 'p2-' + id, type, topic, prompt, answer, explanation, ...extra});
  const identify = (id, topic, prompt, answer, explanation, aliases = []) => add(id, 'fill', topic, prompt, answer, explanation, {aliases});
  const tf = (id, topic, prompt, truth, explanation) => add(id, 'tf', topic, prompt, truth ? 'True' : 'False', explanation, {options: ['True', 'False']});
  const mc = (id, topic, prompt, answer, distractors, explanation) => add(id, 'mc', topic, prompt, answer, explanation, {options: [answer, ...distractors]});
  identify('i1','Software','The GIS component that provides tools to store, analyze, and display geographic information.','Software','Software provides the programs and tools used in GIS.');
  identify('i2','Software','The software component used to manage stored data.','Database Management System','A database management system manages stored data.',['DBMS','database system']);
  mc('i3','Software','The software tools used to enter and modify geographic information.','Input and manipulation tools',['Query, analysis, and visualization tools','Database management system','Graphical User Interface'],'Input enters data; manipulation modifies it.');
  mc('i4','Software','The software tools used to ask geographic questions, analyze data, and display results.','Query, analysis, and visualization tools',['Input and manipulation tools','Database management system','Graphical User Interface'],'These tools ask questions about data, examine it, and display the results.');
  identify('i5','Software','The visual interface that gives users easy access to GIS tools.','Graphical User Interface','A GUI provides visual controls for accessing tools.',['GUI','graphical interface']);
  identify('i6','Software','The full meaning of the abbreviation GUI.','Graphical User Interface','GUI stands for Graphical User Interface.');
  identify('i7','People','The GIS component made up of those who design, manage, sell, and use GIS applications.','People','GIS users include technicians and specialists.');
  identify('i8','Methods','The GIS component consisting of plans and business rules for applying GIS technology.','Methods','Methods describe how GIS should be applied.',['methods/applications','methods and applications']);
  identify('i9','Data','The GIS component that fuels GIS with geographic information and related attributes.','Data','Data fuels GIS. GIS uses geographic data and related tabular or attribute data.');
  identify('i10','Data','The related information used to describe geographic features.','Attribute data','Tabular or attribute data describe geographic features, such as their recorded names.',['tabular data','attribute','attributes','tabular or attribute data']);
  identify('i11','Data','The way of obtaining data by collecting it within the organization itself.','In-house collection','In-house means the organization collects the data itself.',['in house','collected in house','in house data collection','collecting in house']);
  identify('i12','Data','The collection of information that most GISs create and maintain to organize and manage data.','Database','Most GISs create and maintain a database to organize and manage data.');
  tf('t1','Software','GIS software provides tools for storing, analyzing, and displaying geographic information.',true,'GIS software provides tools to store, analyze, and display geographic information.');
  tf('t2','Software','A GUI provides easy access to GIS tools.',true,'GUI means Graphical User Interface.');
  tf('t3','Software','Input and manipulation tools are used only to display finished results.',false,'They enter and modify geographic information.');
  tf('t4','People','GIS users can include technicians and specialists.',true,'Different people use GIS in their everyday work.');
  tf('t5','People','People are unnecessary in a GIS.',false,'Without people, there is no GIS. People design, manage, sell, and use GIS applications.');
  tf('t6','Methods','Methods include guidelines, specifications, standards, and procedures.',true,'These four items guide how GIS is applied.');
  tf('t7','Methods','Methods are the physical computers and devices used in GIS.',false,'Methods are plans and rules. Physical devices are hardware.');
  tf('t8','Data','GIS uses geographic data and related tabular or attribute data.',true,'Geographic data and related attribute data are used together in GIS.');
  tf('t9','Data','All GIS data must be bought from a commercial provider.',false,'Data can also be collected in-house.');
  tf('t10','Data','Most GISs maintain a database to organize and manage data.',true,'A database helps keep data organized.');
  mc('m1','Software','The GIS component represented by QGIS.','Software',['Hardware','People','Methods'],'QGIS is an example of GIS software.');
  mc('m2','Software','The correct meaning of GUI.','Graphical User Interface',['Geographic User Information','General Utility Input','Geographic Unit Interface'],'A Graphical User Interface gives easy access to tools.');
  mc('m3','Software','The software component that manages stored data.','Database management system',['Graphical user interface','Input tools','Visualization tools'],'A database management system manages data.');
  mc('m4','Software','The list that contains the four key components of GIS software.','Database management system; input and manipulation tools; query, analysis, and visualization tools; GUI',['Guidelines; specifications; standards; procedures','Hardware; people; methods; data','Technicians; specialists; commercial providers; users'],'GIS software includes a database management system, input and manipulation tools, query/analysis/visualization tools, and a GUI.');
  mc('m5','People','The GIS component represented by a technician using GIS at work.','People',['Software','Methods','Data'],'The technician is a user, so the component is People.');
  mc('m6','Methods','The GIS component that provides plans and rules for applying GIS technology.','Methods',['Software','Data','Hardware'],'Methods provide plans, rules, and procedures.');
  mc('m7','Methods','The list of items included in GIS methods.','Guidelines, specifications, standards, procedures',['Hardware, software, people, data','Database management system, input tools, analysis tools, GUI','Technicians, specialists, users, providers'],'Methods include guidelines, specifications, standards, and procedures.');
  mc('m8','Data','The GIS component described as the most important because it fuels GIS.','Data',['Hardware','Software','Methods'],'The course keynotes identify Data as the most important GIS component because it fuels GIS.');
  mc('m9','Data','The two ways an organization can obtain geographic data for use in GIS.','Collect it in-house or buy it from a commercial data provider',['Design applications or sell applications','Follow guidelines or follow standards','Use a GUI or use visualization tools'],'Data can be collected by the organization itself or purchased from a commercial data provider.');
  mc('m10','Software and methods','The correct difference between software and methods.','Software provides tools; methods explain how to apply them',['Software means users; methods mean devices','Software means data; methods mean maps','Software and methods both mean physical equipment'],'Remember: software = tools; methods = procedures.');
  window.GIS_PAGE2_QUESTIONS = bank;
})();
