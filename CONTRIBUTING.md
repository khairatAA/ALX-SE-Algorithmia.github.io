## Collaborating On The Static Website
Collaborating on the static website, following the exact way it worked on the <a href="https://github.com/ALX-SE-Algorithmia/Demo-Project/" target="_blank">Demo Project</a>. Collaboration can be done using the "fork and branch" workflow, using the following steps:

1. Start by navigating to the <a href="https://github.com/ALX-SE-Algorithmia/ALX-SE-Algorithmia.github.io/" target="_blank">GitHub Repo</a>.

2. Check out the "Issues" tab. Click the link below:
     - <a href="https://github.com/ALX-SE-Algorithmia/ALX-SE-Algorithmia.github.io/issues" target="_blank">ALX-SE-Algorithmia.github.io/issues</a>

3. For the Issues, you must have been assigned to work on an issue, with your teammates. If you haven't but would like to, simply comment under the preferred issue.

4. Start working on your issue with your team as soon as possible, and within the timeline for the deadline. You can follow the steps below to do so:

5. **Fork the forked repository for your team:** As the team lead or an external collaborator, you will need to fork the main repository. You can do this by navigating to the <a href="https://github.com/ALX-SE-Algorithmia/ALX-SE-Algorithmia.github.io/" target="_blank">GitHub Repo</a>, and click on the "Fork" button. This creates a copy of the repository under your GitHub account. Use the link below:
    - Fork this repository: <a href="https://github.com/ALX-SE-Algorithmia/ALX-SE-Algorithmia.github.io/fork" target="_blank">Click here</a>

6. **Send out collaboration invitations:** After forking the repo, send out GitHub Collaboration invitations to the people you were assigned to work with, on the assigned GitHub issue.

7. **Clone the Forked Repository:** Once you have forked the repository, clone it to your local machine using the `git clone` command. This creates a local copy of the repository that you can work with.
   ```
   git clone <your-forked-repo-url>
   ```

8. **Add the Original Repository as a Remote:** To keep your forked repository in sync with the original repository, you need to add the original repository as a remote. Navigate to the cloned repository on your local machine using the `cd` command, and then add the remote using the `git remote` command:
   ```
   cd <cloned-repo-folder>
   git remote add upstream https://github.com/ALX-SE-Algorithmia/ALX-SE-Algorithmia.github.io
   ```

9. **Create a New Branch:** Before making any changes, create a new branch in your local repository. This helps keep your changes isolated and organized. Use the `git branch` command followed by the branch name to create a new branch:
   ```
   git branch <branch-name>
   ```
   Kindly note that `<branch-name` should be your GitHub username. E.g: `algorithmiase`

10. **Switch to the New Branch:** Switch to the newly created branch using the `git checkout` command:
   ```
   git checkout <branch-name>
   ```

11. **Make Changes and Commit:** Make the necessary changes to the codebase in your local repository. Once you have made the desired changes, stage the changes using `git add` and commit them using `git commit`:
   ```
   git add fileName
   git commit -m "Descriptive commit message"
   ```
**Please ensure that your commit messages are very professional and are also descriptive, as we have learned in the ALX SE program. This is of high importance, so as to aid smooth and steady collaboration.**

12. **Push Changes to Your Fork:** Once you're done collaborating on the solution as a team, push the changes from your local branch to the branch of the forked repository on the remote server:
   ```
   git push origin <branch-name>
   ```

13. **Create a Pull Request:** Go to your forked repository on the hosting platform (e.g., GitHub), switch to the branch you just pushed, and click on the "New Pull Request" button. This will allow you to submit your changes to the original repository for review.
**When making pull requests, it is also important that your messages and descriptions are straightforward, and contain a description of your contribution, as in the <a href="https://github.com/ALX-SE-Algorithmia/Demo-Project/" target="_blank">Demo Project</a>. This is extra-important.
Tag the Code Review team, to notify them that you are finished with the issue you have been assigned to fix.** <br>
You tag the Code Review Team by typing: `@ALX-SE-Algorithmia/code-reviewing-team`

14. Wait for your pull request to be merged.

15. Once your PR has been merged, you need to sync your forked repository with the changes made in the original repository. To do this, fetch the changes from the original repository using the remote you added earlier and then merge those changes into your local branch:
   ```
   git fetch upstream
   git merge upstream/main  # or upstream/master for older conventions
   ```

   This will update your local branch with the latest changes from the original repository.

By following these steps, you can effectively collaborate on our Static GitHub Website.



#### Need More Clarifications?
- Here's a <strong><em><a href="https://youtu.be/Qeibe59f72s" target="_blank">YouTube Video</a></em></strong>. Hope it helps!

#### Useful Links"
+ <a href="https://docs.google.com/document/d/1xyfMAVnIS_wzdov7WCAJqiysbiDK9EemSrmUql16BF4/edit">Static Website Collaboration</a>
+ <a href="https://www.figma.com/proto/dZE0hWhNqcgolmITw5KUKV/Algorithmia-SE-Website?type=design&node-id=541-379&t=mSpiguRB4NRl4hQ1-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=34%3A488" target="_blank">Home Page (Figma Prototype)</a>
+ <a href="https://www.figma.com/proto/dZE0hWhNqcgolmITw5KUKV/Algorithmia-SE-Website?type=design&node-id=68-50&t=O8rGPIFi2zdg1u11-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=541%3A379&mode=design" target="_blank">Events Page (Figma Prototype)</a>
+ <a href="https://www.figma.com/proto/dZE0hWhNqcgolmITw5KUKV/Algorithmia-SE-Website?type=design&node-id=26-51&t=lrwFyeZhwBIg7MNw-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=541%3A379&mode=design" target="_blank">Projects Page (Figma Prototype)</a>
+ <a href="https://www.figma.com/proto/dZE0hWhNqcgolmITw5KUKV/Algorithmia-SE-Website?type=design&node-id=217-149&t=QYinztsDNlaHi6Xl-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=541%3A379&mode=design" target="_blank">Blogs Page (Figma Prototype)</a>

+ <a href="https://docs.google.com/document/d/1GWltuULw7BjHkrT66N243f6Uak5guNJD_N154PZtqvA/edit?usp=sharing" target="_blank">Google Doc (Website Details)</a>
<!-- + <a href="https://docs.google.com/document/d/1cYYwSZkB4SAw22hN7YMHBtFbSnkbRRjBYHuB1v4SE6o/edit?usp=sharing">Home Page</a> -->
  <!--
  https://drive.google.com/file/d/1fHZAPNNHwp8ia0u0RhnJGwV8DOATmxeh/view?usp=drive_link
  https://drive.google.com/file/d/1INIqvF7uHbfh2QO30lyb65addtt_iLht/view?usp=drive_link
  -->
