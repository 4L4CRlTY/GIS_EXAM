/* Page 3 only: GIS Functions, from the supplied page and keynotes. */
(() => {
  const bank = [];
  const add = (id, type, topic, prompt, answer, explanation, extra = {}) => bank.push({id: 'p3-' + id, type, topic, prompt, answer, explanation, ...extra});
  const identify = (id, topic, prompt, answer, explanation, aliases = []) => add(id, 'fill', topic, prompt, answer, explanation, {aliases});
  const tf = (id, topic, prompt, truth, explanation) => add(id, 'tf', topic, prompt, truth ? 'True' : 'False', explanation, {options: ['True', 'False']});
  const mc = (id, topic, prompt, answer, distractors, explanation) => add(id, 'mc', topic, prompt, answer, explanation, {options: [answer, ...distractors]});

  identify('i1','GIS functions','The GIS function that shows where places or features are located.','Mapping','Mapping answers questions about where things are.');
  identify('i2','GIS functions','The GIS function that determines distance, size, or area.','Measurement','Measurement tells us how far or how big something is.');
  identify('i3','GIS functions','The GIS function that examines conditions, changes over time, and spatial patterns.','Monitoring','Monitoring examines changes, where events occur, and relationships between locations and conditions.');
  identify('i4','GIS functions','The GIS function that creates a simplified representation of a phenomenon or system.','Modelling','Modelling represents a phenomenon or system and can derive new geographic datasets from existing data.',['Modeling']);
  identify('i5','GIS functions','The GIS function that handles geographic information through input, manipulation, query, analysis, and visualization.','Management','These five tasks make up GIS management.');
  identify('i6','Management tasks','The GIS management task used to enter data.','Input','Input enters data into GIS.',['Data input']);
  identify('i7','Management tasks','The GIS management task used to modify or prepare data.','Manipulation','Manipulation modifies or prepares data.',['Data manipulation']);
  identify('i8','Management tasks','The GIS management task used to retrieve information that matches a question or condition.','Query','A query asks a question and retrieves matching information.');
  identify('i9','Management tasks','The GIS management task used to examine data for patterns and relationships.','Analysis','Analysis examines data to find patterns, relationships, or answers.',['Data analysis']);
  identify('i10','Management tasks','The GIS management task used to present information visually, such as through maps.','Visualization','Visualization presents information in a visual form.',['Visualisation','Data visualization','Data visualisation']);

  tf('t1','GIS functions','Mapping, Measurement, Monitoring, Modelling, and Management are the 5 Ms of GIS.',true,'These are the five GIS functions.');
  tf('t2','Mapping and measurement','Finding the size of SLSU–Tomas Oppus Campus is an example of measurement.',true,'Size and area are quantities determined through measurement.');
  tf('t3','Mapping and measurement','Mapping and measurement both mean calculating distance only.',false,'Mapping shows where things are; measurement determines distance and size or area.');
  tf('t4','Monitoring','Examining population changes over ten years is an example of monitoring.',true,'Monitoring examines changes over time.');
  tf('t5','Modelling','GIS modelling can create new geographic datasets from existing datasets.',true,'Transformation and analytical functions can produce new derived datasets.');
  tf('t6','Management tasks','Query and analysis perform exactly the same task.',false,'A query retrieves matching information; analysis examines data for patterns, relationships, or results.');
  tf('t7','Project goals','Every GIS project requires extensive analysis.',false,'Some projects mainly need data capture and presentation, with little or no analysis.');
  tf('t8','Project goals','An organization’s goals and needs help determine how it uses GIS.',true,'The goals and needs of the organization define the required GIS functions.');
  tf('t9','GIS limitations','GIS can answer any geographic question regardless of the available data and software functions.',false,'GIS is limited by data availability and the functions of the specific software package.');
  tf('t10','Project goals','Clear project goals and expected GIS outputs are important when planning a GIS project.',true,'A project needs a clear outline of its goals and expected GIS outputs.');

  mc('m1','GIS functions','The list that correctly identifies the 5 Ms of GIS.','Mapping, Measurement, Monitoring, Modelling, Management',['Input, Manipulation, Query, Analysis, Visualization','Hardware, Software, People, Data, Methods','Customers, Streets, Parcels, Elevation, Land usage'],'The 5 Ms are GIS functions. Input, manipulation, query, analysis, and visualization are management tasks.');
  mc('m2','Mapping and measurement','The GIS function used to determine how far the nearest hospital is from an accident site.','Measurement',['Mapping','Monitoring','Management'],'The question asks for distance, so the function is Measurement.');
  mc('m3','Monitoring','The GIS function used to examine where flooding occurs most often in Manila.','Monitoring',['Measurement','Modelling','Management'],'Monitoring examines where events occur and their spatial patterns.');
  mc('m4','Monitoring','The GIS function used to examine a spatial pattern between rainfall volume and landslide locations.','Monitoring',['Measurement','Mapping','Management'],'Monitoring examines relationships between conditions and locations.');
  mc('m5','Spatial patterns','The meaning of a spatial pattern.','How things are arranged or distributed across places',['How many tools a software package contains','The order used to enter data into a computer','The names of people working on a GIS project'],'Spatial patterns describe the arrangement or distribution of things across places.');
  mc('m6','Modelling','The process used to produce a new derived geographic dataset.','Existing data → Apply analytical functions → New derived data',['New derived data → Delete existing data → Stop analysis','Existing data → Skip analysis → Rename the project','Project goals → Ignore data → Display an empty map'],'GIS applies analytical or transformation functions to existing datasets and writes the results into new datasets.');
  mc('m7','Management tasks','The correct sequence of the five GIS management tasks.','Input → Manipulation → Query → Analysis → Visualization',['Visualization → Analysis → Query → Manipulation → Input','Mapping → Measurement → Monitoring → Modelling → Management','Input → Visualization → Manipulation → Analysis → Query'],'Remember the sequence: enter, prepare, retrieve, examine, and present data.');
  mc('m8','Management tasks','The correct difference between query and analysis.','Query retrieves matching information; analysis examines patterns and relationships',['Query modifies data; analysis only displays maps','Query enters data; analysis retrieves it without examination','Query and analysis both mean creating visual displays only'],'Query asks for matching information; analysis studies data to find patterns, relationships, or results.');
  mc('m9','Project goals','The factors that determine the required GIS functions within an organization.','The organization’s goals and needs',['The order of the map layers only','The number of printed maps only','The names assigned to datasets only'],'Organizations use GIS according to their goals and needs.');
  mc('m10','GIS limitations','The two factors that limit what GIS can do.','Availability of data and functions of the specific software package',['Number of map colors and size of map titles','Order of the layers and names of the users','Number of management tasks and spelling of project names'],'GIS needs suitable data and software functions to carry out the required work.');
  mc('m11','Geographic layers','The group that contains examples of geographic information layers.','Customers, streets, parcels, elevation, land usage',['Input, manipulation, query, analysis, visualization','Mapping, measurement, monitoring, modelling, management','Goals, needs, outputs, limitations, procedures'],'Geographic information can be represented as separate layers for these features or characteristics.');
  mc('m12','Project goals','The main work a GIS project may require when little or no analysis is needed.','Data capture and presentation',['Removal of all geographic data','Use of every software function','Analysis without any expected output'],'Some projects focus on capturing and presenting data, depending on their goals.');
  window.GIS_PAGE3_QUESTIONS = bank;
})();
