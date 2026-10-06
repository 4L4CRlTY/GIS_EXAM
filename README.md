# GIS Study Club

A repeatable quiz based on the supplied Lesson 2 notes, with question wording modelled on the instructor examples. Built with plain HTML, CSS, and JavaScript. No installation, build process, external fonts, or accounts are required.

## Open locally

Keep all files together, then double-click `index.html` to open it in your browser. The quiz works offline. Browser storage availability for local files depends on your browser; quiz play still works if saving is unavailable.

## Quiz flow

1. Choose Page 1, Page 2, Page 3, or Page 4. Questions, retries, study notes, and saved scores stay separate. Then choose Quick refresh or Full review.
2. Select or type your answer.
3. Click **Next** to reveal the correct answer and explanation. Your answer is locked for that question.
4. Read the explanation, then click **Continue** for the next question.
5. After the last explanation, click **See my results**. The total score is shown only now.
6. Choose **Practice mistakes** to repeat the questions you missed, or **New shuffled round** to repeat the selected quick/full mode.

All questions and multiple-choice options are shuffled each round. Identification answers ignore capitalization, punctuation, and extra spaces; appropriate alternate wordings are accepted. Spelling still matters. Repeating a question earns points only once per round. Each question is worth one point.

The results page includes the score, a breakdown by question type, and a complete answer review. Completed-round count and best full-review score are saved only in your browser when storage is available. Unfinished rounds are not saved. Browser data clearing removes saved statistics.

## Host on GitHub Pages

1. Create a GitHub repository (a public repository supports GitHub Pages on GitHub Free).
2. Extract the ZIP and upload **the files inside it** to your repository root: `index.html`, `styles.css`, `questions.js`, `questions-page2.js`, `questions-page3.js`, `questions-page4.js`, `app.js`, `quiz-utils.js`, and this README. Do not upload the ZIP itself as the website.
3. Commit the files to your `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. Wait for GitHub to deploy. The Pages settings show your published link (normally `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).

Reference: [GitHub Pages publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The relative asset paths also work under a repository subpath. Uploading the source files and enabling GitHub Pages are separate steps; follow the settings above to publish the quiz as a website.

## Question pattern and sources

Page 1 follows the first supplied lesson page only: the meaning and purpose of GIS, why location matters, the five component names, the role of hardware, and hardware categories with examples. Instructor examples guide the questioning style, not the scope. Detailed functions (the 5Ms), later application areas, and detailed explanations of the other components are excluded.

Page 1 has 10 identification, 10 true/false, 10 multiple-choice, and 2 enumeration questions. Quick mode selects five of each single-answer type and both enumeration items, for 17 questions. Each question has a unique ID, topic, answer, and explanation. Page 1 now uses a new statistics key so scores from the earlier, broader bank are not mixed with this corrected content. Earlier browser records are left untouched. These are practice questions, not an exam prediction.

## Five-component enumeration

Enter Hardware, Software, People, Data, and Methods in five separate boxes, in any order. Methods/applications and Applications are also accepted for Methods. Case, punctuation, and extra spaces are ignored. Repeated components do not count twice. At least one answer is required; unknown answers may be left blank. Clicking Next locks all boxes, labels each answer, and shows the full correct list and any missing components. All five different components must be correct to earn the question's one point (no partial points). The total score still appears only at the end. Mistake practice includes this question if incomplete or incorrect. This version keeps separate statistics so earlier scores remain untouched.

## Hardware-category enumeration

Four boxes ask for Data Collection, Data Input, Data Output, and Data Analysis and Storage. Any order is accepted. Data Analysis (or Analysis) is also accepted, but feedback teaches the full lesson term, Data Analysis and Storage. Short forms Collection, Input, and Output are accepted. Duplicate aliases cannot earn credit twice. The question earns one point only when all four different categories are correct. It appears in quick and full review, and mistake practice when missed. The answer feedback includes example devices for each category.

## Separate lesson pages

Page 1 contains 32 questions on GIS introduction and hardware (17 in quick mode), including the two requested enumeration questions. Page 2 contains 32 questions based only on the Components (continued) page: 10 identification, 10 true/false, and 12 multiple-choice questions (15 in quick mode). Questions, study notes, retries, and stored results stay separate for each page.

Page 2 has no multiple-input or enumeration questions. Those will be added only when the user requests specific lists. The existing Page 1 component and hardware-category enumeration questions remain available. Page 2 identification uses one answer box; aliases such as GUI and DBMS are supported where appropriate.

## Self-contained wording

Questions and answer explanations name the GIS concept directly, without requiring a textbook page or illustration. Topic labels explain what each separate quiz covers. Page 2 follows the user-provided keynotes: software and its four components, QGIS, people, methods and their four listed items, data and related attributes, in-house collection, commercial providers, and databases. The keynotes identify Data as the most important component because it fuels GIS; the question teaches that course wording. Extra examples from other pages are excluded. Page 2 uses a new statistics key for this revised bank; previous browser records remain untouched.

Long grouped answers (Input and manipulation tools; Query, analysis, and visualization tools) are multiple-choice items on Page 2. Identification answers are short terms of at most three words; established GUI and DBMS aliases remain accepted except when the prompt explicitly asks for the full meaning.

## Page 3: GIS Functions

Page 3 contains 34 questions based only on the supplied GIS Functions page and keynotes: 10 identification, 10 true/false, 12 multiple choice, and two enumeration questions: the 5 Ms and five management tasks. Quick refresh has 17 questions. It covers the 5 Ms; location, distance, and area; monitoring changes and spatial patterns; modelling and derived datasets; the five management tasks; organization goals and expected outputs; data/software limitations; and the listed geographic layers. The course-specific placement of the chemical-leak example under Monitoring is retained in the study notes.

Identification uses short terms, with Modeling/Modelling and Visualization/Visualisation accepted. Long explanations and other lists use multiple choice. The requested 5 Ms enumeration uses five separate inputs labelled Function 1–5. Any order is accepted, including Modeling for Modelling. Duplicates do not count twice. All five different functions must be correct for one point. Next shows per-input feedback, the full answer, and any missing functions. This item is always included in quick/full rounds and is included in mistake practice when missed. Page 3 uses a new statistics key for the 34-question bank, leaving earlier results untouched. Page 3 has separate notes, questions, retries, and browser statistics; Page 1 and Page 2 records retain their existing keys. Next reveals each answer, and the total score appears only after the final question.

## Management-task enumeration

Page 3 also asks for Input, Manipulation, Query, Analysis, and Visualization in five separate boxes labelled Task 1–5. Any order is accepted. Visualisation and the supported Data-prefixed terms are accepted, but repeated terms or aliases do not count twice. All five different tasks earn one point; Next shows each entry’s result, the full correct list, and missing tasks. Both Page 3 enumeration questions are always included in quick and full review, and repeated in mistake practice when missed.

## Page 4: GIS question types and tasks

Page 4 is restricted to the user's two selected topics: the six GIS question types (Location, Condition, Trend, Routing, Pattern, Model) and three regular GIS tasks (identify locations meeting criteria; explore relationships among datasets; display information graphically and numerically, before or after analysis). Application-area and school questions and notes are removed.

The focused bank has 18 multiple-choice questions, each with four options. Quick refresh has 15 questions. Location asks what is at a known place; Condition finds places meeting requirements. Model is the question-type name. The source phrase special patterns is taught as spatial patterns, as clarified in the supplied keynotes.

Questions retain the instructor's description and scenario pattern. All Page 4 questions use multiple choice, with no identification, true/false, or multiple-input questions. Quick refresh selects 15 shuffled items; full review uses all 18. The Page 4 format labels and result breakdown show multiple choice only. Page 4 has separate notes, questions, retries, and a new statistics key so scores from earlier Page 4 versions are not mixed with this focused bank. Earlier browser records and the other three pages remain unchanged.
