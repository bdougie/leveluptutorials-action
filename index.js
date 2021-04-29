const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {
  const response = await tools.github.issues.addAssignees({
    owner: tools.context.owner,
    repo: tools.context.repo,
    issue_number: tools.context.issue_number,
    assignees: [tools.context.actor] 
  });

  tools.exit.success('We did it!')
})
