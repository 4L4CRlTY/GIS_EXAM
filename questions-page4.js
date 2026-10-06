/* Page 4 only: GIS Applications, based on the supplied page and keynotes. */
(() => {
  const bank = [];
  const add = (id, type, topic, prompt, answer, explanation, extra = {}) => bank.push({id: 'p4-' + id, type, topic, prompt, answer, explanation, ...extra});
  const identify = (id, topic, prompt, answer, explanation, aliases = []) => add(id, 'fill', topic, prompt, answer, explanation, {aliases});
  const tf = (id, topic, prompt, truth, explanation) => add(id, 'tf', topic, prompt, truth ? 'True' : 'False', explanation, {options: ['True', 'False']});
  const mc = (id, topic, prompt, answer, distractors, explanation) => add(id, 'mc', topic, prompt, answer, explanation, {options: [answer, ...distractors]});

  identify('i1','GIS question types','The GIS question type that asks what is at a known location.','Location','Location starts with a place and asks what is there.');
  identify('i2','GIS question types','The GIS question type that finds places meeting specific requirements.','Condition','Condition starts with requirements and asks which places meet them.');
  identify('i3','GIS question types','The GIS question type that asks what has changed since an earlier time.','Trend','Trend examines change over time.');
  identify('i4','GIS question types','The GIS question type that asks for the best route from one place to another.','Routing','Routing asks about the best way to reach a destination.');
  identify('i5','GIS question types','The GIS question type that asks what spatial patterns exist.','Pattern','Pattern examines how things are distributed across locations.');
  identify('i6','GIS question types','The GIS question type that asks what might happen in a “what if” situation.','Model','Model considers possible scenarios, such as what might flood if rainfall increases.');
  identify('i7','Application areas','The GIS application area that uses vehicle tracking and navigation.','Transportation','Transportation applications include vehicle tracking and navigation.');
  identify('i8','Application areas','The GIS application area concerned with forest development, erosion, and deforestation.','Forestry','Forestry uses GIS for forest development and management, including erosion and deforestation.',['Forest development and management','Forest management']);
  identify('i9','Application areas','The GIS application area concerned with drainage patterns and water catchments.','Hydrology','Hydrology and water pollution applications include drainage patterns and water catchments.',['Hydrology and water pollution']);
  identify('i10','Application areas','The GIS application area that includes fault-line detection and mineral detection.','Geology','Geology applications include DTM, fault-line detection, and mineral detection.');
  identify('i11','Application areas','The GIS application area that includes land use and harvest forecasts.','Agriculture','Agriculture and land use applications include harvest forecasts.',['Agriculture and land use']);
  identify('i12','Application areas','The GIS application area associated with GeoBusiness.','Business','GeoBusiness is a business application of GIS.');

  tf('t1','GIS question types','Location asks what is at a known place, while Condition finds places that meet requirements.',true,'Location begins with a place; Condition begins with criteria.');
  tf('t2','GIS question types','Trend questions examine change over time.',true,'Comparing land use or forest cover across different years is a Trend question.');
  tf('t3','GIS question types','Routing questions ask only how land use has changed over time.',false,'Routing asks for the best way or route. Trend examines change over time.');
  tf('t4','GIS question types','A Pattern question examines how things are distributed across locations.',true,'A spatial pattern is an arrangement or distribution across places.');
  tf('t5','GIS question types','A Model question can explore what might happen if rainfall increases.',true,'Model questions explore “what if” scenarios.');
  tf('t6','Regular GIS tasks','GIS can identify locations that meet specific criteria.',true,'Finding locations that satisfy requirements is a regular GIS task.');
  tf('t7','Regular GIS tasks','Exploring relationships among datasets is a regular GIS task.',true,'GIS explores spatial and other relationships among datasets.');
  tf('t8','Regular GIS tasks','GIS can display information only graphically, never numerically.',false,'GIS can display information both graphically and numerically.');
  tf('t9','Regular GIS tasks','GIS can display information only after analysis has been completed.',false,'Information can be displayed before or after analysis.');
  tf('t10','GIS in schools','Student transportation and facility siting are examples of GIS uses in schools.',true,'Schools can use GIS for student transportation, facility siting, and other planning tasks.');
  tf('t11','Application areas','GIS applications are limited to transportation and agriculture.',false,'GIS is used in many fields, including business, public health, geology, education, and research.');
  tf('t12','GIS in schools','Boundary planning, facilities management, and safety and preparedness are unrelated to GIS in schools.',false,'These are all examples of GIS uses in schools.');

  mc('m1','GIS question types','The GIS question type used when asking what facilities are at a known location.','Location',['Condition','Trend','Routing'],'The location is already known; the question asks what is there.');
  mc('m2','GIS question types','The GIS question type used to find places that satisfy the requirements for a new hospital.','Condition',['Location','Trend','Pattern'],'The requirements are known; the question asks which locations meet them.');
  mc('m3','GIS question types','The GIS question type used when comparing forest cover in 2010 and 2020.','Trend',['Condition','Routing','Model'],'Comparing different years examines change over time.');
  mc('m4','GIS question types','The GIS question type used to find the best route for an ambulance to reach a hospital.','Routing',['Location','Pattern','Trend'],'The question asks for the best route. Transportation is an application area; Routing is the question type.');
  mc('m5','GIS question types','The GIS question type used to examine whether disease cases cluster in particular places.','Pattern',['Trend','Condition','Routing'],'Clustering describes the spatial distribution of cases.');
  mc('m6','GIS question types','The GIS question type used to explore which areas might flood if rainfall increases.','Model',['Location','Trend','Routing'],'The question considers a possible “what if” scenario.');
  mc('m7','Regular GIS tasks','The group that lists three regular tasks accomplished with GIS.','Identify locations meeting criteria; explore relationships; display information graphically and numerically',['Identify locations without criteria; keep datasets separate; avoid displaying results','Publish maps only; ignore relationships; exclude numerical information','Compare dates only; ignore locations; display information only after analysis'],'Remember: find suitable locations, explore relationships, and display information.');
  mc('m8','Application areas','The GIS application area that includes hospitals, police, and fire services.','Public health and safety',['Map and database publishing','Real estate information management','Agriculture and land use'],'Public health and safety applications include hospitals, police, and fire services.');
  mc('m9','Application areas','The GIS application area associated with municipal infrastructure.','Municipal applications',['Geology','Forestry','Census and elections'],'Municipal applications include infrastructure.');
  mc('m10','Application areas','The GIS application area associated with vegetation and pollution.','Environmental applications',['Real estate information management','Map and database publishing','Military applications'],'Environmental applications include vegetation and pollution.');
  mc('m11','GIS in schools','The group of activities that describes GIS uses in schools.','Student transportation, boundary planning, facility siting, and academic instruction',['Mineral detection, oil operations, fault-line detection, and harvest forecasts','Forest development, deforestation, erosion, and water catchments','GeoBusiness, real estate information management, mineral detection, and oil operations'],'GIS in schools includes transportation, boundary planning, facility siting, facilities management, safety and preparedness, and academic instruction.');
  mc('m12','Why GIS has many applications','The reason GIS can be applied to many different subjects.','Many subjects involve locations, conditions, changes, routes, patterns, and possible scenarios',['Every subject uses exactly the same geographic dataset','GIS is useful only when a subject involves transportation','All subjects require the same maps and numerical results'],'These six kinds of questions occur across many subject areas.');
  window.GIS_PAGE4_QUESTIONS = bank;
})();
