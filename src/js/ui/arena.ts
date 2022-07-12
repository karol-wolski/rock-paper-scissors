const arena = () => {
  const template = document.querySelector('#arena-template') as HTMLTemplateElement
  const cloneTemplate = template.content.cloneNode(true) as HTMLElement
  return cloneTemplate
}

export default arena
