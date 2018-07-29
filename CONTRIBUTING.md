# How to Contribute

1. New code doesn't have to be completely commented but it should be
   commented to help with maintenance and checking pull requests

2. New code should be formatted similar to the current formatting.
   **Do not** run an auto-formatter on the current code in the codebase.
   The math in the codebase has been formatted for readability

3. If possible unit-tests should be added but because of the graphical
   nature of this code the new code could be simply demonstrated with an example

4. New code may contain `TODO`s but should have the follow up branches
   defined. This may include follow up branches for commenting,
   adding examples or unit-tests, or fixes to know shortcuts or issues.

5. The pull request (PR) should follow the [template](/PULL_REQUEST_TEMPLATE)

6. The PR must get one code review and one code testing to be merged into master.
   - The code review must check commenting, style, and consistency with designs
   - The code testing must also code review but then also checkout
     the branch and run the given testing steps
   - This means normally at least two code reviews but because of how many
     people are currently working on this project only one code review is required.
     The code testing should come from one of the codebase managers
     or someone familiar with the code

7. If the code doesn't pass or has a merge conflict then the PR
   should be labelled with `WIP` until the code is ready to go back into CR.
   PR's can also be create prior to needed review to help view the changes while
   in progress, these should also be labelled with `WIP`

8. Regarless of the number of external contributions this project is owned by
   SnowGremlin. External contibutions are strongly encouraged and desired.
   The protection of SnowGremlin LLC is extended to any contributor who has
   had code properly reviewed and merged into it

9. This list is subject to change as new issues are revealed and discovered
   or the number of developers working on projects change
