# How to Contribute

1. Create a branch off of master with a simple name (ex. NewShaderPostBlur)
2. Each commit to the branch should contain an abbreviation of the name
   (ex. `git commit -m "PostBlur: Added variable for blur range."`).
   Not all commit messages have to be this way but it helps tracking
   commits when the codebase gets really large.
3. The new code doesn't have to be completely commented but it should be
   commented to help with maintenance and checking pull requests.
4. The new code should be formatted similar to the current formatting.
   Do not run an auto-formatter on the current code in the codebase.
   The math in the codebase has been formatted for readability.
5. If possible unit-tests should be added but because of the graphical
   nature of this code the new code could be simply demonstrated
   with an example.
6. The code may contain `TODO`s but should have the follow up branches
   defined. This may include follow up branches for commenting,
   adding examples or unit-tests, or fixes to know shortcuts or issues.
7. The pull request (PR) needs to have the branch in it's title.
   And the body should be similar to the following:
   ```
    ### Feature, Bug Fix, or Improvement
    (A summary of the feature, steps to reproduce the bug,
    or a discription of the improvement.)

    ### Implementation
    (A list of all the changes made.)

    ### +10 / QA
    (The list describing the steps to demonstrate the fix.)

    ### Unit-tests
    (A description of what tests or examples were made, or why
    no tests or examples were created.)
   ```
8. The PR must get one code review and one QA to be merged into master
   The code review will add a +1 into the comments of the PR.
   The code review must check commenting, style, and consistency with
   designs. The +10 / QA must also code review but then also checkout
   the branch and run the given `+10 / QA` steps. Because of how many
   people are currently working on the project only a `+10` is required
   if a `+11` isn't possible. The `+10` should come from one of the
   codebase managers.
9. If the code doesn't pass or has a merge conflict then the PR's
   title should have `[WIP]` added to the front of the title
   until the code is ready to go back into PR.
10. Also note that this list is subject to change as new issues
    are revealed and discovered.
