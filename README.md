# GIS Study Club

A repeatable quiz based on the supplied Lesson 2 notes and 24 instructor review questions. Built with plain HTML, CSS, and JavaScript. No installation, build process, external fonts, or accounts are required.

## Open locally

Keep all files together, then double-click `index.html` to open it in your browser. The quiz works offline. Browser storage availability for local files depends on your browser; quiz play still works if saving is unavailable.

## Quiz flow

1. Choose Quick refresh (15 questions: five of each type) or Full review (30 questions: 15 identification, 9 true/false, and 6 multiple choice).
2. Select or type your answer.
3. Click **Next** to reveal the correct answer and explanation. Your answer is locked for that question.
4. Read the explanation, then click **Continue** for the next question.
5. After the last explanation, click **See my results**. The total score is shown only now.
6. Choose **Practice mistakes** to repeat the questions you missed, or **New shuffled round** to repeat the selected quick/full mode.

All questions and multiple-choice options are shuffled each round. Identification answers ignore capitalization, punctuation, and extra spaces; appropriate alternate wordings are accepted. Spelling still matters. Repeating a question earns points only once per round. Each question is worth one point.

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

Each question has a unique ID, topic, answer, and explanation. Quick mode selects five per type. Update the homepage counts and full-review radio value if changing the bank size.

This bank uses separate browser statistics, leaving earlier versions' records untouched. These are practice questions based on supplied material, not a prediction of a future exam.
