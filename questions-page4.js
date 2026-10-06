/* Page 4 focus: six question types and three regular GIS tasks only. */
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

  tf('t1','GIS question types','Location asks what is at a known place, while Condition finds places that meet requirements.',true,'Location begins with a place; Condition begins with criteria.');
  tf('t3','GIS question types','Routing questions ask only how land use has changed over time.',false,'Routing asks for the best way or route. Trend examines change over time.');
  tf('t5','GIS question types','A Model question can explore what might happen if rainfall increases.',true,'Model questions explore “what if” scenarios.');
  tf('t6','Regular GIS tasks','GIS can identify locations that meet specific criteria.',true,'Finding locations that satisfy requirements is a regular GIS task.');
  tf('t8','Regular GIS tasks','GIS can display information only graphically, never numerically.',false,'GIS can display information both graphically and numerically.');
  tf('t9','Regular GIS tasks','GIS can display information only after analysis has been completed.',false,'Information can be displayed before or after analysis.');

  mc('m3','GIS question types','The GIS question type used when comparing forest cover in 2010 and 2020.','Trend',['Condition','Routing','Model'],'Comparing different years examines change over time.');
  mc('m5','GIS question types','The GIS question type used to examine whether disease cases cluster in particular places.','Pattern',['Trend','Condition','Routing'],'Clustering describes the spatial distribution of cases.');
  mc('m7','Regular GIS tasks','The group that lists three regular tasks accomplished with GIS.','Identify locations meeting criteria; explore relationships; display information graphically and numerically',['Identify locations without criteria; keep datasets separate; avoid displaying results','Publish maps only; ignore relationships; exclude numerical information','Compare dates only; ignore locations; display information only after analysis'],'Remember: find suitable locations, explore relationships, and display information.');
  mc('m13','Regular GIS tasks','The regular GIS task used to find suitable locations for a new hospital.','Identify locations that meet specific criteria',['Explore relationships among datasets','Display information graphically','Display information numerically'],'GIS finds locations that satisfy the requirements for the hospital.');
  mc('m14','Regular GIS tasks','The regular GIS task used to examine the relationship between rainfall and flooding.','Explore spatial and other relationships among datasets',['Identify locations meeting hospital requirements','Display information as a numerical table only','Display information as a map without examining relationships'],'This task explores how information in different datasets is related.');
  mc('m15','Regular GIS tasks','The regular GIS task used to present information through maps and numerical tables.','Display information graphically and numerically',['Identify locations that meet specific criteria','Explore relationships without presenting information','Determine only the best route between places'],'Maps present information graphically, while tables can present it numerically. GIS can display information before or after analysis.');
  window.GIS_PAGE4_QUESTIONS = bank;
})();
