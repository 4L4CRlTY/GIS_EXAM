# GIS Study Club

A repeatable quiz based on the supplied Lesson 2 notes and 24 instructor review questions. Built with plain HTML, CSS, and JavaScript. No installation, build process, external fonts, or accounts are required.

## Open locally

Keep all files together, then double-click `index.html` to open it in your browser. The quiz works offline. Browser storage availability for local files depends on your browser; quiz play still works if saving is unavailable.

## Quiz flow

1. Choose Page 1 or Page 2. Questions, retries, study notes, and saved scores stay separate. Then choose Quick refresh or Full review.
2. Select or type your answer.
3. Click **Next** to reveal the correct answer and explanation. Your answer is locked for that question.
4. Read the explanation, then click **Continue** for the next question.
5. After the last explanation, click **See my results**. The total score is shown only now.
6. Choose **Practice mistakes** to repeat the questions you missed, or **New shuffled round** to repeat the selected quick/full mode.

All questions and multiple-choice options are shuffled each round. Identification answers ignore capitalization, punctuation, and extra spaces; appropriate alternate wordings are accepted. Spelling still matters. Repeating a question earns points only once per round. Each question is worth one point.

The results page includes the score, a breakdown by question type, and a complete answer review. Completed-round count and best full-review score are saved only in your browser when storage is available. Unfinished rounds are not saved. Browser data clearing removes saved statistics.

## Host on GitHub Pages

1. Create a GitHub repository (a public repository supports GitHub Pages on GitHub Free).
2. Extract the ZIP and upload **the files inside it** to your repository root: `index.html`, `styles.css`, `questions.js`, `questions-page2.js`, `app.js`, `quiz-utils.js`, and this README. Do not upload the ZIP itself as the website.
3. Commit the files to your `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. Wait for GitHub to deploy. The Pages settings show your published link (normally `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).

Reference: [GitHub Pages publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The relative asset paths also work under a repository subpath. Uploading the source files and enabling GitHub Pages are separate steps; follow the settings above to publish the quiz as a website.

## Question pattern and sources

The bank in `questions.js` follows the instructor's pattern: a short definition or description asks for a specific component, function, application, or concept. True/false items use direct statements. Multiple-choice items use the same style with term-based choices.

- 15 identification and 9 true/false items follow the supplied 24 instructor review questions.
- 6 additional multiple-choice items provide practice with the same concepts.
- `sourceQuestion` records the original review question number; null identifies an added practice item.
- The answer for instructor Question 12, Monitoring, comes from the earlier lesson notes because its answer feedback is not visible in the supplied screenshot.
- Instructor terminology is preserved, including Transportation, Disaster Management, and GIS as a Question-Answering Tool.
- Modelling and Modeling are both accepted. Case, punctuation, and extra spaces do not affect matching.
- Routing is not accepted for Transportation, and GIS is not accepted for Disaster Management: the question asks for an application area.
- Correctness feedback is based on the answer key, not the inconsistent “Incorrect” wording shown under some correctly answered false statements in the reference images.

Each question has a unique ID, topic, answer, and explanation. Quick mode selects five of each original type and always includes both enumeration questions. Update the homepage counts and full-review radio value if changing the bank size.

This bank uses separate browser statistics, leaving earlier versions' records untouched. These are practice questions based on supplied material, not a prediction of a future exam.

## Five-component enumeration

Enter Hardware, Software, People, Data, and Methods in five separate boxes, in any order. Methods/applications and Applications are also accepted for Methods. Case, punctuation, and extra spaces are ignored. Repeated components do not count twice. At least one answer is required; unknown answers may be left blank. Clicking Next locks all boxes, labels each answer, and shows the full correct list and any missing components. All five different components must be correct to earn the question's one point (no partial points). The total score still appears only at the end. Mistake practice includes this question if incomplete or incorrect. This version keeps separate statistics so earlier scores remain untouched.

## Hardware-category enumeration

Four boxes ask for Data Collection, Data Input, Data Output, and Data Analysis and Storage. Any order is accepted. Data Analysis (or Analysis) is also accepted, but feedback teaches the full lesson term, Data Analysis and Storage. Short forms Collection, Input, and Output are accepted. Duplicate aliases cannot earn credit twice. The question earns one point only when all four different categories are correct. It appears in quick and full review, and mistake practice when missed. The answer feedback includes example devices for each category.

## Separate lesson pages

Page 1 preserves the existing 32-question instructor-style bank, including the components and hardware enumeration questions (17 in quick mode). It includes the earlier instructor examples, not only the first source page. Page 2 contains 32 questions based only on the supplied Components (continued) page: 10 identification, 10 true/false, and 12 multiple-choice questions (15 in quick mode). The banks never mix. Each page has its own stored results; Page 1 retains its previous storage key.

Page 2 has no multiple-input or enumeration questions. Those will be added only when the user requests specific lists. The existing Page 1 component and hardware-category enumeration questions remain available. Page 2 identification uses one answer box; aliases such as GUI and DBMS are supported where appropriate.

## Self-contained wording

Questions and answer explanations name the GIS concept directly, without requiring a textbook page or illustration. Topic labels explain what each separate quiz covers. Data questions focus on its role as the information used by GIS rather than assuming a universal ranking of component importance.

Long grouped answers (Input and manipulation tools; Query, analysis, and visualization tools) are multiple-choice items on Page 2. Identification answers are short terms of at most three words; established GUI and DBMS aliases remain accepted except when the prompt explicitly asks for the full meaning.
