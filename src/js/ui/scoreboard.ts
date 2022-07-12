const scoreboard = () => {
  const template = document.querySelector('#scoreboard-template') as HTMLTemplateElement
  const cloneTemplate = template.content.cloneNode(true) as HTMLElement
  return cloneTemplate
}

export default scoreboard
