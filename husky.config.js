module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn lint:stylelint',
    'pre-push': 'yarn lint:stylelint'
  }
}
