const buttonsWithSymbols = () => {
  const template = document.querySelector('#btns-with-symbol-template') as HTMLTemplateElement
  const cloneTemplate = template.content.cloneNode(true) as HTMLElement
  return cloneTemplate
}

export default buttonsWithSymbols
