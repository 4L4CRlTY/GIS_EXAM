# GIS Study Club

A repeatable quiz based only on the first page of Lesson 2: Introduction to GIS. Built with plain HTML, CSS, and JavaScript. No installation, build process, external fonts, or accounts are required.

## Open locally

Keep all files together, then double-click `index.html` to open it in your browser. The quiz works offline. Browser storage availability for local files depends on your browser; quiz play still works if saving is unavailable.

## Quiz flow

1. Choose Quick refresh (15 questions: five of each type) or Full review (30 questions: ten of each type).
2. Select or type your answer.
3. Click **Next** to reveal the correct answer and explanation. Your answer is locked for that question.
4. Read the explanation, then click **Continue** for the next question.
5. After the last explanation, click **See my results**. The total score is shown only now.
6. Choose **Practice mistakes** to repeat the questions you missed, or **New shuffled round** to repeat the selected quick/full mode.

All questions and multiple-choice options are shuffled each round. Fill-in answers ignore capitalization, punctuation, and extra spaces; appropriate alternate wordings are accepted. Spelling still matters. Repeating a question earns points only once per round. Each question is worth one point.

The results page includes the score, a breakdown by question type, and a complete answer review. Completed-round count and best full-review score are saved only in your browser when storage is available. Unfinished rounds are not saved. Browser data clearing removes saved statistics.

## Host on GitHub Pages

1. Create a GitHub repository (a public repository supports GitHub Pages on GitHub Free).
2. Extract the ZIP and upload **the files inside it** to your repository root: `index.html`, `styles.css`, `questions.js`, `app.js`, and this README. Do not upload the ZIP itself as the website.
3. Commit the files to your `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. Wait for GitHub to deploy. The Pages settings show your published link (normally `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).

Reference: [GitHub Pages publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The relative asset paths also work under a repository subpath. Uploading the source files and enabling GitHub Pages are separate steps; follow the settings above to publish the quiz as a website.

## Edit the questions

The bank is in `questions.js`. It contains 10 multiple-choice, 10 true/false, and 10 fill-in-the-blank questions focused on essential definitions, component roles, device classification, misconceptions, and application scenarios. Counting components and completing slogans are not included. Fill-in questions ask for meaningful GIS terms or categories. Each question has a unique ID, topic, correct answer, and explanation. Update the homepage counts and full-review radio value if you change the bank size; quick mode selects five questions per type.

This revised bank uses separate browser statistics so scores from the old 45-question version are not mixed with the new 30-question review. Earlier stored statistics are left untouched.

Content covers GIS meaning and importance, five components, hardware roles and categories, and the application examples in your supplied first-page notes. These are study questions, not a prediction of your teacher's exam.
