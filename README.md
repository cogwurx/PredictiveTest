# Front-end Developer New Hire Exam

Thanks for your interest in working with Predictive Fitness, Inc.

In order to complete this test, you will need a GitHub account and access to our repository. We will provide the info to you separately via Email. You will also need screen recording software, like Screenflow, to record the process of creating your code and/or working in your terminal. You will also need a microphone to record dialog during some tests; any mic will do, including the mic that came with your laptop, or the inline mic that comes with most mobile devices. 

These requirements were created to ensure the solutions you provide are your own, and not copy and pasted from other resources. It is important that you understand the concepts and solutions you are providing and can demonstrate them in your code and communicate them verbally in a team setting.

**You are not required to record your entire screen, only the portion applicable for the specific test you're working on. For example, you can simply record your terminal window when working through the Git competency test below. Dialog can either be recording during or after the coding portion.**

### Getting started

Following are the steps required to setup and take the Front-end Developer Exam. Please read through this thoroughly, as every step is required to complete this test.

1. Access the GitHub Repo (provided via Email) and create a fork of the repo.
2. Create a dev and stage branch within the repo and follow an upstream/downstream workflow to push your code during the exam.
3. Create a feature branch for each of the tests outlined below.
4. Once finished with each test, follow the workflow highlighted above to merge each feature branch into Master. Follow a proper workflow by reviewing and commenting on your merges as you move your work upstream from dev to master. Merges should not skip branches and strict Git standards must be maintained throughout. While mistakes are okay, fundamental understanding of Git and proper production workflows is a requirement.
5. Additionally, create a hotfix branch that can easily be merged into the master branch of your project to demonstrate your ability to work within a production environment. This hotfix can simply contain a new comment added during any of the below tests. Use the commit message to specifically state what the hotfix's purpose is, so it is clear to team members, including developers and product owners (language should be clear, readable, and communicate to both technical and non-technical contacts).

### Important: Branch naming conventions

- Feature: feature/ticket-number/description-of-work or feature/ticket-number/ticket-title

Example if using Jira: feature/JIRA-2321/offcanvas-menu
Example for this test: feature/code-test-1/use-sass-to-create-a-grid-system

- Hotfix: hotfix/branch-being-fixed/description-of-hotfix or feature/ticket-number/ticket-title

Example of a master hotfix: hotfix/master/fixing-table-formatting
Example for this test: hotfix/code-test-1/hotfix-description

---

## Git Competency Test

Demonstrate your core Git concepts by showing how to properly use basic and intermediate Git commands, including:

- Creating a branch.
- Merging a branch.
- Using a pull/push workflow to deploy your code (make a change in your repo on Git that you will then need to pull before pushing new code)
- Use stash and pop properly and describe their usage in detail.
- Demonstrate and describe your working understanding of rebasing.
- Demonstrate properly modifyng the index (this can include --add, --remove, --refresh, --assume-unchanged, etc.) and describe a specific case where this may be necessary in a production environment.
- Create a merge conflict and then effectively resolve that conflict, describing which changes were accepted and why, and how this merge conflict should be communicated to the team. 

---

## Code Test 1 - Use SASS to create a Grid System

You will use SASS to create a grid system that is responsive (mobile-first) and accounts for at least three breakpoints. You may use SASS maps, mixins, variables, functions, or any of the other tools available to you to create a grid framework that is extensible and can be easily modified to account for additional breakpoints, specific use-cases (like additional layouts), etc. In order to effectively complete this test, your code should allow for changes to be made with minimal (or better, no) changes to more complex code blocks (like functions, or mixins). The idea is to create a dynamic grid that can be easily added upon over time.

Additionally, using both CSS Grid and Flexbox in conjunction with one another would be desirable. Specifically, we'd like to see the use of CSS Grid and Flexbox where they make the most sense, considering their strenghts and weaknesses. Please describe why you chose your particular solution.

**We do not intend for you to reinvent the wheel, but would like to see a custom solution that is thoughtful and displays a strong command for CSS, SASS, and the ability to create and use each technology to its fullest. You will often be tasked with creating unique solutions to problems, and understanding how to implement solutions to those problems is a pivotal aspect of this role.**

- Code should be formatted based on current CSS/SASS standards.
- Code should be commented to describe what each code block is responsible for doing; variables, mixins, and functions should describe their use and allow subsequent developers to step in and work on the code without requiring a separate Readme file.

---

## Code Test 2 - Create a Skeleton Splash Screen to Indicate Page Loading

Use SASS, SVG, and any methods available to you to create a Skeleton Screen to indicate that a page and its content are loading. This is the same method used by YouTube, LinkedIn and Facebook to communicate to the user that content is loading and thus improves UX by improving perceived performance of that page.

The skeleton screen should use motion (not loaders, spinners, or icon-based elements) that animates from left to right, as this increases the perception of speed (unlike fading/opacity based effects) and should use a neautral gray color to visually describe page elements.

- The page should contain one large element, like an image or embedded vido, one title above, and a description below.
- The page should animate all the elements above (title, image, and description) as a skeleton during page load.

--- 

## Code Test 3 - Create an Animated Progressive Interface Element

Setup a simple HTML document using the included design and use CSS/SASS and vanilla JavaScript to create a simple animation that allows the user to interact with elements on the page. Elements should animate in clear, concise manner, encouraging an enjoyable and interactive user experience that utilizes progressive design concepts. 

There are some critical decisions that need to be made during this test, as not every aspect of the animation is provided to you. Every element must "move" to occupy its space in each subsequent screen, and should "move back" to its previously occupied space in order to maintain the effect and usefullness of the interaction. 

Being able to translate from design and prototype into usable interactions that maintain the quality of the experience is critically important. As a front-end developer you are not required to be a UX designer, but understanding core UX concepts that you can apply through useful UI interactions is one of the keys of our design philosophy and is a requirement for this role.

[Design Example](https://xd.adobe.com/view/9e592f88-516d-432c-94b7-194df86b6140-cb0a/?fullscreen)

## Angular Test - Access and Manipulate API data

Using a weather API (any open source or trial account using DarkSky, VisualCrossing, etc) display your ability to use Angular to access an API and display the data. Using a simple Bootstrap interface, display the weather information for the next five days within Cards (one card for each day) with a dropdown to change the location of the weather query (any 3 locations of your choice). On change of the location dropdown, corresponding weather for the newely selected location should be displayed. Along with the location dropdown, provide a toggle to switch between celsius and fahrenheit. This toggle can be either a button that changes on click, a toggle element, or a dropdown as well but should allow the user to convert to their preferred format in real time. 

- Create a simple Angular app to complete this test.
- Create your components using the Angular CLI tools.
- Follow Angular best practices and coding conventions.
- Add Readme with instruction on how to build and run the application on a local machine.

### Completing the exam

Once you've completed all of the above tests, please share your fork with our team. You can upload videos using Dropbox, Google Drive, or any provider of your choice and then add the link to those videos in the comments of your forked repository. 
