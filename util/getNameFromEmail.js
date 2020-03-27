import { startCase } from 'lodash'

export default (email) => {
  const replacedEmail = email.replace(/@.*$/, '')
  return startCase(replacedEmail !== email ? replacedEmail : email)
}
